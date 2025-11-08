import ProductCard from './ProductCard'
export default function ProductGrid({items}){
  if(items.length === 0) return <p className="text-gray-500">Belum ada produk pada filter ini.</p>
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map(it => <ProductCard key={it.id} item={it} />)}
    </div>
  )
}
