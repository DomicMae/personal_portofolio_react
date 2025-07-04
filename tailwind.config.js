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
        "custom-black": "#292C35",
        "custom-white": "#92A4B1",
        "custom-yellow": "#DBAE52",
        "custom-blue-dark": "#1D3557",
        "custom-brown": "#6D482E",
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', "sans-serif"],
        redhat: ['"Red Hat Text"', "sans-serif"], // Tambahkan font Red Hat Text
      },
      keyframes: {
        "meteor-vertical": {
          "0%": {
            transform: "translateY(-100px)", // hanya vertikal
          },
          "100%": {
            transform: "translateY(110vh)", // melewati layar
          },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "meteor-vertical": "meteor-vertical 4s linear infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out both",
        "fade-up": "fadeUp 0.8s ease-out both",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
