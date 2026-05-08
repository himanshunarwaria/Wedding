"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { OrnamentDivider } from "./Ornament";

/* ── Large decorative quotation mark ── */
const QuoteMark = ({ color }: { color?: string }) => (
  <svg viewBox="0 0 28 20" fill="none" className="w-7 h-5 flex-shrink-0">
    <path
      d="M0 20 Q0 10 4 5 Q8 0 12 0 L12 4 Q8 4 7 7 Q6 9 6 12 L10 12 L10 20 Z"
      fill={color ?? "#C9A45C"}
      opacity="0.35"
    />
    <path
      d="M16 20 Q16 10 20 5 Q24 0 28 0 L28 4 Q24 4 23 7 Q22 9 22 12 L26 12 L26 20 Z"
      fill={color ?? "#C9A45C"}
      opacity="0.35"
    />
  </svg>
);

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section grain"
      style={{
        background: "linear-gradient(160deg, #FBF6EF 0%, #F3E7D8 55%, #EFE0CA 100%)",
      }}
    >
      <div className="section-inner">

        {/* ── Header ── */}
        <div className="section-header">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            Love Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-text-main mb-5"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}
          >
            Couples love sharing one beautiful link
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-text-muted mb-6"
            style={{ fontSize: "1.0625rem" }}
          >
            Real words from couples who chose a wedding website over everything else.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26 }}
          >
            <OrnamentDivider className="max-w-xs mx-auto" />
          </motion.div>
        </div>

        {/* ── Testimonial grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              className="relative flex flex-col gap-4 p-7 bg-surface rounded-2xl border border-border"
              style={{
                boxShadow: "0 2px 8px rgba(107,30,45,0.04), 0 6px 24px rgba(107,30,45,0.05)",
              }}
              whileHover={{
                y: -2,
                borderColor: "var(--accent-soft)",
                boxShadow: "0 0 0 1px var(--accent-soft), 0 8px 32px rgba(107,30,45,0.08)",
                transition: { duration: 0.25 },
              }}
            >
              {/* Gold top border accent */}
              <div
                className="absolute top-0 left-6 right-6 h-px rounded-full"
                style={{ background: "linear-gradient(to right, transparent, var(--accent-soft), transparent)" }}
              />

              {/* Quote mark + stars */}
              <div className="flex items-center justify-between">
                <QuoteMark />
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={11} className="text-accent fill-accent" />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <p className="text-text-muted leading-relaxed flex-1" style={{ fontSize: "0.875rem" }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Footer */}
              <div
                className="flex items-center justify-between pt-4"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-primary ${t.avatarBg}`}
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-text-main" style={{ fontSize: "0.875rem", lineHeight: 1.3 }}>
                      {t.name}
                    </p>
                    <p className="text-text-muted" style={{ fontSize: "0.6875rem" }}>
                      {t.role}
                    </p>
                  </div>
                </div>
                <span
                  className="text-[10px] font-medium px-2.5 py-1 rounded-full"
                  style={{ background: "var(--accent-soft)", color: "var(--primary)" }}
                >
                  {t.templateUsed}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "200+",   label: "Weddings celebrated" },
            { value: "5.0 ★",  label: "Average rating" },
            { value: "6",      label: "Premium templates" },
            { value: "< 1 hr", label: "Average setup time" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center py-5 px-4 rounded-2xl bg-surface border border-border"
            >
              <p
                className="font-display text-primary mb-1"
                style={{ fontSize: "2rem", lineHeight: 1 }}
              >
                {stat.value}
              </p>
              <p className="text-text-muted" style={{ fontSize: "0.75rem" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
