// D:\KULIAH\larissa-jaya-website\src\components\Sidebar.jsx
import { Link } from 'react-router-dom'
import { social } from '../data/catalog'

export default function Sidebar(){
  const waMsg = encodeURIComponent('Halo kak, saya mau tanya produk 😊')
  const waLink = `https://wa.me/${social.phone}?text=${waMsg}`

  const Row = ({href, children, external}) => {
    const Comp = external ? 'a' : Link
    const props = external
      ? { href, target: "_blank", rel: "noreferrer" }
      : { to: href }

    return (
      <Comp
        {...props}
        className="
          flex items-center justify-between gap-3 rounded-xl
          px-3 py-2.5
          text-gray-700 hover:text-rose-700
          hover:bg-rose-50/80
          border border-transparent hover:border-rose-100
          transition
        "
      >
        <span className="truncate underline-offset-2 hover:underline">{children}</span>
        <span className="text-rose-500">→</span>
      </Comp>
    )
  }

  return (
    <aside className="w-full md:w-72 md:sticky md:top-20 md:self-start">
      {/* Kartu: MENU */}
      <div className="card p-4 space-y-3">
        <h3 className="font-semibold text-gray-800">Menu</h3>

        <nav className="grid gap-2">
          <Row href="/kontak">📍 Kontak & Lokasi</Row>

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              px-4 py-2.5 rounded-xl
              bg-rose-500 text-white hover:bg-rose-600
              shadow-sm transition
            "
          >
            WhatsApp • Order cepat
          </a>

          <Row href="/tautan">🔗 Tautan E-commerce</Row>
        </nav>
      </div>

      {/* Kartu: IKUTI KAMI */}
      <div className="card p-4 space-y-3 mt-4">
        <h3 className="font-semibold text-gray-800">Ikuti Kami</h3>
        <nav className="grid gap-2">
          <Row external href={social.instagram}>📷 Instagram</Row>
          <Row external href={social.tiktok}>🎵 TikTok</Row>
        </nav>
      </div>

      {/* Kartu: MARKETPLACE */}
      <div className="card p-4 space-y-3 mt-4">
        <h3 className="font-semibold text-gray-800">Marketplace</h3>
        <nav className="grid gap-2">
          <Row external href={social.shopee}>🛍️ Shopee (segera)</Row>
          <Row external href={social.tokopedia}>🛒 Tokopedia (segera)</Row>
        </nav>
      </div>
    </aside>
  )
}
