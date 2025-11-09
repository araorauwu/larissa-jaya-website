import { waLink } from '../utils/helpers'

export default function WhatsAppButton({ text = "Pesan via WhatsApp" }) {
  const phone = "6288239593991"; // nomor toko format internasional

  // Pesan otomatis (URL Encoded)
  const message = encodeURIComponent("Halo kak, saya mau tanya tentang produk di Larissa Jaya 😊");

  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-xl inline-flex items-center"
    >
      {text}
    </a>
  );
}
