"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      className="flex-shrink-0"
      style={{
        width: 308,
        background: "white",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid #E2E2E2",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
      }}
    >
      {/* Card header — dark, screenshot-style */}
      <div
        style={{
          background: "#111111",
          padding: "0.75rem 1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.625rem",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            border: "1.5px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: 700,
              color: "white",
            }}
          >
            {t.initials}
          </span>
        </div>

        {/* Name + role */}
        <div className="flex-1 min-w-0">
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
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
              color: "rgba(255,255,255,0.5)",
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
            <span key={i} style={{ color: "#CCCCCC", fontSize: "0.625rem" }}>
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Quote body */}
      <div style={{ padding: "1.125rem 1.25rem 1rem", background: "white" }}>
        {/* Decorative quote mark */}
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "2.5rem",
            lineHeight: 0.6,
            color: "#E2E2E2",
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
            color: "#333333",
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
            background: "#F5F5F5",
            border: "1px solid #E2E2E2",
            borderRadius: 100,
            padding: "0.2rem 0.75rem",
            fontFamily: "var(--font-sans)",
            fontSize: "0.6875rem",
            fontWeight: 600,
            color: "#666666",
            letterSpacing: "0.03em",
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
      className="section overflow-hidden"
      style={{ background: "#F7F7F7", borderTop: "1px solid #E2E2E2" }}
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
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "#111111",
              marginBottom: "0.875rem",
            }}
          >
            Don&apos;t Take Our Word for It — Here&apos;s What Real Couples Are Saying.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.0625rem",
              color: "#666666",
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
