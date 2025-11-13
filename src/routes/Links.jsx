// D:\KULIAH\larissa-jaya-website\src\routes\Links.jsx
import { social } from '../data/catalog';

const LinkCard = ({ href, children, icon, target='_blank', disabled=false }) => {
  const base = `
    link-card flex items-center justify-between gap-4
    px-4 py-3 rounded-xl border transition
  `;

  const enabled = `
    bg-white border-rose-100 hover:-translate-y-0.5
    hover:shadow-lg hover:ring-1 hover:ring-rose-300/60
  `;

  const disableStyle = `
    bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed
  `;

  return (
    <a
      href={disabled ? undefined : href}
      target={disabled ? undefined : target}
      rel={disabled ? undefined : 'noreferrer'}
      className={`${base} ${disabled ? disableStyle : enabled}`}
    >
      <div className="flex items-center gap-3">
        <span className="icon-bubble w-9 h-9 text-lg">{icon}</span>
        <div className="leading-tight">
          <div className="font-semibold">{children}</div>
          {disabled && <div className="text-xs">Segera hadir</div>}
        </div>
      </div>
      <span className="text-rose-500">→</span>
    </a>
  );
};

export default function Links(){
  const msg = encodeURIComponent("Halo kak, saya mau tanya produk di Larissa Jaya 😊");
  const wa  = `https://wa.me/${social.phone}?text=${msg}`;

  return (
    <div className="container-narrow py-10">
      <h1 className="text-2xl font-extrabold text-rose-700">Tautan E-commerce & Sosial</h1>
      <p className="mt-2 text-gray-600">
        Semua kanal resmi Larissa Jaya. Pilih yang paling nyaman untuk kamu 😊
      </p>

      {/* WA CTA */}
      <div className="mt-6 p-4 rounded-2xl border border-rose-200/60 bg-rose-50/70">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="icon-bubble w-10 h-10 text-xl">🟢</span>
            <div className="leading-tight">
              <div className="font-semibold text-rose-700">Order via WhatsApp</div>
              <div className="text-gray-600 text-sm">Cepat & langsung dengan admin</div>
            </div>
          </div>
          <a href={wa} target="_blank" rel="noreferrer" className="btn-primary">
            Chat Admin WA
          </a>
        </div>
      </div>

      {/* GRID LINKS */}
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <LinkCard href={social.instagram} icon="📷">Instagram</LinkCard>
        <LinkCard href={social.tiktok} icon="🎵">TikTok</LinkCard>

        {/* Marketplace – placeholder disabled */}
        <LinkCard href={social.shopee} icon="🛒" disabled>Shopee (segera)</LinkCard>
        <LinkCard href={social.tokopedia} icon="🛍️" disabled>Tokopedia (segera)</LinkCard>
      </div>

      {/* Kartu alamat mini (opsional) */}
      <div className="mt-8 card p-4">
        <div className="font-semibold">Alamat Singkat</div>
        <div className="text-gray-600 text-sm mt-1">
          {social.address}
        </div>
        <div className="mt-3">
          <a href={social.maps} target="_blank" rel="noreferrer" className="btn-ghost">
            Buka Google Maps
          </a>
        </div>
      </div>
    </div>
  );

  

}
