/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#f7fafc", // Custom light background color
        dark: "#1a202c", // Custom dark background color
      },
    },
  },
  plugins: [],
};
