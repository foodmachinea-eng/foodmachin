import type { Config } from "tailwindcss";

/**
 * Brand tokens live in src/app/globals.css as CSS variables (--brand, --brand-dark …)
 * so the accent can be retuned to the exact logo colour in one place.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", xl: "2.5rem" },
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          dark: "rgb(var(--brand-dark) / <alpha-value>)",
          soft: "rgb(var(--brand-soft) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "#15171a",
          900: "#0f1113",
          800: "#1b1e22",
          700: "#262a2f",
          600: "#3a3f46",
        },
        steel: {
          50: "#f6f7f8",
          100: "#eef0f2",
          200: "#e1e4e8",
          300: "#c9ced4",
          400: "#9aa1aa",
          500: "#6b737d",
          600: "#4d545d",
        },
      },
      fontFamily: {
        display: ["Archivo", "system-ui", "sans-serif"],
        sans: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      letterSpacing: { tightest: "-0.035em" },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      },
      animation: {
        "fade-up": "fade-up .8s cubic-bezier(.2,.7,.2,1) both",
        "fade-in": "fade-in .6s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
