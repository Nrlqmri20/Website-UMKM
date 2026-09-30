import { config, waLink, mailLink, socialLinks } from "./config.js";
import { brand, routes } from "./data.js";
import { esc } from "./ui.js";

const STORAGE_KEY = "cc-theme";

const store = {
  get() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  },
  set(value) {
    try {
      if (value) localStorage.setItem(STORAGE_KEY, value);
      else localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* penyimpanan diblokir, tema tetap aktif di halaman ini */
    }
  },
};

const prefersDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;

  const label = document.querySelector("[data-theme-label]");
  if (label) label.textContent = theme === "dark" ? "Terang" : "Gelap";

  document.querySelectorAll("[data-theme-toggle]").forEach((node) => {
    node.setAttribute(
      "aria-label",
      theme === "dark" ? "Beralih ke tema terang" : "Beralih ke tema gelap",
    );
  });

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = theme === "dark" ? "#0b1220" : "#f8fafc";
};

const brandMarkup = () => `
  <a class="brand" data-route href="/" aria-label="${esc(config.brand)}, ke halaman utama">
    <span class="brand__mark" aria-hidden="true">${esc(brand.mark)}</span>
    <span class="brand__text">
      <span class="brand__name">${esc(brand.name)}</span>
      <span class="brand__sub">${esc(brand.suffix)}</span>
    </span>
  </a>
`;

const navMarkup = (activeId) => `
  <nav class="nav" id="site-nav" aria-label="Navigasi utama">
    <ul class="nav__list">
      ${routes
        .map(
          (route) =>
            `<li><a class="nav__link" data-route href="/${route.path}"${
              route.id === activeId ? ' aria-current="page"' : ""
            }>${esc(route.label)}</a></li>`,
        )
        .join("")}
    </ul>
  </nav>
`;

const actionsMarkup = () => `
  <div class="header__actions">
    <button class="theme-toggle" type="button" data-theme-toggle aria-label="Beralih ke tema gelap">
      <span data-theme-label>Gelap</span>
    </button>
    <a class="btn btn--primary" data-route href="/contact">Konsultasi Gratis</a>
    <button class="burger" type="button" data-burger aria-expanded="false" aria-controls="site-nav" aria-label="Buka menu navigasi">
      <span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>
    </button>
  </div>
`;

const footerContact = () => {
  const items = [`<a href="${esc(mailLink())}">${esc(config.email)}</a>`];

  if (config.waReady) {
    items.push(`<a href="${esc(waLink())}">WhatsApp</a>`);
  }

  socialLinks().forEach(([label, href]) => {
    items.push(`<a href="${esc(href)}" rel="me noopener">${esc(label)}</a>`);
  });

  return items.join("");
};

const footerMarkup = () => `
  <div class="shell">
    <div class="footer__grid">
      <div>
        ${brandMarkup()}
        <p class="footer__blurb">${esc(config.tagline)}</p>
      </div>
      <div>
        <p class="footer__label">Halaman</p>
        <div class="footer__links">
          ${routes.map((route) => `<a data-route href="/${route.path}">${esc(route.label)}</a>`).join("")}
        </div>
      </div>
      <div>
        <p class="footer__label">Layanan</p>
        <div class="footer__links">
          <a data-route href="/services">Personal portfolio</a>
          <a data-route href="/services">Website UMKM</a>
          <a data-route href="/services">Website maintenance</a>
        </div>
      </div>
      <div>
        <p class="footer__label">Kontak</p>
        <div class="footer__links">${footerContact()}</div>
      </div>
    </div>
    <div class="footer__base">
      <span>&copy; ${new Date().getFullYear()} ${esc(config.brand)}. Hak cipta dilindungi.</span>
      <span>${esc(config.city)}, Indonesia</span>
    </div>
  </div>
`;

export const mountChrome = () => {
  const header = document.querySelector("[data-header]");
  const footer = document.querySelector("[data-footer]");

  if (header) {
    header.outerHTML = `<header class="header"><div class="shell header__inner" data-header-inner></div></header>`;
  }

  if (footer) {
    footer.outerHTML = `<footer class="footer">${footerMarkup()}</footer>`;
  }
};

export const paintHeader = (activeId) => {
  const inner = document.querySelector("[data-header-inner]");
  if (!inner) return;

  inner.innerHTML = `${brandMarkup()}${navMarkup(activeId)}${actionsMarkup()}`;
  bindChrome();
};

const bindTheme = () => {
  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(next);
      store.set(next);
    });
  });
};

const bindMenu = () => {
  const burger = document.querySelector("[data-burger]");
  const nav = document.getElementById("site-nav");
  if (!burger || !nav) return;

  const setOpen = (open) => {
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute(
      "aria-label",
      open ? "Tutup menu navigasi" : "Buka menu navigasi",
    );
    nav.classList.toggle("is-open", open);
  };

  burger.addEventListener("click", () => {
    setOpen(burger.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && burger.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      burger.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) setOpen(false);
  });
};

const bindChrome = () => {
  bindTheme();
  bindMenu();
};

export const initTheme = () => {
  const saved = store.get();
  applyTheme(saved === "dark" || saved === "light" ? saved : prefersDark() ? "dark" : "light");
  bindTheme();
};

export { config };
