import { Link } from 'react-router-dom'
import CategoryGrid from '../components/CategoryGrid'
import Sidebar from '../components/Sidebar'
import { categories } from '../data/catalog'

export default function Home(){
  return (
    <div>
      <section className="relative">
        <div className="container-narrow py-8">
          <div className="card overflow-hidden">
            <div className="bg-hero bg-cover bg-center h-48 md:h-64"></div>
            <div className="p-5 md:p-6">
              <h1 className="text-2xl md:text-3xl font-extrabold text-brand-800">Larissa Jaya</h1>
              <p className="mt-2 text-gray-600">Toko perlengkapan: sandal, sepatu, seragam sekolah, tas, mainan, ATK, aksesoris, perlengkapan sholat.</p>
              <div className="mt-4 flex gap-3">
                <Link to="/katalog" className="px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700">Lihat Katalog</Link>
                <Link to="/kontak" className="px-4 py-2 rounded-xl border">Kontak</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-narrow py-8">
        <div className="grid md:grid-cols-[1fr,280px] gap-6">
          <div>
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-xl font-bold">Kategori</h2>
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
