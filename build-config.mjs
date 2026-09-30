import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { routes } from "./assets/js/data.js";

const root = dirname(fileURLToPath(import.meta.url));
const envPath = join(root, ".env");
const outPath = join(root, "assets", "js", "config.js");

const KEYS = [
  "CC_BRAND",
  "CC_TAGLINE",
  "CC_CITY",
  "CC_WA_NUMBER",
  "CC_EMAIL",
  "CC_INSTAGRAM",
  "CC_TIKTOK",
  "CC_LINKEDIN",
  "CC_BASE_URL",
  "CC_LEAD_MESSAGE",
];

const parseEnv = (text) => {
  const out = {};

  text.split(/\r?\n/).forEach((rawLine) => {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) return;

    const eq = line.indexOf("=");
    if (eq === -1) return;

    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    out[key] = value;
  });

  return out;
};

const hasEnvFile = existsSync(envPath);
const fromFile = hasEnvFile ? parseEnv(readFileSync(envPath, "utf8")) : {};
const fromProcess = {};

for (const key of KEYS) {
  if (process.env[key] !== undefined && process.env[key] !== "") {
    fromProcess[key] = process.env[key];
  }
}

// Environment variable proses menang, supaya Vercel dan CI bisa menimpa nilai lokal.
const env = { ...fromFile, ...fromProcess };

const required = ["CC_BRAND", "CC_EMAIL", "CC_BASE_URL"];
const missing = required.filter((key) => !env[key]);

if (missing.length) {
  console.error("Nilai wajib belum tersedia. Sumber yang dicek:");
  console.error("  1. file .env di root repository");
  console.error("  2. environment variable proses (CC_BRAND, CC_EMAIL, CC_BASE_URL)");
  console.error("");
  console.error("Yang belum diisi:");
  missing.forEach((key) => console.error("  " + key));
  console.error("");
  if (hasEnvFile) {
    console.error("File .env ada tapi nilainya kosong. Isi di .env lalu ulangi.");
  } else {
    console.error("File .env tidak ada. Untuk lokal: salin .env.example jadi .env.");
    console.error("Untuk Vercel: isi di Project Settings > Environment Variables.");
  }
  process.exit(1);
}

const cleanDigits = (value) => String(value || "").replace(/\D/g, "");
const waDigits = cleanDigits(env.CC_WA_NUMBER);
const stripSlash = (value) => String(value || "").replace(/\/+$/, "");

const config = {
  brand: env.CC_BRAND,
  tagline: env.CC_TAGLINE || "",
  city: env.CC_CITY || "",
  baseUrl: stripSlash(env.CC_BASE_URL),
  email: env.CC_EMAIL,
  waNumber: env.CC_WA_NUMBER || "",
  social: {
    instagram: env.CC_INSTAGRAM || "",
    tiktok: env.CC_TIKTOK || "",
    linkedin: env.CC_LINKEDIN || "",
  },
  leadMessage: env.CC_LEAD_MESSAGE || "Halo, saya mau konsultasi website.",
  waReady: waDigits.length >= 9,
};

const body = [
  "// File ini dibuat otomatis oleh build-config.mjs dari file .env.",
  "// Jangan diedit langsung. Ubah .env lalu jalankan: node build-config.mjs",
  "",
  "export const config = " + JSON.stringify(config, null, 2) + ";",
  "",
  "export const waLink = (message = config.leadMessage) => {",
  "  if (!config.waReady) return \"\";",
  "  const digits = config.waNumber.replace(/\\D/g, \"\");",
  "  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;",
  "};",
  "",
  "export const mailLink = (subject = \"Konsultasi website\") =>",
  "  `mailto:${config.email}?subject=${encodeURIComponent(subject)}`;",
  "",
  "export const socialLinks = () =>",
  "  [",
  "    [\"Instagram\", config.social.instagram],",
  "    [\"TikTok\", config.social.tiktok],",
  "    [\"LinkedIn\", config.social.linkedin],",
  "  ].filter(([, href]) => Boolean(href));",
  "",
].join("\n");

writeFileSync(outPath, body, "utf8");

const socialCount = Object.values(config.social).filter(Boolean).length;

const siteUrl = config.baseUrl + "/";

writeFileSync(join(root, "robots.txt"), `User-agent: *
Allow: /

Sitemap: ${config.baseUrl}/sitemap.xml
`, "utf8");

const priorities = {
  home: "1.0",
  pricing: "0.9",
  contact: "0.9",
  services: "0.8",
  portfolio: "0.8",
  faq: "0.7",
  about: "0.6",
};

const frequency = (id) => (id === "about" || id === "contact" ? "yearly" : "monthly");

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map((route) =>
    [
      "  <url>",
      `    <loc>${config.baseUrl}/${route.path}</loc>`,
      `    <changefreq>${frequency(route.id)}</changefreq>`,
      `    <priority>${priorities[route.id] || "0.5"}</priority>`,
      "  </url>",
    ].join("\n"),
  ),
  "</urlset>",
  "",
].join("\n");

writeFileSync(join(root, "sitemap.xml"), sitemap, "utf8");

const origin = (key) => {
  if (fromProcess[key] !== undefined) return "process.env";
  if (fromFile[key] !== undefined && fromFile[key] !== "") return ".env";
  return "kosong";
};

console.log("config.js dibuat");
console.log("  sumber     : " +
  (hasEnvFile ? ".env" : "tanpa .env") +
  (Object.keys(fromProcess).length ? " + process.env" : ""));
console.log("  brand      : " + config.brand + "  [" + origin("CC_BRAND") + "]");
console.log("  email      : " + config.email + "  [" + origin("CC_EMAIL") + "]");
console.log("  baseUrl    : " + config.baseUrl + "  [" + origin("CC_BASE_URL") + "]");
console.log("  whatsapp   : " + (config.waReady ? config.waNumber : "belum diisi, tombol dialihkan ke /contact") + "  [" + origin("CC_WA_NUMBER") + "]");
console.log("  social     : " + socialCount + " dari 3 terisi  [" + origin("CC_INSTAGRAM") + "]");
console.log("  robots.txt : ditulis ulang");
console.log("  sitemap.xml: ditulis ulang, " + routes.length + " route");

const empty = KEYS.filter((key) => !env[key]);
if (empty.length) {
  console.log("");
  console.log("Variabel kosong (opsional, website tetap jalan): " + empty.join(", "));
}

if (!config.waReady) {
  console.log("");
  console.log("Perhatian: CC_WA_NUMBER masih kosong.");
  console.log("Tombol WhatsApp tidak bisa membuka chat sampai nomor diisi.");
}
