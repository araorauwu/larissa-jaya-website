import { Link } from 'react-router-dom';

const emojiMap = {
  sandal: "🩴",
  sepatu: "👟",
  "seragam-sekolah": "🎒",
  tas: "👜",
  topi: "🧢",
  mainan: "🧸",
  atk: "✏️",
  aksesoris: "🎀",
  "perlengkapan-sholat": "🕌",
  "perlengkapan-lainnya": "✨",
};

export default function CategoryCard({ item }) {
  const icon = emojiMap[item.slug] || "🛍️";

  return (
    <Link
      to={`/kategori/${item.slug}`}
      className="
        group relative block rounded-3xl
        bg-white/85 backdrop-blur-sm border border-rose-100
        shadow-[0_6px_24px_rgba(16,24,40,.04)]
        hover:shadow-[0_10px_30px_rgba(16,24,40,.06),0_24px_60px_rgba(244,63,94,.07)]
        transition-all duration-300 ease-[cubic-bezier(.2,.8,.2,1)]
        hover:-translate-y-1
      "
    >
      <div className="p-5 flex gap-4 items-start">
        
        {/* ICON BUBBLE */}
        <div
          className="
            w-12 h-12 rounded-2xl grid place-items-center
            bg-rose-50 ring-1 ring-rose-100 text-rose-500 text-2xl 
            shadow-[inset_0_-6px_12px_rgba(244,63,94,.07)]
            group-hover:animate-wiggle-soft
            select-none
          "
        >
          {icon}
        </div>

        {/* TEXTS */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900">{item.name}</h3>
          {item.desc && <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">{item.desc}</p>}

          {/* SUB CATEGORY BADGES */}
          <div className="mt-2 flex flex-wrap gap-2">
            {item.subs.slice(0, 3).map((s) => (
              <span
                key={s}
                className="
                  text-xs px-2 py-0.5 rounded-full
                  bg-rose-50 text-rose-700 ring-1 ring-rose-100
                  shadow-[inset_0_-6px_12px_rgba(244,63,94,.05)]
                "
              >
                {s}
              </span>
            ))}
          </div>
        </div>

      </div>
    </Link>
  );
}
