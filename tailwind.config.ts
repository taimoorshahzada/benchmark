/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontSize: {
      xxs: [
        "0.875rem",
        {
          lineHeight: "1.125rem",
          letterSpacing: "-0.14px",
          fontWeight: "400",
        },
      ],
      xs: [
        "1.125rem",
        {
          lineHeight: "1.3125rem",
          letterSpacing: "-0.18px",
          fontWeight: "400",
        },
      ],
      "xs-medium": [
        "1.125rem",
        {
          lineHeight: "1.3125rem",
          letterSpacing: "-0.216px",
          fontWeight: "500",
        },
      ],
      sm: [
        "1.375rem",
        {
          lineHeight: "1.5625rem",
          letterSpacing: "-0.264px",
          fontWeight: "400",
        },
      ],
      base: [
        "1.6875rem",
        {
          lineHeight: "1.875rem",
          letterSpacing: "-0.324px",
          fontWeight: "500",
        },
      ],
      lg: [
        "2.5rem",
        {
          lineHeight: "2.8125rem",
          letterSpacing: "-0.48px",
          fontWeight: "500",
        },
      ],
      xl: [
        "7.5rem",
        {
          lineHeight: "6.875rem",
          letterSpacing: "-3.6px",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "12.5rem",
        {
          lineHeight: "11.25rem",
          letterSpacing: "-8px",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "16.875rem",
        {
          lineHeight: "15rem",
          letterSpacing: "-8.64px",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-moderat)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        large: "265px",
        medium: "120px",
      },
      color: {
        grey: "#999999",
      },
      fontSize: {
        "body-lg": "1rem",
        body: ".875rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
};
