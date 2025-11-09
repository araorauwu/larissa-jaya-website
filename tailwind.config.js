/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // palet baru: biru-kehijauan yang lembut
        brand: {
          50:  "#eaf6ff",
          100: "#d4edff",
          200: "#aee0ff",
          300: "#7fd0ff",
          400: "#4fb9f2",
          500: "#2aa3e0",   // utama
          600: "#1c85bf",
          700: "#166a99",
          800: "#125478",
          900: "#0e425e",
        }
      },
      borderRadius: {
        xl: "0.85rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 6px 20px rgba(0,0,0,0.06)",
      },
      backgroundImage: {
        hero: "radial-gradient(1200px 400px at 10% 0%, rgba(42,163,224,0.10), transparent), radial-gradient(1000px 300px at 90% 10%, rgba(42,163,224,0.07), transparent)"
      }
    },
  },
  plugins: [],
}
