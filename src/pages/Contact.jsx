import { CONTACT } from "../data/site";

export default function Contact() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-rose-800">Kontak & Lokasi</h2>
      <div className="mt-4 grid gap-4">
        <a className="underline text-rose-700" href={CONTACT.maps} target="_blank" rel="noopener noreferrer">Lihat di Google Maps</a>
        <a className="underline text-rose-700" href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        <a className="underline text-rose-700" href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
      </div>
    </section>
  );
}
