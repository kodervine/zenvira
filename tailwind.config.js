/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: "#070b0e",
        backgroundColor: "#f5f8fa",
        primaryBtn: "#262d4f",
        secondaryBtn: "#e3ddee",
        accentColor: "#34264f",
      },
      // fontFamily: {
      //   sans: ["Roboto", "Arial", "sans-serif"],
      //   serif: ["EBGaramond"],
      // },
    },
  },
  plugins: [],
};
