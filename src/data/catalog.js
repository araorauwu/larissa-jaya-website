// src/data/catalog.js
export const social = {
  phone: "6288239593991",   // GANTI HANYA INI (format internasional tanpa +)
  address: "Tlogogedong RT 03 / RW 03, Desa Tlogorejo, Kec. Karangawen, Kab. Demak (59566)",
  maps: "https://maps.app.goo.gl/XoKkfrtvte3UWpJc8",
  instagram: "https://www.instagram.com/larissa_jaya/",
  tiktok: "https://www.tiktok.com/@larissa_jayaa",
  shopee: "#",
  tokopedia: "#"
};

export const categories = [
  { slug: 'sandal', name: 'Sandal', desc: 'Sandal untuk semua usia', subs: ['Wanita','Pria','Anak'] },
  { slug: 'sepatu', name: 'Sepatu', desc: 'Sekolah, kasual, anak & bayi', subs: ['Sekolah','Casual','Anak','Bayi'] },
  { slug: 'seragam-sekolah', name: 'Seragam Sekolah', desc: 'Seragam & atribut', subs: ['SD','SMP','SMA','Pramuka','Atribut'] },
  { slug: 'tas', name: 'Tas', desc: 'Tas sekolah & kasual', subs: ['Sekolah','Ransel','Tas Korea','Selempang','Casual','Totebag'] },
  { slug: 'topi', name: 'Topi', desc: 'Berbagai topi', subs: ['Topi Casual','Topi Anak','Topi Pantai','Topi Sekolah'] },
  { slug: 'mainan', name: 'Mainan', desc: 'Mainan anak', subs: ['Edukasi','Mobil','Robot','Boneka','Mainan Anak Perempuan'] },
  { slug: 'atk', name: 'ATK', desc: 'Alat tulis & perlengkapan', subs: ['Buku & Kertas','Alat Tulis','Pewarna','Kaos Kaki Sekolah','Kaos Kaki Pria','Kaos Kaki Wanita','Kaos Kaki Anak'] },
  { slug: 'aksesoris', name: 'Aksesoris', desc: 'Aksesoris rambut & lainnya', subs: ['Jedai','Bando','Bross','Gantungan Kunci','Kuncir','Jepit Rambut','Kaca','Lainnya'] },
  { slug: 'perlengkapan-sholat', name: 'Perlengkapan Sholat', desc: 'Ibadah nyaman', subs: ['Mukena','Sarung','Sajadah','Peci'] },
  { slug: 'perlengkapan-lainnya', name: 'Perlengkapan Lainnya', desc: 'Kebutuhan lain', subs: ['Ikat Pinggang','Sprei','Bed Cover','Lainnya'] },
];

// contoh produk minimal — pastikan hanya *satu* export products di file ini
export const products = [
  { id: 'SND-001', name: 'Sandal Wanita Karet', category: 'sandal', sub: 'Wanita', img: 'https://picsum.photos/seed/sandalw/640/480', note: 'Ringan & nyaman', price: 35000, stock: 12 },
  { id: 'SND-002', name: 'Sandal Pria Jepit', category: 'sandal', sub: 'Pria', img: 'https://picsum.photos/seed/sandalp/640/480', note: 'Tangguh & ekonomis', price: 30000, stock: 20 },
  { id: 'SND-003', name: 'Sandal Anak Motif', category: 'sandal', sub: 'Anak', img: 'https://picsum.photos/seed/sandala/640/480', note: 'Lucu & aman', price: 25000, stock: 7 },
  { id: 'SPT-001', name: 'Sepatu Sekolah Hitam', category: 'sepatu', sub: 'Sekolah', img: 'https://picsum.photos/seed/sekolah/640/480', note: 'Tahan lama', price: 120000, stock: 8 },
  { id: 'SRG-001', name: 'Seragam Putih Abu', category: 'seragam-sekolah', sub: 'SMA', img: 'https://picsum.photos/seed/srag/640/480', note: 'Bahan adem', price: 90000, stock: 5 },
  { id: 'TAS-001', name: 'Tas Ransel', category: 'tas', sub: 'Ransel', img: 'https://picsum.photos/seed/ransel/640/480', note: 'Kuat & ringan', price: 150000, stock: 10 },
  { id: 'MN-001', name: 'Mainan Edukasi Puzzle', category: 'mainan', sub: 'Edukasi', img: 'https://picsum.photos/seed/edukasi/640/480', note: 'Asah motorik', price: 45000, stock: 18 },
  { id: 'ATK-001', name: 'Buku Tulis A5', category: 'atk', sub: 'Buku & Kertas', img: 'https://picsum.photos/seed/atk/640/480', note: 'Isi 38 lembar', price: 8000, stock: 50 },
  { id: 'AKS-001', name: 'Jedai Rambut', category: 'aksesoris', sub: 'Jedai', img: 'https://picsum.photos/seed/jedai/640/480', note: 'Warna-warni', price: 12000, stock: 30 },
  { id: 'PS-001', name: 'Mukena Katun', category: 'perlengkapan-sholat', sub: 'Mukena', img: 'https://picsum.photos/seed/mukena/640/480', note: 'Lembut & adem', price: 85000, stock: 6 },
];
