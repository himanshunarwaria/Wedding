"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      className="flex-shrink-0"
      style={{
        width: 318,
        background: "white",
        borderRadius: 18,
        overflow: "hidden",
        border: "1px solid var(--border-gold)",
        boxShadow: "0 2px 12px rgba(110,31,50,0.07), 0 8px 32px rgba(110,31,50,0.05)",
      }}
    >
      {/* Screenshot-style app header */}
      <div
        style={{
          background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
          padding: "0.75rem 1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.625rem",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.15)",
            border: "1.5px solid rgba(199,161,90,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--gold)",
            }}
          >
            {t.initials}
          </span>
        </div>

        {/* Name + role */}
        <div className="flex-1 min-w-0">
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.9375rem",
              fontWeight: 600,
              color: "white",
              lineHeight: 1.2,
            }}
          >
            {t.name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.6875rem",
              color: "rgba(255,255,255,0.62)",
              lineHeight: 1,
              marginTop: 2,
            }}
          >
            {t.role}
          </p>
        </div>

        {/* Stars */}
        <div className="flex gap-0.5 flex-shrink-0">
          {Array.from({ length: t.stars }).map((_, i) => (
            <span key={i} style={{ color: "var(--gold)", fontSize: "0.6875rem" }}>
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Quote body */}
      <div
        style={{
          padding: "1.125rem 1.25rem 1rem",
          background: "white",
        }}
      >
        {/* Large decorative quote */}
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "3rem",
            lineHeight: 0.6,
            color: "var(--gold-soft)",
            marginBottom: "0.5rem",
            userSelect: "none",
          }}
          aria-hidden
        >
          "
        </div>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontStyle: "italic",
            fontSize: "0.9rem",
            color: "var(--text-main)",
            lineHeight: 1.68,
            marginBottom: "1rem",
          }}
        >
          {t.quote}
        </p>

        {/* Template badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            background: "var(--gold-faint)",
            border: "1px solid var(--border-gold)",
            borderRadius: 100,
            padding: "0.2rem 0.75rem",
            fontFamily: "var(--font-sans)",
            fontSize: "0.6875rem",
            fontWeight: 600,
            color: "#8B5E1A",
            letterSpacing: "0.04em",
          }}
        >
          ✦ {t.templateUsed}
        </div>
      </div>
    </div>
  );
}

const doubled = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section grain overflow-hidden"
      style={{ background: "var(--surface-warm)" }}
    >
      {/* Header */}
      <div className="section-inner mb-14">
        <div className="section-header" style={{ marginBottom: 0 }}>
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--primary)",
              marginBottom: "0.875rem",
            }}
          >
            Couples love sharing one beautiful link.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.0625rem",
              color: "var(--text-muted)",
            }}
          >
            Real couples. Real invites. One unforgettable link.
          </motion.p>
        </div>
      </div>

      {/* Marquee row 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="marquee-wrapper pb-5"
      >
        <div className="marquee-track" style={{ gap: "1.25rem" }}>
          {doubled.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </motion.div>

      {/* Marquee row 2 — reverse */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.12 }}
        className="marquee-wrapper pt-5"
        style={{ "--marquee-duration": "24s" } as React.CSSProperties}
      >
        <div className="marquee-track-rev" style={{ gap: "1.25rem" }}>
          {[...doubled].reverse().map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
