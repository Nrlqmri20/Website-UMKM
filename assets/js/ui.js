const ENTITIES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export const esc = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (char) => ENTITIES[char]);

export const list = (items, className = "") =>
  `<ul${className ? ` class="${esc(className)}"` : ""}>${items
    .map((item) => `<li>${item}</li>`)
    .join("")}</ul>`;

export const checklist = (items) =>
  `<ul class="checklist">${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;

export const tags = (items) =>
  `<ul class="tags">${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;

export const figure = (src, alt, caption) => `
  <figure class="figure">
    <img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async" width="1000" height="750">
    ${caption ? `<figcaption>${esc(caption)}</figcaption>` : ""}
  </figure>
`;

export const sectionHead = (title, lede = "", eyebrow = "") => `
  <div class="section__head" data-reveal>
    ${eyebrow ? `<span class="eyebrow">${esc(eyebrow)}</span>` : ""}
    <h2>${esc(title)}</h2>
    ${lede ? `<p class="lede">${esc(lede)}</p>` : ""}
  </div>
`;

export const ctaBand = ({ title, body, secondary }) => `
  <div class="cta" data-reveal>
    <h2>${esc(title)}</h2>
    <p>${esc(body)}</p>
    <div class="cta__actions">
      <a class="btn btn--primary btn--lg" data-route href="/contact">Konsultasi Gratis</a>
      ${secondary ? `<a class="btn btn--ghost btn--lg" data-route href="/${esc(secondary.path)}">${esc(secondary.label)}</a>` : ""}
    </div>
  </div>
`;

export const crumbs = (label) => `
  <nav class="crumbs" aria-label="Remah roti">
    <a data-route href="/">Home</a> <span>/</span> <span>${esc(label)}</span>
  </nav>
`;

export const pageHead = (label, heading) => `
  <section class="page-head">
    <div class="shell">
      ${crumbs(label)}
      <h1 class="page-head__title">${esc(heading.title)}</h1>
      <p class="page-head__sub">${esc(heading.sub)}</p>
    </div>
  </section>
`;

export const notice = (text) => `<p class="notice">${esc(text)}</p>`;
