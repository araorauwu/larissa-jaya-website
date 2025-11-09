/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#fff1f5",
          100: "#ffe4ec",
          200: "#fecdd9",
          300: "#fba4bf",
          400: "#f772a0",
          500: "#ec407a", // utama
          600: "#d81b60",
          700: "#b0003a",
          800: "#8e0038",
          900: "#6a0030"
        }
      },
      boxShadow: {
        soft: "0 6px 20px rgba(236,64,122,0.10)"
      }
    },
  },
  plugins: [],
}
