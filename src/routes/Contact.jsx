import { social } from '../data/catalog'

export default function Contact(){
  return (
    <div className="container-narrow py-10">
      <h1 className="text-2xl font-bold">Kontak & Lokasi</h1>
      <p className="mt-2 text-gray-600">{social.address}</p>
      <p className="mt-1">Telp/WA: <a className="underline" href={`https://wa.me/${social.phone}`} target="_blank" rel="noreferrer">0{social.phone.slice(2)}</a></p>

      <div className="mt-4 flex gap-3">
        <a href={`https://wa.me/${social.phone}`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-brand-600 text-white">Chat WhatsApp</a>
        <a href={social.maps} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border">Buka Google Maps</a>
      </div>

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
