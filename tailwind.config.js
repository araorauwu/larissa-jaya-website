/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#fff1f3",
          100: "#ffe4e8",
          200: "#fecdd6",
          300: "#fda4b4",
          400: "#fb7185",
          500: "#f43f5e",   // pink utama
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337"
        },
        ink: {
          50:"#f7f7f9", 100:"#eef0f3", 200:"#e6e8ec", 300:"#d7dae0",
          400:"#b8bec7", 500:"#8a94a1", 600:"#5c6673", 700:"#3d4652",
          800:"#2c343f", 900:"#1f2732"
        }
      },
      boxShadow: {
        soft: "0 8px 24px rgba(244,63,94,0.08)",
        card: "0 8px 28px rgba(31,39,50,0.06)"
      },
      borderRadius: {
        xl: "14px",
        '2xl': "20px"
      }
    },
  },
  plugins: [],
}
