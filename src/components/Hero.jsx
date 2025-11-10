// D:\KULIAH\larissa-jaya-website\src\components\Hero.jsx
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative">
      {/* Gambar: tajam di desktop, blur tipis di mobile */}
      <picture>
        {/* Desktop & tablet → gambar bersih */}
        <source media="(min-width: 768px)" srcSet="/hero/store_clean.png" />
        {/* Mobile → boleh blur tipis */}
        <img
          src="/hero/store_clean.png"
          alt="Foto Toko Larissa Jaya"
          className="
            block w-full h-[42vh] sm:h-[46vh] lg:h-[52vh]
            object-cover object-center
            blur-[3px] sm:blur-[1.5px] lg:blur-0
            brightness-100 lg:brightness-100
          "
          loading="eager"
        />
      </picture>

      {/* Overlay gradient halus biar teks bawah kontras */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/80 via-white/40 to-white/0" />

      {/* (Opsional) strip bayangan bawah biar transisi mulus */}
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-white/0 to-white" />

      {/* CTA di atas gambar (kalau mau dipakai sebagai hero penuh).
          Sekarang kita biarkan heading tetap di section bawah seperti layout kamu,
          jadi blok ini dikosongkan. */}
    </section>
  );
}
