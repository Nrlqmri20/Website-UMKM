// File ini dibuat otomatis oleh build-config.mjs dari file .env.
// Jangan diedit langsung. Ubah .env lalu jalankan: node build-config.mjs

export const config = {
  "brand": "CodeCraft Digital",
  "tagline": "Bantu bisnis dan personal brand tampil lebih profesional di dunia digital.",
  "city": "Banda Aceh",
  "baseUrl": "https://codecraft.example",
  "email": "nurulqamari20@gmail.com",
  "waNumber": "62852177178789",
  "social": {
    "instagram": "https://www.instagram.com/nrlqmr__/",
    "tiktok": "https://www.tiktok.com/@nrlqmr___",
    "linkedin": ""
  },
  "leadMessage": "Halo CodeCraft Digital, saya mau konsultasi website untuk usaha saya.",
  "waReady": true
};

export const waLink = (message = config.leadMessage) => {
  if (!config.waReady) return "";
  const digits = config.waNumber.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
};

export const mailLink = (subject = "Konsultasi website") =>
  `mailto:${config.email}?subject=${encodeURIComponent(subject)}`;

export const socialLinks = () =>
  [
    ["Instagram", config.social.instagram],
    ["TikTok", config.social.tiktok],
    ["LinkedIn", config.social.linkedin],
  ].filter(([, href]) => Boolean(href));
