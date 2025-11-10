// D:\KULIAH\larissa-jaya-website\src\routes\Contact.jsx
import { social } from '../data/catalog';

export default function Contact(){
  const msg = encodeURIComponent("Halo kak, saya mau tanya tentang produk di Larissa Jaya 😊");
  const wa = `https://wa.me/${social.phone}?text=${msg}`;

  return (
    <div className="container-narrow py-10 space-y-8">

      {/* Banner Foto Toko */}
      <div className="card overflow-hidden shadow-sm">
        <img
          src="/hero/store_clean.png?v=1"
          alt="Toko Larissa Jaya Tampak Depan"
          className="w-full h-48 sm:h-60 md:h-72 object-cover"
        />
      </div>

      {/* Title & Address */}
      <div>
        <h1 className="text-2xl font-bold">Kontak & Lokasi</h1>
        <p className="mt-2 text-gray-600">{social.address}</p>
        <p className="mt-1">
          Telp/WA:{" "}
          <a className="underline" href={`https://wa.me/${social.phone}`} target="_blank" rel="noreferrer">
            0{social.phone.slice(2)}
          </a>
        </p>

        <div className="mt-4 flex gap-3">
          <a href={wa} target="_blank" rel="noreferrer" className="btn-primary">Chat WhatsApp</a>
          <a href={social.maps} target="_blank" rel="noreferrer" className="btn-ghost">Buka Google Maps</a>
        </div>
      </div>

      {/* MAP */}
      <div className="rounded-2xl overflow-hidden border bg-white aspect-video">
        <iframe
          title="Larissa Jaya Map"
          src="https://www.google.com/maps?q=Larissa%20Jaya%20Tlogorejo%20Karangawen%20Demak&output=embed"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
}
