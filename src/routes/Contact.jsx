import { social } from '../data/catalog'

export default function Contact(){
  const message = encodeURIComponent("Halo kak, saya mau tanya tentang produk di Larissa Jaya 😊")
  const waUrl = `https://wa.me/${social.phone}?text=${message}`

  return (
    <div className="container-narrow py-10">
      <h1 className="text-2xl font-bold text-ink-900">Kontak & Lokasi</h1>
      <p className="mt-2 text-ink-600">{social.address}</p>
      <p className="mt-1">Telp/WA:
        <a className="underline ml-1" href={`https://wa.me/${social.phone}`} target="_blank" rel="noreferrer">
          0{social.phone.slice(2)}
        </a>
      </p>

      <div className="mt-4 flex gap-3">
        <a href={waUrl} target="_blank" rel="noreferrer" className="btn-primary">Chat WhatsApp</a>
        <a href={social.maps} target="_blank" rel="noreferrer" className="btn-ghost">Buka Google Maps</a>
      </div>

      <div className="mt-8 rounded-2xl overflow-hidden border bg-white aspect-video">
        <iframe
          title="Larissa Jaya Map"
          src="https://www.google.com/maps?q=Larissa%20Jaya%20Tlogorejo%20Karangawen%20Demak&output=embed"
          className="w-full h-full" loading="lazy"></iframe>
      </div>
    </div>
  )
}
