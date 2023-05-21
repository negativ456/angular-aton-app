/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    screens: {
      mobile: "380px",
      desktop: "1600px",
    },
  },
  plugins: [],
};
