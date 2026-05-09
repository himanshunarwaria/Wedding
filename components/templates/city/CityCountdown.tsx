"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { coupleData } from "@/data/city-template-data";

const GOLD = "#C4963A";
const TEXT = "#2C1A0E";
const MUTED = "#8A6E52";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const target = new Date(coupleData.weddingDateISO).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function Block({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ textAlign: "center", flex: 1 }}>
      <div
        style={{
          background: "white",
          border: `1px solid rgba(196,150,58,0.25)`,
          borderRadius: 12,
          padding: "1rem 0.5rem 0.75rem",
          marginBottom: "0.5rem",
        }}
      >
        <span
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(2.25rem, 10vw, 3rem)",
            fontWeight: 700,
            color: TEXT,
            lineHeight: 1,
            display: "block",
          }}
        >
          {pad(value)}
        </span>
      </div>
      <span
        style={{
          fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
          fontSize: "0.625rem",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: MUTED,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span
      style={{
        fontFamily:
          "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
        fontSize: "2rem",
        fontWeight: 300,
        color: GOLD,
        opacity: 0.6,
        alignSelf: "flex-start",
        paddingTop: "0.875rem",
        flexShrink: 0,
      }}
    >
      :
    </span>
  );
}

export default function CityCountdown() {
  const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const hasElapsed =
    mounted && time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0;

  return (
    <section
      style={{
        background: "rgba(196,150,58,0.06)",
        borderTop: `1px solid rgba(196,150,58,0.18)`,
        borderBottom: `1px solid rgba(196,150,58,0.18)`,
        padding: "3rem 1.75rem",
        textAlign: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.625rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: GOLD,
            marginBottom: "0.625rem",
          }}
        >
          Counting down to forever
        </p>
        <p
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(1.5rem, 6vw, 1.875rem)",
            fontWeight: 600,
            color: TEXT,
            marginBottom: "2rem",
            lineHeight: 1.2,
          }}
        >
          {coupleData.displayDate}
        </p>

        {hasElapsed ? (
          <p
            style={{
              fontFamily:
                "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
              fontSize: "1.5rem",
              fontStyle: "italic",
              color: GOLD,
            }}
          >
            The celebrations have begun! ✦
          </p>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.5rem",
              maxWidth: 360,
              margin: "0 auto",
            }}
          >
            <Block value={time.days} label="Days" />
            <Separator />
            <Block value={time.hours} label="Hours" />
            <Separator />
            <Block value={time.minutes} label="Mins" />
            <Separator />
            <Block value={time.seconds} label="Secs" />
          </div>
        )}
      </motion.div>
    </section>
  );
}
