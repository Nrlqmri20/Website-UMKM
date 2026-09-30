import { readFileSync, existsSync } from "node:fs";
import { config, waLink, mailLink, socialLinks } from "./assets/js/config.js";
import { routes, pageMeta, faqs, portfolio, services, plans } from "./assets/js/data.js";
import { views } from "./assets/js/views.js";

const failures = [];
const warnings = [];

const pass = (name) => console.log("  ok    " + name);
const fail = (name, detail) => {
  console.log("  FAIL  " + name + (detail ? "  " + detail : ""));
  failures.push(name);
};
const warn = (name, detail) => {
  console.log("  warn  " + name + (detail ? "  " + detail : ""));
  warnings.push(name);
};

const check = (name, ok, detail) => (ok ? pass(name) : fail(name, detail));

const stripTags = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

console.log("\n== config dari .env ==");
check("config.js terbaca", Boolean(config.brand && config.email && config.baseUrl));
check("baseUrl tanpa garis miring akhir", !config.baseUrl.endsWith("/"), config.baseUrl);
check("email valid", /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(config.email), config.email);
if (!config.waReady) {
  warn("CC_WA_NUMBER kosong", "tombol WhatsApp dialihkan ke halaman kontak");
} else {
  check("nomor WhatsApp format internasional", !config.waNumber.startsWith("0"), config.waNumber);
  check("waLink tersusun", waLink("tes").startsWith("https://wa.me/"));
  check("waLink meng-encode pesan", waLink("halo dunia").includes("%20"));
}
check("mailLink tersusun", mailLink().startsWith("mailto:"));
check("socialLinks berupa array", Array.isArray(socialLinks()));

console.log("\n== konfigurasi dari .env terpakai ==");

const sitemap = readFileSync("sitemap.xml", "utf8");
const robots = readFileSync("robots.txt", "utf8");

check("baseUrl dipakai di sitemap", sitemap.includes(config.baseUrl + "/pricing"), config.baseUrl);
check("sitemap punya semua route", routes.every((r) => sitemap.includes(config.baseUrl + "/" + r.path)));
check("baseUrl dipakai di robots", robots.includes(config.baseUrl + "/sitemap.xml"));
check("tidak ada domain placeholder di sitemap", !/codecraft\.example/.test(sitemap) || config.baseUrl.includes("codecraft.example"));

const codeSources = ["app", "layout", "router", "views", "ui", "data", "contact", "portfolio", "faq", "reveal"]
  .map((name) => readFileSync(`assets/js/${name}.js`, "utf8"))
  .join("\n");

const usedFields = new Set([...codeSources.matchAll(/config\.(\w+)/g)].map((m) => m[1]));
const fieldNames = Object.keys(config);

check("baseUrl benar-benar dibaca browser", usedFields.has("baseUrl"));
check(
  "setiap field config punyaConsumers",
  fieldNames.every((f) => usedFields.has(f) || f === "social" || configSourceUses(f)),
  fieldNames.filter((f) => !usedFields.has(f) && f !== "social" && !configSourceUses(f)),
);

function configSourceUses(field) {
  const src = readFileSync("assets/js/config.js", "utf8");
  return src.includes("config." + field);
}

console.log("\n== keamanan konfigurasi ==");

const ignore = existsSync(".gitignore") ? readFileSync(".gitignore", "utf8") : "";
check(".env ada di .gitignore", /^\.env$/m.test(ignore));
check("node_modules diabaikan", /node_modules/.test(ignore));
check(
  ".env.example tetap ikut commit",
  existsSync(".env.example"),
);

const allowedEnvKeys = new Set([
  "CC_BRAND",
  "CC_EMAIL",
  "CC_BASE_URL",
  "CC_CITY",
  "CC_TAGLINE",
  "CC_WA_NUMBER",
  "CC_INSTAGRAM",
  "CC_TIKTOK",
  "CC_LINKEDIN",
  "CC_LEAD_MESSAGE",
]);

const exampleKeys = [...readFileSync(".env.example", "utf8").matchAll(/^(CC_\w+)=/gm)].map((m) => m[1]);
check(
  "semua kunci .env.example dikenal",
  exampleKeys.every((key) => allowedEnvKeys.has(key)),
  exampleKeys.filter((key) => !allowedEnvKeys.has(key)),
);

const buildSource = readFileSync("build-config.mjs", "utf8");
const unmapped = [...allowedEnvKeys].filter((key) => !buildSource.includes(key));
check("build-config memetakan semua kunci yang diizinkan", unmapped.length === 0, unmapped);

if (existsSync(".env")) {
  const liveKeys = [...readFileSync(".env", "utf8").matchAll(/^(CC_\w+)=/gm)].map((m) => m[1]);
  const unknown = liveKeys.filter((key) => !allowedEnvKeys.has(key));
  check("tidak ada kunci asing di .env", unknown.length === 0, unknown);
}

console.log("\n== isi halaman ==");

const rendered = new Map();

for (const route of routes) {
  const view = views[route.id];
  if (typeof view !== "function") {
    fail("view " + route.id + " ada", "tidak ditemukan");
    continue;
  }

  const html = view();
  rendered.set(route.id, html);

  const h1 = html.match(/<h1\b/g) || [];
  check(route.id + ": tepat satu h1", h1.length === 1, "ditemukan " + h1.length);

  check(route.id + ": tidak ada em-dash", !html.includes("\u2014") && !html.includes("\u2013"));
  check(
    route.id + ": tidak ada CJK atau Hangul",
    !/[\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/.test(html),
  );
  check(
    route.id + ": tidak ada token belum terisi",
    !/\{\{|\}\}|undefined|NaN|\[object/.test(stripTags(html)),
  );

  const levels = (html.match(/<h([1-6])\b/g) || []).map((h) => Number(h[2]));
  const skips = levels.filter((level, i) => i > 0 && level - levels[i - 1] > 1);
  check(route.id + ": heading tidak melompat", skips.length === 0, "lompat di " + JSON.stringify(skips));

  const images = html.match(/<img\b[^>]*>/g) || [];
  const noAlt = images.filter((tag) => !/\balt="/.test(tag));
  check(route.id + ": semua img punya alt", noAlt.length === 0, noAlt.length + " tanpa alt");

  const noSize = images.filter((tag) => !/width="/.test(tag) || !/height="/.test(tag));
  check(route.id + ": semua img punya width/height", noSize.length === 0, noSize.length + " tanpa dimensi");

  const hero = images.filter((tag) => /fetchpriority="high"/.test(tag));
  const lazy = images.filter((tag) => /loading="lazy"/.test(tag));
  check(
    route.id + ": gambar non-hero lazy-loaded",
    hero.length + lazy.length === images.length,
    "hero " + hero.length + ", lazy " + lazy.length + ", total " + images.length,
  );

  const links = (html.match(/data-route href="([^"]+)"/g) || []).map((tag) =>
    tag.replace(/data-route href="/, "").replace(/"$/, ""),
  );
  const badLinks = links.filter((href) => {
    const path = href.split("?")[0].replace(/^\/+/, "");
    return path !== "" && !routes.some((r) => r.path === path);
  });
  check(route.id + ": semua tautan internal valid", badLinks.length === 0, JSON.stringify(badLinks));

  check(route.id + ": ada meta title", Boolean(pageMeta[route.id]?.title));
  check(route.id + ": ada meta description", (pageMeta[route.id]?.description || "").length > 40);
}

console.log("\n== komponen diulang ==");

const home = rendered.get("home") || "";
const servicesCount = (home.match(/class="service[ "]/g) || []).length;
check("home: 3 kartu layanan", servicesCount === 3, "ditemukan " + servicesCount);

const bentoCount = (home.match(/class="bento__cell/g) || []).length;
check("home: bento 5 sel", bentoCount === 5, "ditemukan " + bentoCount);

const bentoVariety = (home.match(/bento__cell--(media|accent|tint)/g) || []).length;
check("bento punya minimal 3 variasi visual", bentoVariety >= 3, "ditemukan " + bentoVariety);

const stepCount = (home.match(/<li data-reveal>\s*<h3>/g) || []).length;
check("home: 5 langkah proses", stepCount >= 5, "ditemukan " + stepCount);

const planCount = (home.match(/class="plan[ "]/g) || []).length;
check("home: 3 paket harga", planCount === 3, "ditemukan " + planCount);

const eyebrowCount = (home.match(/class="eyebrow"/g) || []).length;
const sectionCount = (home.match(/<section/g) || []).length;
const eyebrowLimit = Math.ceil(sectionCount / 3);
check(
  "home: jumlah eyebrow terkendali",
  eyebrowCount <= eyebrowLimit,
  eyebrowCount + " dari " + sectionCount + " section, batas " + eyebrowLimit,
);

const families = new Set(
  (home.match(/class="(hero|rows|services|bento|works|steps|plans|quote|faq|cta)\b/g) || []).map((m) =>
    m.slice(7, -1),
  ),
);
check("home: minimal 5 keluarga layout", families.size >= 5, families.size + " keluarga");

const ctaLabels = [...home.matchAll(/class="btn[^"]*"[^>]*>([^<]{1,40})</g)].map((m) => m[1].trim());
check("home: tombol tidak lebih dari 3 kata", ctaLabels.every((label) => label.split(/\s+/).length <= 3), JSON.stringify(ctaLabels));

const intents = {
  kontak: /konsultasi|hubungi|mulai project|start/i,
  portfolio: /portfolio|project|lihat karya/i,
  harga: /harga|pricing|paket harga/i,
  pilihPaket: /pilih paket/i,
};

const intentReport = Object.entries(intents).map(([name, re]) => {
  const labels = [...new Set(ctaLabels.filter((label) => re.test(label)))];
  return { name, labels };
});

const splitIntents = intentReport.filter((entry) => entry.labels.length > 1);
check(
  "home: tiap niat punya satu label saja",
  splitIntents.length === 0,
  JSON.stringify(splitIntents),
);
console.log("        niat: " + intentReport.map((e) => e.name + "=" + e.labels.join("/")).join(", "));
check("home: tidak ada 'click here'", !/click here|klik di sini/i.test(home));

const pricePage = rendered.get("pricing") || "";
check("pricing: ada pernyataan domain dan hosting eksplisit", /domain dan hosting/i.test(pricePage));
check(
  "pricing: setiap paket punya catatan",
  (pricePage.match(/class="plan__note"/g) || []).length === plans.length,
);

const aboutPage = rendered.get("about") || "";
check("about: angka fiktif tidak diisi", /Belum diisi\./.test(aboutPage));
check("about: tidak ada klaim angka project", !/\d+\+\s*(project|klien|client)/i.test(aboutPage));

const portfolioPage = rendered.get("portfolio") || "";
check("portfolio: semua kartu punya gambar", (portfolioPage.match(/<img\b/g) || []).length >= portfolio.length);
check("portfolio: card demo diberi keterangan", /belum klien sungguhan/i.test(portfolioPage));
check("portfolio: ada pengungkapan status contoh", /bukan klien sungguhan/i.test(portfolioPage));

const testimonialFake = /—\s*(Sarah|John|Dewi|Ahmad|Budi)/i.test(home);
check("home: tidak ada testimoni rekaan", !testimonialFake);

const contactPage = rendered.get("contact") || "";
check("contact: email dari config masuk halaman", contactPage.includes(config.email));
check("contact: form punya label", (contactPage.match(/<label for=/g) || []).length >= 6);
check("contact: tidak ada placeholder sebagai label", !/<label[^>]*>\s*<\/label>/.test(contactPage));
check(
  "contact: pilihan jenis sesuai paket",
  ["Personal portfolio", "Website UMKM", "Maintenance"].every((v) => contactPage.includes(v)),
);
check("contact: tombol submit memakai label yang sama dengan CTA", contactPage.includes("Konsultasi Gratis"));

const faqPage = rendered.get("faq") || "";
check("faq: semua pertanyaan tampil", (faqPage.match(/class="faq__question"/g) || []).length === faqs.length);
check("faq: h2 tersembunyi sebelum daftar", /<h2 class="visually-hidden">/.test(faqPage));
check("home: 4 pertanyaan saja", (home.match(/class="faq__question"/g) || []).length === 4);

console.log("\n== aksesibilitas ==");
const ariaIssues = [];
for (const [id, html] of rendered) {
  (html.match(/<button\b[^>]*>/g) || []).forEach((tag) => {
    if (!/aria-expanded|aria-label|type=/.test(tag)) ariaIssues.push(id + ": " + tag.slice(0, 60));
  });
  (html.match(/<img\b[^>]*>/g) || []).forEach((tag) => {
    if (/alt=""/.test(tag)) ariaIssues.push(id + ": alt kosong");
  });
}
check("tombol punya atribut aksesibel", ariaIssues.length === 0, JSON.stringify(ariaIssues.slice(0, 3)));

console.log("");
console.log("  data: " + services.length + " layanan, " + plans.length + " paket, " + portfolio.length + " project, " + faqs.length + " pertanyaan");

if (failures.length) {
  console.log("\nHASIL: GAGAL " + failures.length + " pemeriksaan");
  process.exit(1);
}

console.log("\nHASIL: LOLOS" + (warnings.length ? " dengan " + warnings.length + " peringatan" : " tanpa peringatan"));
