/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        card: "#18181B",
        border: "#27272A",
        primary: "#6366F1",
        accent: "#8B5CF6",
      },
    },
  },
  plugins: [],
};