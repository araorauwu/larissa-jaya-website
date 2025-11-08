import { waLink } from '../utils/helpers'

export default function WhatsAppButton({label='Pesan via WhatsApp', message='Halo, saya mau tanya produk', phone='6285128043387'}){
  return (
    <a
      href={waLink({phone, text: message})}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition"
    >
      {label}
    </a>
  )
}
