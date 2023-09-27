/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-main": "#FB8122",
        "gray-main": "#333333",
        white: "#FFFFFF",
        yellow: "#EBDB79",
        "white-gray": "#F0F0F0",
        "gray-second": "#202020",
      },
    },
  },
  plugins: [],
};
