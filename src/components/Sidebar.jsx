import { Link } from 'react-router-dom'
import { social } from '../data/catalog'

export default function Sidebar(){
  return (
    <aside className="w-full md:w-72 md:sticky md:top-20 md:self-start">
      <div className="card p-4 space-y-3">
        <h3 className="font-semibold">Menu</h3>
        <nav className="grid gap-2">
          <Link to="/kontak" className="underline">Kontak & Lokasi</Link>
          <a href={`https://wa.me/${social.phone}`} target="_blank" rel="noreferrer" className="underline">Order via WhatsApp</a>
          <Link to="/tautan" className="underline">Tautan E‑commerce</Link>
        </nav>
      </div>

      <div className="card p-4 space-y-2 mt-4">
        <h3 className="font-semibold">Ikuti Kami</h3>
        <a className="underline" href={social.instagram} target="_blank" rel="noreferrer">Instagram</a>
        <a className="underline" href={social.tiktok} target="_blank" rel="noreferrer">TikTok</a>
        <a className="underline" href={social.shopee} target="_blank" rel="noreferrer">Shopee (segera)</a>
        <a className="underline" href={social.tokopedia} target="_blank" rel="noreferrer">Tokopedia (segera)</a>
      </div>
    </aside>
  )
}
