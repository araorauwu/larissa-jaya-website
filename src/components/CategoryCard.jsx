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
        bg-rose-50/80 backdrop-blur-sm 
        border border-rose-200
        shadow-[0_4px_14px_rgba(0,0,0,0.04)]
        hover:shadow-[0_12px_26px_rgba(0,0,0,0.07),0_0_0_2px_rgba(244,63,94,.12)]
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      <div className="p-5 flex gap-4 items-start">
        
        {/* ICON BUBBLE */}
        <div
          className="
            w-12 h-12 rounded-2xl grid place-items-center
            bg-rose-100 text-rose-600 text-2xl
            ring-1 ring-rose-300
            shadow-[inset_0_-4px_8px_rgba(244,63,94,.12)]
            group-hover:animate-wiggle-soft
            select-none
          "
        >
          {icon}
        </div>

        {/* TEXT */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800">{item.name}</h3>

          {item.desc && (
            <p className="text-sm text-gray-600 mt-0.5 line-clamp-2">
              {item.desc}
            </p>
          )}

          {/* SUB */}
          <div className="mt-2 flex flex-wrap gap-2">
            {item.subs.slice(0, 3).map((s) => (
              <span
                key={s}
                className="
                  text-xs px-2 py-0.5 rounded-full
                  bg-white text-rose-700 ring-1 ring-rose-200
                  shadow-[inset_0_-4px_8px_rgba(244,63,94,.08)]
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
