import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-b-3xl shadow-sm">
      {/* FOTO HEADER */}
      <img
        src="/hero/larissa_jaya_header_16x9.png"
        alt="Larissa Jaya Store"
        className="w-full h-[38vh] sm:h-[62vh] object-cover object-[50%_12%]"
      />

      {/* GRADIENT LEMBUT UNTUK TEKS TERBACA */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/90 pointer-events-none" />

      {/* TEKS + TOMBOL */}
      <div className="container-narrow absolute bottom-10 left-0 right-0 text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-rose-700 drop-shadow-sm leading-tight">
          Larissa Jaya
        </h1>

        <p className="mt-3 max-w-2xl text-gray-700 text-base sm:text-lg leading-relaxed">
          Menyediakan Sandal, Sepatu, Seragam Sekolah, Atribut Pramuka, Tas, Mainan, ATK, Aksesoris, Jas Hujan,          
          Perlengkapan Salat dan harian. Toko terpercaya di Tlogorejo, Karangawen, Demak.
        </p>

        <div className="mt-5 flex gap-3">
          <Link to="/katalog" className="btn-primary">
            Lihat Katalog
          </Link>
          <Link to="/kontak" className="btn-primary">
            Kontak
          </Link>
        </div>
      </div>
    </section>
  );
}
