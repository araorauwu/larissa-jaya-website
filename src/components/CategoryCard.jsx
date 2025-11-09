// D:\KULIAH\larissa-jaya-website\src\components\CategoryCard.jsx
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

export default function CategoryCard({item}){
  const icon = emojiMap[item.slug] || "🛍️";
  return (
    <Link
      to={`/kategori/${item.slug}`}
      className="card kawaii hover:shadow-lg"
    >
      <div className="p-5 flex items-center gap-4">
        <div className="icon-bubble text-2xl select-none">{icon}</div>
        <div className="min-w-0">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">{item.desc}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.subs.slice(0,3).map(s => <span key={s} className="badge">{s}</span>)}
          </div>
        </div>
      </div>
    </Link>
  );
}
