// D:\KULIAH\larissa-jaya-website\src\routes\Home.jsx
import { Link } from 'react-router-dom';
import CategoryGrid from '../components/CategoryGrid';
import Sidebar from '../components/Sidebar';
import { categories } from '../data/catalog';
import GradientDivider from '../components/GradientDivider';

export default function Home(){
  return (
    <div>
      {/* HERO */}
      <section>
        <div className="container-narrow py-10">
          <div className="card overflow-hidden">
            <div className="h-40 sm:h-56 bg-gradient-to-br from-rose-50 via-white to-white" />
            <div className="p-6 sm:p-7">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-rose-700">Larissa Jaya</h1>
              <p className="mt-2 text-gray-600">
                Toko perlengkapan: sandal, sepatu, seragam sekolah, tas, mainan, ATK, aksesoris, dan perlengkapan sholat — media promosi & informasi produk.
              </p>
              <div className="mt-5 flex gap-3">
                <Link to="/katalog" className="btn-primary">Lihat Katalog</Link>
                <Link to="/kontak" className="btn-ghost">Kontak</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GradientDivider/>

      {/* KATEGORI + SIDEBAR */}
      <section className="container-narrow pb-12">
        <div className="grid md:grid-cols-[1fr,280px] gap-6">
          <div>
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-xl font-bold">Kategori</h2>
              <Link to="/katalog" className="text-rose-600 hover:underline">Semua</Link>
            </div>
            <CategoryGrid items={categories} />
          </div>
          <Sidebar />
        </div>
      </section>
    </div>
  );
}
