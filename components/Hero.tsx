"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ──────────────────────────────────────────────────────────────────
   Mini invitation screen rendered inside each phone mockup
────────────────────────────────────────────────────────────────── */
interface TemplateScreenProps {
  bg: string;
  accent: string;
  text: string;
  coupleName: string;
  date: string;
}

function TemplateScreen({
  bg,
  accent,
  text,
  coupleName,
  date,
}: TemplateScreenProps) {
  const parts = coupleName.split(" & ");
  const name1 = parts[0] ?? "";
  const name2 = parts[1] ?? "";

  return (
    <div
      className="absolute inset-0 flex flex-col items-center px-3 pb-4"
      style={{ background: bg, paddingTop: 36 }}
    >
      {/* Status bar */}
      <div
        className="absolute top-2 left-3 right-3 flex justify-between items-center"
        style={{
          fontSize: 6.5,
          color: text,
          opacity: 0.45,
          fontFamily: "var(--font-sans)",
        }}
      >
        <span>9:41</span>
        <span>●●●</span>
      </div>

      {/* Top ornament line */}
      <div className="flex items-center w-full gap-1 mb-2">
        <div className="flex-1 h-px" style={{ background: `${accent}30` }} />
        <svg viewBox="0 0 8 8" fill="none" style={{ width: 7, height: 7, flexShrink: 0 }}>
          <rect
            x="4" y="0" width="5" height="5" rx="0.3"
            fill={accent} opacity="0.45"
            transform="rotate(45 4 4)"
          />
        </svg>
        <div className="flex-1 h-px" style={{ background: `${accent}30` }} />
      </div>

      {/* Together line */}
      <p
        style={{
          fontSize: 5.5,
          letterSpacing: "0.15em",
          color: accent,
          opacity: 0.7,
          textTransform: "uppercase",
          marginBottom: 7,
          fontFamily: "var(--font-sans)",
        }}
      >
        Together with their families
      </p>

      {/* Mandala ornament */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        style={{ width: 26, height: 26, marginBottom: 7 }}
      >
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 16 + 7 * Math.cos(rad);
          const cy = 16 + 7 * Math.sin(rad);
          return (
            <ellipse
              key={angle}
              cx={cx}
              cy={cy}
              rx="2.8"
              ry="1.6"
              fill={accent}
              opacity="0.3"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        <circle cx="16" cy="16" r="3" fill={accent} opacity="0.38" />
        <circle cx="16" cy="16" r="1.3" fill={accent} opacity="0.65" />
      </svg>

      {/* Couple names */}
      <div className="text-center" style={{ marginBottom: 4 }}>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 13,
            color: text,
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          {name1}
        </p>
        <p
          style={{
            fontSize: 6.5,
            color: accent,
            opacity: 0.6,
            margin: "2px 0",
            letterSpacing: "0.1em",
            fontFamily: "var(--font-sans)",
          }}
        >
          &amp;
        </p>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 13,
            color: text,
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          {name2}
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center w-full gap-1 my-1.5">
        <div className="flex-1 h-px" style={{ background: `${accent}18` }} />
        <div
          className="rounded-full"
          style={{ width: 3, height: 3, background: `${accent}35` }}
        />
        <div className="flex-1 h-px" style={{ background: `${accent}18` }} />
      </div>

      {/* Date */}
      <p
        style={{
          fontSize: 7,
          fontFamily: "var(--font-serif)",
          color: text,
          opacity: 0.58,
          letterSpacing: "0.08em",
          marginBottom: 8,
          fontStyle: "italic",
        }}
      >
        {date}
      </p>

      {/* Event pills */}
      <div className="flex gap-1 w-full mb-3">
        {["Mehendi", "Wedding", "Reception"].map((ev) => (
          <div
            key={ev}
            className="flex-1 text-center"
            style={{
              background: `${accent}12`,
              borderRadius: 6,
              padding: "3px 2px",
              fontSize: 5.5,
              color: accent,
              opacity: 0.85,
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.03em",
            }}
          >
            {ev}
          </div>
        ))}
      </div>

      {/* RSVP pill */}
      <div
        style={{
          background: `${accent}15`,
          border: `0.5px solid ${accent}35`,
          borderRadius: 100,
          padding: "3px 12px",
          fontSize: 6.5,
          color: accent,
          letterSpacing: "0.08em",
          fontFamily: "var(--font-sans)",
        }}
      >
        RSVP →
      </div>

      {/* Home indicator */}
      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2"
        style={{
          width: 28,
          height: 2,
          borderRadius: 2,
          background: `${text}20`,
        }}
      />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   Phone cluster configuration — 9 phones
────────────────────────────────────────────────────────────────── */
const PHONE_W = 216;
const PHONE_H = Math.round(PHONE_W * 2.1); // ~454px

interface PhoneConfig {
  id: string;
  bg: string;
  accent: string;
  text: string;
  couple: string;
  date: string;
  left?: string;
  right?: string;
  rotate: number;
  scale: number;
  yOffset: number;
  hideMobile: boolean;
  floatDuration: number;
  floatDelay: number;
}

const phones: PhoneConfig[] = [
  {
    id: "p1",
    bg: "linear-gradient(150deg,#F9EEF2,#EDCDD8)",
    accent: "#9C2B4B",
    text: "#4A1528",
    couple: "Rohan & Priya",
    date: "12 · Feb · 2026",
    left: "0%",
    rotate: -20,
    scale: 0.62,
    yOffset: 80,
    hideMobile: true,
    floatDuration: 5.8,
    floatDelay: 0,
  },
  {
    id: "p2",
    bg: "linear-gradient(150deg,#F5E6D0,#E8C9A0)",
    accent: "#8B3A0F",
    text: "#3D1A08",
    couple: "Arjun & Kavya",
    date: "14 · Feb · 2026",
    left: "7%",
    rotate: -14,
    scale: 0.73,
    yOffset: 50,
    hideMobile: true,
    floatDuration: 6.2,
    floatDelay: 0.3,
  },
  {
    id: "p3",
    bg: "linear-gradient(150deg,#FEF0DC,#F5C878)",
    accent: "#7B3800",
    text: "#3D1C00",
    couple: "Harpreet & Pavan",
    date: "5 · May · 2026",
    left: "14%",
    rotate: -8,
    scale: 0.85,
    yOffset: 22,
    hideMobile: true,
    floatDuration: 6.8,
    floatDelay: 0.15,
  },
  {
    id: "p4",
    bg: "linear-gradient(150deg,#F5E6D0,#E8C9A0)",
    accent: "#8B3A0F",
    text: "#3D1A08",
    couple: "Priya & Arjun",
    date: "14 · Feb · 2026",
    left: "23%",
    rotate: -4,
    scale: 0.92,
    yOffset: 10,
    hideMobile: false,
    floatDuration: 7.2,
    floatDelay: 0.4,
  },
  {
    id: "p5",
    bg: "linear-gradient(150deg,#1E2A5E,#0F1A42)",
    accent: "#C9A45C",
    text: "#EAD5A5",
    couple: "Aisha & Kabir",
    date: "8 · March · 2026",
    left: "calc(50% - 108px)",
    rotate: 0,
    scale: 1.0,
    yOffset: 0,
    hideMobile: false,
    floatDuration: 7.5,
    floatDelay: 0.2,
  },
  {
    id: "p6",
    bg: "linear-gradient(150deg,#F9EEF2,#EDCDD8)",
    accent: "#9C2B4B",
    text: "#4A1528",
    couple: "Grace & Kevin",
    date: "22 · April · 2026",
    right: "23%",
    rotate: 4,
    scale: 0.92,
    yOffset: 12,
    hideMobile: false,
    floatDuration: 6.9,
    floatDelay: 0.5,
  },
  {
    id: "p7",
    bg: "linear-gradient(150deg,#FDF0C5,#F5D76E)",
    accent: "#B5350D",
    text: "#5C1A08",
    couple: "Deepika & Manish",
    date: "20 · Jan · 2026",
    right: "14%",
    rotate: 9,
    scale: 0.85,
    yOffset: 24,
    hideMobile: true,
    floatDuration: 6.5,
    floatDelay: 0.6,
  },
  {
    id: "p8",
    bg: "linear-gradient(150deg,#F2F5F0,#D9E5D6)",
    accent: "#3A6349",
    text: "#1E3328",
    couple: "Sneha & Rahul",
    date: "3 · June · 2026",
    right: "7%",
    rotate: 15,
    scale: 0.73,
    yOffset: 52,
    hideMobile: true,
    floatDuration: 5.9,
    floatDelay: 0.35,
  },
  {
    id: "p9",
    bg: "linear-gradient(150deg,#FEF0DC,#F5C878)",
    accent: "#7B3800",
    text: "#3D1C00",
    couple: "Gurpreet & Simran",
    date: "18 · Nov · 2026",
    right: "0%",
    rotate: 21,
    scale: 0.62,
    yOffset: 82,
    hideMobile: true,
    floatDuration: 5.5,
    floatDelay: 0.7,
  },
];

const mobilePhones = phones.filter((p) => !p.hideMobile); // p4, p5, p6
const mobileScales = [0.83, 0.96, 0.83];
const mobileRotates = [-9, 0, 9];
const mobileYOffsets = [22, 0, 22];

/* ──────────────────────────────────────────────────────────────────
   Stagger variants for the text block
────────────────────────────────────────────────────────────────── */
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ──────────────────────────────────────────────────────────────────
   Component
────────────────────────────────────────────────────────────────── */
export default function Hero() {
  const handleScroll = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative overflow-hidden grain"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(ellipse 110% 60% at 50% 15%, #F0E4CC 0%, var(--bg) 50%)",
      }}
    >
      {/* Warm ambient blobs */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: -140,
          left: -100,
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: "radial-gradient(circle, #EBC5C5 0%, transparent 70%)",
          opacity: 0.28,
          filter: "blur(64px)",
        }}
      />
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: "4%",
          right: -90,
          width: 440,
          height: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--champagne) 0%, transparent 70%)",
          opacity: 0.3,
          filter: "blur(60px)",
        }}
      />

      {/* ── PART A: Editorial text block ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{
          paddingTop: "clamp(120px, 14vw, 160px)",
          paddingLeft: "1.25rem",
          paddingRight: "1.25rem",
        }}
      >
        {/* Ornament divider */}
        <motion.div
          className="ornament-divider"
          initial={{ opacity: 0, scaleX: 0.3 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.65, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "1.25rem" }}
        >
          <span
            style={{ color: "var(--gold)", fontSize: "0.6875rem", lineHeight: 1 }}
          >
            ✦
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="eyebrow"
          {...fadeUp(0.14)}
          style={{ marginBottom: "1.5rem" }}
        >
          I n t r o d u c i n g
        </motion.p>

        {/* Pain line */}
        <motion.p
          {...fadeUp(0.26)}
          style={{
            fontFamily: "var(--font-sans)",
            fontStyle: "italic",
            fontWeight: 300,
            color: "var(--text-muted)",
            fontSize: "1rem",
            maxWidth: 560,
            margin: "0 auto 1.5rem",
            lineHeight: 1.6,
          }}
        >
          Weddings are expensive and hard to manage. We make one part effortless
          — your invite.
        </motion.p>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.38)}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3.25rem, 6vw, 6.5rem)",
            fontWeight: 800,
            lineHeight: 1.03,
            letterSpacing: "-0.03em",
            color: "var(--text-main)",
            maxWidth: 900,
            margin: "0 auto 1.5rem",
          }}
        >
          Website Templates for Wedding Invites
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.5)}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.0625rem",
            color: "var(--text-muted)",
            maxWidth: 520,
            lineHeight: 1.72,
            margin: "0 auto 2.5rem",
          }}
        >
          Easy to customise. Effortless to share. Designed beautifully for your
          big day.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <button
            onClick={() => handleScroll("#templates")}
            className="btn-primary"
            style={{ fontSize: "0.9375rem", padding: "0.9375rem 2.125rem" }}
          >
            Explore Templates <ArrowRight size={15} />
          </button>
          <button
            onClick={() => handleScroll("#templates")}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              color: "var(--text-muted)",
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
              textDecorationColor: "transparent",
              textUnderlineOffset: "4px",
              transition: "color 0.18s ease, text-decoration-color 0.18s ease",
              padding: "0.9375rem 0.5rem",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.color = "var(--text-main)";
              el.style.textDecorationColor = "var(--text-main)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.color = "var(--text-muted)";
              el.style.textDecorationColor = "transparent";
            }}
          >
            Preview Demo →
          </button>
        </motion.div>
      </div>

      {/* ── PART B: Desktop phone cluster ── */}
      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 520,
          pointerEvents: "none",
          zIndex: 5,
        }}
      >
        {/* Ambient glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: -50,
            left: "50%",
            transform: "translateX(-50%)",
            width: 720,
            height: 240,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(185,154,93,0.15) 0%, transparent 70%)",
            filter: "blur(32px)",
          }}
        />

        {phones.map((phone, i) => {
          const w = Math.round(PHONE_W * phone.scale);
          const h = Math.round(PHONE_H * phone.scale);
          const posStyle: React.CSSProperties =
            phone.left !== undefined
              ? { left: phone.left }
              : { right: phone.right };

          return (
            <motion.div
              key={phone.id}
              animate={{
                y: [phone.yOffset, phone.yOffset - 13, phone.yOffset],
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: phone.floatDuration,
                  ease: "easeInOut",
                  delay: phone.floatDelay,
                },
              }}
              style={{
                position: "absolute",
                bottom: 0,
                ...posStyle,
                width: w,
                height: h,
                transformOrigin: "bottom center",
              }}
            >
              <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.05,
                  delay: 0.5 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="phone-frame"
                style={{
                  width: w,
                  height: h,
                  transform: `rotate(${phone.rotate}deg)`,
                  boxShadow:
                    phone.scale === 1.0
                      ? "0 4px 16px rgba(0,0,0,0.4), 0 32px 90px rgba(0,0,0,0.32), 0 64px 130px rgba(0,0,0,0.18)"
                      : "0 2px 10px rgba(0,0,0,0.32), 0 22px 64px rgba(0,0,0,0.26), 0 44px 110px rgba(0,0,0,0.15)",
                }}
              >
                <TemplateScreen
                  bg={phone.bg}
                  accent={phone.accent}
                  text={phone.text}
                  coupleName={phone.couple}
                  date={phone.date}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* ── PART B: Mobile phone row ── */}
      <div
        className="md:hidden relative flex justify-center items-end"
        style={{ height: 400, marginTop: "3rem" }}
      >
        {/* Glow */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: -20,
            left: "50%",
            transform: "translateX(-50%)",
            width: 360,
            height: 120,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(185,154,93,0.18) 0%, transparent 70%)",
            filter: "blur(24px)",
          }}
        />

        {mobilePhones.map((phone, i) => {
          const sc = mobileScales[i] ?? 0.83;
          const w = Math.round(PHONE_W * sc);
          const h = Math.round(PHONE_H * sc);
          const yOff = mobileYOffsets[i] ?? 0;

          return (
            <motion.div
              key={phone.id}
              animate={{ y: [yOff, yOff - 10, yOff] }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: phone.floatDuration,
                  ease: "easeInOut",
                  delay: i * 0.28,
                },
              }}
              style={{
                position: "relative",
                zIndex: i === 1 ? 2 : 1,
              }}
            >
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.88,
                  delay: 0.48 + i * 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="phone-frame"
                style={{
                  width: w,
                  height: h,
                  transform: `rotate(${mobileRotates[i] ?? 0}deg)`,
                  marginLeft: i > 0 ? -18 : 0,
                  boxShadow:
                    i === 1
                      ? "0 4px 14px rgba(0,0,0,0.38), 0 28px 72px rgba(0,0,0,0.3)"
                      : "0 2px 8px rgba(0,0,0,0.28), 0 18px 50px rgba(0,0,0,0.2)",
                }}
              >
                <TemplateScreen
                  bg={phone.bg}
                  accent={phone.accent}
                  text={phone.text}
                  coupleName={phone.couple}
                  date={phone.date}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom fade to surface */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: 140,
          background:
            "linear-gradient(to bottom, transparent 0%, var(--surface) 100%)",
          zIndex: 10,
        }}
      />
    </section>
  );
}
