/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3F4957",
          secondary: "#7F9E8E",
          accent: "#C04334",
          neutral: "#3F4957",
          "base-100": "#ffffff",
        },
        extend: {
          colors: {
            b2: "#82A090",
            b3: "#C04334",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
// module.exports = {
//   //...
//   daisyui: {
//     themes: ["light", "dark", "coffee"],
//   },
// };
