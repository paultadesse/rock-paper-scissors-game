module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueDark: "#1f3756",
        blueDarker: "#141539",
        rockDark: "#dc2e4e",
        rockDarker: "#dd405d",
        paperDark: "#4865f4",
        paperDarker: "#5671f5",
        scissorDark: "#ec9e0e",
        scissorDarker: "#eca922",
        lizardDark: "#834fe3",
        lizardDarker: "#8c5de5",
        spockDark: "#40b9ce",
        spockDarker: "#52bed1",
      },
    },
    fontFamily: {
      BarlowCondensed: ["Barlow Condensed"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
