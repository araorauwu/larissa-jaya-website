import { Link } from 'react-router-dom'

export default function CategoryCard({item}){
  return (
    <Link to={`/kategori/${item.slug}`} className="block card hover:shadow-md transition">
      <div className="p-5">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.subs.slice(0,3).map(s => <span key={s} className="badge">{s}</span>)}
        </div>
      </div>
    </Link>
  )
}
