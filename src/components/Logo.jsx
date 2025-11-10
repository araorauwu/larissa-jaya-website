import { Link } from "react-router-dom";

export default function Logo({ size = 28 }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/logo/flipflop.svg"
        width={size}
        height={size}
        alt="Larissa Jaya logo"
        className="rounded-xl shadow-sm"
      />
      <span className="font-semibold text-brand-600">Larissa Jaya</span>
    </Link>
  );
}
