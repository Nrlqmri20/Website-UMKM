# CodeCraft Digital

Website company profile, katalog layanan, portfolio, dan jalur pemesanan untuk jasa pembuatan website CodeCraft Digital.

Website ini berfungsi sebagai digital storefront sekaligus sales funnel. Tujuannya mengubah pengunjung menjadi leads lewat WhatsApp.

---

## Isi

- [Stack](#stack)
- [Menjalankan](#menjalankan)
- [Konfigurasi](#konfigurasi)
- [Route](#route)
- [Struktur file](#struktur-file)
- [Verifikasi](#verifikasi)
- [Deploy](#deploy)
- [Sebelum rilis](#sebelum-rilis)
- [Batasan yang diketahui](#batasan-yang-diketahui)

---

## Stack

| Bagian | Teknologi |
|---|---|
| Markup | Satu `index.html` sebagai shell |
| Styling | CSS dengan custom properties, 4 file |
| Logika | JavaScript ES Modules, 11 modul |
| Routing | History API, navigasi tanpa reload |
| Konfigurasi | `.env` yang dikonversi jadi modul ES |
| Server lokal | Node.js, tanpa dependensi |
| Font | Space Grotesk + Plus Jakarta Sans, self-hosted |

Tidak ada framework, tidak ada library, dan `package.json` tidak punya `dependencies`. Node.js hanya dipakai untuk build konfigurasi dan server lokal, bukan untuk menjalankan website di browser.

**Yang dibutuhkan:** Node.js 18 atau lebih baru. Itu saja.

---

## Menjalankan

```bash
# 1. Siapkan konfigurasi
copy .env.example .env          # Windows
# cp .env.example .env          # macOS dan Linux

# 2. Bangun config.js dari .env
node build-config.mjs

# 3. Jalankan server lokal
node dev-server.mjs
```

Buka `http://localhost:4173`.

Atau pakai script yang sudah disiapkan:

```bash
npm run dev      # build config lalu jalankan server
npm run build    # hanya build config
```

Setiap route yang tidak ditemukan otomatis dilayani oleh `index.html`, jadi `/pricing` bisa dibuka langsung tanpa error.

---

## Konfigurasi

Semua konfigurasi ada di **`.env`**. File ini tidak pernah dibaca browser secara langsung, karena browser hanya bisa membaca JavaScript. Karena itu `build-config.mjs` mengubahnya menjadi `assets/js/config.js` yang bisa diimpor.

**File yang dibuat otomatis dan jangan diedit langsung:**

| File | Dibuat dari |
|---|---|
| `assets/js/config.js` | `CC_*` di `.env` |
| `robots.txt` | `CC_BASE_URL` di `.env` |
| `sitemap.xml` | `CC_BASE_URL` di `.env`, route diambil dari `data.js` |

Semuanya akan tertimpa setiap kali `build-config.mjs` dijalankan.

### Cara mengubah

1. Edit `.env`
2. Jalankan `node build-config.mjs`
3. Muat ulang halaman

Tidak perlu `npm install` dan tidak perlu restart server.

### Daftar variabel

| Variabel | Isi | Wajib | Status sekarang |
|---|---|---|---|
| `CC_BRAND` | Nama brand | ya | sudah diisi |
| `CC_EMAIL` | Email balasan | ya | placeholder |
| `CC_BASE_URL` | Domain untuk canonical, Open Graph, robots, dan sitemap | ya | placeholder |
| `CC_CITY` | Kota, tampil di footer | tidak | sudah diisi |
| `CC_TAGLINE` | Kalimat singkat untuk footer | tidak | sudah diisi |
| `CC_WA_NUMBER` | Nomor WhatsApp format internasional | tidak | **kosong** |
| `CC_INSTAGRAM` | Link Instagram | tidak | **kosong** |
| `CC_TIKTOK` | Link TikTok | tidak | **kosong** |
| `CC_LINKEDIN` | Link LinkedIn | tidak | **kosong** |
| `CC_LEAD_MESSAGE` | Sapaan yang otomatis terisi di WhatsApp | tidak | sudah diisi |

### Format `CC_WA_NUMBER`

Format internasional, **tanpa** tanda `+` dan **tanpa** angka `0` di depan:

```
6281234567890        benar
+62 812-3456-7890    salah
081234567890         salah
```

Kalau `CC_WA_NUMBER` kosong atau kurang dari 9 digit:

- Tombol WhatsApp tidak muncul
- Link WhatsApp di footer disembunyikan
- Form kontak menampilkan pesan yang menyebutkan nomor mana yang perlu diisi
- Link media sosial yang kosong juga disembunyikan

Jadi website tetap utuh dan tidak menampilkan nomor palsu.

---

## Route

| URL | Halaman |
|---|---|
| `/` | Home |
| `/services` | Layanan |
| `/portfolio` | Portfolio |
| `/pricing` | Harga |
| `/about` | Tentang |
| `/faq` | FAQ |
| `/contact` | Kontak |

Navigasi antar halaman tidak memuat ulang browser. Tombol back dan forward tetap bekerja.

Paket di halaman harga mengirim pengunjung ke `/contact` dengan dropdown jenis website terisi otomatis, misalnya `/pricing` lalu klik "Pilih Paket" pada Pro UMKM akan membuka `/contact?jenis=umkm`.

---

## Struktur file

```text
jasa-umkm/
├── index.html              Shell tunggal, semua halaman dirender di sini
├── 404.html                Fallback hosting statis
├── .env                    Sumber konfigurasi utama
├── .env.example            Template .env
├── build-config.mjs        Mengubah .env menjadi assets/js/config.js
├── dev-server.mjs          Server lokal tanpa dependensi
├── check.mjs               Verifikasi konten dan struktur
├── browser-check.mjs       Verifikasi di browser sungguhan
├── package.json            Hanya script, tanpa dependensi
├── robots.txt              Dibuat otomatis dari CC_BASE_URL
├── sitemap.xml             Dibuat otomatis dari CC_BASE_URL
├── PRD.md
└── assets/
    ├── css/
    │   ├── tokens.css      Token warna, tipografi, radius, dua tema
    │   ├── base.css        Reset, tipografi dasar, animasi masuk
    │   ├── components.css  Navbar, tombol, card, bento, pricing, form
    │   └── pages.css       Komponen khusus halaman
    ├── fonts/              2 file woff2, self-hosted
    ├── img/
    │   └── favicon.svg
    └── js/
        ├── config.js       DIBUAT OTOMATIS dari .env
        ├── data.js         Semua konten: layanan, paket, portfolio, FAQ
        ├── ui.js           Helper markup
        ├── layout.js       Header, footer, tema, menu mobile
        ├── views.js        Fungsi render tiap route
        ├── router.js       Routing History API
        ├── reveal.js       Animasi masuk IntersectionObserver
        ├── faq.js          Accordion
        ├── portfolio.js    Filter project
        ├── contact.js      Validasi form dan pengiriman ke WhatsApp
        └── app.js          Titik masuk
```

### Di mana mengubah apa

| Mau ubah | Buka file |
|---|---|
| Nomor WA, email, sosmed, domain | `.env`, lalu `node build-config.mjs` |
| Teks layanan, harga, portfolio, FAQ, cara kerja | `assets/js/data.js` |
| Warna, font, ukuran, radius | `assets/css/tokens.css` |
| Tampilan komponen | `assets/css/components.css` |
| Isi dan urutan section tiap halaman | `assets/js/views.js` |

---

## Verifikasi

### Cek konten dan struktur

Tidak butuh browser dan tidak butuh install apa pun.

```bash
npm run check
```

Merender 7 route di Node lalu memeriksa: satu `h1` per halaman, urutan heading, alt text, dimensi gambar, tautan internal, label tombol, konsekuensi konfigurasi, dan masih adanya placeholder.

### Cek di browser

```bash
# terminal 1
node dev-server.mjs

# terminal 2
npm i -D playwright
npm run check:browser
```

Playwright bukan dependensi project, jadi harus dipasang sendiri. Script ini memakai Edge yang sudah ada di Windows, jadi tidak perlu mengunduh browser.

Memeriksa 46 hal: routing tanpa reload, tombol back dan forward, filter project, accordion, validasi form, preselect paket, tema terang dan gelap, menu mobile, reduced motion, dan nol overflow horizontal.

---

## Deploy

Website ini statis. Cukup upload semua file ke hosting. **Jangan upload `.env`** kalau repository-nya publik, tapi `assets/js/config.js` **harus** ikut terupload karena itu yang dibaca browser.

### Netlify, Vercel, Cloudflare Pages

Upload lewat drag and drop, atau hubungkan repository.

Aturan rewrite (wajib, kalau tidak `/pricing` akan 404):

```
/*    /index.html    200
```

### GitHub Pages

Upload ke branch, lalu aktifkan Pages. `404.html` sudah disiapkan sebagai fallback, jadi tidak perlu aturan tambahan.

### Nginx

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Yang perlu diganti sebelum upload

Isi `CC_BASE_URL` di `.env` dengan domain asli, lalu jalankan `node build-config.mjs`.

Satu nilai itu otomatis dipakai di lima tempat: tag `canonical`, `og:url`, JSON-LD, `robots.txt`, dan `sitemap.xml`. Tidak ada domain yang perludiedit manual di file lain.

---

## Sebelum rilis

- [ ] Isi `CC_WA_NUMBER` di `.env`, lalu `node build-config.mjs`
- [ ] Isi `CC_EMAIL` dengan alamat asli
- [ ] Isi `CC_BASE_URL` dengan domain asli
- [ ] Isi link Instagram, TikTok, dan LinkedIn di `.env`
- [ ] Buat `assets/img/og-cover.jpg` berukuran 1200 x 630
- [ ] Ganti 9 foto contoh di `assets/js/data.js` dengan screenshot website asli
- [ ] Ganti logo teks di `assets/js/layout.js` bila logo final sudah tersedia
- [ ] Pastikan aturan rewrite di hosting sudah aktif
- [ ] Cek tampilan di Safari dan Firefox, selama ini baru diuji di Edge

---

## Batasan yang diketahui

**Gambar.** Semua gambar masih foto contoh dari picsum, bukan screenshot website asli. Alt text sudah ditulis jujur sebagai "Foto contoh" dan tidak mengklaim sesuatu yang tidak ada. Halaman portfolio juga menampilkan pengungkapan bahwa isinya contoh, bukan klaim hasil kerja.

**Open Graph image.** `assets/img/og-cover.jpg` belum ada, jadi preview link di WhatsApp, Instagram, dan media sosial lain masih kosong.

**SEO.** Karena seluruh isi dirender JavaScript, Google membacanya setelah menjalankan JS. Meta title dan description tetap ada dan diperbarui per halaman, tapi lebih lambat diindeks dibanding halaman HTML statis. Sudah dipasang sitemap, robots, Open Graph, JSON-LD, dan satu `h1` per halaman untuk mengurangi dampak itu.

Kalau nanti traffic dari Google penting dan halaman ternyata tidak terindeks, langkah termurah adalah mengembalikan `services`, `pricing`, dan `faq` menjadi file HTML statis terpisah. Semua kontennya sudah ada di `assets/js/data.js`, jadi tidak ada pekerjaan yang terbuang.

**Browser.** Sudah diuji di Edge. Belum diuji di Safari dan Firefox.

**Konten.** Angka jumlah project dan klien di halaman About sengaja ditulis "Belum diisi" sampai ada data nyata. Belum ada testimoni klien yang ditampilkan, dan halaman portfolio diberi keterangan bahwa project-nya contoh.

---

## Dokumen lain

Kebutuhan produk, target user, struktur konten, dan acceptance criteria ada di [PRD.md](PRD.md).
