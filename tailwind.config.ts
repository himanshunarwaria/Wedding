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
        background: "#FBF6EF",
        surface: "#FFFDF8",
        "surface-alt": "#F3E7D8",
        primary: "#6B1E2D",
        "primary-dark": "#43111B",
        accent: "#C9A45C",
        "accent-soft": "#E8D7B6",
        "text-main": "#261B17",
        "text-muted": "#7C6A61",
        border: "#E8DCCF",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 70% 50%, #F3E7D8 0%, #FBF6EF 60%)",
        "primary-gradient":
          "linear-gradient(135deg, #6B1E2D 0%, #43111B 100%)",
        "accent-gradient":
          "linear-gradient(135deg, #C9A45C 0%, #E8D7B6 100%)",
        "card-gradient":
          "linear-gradient(145deg, #FFFDF8 0%, #F3E7D8 100%)",
      },
      boxShadow: {
        card: "0 2px 20px rgba(107, 30, 45, 0.08)",
        "card-hover": "0 8px 40px rgba(107, 30, 45, 0.16)",
        btn: "0 4px 14px rgba(107, 30, 45, 0.25)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        shimmer: "shimmer 2s linear infinite",
        sparkle: "sparkle 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
