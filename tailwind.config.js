/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Pastikan ini mencakup jalur file Anda
  ],
  theme: {
    extend: {
      colors: {
        "custom-red": "#17181D",
        "custom-orange": "#5A7480",
        "custom-blue": "#5A7480",
        "custom-black": "#29343D",
        "custom-white": "#92A4B1",
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        redhat: ['"Red Hat Text"', "sans-serif"], // Tambahkan font Red Hat Text
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
