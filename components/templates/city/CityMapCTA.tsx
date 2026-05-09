"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const GOLD = "#C4963A";
const TEXT = "#2C1A0E";
const MUTED = "#8A6E52";

const MAIN_VENUE = {
  name: "The Oberoi New Delhi",
  address: "Dr. Zakir Hussain Marg, New Delhi – 110003",
  mapsUrl: "https://maps.google.com/?q=28.5992,77.2282",
};

export default function CityMapCTA() {
  return (
    <section
      style={{
        background: TEXT,
        padding: "3rem 1.5rem",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Icon */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: `1px solid rgba(196,150,58,0.4)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.25rem",
          }}
        >
          <MapPin size={20} color={GOLD} />
        </div>

        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.5625rem",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: GOLD,
            marginBottom: "0.625rem",
          }}
        >
          ✦ &nbsp; Venue &nbsp; ✦
        </p>

        {/* Venue name */}
        <h3
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(1.625rem, 7vw, 2.125rem)",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.15,
            margin: "0 0 0.5rem",
          }}
        >
          {MAIN_VENUE.name}
        </h3>

        {/* Address */}
        <p
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.8125rem",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "2rem",
            lineHeight: 1.5,
          }}
        >
          {MAIN_VENUE.address}
        </p>

        {/* CTA button */}
        <a
          href={MAIN_VENUE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: GOLD,
            color: "white",
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.875rem",
            fontWeight: 600,
            padding: "0.75rem 1.75rem",
            borderRadius: 100,
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          <Navigation size={15} />
          Open in Google Maps
        </a>
      </motion.div>
    </section>
  );
}
