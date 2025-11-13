// src/routes/Home.jsx
import { Link } from 'react-router-dom';
import CategoryGrid from '../components/CategoryGrid';
import Sidebar from '../components/Sidebar';
import { categories } from '../data/catalog';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />

      {/* Intro di bawah hero — gunakan ini (tanpa duplikat dari banner) */}
      <section className="container-narrow pt-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-rose-700">
          Larissa Jaya
        </h1>

        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
          Toko perlengkapan yang menyediakan Sandal, Sepatu, Seragam Sekolah, Atribut Pramuka,
          Tas, Mainan, ATK, Aksesoris, Jas Hujan, Perlengkapan Salat dan harian. Toko dipercaya di
          <span className="font-medium text-gray-800"> Tlogorejo, Karangawen, Demak.</span>
        </p>

        <p className="mt-3 text-gray-600 max-w-3xl">
          Koleksi lengkap untuk kebutuhan keluarga di satu tempat.
        </p>

        <div className="mt-6 flex gap-3">
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
