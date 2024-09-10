/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Pastikan ini mencakup jalur file Anda
  ],
  theme: {
    extend: {
      colors: {
        "custom-red": "#51191D",
        "custom-orange": "#DBAE52",
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        redhat: ['"Red Hat Text"', "sans-serif"], // Tambahkan font Red Hat Text
      },
    },
  },
  plugins: [],
};
