"use client";

import { motion } from "framer-motion";
import { coupleData } from "@/data/city-template-data";

const GOLD = "#C4963A";
const TEXT = "#2C1A0E";
const MUTED = "#8A6E52";
const IVORY = "#FBF4E6";

function OrnamentalRule() {
  return (
    <svg
      width="180"
      height="16"
      viewBox="0 0 180 16"
      fill="none"
      aria-hidden="true"
      style={{ display: "block", margin: "0 auto" }}
    >
      <line x1="0" y1="8" x2="68" y2="8" stroke={GOLD} strokeWidth="0.6" />
      <circle cx="77" cy="8" r="2.5" fill={GOLD} />
      <circle cx="90" cy="8" r="3.5" fill={GOLD} />
      <circle cx="103" cy="8" r="2.5" fill={GOLD} />
      <line x1="112" y1="8" x2="180" y2="8" stroke={GOLD} strokeWidth="0.6" />
    </svg>
  );
}

export default function CityBlessings() {
  return (
    <section
      style={{
        background: IVORY,
        padding: "3.5rem 2rem",
        textAlign: "center",
        borderBottom: `1px solid rgba(196,150,58,0.15)`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top ornament */}
        <p
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "1.375rem",
            fontStyle: "italic",
            fontWeight: 400,
            color: GOLD,
            marginBottom: "2rem",
            lineHeight: 1.4,
          }}
        >
          With the divine blessings of
        </p>

        <OrnamentalRule />

        {/* Groom parents */}
        <p
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.9375rem",
            fontWeight: 600,
            color: TEXT,
            marginTop: "1.75rem",
            marginBottom: "0.25rem",
            lineHeight: 1.5,
          }}
        >
          {coupleData.groom.parents}
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.75rem",
            color: MUTED,
            letterSpacing: "0.06em",
          }}
        >
          {coupleData.groom.city}
        </p>

        {/* Connector */}
        <p
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "1.125rem",
            fontStyle: "italic",
            fontWeight: 400,
            color: GOLD,
            margin: "1.25rem 0",
          }}
        >
          and
        </p>

        {/* Bride parents */}
        <p
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.9375rem",
            fontWeight: 600,
            color: TEXT,
            marginBottom: "0.25rem",
            lineHeight: 1.5,
          }}
        >
          {coupleData.bride.parents}
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.75rem",
            color: MUTED,
            letterSpacing: "0.06em",
          }}
        >
          {coupleData.bride.city}
        </p>

        {/* Bottom ornament */}
        <div style={{ marginTop: "2rem" }}>
          <OrnamentalRule />
        </div>

        {/* Invite verse */}
        <p
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "1.0625rem",
            fontStyle: "italic",
            fontWeight: 400,
            color: MUTED,
            marginTop: "1.75rem",
            lineHeight: 1.75,
            maxWidth: 340,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          joyfully invite you to the wedding celebration of their children
        </p>

        {/* Couple names — large */}
        <p
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(2rem, 10vw, 2.75rem)",
            fontWeight: 700,
            color: TEXT,
            marginTop: "1.25rem",
            lineHeight: 1.1,
          }}
        >
          {coupleData.groom.name}
          <span
            style={{
              fontWeight: 400,
              fontStyle: "italic",
              color: GOLD,
              fontSize: "0.65em",
              margin: "0 0.5rem",
            }}
          >
            &amp;
          </span>
          {coupleData.bride.name}
        </p>
      </motion.div>
    </section>
  );
}
