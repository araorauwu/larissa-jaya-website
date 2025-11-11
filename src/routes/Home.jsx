// D:\KULIAH\larissa-jaya-website\src\routes\Home.jsx
import { Link } from 'react-router-dom';
import CategoryGrid from '../components/CategoryGrid';
import Sidebar from '../components/Sidebar';
import { categories } from '../data/catalog';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />

      {/* Intro di bawah hero */}
      <section className="container-narrow pt-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-rose-700">
  Larissa Jaya
</h1>

<p className="mt-2 text-gray-700 leading-relaxed max-w-2xl">
  Menyediakan Sandal, Sepatu, Seragam Sekolah, Tas, Mainan, ATK Alat Tulis, Aksesoris, Perlengkapan Sholat dan Harian.
  Toko terpercaya di <span className="font-medium text-gray-800">Tlogorejo, Karangawen, Demak.</span>
</p>

        <div className="mt-5 flex gap-3">
          <Link to="/katalog" className="btn-primary">Lihat Katalog</Link>
          <Link to="/kontak" className="btn-ghost">Kontak</Link>
        </div>
      </section>

      {/* KATEGORI + SIDEBAR */}
      <section className="container-narrow pb-12">
        <div className="grid md:grid-cols-[1fr,280px] gap-6">
          <div>
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-xl font-bold">Kategori</h2>
              <Link to="/katalog" className="text-rose-700 hover:underline">Semua</Link>
            </div>
            <CategoryGrid items={categories} />
          </div>
          <Sidebar />
        </div>
      </section>
    </div>
  );
}
