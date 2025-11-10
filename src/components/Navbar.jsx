import { Link, NavLink } from "react-router-dom";
import { social } from "../data/catalog";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    isActive
      ? "text-rose-700 font-semibold"
      : "text-gray-600 hover:text-rose-600 transition";

  const waMsg = encodeURIComponent("Halo kak, saya mau tanya produk 😊");

  return (
    <header className="sticky top-0 z-40">
      <div className="relative">
        {/* layer kaca */}
        <div className="nav-glass shadow-glass absolute inset-0" />
        <nav className="relative container-narrow flex items-center justify-between py-3">
          <Link to="/" className="text-lg font-semibold text-rose-700">
            Larissa Jaya
          </Link>

          <div className="hidden sm:flex items-center gap-6">
            <NavLink to="/" className={navClass}>Beranda</NavLink>
            <NavLink to="/katalog" className={navClass}>Katalog</NavLink>
            <NavLink to="/kontak" className={navClass}>Kontak</NavLink>
            <NavLink to="/tautan" className={navClass}>E-commerce</NavLink>
          </div>

          <a
            href={`https://wa.me/${social.phone}?text=${waMsg}`}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-rose-500 text-white hover:bg-rose-600 shadow"
          >
            Chat WA
          </a>
        </nav>
      </div>
    </header>
  );
}
