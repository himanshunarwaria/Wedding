"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Calendar, Shirt } from "lucide-react";
import type { EventData } from "@/data/city-template-data";

const GOLD = "#C4963A";
const TEXT = "#2C1A0E";
const MUTED = "#8A6E52";

export default function CityEventCard({
  event,
  index,
}: {
  event: EventData;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{
        delay: index * 0.07,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        background: "white",
        borderRadius: 16,
        overflow: "hidden",
        border: `1px solid rgba(196,150,58,0.2)`,
        boxShadow: "0 2px 12px rgba(44,26,14,0.06)",
      }}
    >
      {/* Gold left accent + header row */}
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          borderBottom: `1px solid rgba(196,150,58,0.12)`,
        }}
      >
        {/* Gold left bar */}
        <div
          style={{
            width: 4,
            background: GOLD,
            flexShrink: 0,
            borderRadius: "0 0 0 0",
          }}
        />

        {/* Header content */}
        <div
          style={{
            flex: 1,
            padding: "1rem 1.125rem 0.875rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span style={{ fontSize: "1.5rem", lineHeight: 1, flexShrink: 0 }}>
            {event.icon}
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                fontFamily:
                  "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
                fontSize: "1.3125rem",
                fontWeight: 700,
                color: TEXT,
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              {event.name}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
                fontSize: "0.625rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: GOLD,
                marginTop: "0.2rem",
              }}
            >
              {event.dayLabel}
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div style={{ padding: "1rem 1.125rem 1.125rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
          }}
        >
          {/* Date */}
          <Row icon={<Calendar size={13} color={GOLD} />} text={event.date} />

          {/* Time */}
          <Row icon={<Clock size={13} color={GOLD} />} text={event.time} />

          {/* Venue */}
          <Row
            icon={<MapPin size={13} color={GOLD} />}
            text={
              <span>
                <span style={{ fontWeight: 600, color: TEXT }}>
                  {event.venue}
                </span>
                <br />
                <span style={{ color: MUTED, fontSize: "0.75rem" }}>
                  {event.address}
                </span>
              </span>
            }
          />

          {/* Dress code */}
          <Row
            icon={<Shirt size={13} color={GOLD} />}
            text={
              <span>
                <span style={{ color: MUTED, fontSize: "0.8125rem" }}>
                  Dress code:{" "}
                </span>
                <span style={{ fontWeight: 600, color: TEXT }}>
                  {event.dresscode}
                </span>
              </span>
            }
          />
        </div>

        {/* Directions CTA */}
        <a
          href={event.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            marginTop: "1rem",
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: GOLD,
            textDecoration: "none",
            borderBottom: `1px solid rgba(196,150,58,0.4)`,
            paddingBottom: "1px",
          }}
        >
          <MapPin size={13} />
          Get Directions
        </a>
      </div>
    </motion.div>
  );
}

function Row({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "0.625rem",
      }}
    >
      <span style={{ marginTop: 2, flexShrink: 0 }}>{icon}</span>
      <span
        style={{
          fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
          fontSize: "0.8125rem",
          color: MUTED,
          lineHeight: 1.5,
        }}
      >
        {text}
      </span>
    </div>
  );
}
