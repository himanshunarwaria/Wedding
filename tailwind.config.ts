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
        bg:             "#F7F7F7",
        "bg-soft":      "#FAFAFA",
        surface:        "#FFFFFF",
        "surface-warm": "#F5F5F5",
        "cream-card":   "#FFFFFF",
        primary:        "#111111",
        "primary-soft": "#333333",
        gold:           "#999999",
        "gold-soft":    "#DDDDDD",
        "gold-faint":   "#F0F0F0",
        champagne:      "#E8E8E8",
        "text-main":    "#111111",
        "text-muted":   "#666666",
        "text-light":   "#999999",
        border:         "#E2E2E2",
        "border-gold":  "#D8D8D8",
        "footer-bg":    "#111111",
        /* legacy */
        "footer-surface": "#333333",
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
        section:      "9rem",
        "section-sm": "5.5rem",
      },
      borderRadius: {
        card:      "16px",
        "card-lg": "24px",
        phone:     "40px",
      },
      boxShadow: {
        card:         "0 1px 4px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover": "0 12px 40px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06)",
        phone:        "0 2px 8px rgba(0,0,0,0.18), 0 20px 56px rgba(0,0,0,0.16), 0 40px 96px rgba(0,0,0,0.1)",
        "phone-lg":   "0 4px 14px rgba(0,0,0,0.28), 0 30px 72px rgba(0,0,0,0.22), 0 60px 110px rgba(0,0,0,0.12)",
        btn:          "none",
        "btn-hover":  "none",
        sticky:       "0 -2px 16px rgba(0,0,0,0.08)",
      },
      animation: {
        marquee:       "marquee 36s linear infinite",
        "marquee-rev": "marquee-rev 30s linear infinite",
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
