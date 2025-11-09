export default function Footer(){
  return (
    <footer className="border-t bg-white/90">
      <div className="container-narrow py-6 text-sm text-ink-600 flex flex-col md:flex-row md:items-center gap-2">
        <p>© {new Date().getFullYear()} Larissa Jaya — Tlogorejo, Karangawen, Demak</p>
        <span className="md:ml-auto">Media promosi — React & Tailwind</span>
      </div>
    </footer>
  )
}
