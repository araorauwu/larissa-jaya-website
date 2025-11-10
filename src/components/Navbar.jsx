import { Link, NavLink } from "react-router-dom";
import { social } from "../data/catalog";
import Logo from "./Logo";

export default function Navbar(){
  const navClass = ({ isActive }) =>
    isActive ? "text-brand-600 font-semibold" : "text-gray-600 hover:text-brand-500 transition";

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/70 border-b border-white/40 shadow-[0_4px_20px_rgba(244,63,94,0.12)]">
      <nav className="container-narrow flex items-center justify-between py-3">
        <Logo />

        <div className="flex items-center gap-6">
          <NavLink to="/" className={navClass}>Beranda</NavLink>
          <NavLink to="/katalog" className={navClass}>Katalog</NavLink>
          <NavLink to="/kontak" className={navClass}>Kontak</NavLink>
          <NavLink to="/tautan" className={navClass}>E-commerce</NavLink>
        </div>

        <a
          href={`https://wa.me/${social.phone}?text=${encodeURIComponent("Halo kak, saya mau tanya produk 😊")}`}
          target="_blank" rel="noreferrer"
          className="px-4 py-2 rounded-xl bg-brand-500 text-white hover:bg-brand-600 shadow-sm transition"
        >
          Chat WA
        </a>
      </nav>
    </header>
  );
}
