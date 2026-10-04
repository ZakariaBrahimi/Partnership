import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Partner brand scale — set per partner via CSS variables (see src/lib/partner.ts).
        flex: {
          50: "rgb(var(--flex-50) / <alpha-value>)",
          100: "rgb(var(--flex-100) / <alpha-value>)",
          200: "rgb(var(--flex-200) / <alpha-value>)",
          500: "rgb(var(--flex-500) / <alpha-value>)",
          600: "rgb(var(--flex-600) / <alpha-value>)",
          700: "rgb(var(--flex-700) / <alpha-value>)",
        },
        // MizaniyaPay — navy taken from the official logo (navy #1E4E67).
        mz: {
          50: "#EEF5F8",
          100: "#D8E7EE",
          200: "#B4CFDC",
          500: "#2F6C8C",
          600: "#265A77",
          700: "#1E4E67",
          800: "#183D52",
          900: "#112C3B",
        },
        // MizaniyaPay — yellow accent from the coin mark.
        sun: { 100: "#FEF9C3", 400: "#F8E71B", 500: "#E0CF00" },
        ink: { DEFAULT: "#0F1B24", soft: "#475766", mute: "#6B7A89" },
        canvas: "#FAFAF8",
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        arabic: ['"IBM Plex Sans Arabic"', '"Inter"', "ui-sans-serif", "sans-serif"],
      },
      borderRadius: { "2xl": "1rem", "3xl": "1.5rem" },
      boxShadow: {
        soft: "0 1px 2px rgba(15,27,36,.04), 0 8px 24px -8px rgba(15,27,36,.08)",
        lift: "0 2px 4px rgba(15,27,36,.05), 0 20px 40px -12px rgba(15,27,36,.16)",
      },
      keyframes: {
        flow: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(400%)", opacity: "0" },
        },
      },
      animation: { flow: "flow 2.4s ease-in-out infinite" },
    },
  },
  plugins: [],
} satisfies Config;
