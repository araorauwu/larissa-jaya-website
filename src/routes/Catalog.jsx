// src/routes/Catalog.jsx
import { useMemo, useState } from "react";
import { products, categories } from "../data/catalog";
import SearchBar from "../components/SearchBar";
import ProductGrid from "../components/ProductGrid";
import Sidebar from "../components/Sidebar";

export default function Catalog() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("");
  const [sub, setSub] = useState("");
  const [sortBy, setSortBy] = useState("default"); // default | price-asc | price-desc | newest

  const subOptions = cat ? (categories.find((c) => c.slug === cat)?.subs || []) : [];

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const okQ = q ? p.name.toLowerCase().includes(q.toLowerCase()) : true;
      const okC = cat ? p.category === cat : true;
      const okS = sub ? p.sub === sub : true;
      return okQ && okC && okS;
    });

    if (sortBy === "price-asc") {
      list = [...list].sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === "price-desc") {
      list = [...list].sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortBy === "newest") {
      // placeholder — jika ada field tanggal, sort berdasarkan itu
      list = [...list];
    }

    return list;
  }, [q, cat, sub, sortBy]);

  return (
    <div className="container-narrow py-10">
      {/* Judul */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-rose-700">Katalog Produk</h1>

        {/* Kontrol berada di bawah judul */}
        <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="w-[280px]">
              <SearchBar value={q} onChange={setQ} placeholder="Cari produk..." />
            </div>

            <select
              value={cat}
              onChange={(e) => {
                setCat(e.target.value);
                setSub("");
              }}
              className="rounded-xl border px-4 py-2 shadow-sm focus:outline-none"
            >
              <option value="">Semua Kategori</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>

            <select
              value={sub}
              onChange={(e) => setSub(e.target.value)}
              className="rounded-xl border px-4 py-2 shadow-sm focus:outline-none"
              disabled={!cat}
            >
              <option value="">{cat ? "Semua Sub-kategori" : "Pilih kategori dulu"}</option>
              {subOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* kotak urutkan di kanan (sejajar) */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Urutkan</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-xl border px-3 py-2 shadow-sm focus:outline-none"
            >
              <option value="default">Default</option>
              <option value="price-asc">Harga: Terendah</option>
              <option value="price-desc">Harga: Tertinggi</option>
              <option value="newest">Terbaru</option>
            </select>
          </div>
        </div>
      </div>

      {/* Konten = grid + sidebar */}
      <div className="grid md:grid-cols-[1fr,320px] gap-6">
        <div>
          {filtered.length === 0 ? (
            <div className="p-12 border border-rose-50 rounded-xl text-center text-gray-500 bg-white/60">
              Tidak ada produk yang cocok.
            </div>
          ) : (
            <ProductGrid items={filtered} />
          )}
        </div>

        <Sidebar />
      </div>
    </div>
  );
}
