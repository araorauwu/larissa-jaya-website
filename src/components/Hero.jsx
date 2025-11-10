// D:\KULIAH\larissa-jaya-website\src\components\Hero.jsx
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-b-3xl shadow-sm">
      {/* Header image */}
<img
  src="/hero/larissa_jaya_header_16x9.png"
  alt="Larissa Jaya Store"
  className="w-full h-[38vh] sm:h-[62vh] object-cover object-[50%_12%]"
/>



      {/* gradasi bawah halus */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/0 via-white/5 to-white/90" />
    </section>
  );
}
