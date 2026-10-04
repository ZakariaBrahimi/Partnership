import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // FlexDZ — TODO: replace with the official brand color if different.
        flex: {
          50: "#FFF4ED",
          100: "#FFE6D5",
          200: "#FEC9A6",
          500: "#F26B21",
          600: "#E5560F",
          700: "#BF420B",
        },
        // MizaniyaPay — navy taken from the official coin mark (app/icon.png).
        mz: {
          50: "#EEF5F8",
          100: "#D8E7EE",
          200: "#B4CFDC",
          500: "#2F6C8C",
          600: "#265A77",
          700: "#1F4E69",
          800: "#183D52",
          900: "#112C3B",
        },
        // MizaniyaPay — yellow accent from the coin mark.
        sun: { 100: "#FEF9C3", 400: "#F2E30C", 500: "#D9CA00" },
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
