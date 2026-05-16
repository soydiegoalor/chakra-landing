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
        gold: "#C9A84C",
        "gold-light": "#E8C87A",
        "gold-dark": "#8B6914",
        wine: "#6B1F2A",
        "wine-light": "#9E3345",
        cream: "#F5EDD8",
        "cream-muted": "#8A7A6A",
        "dark-bg": "#0A0806",
        "dark-2": "#120E0A",
        "dark-3": "#1A1410",
        "dark-4": "#221B14",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        montserrat: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};