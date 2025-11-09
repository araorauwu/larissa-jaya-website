/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#fff1f5",
          100: "#ffe4e9",
          200: "#fecdd6",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e", // pink-merah elegan
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(244,63,94,.08)",     // brand-500
        card: "0 6px 18px rgba(16,24,40,.06)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        // pola lembut biar nggak ‘flat’
        "rose-mist":
          "radial-gradient(40rem 20rem at 10% 10%, rgba(244,63,94,.06), transparent 60%), radial-gradient(30rem 16rem at 90% 0%, rgba(244,63,94,.05), transparent 55%), linear-gradient(180deg,#fff,#fff)",
      },
    },
  },
  plugins: [],
}
