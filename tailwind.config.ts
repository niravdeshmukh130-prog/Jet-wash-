import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        concrete: "#EDEBE4",   // clean paving — page base
        ink: "#141B20",        // wet tarmac — text / dark sections
        jet: {
          DEFAULT: "#0C86C4",  // high-pressure water
          deep: "#0A618D",
          mist: "#D9EEF8",
        },
        amber: "#FFA800",      // hi-vis — quote CTA only
        grime: "#4A4439",      // pre-clean surface tone
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: { wrap: "78rem" },
    },
  },
  plugins: [],
};
export default config;
