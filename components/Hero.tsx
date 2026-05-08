"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { RingMandala, CornerFloral, OrnamentDivider } from "./Ornament";

/* ─── Animated gold sparkle dot ─────────────────────────────── */
const GoldDot = ({
  style,
  delay = 0,
}: {
  style: React.CSSProperties;
  delay?: number;
}) => (
  <motion.span
    className="absolute rounded-full pointer-events-none"
    style={{ width: 5, height: 5, background: "#C9A45C", ...style }}
    animate={{ opacity: [0.15, 0.7, 0.15], scale: [0.7, 1.25, 0.7] }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

/* ─── Phone screen invitation content ───────────────────────── */
const PhoneScreen = ({
  bg,
  accentColor,
  names,
  motifColor = "rgba(255,255,255,0.6)",
}: {
  bg: string;
  accentColor: string;
  names: string;
  motifColor?: string;
}) => (
  <div
    className="phone-screen flex flex-col items-center px-5 pt-12 pb-7 gap-0"
    style={{ background: bg }}
  >
    {/* Top ornament */}
    <div className="flex items-center gap-2 w-full mb-3">
      <div className="flex-1 h-px" style={{ background: `${motifColor}40` }} />
      <svg viewBox="0 0 10 10" fill="none" className="w-2 h-2 flex-shrink-0">
        <rect x="5" y="0" width="6" height="6" rx="0.3" fill={motifColor} opacity="0.6" transform="rotate(45 5 5)" />
      </svg>
      <div className="flex-1 h-px" style={{ background: `${motifColor}40` }} />
    </div>

    <p
      className="font-serif text-center leading-snug"
      style={{ fontSize: "8px", color: `${motifColor}`, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 400 }}
    >
      Together with their families
    </p>

    {/* Lotus motif */}
    <div className="my-3">
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        {/* Petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const px = 20 + 10 * Math.cos(rad);
          const py = 20 + 10 * Math.sin(rad);
          return (
            <ellipse
              key={i}
              cx={px}
              cy={py}
              rx="4.5"
              ry="2.5"
              fill={motifColor}
              opacity={i % 2 === 0 ? "0.5" : "0.3"}
              transform={`rotate(${angle} ${px} ${py})`}
            />
          );
        })}
        <circle cx="20" cy="20" r="4.5" fill={motifColor} opacity="0.55" />
        <circle cx="20" cy="20" r="2" fill={motifColor} opacity="0.8" />
      </svg>
    </div>

    {/* Names */}
    <div className="text-center">
      <p
        className="font-serif"
        style={{ fontSize: "18px", color: motifColor, fontWeight: 400, lineHeight: 1.15, letterSpacing: "0.02em" }}
      >
        {names.split(" & ")[0]}
      </p>
      <p style={{ fontSize: "9px", color: `${motifColor}80`, letterSpacing: "0.18em", margin: "2px 0" }}>&amp;</p>
      <p
        className="font-serif"
        style={{ fontSize: "18px", color: motifColor, fontWeight: 400, lineHeight: 1.15 }}
      >
        {names.split(" & ")[1]}
      </p>
    </div>

    {/* Divider */}
    <div className="flex items-center gap-2 w-full my-3">
      <div className="flex-1 h-px" style={{ background: `${motifColor}30` }} />
      <div className="w-1 h-1 rounded-full" style={{ background: `${motifColor}50` }} />
      <div className="flex-1 h-px" style={{ background: `${motifColor}30` }} />
    </div>

    {/* Date */}
    <p
      className="font-serif text-center"
      style={{ fontSize: "11px", color: motifColor, opacity: 0.75, letterSpacing: "0.12em" }}
    >
      14 · February · 2025
    </p>
    <p
      className="text-center mt-0.5"
      style={{ fontSize: "8px", color: `${motifColor}`, opacity: 0.5, letterSpacing: "0.06em" }}
    >
      The Grand Palace, Jaipur
    </p>

    {/* Events */}
    <div className="mt-3 w-full space-y-1">
      {["Mehendi  ·  14 Feb", "Sangeet   ·  15 Feb", "Wedding  ·  16 Feb"].map((ev) => (
        <div key={ev} className="flex items-center gap-1.5 justify-center">
          <div className="w-0.5 h-0.5 rounded-full" style={{ background: `${motifColor}60` }} />
          <span style={{ fontSize: "8px", color: `${motifColor}`, opacity: 0.6 }}>{ev}</span>
        </div>
      ))}
    </div>

    {/* RSVP pill */}
    <div
      className="mt-4 px-4 py-1.5 rounded-full"
      style={{ background: `${motifColor}15`, border: `0.5px solid ${motifColor}35` }}
    >
      <span style={{ fontSize: "8px", color: motifColor, opacity: 0.9, letterSpacing: "0.1em" }}>
        RSVP &nbsp;→
      </span>
    </div>

    {/* Home bar */}
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
      <div className="w-10 h-0.5 rounded-full" style={{ background: `${motifColor}30` }} />
    </div>
  </div>
);

/* ─── Phone mockup wrapper ───────────────────────────────────── */
const PhoneMockup = ({
  bg,
  accentColor,
  names,
  motifColor,
  rotate = 0,
  scale = 1,
  delay = 0,
  floatAmplitude = 12,
  floatDuration = 6,
}: {
  bg: string;
  accentColor: string;
  names: string;
  motifColor?: string;
  rotate?: number;
  scale?: number;
  delay?: number;
  floatAmplitude?: number;
  floatDuration?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 36, scale: 0.92 }}
    animate={{ opacity: 1, y: 0, scale }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    <motion.div
      animate={{ y: [0, -floatAmplitude, 0] }}
      transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay }}
      className="phone-frame"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <PhoneScreen bg={bg} accentColor={accentColor} names={names} motifColor={motifColor} />
    </motion.div>
  </motion.div>
);

/* ─── Floating info badge ────────────────────────────────────── */
const FloatingBadge = ({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 12, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`absolute z-20 bg-surface/92 backdrop-blur-sm rounded-2xl px-3.5 py-2.5 border border-border ${className}`}
    style={{ boxShadow: "0 4px 20px rgba(107,30,45,0.08), 0 1px 4px rgba(0,0,0,0.06)" }}
  >
    {children}
  </motion.div>
);

/* ─── Main Hero component ────────────────────────────────────── */
export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 grain"
      style={{
        background:
          "radial-gradient(ellipse 90% 80% at 68% 48%, #F0E4D2 0%, #F7EFE4 35%, #FBF6EF 70%)",
      }}
    >
      {/* ── Background decoration ── */}
      <div className="blob w-[640px] h-[640px] -top-40 -left-40 opacity-30"
           style={{ background: "radial-gradient(circle, #ECD9C0 0%, transparent 70%)" }} />
      <div className="blob w-[400px] h-[400px] bottom-0 right-0 opacity-25"
           style={{ background: "radial-gradient(circle, #E8D7B6 0%, transparent 70%)" }} />

      {/* Large ring mandala — right background */}
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
        <RingMandala size={440} opacity={0.09} />
      </div>

      {/* Corner florals */}
      <div className="absolute top-20 left-5 hidden lg:block pointer-events-none">
        <CornerFloral size={72} opacity={0.18} />
      </div>
      <div className="absolute bottom-20 right-8 hidden lg:block pointer-events-none"
           style={{ transform: "scaleX(-1) scaleY(-1)" }}>
        <CornerFloral size={60} opacity={0.14} />
      </div>

      {/* Gold sparkle dots */}
      <GoldDot style={{ top: "18%", left: "7%" }} delay={0} />
      <GoldDot style={{ top: "72%", left: "4%" }} delay={1.2} />
      <GoldDot style={{ top: "12%", right: "12%" }} delay={0.6} />
      <GoldDot style={{ bottom: "22%", right: "6%" }} delay={1.8} />

      {/* ── Main layout ── */}
      <div className="section-inner relative z-10 py-16 lg:py-0">
        <div className="grid lg:grid-cols-[1fr_1fr] xl:grid-cols-[55%_45%] gap-10 lg:gap-4 items-center">

          {/* ── LEFT: Copy ── */}
          <div className="flex flex-col items-center lg:items-start gap-7 text-center lg:text-left">

            {/* Eyebrow with flanking lines */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-7 h-px" style={{ background: "#C9A45C80" }} />
              <span className="eyebrow">Wedding websites made simple</span>
              <div className="w-7 h-px" style={{ background: "#C9A45C80" }} />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-text-main"
              style={{
                fontSize: "clamp(2.6rem, 5.2vw, 5.25rem)",
                lineHeight: 1.07,
                letterSpacing: "-0.02em",
              }}
            >
              Create a{" "}
              <span
                className="text-primary"
                style={{ fontStyle: "italic", fontWeight: 300 }}
              >
                beautiful
              </span>
              <br className="hidden md:block" />
              wedding invite website
              <br className="hidden lg:block" />
              <span style={{ fontWeight: 300 }}>in minutes.</span>
            </motion.h1>

            {/* Thin ornament line under headline */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="origin-left w-40 lg:w-52"
            >
              <OrnamentDivider />
            </motion.div>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-text-muted leading-relaxed max-w-md"
              style={{ fontSize: "1.0625rem" }}
            >
              Choose a design, add your love story, and share one elegant link
              with every guest — no printing, no reprints, no expiry.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={() => handleScroll("#templates")}
                className="btn-primary"
                style={{ fontSize: "0.9375rem", padding: "0.9rem 2rem" }}
              >
                Explore Templates <ArrowRight size={15} />
              </button>
              <button
                onClick={() => handleScroll("#how-it-works")}
                className="btn-outline"
                style={{ fontSize: "0.9375rem", padding: "0.9rem 2rem" }}
              >
                See How It Works
              </button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex flex-wrap items-center gap-5 justify-center lg:justify-start"
            >
              {[
                { icon: "✦", label: "6 premium templates" },
                { icon: "✦", label: "No coding needed" },
                { icon: "✦", label: "Ready in under an hour" },
              ].map((t) => (
                <span key={t.label} className="flex items-center gap-1.5 text-sm text-text-muted">
                  <span className="text-accent text-[10px]">{t.icon}</span>
                  {t.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Phone cluster ── */}
          <div className="relative flex items-center justify-center h-[540px] lg:h-[620px]">
            {/* Glow pool under phones */}
            <div
              className="blob absolute bottom-6 left-1/2 -translate-x-1/2 w-80 h-20 opacity-50"
              style={{ background: "radial-gradient(ellipse, #E8D7B6 0%, transparent 70%)" }}
            />

            {/* Left phone */}
            <div className="absolute left-0 sm:left-8 lg:left-2 xl:-left-2 top-12 hidden sm:block z-0">
              <PhoneMockup
                bg="linear-gradient(160deg, #4A1220 0%, #6B1E2D 40%, #A8844E 100%)"
                accentColor="#C9A45C"
                names="Meher & Kevin"
                motifColor="rgba(232,215,182,0.9)"
                rotate={-9}
                scale={0.82}
                delay={0.3}
                floatAmplitude={9}
                floatDuration={5.5}
              />
            </div>

            {/* Center phone (main) */}
            <div className="relative z-10">
              <PhoneMockup
                bg="linear-gradient(160deg, #6B1E2D 0%, #8B2439 30%, #B8863E 80%, #C9A45C 100%)"
                accentColor="#C9A45C"
                names="Priya & Arjun"
                motifColor="rgba(255,245,230,0.92)"
                rotate={0}
                scale={1}
                delay={0.5}
                floatAmplitude={13}
                floatDuration={6.5}
              />
            </div>

            {/* Right phone */}
            <div className="absolute right-0 sm:right-8 lg:right-2 xl:-right-2 top-16 hidden sm:block z-0">
              <PhoneMockup
                bg="linear-gradient(160deg, #0F1A42 0%, #1E2A5E 50%, #8B6A28 100%)"
                accentColor="#C9A45C"
                names="Noor & Imran"
                motifColor="rgba(201,164,92,0.9)"
                rotate={9}
                scale={0.82}
                delay={0.7}
                floatAmplitude={8}
                floatDuration={5}
              />
            </div>

            {/* Floating badge — RSVP */}
            <FloatingBadge delay={1.1} className="bottom-20 right-2 sm:right-0 lg:-right-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px]">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-semibold text-text-main leading-none">RSVP received</p>
                  <p className="text-[10px] text-text-muted mt-0.5">Ananya + 2 guests</p>
                </div>
              </div>
            </FloatingBadge>

            {/* Floating badge — Rating */}
            <FloatingBadge delay={1.35} className="top-14 right-2 sm:right-0 lg:-right-5">
              <div className="flex items-center gap-2">
                <span className="text-base leading-none">⭐</span>
                <div>
                  <p className="text-xs font-semibold text-text-main leading-none">5.0 rating</p>
                  <p className="text-[10px] text-text-muted mt-0.5">200+ couples</p>
                </div>
              </div>
            </FloatingBadge>

            {/* Floating badge — Share */}
            <FloatingBadge delay={1.55} className="top-1/2 -translate-y-1/2 left-2 sm:left-0 lg:-left-4">
              <div>
                <p className="text-xs font-semibold text-text-main leading-none">Instant link</p>
                <p className="text-[10px] text-text-muted mt-0.5">No app needed</p>
              </div>
            </FloatingBadge>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => handleScroll("#templates")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted/50 hover:text-text-muted transition-colors z-10"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
