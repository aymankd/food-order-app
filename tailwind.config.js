/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        f110: "110%",
        f90: "90%",
      },
      backgroundSize: {
        "50%": "50% auto",
      },
    },
  },
  plugins: [],
};
