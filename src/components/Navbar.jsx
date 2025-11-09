// D:\KULIAH\larissa-jaya-website\src\components\Navbar.jsx
import { Link, NavLink } from "react-router-dom";
import { social } from "../data/catalog";
import Logo from "./Logo";

export default function Navbar(){
  const navClass = ({ isActive }) =>
    isActive
      ? "text-rose-600 font-semibold"
      : "text-gray-600 hover:text-rose-500 transition";
  return (
    <header className="sticky top-0 z-40 bg-white/70 nav-glass shadow-glass border-b border-white/60">
      <nav className="container-narrow flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          <NavLink to="/" className={navClass}>Beranda</NavLink>
          <NavLink to="/katalog" className={navClass}>Katalog</NavLink>
          <NavLink to="/kontak" className={navClass}>Kontak</NavLink>
          <NavLink to="/tautan" className={navClass}>E-commerce</NavLink>
        </div>

        <a
          href={`https://wa.me/${social.phone}?text=${encodeURIComponent("Halo kak, saya mau tanya produk di Larissa Jaya 😊")}`}
          target="_blank" rel="noreferrer"
          className="btn-primary"
        >
          Chat WA
        </a>
      </nav>
    </header>
  );
}
