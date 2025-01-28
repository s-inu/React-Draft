/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      opacity: {
        5: "0.05",
      },
      colors: {
        "ur-green": "#42F596",
        "ur-yellow": "#FFF000",
        "ur-blue": "#059BE6",
        "ur-blue-light": "#9EDFFF",
        "ur-blue-dark": "#003D5C",
      },
    },
  },
};
