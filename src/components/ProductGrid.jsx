// src/components/ProductGrid.jsx
import ProductCard from "./ProductCard";

export default function ProductGrid({ items }) {
  return (
    <div
      className="
        grid gap-6
        grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
        auto-rows-fr
      "
    >
      {items.map((it) => (
        <ProductCard key={it.id} item={it} />
      ))}
    </div>
  );
}
