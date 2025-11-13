// D:\KULIAH\larissa-jaya-website\src\routes\About.jsx
import { social } from "../data/catalog";
import { Link } from "react-router-dom";

export default function About() {
  const waMsg = encodeURIComponent("Halo kak, saya mau tanya tentang produk di Larissa Jaya 😊");
  const waLink = `https://wa.me/${social.phone}?text=${waMsg}`;

  return (
    <div className="container-narrow py-10 space-y-8">
      {/* HERO FOTO */}
      <section className="relative w-full overflow-hidden rounded-2xl border">
        <img
          src="/hero/toko.jpg"
          alt="Larissa Jaya Header"
          className="w-full h-[36vh] sm:h-[52vh] object-cover object-[50%_12%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/90" />
      </section>

      {/* JUDUL & DESKRIPSI */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-rose-700">
          Larissa Jaya
        </h1>
        <p className="text-gray-600 mt-2">
          Toko perlengkapan keluarga di Tlogorejo, Karangawen — Demak. Menyediakan
          sandal, sepatu, seragam sekolah, tas, mainan edukasi, ATK, aksesoris dan
          perlengkapan ibadah dengan harga bersahabat.
        </p>
      </section>

      {/* APA SAJA YANG DIJUAL */}
      <section className="card p-6">
        <h2 className="text-lg font-semibold mb-3">Apa saja yang kami jual?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-gray-700">
          <ul className="list-disc list-inside space-y-1">
            <li>Sandal wanita, pria & anak</li>
            <li>Sepatu sekolah & casual</li>
            <li>Tas sekolah & ransel</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>Seragam sekolah (SD, SMP, SMA)</li>
            <li>Mainan edukasi & boneka</li>
            <li>ATK & perlengkapan belajar</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>Aksesoris rambut & fashion</li>
            <li>Perlengkapan sholat</li>
            <li>Dan kebutuhan keluarga lain</li>
          </ul>
        </div>
      </section>

      {/* GALERI FOTO TOKO */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Galeri Toko</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Pakai foto yang sudah ada di /public/hero */}
          <img
            src="/hero/baner.jpg"
            alt="Toko Larissa Jaya tampak depan"
            className="w-full h-64 object-cover rounded-xl border"
          />
          <img
            src="/hero/toko.jpg"
            alt="Banner Larissa Jaya"
            className="w-full h-64 object-cover rounded-xl border"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 rounded-xl bg-rose-500 text-white hover:bg-rose-600 shadow"
        >
          Tanya via WhatsApp
        </a>
        <p className="text-gray-500 text-sm mt-2">{social.address}</p>
        <p className="text-gray-500 text-sm">
          <Link to="/kontak" className="underline">Lihat peta & info kontak</Link>
        </p>
      </section>
    </div>
  );
}
