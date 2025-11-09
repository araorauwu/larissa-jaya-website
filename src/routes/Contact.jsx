import { social } from '../data/catalog'
import { waLink } from '../utils/helpers'

export default function Contact(){

  // Pesan otomatis WA yang mau dikirim
  const defaultMessage = "Halo kak, saya mau tanya tentang produk di Larissa Jaya 😊";

  return (
    <div className="container-narrow py-10">
      <h1 className="text-2xl font-bold">Kontak & Lokasi</h1>

      <p className="mt-2 text-gray-600">
        {social.address}
      </p>

      <p className="mt-1">
        Telp/WA:{" "}
        <a
          className="underline text-blue-600"
          href={waLink({ phone: social.phone, text: defaultMessage })}
          target="_blank"
          rel="noreferrer"
        >
          0{social.phone.slice(2)}
        </a>
      </p>

      <div className="mt-4 flex gap-3">
        {/* Tombol WA otomatis isi pesan */}
        <a
          href={waLink({ phone: social.phone, text: defaultMessage })}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
        >
          Chat WhatsApp
        </a>

        {/* Tombol Google Maps */}
        <a
          href={social.maps}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl border hover:bg-gray-50 transition"
        >
          Buka Google Maps
        </a>
      </div>

      {/* Peta Lokasi */}
      <div className="mt-8 rounded-2xl overflow-hidden border bg-white aspect-video">
        <iframe
          title="Larissa Jaya Map"
          src="https://www.google.com/maps?q=Larissa%20Jaya%20Tlogorejo%20Karangawen%20Demak&output=embed"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}
