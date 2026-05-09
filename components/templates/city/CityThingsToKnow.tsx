"use client";

import { motion } from "framer-motion";
import { thingsToKnow, type ThingToKnow } from "@/data/city-template-data";

const GOLD = "#C4963A";
const TEXT = "#2C1A0E";
const MUTED = "#8A6E52";

function KnowCard({ item, index }: { item: ThingToKnow; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        delay: index * 0.06,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        background: "white",
        borderRadius: 14,
        padding: "1.125rem",
        border: `1px solid rgba(196,150,58,0.18)`,
        boxShadow: "0 1px 8px rgba(44,26,14,0.04)",
      }}
    >
      <div
        style={{
          fontSize: "1.375rem",
          lineHeight: 1,
          marginBottom: "0.625rem",
        }}
      >
        {item.icon}
      </div>
      <p
        style={{
          fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
          fontSize: "0.8125rem",
          fontWeight: 700,
          color: TEXT,
          marginBottom: "0.375rem",
        }}
      >
        {item.title}
      </p>
      <p
        style={{
          fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
          fontSize: "0.75rem",
          color: MUTED,
          lineHeight: 1.65,
        }}
      >
        {item.detail}
      </p>
    </motion.div>
  );
}

export default function CityThingsToKnow() {
  return (
    <section
      style={{
        background: "#FBF4E6",
        borderTop: `1px solid rgba(196,150,58,0.15)`,
        padding: "3.5rem 1.25rem",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: "center", marginBottom: "2.25rem" }}
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
          ✦ &nbsp; Guest Info &nbsp; ✦
        </p>
        <h2
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(1.875rem, 8vw, 2.375rem)",
            fontWeight: 700,
            color: TEXT,
            lineHeight: 1.1,
            margin: "0 0 0.625rem",
          }}
        >
          Good to Know
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.875rem",
            color: MUTED,
            lineHeight: 1.6,
          }}
        >
          A few things to help you celebrate comfortably.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.875rem",
        }}
      >
        {thingsToKnow.map((item, i) => (
          <KnowCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
