module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neon: {
          blue: "#00F0FF",
          violet: "#8C4DFF",
        },
      },
      backdropBlur: {
        xs: "4px",
      },
    },
  },
  plugins: [],
};
