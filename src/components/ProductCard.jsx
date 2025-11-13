// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { social } from "../data/catalog";

export default function ProductCard({ item }) {
  const waMsg = encodeURIComponent(`Halo, saya mau tanya tentang produk: ${item.name} (${item.id})`);
  const waLink = `https://wa.me/${social.phone}?text=${waMsg}`;

  return (
    <article className="bg-white rounded-xl overflow-hidden border border-rose-50 shadow-sm">
      <div className="relative">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-40 object-cover"
          loading="lazy"
        />
        {/* price badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-white/90 text-rose-600 font-semibold text-sm px-3 py-1 rounded-full shadow-sm">
            Rp {item.price?.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500 mt-2">{item.note}</p>

        <div className="mt-3 text-xs text-gray-400">
          <div>Category: <span className="text-gray-600">{item.category}</span></div>
          <div>Sub: <span className="text-gray-600">{item.sub}</span></div>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-rose-500 text-white shadow-sm hover:bg-rose-600 transition"
          >
            WA Tanyakan
          </a>
          <Link to={`/produk/${encodeURIComponent(item.id)}`} className="text-rose-500 text-sm hover:underline">
            Lihat
          </Link>
        </div>
      </div>
    </article>
  );
}
