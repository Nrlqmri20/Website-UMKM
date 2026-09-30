import { config } from "./config.js";
import {
  brand,
  headings,
  valueProps,
  services,
  reasons,
  process,
  plans,
  domainNotice,
  prepareList,
  portfolio,
  portfolioFilters,
  portfolioDisclosure,
  faqs,
  values,
  facts,
  aboutCopy,
  testimonial,
  ctaBand,
} from "./data.js";
import {
  esc,
  list,
  checklist,
  tags,
  figure,
  sectionHead,
  ctaBand as cta,
  pageHead,
  notice,
} from "./ui.js";

const workCard = (item) => `
  <article class="work" data-category="${esc(item.category)}" data-reveal>
    <div class="work__media">
      <img src="${esc(item.image)}" alt="${esc(item.imageAlt)}" loading="lazy" decoding="async" width="1200" height="900">
    </div>
    <div class="work__body">
      <span class="work__tag">${esc(item.categoryLabel)}</span>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.summary)}</p>
      ${
        item.liveUrl
          ? `<a class="link-arrow work__link" href="${esc(item.liveUrl)}" target="_blank" rel="noopener">Buka website</a>`
          : `<span class="work__note">${
              item.demo
                ? "Contoh project untuk pemodelan, belum klien sungguhan."
                : "Link website belum dipublikasikan."
            }</span>`
      }
    </div>
  </article>
`;

const filterRow = () =>
  portfolioFilters
    .map(
      (filter, index) =>
        `<button class="filter" type="button" data-filter="${esc(filter.id)}" aria-pressed="${index === 0}">${esc(filter.label)}</button>`,
    )
    .join("");

const worksBlock = () => `
  <div class="filters" data-filters>${filterRow()}</div>
  <div class="works" data-works>${portfolio.map(workCard).join("")}</div>
  <p class="visually-hidden" data-works-status role="status" aria-live="polite"></p>
`;

const faqBlock = (limit) => {
  const source = limit ? faqs.slice(0, limit) : faqs;

  const items = source
    .map(
      (item, index) => `
    <div class="faq__item">
      <h3>
        <button class="faq__question" type="button" id="faq-q-${index}" aria-expanded="false" aria-controls="faq-a-${index}">
          <span>${esc(item.q)}</span>
          <span class="faq__sign" aria-hidden="true"></span>
        </button>
      </h3>
      <div class="faq__answer" id="faq-a-${index}" role="region" aria-labelledby="faq-q-${index}">
        <div><p>${esc(item.a)}</p></div>
      </div>
    </div>`,
    )
    .join("");

  return `<div class="faq">${items}</div>`;
};

const planCard = (plan) => `
  <article class="plan${plan.featured ? " plan--featured" : ""}${plan.slim ? " plan--slim" : ""}" data-reveal>
    ${plan.badge ? `<span class="plan__badge">${esc(plan.badge)}</span>` : ""}
    <p class="plan__name">${esc(plan.name)}</p>
    <p class="plan__price">${esc(plan.price)}${plan.period ? ` <span class="plan__period">${esc(plan.period)}</span>` : ""}</p>
    <p class="plan__for">${esc(plan.for)}</p>
    <ul class="plan__list">${plan.features.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
    <p class="plan__note">${esc(plan.note)}</p>
    <a class="btn ${plan.featured ? "btn--primary" : "btn--ghost"} btn--block" data-route href="/contact?jenis=${esc(plan.id)}">Pilih Paket</a>
  </article>
`;

const plansBlock = () => `<div class="plans">${plans.map(planCard).join("")}</div>`;

const stepsBlock = () =>
  `<ol class="steps">${process
    .map(
      (step) => `
    <li data-reveal>
      <h3>${esc(step.title)}</h3>
      <p>${esc(step.body)}</p>
    </li>`,
    )
    .join("")}</ol>`;

const rowsBlock = (items) =>
  `<ul class="rows">${items
    .map(
      (item) => `
    <li data-reveal>
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.body)}</p>
    </li>`,
    )
    .join("")}</ul>`;

const serviceCard = (service) => `
  <article class="service${service.featured ? " service--feature" : ""}" data-reveal>
    <div>
      <p class="service__index">${esc(service.kicker)}</p>
      <h3>${esc(service.name)}</h3>
      <p class="service__summary">${esc(service.summary)}</p>
      <p class="service__target">Untuk <b>${esc(service.target)}</b></p>
    </div>
    ${tags(service.tags)}
  </article>
`;

const bentoCell = (item) => {
  if (item.variant === "media") {
    return `
    <article class="bento__cell bento__cell--wide bento__cell--media" data-reveal>
      <img src="${esc(item.image)}" alt="${esc(item.imageAlt)}" loading="lazy" decoding="async" width="1200" height="800">
      <div>
        <p class="bento__kicker">${esc(item.kicker)}</p>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.body)}</p>
      </div>
    </article>`;
  }

  const variant = item.variant ? ` bento__cell--${item.variant}` : "";
  const size = item.variant === "accent" ? " bento__cell--third" : " bento__cell--third";

  return `
    <article class="bento__cell${size}${variant}" data-reveal>
      <div>
        <p class="bento__kicker">${esc(item.kicker)}</p>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.body)}</p>
      </div>
    </article>`;
};

const home = () => {
  const h = headings.home;

  return `
  <section class="hero">
    <div class="shell hero__grid">
      <div>
        <span class="eyebrow" data-reveal>${esc(h.eyebrow)}</span>
        <h1 class="hero__title" data-reveal data-reveal-index="1">${esc(h.titleLead)} <em>${esc(h.titleAccent)}</em> ${esc(h.titleTail)}</h1>
        <p class="hero__sub" data-reveal data-reveal-index="2">${esc(h.sub)}</p>
        <div class="hero__actions" data-reveal data-reveal-index="3">
          <a class="btn btn--primary btn--lg" data-route href="/contact">Konsultasi Gratis</a>
          <a class="btn btn--ghost btn--lg" data-route href="/portfolio">Lihat Portfolio</a>
        </div>
      </div>
      <figure class="hero__media" data-reveal="left" data-reveal-index="2">
        <img src="${esc(h.heroImage)}" alt="${esc(h.heroAlt)}" width="1000" height="1250" fetchpriority="high" decoding="async">
        <figcaption>${esc(h.heroCaption)}</figcaption>
      </figure>
    </div>
  </section>

  <section class="section section--tight">
    <div class="shell">
      ${sectionHead(
        "Kenapa bisnis butuh website",
        "Orang cek dulu di internet sebelum membeli. Website memberi jawaban cepat soal apa yang kamu jual, di mana, dan bagaimana cara menghubungi.",
      )}
      ${rowsBlock(valueProps)}
    </div>
  </section>

  <section class="section section--tint">
    <div class="shell">
      ${sectionHead("Solusi website sesuai kebutuhan usaha", "Tiga layanan yang paling sering dibutuhkan UMKM, freelancer, dan profesional.", "Layanan")}
      <div class="services">${services.map(serviceCard).join("")}</div>
      <p class="mt-m"><a class="link-arrow" data-route href="/services">Lihat semua layanan</a></p>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      ${sectionHead("Kenapa harus lewat CodeCraft", "Harga yang masuk akal untuk usaha yang sedang tumbuh, pengerjaan cepat, dan komunikasi yang enak dibaca.")}
      <div class="bento">${reasons.map(bentoCell).join("")}</div>
    </div>
  </section>

  <section class="section section--tint">
    <div class="shell">
      ${sectionHead("Contoh hasil kerja", "Gambar di bawah masih contoh untuk menunjukkan bentuk layanan. Project klien asli menyusul.", "Project")}
      ${worksBlock()}
    </div>
  </section>

  <section class="section section--sunk">
    <div class="shell">
      ${sectionHead("Cara kerjanya", "Lima langkah dari obrolan pertama sampai website-nya online dan siap dipakai.")}
      ${stepsBlock()}
    </div>
  </section>

  <section class="section">
    <div class="shell">
      ${sectionHead("Harga paket", "Tiga pilihan, semuanya dikerjakan langsung oleh CodeCraft Digital.")}
      ${plansBlock()}
      ${notice("Harga paket di atas belum termasuk domain dan hosting. Kedua layanan itu dihitung terpisah dan kami bantu rekomendasikan sebelum kamu memutuskan.")}
    </div>
  </section>

  <section class="section section--tight">
    <div class="shell">
      <div class="quote">
        <p class="quote__text" data-reveal>${esc(testimonial.text)}</p>
        <p class="quote__note" data-reveal>${esc(testimonial.note)}</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      ${sectionHead("Pertanyaan yang sering masuk")}
      ${faqBlock(4)}
      <p class="mt-m"><a class="link-arrow" data-route href="/faq">Lihat semua pertanyaan</a></p>
    </div>
  </section>

  <section class="section section--tight">
    <div class="shell">
      ${cta(ctaBand.home)}
    </div>
  </section>`;
};

const servicesPage = () => {
  const detail = (service) => `
    <div class="split">
      <div data-reveal>
        <span class="service__index">${esc(service.kicker)}</span>
        <h2>${esc(service.name)}</h2>
        <p class="lede mt-s">${esc(service.summary)}</p>
        <p class="mt-s"><strong>Untuk:</strong> ${esc(service.target)}</p>
        <div class="mt-s">${checklist(service.details)}</div>
      </div>
      ${figure(service.image, service.imageAlt, service.imageCaption)}
    </div>`;

  const reverse = (service) => `
    <div class="split split--reverse">
      ${figure(service.image, service.imageAlt, service.imageCaption)}
      <div data-reveal>
        <span class="service__index">${esc(service.kicker)}</span>
        <h2>${esc(service.name)}</h2>
        <p class="lede mt-s">${esc(service.summary)}</p>
        <p class="mt-s"><strong>Untuk:</strong> ${esc(service.target)}</p>
        <div class="mt-s">${checklist(service.details)}</div>
      </div>
    </div>`;

  const tiles = plans
    .map(
      (plan) => `
      <article class="tile" data-reveal>
        <div class="tile__head">
          <h3>${esc(plan.name)}</h3>
          <span class="tile__price">${esc(plan.price)}${plan.period ? `<span class="plan__period">/bln</span>` : ""}</span>
        </div>
        <p>${esc(plan.for)}</p>
        <a class="btn ${plan.featured ? "btn--primary" : "btn--ghost"} btn--block" data-route href="/contact?jenis=${esc(plan.id)}">Pilih Paket</a>
      </article>`,
    )
    .join("");

  return `
  ${pageHead("Services", headings.services)}

  <section class="section section--tight">
    <div class="shell">${detail(services[0])}</div>
  </section>

  <section class="section section--tint">
    <div class="shell">${reverse(services[1])}</div>
  </section>

  <section class="section">
    <div class="shell">${detail(services[2])}</div>
  </section>

  <section class="section section--sunk">
    <div class="shell">
      ${sectionHead("Harga tiap layanan", "Ringkasan harga. Rinciannya ada di halaman harga.")}
      <div class="tiles">${tiles}</div>
      ${notice("Harga belum termasuk domain dan hosting. Keduanya dihitung terpisah.")}
    </div>
  </section>

  <section class="section section--tight">
    <div class="shell">${cta(ctaBand.services)}</div>
  </section>`;
};

const portfolioPage = () => `
  ${pageHead("Portfolio", headings.portfolio)}

  <section class="section section--tight">
    <div class="shell">
      <h2 class="visually-hidden">Daftar project</h2>
      ${worksBlock()}
    </div>
  </section>

  <section class="section section--sunk">
    <div class="shell">
      <div class="split">
        <div data-reveal>
          <h2>${esc(portfolioDisclosure.title)}</h2>
          <p class="lede mt-s">${esc(portfolioDisclosure.body)}</p>
          <ul class="checklist mt-s">${portfolioDisclosure.notes.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
        </div>
        <div data-reveal>
          ${notice("Kalau kamu mau lihat seperti apa website yang dibuat khusus untuk usaha kamu, kirim kebutuhanmu dulu lewat halaman kontak.")}
          <p class="mt-m"><a class="link-arrow" data-route href="/contact">Konsultasi Gratis</a></p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--tight">
    <div class="shell">${cta(ctaBand.portfolio)}</div>
  </section>`;

const pricingPage = () => `
  ${pageHead("Pricing", headings.pricing)}

  <section class="section section--tight">
    <div class="shell">${plansBlock()}</div>
  </section>

  <section class="section section--tight">
    <div class="shell">
      <div class="empty" data-reveal>
        <h2>${esc(domainNotice.title)}</h2>
        <p>${esc(domainNotice.body)}</p>
        <p class="mt-s"><a class="link-arrow" data-route href="/faq">Baca penjelasan lengkap</a></p>
      </div>
    </div>
  </section>

  <section class="section section--sunk">
    <div class="shell">
      ${sectionHead("Yang perlu kamu siapkan", "Semakin lengkap materinya, semakin cepat website selesai.")}
      <div class="tiles">
        ${prepareList
          .map(
            (item) => `
        <article class="tile" data-reveal>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.body)}</p>
        </article>`,
          )
          .join("")}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      ${sectionHead("Pertanyaan soal harga")}
      ${faqBlock(6)}
    </div>
  </section>

  <section class="section section--tight">
    <div class="shell">${cta(ctaBand.pricing)}</div>
  </section>`;

const aboutPage = () => `
  ${pageHead("About", headings.about)}

  <section class="section section--tight">
    <div class="shell">
      <div class="split">
        <div data-reveal>
          <p class="lede">${esc(aboutCopy[0])}</p>
          <p class="mt-s">${esc(aboutCopy[1])}</p>
          <p class="mt-s">${esc(aboutCopy[2])}</p>
        </div>
        ${figure(
          "https://picsum.photos/seed/codecraft-tentang-kami/1000/750",
          "Foto contoh meja kerja",
          "Bekerja langsung dengan pemilik usaha, tanpa perantara.",
        )}
      </div>
    </div>
  </section>

  <section class="section section--sunk">
    <div class="shell">
      ${sectionHead("Fakta singkat", "Yang bisa kami pastikan soal cara kerja kami. Angka jumlah project sengaja dikosongkan sampai ada data nyata.")}
      <dl class="facts">
        ${facts
          .map(
            (item) => `
        <div>
          <dt>${esc(item.term)}</dt>
          <dd>${esc(item.detail)}</dd>
        </div>`,
          )
          .join("")}
      </dl>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      ${sectionHead("Cara kami bekerja")}
      ${stepsBlock()}
    </div>
  </section>

  <section class="section section--sunk">
    <div class="shell">
      ${sectionHead("Nilai yang kami pegang")}
      ${rowsBlock(values)}
    </div>
  </section>

  <section class="section section--tight">
    <div class="shell">${cta(ctaBand.about)}</div>
  </section>`;

const faqPage = () => `
  ${pageHead("FAQ", headings.faq)}

  <section class="section section--tight">
    <div class="shell">
      <h2 class="visually-hidden">Daftar pertanyaan</h2>
      ${faqBlock(0)}
    </div>
  </section>

  <section class="section section--sunk">
    <div class="shell">
      <div class="split">
        <div data-reveal>
          <h2>${esc(ctaBand.faq.title)}</h2>
          <p class="lede mt-s">${esc(ctaBand.faq.body)}</p>
          <p class="mt-s"><a class="link-arrow" data-route href="/contact">Konsultasi Gratis</a></p>
        </div>
        <div data-reveal>
          ${notice("Bawa info ini biar jawabannya cepat: jenis usaha, halaman apa saja yang kamu butuhkan, dan materi yang sudah kamu punya.")}
        </div>
      </div>
    </div>
  </section>`;

const contactPage = () => {
  const channel = (label, value, hint, href) => `
    <div class="channel">
      <p class="channel__label">${esc(label)}</p>
      <p class="channel__value">${
        href ? `<a href="${esc(href)}">${esc(value)}</a>` : esc(value)
      }</p>
      <p class="channel__hint">${esc(hint)}</p>
    </div>`;

  const waChannel = config.waReady
    ? channel(
        "WhatsApp",
        config.waNumber,
        "Balasan paling cepat lewat WhatsApp.",
        `https://wa.me/${config.waNumber.replace(/\D/g, "")}`,
      )
    : channel(
        "WhatsApp",
        "Belum dipublikasikan",
        "Nomor resminya belum diisi. Kirim lewat email dulu, nanti kami balas dengan nomornya.",
      );

  return `
  ${pageHead("Contact", headings.contact)}

  <section class="section section--tight">
    <div class="shell">
      <div class="contact-grid">
        <div data-reveal>
          <form class="form" data-inquiry novalidate>
            <div class="form__row">
              <div class="field">
                <label for="nama">Nama</label>
                <input type="text" id="nama" name="nama" placeholder="Nama lengkap" autocomplete="name" required>
                <p class="field__error" data-error></p>
              </div>
              <div class="field">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="nama@usaha.com" autocomplete="email" required>
                <p class="field__error" data-error></p>
              </div>
            </div>

            <div class="form__row">
              <div class="field">
                <label for="whatsapp">Nomor WhatsApp</label>
                <input type="tel" id="whatsapp" name="whatsapp" placeholder="08xxxxxxxxxx" autocomplete="tel" required>
                <p class="field__help">Dipakai buat balasannya kalau WhatsApp tidak aktif.</p>
                <p class="field__error" data-error></p>
              </div>
              <div class="field">
                <label for="bisnis">Nama usaha</label>
                <input type="text" id="bisnis" name="bisnis" placeholder="Nama usaha atau personal brand" autocomplete="organization">
                <p class="field__help">Boleh dikosongkan kalau belum ada nama usaha.</p>
              </div>
            </div>

            <div class="form__row">
              <div class="field">
                <label for="jenis">Jenis website</label>
                <select id="jenis" name="jenis" required>
                  <option value="">Pilih salah satu</option>
                  <option value="Personal portfolio">Personal portfolio</option>
                  <option value="Website UMKM">Website UMKM</option>
                  <option value="Landing page">Landing page</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Belum yakin">Belum yakin</option>
                </select>
                <p class="field__error" data-error></p>
              </div>
              <div class="field">
                <label for="budget">Anggaran</label>
                <select id="budget" name="budget">
                  <option value="">Belum ada gambaran</option>
                  <option value="Sekitar Rp500.000">Sekitar Rp500.000</option>
                  <option value="Sekitar Rp1.200.000">Sekitar Rp1.200.000</option>
                  <option value="Lebih dari Rp1.200.000">Lebih dari Rp1.200.000</option>
                  <option value="Mau didiskusikan dulu">Mau didiskusikan dulu</option>
                </select>
                <p class="field__help">Boleh dikosongkan.</p>
              </div>
            </div>

            <div class="field">
              <label for="pesan">Ceritakan kebutuhanmu</label>
              <textarea id="pesan" name="pesan" placeholder="Usaha apa yang kamu jalankan, halaman apa saja yang dibutuhkan, dan kapan mau online." required></textarea>
              <p class="field__help">Semakin jelas, semakin tepat sarannya.</p>
              <p class="field__error" data-error></p>
            </div>

            <p class="form__status" data-form-status role="status" aria-live="polite"></p>

            <div>
              <button class="btn btn--primary btn--lg" type="submit">Konsultasi Gratis</button>
            </div>
          </form>
        </div>

        <div data-reveal>
          <p class="channel__label">Kontak langsung</p>
          <div class="channels mt-s">
            ${channel("Email", config.email, "Balasan dalam 1x24 jam kerja.", `mailto:${config.email}`)}
            ${waChannel}
            ${channel("Wilayah", config.city, "Order dari luar daerah juga dilayani.")}
          </div>
          ${notice("Konsultasi pertama tidak dipungut biaya dan tidak ada ikatan apa pun. Kalau ternyata belum perlu website, kami bilang.")}
        </div>
      </div>
    </div>
  </section>`;
};

export const views = {
  home,
  services: servicesPage,
  portfolio: portfolioPage,
  pricing: pricingPage,
  about: aboutPage,
  faq: faqPage,
  contact: contactPage,
};

export { brand, faqs, portfolio };
