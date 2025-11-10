import CategoryCard from './CategoryCard'

export default function CategoryGrid({ items }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
      {items.map((it) => <CategoryCard key={it.slug} item={it} />)}
    </div>
  );
}
