/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "4xl": ["-5px 5px 5px red"],
        "3.5xl": ["-3px 3px 1px red"],
      },
    },
  },
  plugins: [],
};
