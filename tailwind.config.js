/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "600px",
        md: "900px",
        lg: "1200px",
        slg: "1800px",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
