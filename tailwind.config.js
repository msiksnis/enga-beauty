module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        inconsolata: ["Inconsolata"],
        quicksand: ["Quicksand"],
        babylonica: ["Babylonica"],
        alexbrush: ["Alex Brush"],
        lustria: ["Lustria"],
        poiret: ["Poiret One"],
      },
    },
  },
  plugins: [],
};
