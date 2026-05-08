"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { templates, categories, type Category } from "@/data/templates";

/* ──────────────────────────────────────────────────────────────────
   Mini phone screen for template cards
────────────────────────────────────────────────────────────────── */
function TemplatePhoneScreen({
  screenBg,
  screenAccent,
  screenText,
  tagline,
}: {
  screenBg: string;
  screenAccent: string;
  screenText: string;
  tagline: string;
}) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center px-3 pb-4"
      style={{ background: screenBg, paddingTop: 36 }}
    >
      {/* Status bar */}
      <div
        className="absolute top-2 left-3 right-3 flex justify-between"
        style={{
          fontSize: 6,
          color: screenText,
          opacity: 0.45,
          fontFamily: "var(--font-sans)",
        }}
      >
        <span>9:41</span>
        <span>●●●</span>
      </div>

      {/* Top rule */}
      <div className="flex items-center gap-1 w-full mb-2">
        <div className="flex-1 h-px" style={{ background: `${screenAccent}28` }} />
        <svg viewBox="0 0 8 8" fill="none" style={{ width: 7, height: 7, flexShrink: 0 }}>
          <rect
            x="4" y="0" width="5" height="5" rx="0.3"
            fill={screenAccent} opacity="0.42"
            transform="rotate(45 4 4)"
          />
        </svg>
        <div className="flex-1 h-px" style={{ background: `${screenAccent}28` }} />
      </div>

      {/* Tagline */}
      <p
        style={{
          fontSize: 6,
          letterSpacing: "0.14em",
          color: screenAccent,
          opacity: 0.65,
          textTransform: "uppercase",
          marginBottom: 8,
          fontFamily: "var(--font-sans)",
        }}
      >
        {tagline}
      </p>

      {/* Mandala ornament */}
      <svg
        viewBox="0 0 28 28"
        fill="none"
        style={{ width: 24, height: 24, marginBottom: 8 }}
      >
        {[0, 60, 120, 180, 240, 300].map((a) => {
          const r = (a * Math.PI) / 180;
          const cx = 14 + 6 * Math.cos(r);
          const cy = 14 + 6 * Math.sin(r);
          return (
            <ellipse
              key={a}
              cx={cx}
              cy={cy}
              rx="2.8"
              ry="1.6"
              fill={screenAccent}
              opacity="0.32"
              transform={`rotate(${a} ${cx} ${cy})`}
            />
          );
        })}
        <circle cx="14" cy="14" r="3" fill={screenAccent} opacity="0.42" />
        <circle cx="14" cy="14" r="1.2" fill={screenAccent} opacity="0.68" />
      </svg>

      {/* Names */}
      <div className="text-center mb-2">
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 14,
            color: screenText,
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          Priya
        </p>
        <p
          style={{
            fontSize: 7,
            color: screenAccent,
            opacity: 0.6,
            margin: "1px 0",
            letterSpacing: "0.1em",
            fontFamily: "var(--font-sans)",
          }}
        >
          &amp;
        </p>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 14,
            color: screenText,
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          Arjun
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-1 w-full my-1.5">
        <div className="flex-1 h-px" style={{ background: `${screenAccent}18` }} />
        <div
          className="rounded-full"
          style={{ width: 3, height: 3, background: `${screenAccent}32` }}
        />
        <div className="flex-1 h-px" style={{ background: `${screenAccent}18` }} />
      </div>

      {/* Date */}
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 8,
          color: screenText,
          opacity: 0.55,
          letterSpacing: "0.08em",
          marginBottom: 10,
          fontStyle: "italic",
        }}
      >
        14 · February · 2026
      </p>

      {/* Event pills */}
      <div className="flex gap-1 w-full mb-3">
        {["Mehendi", "Wedding", "Reception"].map((ev) => (
          <div
            key={ev}
            className="flex-1 text-center"
            style={{
              background: `${screenAccent}10`,
              borderRadius: 6,
              padding: "3px 2px",
              fontSize: 5.5,
              color: screenAccent,
              opacity: 0.8,
              fontFamily: "var(--font-sans)",
              letterSpacing: "0.03em",
            }}
          >
            {ev}
          </div>
        ))}
      </div>

      {/* RSVP */}
      <div
        style={{
          background: `${screenAccent}12`,
          border: `0.5px solid ${screenAccent}25`,
          borderRadius: 100,
          padding: "3px 12px",
          fontSize: 6.5,
          color: screenAccent,
          letterSpacing: "0.06em",
          fontFamily: "var(--font-sans)",
        }}
      >
        RSVP →
      </div>

      {/* Home indicator */}
      <div
        className="absolute bottom-2.5 left-1/2 -translate-x-1/2"
        style={{
          width: 24,
          height: 2,
          borderRadius: 2,
          background: `${screenText}15`,
        }}
      />
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────
   Phone dimensions
────────────────────────────────────────────────────────────────── */
const PHONE_W = 270;
const PHONE_H = Math.round(PHONE_W * 2.1); // ~567px

/* ──────────────────────────────────────────────────────────────────
   Animation variants
────────────────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ──────────────────────────────────────────────────────────────────
   Component
────────────────────────────────────────────────────────────────── */
export default function TemplateShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <section
      id="templates"
      className="section grain"
      style={{ background: "var(--surface-warm)" }}
    >
      <div className="section-inner">

        {/* ── Section header ── */}
        <div className="section-header">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            New Releases
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.09, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--primary)",
              marginBottom: "0.875rem",
            }}
          >
            Designed for your big day.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.0625rem",
              color: "var(--text-muted)",
            }}
          >
            Easy to edit. Effortless to share.
          </motion.p>
        </div>

        {/* ── Filter pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.45 }}
          className="flex flex-wrap gap-2 justify-center"
          style={{ marginBottom: "3.5rem" }}
        >
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  padding: "0.4375rem 1.125rem",
                  borderRadius: 100,
                  background: active ? "var(--primary)" : "white",
                  color: active ? "white" : "var(--text-muted)",
                  border: `1.5px solid ${active ? "var(--primary)" : "var(--border)"}`,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: active
                    ? "0 2px 12px rgba(23,17,14,0.22)"
                    : "none",
                }}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* ── Template grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((template) => (
              <motion.div
                key={template.id}
                variants={itemVariants}
                className="template-card-hover flex flex-col"
                style={{
                  background: "white",
                  border: "1px solid var(--border-gold)",
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow:
                    "0 2px 12px rgba(23,17,14,0.05), 0 8px 32px rgba(23,17,14,0.04)",
                }}
              >
                {/* Preview area */}
                <div
                  className="grain-card flex items-center justify-center"
                  style={{
                    background: template.screenBg,
                    borderBottom: "1px solid var(--border-gold)",
                    padding: "3.5rem 1.5rem",
                  }}
                >
                  <div
                    className="phone-frame"
                    style={{
                      width: PHONE_W,
                      height: PHONE_H,
                      boxShadow:
                        "0 4px 16px rgba(0,0,0,0.35), 0 28px 72px rgba(0,0,0,0.28), 0 54px 108px rgba(0,0,0,0.16)",
                      transition: "box-shadow 0.3s ease",
                    }}
                  >
                    <TemplatePhoneScreen
                      screenBg={template.screenBg}
                      screenAccent={template.screenAccent}
                      screenText={template.screenText}
                      tagline={template.tagline}
                    />
                  </div>
                </div>

                {/* Info area */}
                <div style={{ padding: "1.75rem 1.75rem 1.625rem" }}>
                  {/* Category badge */}
                  <div
                    className="inline-block"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      padding: "0.25rem 0.75rem",
                      borderRadius: 100,
                      background: "var(--gold-faint)",
                      border: "1px solid var(--border-gold)",
                      color: "#8B6914",
                      marginBottom: "0.875rem",
                    }}
                  >
                    {template.badge}
                  </div>

                  {/* Template name */}
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.625rem",
                      fontWeight: 700,
                      color: "var(--text-main)",
                      marginBottom: "0.375rem",
                      lineHeight: 1.2,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {template.name}
                  </h3>

                  {/* Tagline */}
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      color: "var(--text-muted)",
                      marginBottom: "1.375rem",
                      lineHeight: 1.55,
                    }}
                  >
                    {template.tagline}
                  </p>

                  {/* Divider */}
                  <div
                    style={{
                      height: 1,
                      background: "var(--border-gold)",
                      opacity: 0.6,
                      marginBottom: "1.25rem",
                    }}
                  />

                  {/* Price row + CTA */}
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "1.1875rem",
                          fontWeight: 700,
                          color: "var(--text-main)",
                          display: "block",
                          lineHeight: 1.2,
                        }}
                      >
                        {template.price}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.75rem",
                          color: "var(--text-light)",
                          fontWeight: 400,
                        }}
                      >
                        ≈ $43 USD
                      </span>
                    </div>

                    <button
                      className="btn-primary"
                      style={{
                        fontSize: "0.875rem",
                        padding: "0.625rem 1.375rem",
                        flexShrink: 0,
                      }}
                    >
                      Buy →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
