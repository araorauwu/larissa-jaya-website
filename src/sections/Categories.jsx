import { CATEGORIES } from "../data/categories";

function CategoryCard({ title, desc, tags = [], href = "#" }) {
  return (
    <a
      href={href}
      className="block rounded-3xl border border-rose-200 bg-rose-50 p-4 shadow-sm hover:shadow transition"
    >
      <div>
        <h3 className="text-lg font-semibold text-rose-900">{title}</h3>
        <p className="text-sm text-rose-900/70">{desc}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full bg-white border border-rose-200"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Kategori</h2>
        <a className="text-rose-600 font-medium" href="/katalog">Semua →</a>
      </div>

      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORIES.map((c) => (
          <CategoryCard
            key={c.key}
            title={c.title}
            desc={c.desc}
            tags={c.tags}
            href={`/katalog?cat=${c.key}`}
          />
        ))}
      </div>
    </section>
  );
}
