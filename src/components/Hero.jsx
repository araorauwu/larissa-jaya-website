// src/components/Hero.jsx
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-b-3xl shadow-sm">
      {/* Hero image (lazy) */}
      <img
        src="/hero/larissa_jaya_header_16x9.png"
        alt="Larissa Jaya Store"
        loading="lazy"
        className="w-full h-[38vh] sm:h-[62vh] object-cover object-[50%_12%]"
      />

      {/* soft gradient so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white/90 pointer-events-none" />

      {/* CONTENT OVERLAY (left-bottom) */}
      <div className="absolute left-6 sm:left-12 bottom-6 sm:bottom-12 max-w-xl">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-rose-700 drop-shadow-sm leading-tight">
          Larissa Jaya
        </h1>

        <p className="mt-3 text-gray-800 text-sm sm:text-base leading-relaxed max-w-xl">
          Menyediakan Sandal, Sepatu, Seragam Sekolah, Atribut Pramuka, Tas,
          Mainan, ATK, Aksesoris, Jas Hujan, Perlengkapan Salat dan harian.
          Toko dipercaya di <span className="font-medium">Tlogorejo, Karangawen, Demak.</span>
        </p>

        <div className="mt-5 flex gap-3">
          <Link to="/katalog" className="px-5 py-2.5 rounded-xl bg-rose-500 text-white hover:bg-rose-600 shadow">
            Lihat Katalog
          </Link>

          {/* tombol kontak di dalam hero: sama tone dengan tombol Lihat Katalog (sesuai permintaan) */}
          <Link to="/kontak" className="px-5 py-2.5 rounded-xl bg-rose-500 text-white hover:bg-rose-600 shadow">
            Kontak
          </Link>
        </div>
      </div>
    </section>
  );
}
