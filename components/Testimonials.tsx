"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

/* ── WhatsApp-style chat card ── */
const WaCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div
    className="flex-shrink-0 w-[300px] sm:w-[320px] rounded-2xl overflow-hidden"
    style={{
      background: "#ECE5DD",
      boxShadow: "0 2px 12px rgba(45,41,38,0.1), 0 8px 32px rgba(45,41,38,0.07)",
    }}
  >
    {/* WA Header */}
    <div
      className="flex items-center gap-2.5 px-3.5 py-2.5"
      style={{ background: "#128C7E" }}
    >
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-semibold flex-shrink-0"
        style={{ background: "rgba(255,255,255,0.22)", fontFamily: "var(--font-sans)" }}
      >
        {t.initials}
      </div>
      <div className="min-w-0">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600, color: "white", lineHeight: 1.2 }}>
          {t.name}
        </p>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6875rem", color: "rgba(255,255,255,0.72)", lineHeight: 1 }}>
          online
        </p>
      </div>
    </div>

    {/* Chat body */}
    <div className="px-3.5 py-4">
      <div className="wa-bubble">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "#111b21", lineHeight: 1.55 }}>
          {t.quote}
        </p>
        <div className="flex items-center justify-between mt-2 gap-2">
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.6875rem", color: "#667781" }}>
            {t.templateUsed} template
          </span>
          <span style={{ fontSize: "0.6875rem", color: "#53BDEB" }}>✓✓</span>
        </div>
      </div>
    </div>

    {/* Footer */}
    <div
      className="px-3.5 pb-3"
      style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
    >
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#5C4F47", paddingTop: "0.625rem" }}>
        — {t.name}, <span style={{ color: "#8B7D74" }}>{t.role}</span>
      </p>
    </div>
  </div>
);

const doubled = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section overflow-hidden"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="section-inner mb-12">
        <div className="section-header" style={{ marginBottom: 0 }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            Testimonials
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
            Couples who loved their invite
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{ fontSize: "1.0625rem", color: "var(--fg-muted)" }}
          >
            Real reviews from real couples across India.
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
            <WaCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </motion.div>

      {/* Marquee row 2 (reverse) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.12 }}
        className="marquee-wrapper pt-5"
      >
        <div className="marquee-track-rev" style={{ gap: "1.25rem" }}>
          {[...doubled].reverse().map((t, i) => (
            <WaCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
