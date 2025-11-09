import { Link } from 'react-router-dom'
import CategoryGrid from '../components/CategoryGrid'
import Sidebar from '../components/Sidebar'
import { categories } from '../data/catalog'

export default function Home(){
  return (
    <div>
      <section className="relative">
        <div className="container-narrow py-8">
          <div className="card-ghost overflow-hidden">
            <div className="bg-gradient-to-r from-brand-50 to-white h-48 md:h-60"></div>
            <div className="p-6 md:p-8">
              <h1 className="h-title text-brand-800">Larissa Jaya</h1>
              <p className="mt-2 text-ink-600">
                Toko perlengkapan: sandal, sepatu, seragam sekolah, tas, mainan, ATK, aksesoris, dan
                perlengkapan sholat — promosi & informasi produk.
              </p>
              <div className="mt-5 flex gap-3">
                <Link to="/katalog" className="btn-primary">Lihat Katalog</Link>
                <Link to="/kontak" className="btn-ghost">Kontak</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-narrow py-10">
        <div className="grid md:grid-cols-[1fr,280px] gap-6">
          <div>
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-xl font-bold text-ink-900">Kategori</h2>
              <Link to="/katalog" className="text-brand-700 hover:underline">Semua</Link>
            </div>
            <CategoryGrid items={categories} />
          </div>
          <Sidebar />
        </div>
      </section>
    </div>
  )
}
