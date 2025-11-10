// D:\KULIAH\larissa-jaya-website\src\routes\Contact.jsx
import { social } from '../data/catalog';

export default function Contact(){
  const msg = encodeURIComponent("Halo kak, saya mau tanya tentang produk di Larissa Jaya 😊");
  const wa  = `https://wa.me/${social.phone}?text=${msg}`;

  return (
    <div className="container-narrow py-10">
      {/* Banner toko */}
      <img
        src="/hero/store_hero.jpg"
        alt="Toko Larissa Jaya Tampak Depan"
        className="w-full h-[68vh] object-cover object-[40%_24%] rounded-2xl"
      />

      {/* Judul & alamat pendek */}
      <div className="text-center mt-6">
        <h1 className="text-3xl font-extrabold text-rose-700">Larissa Jaya</h1>
        <p className="text-gray-600 text-sm mt-1">
          Tlogorejo · Karangawen · Demak
        </p>
      </div>

      {/* Detail alamat & WA */}
      <div className="mt-6 text-center sm:text-left">
        <p className="text-gray-700">{social.address}</p>
        <p className="mt-1">
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

        <div className="mt-4 flex gap-3 justify-center sm:justify-start">
          <a href={wa} target="_blank" rel="noreferrer" className="btn-primary">
            Chat WhatsApp
          </a>
          <a href={social.maps} target="_blank" rel="noreferrer" className="btn-ghost">
            Buka Google Maps
          </a>
        </div>
      </div>

      {/* Peta */}
      <div className="mt-8 rounded-2xl overflow-hidden border bg-white aspect-video">
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
