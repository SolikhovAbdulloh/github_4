/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        kokimtir: "#0D0D2B", // Siz kiritgan rang
        secondary: "#2B076E", // Qizil rang
        btn: "#3671E9", // Yashil rang
        sariq: "#FFFF00", // Sariq rang
      },
    },
  },
  plugins: [],
};
