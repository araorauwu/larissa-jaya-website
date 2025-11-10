// D:\KULIAH\larissa-jaya-website\src\routes\Contact.jsx
import { social } from "../data/catalog";

export default function Contact() {
  const msg = encodeURIComponent("Halo kak, saya mau tanya tentang produk di Larissa Jaya 😊");
  const wa = `https://wa.me/${social.phone}?text=${msg}`;

  return (
    <div className="container-narrow py-10 space-y-10">

      {/* Banner Foto Toko */}
      <div className="card overflow-hidden shadow-sm">
        <img
          src="/hero/store_hero.jpg"
          alt="Toko Larissa Jaya Tampak Depan"
          className="w-full h-[68vh] object-cover object-[40%_24%] rounded-2xl"
        />
      </div>

      {/* BRAND TITLE & SUBTEXT */}
      <div className="text-center mt-2">
        <h1 className="text-3xl font-extrabold text-rose-700 tracking-tight">
          Larissa Jaya
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Tlogorejo · Karangawen · Demak
        </p>
      </div>

      {/* Informasi Kontak */}
      <div className="space-y-2 text-center">
        <p className="text-gray-700">{social.address}</p>
        <p className="text-gray-700">
          Telp/WA:{" "}
          <a
            className="underline"
            href={`https://wa.me/${social.phone}`}
            target="_blank"
            rel="noreferrer"
          >
            0{social.phone.slice(2)}
          </a>
        </p>
      </div>

      {/* Tombol Aksi */}
      <div className="flex justify-center gap-3">
        <a href={wa} target="_blank" rel="noreferrer" className="btn-primary">
          Chat WhatsApp
        </a>
        <a href={social.maps} target="_blank" rel="noreferrer" className="btn-ghost">
          Buka Google Maps
        </a>
      </div>

      {/* Google Maps */}
      <div className="rounded-2xl overflow-hidden border bg-white aspect-video">
        <iframe
          title="Lokasi Toko Larissa Jaya"
          src="https://www.google.com/maps?q=Larissa%20Jaya%20Tlogorejo%20Karangawen%20Demak&output=embed"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
}
