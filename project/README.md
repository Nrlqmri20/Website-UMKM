# Contoh Project: Website UMKM

Contoh desain website untuk **Kopi Lambuk**, kedai kopi tubruk di Banda Aceh. Dibuat sebagai bahan portofolio CodeCraft Digital.

Ini **bukan usaha sungguhan**. Nama, alamat, harga, dan nomor kontak semuanya fiktif dan hanya untuk keperluan demo.

---

## Menjalankan

Tidak butuh install apa pun. Buka `index.html` langsung di browser sudah jalan, karena tidak ada build step.

Kalau mau served lewat HTTP:

```bash
node dev-server.mjs
```

Buka `http://localhost:4173`.

---

## Yang ditunjukkan di contoh ini

| Bagian | Tujuannya |
|---|---|
| Hero | Nama produk dan jam buka langsung terlihat tanpa scroll |
| Menu dengan tab | Menu panjang tidak menumpuk jadi satu daftar gigantic |
| Cerita | Menjelaskan alasan di balik produk, bukan cuma daftar fitur |
| Galeri | Suasana tempat, bukan foto produk katalog |
| Kunjungi | Alamat, jam, kontak dalam satu blok yang mudah dipindai |
| Tema | Hijau tua dengan aksen amber, bukan coklat kopi |

## Keputusan desainworth noting

**Warna.** Palet hijau tua dengan aksen amber, di atas kanvas sage neutral. Sengaja menghindari beige dan kuning kopih yang jadi default semua website kopi, supaya contoh ini terlihat beda di portofolio.

**Tipografi.** Literata untuk judul, Figtree untuk teks. Keduanya self-hosted, total 59 KB.

**Gambar.** Tiga foto asli dari Wikimedia Commons dalam format WebP, 340 KB total. Kalau versi JPG asli, ukurannya 1,8 MB. Format WebP menghemat 73 persen.

**Gerakan.** Hanya animasi masuk saat elemen terlihat pertama kali, pakai `IntersectionObserver` bukan scroll listener. Semua mati otomatis kalau pengguna mengaktifkan reduce motion di sistem.

---

## Struktur

```text
project/
├── index.html
├── CREDITS.md
├── dev-server.mjs
└── assets/
    ├── css/
    │   ├── tokens.css      Warna, tipografi, radius
    │   ├── base.css        Reset, tipografi dasar, animasi
    │   └── components.css  Semua komponen
    ├── fonts/              Literata dan Figtree, variable font
    ├── img/                WebP, 340 KB
    └── js/main.js          Tab menu, menu mobile, animasi masuk
```

## Kalau mau dipakai ulang

1. Ganti isi `index.html` dengan data usaha sebenarnya.
2. Ganti file di `assets/img/` dengan foto asli, format WebP, lebar 1400px untuk hero dan 900px untuk galeri.
3. Ganti warna di `assets/css/tokens.css`. Seluruh halaman mengikuti dari satu tempat itu.
4. Perbarui `CREDITS.md` kalau masih memakai foto dari Wikimedia Commons.
5. Ganti nama dan inisial di `index.html` bagian header dan footer.

## Yang perlu diganti kalau dipakai untuk klien sungguhan

- Nomor telepon dan WhatsApp masih contoh
- Alamat dan peta belum ada
- Belum ada halaman privacy atau kebijakan privasi
- Belum ada structured data untuk SEO lokal
- Belum ada skema warna gelap
- Nama jalan, harga, dan jam buka masih fiktif

---

## Kredit

Semua foto dari Wikimedia Commons. Lihat [CREDITS.md](CREDITS.md) untuk atribusi lengkap.