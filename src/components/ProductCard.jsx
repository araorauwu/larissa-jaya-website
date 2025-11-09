import WhatsAppButton from './WhatsAppButton'

export default function ProductCard({item}){
  const msg = `Halo, saya tertarik dengan ${item.name} (kode ${item.id}). Apakah tersedia?`
  return (
    <div className="card overflow-hidden flex flex-col">
      <img src={item.img} alt={item.name} className="aspect-video object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-gray-500 mt-1">{item.note}</p>
        <div className="mt-auto pt-3">
          <WhatsAppButton text={`Tanya Produk`} />
        </div>
      </div>
    </div>
  )
}
