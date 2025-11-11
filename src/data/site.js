export const SITE = {
  name: "Larissa Jaya",
  tagline: "Belanja Nyaman, Harga Bersahabat",
  locationText: "Tlogorejo, Karangawen, Demak",
};

export const CONTACT = {
  waNumber: "6288239593991",
  waText:
    "Halo Larissa Jaya! Saya ingin tanya stok/harga. (kirimkan nama barang & foto jika ada ya)",
  instagram:
    "https://www.instagram.com/larissa_jaya?igsh=YnRmc2gzYnc5bDU2",
  tiktok: "https://www.tiktok.com/@larissa_jayaa",
  maps: "https://maps.app.goo.gl/XoKkfrtvte3UWpJc8",
  shopee: "#",
  tokopedia: "#",
};

export function buildWaLink() {
  const msg = encodeURIComponent(CONTACT.waText);
  return `https://wa.me/${CONTACT.waNumber}?text=${msg}`;
}
