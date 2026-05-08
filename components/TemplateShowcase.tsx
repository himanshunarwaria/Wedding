"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { templates, categories, type Category } from "@/data/templates";

const TemplatePhoneScreen = ({
  screenBg,
  screenAccent,
  screenText,
  tagline,
}: {
  screenBg: string;
  screenAccent: string;
  screenText: string;
  tagline: string;
}) => (
  <div
    className="absolute inset-0 flex flex-col items-center pt-10 px-3 pb-5"
    style={{ background: screenBg }}
  >
    <div className="absolute top-3 left-3 right-3 flex justify-between" style={{ fontSize: 6, color: screenText, opacity: 0.45 }}>
      <span>9:41</span><span>●●●</span>
    </div>
    <div className="flex items-center gap-1 w-full mb-2">
      <div className="flex-1 h-px" style={{ background: `${screenAccent}25` }} />
      <div className="w-1 h-1 rounded-full" style={{ background: screenAccent, opacity: 0.4 }} />
      <div className="flex-1 h-px" style={{ background: `${screenAccent}25` }} />
    </div>
    <p style={{ fontSize: 6.5, letterSpacing: "0.14em", color: screenAccent, opacity: 0.65, textTransform: "uppercase", marginBottom: 8, fontFamily: "var(--font-sans)" }}>
      {tagline}
    </p>
    <svg viewBox="0 0 28 28" fill="none" style={{ width: 24, height: 24, marginBottom: 8 }}>
      {[0, 60, 120, 180, 240, 300].map((a) => {
        const r = (a * Math.PI) / 180;
        const cx = 14 + 6 * Math.cos(r);
        const cy = 14 + 6 * Math.sin(r);
        return <ellipse key={a} cx={cx} cy={cy} rx="3" ry="1.8" fill={screenAccent} opacity="0.35" transform={`rotate(${a} ${cx} ${cy})`} />;
      })}
      <circle cx="14" cy="14" r="3" fill={screenAccent} opacity="0.45" />
      <circle cx="14" cy="14" r="1.2" fill={screenAccent} opacity="0.7" />
    </svg>
    <div className="text-center mb-2">
      <p style={{ fontFamily: "var(--font-serif)", fontSize: 13, color: screenText, fontWeight: 400, lineHeight: 1.2 }}>Priya</p>
      <p style={{ fontSize: 7, color: screenAccent, opacity: 0.6, margin: "1px 0", letterSpacing: "0.1em" }}>&amp;</p>
      <p style={{ fontFamily: "var(--font-serif)", fontSize: 13, color: screenText, fontWeight: 400, lineHeight: 1.2 }}>Arjun</p>
    </div>
    <div className="flex items-center gap-1 w-full my-1.5">
      <div className="flex-1 h-px" style={{ background: `${screenAccent}18` }} />
      <div className="w-0.5 h-0.5 rounded-full" style={{ background: `${screenAccent}35` }} />
      <div className="flex-1 h-px" style={{ background: `${screenAccent}18` }} />
    </div>
    <p style={{ fontFamily: "var(--font-serif)", fontSize: 8, color: screenText, opacity: 0.55, letterSpacing: "0.08em", marginBottom: 8 }}>
      14 · February · 2026
    </p>
    <div className="flex gap-1 w-full px-1 mb-3">
      {["Mehendi", "Wedding", "Reception"].map((ev) => (
        <div key={ev} className="flex-1 py-0.5 rounded text-center" style={{ background: `${screenAccent}10`, fontSize: 5.5, color: screenAccent, opacity: 0.8 }}>
          {ev}
        </div>
      ))}
    </div>
    <div className="px-3 py-0.5 rounded-full" style={{ background: `${screenAccent}12`, border: `0.5px solid ${screenAccent}25` }}>
      <span style={{ fontSize: 6.5, color: screenAccent, letterSpacing: "0.06em" }}>RSVP →</span>
    </div>
    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full" style={{ background: `${screenText}15` }} />
  </div>
);

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const PHONE_W = 200;
const PHONE_H = Math.round(PHONE_W * 2.05);

export default function TemplateShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

  return (
    <section id="templates" className="section" style={{ background: "var(--bg-2)" }}>
      <div className="section-inner">

        {/* Header */}
        <div className="section-header">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            Templates
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--fg)",
              marginBottom: "1.25rem",
            }}
          >
            Handcrafted for every wedding
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{ fontSize: "1.0625rem", color: "var(--fg-muted)" }}
          >
            Six distinct designs — each crafted for a specific wedding tradition, aesthetic, and mood.
          </motion.p>
        </div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                padding: "0.4375rem 1rem",
                borderRadius: "100px",
                background: activeCategory === cat ? "var(--fg)" : "white",
                color: activeCategory === cat ? "white" : "var(--fg-muted)",
                border: `1.5px solid ${activeCategory === cat ? "var(--fg)" : "var(--border)"}`,
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: activeCategory === cat ? "0 2px 10px rgba(45,41,38,0.2)" : "none",
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filtered.map((template) => (
              <motion.div
                key={template.id}
                variants={itemVariants}
                className="group flex flex-col items-center"
              >
                {/* Phone */}
                <div
                  className="relative mb-6 transition-transform duration-300 group-hover:-translate-y-2"
                  style={{ filter: "drop-shadow(0 20px 40px rgba(45,41,38,0.14))" }}
                >
                  <div className="phone-frame" style={{ width: PHONE_W, height: PHONE_H }}>
                    <TemplatePhoneScreen
                      screenBg={template.screenBg}
                      screenAccent={template.screenAccent}
                      screenText={template.screenText}
                      tagline={template.tagline}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center w-full max-w-[220px]">
                  <div
                    className="inline-block mb-3 rounded-full"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      padding: "0.25rem 0.75rem",
                      background: "var(--gold-pale)",
                      color: "var(--gold-hover)",
                    }}
                  >
                    {template.badge}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "var(--fg)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {template.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8125rem",
                      color: "var(--fg-light)",
                      marginBottom: "1rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {template.tagline}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 600, color: "var(--fg)" }}>
                      {template.price}
                    </span>
                    <button className="btn-primary" style={{ fontSize: "0.8125rem", padding: "0.5rem 1.125rem" }}>
                      Preview <ArrowRight size={13} />
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
