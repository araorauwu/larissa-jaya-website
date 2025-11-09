// D:\KULIAH\larissa-jaya-website\src\components\Logo.jsx
export default function Logo({size=28,label=true}){
  return (
    <div className="flex items-center gap-2">
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden>
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#fecdd3"/><stop offset="1" stopColor="#fda4af"/>
          </linearGradient>
        </defs>
        <rect x="4" y="4" rx="16" ry="16" width="56" height="56" fill="url(#g)"/>
        {/* sandal minimal */}
        <path d="M18 36c0-6 6-10 12-10s12 4 12 10-6 12-12 12-12-6-12-12z" fill="#fff" opacity=".9"/>
        <path d="M26 30c2-3 10-3 12 0" stroke="#e11d48" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </svg>
      {label && <span className="font-semibold text-rose-600">Larissa Jaya</span>}
    </div>
  );
}
