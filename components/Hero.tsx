"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

/* ── Mini phone screen rendered inside each hero phone ── */
const TemplateScreen = ({
  bg,
  accent,
  text,
  coupleName,
  date,
}: {
  bg: string;
  accent: string;
  text: string;
  coupleName: string;
  date: string;
}) => (
  <div
    className="absolute inset-0 flex flex-col items-center pt-10 px-4 pb-6"
    style={{ background: bg }}
  >
    {/* Status bar */}
    <div className="absolute top-3 left-4 right-4 flex justify-between items-center" style={{ fontSize: 7, color: text, opacity: 0.5 }}>
      <span>9:41</span>
      <div className="flex gap-1">
        <span>●●●</span>
      </div>
    </div>

    {/* Ornament line */}
    <div className="flex items-center gap-1.5 w-full mb-3">
      <div className="flex-1 h-px" style={{ background: `${accent}30` }} />
      <div className="w-1 h-1 rounded-full" style={{ background: accent, opacity: 0.5 }} />
      <div className="flex-1 h-px" style={{ background: `${accent}30` }} />
    </div>

    <p style={{ fontSize: 7, letterSpacing: "0.15em", color: accent, opacity: 0.7, textTransform: "uppercase", marginBottom: 10, fontFamily: "var(--font-sans)" }}>
      Together with their families
    </p>

    {/* Decorative motif */}
    <svg viewBox="0 0 32 32" fill="none" style={{ width: 28, height: 28, marginBottom: 8 }}>
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 16 + 8 * Math.cos(rad);
        const cy = 16 + 8 * Math.sin(rad);
        return <ellipse key={angle} cx={cx} cy={cy} rx="3.5" ry="2" fill={accent} opacity="0.35" transform={`rotate(${angle} ${cx} ${cy})`} />;
      })}
      <circle cx="16" cy="16" r="3.5" fill={accent} opacity="0.45" />
      <circle cx="16" cy="16" r="1.5" fill={accent} opacity="0.7" />
    </svg>

    {/* Names */}
    <div className="text-center mb-2">
      <p style={{ fontFamily: "var(--font-serif)", fontSize: 15, color: text, fontWeight: 400, lineHeight: 1.2 }}>
        {coupleName.split(" & ")[0]}
      </p>
      <p style={{ fontSize: 8, color: accent, opacity: 0.7, margin: "2px 0", letterSpacing: "0.12em" }}>&amp;</p>
      <p style={{ fontFamily: "var(--font-serif)", fontSize: 15, color: text, fontWeight: 400, lineHeight: 1.2 }}>
        {coupleName.split(" & ")[1]}
      </p>
    </div>

    <div className="flex items-center gap-1.5 w-full my-2">
      <div className="flex-1 h-px" style={{ background: `${accent}20` }} />
      <div className="w-0.5 h-0.5 rounded-full" style={{ background: `${accent}40` }} />
      <div className="flex-1 h-px" style={{ background: `${accent}20` }} />
    </div>

    <p style={{ fontFamily: "var(--font-serif)", fontSize: 9, color: text, opacity: 0.65, letterSpacing: "0.1em", marginBottom: 4 }}>
      {date}
    </p>

    <div className="flex gap-1.5 mt-3 w-full">
      {["Mehendi", "Wedding", "Reception"].map((ev) => (
        <div key={ev} className="flex-1 py-1 rounded-md text-center" style={{ background: `${accent}12`, fontSize: 6, color: accent, opacity: 0.85 }}>
          {ev}
        </div>
      ))}
    </div>

    <div className="mt-auto px-3 py-1 rounded-full" style={{ background: `${accent}15`, border: `0.5px solid ${accent}30` }}>
      <span style={{ fontSize: 7, color: accent, letterSpacing: "0.08em" }}>RSVP →</span>
    </div>

    {/* Home bar */}
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full" style={{ background: `${text}20` }} />
  </div>
);

const heroPhones = [
  { id: "aaranya", bg: "linear-gradient(160deg,#F5E6D0,#E8C9A0)", accent: "#8B3A0F", text: "#3D1A08", couple: "Priya & Arjun",  date: "14 · February · 2026" },
  { id: "noor",    bg: "linear-gradient(160deg,#1E2A5E,#0F1A42)", accent: "#C9A45C", text: "#EAD5A5", couple: "Noor & Imran",   date: "8 · March · 2026"    },
  { id: "meher",   bg: "linear-gradient(160deg,#F9EEF2,#EDCDD8)", accent: "#9C2B4B", text: "#4A1528", couple: "Grace & Kevin",  date: "22 · April · 2026"   },
  { id: "saajan",  bg: "linear-gradient(160deg,#FEF0DC,#F5C878)", accent: "#7B3800", text: "#3D1C00", couple: "Harpreet & Pavan", date: "5 · May · 2026"    },
  { id: "amara",   bg: "linear-gradient(160deg,#FDF0C5,#F5D76E)", accent: "#B5350D", text: "#5C1A08", couple: "Deepika & Manish", date: "20 · Jan · 2026"  },
];

const doubled = [...heroPhones, ...heroPhones];

const PHONE_W = 150;
const PHONE_H = Math.round(PHONE_W * 2.05); // 308

export default function Hero() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-[66px] pb-10 lg:min-h-[100svh] lg:flex lg:items-center grain"
      style={{
        background: "radial-gradient(ellipse 120% 90% at 70% 60%, #F2E8DE 0%, #F8F1EA 40%, #FDF8F4 75%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #EAD9B8 0%, transparent 70%)", opacity: 0.35 }}
      />
      <div
        className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, #F0DDD4 0%, transparent 70%)", opacity: 0.4 }}
      />

      <div className="section-inner relative z-10 pt-10 pb-4 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center lg:min-h-[calc(100svh-66px)]">

          {/* LEFT: Copy */}
          <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-6 h-px" style={{ background: "var(--gold-light)" }} />
              <span className="eyebrow">Wedding websites made simple</span>
              <div className="w-6 h-px" style={{ background: "var(--gold-light)" }} />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
              }}
            >
              Your wedding invite,{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "var(--gold-hover)",
                }}
              >
                as beautiful
              </em>
              <br className="hidden md:block" /> as your love story.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="max-w-[460px]"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.0625rem",
                color: "var(--fg-muted)",
                lineHeight: 1.7,
              }}
            >
              Choose from handcrafted templates designed for Indian weddings.
              Personalize in minutes, share everywhere — no printing, no reprints.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <button
                onClick={() => handleScroll("#templates")}
                className="btn-primary"
                style={{ fontSize: "0.9375rem", padding: "0.875rem 2rem" }}
              >
                Explore Templates <ArrowRight size={15} />
              </button>
              <button
                onClick={() => handleScroll("#how-it-works")}
                className="btn-outline"
                style={{ fontSize: "0.9375rem", padding: "0.875rem 2rem" }}
              >
                How it works
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.72 }}
              className="flex flex-wrap items-center gap-5 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[0,1,2,3,4].map((i) => (
                    <Star key={i} size={11} style={{ color: "var(--gold)", fill: "var(--gold)" }} />
                  ))}
                </div>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--fg-muted)" }}>
                  500+ couples
                </span>
              </div>
              {["6 premium templates", "No coding needed"].map((t) => (
                <span key={t} className="flex items-center gap-1.5" style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--fg-muted)" }}>
                  <span style={{ color: "var(--gold)", fontSize: 10 }}>✦</span>
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Phone marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex flex-col gap-4 overflow-hidden h-[320px] lg:h-[660px]"
          >
            {/* Top marquee row */}
            <div className="marquee-wrapper">
              <div className="marquee-track" style={{ gap: "1.25rem" }}>
                {doubled.map((p, i) => (
                  <div
                    key={`top-${i}`}
                    className="phone-frame"
                    style={{ width: PHONE_W, height: PHONE_H, flexShrink: 0 }}
                  >
                    <TemplateScreen
                      bg={p.bg}
                      accent={p.accent}
                      text={p.text}
                      coupleName={p.couple}
                      date={p.date}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom marquee row (reverse) — hidden on mobile */}
            <div className="marquee-wrapper hidden lg:block">
              <div className="marquee-track-rev" style={{ gap: "1.25rem" }}>
                {[...doubled].reverse().map((p, i) => (
                  <div
                    key={`bot-${i}`}
                    className="phone-frame"
                    style={{ width: PHONE_W, height: PHONE_H, flexShrink: 0 }}
                  >
                    <TemplateScreen
                      bg={p.bg}
                      accent={p.accent}
                      text={p.text}
                      coupleName={p.couple}
                      date={p.date}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Overlay fades for top/bottom */}
            <div
              className="absolute inset-x-0 top-0 h-20 pointer-events-none"
              style={{ background: "linear-gradient(to bottom, #F2E8DE, transparent)" }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
              style={{ background: "linear-gradient(to top, #F2E8DE, transparent)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
