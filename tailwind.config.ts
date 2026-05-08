import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Core backgrounds ── */
        "ivory":        "#FDF8F4",
        "ivory-2":      "#F8F1EA",
        "ivory-3":      "#F2E8DE",
        "ivory-dark":   "#EAD9CC",
        /* ── Text ── */
        "charcoal":     "#2D2926",
        "charcoal-muted":"#5C4F47",
        "charcoal-light":"#8B7D74",
        /* ── Accents ── */
        "gold":         "#C5A467",
        "gold-hover":   "#B8933A",
        "gold-light":   "#EAD9B8",
        "gold-pale":    "#F5EDDA",
        /* ── Rose ── */
        "rose":         "#C4967A",
        "rose-light":   "#F0DDD4",
        "rose-pale":    "#FAF1EC",
        /* ── UI ── */
        "border-warm":  "#E8DDD5",
        "border-light": "#F0E8E0",
        /* ── Footer ── */
        "footer-bg":    "#1E1916",
        "footer-surface":"#2A2420",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans:  ["var(--font-sans)",  "DM Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem,5.5vw,4.5rem)", { lineHeight: "1.07", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem,4vw,3rem)",         { lineHeight: "1.1",  letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.5rem,2.5vw,2rem)",     { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section":    "7.5rem",
        "section-sm": "5rem",
      },
      borderRadius: {
        "card":  "16px",
        "card-lg":"24px",
        "phone": "40px",
      },
      boxShadow: {
        "card":     "0 2px 8px rgba(45,41,38,0.06), 0 8px 32px rgba(45,41,38,0.07)",
        "card-hover":"0 8px 24px rgba(45,41,38,0.1), 0 20px 60px rgba(45,41,38,0.1)",
        "phone":    "0 2px 8px rgba(0,0,0,0.3), 0 20px 60px rgba(0,0,0,0.25), 0 40px 100px rgba(0,0,0,0.15)",
        "phone-lg": "0 4px 12px rgba(0,0,0,0.35), 0 30px 80px rgba(0,0,0,0.3), 0 60px 120px rgba(0,0,0,0.15)",
        "btn":      "0 4px 14px rgba(197,164,103,0.3)",
        "btn-hover":"0 8px 28px rgba(197,164,103,0.45)",
        "sticky":   "0 -4px 24px rgba(45,41,38,0.12)",
      },
      animation: {
        "marquee":     "marquee 32s linear infinite",
        "marquee-rev": "marquee-rev 28s linear infinite",
        "fade-up":     "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "fade-in":     "fade-in 0.5s ease both",
        "slide-up":    "slide-up 0.4s cubic-bezier(0.22,1,0.36,1) both",
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
