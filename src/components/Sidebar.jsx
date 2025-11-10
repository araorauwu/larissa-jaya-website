import { Link } from 'react-router-dom'
import { social } from '../data/catalog'

export default function Sidebar(){
  const waMsg = encodeURIComponent('Halo kak, saya mau tanya produk di Larissa Jaya 😊')
  const waURL = `https://wa.me/${social.phone}?text=${waMsg}`

  return (
    <aside className="w-full md:w-72 md:sticky md:top-20 md:self-start space-y-4">
      {/* MENU UTAMA */}
      <div className="sidebar-card">
        <h3 className="section-title">Menu</h3>
        <nav className="grid gap-2">
          <Link to="/kontak" className="link-soft">Kontak & Lokasi</Link>
          <a href={waURL} target="_blank" rel="noreferrer" className="btn-wa">Order via WhatsApp</a>
          <Link to="/tautan" className="link-soft">Tautan E-commerce</Link>
        </nav>
      </div>

      {/* SOSIAL / MARKETPLACE */}
      <div className="sidebar-card">
        <h3 className="section-title">Ikuti Kami</h3>
        <div className="grid gap-2">
          <a className="link-soft" href={social.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a className="link-soft" href={social.tiktok} target="_blank" rel="noreferrer">TikTok</a>
        </div>

        <div className="divider-pastel my-3" />

        <h4 className="section-title">Marketplace</h4>
        <div className="grid gap-2">
          <a className="link-soft" href={social.shopee} target="_blank" rel="noreferrer">Shopee (segera)</a>
          <a className="link-soft" href={social.tokopedia} target="_blank" rel="noreferrer">Tokopedia (segera)</a>
        </div>
      </div>
    </aside>
  )
}
