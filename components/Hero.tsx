"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ── Mini template screen rendered inside each hero phone ── */
interface TemplateScreenProps {
  bg: string;
  accent: string;
  text: string;
  coupleName: string;
  date: string;
}

function TemplateScreen({ bg, accent, text, coupleName, date }: TemplateScreenProps) {
  const [name1, name2] = coupleName.split(" & ");
  return (
    <div
      className="absolute inset-0 flex flex-col items-center px-3 pb-4"
      style={{ background: bg, paddingTop: "36px" }}
    >
      <div
        className="absolute top-2 left-3 right-3 flex justify-between items-center"
        style={{ fontSize: 6.5, color: text, opacity: 0.5, fontFamily: "var(--font-sans)" }}
      >
        <span>9:41</span>
        <span>●●●</span>
      </div>

      <div className="flex items-center w-full gap-1 mb-2">
        <div className="flex-1 h-px" style={{ background: `${accent}30` }} />
        <div className="w-1 h-1 rounded-full" style={{ background: accent, opacity: 0.5 }} />
        <div className="flex-1 h-px" style={{ background: `${accent}30` }} />
      </div>

      <p
        style={{
          fontSize: 6,
          letterSpacing: "0.14em",
          color: accent,
          opacity: 0.7,
          textTransform: "uppercase",
          marginBottom: 8,
          fontFamily: "var(--font-sans)",
        }}
      >
        Together with their families
      </p>

      <svg viewBox="0 0 32 32" fill="none" style={{ width: 26, height: 26, marginBottom: 8 }}>
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 16 + 7 * Math.cos(rad);
          const cy = 16 + 7 * Math.sin(rad);
          return (
            <ellipse
              key={angle}
              cx={cx}
              cy={cy}
              rx="3"
              ry="1.8"
              fill={accent}
              opacity="0.3"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          );
        })}
        <circle cx="16" cy="16" r="3" fill={accent} opacity="0.4" />
        <circle cx="16" cy="16" r="1.2" fill={accent} opacity="0.65" />
      </svg>

      <div className="text-center" style={{ marginBottom: 4 }}>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 14, color: text, fontWeight: 400, lineHeight: 1.2 }}>
          {name1}
        </p>
        <p style={{ fontSize: 7, color: accent, opacity: 0.6, margin: "2px 0", letterSpacing: "0.1em", fontFamily: "var(--font-sans)" }}>
          &amp;
        </p>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 14, color: text, fontWeight: 400, lineHeight: 1.2 }}>
          {name2 || ""}
        </p>
      </div>

      <div className="flex items-center w-full gap-1 my-2">
        <div className="flex-1 h-px" style={{ background: `${accent}18` }} />
        <div className="w-0.5 h-0.5 rounded-full" style={{ background: `${accent}35` }} />
        <div className="flex-1 h-px" style={{ background: `${accent}18` }} />
      </div>

      <p
        style={{
          fontSize: 7.5,
          fontFamily: "var(--font-serif)",
          color: text,
          opacity: 0.6,
          letterSpacing: "0.08em",
          marginBottom: 8,
          fontStyle: "italic",
        }}
      >
        {date}
      </p>

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
              letterSpacing: "0.04em",
            }}
          >
            {ev}
          </div>
        ))}
      </div>

      <div
        style={{
          background: `${accent}15`,
          border: `0.5px solid ${accent}35`,
          borderRadius: 100,
          padding: "3px 12px",
          fontSize: 7,
          color: accent,
          letterSpacing: "0.08em",
          fontFamily: "var(--font-sans)",
        }}
      >
        RSVP →
      </div>

      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2"
        style={{ width: 30, height: 2, borderRadius: 2, background: `${text}20` }}
      />
    </div>
  );
}

/* ── Phone cluster configuration ── */
const PHONE_W = 224;
const PHONE_H = Math.round(PHONE_W * 2.08); // ~466px

const phones = [
  {
    id: "meher",
    bg: "linear-gradient(160deg,#F9EEF2,#EDCDD8)",
    accent: "#9C2B4B",
    text: "#4A1528",
    couple: "Grace & Kevin",
    date: "22 · April · 2026",
    left: "1%",
    rotate: -17,
    scale: 0.73,
    yOffset: 64,
    hideMobile: true,
    floatDuration: 5.5,
    floatDelay: 0,
  },
  {
    id: "aaranya",
    bg: "linear-gradient(160deg,#F5E6D0,#E8C9A0)",
    accent: "#8B3A0F",
    text: "#3D1A08",
    couple: "Priya & Arjun",
    date: "14 · Feb · 2026",
    left: "14%",
    rotate: -8,
    scale: 0.91,
    yOffset: 18,
    hideMobile: false,
    floatDuration: 6.2,
    floatDelay: 0.4,
  },
  {
    id: "noor",
    bg: "linear-gradient(160deg,#1E2A5E,#0F1A42)",
    accent: "#C9A45C",
    text: "#EAD5A5",
    couple: "Aisha & Kabir",
    date: "8 · March · 2026",
    left: "calc(50% - 112px)",
    rotate: 0,
    scale: 1.0,
    yOffset: 0,
    hideMobile: false,
    floatDuration: 7,
    floatDelay: 0.2,
  },
  {
    id: "saajan",
    bg: "linear-gradient(160deg,#FEF0DC,#F5C878)",
    accent: "#7B3800",
    text: "#3D1C00",
    couple: "Harpreet & Pavan",
    date: "5 · May · 2026",
    left: "",
    right: "14%",
    rotate: 9,
    scale: 0.91,
    yOffset: 22,
    hideMobile: false,
    floatDuration: 6.5,
    floatDelay: 0.6,
  },
  {
    id: "amara",
    bg: "linear-gradient(160deg,#FDF0C5,#F5D76E)",
    accent: "#B5350D",
    text: "#5C1A08",
    couple: "Deepika & Manish",
    date: "20 · Jan · 2026",
    left: "",
    right: "1%",
    rotate: 18,
    scale: 0.73,
    yOffset: 68,
    hideMobile: true,
    floatDuration: 7.5,
    floatDelay: 0.8,
  },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden grain"
      style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse 110% 65% at 50% 18%, #F7EAD4 0%, var(--bg) 55%)",
      }}
    >
      {/* Warm blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-140px",
          left: "-120px",
          width: 580,
          height: 580,
          borderRadius: "50%",
          background: "radial-gradient(circle, #EBC7C7 0%, transparent 70%)",
          opacity: 0.3,
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "5%",
          right: "-100px",
          width: 460,
          height: 460,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--champagne) 0%, transparent 70%)",
          opacity: 0.32,
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          left: "35%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--gold-faint) 0%, transparent 70%)",
          opacity: 0.5,
          filter: "blur(50px)",
        }}
      />

      {/* ── Centered editorial text block ── */}
      <div
        className="relative z-10 flex flex-col items-center text-center"
        style={{ paddingTop: "148px", paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
      >
        {/* Ornament line */}
        <motion.div
          className="ornament-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "1rem" }}
        >
          <span style={{ color: "var(--gold)", fontSize: "0.45rem", letterSpacing: "0.3em" }}>✦ ✦ ✦</span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: "1.375rem", color: "var(--gold)", letterSpacing: "0.24em" }}
        >
          Introducing InviteBliss
        </motion.p>

        {/* H1 — editorial scale */}
        <motion.h1
          initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3.5rem, 6.5vw, 7rem)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            color: "var(--primary)",
            maxWidth: 900,
            marginBottom: "1.625rem",
          }}
        >
          Wedding Invites
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 300 }}>Made Beautifully Simple</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.65, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.0625rem",
            color: "var(--text-muted)",
            maxWidth: 440,
            lineHeight: 1.7,
            marginBottom: "2.25rem",
          }}
        >
          One link. Every event. Personalized for your day — and ready to share in under an hour.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-3 justify-center"
          style={{ marginBottom: "2rem" }}
        >
          <button
            onClick={() => handleScroll("#templates")}
            className="btn-primary"
            style={{ fontSize: "0.9375rem", padding: "0.9375rem 2.25rem" }}
          >
            Explore Templates <ArrowRight size={15} />
          </button>
          <button
            onClick={() => handleScroll("#how-it-works")}
            className="btn-outline"
            style={{ fontSize: "0.9375rem", padding: "0.9375rem 2.25rem" }}
          >
            See How It Works
          </button>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center gap-3"
        >
          {[
            "500+ couples",
            "6 premium templates",
            "Ready in 10 minutes",
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              {i > 0 && (
                <span style={{ color: "var(--gold)", fontSize: "0.4rem", opacity: 0.6 }}>✦</span>
              )}
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.02em",
                }}
              >
                {item}
              </span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Phone cloud — desktop ── */}
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
        {/* Ambient glow beneath phones */}
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 220,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(199,161,90,0.18) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {phones.map((phone, i) => {
          const w = Math.round(PHONE_W * phone.scale);
          const h = Math.round(PHONE_H * phone.scale);
          return (
            <motion.div
              key={phone.id}
              animate={{ y: [phone.yOffset, phone.yOffset - 14, phone.yOffset] }}
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
                ...(phone.left ? { left: phone.left } : { right: phone.right }),
                width: w,
                height: h,
                transformOrigin: "bottom center",
              }}
            >
              <motion.div
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.55 + i * 0.13,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="phone-frame"
                style={{
                  width: w,
                  height: h,
                  transform: `rotate(${phone.rotate}deg)`,
                  boxShadow:
                    phone.scale === 1.0
                      ? "0 4px 16px rgba(0,0,0,0.38), 0 32px 90px rgba(0,0,0,0.32), 0 64px 130px rgba(0,0,0,0.18)"
                      : "0 2px 10px rgba(0,0,0,0.32), 0 22px 64px rgba(0,0,0,0.26), 0 44px 110px rgba(0,0,0,0.16)",
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

      {/* ── Phone cloud — mobile: 3-phone row ── */}
      <div
        className="md:hidden relative mt-12 flex justify-center items-end"
        style={{ height: 400, paddingBottom: 0 }}
      >
        {phones.slice(1, 4).map((phone, i) => {
          const mobileScales = [0.83, 0.97, 0.83];
          const mobileRotates = [-9, 0, 9];
          const mobileOffsets = [22, 0, 22];
          const sc = mobileScales[i];
          const w = Math.round(PHONE_W * sc);
          const h = Math.round(PHONE_H * sc);
          return (
            <motion.div
              key={phone.id}
              animate={{ y: [mobileOffsets[i], mobileOffsets[i] - 10, mobileOffsets[i]] }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: phone.floatDuration,
                  ease: "easeInOut",
                  delay: i * 0.3,
                },
              }}
              style={{ position: "relative", zIndex: i === 1 ? 2 : 1 }}
            >
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="phone-frame"
                style={{
                  width: w,
                  height: h,
                  transform: `rotate(${mobileRotates[i]}deg)`,
                  marginLeft: i > 0 ? -22 : 0,
                  boxShadow:
                    i === 1
                      ? "0 4px 14px rgba(0,0,0,0.36), 0 28px 72px rgba(0,0,0,0.28)"
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

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: 140,
          background: "linear-gradient(to bottom, transparent 0%, var(--surface) 100%)",
          zIndex: 10,
        }}
      />
    </section>
  );
}
