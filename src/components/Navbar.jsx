// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { social } from "../data/catalog";

/**
 * Off-canvas responsive Navbar
 * - Desktop: regular horizontal nav
 * - Mobile: hamburger opens left off-canvas with backdrop
 */

function IconHome() {
  return (
    <svg className="w-5 h-5 mr-3 shrink-0 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V11.5z" />
    </svg>
  );
}
function IconCatalog() {
  return (
    <svg className="w-5 h-5 mr-3 shrink-0 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
    </svg>
  );
}
function IconContact() {
  return (
    <svg className="w-5 h-5 mr-3 shrink-0 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M21 10a8 8 0 11-16 0 8 8 0 0116 0zM8 14l2-2 2 2 4-4" />
    </svg>
  );
}
function IconAbout() {
  return (
    <svg className="w-5 h-5 mr-3 shrink-0 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 7h7l-5.5 4.25L20 22l-8-5-8 5 1.5-8.75L0 9h7l3-7z" />
    </svg>
  );
}
function IconAdmin() {
  return (
    <svg className="w-5 h-5 mr-3 shrink-0 text-rose-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 12a5 5 0 100-10 5 5 0 000 10zm7 10H5a2 2 0 00-2 2v.5h18V24a2 2 0 00-2-2z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  const navClass = ({ isActive }) =>
    isActive
      ? "flex items-center text-rose-700 font-semibold"
      : "flex items-center text-gray-600 hover:text-rose-600 transition";

  const waMsg = encodeURIComponent("Halo kak, saya mau tanya produk 😊");

  // close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="relative z-50">
      <div className="bg-white/70 backdrop-blur sticky top-0 z-50">
        <div className="container-narrow flex items-center justify-between py-3">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-lg font-semibold text-rose-700">Larissa Jaya</Link>
          </div>

          {/* desktop nav */}
          <div className="hidden sm:flex items-center gap-6">
            <NavLink to="/" className={navClass}>Beranda</NavLink>
            <NavLink to="/katalog" className={navClass}>Katalog</NavLink>
            <NavLink to="/kontak" className={navClass}>Kontak</NavLink>
            <NavLink to="/tautan" className={navClass}>E-commerce</NavLink>
            <NavLink to="/about" className={navClass}>Larissa Jaya</NavLink>
            <NavLink to="/admin-login" className={navClass}>Admin Login</NavLink>
          </div>

          {/* right: Chat WA + mobile hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${social.phone}?text=${waMsg}`}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-block px-4 py-2 rounded-xl bg-rose-500 text-white hover:bg-rose-600 shadow"
            >
              Chat WA
            </a>

            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
            >
              <svg className="w-6 h-6 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Off-canvas panel (slide from left) */}
      <aside
        ref={panelRef}
        className={`fixed top-0 left-0 h-full w-72 max-w-[85%] bg-white shadow-2xl border-r transition-transform duration-350 ease-out z-60 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <Link to="/" onClick={() => setOpen(false)} className="text-lg font-semibold text-rose-700">
            Larissa Jaya
          </Link>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 rounded-md">
            <svg className="w-6 h-6 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="px-3 py-4 space-y-1">
          <NavLink to="/" onClick={() => setOpen(false)} className={navClass}>
            <IconHome /> Beranda
          </NavLink>

          <NavLink to="/katalog" onClick={() => setOpen(false)} className={navClass}>
            <IconCatalog /> Katalog
          </NavLink>

          <NavLink to="/kontak" onClick={() => setOpen(false)} className={navClass}>
            <IconContact /> Kontak
          </NavLink>

          <NavLink to="/tautan" onClick={() => setOpen(false)} className={navClass}>
            <IconAbout /> E-commerce
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)} className={navClass}>
            <IconAbout /> Larissa Jaya
          </NavLink>

          <NavLink to="/admin-login" onClick={() => setOpen(false)} className={navClass}>
            <IconAdmin /> Admin Login
          </NavLink>
        </nav>

        <div className="mt-auto px-4 py-4 border-t">
          <a
            href={`https://wa.me/${social.phone}?text=${waMsg}`}
            target="_blank"
            rel="noreferrer"
            className="block text-center px-4 py-3 bg-rose-500 text-white rounded-lg shadow"
            onClick={() => setOpen(false)}
          >
            Chat WA
          </a>
        </div>
      </aside>
    </header>
  );
}
