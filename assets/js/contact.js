import { config } from "./config.js";

const rules = {
  nama: (value) => (value.trim().length >= 2 ? "" : "Isi nama minimal 2 huruf."),
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
      ? ""
      : "Isi email yang valid, contoh: nama@usaha.com.",
  whatsapp: (value) =>
    value.replace(/\D/g, "").length >= 9 ? "" : "Isi nomor WhatsApp minimal 9 angka.",
  jenis: (value) => (value ? "" : "Pilih jenis website dulu."),
  pesan: (value) =>
    value.trim().length >= 10 ? "" : "Ceritakan kebutuhanmu minimal 10 huruf.",
};

const labels = {
  personal: "Personal portfolio",
  umkm: "Website UMKM",
  maintenance: "Maintenance",
};

const markField = (field, message) => {
  const wrap = field.closest(".field");
  if (!wrap) return;

  wrap.dataset.invalid = message ? "true" : "false";

  const error = wrap.querySelector("[data-error]");
  if (error) error.textContent = message;
};

const composeMessage = (data) =>
  [
    `Nama: ${data.get("nama")}`,
    `Email: ${data.get("email")}`,
    `WhatsApp: ${data.get("whatsapp")}`,
    `Bisnis: ${data.get("bisnis") || "kosong"}`,
    `Jenis website: ${data.get("jenis")}`,
    `Anggaran: ${data.get("budget") || "belum ada gambaran"}`,
    "",
    String(data.get("pesan") || ""),
  ].join("\n");

export const bindForm = (root) => {
  const form = root.querySelector("[data-inquiry]");
  if (!form) return;

  const status = form.querySelector("[data-form-status]");

  const showStatus = (kind, text) => {
    if (!status) return;
    status.className = `form__status form__status--${kind}`;
    status.textContent = text;
  };

  const preselect = () => {
    const key = new URLSearchParams(window.location.search).get("jenis");
    const value = labels[key];
    const field = form.elements.jenis;

    if (!value || !field) return;

    field.value = value;
    field.closest(".field").dataset.invalid = "false";
  };

  const validate = (name) => {
    const field = form.elements[name];
    if (!field) return null;

    const message = rules[name](field.value);
    markField(field, message);

    return message ? field : null;
  };

  Object.keys(rules).forEach((name) => {
    const field = form.elements[name];
    if (!field) return;

    field.addEventListener("blur", () => validate(name));
    field.addEventListener("input", () => {
      if (field.closest(".field")?.dataset.invalid === "true") validate(name);
    });
    field.addEventListener("change", () => {
      if (field.tagName === "SELECT") validate(name);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let firstBad = null;
    Object.keys(rules).forEach((name) => {
      const bad = validate(name);
      if (bad && !firstBad) firstBad = bad;
    });

    if (firstBad) {
      showStatus("error", "Ada beberapa isian yang belum benar. Perbaiki yang ditandai merah.");
      firstBad.focus();
      return;
    }

    const data = new FormData(form);
    const message = composeMessage(data);

    if (!config.waReady) {
      showStatus(
        "error",
        "Nomor WhatsApp CodeCraft belum diisi, jadi pesan belum bisa dikirim otomatis. Salin isianmu lalu kirim ke " +
          config.email +
          ".",
      );
      return;
    }

    const digits = config.waNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${digits}?text=${encodeURIComponent(message)}`, "_blank", "noopener");

    showStatus("ok", "Terbuka WhatsApp dengan pesan yang sudah terisi. Tinggal tekan kirim.");
    form.reset();
  });

  preselect();
};
