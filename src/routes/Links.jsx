import { social } from '../data/catalog'

export default function Links(){
  return (
    <div className="container-narrow py-10">
      <h1 className="text-2xl font-bold mb-4">Tautan E‑commerce & Sosial</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <a className="card p-4 hover:shadow-md transition" href={social.tiktok} target="_blank" rel="noreferrer">
          <h3 className="font-semibold">TikTok Shop</h3>
          <p className="text-sm text-gray-500">@larissa_jayaa</p>
        </a>
        <a className="card p-4 hover:shadow-md transition" href={social.instagram} target="_blank" rel="noreferrer">
          <h3 className="font-semibold">Instagram</h3>
          <p className="text-sm text-gray-500">@larissa_jaya</p>
        </a>
        <a className="card p-4 hover:shadow-md transition" href={social.shopee}>
          <h3 className="font-semibold">Shopee</h3>
          <p className="text-sm text-gray-500">Segera tersedia</p>
        </a>
        <a className="card p-4 hover:shadow-md transition" href={social.tokopedia}>
          <h3 className="font-semibold">Tokopedia</h3>
          <p className="text-sm text-gray-500">Segera tersedia</p>
        </a>
      </div>
    </div>
  )
}
