/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",

      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        primary: "#191A19", //
        "primary-light": "#444444",
        secundary: "#424642",
        yellow: {
          350: "#E8DD0C",
          550: "#E6CB01",
        },
        purple: {
          350: "#AA77FF",
        },
      },
    },
  },
  plugins: [],
};
