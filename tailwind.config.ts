import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./scenes/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design system
        void: "#080808",        // near-black background
        signal: "#F0EEE8",      // off-white primary text
        pulse: "#C8F23A",       // acid-green accent (signal/launch moments)
        static: "#1E1E1E",      // dark surface
        noise: "#3B3B3B",       // mid-tone for borders/dividers
        dim: "#757575",         // secondary text
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "9xl":  ["8rem",  { lineHeight: "0.9", letterSpacing: "-0.04em" }],
      },
    },
  },
  plugins: [],
};

export default config;
