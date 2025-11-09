import { useParams, Link } from 'react-router-dom'
import { categories, products } from '../data/catalog'
import ProductGrid from '../components/ProductGrid'
import Sidebar from '../components/Sidebar'
import { useMemo, useState } from 'react'

export default function Category(){             // ← NAMA & DEFAULT-NYA Category
  const { slug } = useParams()
  const cat = categories.find(c => c.slug === slug)
  const [sub, setSub] = useState('')

  const items = useMemo(() => {
    return products.filter(p =>
      p.category === slug && (sub ? p.sub === sub : true)
    )
  }, [slug, sub])

  if(!cat){
    return (
      <div className="container-narrow py-10">
        <p>Kategori tidak ditemukan.</p>
        <Link to="/katalog" className="text-brand-700 underline">Kembali</Link>
      </div>
    )
  }

  return (
    <div className="container-narrow py-10">
      <div className="grid md:grid-cols-[1fr,280px] gap-6">
        <div>
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-2xl font-bold">{cat.name}</h1>
            <Link to="/katalog" className="text-brand-700 underline">Semua Produk</Link>
          </div>
          <p className="text-gray-600 mt-1">{cat.desc}</p>

          <div className="mt-4">
            <select
              value={sub}
              onChange={(e)=>setSub(e.target.value)}
              className="rounded-xl border px-4 py-2"
            >
              <option value="">Semua Sub-kategori</option>
              {cat.subs.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="mt-6">
            <ProductGrid items={items} />
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  )
}
