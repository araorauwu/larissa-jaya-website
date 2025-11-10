import { social } from '../data/catalog'

export default function Contact(){
  const msg = encodeURIComponent("Halo kak, saya mau tanya tentang produk di Larissa Jaya 😊");
  const wa = `https://wa.me/${social.phone}?text=${msg}`;

  return (
    <div className="container-narrow py-8">
      {/* BANNER TOKO */}
      <img
        src="/hero/store_hero.jpg"
        alt="Toko Larissa Jaya Tampak Depan"
        className="w-full h-[68vh] object-cover object-[40%_24%] rounded-2xl border"
      />

      {/* NAMA & LOKASI SINGKAT */}
      <div className="text-center mt-6">
        <h1 className="text-3xl font-extrabold text-rose-700">Larissa Jaya</h1>
        <p className="text-gray-600 text-sm mt-1">
          Tlogorejo · Karangawen · Demak
        </p>
      </div>

      {/* AKSI & PETA */}
      <div className="mt-6 grid sm:grid-cols-[1fr,1fr] gap-4">
        <div className="card p-4 space-y-3">
          <p className="text-gray-700">{social.address}</p>
          <p>
            Telp/WA:{" "}
            <a className="link-soft" href={`https://wa.me/${social.phone}`} target="_blank" rel="noreferrer">
              0{social.phone.slice(2)}
            </a>
          </p>
          <div className="flex gap-3">
            <a href={wa} target="_blank" rel="noreferrer" className="btn-wa">Chat WhatsApp</a>
            <a href={social.maps} target="_blank" rel="noreferrer" className="btn-ghost">Buka Google Maps</a>
          </div>
        </div>

        <div className="card overflow-hidden">
          <iframe
            title="Larissa Jaya Map"
            src="https://www.google.com/maps?q=Larissa%20Jaya%20Tlogorejo%20Karangawen%20Demak&output=embed"
            className="w-full h-full min-h-[280px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
