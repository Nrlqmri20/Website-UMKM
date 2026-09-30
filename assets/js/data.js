export const brand = {
  name: "CodeCraft",
  suffix: "Digital",
  mark: "CC",
};

export const routes = [
  { id: "home", label: "Home", path: "" },
  { id: "services", label: "Services", path: "services" },
  { id: "portfolio", label: "Portfolio", path: "portfolio" },
  { id: "pricing", label: "Pricing", path: "pricing" },
  { id: "about", label: "About", path: "about" },
  { id: "faq", label: "FAQ", path: "faq" },
  { id: "contact", label: "Contact", path: "contact" },
];

export const valueProps = [
  {
    title: "Tampak lebih profesional",
    body: "Tampilan rapi dan modern bikin calon pelanggan lebih yakin pada usaha kamu.",
  },
  {
    title: "Dijangkau kapan saja",
    body: "Buka 24 jam tanpa tutup, termasuk dari HP di luar jam operasional.",
  },
  {
    title: "Satu tempat info resmi",
    body: "Produk, lokasi, jam buka, dan kontak terkumpul dalam satu halaman milik kamu.",
  },
  {
    title: "Bisa tumbuh bersama",
    body: "Mulai dari satu halaman, lalu tambah katalog atau blog saat usaha berkembang.",
  },
];

export const services = [
  {
    id: "umkm",
    name: "Website UMKM",
    kicker: "Layanan utama",
    featured: true,
    summary:
      "Halaman yang menjelaskan usaha kamu, menampilkan produk atau layanan, lalu memberi tombol WhatsApp yang bisa langsung diketuk pengunjung.",
    target: "kedai kopi, toko, perajin, jasa laundry, travel, dan usaha lokal lain.",
    tags: [
      "Halaman utama",
      "Tentang usaha",
      "Katalog produk",
      "Galeri",
      "Lokasi dan Google Maps",
      "Tombol WhatsApp",
      "SEO dasar",
    ],
    details: [
      "Halaman utama dan halaman tentang usaha",
      "Katalog produk atau layanan",
      "Galeri foto",
      "Lokasi usaha dan Google Maps",
      "Tombol WhatsApp di setiap halaman penting",
      "SEO dasar supaya mudah ditemukan di Google",
    ],
    image: "https://picsum.photos/seed/codecraft-layanan-website-umkm/1000/750",
    imageAlt: "Foto contoh website toko lokal",
    imageCaption:
      "Halaman katalog dengan tombol WhatsApp yang mengetuk langsung ke nomor usaha.",
  },
  {
    id: "portfolio",
    name: "Personal portfolio",
    kicker: "Portofolio",
    featured: false,
    summary:
      "Satu halaman untuk menampilkan karya, pengalaman, dan keahlian supaya calon klien langsung melihat hasil kerja tanpa perlu presentasi.",
    target: "designer, fotografer, ilustrator, kreator, konsultan, dan mahasiswa yang cari kerja.",
    tags: [
      "Profil singkat",
      "Portofolio",
      "Keahlian",
      "Pengalaman",
      "Testimoni",
      "Kontak",
    ],
    details: [
      "Profil singkat dan tentang saya",
      "Galeri karya atau project",
      "Daftar keahlian",
      "Pengalaman dan pendidikan",
      "Testimoni",
      "Halaman kontak dan WhatsApp",
    ],
    image: "https://picsum.photos/seed/codecraft-layanan-portofolio-pribadi/1000/750",
    imageAlt: "Foto contoh portofolio pribadi seorang desainer",
    imageCaption:
      "Portofolio pribadi yang bisa dibuka dari HP saat meeting dengan klien.",
  },
  {
    id: "maintenance",
    name: "Website maintenance",
    kicker: "Setelah selesai",
    featured: false,
    summary:
      "Website yang sudah jadi tetap perlu dirawat. Paket ini menutup update isi, keamanan, dan perbaikan kecil setiap bulan.",
    target: "klien yang website-nya sudah jadi dan masih aktif dipakai.",
    tags: [
      "Update konten",
      "Backup",
      "Pemeriksaan keamanan",
      "Perubahan minor",
      "Bantuan teknis",
    ],
    details: [
      "Update konten yang kamu minta",
      "Backup berkala",
      "Pemeriksaan keamanan",
      "Perubahan minor tanpa biaya tambahan",
      "Bantuan teknis lewat WhatsApp",
    ],
    image: "https://picsum.photos/seed/codecraft-maintenance-website/1000/750",
    imageAlt: "Foto contoh pemeliharaan website",
    imageCaption:
      "Perawatan berkala supaya isi website tetap relevan dan situsnya tetap aman.",
  },
];

export const reasons = [
  {
    kicker: "Target pengerjaan",
    title: "3-5 hari kerja",
    body: "Lama tergantung paket, kompleksitas, dan seberapa lengkap materi yang kamu siapkan.",
    variant: "media",
    image: "https://picsum.photos/seed/codecraft-kerja-sama-pelanggan/1200/800",
    imageAlt: "Foto contoh meja kerja",
  },
  {
    kicker: "Harga",
    title: "Dibuat untuk usaha yang sedang tumbuh",
    body: "Paket jelas sejak awal, jadi tidak ada kejutan di tengah jalan.",
    variant: "accent",
  },
  {
    kicker: "Desain",
    title: "Modern dan responsif",
    body: "Tampilan rapi di desktop, tablet, dan HP.",
  },
  {
    kicker: "Komunikasi",
    title: "Bahasa yang mudah dipahami",
    body: "Penjelasan tanpa istilah teknis yang bikin bingung.",
    variant: "tint",
  },
  {
    kicker: "Setelah selesai",
    title: "Bukan dilepas begitu saja",
    body: "Tersedia maintenance dan bantuan teknis kalau ada yang perlu dibenahi.",
  },
];

export const process = [
  {
    title: "Discovery",
    body: "Kita obrol soal kebutuhan, target, dan bahan yang sudah kamu punya.",
  },
  {
    title: "Planning",
    body: "Struktur halaman, isi, dan arah desain ditetapkan dulu sebelum mulai dibuat.",
  },
  {
    title: "Design dan build",
    body: "Website dirancang dan dikerjakan, lalu kamu bisa lihat hasilnya di tengah jalan.",
  },
  {
    title: "Review",
    body: "Kamu cek hasilnya dan beri masukan. Perbaikan masuk tanpa biaya tambahan.",
  },
  {
    title: "Launch",
    body: "Website dipublikasikan, domain diarahkan, dan akses diserahkan ke kamu.",
  },
];

export const plans = [
  {
    id: "personal",
    name: "Personal",
    price: "Rp500.000",
    period: "",
    badge: "",
    featured: false,
    slim: false,
    for: "Untuk personal branding dan portofolio pribadi.",
    features: [
      "Satu landing page",
      "Desain responsif",
      "Portofolio karya",
      "Halaman kontak",
      "Tombol WhatsApp",
      "SEO dasar",
    ],
    note: "Sekali bayar. Pengerjaan 3-5 hari kerja.",
  },
  {
    id: "umkm",
    name: "Pro UMKM",
    price: "Rp1.200.000",
    period: "",
    badge: "Paling populer",
    featured: true,
    slim: false,
    for: "Untuk bisnis yang mau tampil lebih lengkap dan profesional.",
    features: [
      "3 sampai 5 halaman",
      "Desain responsif",
      "Katalog produk atau layanan",
      "Lokasi dan Google Maps",
      "Tombol WhatsApp",
      "SEO dasar",
      "Integrasi media sosial",
    ],
    note: "Sekali bayar. Pengerjaan 3-5 hari kerja.",
  },
  {
    id: "maintenance",
    name: "Maintenance",
    price: "Rp100.000",
    period: "per bulan",
    badge: "",
    featured: false,
    slim: true,
    for: "Untuk website yang sudah jadi dan tetap perlu dirawat.",
    features: [
      "Update konten",
      "Backup berkala",
      "Pemeriksaan keamanan",
      "Perubahan minor",
      "Bantuan teknis",
    ],
    note: "Bayar per bulan. Bisa berhenti kapan saja.",
  },
];

export const domainNotice = {
  title: "Belum termasuk domain dan hosting",
  body: "Harga paket hanya untuk pengerjaan website. Domain dan hosting dihitung terpisah, karena biayanya berubah tiap tahun dan tiap penyedia. Kami bantu pilih yang paling pas sebelum kamu membayar.",
};

export const prepareList = [
  {
    title: "Nama usaha",
    body: "Nama resmi atau nama yang ingin dipakai di website.",
  },
  {
    title: "Foto",
    body: "Foto usaha, produk, atau karya. Foto HP yang terang juga cukup.",
  },
  {
    title: "Tulisan singkat",
    body: "Ceritakan usaha kamu dalam beberapa kalimat. Bisa dibantu disusun.",
  },
  {
    title: "Informasi penting",
    body: "Alamat, jam buka, nomor WhatsApp, dan harga kalau perlu ditampilkan.",
  },
];

export const portfolioFilters = [
  { id: "all", label: "Semua project" },
  { id: "umkm", label: "Website UMKM" },
  { id: "portfolio", label: "Personal portfolio" },
  { id: "landing", label: "Landing page" },
];

export const portfolio = [
  {
    id: "kopi-siang",
    title: "Kopi Siang",
    client: "Kedai kopi lokal",
    category: "umkm",
    categoryLabel: "Website UMKM",
    year: "2026",
    summary: "Halaman menu, jam buka, dan lokasi yang enak dibuka dari layar ponsel.",
    image: "https://picsum.photos/seed/codecraft-kedai-kopi-lokal/1200/900",
    imageAlt: "Foto contoh website kedai kopi lokal",
    liveUrl: "",
    demo: true,
  },
  {
    id: "studio-raka",
    title: "Studio Raka",
    client: "Fotografer independen",
    category: "portfolio",
    categoryLabel: "Personal portfolio",
    year: "2026",
    summary: "Portofolio foto dengan halaman detail per sesi dan tombol WhatsApp di tiap foto.",
    image: "https://picsum.photos/seed/codecraft-fotografer-portfolio/1200/900",
    imageAlt: "Foto contoh portofolio seorang fotografer",
    liveUrl: "",
    demo: true,
  },
  {
    id: "batik-kita",
    title: "Batik Kita",
    client: "Perajin batik, Aceh Besar",
    category: "umkm",
    categoryLabel: "Website UMKM",
    year: "2026",
    summary: "Katalog motif batik dan kanal pemesanan lewat WhatsApp.",
    image: "https://picsum.photos/seed/codecraft-batik-katalog/1200/900",
    imageAlt: "Foto contoh katalog produk batik",
    liveUrl: "",
    demo: true,
  },
  {
    id: "kelas-masak",
    title: "Kelas Masak Ruumah",
    client: "Kelas masak rumahan",
    category: "landing",
    categoryLabel: "Landing page",
    year: "2026",
    summary: "Landing page satu halaman untuk pendaftaran kelas, dengan formulir singkat.",
    image: "https://picsum.photos/seed/codecraft-landing-page-kelas-masak/1200/900",
    imageAlt: "Foto contoh landing page kelas masak",
    liveUrl: "",
    demo: true,
  },
];

export const portfolioDisclosure = {
  title: "Project contoh, bukan klien sungguhan",
  body: "CodeCraft Digital baru mulai, jadi halaman ini dipakai untuk menunjukkan bentuk layanan, bukan klaim hasil kerja. Begitu ada project milik klien asli, gambar dan detailnya akan diganti dengan yang asli.",
  notes: [
    "Semua gambar di sini masih foto contoh",
    "Belum ada tautan website yang bisa dibuka",
    "Belum ada testimoni klien yang ditampilkan",
  ],
};

export const faqs = [
  {
    q: "Apakah saya harus mempunyai domain sendiri?",
    a: "Belum harus. CodeCraft Digital bisa membantu proses pembelian dan pengelolaan domain supaya kamu tidak perlu reban sendiri.",
  },
  {
    q: "Apakah website bisa dibuka melalui HP?",
    a: "Bisa. Setiap website yang kami buat dirancang responsif untuk desktop, tablet, dan smartphone.",
  },
  {
    q: "Berapa lama pengerjaannya?",
    a: "Target pengerjaan sekitar 3-5 hari kerja, tergantung paket, kompleksitas, dan kelengkapan materi yang kamu siapkan.",
  },
  {
    q: "Apakah saya harus menyediakan foto dan tulisan?",
    a: "Materi dari kamu sangat membantu proses pengerjaan. Kalau belum punya, kami akan kasih panduan materi yang perlu disiapkan.",
  },
  {
    q: "Apakah isi website masih bisa diubah setelah selesai?",
    a: "Bergantung pada paket yang dipakai. Pada paket dengan akses editor, kamu bisa mengubah isi sendiri. Kalau belum, kami bisa bantu lewat layanan maintenance.",
  },
  {
    q: "Apakah harga sudah termasuk domain dan hosting?",
    a: "Belum termasuk. Harga paket hanya untuk pengerjaan website. Domain dan hosting dihitung terpisah, dan kami akan bantu rekomendasikan paket yang paling sesuai sebelum kamu memutuskan.",
  },
];

export const values = [
  {
    title: "Jujur soal harga",
    body: "Kalau kebutuhan kamu lebih kecil dari paketnya, kami sarankan paket yang lebih kecil.",
  },
  {
    title: "Bahasa yang mudah",
    body: "Penjelasan tanpa istilah teknis yang bikin pemilik usaha bingung.",
  },
  {
    title: "Bisa diubah sendiri",
    body: "Website dibangun supaya kamu bisa mengubah isi sendiri waktu sudah paham.",
  },
  {
    title: "Tidak ditinggal begitu saja",
    body: "Tersedia maintenance kalau ada yang perlu diperbaiki setelah website jadi.",
  },
];

export const facts = [
  { term: "Fokus layanan", detail: "Website UMKM, personal portfolio, dan landing page" },
  { term: "Wilayah", detail: "Banda Aceh dan sekitarnya, menerima order dari luar daerah" },
  { term: "Target pengerjaan", detail: "3 sampai 5 hari kerja, tergantung kelengkapan materi" },
  {
    term: "Project selesai",
    detail: "Belum diisi. Angka ini muncul setelah ada project sungguhan yang bisa dihitung.",
    pending: true,
  },
  {
    term: "Klien dilayani",
    detail: "Belum diisi. Angka ini muncul setelah ada klien sungguhan yang bisa dihitung.",
    pending: true,
  },
];

export const aboutCopy = [
  "CodeCraft Digital membuat website untuk orang yang produknya sudah bagus tapi belum punya tempat resmi untuk menunjukkannya. Umumnya pelanggan kami pemilik warung, toko, pengrajin, dan orang yang mencari kerja lewat karya.",
  "Kami mengerjakan sendiri dari awal sampai website-nya online, tanpa melibatkan pihak ketiga yang tidak kamu kenal.",
  "Semua bahasa yang kami pakai sengaja dibuat sederhana, supaya kamu tahu persis apa yang dibayar dan apa yang dikerjakan.",
];

export const testimonial = {
  text: "Jadilah salah satu cerita sukses digital pertama kami.",
  note: "CodeCraft Digital masih di awal, jadi belum ada testimoni asli yang bisa ditampilkan. Kalau kamu jadi klien pertama, ceritamu akan tampil di halaman ini.",
};

export const pageMeta = {
  home: {
    title: "CodeCraft Digital | Website Profesional untuk UMKM dan Personal Brand",
    description:
      "CodeCraft Digital membuat website untuk UMKM, freelancer, dan profesional di Banda Aceh. Target pengerjaan 3-5 hari kerja dengan harga yang jelas.",
  },
  services: {
    title: "Layanan Pembuatan Website UMKM dan Portfolio | CodeCraft Digital",
    description:
      "Layanan CodeCraft Digital: website UMKM, personal portfolio, dan website maintenance. Isi lengkap tiap paket beserta apa saja yang termasuk.",
  },
  portfolio: {
    title: "Portfolio Website UMKM dan Personal Brand | CodeCraft Digital",
    description:
      "Kumpulan project website yang dibuat CodeCraft Digital untuk UMKM, personal brand, dan landing page. Bisa disaring sesuai jenis layanan.",
  },
  pricing: {
    title: "Harga Pembuatan Website | CodeCraft Digital",
    description:
      "Harga paket website CodeCraft Digital: personal Rp500.000, Pro UMKM Rp1.200.000, dan maintenance Rp100.000 per bulan. Lihat rincian tiap paket dan apa saja yang termasuk di dalamnya.",
  },
  about: {
    title: "Tentang CodeCraft Digital",
    description:
      "CodeCraft Digital adalah layanan pembuatan website untuk UMKM, freelancer, dan profesional di Banda Aceh. Fokus pada website yang praktis dan mudah dipakai.",
  },
  faq: {
    title: "FAQ Pembuatan Website | CodeCraft Digital",
    description:
      "Pertanyaan yang sering masuk soal domain, hosting, biaya, lama pengerjaan, dan apa yang terjadi setelah website selesai di CodeCraft Digital.",
  },
  contact: {
    title: "Konsultasi Gratis | CodeCraft Digital",
    description:
      "Konsultasi gratis bersama CodeCraft Digital. Ceritakan kebutuhan website usaha kamu dan dapatkan saran paket yang paling masuk akal.",
  },
};

export const headings = {
  home: {
    eyebrow: "Website UMKM dan personal brand",
    titleLead: "Website profesional untuk",
    titleAccent: "bisnis",
    titleTail: "dan personal brand.",
    sub: "Bantu UMKM, freelancer, dan profesional punya website yang cepat, rapi, dan enak dibuka dari HP.",
    heroImage: "https://picsum.photos/seed/codecraft-website-untuk-umkm/1000/1250",
    heroAlt: "Foto contoh untuk halaman depan website UMKM",
    heroCaption: "Contoh halaman depan website UMKM yang dibuat CodeCraft Digital.",
  },
  services: { title: "Layanan pembuatan website", sub: "Tiga layanan yang bisa dipilih sendiri atau digabung, tergantung keadaan usaha kamu." },
  portfolio: { title: "Project website", sub: "Kumpulan halaman yang dibuat untuk UMKM, personal brand, dan landing page. Saring sesuai jenis layanan." },
  pricing: { title: "Harga paket", sub: "Harga tetap, apa yang kamu dapat terlihat jelas, dan tidak ada biaya tersembunyi di tengah jalan." },
  about: { title: "Kami adalah CodeCraft Digital", sub: "Layanan digital kecil yang membantu UMKM, freelancer, dan profesional punya website yang layak dipakai untuk jualan dan cari kerja." },
  faq: { title: "Pertanyaan yang sering masuk", sub: "Soal domain, biaya, pengerjaan, dan apa yang terjadi setelah website kamu jadi." },
  contact: { title: "Konsultasi gratis", sub: "Isi formulirnya, nanti pesannya otomatis tersusun di WhatsApp supaya tinggal kamu kirim." },
};

export const ctaBand = {
  home: {
    title: "Siap punya website yang bisa dipakai jualan?",
    body: "Ceritakan kebutuhan usaha kamu, lalu kita tentukan paket yang paling masuk akal. Konsultasi pertama gratis.",
    secondary: { label: "Lihat Harga", path: "pricing" },
  },
  services: {
    title: "Belum yakin paket mana yang cocok?",
    body: "Kirim kebutuhan usaha kamu, nanti kami bantu pilihkan paket yang paling masuk akal.",
    secondary: { label: "Lihat Harga", path: "pricing" },
  },
  pricing: {
    title: "Mau tanya harga khusus?",
    body: "Kalau kebutuhan kamu di luar paket di atas, ceritakan saja. Biasanya masih bisa disesuaikan.",
    secondary: { label: "Lihat semua layanan", path: "services" },
  },
  about: {
    title: "Mau ngobrol dulu?",
    body: "Tidak ada biaya dan tidak ada kewajiban apa pun. Ceritakan usaha kamu, nanti kami kasih arah.",
    secondary: { label: "Lihat semua layanan", path: "services" },
  },
  faq: {
    title: "Pertanyaanmu tidak ada di sini?",
    body: "Tanya langsung. Pertanyaan yang sering muncul nanti kami masukkan ke halaman ini juga.",
    secondary: null,
  },
  portfolio: {
    title: "Mau lihat seperti apa website untuk usaha kamu?",
    body: "Kirim kebutuhanmu, nanti kami tunjukkan arah rancangan yang paling masuk akal.",
    secondary: null,
  },
  contact: null,
};
