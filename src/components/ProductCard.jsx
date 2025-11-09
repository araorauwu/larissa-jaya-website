import { waLink } from "../utils/helpers";
import { social } from "../data/catalog";

export default function ProductCard({ item }) {
  const waUrl = waLink({
    phone: social.phone,
    text: `Halo kak, saya tertarik dengan *${item.name}*. Boleh info lebih lanjut? 😊`
  });

  return (
    <div
      className="
        group relative card overflow-hidden transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg hover:ring-rose-200/70
        ring-1 ring-rose-100 bg-white/90 backdrop-blur
      "
    >
      {/* GLOW HALUS */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-rose-50/70 to-white" />

      {/* GAMBAR PRODUK (placeholder kalau belum ada foto) */}
      <div className="aspect-square bg-rose-50/60 flex items-center justify-center text-rose-300 text-sm">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : (
          "Foto menyusul"
        )}
      </div>

      {/* DETAIL */}
      <div className="relative p-4">
        <h3 className="font-semibold text-gray-800 group-hover:text-rose-700">
          {item.name}
        </h3>

        {item.desc && (
          <p className="mt-1 text-sm text-gray-500 leading-tight line-clamp-2">
            {item.desc}
          </p>
        )}

        {/* HARGA */}
        {item.price && (
          <p className="mt-2 font-semibold text-rose-600">
            Rp {item.price.toLocaleString("id-ID")}
          </p>
        )}

        {/* TOMBOL CHAT WA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          className="
            mt-3 inline-flex items-center gap-1 text-sm font-medium text-rose-600
            hover:text-rose-700 transition
          "
        >
          Tanya via WhatsApp
          <svg
            className="size-4 transition-transform group-hover:translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
