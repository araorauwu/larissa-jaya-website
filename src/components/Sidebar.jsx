import { Link } from 'react-router-dom'
import { social } from '../data/catalog'

export default function Sidebar(){
  return (
    <aside className="w-full md:w-72 md:sticky md:top-20 md:self-start space-y-4">

      {/* MENU */}
      <div className="card p-4">
        <h3 className="font-semibold mb-3 text-gray-800">Menu</h3>
        <nav className="grid gap-2 text-sm">
          <Link to="/kontak" className="hover:text-rose-600 transition">Kontak & Lokasi</Link>
          <a
            href={`https://wa.me/${social.phone}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-rose-600 transition"
          >
            Order via WhatsApp
          </a>
          <Link to="/tautan" className="hover:text-rose-600 transition">Tautan E-commerce</Link>
        </nav>
      </div>

      {/* SOSIAL */}
      <div className="card p-4">
        <h3 className="font-semibold mb-3 text-gray-800">Ikuti Kami</h3>
        <div className="grid gap-2 text-sm">

          <a href={social.instagram} target="_blank" rel="noreferrer"
            className="hover:text-rose-600 transition">
            Instagram
          </a>

          <a href={social.tiktok} target="_blank" rel="noreferrer"
            className="hover:text-rose-600 transition">
            TikTok
          </a>

          <a href={social.shopee} target="_blank" rel="noreferrer"
            className="hover:text-rose-600 transition">
            Shopee <span className="text-gray-500">(segera)</span>
          </a>

          <a href={social.tokopedia} target="_blank" rel="noreferrer"
            className="opacity-60 pointer-events-none cursor-default">
            Tokopedia <span className="text-gray-500">(segera)</span>
          </a>

        </div>
      </div>

    </aside>
  )
}
