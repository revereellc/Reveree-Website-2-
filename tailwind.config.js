/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // The original palette is exposed as Tailwind colors so utility classes
      // (e.g. text-teal-dark, bg-navy) map to the exact same hex values used in
      // the original style.css :root variables. The CSS variables themselves
      // are still defined in index.css and remain the source of truth for the
      // ported component styles, so the design is byte-for-byte identical.
      colors: {
        teal: "#2BC4B8",
        "teal-dark": "#1FA89D",
        navy: "#1A1F36",
        cream: "#F7EEE3",
        "cream-warm": "#F3E5D4",
        "gray-text": "#6B7280",
        "gray-light": "#E5E0D8",
        coral: "#FF7A59",
        purple: "#9B8AFB",
        pink: "#F472B6",
        yellow: "#FBBF24",
        green: "#34D399",
      },
      fontFamily: {
        display: ["Sora", "Helvetica Neue", "Arial", "sans-serif"],
        body: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
      },
      borderRadius: {
        DEFAULT: "14px",
        sm: "8px",
      },
    },
  },
  plugins: [],
};
