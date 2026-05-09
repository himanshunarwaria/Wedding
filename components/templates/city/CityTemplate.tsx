"use client";

import CityHero from "./CityHero";
import CityBlessings from "./CityBlessings";
import CityCountdown from "./CityCountdown";
import CityEvents from "./CityEvents";
import CityMapCTA from "./CityMapCTA";
import CityCoupleStory from "./CityCoupleStory";
import CityGallery from "./CityGallery";
import CityRSVP from "./CityRSVP";
import CityThingsToKnow from "./CityThingsToKnow";
import { coupleData } from "@/data/city-template-data";

const GOLD = "#C4963A";
const TEXT = "#2C1A0E";

export default function CityTemplate() {
  return (
    <div
      style={{
        background: "#EDE0CE",
        minHeight: "100vh",
        padding: "0",
      }}
    >
      {/* Canvas — mobile-first, capped at 480px on desktop */}
      <div
        style={{
          maxWidth: 480,
          margin: "0 auto",
          background: "#FBF4E6",
          boxShadow:
            "0 0 0 1px rgba(196,150,58,0.12), 0 24px 80px rgba(44,26,14,0.18)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CityHero />
        <CityBlessings />
        <CityCountdown />
        <CityEvents />
        <CityMapCTA />
        <CityCoupleStory />
        <CityGallery />
        <CityRSVP />
        <CityThingsToKnow />

        {/* Footer */}
        <footer
          style={{
            background: TEXT,
            padding: "2.5rem 1.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily:
                "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
              fontSize: "clamp(1.625rem, 7vw, 2rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              margin: "0 0 0.375rem",
            }}
          >
            {coupleData.groom.name}
            <span
              style={{
                fontWeight: 400,
                fontStyle: "italic",
                color: GOLD,
                fontSize: "0.7em",
                margin: "0 0.4rem",
              }}
            >
              &amp;
            </span>
            {coupleData.bride.name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.06em",
              marginBottom: "2rem",
            }}
          >
            {coupleData.displayDate}
          </p>

          {/* Ornament */}
          <p
            style={{
              fontFamily:
                "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
              fontSize: "1.25rem",
              fontStyle: "italic",
              color: "rgba(196,150,58,0.55)",
              marginBottom: "2rem",
            }}
          >
            {coupleData.tagline}
          </p>

          {/* Branding */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
                fontSize: "0.625rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              Made with InviteBliss ✦
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
