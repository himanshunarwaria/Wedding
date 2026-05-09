"use client";

import { motion } from "framer-motion";
import CityDecorImage from "./CityDecorImage";
import { coupleData } from "@/data/city-template-data";

const GOLD = "#C4963A";
const TEXT = "#2C1A0E";
const MUTED = "#8A6E52";
const IVORY = "#FBF4E6";

export default function CityCoupleStory() {
  return (
    <section style={{ background: IVORY }}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{
          textAlign: "center",
          padding: "3.5rem 1.5rem 2rem",
          borderTop: `1px solid rgba(196,150,58,0.15)`,
        }}
      >
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
          ✦ &nbsp; About the Couple &nbsp; ✦
        </p>
        <h2
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(1.875rem, 8vw, 2.375rem)",
            fontWeight: 700,
            color: TEXT,
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Two souls, one story
        </h2>
      </motion.div>

      {/* Groom card */}
      <PersonCard
        name={coupleData.groom.name}
        fullName={coupleData.groom.fullName}
        photo={coupleData.groom.photo}
        story={coupleData.groom.story}
        city={coupleData.groom.city}
        align="left"
        delay={0}
      />

      {/* Divider */}
      <div
        style={{
          textAlign: "center",
          padding: "1.5rem 0",
          borderTop: `1px solid rgba(196,150,58,0.1)`,
          borderBottom: `1px solid rgba(196,150,58,0.1)`,
          background: "rgba(196,150,58,0.04)",
        }}
      >
        <span
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "1.75rem",
            fontWeight: 400,
            fontStyle: "italic",
            color: GOLD,
          }}
        >
          &amp;
        </span>
      </div>

      {/* Bride card */}
      <PersonCard
        name={coupleData.bride.name}
        fullName={coupleData.bride.fullName}
        photo={coupleData.bride.photo}
        story={coupleData.bride.story}
        city={coupleData.bride.city}
        align="right"
        delay={0.08}
      />

      {/* How we met */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: TEXT,
          padding: "3rem 2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.5625rem",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: GOLD,
            marginBottom: "1rem",
          }}
        >
          ✦ &nbsp; How We Met &nbsp; ✦
        </p>
        <p
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(1.125rem, 5vw, 1.375rem)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.85,
            maxWidth: 360,
            margin: "0 auto",
          }}
        >
          A shared trek, a chance conversation at 12,000 feet, and a chai
          neither of them wanted to finish — that&apos;s how forever began.
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.8125rem",
            color: GOLD,
            marginTop: "1.5rem",
            fontWeight: 500,
          }}
        >
          Triund, Himachal Pradesh · 2023
        </p>
      </motion.div>
    </section>
  );
}

function PersonCard({
  name,
  fullName,
  photo,
  story,
  city,
  align,
  delay,
}: {
  name: string;
  fullName: string;
  photo: string;
  story: string;
  city: string;
  align: "left" | "right";
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: "flex",
        flexDirection: align === "left" ? "row" : "row-reverse",
        alignItems: "flex-start",
        gap: "1.25rem",
        padding: "2rem 1.5rem",
      }}
    >
      {/* Photo */}
      <div
        style={{
          position: "relative",
          width: 96,
          height: 96,
          borderRadius: "50%",
          overflow: "hidden",
          flexShrink: 0,
          border: `2px solid rgba(196,150,58,0.35)`,
          background: "rgba(196,150,58,0.08)",
        }}
      >
        <CityDecorImage
          src={photo}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          fallbackStyle={{
            background: "rgba(196,150,58,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>

      {/* Text */}
      <div style={{ flex: 1, textAlign: align === "left" ? "left" : "right" }}>
        <p
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.5625rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: GOLD,
            marginBottom: "0.25rem",
          }}
        >
          {city}
        </p>
        <h3
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "1.625rem",
            fontWeight: 700,
            color: TEXT,
            lineHeight: 1.1,
            margin: "0 0 0.75rem",
          }}
        >
          {fullName}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.8125rem",
            color: MUTED,
            lineHeight: 1.7,
          }}
        >
          {story}
        </p>
      </div>
    </motion.div>
  );
}
