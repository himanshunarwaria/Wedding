import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:             "#F8F1E7",
        "bg-soft":      "#FBF6EF",
        surface:        "#FFFDF8",
        "surface-warm": "#EFE2D0",
        "cream-card":   "#FFF9F0",
        primary:        "#17110E",
        "primary-soft": "#2A211D",
        gold:           "#B99A5D",
        "gold-soft":    "#E6D4B2",
        "gold-faint":   "#F2E8D0",
        champagne:      "#E2C97E",
        "text-main":    "#18120F",
        "text-muted":   "#6F625B",
        "text-light":   "#9E9089",
        border:         "#E4D5C4",
        "border-gold":  "#D4C090",
        "footer-bg":    "#17110E",
        /* legacy */
        "footer-surface": "#2A211D",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Manrope", "system-ui", "sans-serif"],
        sans:  ["var(--font-sans)",  "Manrope", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem,6vw,5.5rem)",       { lineHeight: "1.04", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2.25rem,4vw,3.5rem)",    { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.625rem,2.5vw,2.25rem)",{ lineHeight: "1.13", letterSpacing: "-0.015em" }],
      },
      spacing: {
        section:    "9rem",
        "section-sm": "5.5rem",
      },
      borderRadius: {
        card:    "16px",
        "card-lg": "24px",
        phone:   "40px",
      },
      boxShadow: {
        card:       "0 1px 8px rgba(23,17,14,0.05), 0 6px 24px rgba(23,17,14,0.04)",
        "card-hover": "0 16px 48px rgba(23,17,14,0.12), 0 4px 16px rgba(23,17,14,0.07)",
        phone:      "0 2px 8px rgba(0,0,0,0.28), 0 20px 56px rgba(0,0,0,0.22), 0 40px 96px rgba(0,0,0,0.13)",
        "phone-lg": "0 4px 14px rgba(0,0,0,0.34), 0 30px 72px rgba(0,0,0,0.28), 0 60px 110px rgba(0,0,0,0.16)",
        btn:        "0 2px 12px rgba(23,17,14,0.18)",
        "btn-hover": "0 6px 24px rgba(23,17,14,0.25)",
        sticky:     "0 -4px 24px rgba(23,17,14,0.1)",
      },
      animation: {
        marquee:      "marquee 36s linear infinite",
        "marquee-rev": "marquee-rev 30s linear infinite",
        "fade-up":    "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in":    "fade-in 0.5s ease both",
        "slide-up":   "slide-up 0.4s cubic-bezier(0.22,1,0.36,1) both",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(28px)", filter: "blur(4px)" },
          to:   { opacity: "1", transform: "translateY(0)",    filter: "blur(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(100%)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
