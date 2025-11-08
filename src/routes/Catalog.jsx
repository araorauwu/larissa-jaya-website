import { useMemo, useState } from 'react'
import { products, categories } from '../data/catalog'
import SearchBar from '../components/SearchBar'
import ProductGrid from '../components/ProductGrid'
import Sidebar from '../components/Sidebar'

export default function Catalog(){
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('')
  const [sub, setSub] = useState('')

  const subOptions = cat ? (categories.find(c => c.slug===cat)?.subs || []) : []

  const filtered = useMemo(()=>{
    return products.filter(p => {
      const okQ = q ? p.name.toLowerCase().includes(q.toLowerCase()) : true
      const okC = cat ? p.category === cat : true
      const okS = sub ? p.sub === sub : true
      return okQ && okC && okS
    })
  }, [q, cat, sub])

  return (
    <div className="container-narrow py-10">
      <div className="grid md:grid-cols-[1fr,280px] gap-6">
        <div>
          <h1 className="text-2xl font-bold mb-4">Katalog Produk</h1>
          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <SearchBar value={q} onChange={setQ} />
            <select value={cat} onChange={(e)=>{setCat(e.target.value); setSub('')}} className="rounded-xl border px-4 py-2">
              <option value="">Semua Kategori</option>
              {categories.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
            </select>
            <select value={sub} onChange={(e)=>setSub(e.target.value)} className="rounded-xl border px-4 py-2" disabled={!cat}>
              <option value="">{cat ? 'Semua Sub‑kategori' : 'Pilih kategori dulu'}</option>
              {subOptions.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <ProductGrid items={filtered} />
        </div>
        <Sidebar />
      </div>
    </div>
  )
}
