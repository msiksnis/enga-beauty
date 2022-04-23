module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
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
  variants: {
    extend: {},
  },
  plugins: [],
};
