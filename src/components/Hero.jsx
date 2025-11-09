import { Link } from "react-router-dom";
import { waLink } from "../utils/helpers";
import { social } from "../data/catalog";

export default function Hero() {
  const waUrl = waLink({
    phone: social.phone,
    text: "Hai kak 😊 mau tanya produk Larissa Jaya dong~"
  });

  return (
    <section className="relative overflow-hidden py-16 sm:py-24">

      {/* Pastel Blob Decoration */}
      <div className="absolute -top-20 -left-24 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-rose-300/25 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="container-narrow relative text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-rose-700 tracking-tight">
          Larissa Jaya
        </h1>

        <p className="mt-3 text-gray-600 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
          Toko sandal, sepatu, tas, seragam sekolah, aksesoris, mainan, ATK, dan perlengkapan anak & keluarga.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            to="/katalog"
            className="
              px-6 py-3 rounded-xl bg-rose-500 text-white hover:bg-rose-600
              shadow-[0_4px_12px_rgba(244,63,94,0.25)]
              transition-all
            "
          >
            Lihat Katalog
          </Link>

          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="
              px-6 py-3 rounded-xl border border-rose-300 text-rose-600 hover:bg-rose-50
              transition
            "
          >
            Chat WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
