/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        h1: "66px",
        h2: "41px",
        h3: "32px",
        h4: "26px",
        paragraph: "18px",
        caption: "12px",
        ingress: "26px",
        logo: "36px",
      },
      lineHeight: {
        h1: "70px;",
        h2: "1.25",
        h3: "1.25",
        h4: "1.25",
        paragraph: "1.25",
        ingress: "1.25",
        logo: "43.85px",
      },
      colors: {
        regular: "rgba(0,0,0,0.8)",
        "background-regular": "#FEFAF6",
        "background-regular-dark": "rgb(11, 20, 22)",
        foreground: "rgba(0,0,0,0.8)",
        "foreground-dark": "rgb(242, 244, 245)",
        "background-header": "#FFF3E0",
        cta: "#CA9A4A",
        separator: "#E9E9E9",
        "separator-dark": "#ffffff1a",
        outline: "#ECD7B7",
        "pill-background": "#FFF2E0",
        "pill-background-dark": "#ffffff1a",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        sans: ["var(--font-sans)"],
      },
      keyframes: {
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: {
            transform: "translateX(calc(100% + var(--viewport-padding)))",
          },
          to: { transform: "translateX(0)" },
        },
        swipeOut: {
          from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
          to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
        },
      },
      animation: {
        hide: "hide 100ms ease-in",
        slideIn: "slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        swipeOut: "swipeOut 100ms ease-out",
      },
    },
  },
  plugins: [],
};
