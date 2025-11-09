// D:\KULIAH\larissa-jaya-website\src\routes\Home.jsx
import { Link } from 'react-router-dom'
import CategoryGrid from '../components/CategoryGrid'
import Sidebar from '../components/Sidebar'
import { categories } from '../data/catalog'

export default function Home(){
  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <div className="container-narrow py-8">
          <div className="card overflow-hidden shadow-soft">
            <div className="bg-hero-pink h-48 md:h-64 flex items-center">
              <div className="px-6 md:px-10">
                <h1 className="text-2xl md:text-3xl font-extrabold text-brand-800">
                  Larissa Jaya
                </h1>
                <p className="mt-2 text-gray-600 max-w-2xl">
                  Toko perlengkapan: sandal, sepatu, seragam sekolah, tas, mainan, ATK,
                  aksesoris, dan perlengkapan sholat — promosi & informasi produk.
                </p>
                <div className="mt-4 flex gap-3">
                  <Link to="/katalog" className="btn-primary">Lihat Katalog</Link>
                  <Link to="/kontak" className="btn-ghost">Kontak</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KATEGORI + SIDEBAR */}
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
