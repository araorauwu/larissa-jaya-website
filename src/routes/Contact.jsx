import { social } from '../data/catalog'

export default function Contact(){

  // ✅ Gunakan nomor dari data toko (social.phone)
  const phone = social.phone;

  // ✅ Pesan otomatis WhatsApp
  const message = encodeURIComponent("Halo kak, saya mau tanya tentang produk di Larissa Jaya 😊");

  // ✅ Link WA dengan pesan otomatis
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="container-narrow py-10">
      <h1 className="text-2xl font-bold">Kontak & Lokasi</h1>

      <p className="mt-2 text-gray-600">{social.address}</p>

      <p className="mt-1">
        Telp/WA:{" "}
        <a
          className="underline text-blue-600"
          href={waUrl}
          target="_blank"
          rel="noreferrer"
        >
          0{phone.slice(2)}
        </a>
      </p>

      <div className="mt-4 flex gap-3">
        <a
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
        >
          Chat WhatsApp
        </a>

        <a
          href={social.maps}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl border hover:bg-gray-50 transition"
        >
          Buka Google Maps
        </a>
      </div>

      <div className="mt-8 rounded-2xl overflow-hidden border bg-white aspect-video">
        <iframe
          title="Larissa Jaya Map"
          src={`${social.maps}&output=embed`}
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}
