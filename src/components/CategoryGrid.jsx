import CategoryCard from './CategoryCard'

export default function CategoryGrid({ items }) {
  return (
    <div
      className="
        grid gap-4 sm:gap-5
        grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
      "
    >
      {items.map((it) => (
        <CategoryCard key={it.slug} item={it} />
      ))}
    </div>
  )
}
