import { SITE } from "../data/site";
import { buildWaLink } from "../data/site";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-b-3xl">
      <img
        src="/hero/larissa_jaya_header_16x9.png"
        alt="Larissa Jaya storefront"
        className="h-[44vh] w-full object-cover sm:h-[62vh]"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200/40 via-rose-200/40 to-white/90" />
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-6xl px-4 pb-10">
          <h1 className="text-4xl font-extrabold text-rose-800 drop-shadow-sm sm:text-5xl">
            {SITE.name}
          </h1>
          <p className="mt-4 max-w-3xl text-rose-900/90 text-lg leading-relaxed">
            Menyediakan Sandal, Sepatu, Seragam Sekolah, Atribut Pramuka, Tas,
            Mainan, ATK, Aksesoris, Jas Hujan, Perlengkapan Salat dan harian.
            Toko terpercaya di {SITE.locationText}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/katalog"
              className="rounded-2xl bg-rose-600 px-5 py-3 text-white font-semibold shadow hover:bg-rose-700"
            >
              Lihat Katalog
            </a>
            <a
              href={buildWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-5 py-3 text-rose-800 font-semibold shadow border border-rose-200"
            >
              Kontak
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
