import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  const nav = 'px-3 py-2 rounded-xl hover:bg-brand-50'
  const active = ({isActive}) => isActive ? nav + ' bg-brand-100 text-brand-800' : nav
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="container-narrow flex items-center gap-4 py-3">
        <Link to="/" className="font-extrabold text-lg text-brand-700">Larissa Jaya</Link>
        <nav className="ml-auto hidden sm:flex gap-1">
          <NavLink to="/" className={active}>Beranda</NavLink>
          <NavLink to="/katalog" className={active}>Katalog</NavLink>
          <NavLink to="/kontak" className={active}>Kontak</NavLink>
          <NavLink to="/tautan" className={active}>E-commerce</NavLink>
        </nav>
        <a
          href="https://wa.me/6285128043387?text=Halo%20kak%2C%20saya%20mau%20tanya%20produk%20di%20Larissa%20Jaya%20%F0%9F%98%8A"
          target="_blank" rel="noreferrer"
          className="btn-pill bg-brand-500 text-white hover:bg-brand-600 shadow-soft ml-2"
        >Chat WA</a>
      </div>
    </header>
  )
}
