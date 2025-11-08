export default function SearchBar({value, onChange, placeholder='Cari produk...'}){
  return (
    <input
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-400"
    />
  )
}
