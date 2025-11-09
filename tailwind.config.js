/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#ef4661", // sedikit lebih merah muda
          600: "#dc3a56",
          700: "#b82f48",
          800: "#99283e",
          900: "#7f2135",
        },
      },
      boxShadow: {
        soft: "0 6px 24px rgba(16,24,40,.04), 0 2px 8px rgba(16,24,40,.06)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
}
