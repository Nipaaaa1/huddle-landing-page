/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        violet: "hsl(257, 40%, 49%)",
        softMagenta: "hsl(300, 69%, 71%)",
      },
      backgroundImage: {
        desktop: "url('/images/bg-desktop.svg')",
        mobile: "url('/images/bg-mobile.svg')",
      },
    },
  },
  plugins: [],
};
