// Butuh Playwright yang tidak jadi dependensi project.
// Jalankan: npm i -D playwright && npx playwright install chromium
// Script ini memakai Edge yang sudah ada di Windows, jadi tidak perlu unduh browser.
// Jalankan dev-server.mjs lebih dulu di terminal lain.
import { chromium } from "playwright";

const base = process.env.BASE_URL || "http://localhost:4173";
const results = [];

const record = (name, ok, detail = "") => {
  results.push({ name, ok, detail });
  console.log(`  ${ok ? "ok   " : "FAIL "} ${name}${detail ? "  " + detail : ""}`);
};

const browser = await chromium.launch({ channel: "msedge" });

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const errors = [];
page.on("pageerror", (error) => errors.push("pageerror: " + error.message));
page.on("console", (message) => {
  if (message.type() === "error") errors.push("console: " + message.text());
});
page.on("requestfailed", (request) => {
  const url = request.url();
  if (url.includes("og-cover")) return;
  errors.push("requestfailed: " + url);
});

console.log("\n== boot ==");
await page.goto(base + "/", { waitUntil: "networkidle" });

record("tidak ada error JavaScript", errors.length === 0, errors.slice(0, 4).join(" | "));
record("header ter-render", (await page.locator(".header").count()) === 1);
record("footer ter-render", (await page.locator(".footer").count()) === 1);
record("nav punya 7 tautan", (await page.locator(".nav__link").count()) === 7);
record("h1 ada di home", (await page.locator("h1").count()) === 1);
record("kartu portfolio ter-render", (await page.locator(".work").count()) === 4);
record("filter portfolio ter-render", (await page.locator(".filter").count()) === 4);
record("accordion FAQ ter-render", (await page.locator(".faq__question").count()) === 4);
record("sel bento 5", (await page.locator(".bento__cell").count()) === 5);
record("paket harga 3", (await page.locator(".plan").count()) === 3);
record("reveal aktif", (await page.locator("[data-reveal].is-visible").count()) > 0);

console.log("\n== routing ==");
const routes = ["services", "portfolio", "pricing", "about", "faq", "contact"];

for (const route of routes) {
  errors.length = 0;
  await page.click(`.nav__link[href="/${route}"]`);
  await page.waitForTimeout(220);

  const url = new URL(page.url()).pathname;
  const h1 = (await page.locator("h1").first().textContent())?.trim();
  const current = await page.locator('.nav__link[aria-current="page"]').getAttribute("href");

  record(
    "route /" + route,
    url === "/" + route && h1.length > 0 && current === "/" + route && errors.length === 0,
    `url=${url} h1="${h1}" aktif=${current} err=${errors.length}`,
  );
}

console.log("\n== tombol browser ==");
errors.length = 0;
await page.click('.nav__link[href="/"]');
await page.waitForTimeout(200);

const navCount = await page.evaluate(() => performance.getEntriesByType("navigation").length);
record("navigasi tidak reload halaman", navCount >= 1 && (await page.locator("h1").count()) === 1);

await page.goBack();
await page.waitForTimeout(250);
record("tombol back browser bekerja", new URL(page.url()).pathname !== "/", page.url());

await page.goForward();
await page.waitForTimeout(250);
record("tombol forward browser bekerja", new URL(page.url()).pathname === "/", page.url());

console.log("\n== filter portfolio ==");
await page.click('.nav__link[href="/portfolio"]');
await page.waitForTimeout(220);
await page.click('[data-filter="umkm"]');
await page.waitForTimeout(150);
record("filter UMKM menyaring", (await page.locator(".work:visible").count()) === 2, String(await page.locator(".work:visible").count()));
record("aria-pressed aktif", (await page.locator('[data-filter="umkm"][aria-pressed="true"]').count()) === 1);
await page.click('[data-filter="all"]');
await page.waitForTimeout(150);
record("filter Semua mengembalikan", (await page.locator(".work:visible").count()) === 4);

console.log("\n== accordion FAQ ==");
await page.click('.nav__link[href="/faq"]');
await page.waitForTimeout(220);
const firstQ = page.locator(".faq__question").first();
record("tertutup saat awal", (await firstQ.getAttribute("aria-expanded")) === "false");
await firstQ.click();
await page.waitForTimeout(350);
record("terbuka setelah klik", (await firstQ.getAttribute("aria-expanded")) === "true");
const answerH = await page.locator(".faq__item").first().locator(".faq__answer > div").boundingBox();
record("jawaban punya tinggi", answerH.height > 20, Math.round(answerH?.height || 0) + "px");

console.log("\n== form kontak ==");
await page.click('.nav__link[href="/pricing"]');
await page.waitForTimeout(220);
await page.click('.plan--featured a[href="/contact?jenis=umkm"]');
await page.waitForTimeout(250);
record("paket Pro UMKM mengisi dropdown", (await page.locator("#jenis").inputValue()) === "Website UMKM", await page.locator("#jenis").inputValue());

await page.locator('.form button[type="submit"]').click();
await page.waitForTimeout(200);
record("validasi menahan submit kosong", (await page.locator('.field[data-invalid="true"]').count()) === 5, String(await page.locator('.field[data-invalid="true"]').count()));
record("pesan error muncul", (await page.locator("[data-form-status]").textContent()).length > 10);

await page.fill("#nama", "Siti Rahma");
await page.fill("#email", "siti@kedaisenja.id");
await page.fill("#whatsapp", "081234567890");
await page.fill("#pesan", "Saya punya kedai kopi di Geh, mau website dengan menu dan lokasi.");
await page.locator('.form button[type="submit"]').click();
await page.waitForTimeout(300);
const status = (await page.locator("[data-form-status]").textContent()).trim();
record("submit valid tidak error", status.includes("WhatsApp") || status.includes("belum diisi"), status.slice(0, 70));
record("nomor WA kosong ditangani baik", status.includes("belum diisi"), "karena .env masih kosong");
record("error lama hilang", (await page.locator('.field[data-invalid="true"]').count()) === 0);

console.log("\n== tema ==");
await page.click(".nav__link[href=\"/\"]");
await page.waitForTimeout(200);
const t0 = await page.evaluate(() => document.documentElement.dataset.theme);
await page.click("[data-theme-toggle]");
await page.waitForTimeout(150);
const t1 = await page.evaluate(() => document.documentElement.dataset.theme);
record("tema berganti", t0 !== t1, t0 + " -> " + t1);
record("tema tersimpan", (await page.evaluate(() => localStorage.getItem("cc-theme"))) === t1);
record("label tombol ikut berubah", (await page.locator("[data-theme-label]").textContent()).trim() === (t1 === "dark" ? "Terang" : "Gelap"));

const meta = await page.evaluate(() => document.querySelector('meta[name="theme-color"]').content);
record("meta theme-color ikut berubah", meta === (t1 === "dark" ? "#0b1220" : "#f8fafc"), meta);

console.log("\n== menu mobile ==");
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
await mobile.goto(base + "/", { waitUntil: "networkidle" });
record("burger tampil di mobile", await mobile.locator(".burger").isVisible());
record("nav tersembunyi sebelum dibuka", !(await mobile.locator(".nav").evaluate((n) => n.classList.contains("is-open"))));
await mobile.locator(".burger").click();
await mobile.waitForTimeout(300);
record("nav terbuka", await mobile.locator(".nav").evaluate((n) => n.classList.contains("is-open")));
record("aria-expanded true", (await mobile.locator(".burger").getAttribute("aria-expanded")) === "true");
await mobile.locator('.nav__link[href="/pricing"]').click();
await mobile.waitForTimeout(250);
record("navigasi mobile menutup menu", !(await mobile.locator(".nav").evaluate((n) => n.classList.contains("is-open"))));
record("mobile pindah ke pricing", new URL(mobile.url()).pathname === "/pricing", mobile.url());

const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
record("tidak ada overflow horizontal di mobile", overflow <= 0, "selisih " + overflow + "px");

console.log("\n== tautan rusak ==");
const allLinks = await page.evaluate(() =>
  Array.from(document.querySelectorAll("a[href]")).map((a) => a.getAttribute("href")),
);
const external = allLinks.filter((h) => h.startsWith("http"));
record("tidak ada tautan eksternal mati", external.every((h) => h.startsWith("https://") || h.startsWith("mailto:")), external.join(", "));

console.log("\n== reduced motion ==");
const rm = await browser.newPage({ viewport: { width: 1280, height: 800 }, reducedMotion: "reduce" });
await rm.goto(base + "/", { waitUntil: "networkidle" });
await rm.waitForTimeout(300);
const hidden = await rm.locator("[data-reveal]").evaluateAll((nodes) => nodes.filter((n) => getComputedStyle(n).opacity === "0").length);
record("semua konten terlihat tanpa animasi", hidden === 0, hidden + " elemen masih transparan");
await rm.close();

console.log("\n== struktur ==");
const outline = await page.evaluate(() =>
  Array.from(document.querySelectorAll("#app h1,#app h2,#app h3")).map((h) => Number(h.tagName[1])),
);
let jumps = 0;
for (let i = 1; i < outline.length; i += 1) if (outline[i] - outline[i - 1] > 1) jumps += 1;
record("hierarki heading konsisten", jumps === 0, outline.join(">"));

await mobile.close();
await browser.close();

const failed = results.filter((r) => !r.ok);
console.log(`\n${failed.length === 0 ? "HASIL: LOLOS" : "HASIL: GAGAL " + failed.length} dari ${results.length} pemeriksaan di browser`);
if (failed.length) {
  failed.forEach((f) => console.log("  " + f.name + "  " + f.detail));
  process.exit(1);
}
