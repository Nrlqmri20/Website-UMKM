# PRD — CodeCraft Digital

| Item | Nilai |
|---|---|
| Produk | Website CodeCraft Digital |
| Versi dokumen | 2.0 |
| Jenis produk | Company profile + katalog layanan + portfolio + jalur pemesanan |
| Target | UMKM, freelancer, mahasiswa/fresh graduate, profesional, bisnis lokal |
| Platform | Web responsif (desktop, tablet, smartphone) |
| Stack | Vanilla JS (HTML, CSS, JavaScript) tanpa framework dan tanpa build step |
| Status | Perencanaan |
| Sumber | `PRD.md` versi 1.0 (hasil disusun ulang, isi substantif dipertahankan) |

---

## 1. Ringkasan Produk

### 1.1 Deskripsi

CodeCraft Digital adalah website bisnis yang menyediakan informasi mengenai jasa pembuatan dan pengelolaan website untuk UMKM, freelancer, profesional, dan pelaku usaha lokal.

Website ini berfungsi sebagai **digital storefront** sekaligus **sales funnel** tempat calon pelanggan dapat:

- Mengenal CodeCraft Digital
- Melihat layanan yang tersedia
- Melihat hasil kerja dan paket harga
- Memahami proses pengerjaan
- Membaca testimoni klien
- Menghubungi atau mengajukan kebutuhan lewat WhatsApp

### 1.2 Tujuan produk

1. Membangun identitas dan kredibilitas bisnis.
2. Menampilkan layanan secara profesional.
3. Menjadi media portfolio.
4. Mendapatkan calon pelanggan baru.
5. Mempermudah pelanggan melakukan konsultasi dan pemesanan.
6. Menjelaskan proses kerja kepada calon pelanggan.
7. Mendukung pemasaran melalui Google dan media sosial.
8. Menjadi pusat informasi resmi CodeCraft Digital.

### 1.3 Peran website

Website bukan hanya menjelaskan "kami menyediakan jasa website". Perannya adalah menutup alur:

```text
Kenal → Tertarik → Percaya → Bandingkan → Konsultasi → Jadi Client
```

Urutan section yang paling penting di halaman utama:

```text
Hero → Value → Services → Portfolio → Process → Pricing → Trust → FAQ → CTA
```

### 1.4 Batasan versi pertama

Fokus versi pertama pada **company profile + portfolio + pricing + konversi ke WhatsApp**. Sistem login, dashboard klien, pembayaran online, dan CMS ditunda ke tahap berikutnya.

---

## 2. Masalah yang Diselesaikan

### 2.1 UMKM

- Belum punya website resmi.
- Bergantung pada Instagram, TikTok, dan WhatsApp.
- Tidak tahu cara memulai membuat website.
- Menganggap pembuatan website mahal.
- Tidak punya tim IT.

### 2.2 Freelancer dan profesional

- Belum punya portfolio online yang profesional.
- Portfolio tersebar di banyak platform.
- Susah menunjukkan hasil kerja kepada calon klien.

### 2.3 Calon pelanggan secara umum

- Tidak tahu jasa apa yang ditawarkan.
- Tidak tahu harga layanan.
- Tidak tahu bagaimana proses pengerjaannya.
- Ragu apakah CodeCraft bisa dipercaya.
- Susah menghubungi atau memesan.

**Syarat:** website harus menjawab semua itu dalam beberapa detik pertama saat pengunjung masuk.

---

## 3. Target User

### 3.1 A. Pemilik UMKM

Contoh segmen: coffee shop, toko fashion, pengusaha makanan, pengrajin, barbershop, jasa fotografi, laundry, travel, jasa kecantikan.

Kebutuhan inti:

> "Saya ingin punya website usaha, tapi tidak tahu harus mulai dari mana."

### 3.2 B. Freelancer dan profesional

Contoh segmen: graphic designer, photographer, web developer, content creator, videographer, illustrator, konsultan.

Kebutuhan inti:

> "Saya membutuhkan tempat untuk menampilkan portfolio saya secara profesional."

### 3.3 C. Mahasiswa dan fresh graduate

Kebutuhan: personal portfolio, CV digital, personal branding, daftar project, pengalaman dan skill.

---

## 4. User Goals

| User | Tujuan |
|---|---|
| UMKM | Mendapatkan website bisnis |
| Freelancer | Membuat portfolio online |
| Mahasiswa | Membuat personal portfolio |
| Profesional | Meningkatkan personal branding |
| Calon pelanggan | Mengetahui harga |
| Calon pelanggan | Melihat hasil pekerjaan |
| Calon pelanggan | Menghubungi CodeCraft |
| CodeCraft | Mendapatkan leads |
| CodeCraft | Meningkatkan kredibilitas |

---

## 5. Business Goals

### Jangka pendek

- Memperkenalkan brand.
- Menampilkan portfolio.
- Mendapatkan pelanggan pertama.
- Mendapatkan inquiry melalui WhatsApp.

### Jangka menengah

- Membangun reputasi.
- Mendapatkan repeat customer.
- Menjual layanan maintenance.
- Meningkatkan traffic dari Google.

### Jangka panjang

- Menjadi digital agency lokal.
- Menambah layanan digital.
- Membangun database pelanggan.
- Menjangkau pelanggan di luar Aceh, bahkan luar Indonesia.

---

## 6. Sitemap dan Navigasi

### 6.1 Struktur penuh (rencana jangka panjang)

```text
CODECRAFT DIGITAL
├── Home
├── Services
│   ├── Website Portfolio
│   ├── Website UMKM
│   └── Maintenance
├── Portfolio
│   ├── Website UMKM
│   ├── Personal Portfolio
│   └── Landing Page
├── Pricing
│   ├── Personal
│   ├── Pro UMKM
│   └── Maintenance
├── Process
├── About
├── FAQ
└── Contact
```

### 6.2 Sitemap MVP (versi pertama)

```text
Home
Services
Portfolio
Pricing
About
FAQ
Contact
```

MVP cukup untuk mulai mendapatkan pelanggan. Jangan menambah halaman baru sebelum MVP berjalan.

---

## 7. Struktur Halaman Utama (Home)

```text
NAVBAR
  ↓
HERO
  ↓
TRUST / VALUE
  ↓
SERVICES
  ↓
WHY CODECRAFT
  ↓
PORTFOLIO
  ↓
PROCESS
  ↓
PRICING
  ↓
TESTIMONIAL
  ↓
FAQ
  ↓
CTA
  ↓
FOOTER
```

### 7.1 Navbar

| Item | Isi |
|---|---|
| Logo | CodeCraft Digital, klik kembali ke Home |
| Menu | Home, Services, Portfolio, Pricing, About, FAQ, Contact |
| CTA | Let's Talk → |

Syarat:

- Sticky saat scroll.
- Responsive dengan mobile menu.
- Logo berfungsi sebagai link ke Home.

### 7.2 Hero

Section pertama yang dilihat pengguna.

**Heading (pilih satu)**

- Build Your Digital Presence.
- Website Profesional untuk Bisnis & Personal Brand.
- Dari Ide Menjadi Website yang Siap Berkembang.

Rekomendasi untuk pasar Indonesia: **Website Profesional untuk Bisnis & Personal Brand.**

**Subheading**

> Kami membantu UMKM, freelancer, dan profesional membangun kehadiran digital yang profesional, modern, dan mudah diakses.

**Tombol**

- Konsultasi Gratis
- Lihat Portfolio

**Visual**

Mockup laptop dan smartphone, screenshot website, digital mockup, atau elemen abstrak.

```text
┌─────────────────────────────────────────────┐
│ Website Profesional untuk Bisnis &          │
│ Personal Brand.                             │
│                                             │
│ Bangun kehadiran digital yang profesional    │
│ bersama CodeCraft.                          │
│                                             │
│ [Konsultasi Gratis] [Lihat Portfolio]      │
│                              ┌───────────┐  │
│                              │ Website   │  │
│                              │ Mockup    │  │
│                              └───────────┘  │
└─────────────────────────────────────────────┘
```

### 7.3 Trust / Value — Why Your Business Needs a Website

Tepat setelah Hero agar pengunjung langsung tahu mengapa mereka butuh CodeCraft.

| Nilai | Deskripsi |
|---|---|
| Professional Presence | Bangun citra bisnis yang lebih profesional |
| Reach More People | Jangkau pelanggan kapan saja dan dari mana saja |
| Build Trust | Tampilkan informasi bisnis dalam satu platform resmi |
| Ready to Grow | Website dapat dikembangkan mengikuti kebutuhan bisnis |

### 7.4 Services — What We Build

Subjudul: "Solusi website yang dirancang sesuai kebutuhan Anda."

**Service 1 — Personal Portfolio**

- Target: freelancer, designer, photographer, creator, student, professional
- Isi: personal profile, about, skills, portfolio, experience, testimonial, contact, WhatsApp
- CTA: View Service →

**Service 2 — UMKM Website**

- Target: food & beverage, fashion, retail, service, craft, local business
- Isi: homepage, about, katalog produk/layanan, gallery, lokasi, Google Maps, WhatsApp, basic SEO

**Service 3 — Website Maintenance**

- Isi: update konten, backup, pemeriksaan keamanan, perubahan minor, bantuan teknis

### 7.5 Why CodeCraft

Menjawab pertanyaan "kenapa harus memakai jasa CodeCraft?"

| Poin | Isi |
|---|---|
| Affordable | Harga dijangkau bisnis dan personal brand yang sedang berkembang |
| Modern Design | Tampilan modern dan responsif |
| Fast Development | Target 3–5 hari kerja, tergantung kompleksitas dan kelengkapan materi |
| Easy Communication | Komunikasi memakai bahasa yang mudah dipahami |
| After-Sales Support | Tersedia maintenance dan bantuan teknis setelah website selesai |

### 7.6 Portfolio — Selected Works

Subjudul: "Beberapa website yang kami rancang untuk membantu bisnis dan personal brand tampil lebih profesional."

Layout: card grid, satu proyek per card, tombol View.

```text
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   IMAGE      │ │   IMAGE      │ │   IMAGE      │
├──────────────┤ ├──────────────┤ ├──────────────┤
│ Coffee Shop  │ │ Photographer │ │ Fashion      │
│ UMKM        │ │ Portfolio    │ │ Store        │
│ [View]       │ │ [View]       │ │ [View]       │
└──────────────┘ └──────────────┘ └──────────────┘
```

Filter kategori: `All`, `UMKM`, `Portfolio`, `Landing Page`.

Data tiap proyek: nama project, client, kategori, screenshot, deskripsi, teknologi, tahun, link website.

### 7.7 Process — How It Works

Jangan hanya menulis "kami membuat website". Tampilkan prosesnya.

| Step | Nama | Isi |
|---|---|---|
| 01 | Discovery | Konsultasi mengenai kebutuhan dan tujuan website |
| 02 | Planning | Menentukan struktur, konten, dan desain |
| 03 | Design & Development | Website mulai dirancang dan dikembangkan |
| 04 | Review | Client melihat hasil dan memberikan feedback |
| 05 | Launch | Website dipublikasikan dan akses diserahkan kepada client |

```text
DISCOVER → PLAN → BUILD → REVIEW → LAUNCH
```

### 7.8 Pricing

Tiga kartu.

| Paket | Harga | Untuk | Fitur | Label |
|---|---|---|---|---|
| PERSONAL | Rp500.000 | Personal branding dan portfolio | 1 landing page, responsive design, portfolio, contact, WhatsApp, basic SEO | — |
| PRO UMKM | Rp1.200.000 | Bisnis yang ingin tampil profesional | 3–5 halaman, responsive design, katalog produk/layanan, Google Maps, WhatsApp, basic SEO, integrasi social media | **Most Popular** |
| MAINTENANCE | Rp100.000/bulan | Website yang tetap terawat | update konten, backup, security check, minor changes, technical support | — |

Tombol tiap kartu: **Get Started**.

> **Catatan wajib:** posisi "domain dan hosting sudah termasuk atau belum" harus berupa satu kalimat tegas di halaman pricing. Jangan biarkan calon pelanggan menebak.

### 7.9 Testimonial

Contoh format:

```text
"Website-nya sesuai dengan yang saya butuhkan dan
proses komunikasinya juga mudah."

— Nama Client
  Owner, Nama Usaha
```

**Aturan:** jangan membuat testimonial palsu. Belum ada klien, ganti dengan:

> Be among our first digital success stories.

Angka statistik di section About juga tidak boleh diisi sebelum ada datanya.

### 7.10 FAQ

| Pertanyaan | Jawaban |
|---|---|
| Apakah saya harus mempunyai domain sendiri? | CodeCraft dapat membantu pembelian dan pengelolaan domain |
| Apakah website bisa dibuka melalui HP? | Ya, responsif untuk desktop, tablet, dan smartphone |
| Berapa lama pengerjaannya? | Target 3–5 hari kerja, tergantung paket, kompleksitas, dan kelengkapan materi |
| Apakah saya harus menyediakan foto dan tulisan? | Materi dari client sangat membantu; CodeCraft memberi panduan materi yang perlu disiapkan |
| Apakah isi website bisa diubah setelah selesai? | Bergantung pada paket dan platform; CodeCraft memberi panduan atau layanan maintenance |
| Apakah sudah termasuk domain dan hosting? | Harus dinyatakan eksplisit di pricing |

### 7.11 CTA Akhir

**Heading:** Ready to Build Your Digital Presence?

**Teks:** Punya ide website? Ceritakan kebutuhanmu dan mari kita wujudkan bersama.

**Tombol:** Konsultasi via WhatsApp, atau Start Your Project →

### 7.12 Footer

```text
CODECRAFT DIGITAL
Building digital presence for businesses & individuals.

Quick Links    Services           Contact
Home           Portfolio Website  WhatsApp
Services       UMKM Website       Instagram
Portfolio      Maintenance        Email
Pricing
About
Contact

© 2026 CodeCraft Digital — All Rights Reserved.
```

Sosmed yang disiapkan: Instagram, TikTok, LinkedIn, WhatsApp.

---

## 8. Formulir dan Alur Konversi

### 8.1 User Flow

```text
Instagram / TikTok / Google
            ↓
    CodeCraft Website
            ↓
          HOME
            ↓
    Lihat Services
            ↓
    Lihat Portfolio
            ↓
      Lihat Pricing
            ↓
      Trust / FAQ
            ↓
     "Saya tertarik"
            ↓
  Contact / WhatsApp
            ↓
     Konsultasi
            ↓
   Briefing Client
            ↓
     Pengerjaan
```

### 8.2 Contact Form

Field:

```text
Nama
Email
Nomor WhatsApp
Nama Bisnis
Jenis Website
Budget
Pesan
```

Dropdown "Jenis Website": `Personal Portfolio`, `Website UMKM`, `Landing Page`, `Maintenance`, `Other`.

Tombol: **Send Inquiry**.

**Prioritas MVP:** WhatsApp menjadi channel utama, karena target CodeCraft adalah UMKM dan pengguna lokal. Form adalah pelengkap.

---

## 9. Strategi Konten

Bahasa website harus mudah dipahami, bukan teknis dan bukan sekadar menjual keras.

**Hindari:**

> "Kami menyediakan deployment website berbasis CMS dengan konfigurasi server-side optimization."

**Gunakan:**

> Website profesional tanpa harus pusing dengan hal teknis.

**Hindari:**

> Jasa website termurah dan terbaik nomor satu!

**Gunakan:**

> Website profesional dengan harga yang disesuaikan untuk bisnis yang sedang berkembang.

---

## 10. Arah Desain

Nama CodeCraft Digital punya karakter teknologi sekaligus creative agency, jadi jangan dibuat seperti website perusahaan formal.

**Style:** Modern + Minimal + Gen Z + Professional

### 10.1 Warna

| Peran | Nilai | Kegunaan |
|---|---|---|
| Primary | `#111827` | Dark navy/black untuk teks |
| Secondary | `#4DA8DA` | Light blue sebagai identitas digital |
| Background | `#F8FAFC` | Latar halaman |
| Surface | `#FFFFFF` | Card dan panel |

Gradient dipakai terbatas, misalnya `#4DA8DA → #7DD3FC`. Jangan memakai terlalu banyak warna.

### 10.2 Tipografi

| Peran | Font |
|---|---|
| Heading | Space Grotesk / Sora / Plus Jakarta Sans |
| Body | Inter / Plus Jakarta Sans |

Karakter yang dinginkan: clean, modern, digital, friendly, professional.

### 10.3 Identitas Visual

Logo dua baris: **CODECRAFT** / **DIGITAL**.

Simbol yang boleh dipakai sparingly: `<>`, `{}`, `/>`, `C`, `CC`. Jangan berlebihan memakai simbol coding, karena CodeCraft menjual **digital presence**, bukan jasa coding semata.

### 10.4 Strategi CTA

| Konteks | CTA |
|---|---|
| Primary | Konsultasi Gratis |
| Secondary | Lihat Portfolio |
| Service | Pilih Paket |
| Portfolio | Lihat Project |
| Penutup | Mulai Project Anda |

Jangan pakai "Click Here".

---

## 11. Arah Teknis (Vanilla JS, SPA)

### 11.1 Prinsip

- Tanpa framework, tanpa library, tanpa dependensi di `package.json`.
- Satu `index.html` sebagai shell. Semua isi halaman dirender dari JavaScript.
- Navigasi tanpa reload memakai History API, dengan fallback ke `404.html` untuk hosting statis.
- CSS memakai custom properties, mobile-first, dipecah per lapisan.
- JavaScript ES Modules, satu modul per tanggung jawab.
- Konten, konfigurasi, dan logika tampilan dipisah agar mudah diganti.

### 11.2 Struktur file

```text
jasa-umkm/
├── index.html            Shell tunggal, semua halaman dirender di sini
├── 404.html              Fallback hosting statis agar URL dalam tidak 404
├── .env                  Sumber konfigurasi utama
├── .env.example          Template .env
├── build-config.mjs      Mengubah .env menjadi assets/js/config.js
├── dev-server.mjs        Server lokal tanpa dependensi
├── check.mjs             Verifikasi konten dan struktur, tanpa browser
├── browser-check.mjs     Verifikasi di browser, butuh Playwright
├── package.json          Hanya script, tanpa dependensi
├── robots.txt
├── sitemap.xml
├── PRD.md
└── assets/
    ├── css/
    │   ├── tokens.css    Token warna, tipografi, radius, dua tema
    │   ├── base.css      Reset, tipografi dasar, animasi masuk
    │   ├── components.css
    │   └── pages.css
    ├── fonts/            Space Grotesk dan Plus Jakarta Sans, self-hosted
    ├── img/
    │   └── favicon.svg
    └── js/
        ├── config.js     DIBUAT OTOMATIS dari .env, jangan diedit
        ├── data.js       Semua konten: layanan, paket, portfolio, FAQ
        ├── ui.js         Helper markup
        ├── layout.js     Header, footer, tema, menu mobile
        ├── views.js      Fungsi render tiap route
        ├── router.js     Routing History API
        ├── reveal.js     Animasi masuk pakai IntersectionObserver
        ├── faq.js        Accordion
        ├── portfolio.js  Filter project
        ├── contact.js    Validasi form dan pengiriman ke WhatsApp
        └── app.js        Titik masuk
```

### 11.3 Konfigurasi lewat .env

Browser tidak bisa membaca `.env` secara langsung. File `.env` adalah sumber kebenaran, lalu `build-config.mjs` mengubahnya menjadi modul ES yang bisa diimpor browser.

```bash
node build-config.mjs     # atau: npm run build
```

Variabel yang tersedia:

| Variabel | Isi |
|---|---|
| `CC_BRAND` | Nama brand |
| `CC_TAGLINE` | Kalimat singkat untuk footer |
| `CC_CITY` | Kota, tampil di footer |
| `CC_WA_NUMBER` | Nomor WhatsApp format internasional, tanpa `+` dan tanpa `0` di depan |
| `CC_EMAIL` | EmailBalasan |
| `CC_INSTAGRAM` | Link Instagram, kosongkan untuk menyembunyikan |
| `CC_TIKTOK` | Link TikTok |
| `CC_LINKEDIN` | Link LinkedIn |
| `CC_BASE_URL` | Domain untuk canonical, sitemap, dan Open Graph |
| `CC_LEAD_MESSAGE` | Sapaan yang otomatis terisi di WhatsApp |

Tujuan aturan ini:

- Placeholder tidak tersebar di banyak file.
- Mengganti nomor WhatsApp cukup mengubah satu baris di `.env`, lalu jalankan ulang build.
- `CC_WA_NUMBER` kosong tidak membuat website rusak. Tombol WhatsApp otomatis hilang dan form kontak memberi tahu nomor mana yang perlu diisi.

### 11.4 Route

| URL | Halaman |
|---|---|
| `/` | Home |
| `/services` | Layanan |
| `/portfolio` | Portfolio |
| `/pricing` | Harga |
| `/about` | Tentang |
| `/faq` | FAQ |
| `/contact` | Kontak |

Pada hosting statis, semua route harus diarahkan ke `index.html`. `404.html` menangani ini untuk Netlify, Vercel, dan GitHub Pages. Kalau hosting memakai Nginx, pakai aturan `try_files $uri /index.html`.

### 11.5 Konsekuensi SEO yang harus diterima

SPA ada konsekuensi nyata yang perlu dicatat, bukan diabaikan:

| Yang berubah | Dampak |
|---|---|
| Meta title dan description | Diperbarui lewat JavaScript. Google bisa membacanya, tapi lebih lambat dan tidak selalu. |
| Isi halaman | Dirender di browser. Kalau JavaScript gagal, halaman kosong. |
| Tautan dalam | Sudah URL bersih, tapi tetap perlu aturan fallback server. |
| Kecepatan persepsian | Header dan footer muncul setelah JavaScript dimuat. |

Mitigasi yang sudah dipasang: satu `h1` per halaman, struktur heading berurutan, `sitemap.xml`, `robots.txt`, Open Graph, JSON-LD, dan `<noscript>` yang memberi tahu cara menghubungi.

Kalau nanti traffic dari Google jadi penting dan isi halaman tidak terindeks, langkah paling murah adalah mengembalikan `services`, `pricing`, dan `faq` menjadi file HTML statis terpisah.

---

## 12. Functional Requirements

| ID | Fitur | Prioritas |
|---|---|---|
| FR-01 | Responsive website | Must Have |
| FR-02 | Navbar sticky + mobile menu | Must Have |
| FR-03 | Hero section | Must Have |
| FR-04 | Service section | Must Have |
| FR-05 | Portfolio | Must Have |
| FR-06 | Pricing | Must Have |
| FR-07 | WhatsApp CTA | Must Have |
| FR-08 | Contact form | Should Have |
| FR-09 | FAQ | Should Have |
| FR-10 | Testimonial | Should Have |
| FR-11 | Portfolio filter | Should Have |
| FR-12 | Blog / artikel | Could Have |
| FR-13 | Client dashboard | Later |
| FR-14 | Online payment | Later |
| FR-15 | CMS / admin | Later |

---

## 13. Non-Functional Requirements

### 13.1 Responsive

Target breakpoint: `320px+`, `768px+`, `1024px+`, `1440px+`.

### 13.2 Performance

- Gambar teroptimasi dan memakai format modern.
- Lazy loading untuk gambar di bawah fold.
- Tidak ada animasi berlebihan.
- Target halaman utama dimuat cepat di koneksi seluler.

### 13.3 SEO

- URL ramah SEO.
- Meta title dan meta description unik per halaman.
- Struktur heading berurutan, satu `h1` per halaman.
- Alt text pada setiap gambar.
- `sitemap.xml` dan `robots.txt`.
- Open Graph dan Twitter Card.
- Google Search Console.

### 13.4 Accessibility

- Kontras teks jelas.
- Tombol mudah ditemukan dan diberi label.
- Alt text gambar.
- Struktur heading teratur.
- Navigasi keyboard dasar, termasuk focus state yang terlihat.
- Ukuran teks nyaman dibaca.

---

## 14. Target Keyword SEO

```text
jasa pembuatan website UMKM
jasa website Banda Aceh
jasa pembuatan website Aceh
website UMKM
jasa website portfolio
jasa pembuatan landing page
website bisnis
jasa website murah
website profesional UMKM
```

Nanti dibuat halaman atau artikel khusus per keyword, bukan menjejalkan semua keyword ke homepage.

---

## 15. Roadmap

### 15.1 MVP

```text
HOME      → Hero, Services, Why CodeCraft, Portfolio, Pricing, Process, FAQ, CTA, Footer
SERVICES
PORTFOLIO
PRICING
ABOUT
CONTACT
```

### 15.2 Tahap 2

**Blog** — topik: kenapa UMKM butuh website, website vs Instagram, apa itu domain, apa itu hosting, tips portfolio digital. Sekaligus mendukung SEO.

**Online booking** — pilih tanggal, jam, dan jenis konsultasi.

**Online payment** — contoh skema DP 50% dan pelunasan 50%.

**Client dashboard** — project status, progress, invoice, files, revision, link website.

### 15.3 Tahap 3 — Admin Dashboard

```text
ADMIN DASHBOARD
├── Dashboard
├── Projects
├── Clients
├── Services
├── Portfolio
├── Testimonials
├── Messages
├── Orders
├── Invoices
└── Settings
```

Tidak perlu dibuat pada versi pertama.

---

## 16. Success Metrics

**Awareness:** total visitors, traffic dari Instagram, TikTok, Google.

**Engagement:** portfolio views, service views, pricing views, average session duration.

**Conversion — yang paling penting:** jumlah inquiry.

```text
100 visitors → 30 lihat portfolio → 20 lihat pricing
→ 10 klik WhatsApp → 5 konsultasi → 2 jadi client
```

Tidak perlu mengejar pengunjung banyak kalau tidak menghasilkan calon pelanggan.

---

## 17. Aturan Konten dan Risiko

| Risiko | Mitigasi |
|---|---|
| Testimonial palsu | Jangan tulis sebelum ada klien asli |
| Angka project/reviewer fiktif | Section About dipakai sebagai placeholder sampai ada data nyata |
| Domain dan hosting ambigu | Tulis satu kalimat tegas di section pricing |
| Placeholder lolos ke produksi | Semua placeholder dikumpulkan di `config.js`, dicek lewat acceptance criteria |
| Janji pengerjaan tidak realistis | Target 3–5 hari kerja selalu disebut sebagai target, bukan garansi |
| Simbol coding berlebihan di visual | Ingatkan bahwa produk yang dijual adalah digital presence |

---

## 18. Acceptance Criteria

Situs siap peluncuran bila semua poin berikut terpenuhi:

- [ ] Semua halaman MVP tersedia dan bisa diakses.
- [ ] Responsive di desktop dan mobile.
- [ ] Semua tombol CTA berfungsi.
- [ ] Link WhatsApp terbuka dengan pesan awal yang benar.
- [ ] Contact form berfungsi bila dipakai.
- [ ] Semua link navigasi bekerja, tidak ada broken link.
- [ ] Filter portfolio berfungsi.
- [ ] FAQ dapat dibuka-tutup.
- [ ] Harga dan informasi layanan sudah benar.
- [ ] Pernyataan domain dan hosting sudah tegas.
- [ ] Tidak ada placeholder tersisa di halaman.
- [ ] Tidak ada testimonial atau angka fiktif.
- [ ] Gambar sudah dioptimasi dan punya alt text.
- [ ] SEO dasar sudah diterapkan.
- [ ] Favicon tersedia.
- [ ] Link social media tersedia.
- [ ] Sudah diuji di beberapa browser.

---

## 19. Keputusan yang Masih Menunggu

| ID | Keputusan | Dampak |
|---|---|---|
| QD-01 | Domain dan hosting termasuk atau tidak di tiap paket | Copy section pricing dan FAQ |
| QD-02 | Nomor WhatsApp, email, dan link sosmed resmi | `config.js` dan seluruh CTA |
| QD-03 | Screenshot portfolio asli atau mockup | Section portfolio, About, Open Graph |
| QD-04 | Logo final | Navbar, footer, favicon |
| QD-05 | Nama jedes halaman: "Services" atau bahasa Indonesia | Navbar, sitemap, URL |
| QD-06 | Metode pembayaran tahap 2 | Halaman pricing |

---

## 20. Lampiran

### 20.1 Diagram struktur situs

```text
                    CODECRAFT DIGITAL
                           │
             ┌─────────────┴─────────────┐
             │                           │
           HOME                     NAVIGATION
             │                           │
             ↓                  ┌────────┼────────┐
           HERO                 │        │        │
             │              SERVICES PORTFOLIO PRICING
             ↓                           │
         TRUST / WHY US                  ↓
             │                       PROJECTS
             │                           │
         SERVICES                        ↓
             │                        PROCESS
             ↓                           │
         PORTFOLIO                       ↓
             │                        ABOUT
             ↓                           │
          PROCESS                        ↓
          PRICING                        ↓
             │                         FAQ
             ↓                           ↓
         TESTIMONIAL                    ↓
             │                       CONTACT
             ↓                           ↓
             CTA                       WHATSAPP
             │
             ↓
           FOOTER
```

### 20.2 Referensi kata kunci

Sudah tercantum pada bagian 14. Gunakan sebagai bahan halaman dedicated di tahap 2, bukan untuk menumpuk semuanya ke satu halaman.
                      ABOUT
             ↓                           │
          PROCESS                        ↓
             │                         FAQ
             ↓                           │
         PRICING                         ↓
             │                        CONTACT
             ↓                           │
       TESTIMONIAL                       ↓
             │                       WHATSAPP
             ↓
            CTA
             │
             ↓
          FOOTER
```

## Kesimpulan PRD

Menurut business plan yang kamu buat, **CodeCraft Digital jangan dibuat sebagai website yang hanya menjelaskan "kami menyediakan jasa website"**.

Website-nya harus berperan sebagai **sales funnel**:

> **Kenal → Tertarik → Percaya → Bandingkan → Konsultasi → Jadi Client**

Jadi urutan yang paling penting adalah:

**Hero → Value → Services → Portfolio → Process → Pricing → Trust → FAQ → CTA**

Dan untuk **versi pertama**, aku sangat menyarankan fokus ke **website company profile + portfolio + pricing + WhatsApp conversion** terlebih dahulu. Sistem login, dashboard client, pembayaran online, dan CMS bisa menjadi pengembangan tahap berikutnya.

Kalau nanti kamu mau **:chatgpt-content-reference{index="0"}**, PRD ini juga sudah bisa dijadikan dasar untuk :chatgpt-content-reference{index="1"}.