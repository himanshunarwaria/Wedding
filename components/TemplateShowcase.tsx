"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ShoppingBag, ArrowRight } from "lucide-react";
import { templates, categories, type Category } from "@/data/templates";
import InvitationPreview from "./InvitationPreview";
import { OrnamentDivider } from "./Ornament";

/* ── Category badge colors ── */
const badgeColors: Record<string, string> = {
  "Hindu Wedding":     "bg-amber-50  text-amber-800  border border-amber-200",
  "Christian Wedding": "bg-pink-50   text-pink-800   border border-pink-200",
  "Sikh Wedding":      "bg-orange-50 text-orange-800 border border-orange-200",
  "Muslim Wedding":    "bg-indigo-50 text-indigo-800 border border-indigo-200",
  "South Indian":      "bg-yellow-50 text-yellow-800 border border-yellow-200",
  "Save the Date":     "bg-emerald-50 text-emerald-800 border border-emerald-200",
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show:  { opacity: 1, y: 0, scale: 1, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
};

export default function TemplateShowcase() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? templates : templates.filter((t) => t.category === active);

  return (
    <section
      id="templates"
      className="section relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 120% 80% at 50% 50%, #F8F0E5 0%, #F3E7D8 55%, #EFE0CA 100%)",
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
            Template Collection
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-text-main mb-5"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}
          >
            Designed for every wedding style
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-text-muted mb-6"
            style={{ fontSize: "1.0625rem" }}
          >
            Pick a look, personalise the details, and share your invite instantly.
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

        {/* ── Filter pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`filter-pill ${active === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Template grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7"
          >
            {filtered.map((template) => (
              <motion.article
                key={template.id}
                variants={cardVariants}
                className="group overflow-hidden rounded-3xl bg-surface border border-border flex flex-col"
                style={{
                  boxShadow: "0 2px 8px rgba(107,30,45,0.04), 0 6px 24px rgba(107,30,45,0.06)",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease",
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 0 0 1.5px #E8D7B6, 0 12px 40px rgba(107,30,45,0.12), 0 24px 60px rgba(107,30,45,0.06)",
                  borderColor: "#E8D7B6",
                }}
              >
                {/* Preview area */}
                <div className="relative overflow-hidden">
                  <InvitationPreview template={template} />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${
                        badgeColors[template.badge] ?? "bg-white/80 text-gray-700 border border-gray-200"
                      }`}
                    >
                      {template.badge}
                    </span>
                  </div>

                  {/* Hover overlay with Preview button */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="btn-primary text-xs px-5 py-2.5 backdrop-blur-sm">
                      <Eye size={13} /> Preview invite
                    </button>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  {/* Name row */}
                  <div className="flex items-baseline justify-between gap-3">
                    <h3
                      className="font-display text-text-main"
                      style={{ fontSize: "1.375rem", lineHeight: 1.2 }}
                    >
                      {template.name}
                    </h3>
                    <div className="text-right shrink-0">
                      <span
                        className="font-sans font-bold text-primary"
                        style={{ fontSize: "1rem" }}
                      >
                        {template.price}
                      </span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="eyebrow" style={{ fontSize: "0.6rem", color: "var(--accent)" }}>
                    {template.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-text-muted text-sm leading-relaxed flex-1">
                    {template.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px" style={{ background: "var(--border)" }} />

                  {/* Action buttons */}
                  <div className="flex gap-2.5">
                    <button className="btn-outline flex-1 justify-center text-xs"
                            style={{ padding: "0.6rem 0.75rem" }}>
                      <Eye size={12} /> Preview
                    </button>
                    <button className="btn-primary flex-1 justify-center text-xs"
                            style={{ padding: "0.6rem 0.75rem" }}>
                      <ShoppingBag size={12} /> Buy Now
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 flex flex-col items-center gap-4"
        >
          <p className="text-text-muted text-sm">
            New designs drop regularly — be first to know.
          </p>
          <button
            onClick={() => document.querySelector("#newsletter")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline inline-flex items-center gap-2"
          >
            Join the waitlist <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
