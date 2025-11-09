import ProductCard from "./ProductCard";

export default function ProductGrid({ items }) {
  return (
    <div
      className="
        grid gap-4 sm:gap-5
        grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
      "
    >
      {items.map((it) => (
        <ProductCard key={it.id} item={it} />
      ))}
    </div>
  );
}
