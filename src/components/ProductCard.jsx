// D:\KULIAH\larissa-jaya-website\src\components\ProductCard.jsx
import { social } from '../data/catalog';

export default function ProductCard({ item }){
  const msg = encodeURIComponent(`Halo kak, saya mau tanya produk: ${item?.name} 😊`);
  const wa  = `https://wa.me/${social.phone}?text=${msg}`;

  return (
    <div className="product-card p-3 flex flex-col gap-3">
      {/* Foto */}
      {item?.image ? (
        <img src={item.image} alt={item.name} className="w-full rounded-xl object-cover" />
      ) : (
        <div className="product-photo">foto menyusul</div>
      )}

      {/* Konten */}
      <div className="px-1 pb-2">
        <div className="product-title">{item?.name || 'Nama Produk'}</div>
        {item?.desc && <div className="product-meta mt-0.5">{item.desc}</div>}

        <div className="mt-3">
          <a href={wa} target="_blank" rel="noreferrer" className="btn-wa">
            <span>WA</span> <span>Tanya via WhatsApp</span> <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
