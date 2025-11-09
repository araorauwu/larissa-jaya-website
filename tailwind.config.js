/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Brand palet baru: biru–teal lembut
      colors: {
        brand: {
          50:  "#eef7ff",
          100: "#d9efff",
          200: "#bfe4ff",
          300: "#97d1ff",
          400: "#5fb6ff",
          500: "#2f9cf5",
          600: "#1f83d8",
          700: "#176ab0",
          800: "#155b92",
          900: "#124a75"
        }
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 8px 24px rgba(17, 24, 39, 0.06)"
      }
    }
  },
  plugins: []
}
