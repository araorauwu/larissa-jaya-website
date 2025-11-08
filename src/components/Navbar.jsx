import { Link, NavLink } from 'react-router-dom'

export default function Navbar(){
  const nav = 'px-3 py-2 rounded-lg hover:bg-brand-50'
  const active = ({isActive}) => isActive ? nav + ' bg-brand-100' : nav
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-40">
      <div className="container-narrow flex items-center gap-4 py-3">
        <Link to="/" className="font-bold text-lg text-brand-700">Larissa Jaya</Link>
        <nav className="ml-auto flex gap-1">
          <NavLink to="/" className={active}>Beranda</NavLink>
          <NavLink to="/katalog" className={active}>Katalog</NavLink>
          <NavLink to="/kontak" className={active}>Kontak</NavLink>
          <NavLink to="/tautan" className={active}>E‑commerce</NavLink>
        </nav>
      </div>
    </header>
  )
}
