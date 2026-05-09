"use client";

import { motion } from "framer-motion";
import { events } from "@/data/city-template-data";
import CityEventCard from "./CityEventCard";

const GOLD = "#C4963A";
const TEXT = "#2C1A0E";
const MUTED = "#8A6E52";

export default function CityEvents() {
  return (
    <section
      style={{
        background: "#FBF4E6",
        padding: "3.5rem 1.25rem",
      }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: "center", marginBottom: "2.5rem" }}
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
          ✦ &nbsp; Join Us &nbsp; ✦
        </p>
        <h2
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(2rem, 9vw, 2.625rem)",
            fontWeight: 700,
            color: TEXT,
            lineHeight: 1.1,
            margin: "0 0 0.625rem",
          }}
        >
          Our Celebrations
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.875rem",
            color: MUTED,
            lineHeight: 1.6,
          }}
        >
          Four days. Six ceremonies. One beautiful beginning.
        </p>
      </motion.div>

      {/* Event cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {events.map((event, i) => (
          <CityEventCard key={event.id} event={event} index={i} />
        ))}
      </div>
    </section>
  );
}
