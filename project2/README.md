# Contoh Project: Gorengan Tahu Walik

Contoh desain website untuk **Tahu Walik Nuyyol**, penjual gorengan tahu walik di Banda Aceh. Dibuat sebagai bahan portofolio CodeCraft Digital.

Ini **bukan website usaha sungguhan**. Nama, alamat, harga, jam, dan testimony semua fiktif.

---

## Menjalankan

Tanpa install apa pun. Buka `index.html` langsung di browser sudah jalan.

```bash
node dev-server.mjs
```

Kalau diletakkan di dalam repository yang juga punya SPA, buka lewat `http://localhost:4173/project2/` dengan garis miring di akhir. Tanpa garis miring, aset tidak akan ditemukan.

---

## Yang ditunjukkan di contoh ini

| Bagian | Tujuannya |
|---|---|
| Pita peringatan | Menandai dengan jelas bahwa ini contoh, bukan website nyata |
| Harga di hero | Gorengan adalah keputusan cepat, harga harus langsung terlihat |
| Penjelasan tahu walik | Banyak orang belum tahu apa itu walik, jadi ada section penjelasan |
| Tiga kartu harga | Tiga isian, tidak perlu tab untuk deskripsi pendek ini |
| Cara buat | Empat langkah, memperkuat kesan buatan tangan |
| Galeri | Empat foto dengan komposisi tidak simetris, bukan grid rata |

## Keputusan desain

**Warna.** Maroon tua dengan aksen merah chili, di atas kanvas krem hangat. Sengaja berbeda dari contoh Kopi Lambuk yang hijau dan amber, supaya dua portofolio ini tidak terlihat berasal dari template yang sama.

**Tipografi.** Archivo (tebal, display) untuk judul, Be Vietnam Pro untuk teks. Untuk gorengan, judulnya perlu terlihat besar dan cepat terbaca dari jauh.

**Keseluruhan.** 215 KB. Empat foto WebP, dua font variable.

**Gerakan.** Sama seperti contoh Kopi Lambuk, hanya animasi masuk pakai `IntersectionObserver`, dan mati otomatis saat pengguna mengaktifkan reduce motion.

---

## Yang perlu Anda perbaiki kalau dipakai untuk klien sungguhan

- **Nomor WhatsApp sengaja dikosongkan.** Di contoh Kopi Lambuk ada nomor telepon karangan yang berisiko; di sini tidak ada. Kalau menambah nomor, pakai yang benar-benar milik klien.
- `noindex` di meta robot. Hapus begitu situsnya benar-benar mau masuk pencarian.
- Alamat dan peta belum ada.
- Belum ada structured data untuk schema produk dan Toko Lokal.
- Belum ada skema warna gelap.
- Nama jalan, harga, dan jam masih fiktif.

## Catatan tentang isi

Tahu walik **bukan** jajanan khas Banda Aceh. Asalnya Banyuwangi, Jawa Timur. Kata "walik" merujuk pada teknik membalik tahu pong sebelum diisi adonan aci.

Konten contoh ini sengaja ditulis sebagai "gorengan tahu walik di Banda Aceh", bukan "khas Aceh". Kalau ada yang membuat versi serupa, jangan mengklaim asal usulnya salah, karena itu mudah sekali diverifikasi calon klien.

---

## Kredit

Semua foto dari Wikimedia Commons. Lihat [CREDITS.md](CREDITS.md) untuk atribusi lengkap dan catatan foto yang sengaja tidak dipakai.