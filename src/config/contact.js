// Kontak & tautan resmi Larissa Jaya
export const STORE = {
  name: "Larissa Jaya",

  // Nomor WhatsApp toko (format: 62xxxxxxxxxx)
  waNumber: "6288239593991",

  // Pesan default saat klik tombol WA
  defaultMessage: "Halo Larissa Jaya! Saya ingin tanya stok / harga.",

  // Lokasi
  address: "Tlogorejo, Karangawen, Demak",
  mapUrl: "https://maps.app.goo.gl/XoKkfrtvte3UWpJc8",

  // Sosial
  instagram: "https://www.instagram.com/larissa_jaya?igsh=YnRmc2gzYnc5bDU2",
  tiktok: "https://www.tiktok.com/@larissa_jayaa",

  // Marketplace (belum aktif → nanti tinggal ubah)
  shopee: "", // contoh format nanti: https://shopee.co.id/username
  tokopedia: "", // contoh format: https://tokopedia.com/username
};

// Build link WhatsApp dengan pesan custom
export function buildWaLink(text = STORE.defaultMessage) {
  const msg = encodeURIComponent(text);
  return `https://wa.me/${STORE.waNumber}?text=${msg}`;
}
