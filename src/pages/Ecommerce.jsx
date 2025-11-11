import { CONTACT } from "../data/site";

export default function Ecommerce() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-rose-800">E-commerce</h2>
      <p className="mt-2 text-slate-600">
        Tautan Shopee & Tokopedia akan menyusul. Untuk sekarang:
      </p>
      <ul className="mt-4 list-disc pl-6">
        <li>Shopee: <span className="text-slate-500">segera</span></li>
        <li>Tokopedia: <span className="text-slate-500">segera</span></li>
      </ul>
      <a
        href={`https://wa.me/${CONTACT.waNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block rounded-2xl bg-rose-600 px-5 py-3 text-white font-semibold shadow hover:bg-rose-700"
      >
        Order cepat via WhatsApp
      </a>
    </section>
  );
}
