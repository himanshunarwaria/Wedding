"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { templates, categories, type Category } from "@/data/templates";

/* ── Mini phone screen for template cards ── */
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
      style={{ background: screenBg, paddingTop: "36px" }}
    >
      <div
        className="absolute top-2 left-3 right-3 flex justify-between"
        style={{ fontSize: 6, color: screenText, opacity: 0.45, fontFamily: "var(--font-sans)" }}
      >
        <span>9:41</span>
        <span>●●●</span>
      </div>
      <div className="flex items-center gap-1 w-full mb-2">
        <div className="flex-1 h-px" style={{ background: `${screenAccent}25` }} />
        <div className="w-1 h-1 rounded-full" style={{ background: screenAccent, opacity: 0.4 }} />
        <div className="flex-1 h-px" style={{ background: `${screenAccent}25` }} />
      </div>
      <p
        style={{
          fontSize: 6.5,
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
      <svg viewBox="0 0 28 28" fill="none" style={{ width: 24, height: 24, marginBottom: 8 }}>
        {[0, 60, 120, 180, 240, 300].map((a) => {
          const r = (a * Math.PI) / 180;
          const cx = 14 + 6 * Math.cos(r);
          const cy = 14 + 6 * Math.sin(r);
          return (
            <ellipse
              key={a}
              cx={cx}
              cy={cy}
              rx="3"
              ry="1.8"
              fill={screenAccent}
              opacity="0.35"
              transform={`rotate(${a} ${cx} ${cy})`}
            />
          );
        })}
        <circle cx="14" cy="14" r="3" fill={screenAccent} opacity="0.45" />
        <circle cx="14" cy="14" r="1.2" fill={screenAccent} opacity="0.7" />
      </svg>
      <div className="text-center mb-2">
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 14, color: screenText, fontWeight: 400, lineHeight: 1.2 }}>Priya</p>
        <p style={{ fontSize: 7, color: screenAccent, opacity: 0.6, margin: "1px 0", letterSpacing: "0.1em", fontFamily: "var(--font-sans)" }}>&amp;</p>
        <p style={{ fontFamily: "var(--font-serif)", fontSize: 14, color: screenText, fontWeight: 400, lineHeight: 1.2 }}>Arjun</p>
      </div>
      <div className="flex items-center gap-1 w-full my-1.5">
        <div className="flex-1 h-px" style={{ background: `${screenAccent}18` }} />
        <div className="w-0.5 h-0.5 rounded-full" style={{ background: `${screenAccent}35` }} />
        <div className="flex-1 h-px" style={{ background: `${screenAccent}18` }} />
      </div>
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 8.5,
          color: screenText,
          opacity: 0.55,
          letterSpacing: "0.08em",
          marginBottom: 10,
          fontStyle: "italic",
        }}
      >
        14 · February · 2026
      </p>
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
            }}
          >
            {ev}
          </div>
        ))}
      </div>
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
      <div
        className="absolute bottom-2.5 left-1/2 -translate-x-1/2"
        style={{ width: 24, height: 2, borderRadius: 2, background: `${screenText}15` }}
      />
    </div>
  );
}

const PHONE_W = 256;
const PHONE_H = Math.round(PHONE_W * 2.08); // ~533

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function TemplateShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <section id="templates" className="section" style={{ background: "var(--surface)" }}>
      <div className="section-inner">

        {/* Header */}
        <div className="section-header">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            New Releases
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
            Designed for your big day.
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
            Easy to edit. Effortless to share.
          </motion.p>
        </div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                padding: "0.4375rem 1.125rem",
                borderRadius: 100,
                background: activeCategory === cat ? "var(--primary)" : "white",
                color: activeCategory === cat ? "white" : "var(--text-muted)",
                border: `1.5px solid ${activeCategory === cat ? "var(--primary)" : "var(--border)"}`,
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: activeCategory === cat ? "0 2px 12px rgba(110,31,50,0.25)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Template grid */}
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
                className="group template-card-hover flex flex-col"
                style={{
                  background: "white",
                  border: "1px solid var(--border-gold)",
                  borderRadius: 20,
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 2px 12px rgba(110,31,50,0.05), 0 8px 32px rgba(110,31,50,0.04)",
                }}
              >
                {/* Phone preview area */}
                <div
                  className="grain-card flex items-center justify-center py-16"
                  style={{
                    background: "linear-gradient(160deg, var(--surface-warm) 0%, var(--gold-faint) 100%)",
                    borderBottom: "1px solid var(--border-gold)",
                  }}
                >
                  <div
                    className="phone-frame transition-shadow duration-300"
                    style={{
                      width: PHONE_W,
                      height: PHONE_H,
                      boxShadow:
                        "0 4px 14px rgba(0,0,0,0.32), 0 24px 64px rgba(0,0,0,0.28), 0 48px 100px rgba(0,0,0,0.14)",
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

                {/* Card info */}
                <div style={{ padding: "1.625rem 1.5rem 1.5rem" }}>
                  {/* Category badge */}
                  <div
                    className="inline-block mb-3"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      padding: "0.25rem 0.75rem",
                      borderRadius: 100,
                      background: "var(--gold-soft)",
                      color: "#8B5E1A",
                    }}
                  >
                    {template.badge}
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.375rem",
                      fontWeight: 500,
                      color: "var(--primary)",
                      marginBottom: "0.375rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {template.name}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "var(--text-muted)",
                      marginBottom: "1.25rem",
                      lineHeight: 1.55,
                    }}
                  >
                    {template.tagline}
                  </p>

                  {/* Price row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-baseline gap-2">
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "1.125rem",
                          fontWeight: 700,
                          color: "var(--text-main)",
                        }}
                      >
                        {template.price}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.75rem",
                          color: "var(--gold)",
                          fontWeight: 500,
                        }}
                      >
                        one-time
                      </span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button
                      className="btn-outline flex-1 justify-center"
                      style={{ fontSize: "0.8125rem", padding: "0.5rem 1rem" }}
                    >
                      Preview
                    </button>
                    <button
                      className="btn-primary flex-1 justify-center"
                      style={{ fontSize: "0.8125rem", padding: "0.5rem 1rem" }}
                    >
                      Buy Template
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
