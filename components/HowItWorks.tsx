"use client";

import { motion } from "framer-motion";
import { LayoutTemplate, PenLine, SendHorizonal, ArrowRight } from "lucide-react";
import { OrnamentDivider, VerticalGoldLine } from "./Ornament";

const steps = [
  {
    number: "01",
    icon: LayoutTemplate,
    title: "Choose a template",
    detail:
      "Browse handcrafted designs built for Hindu, Sikh, Muslim, Christian, and South Indian weddings. Each one is elegant, mobile-optimised, and ready to personalise.",
  },
  {
    number: "02",
    icon: PenLine,
    title: "Add your details",
    detail:
      "Fill in names, dates, venues, events, and your love story using a simple guided form. Upload photos, add a map link, and preview as you go.",
  },
  {
    number: "03",
    icon: SendHorizonal,
    title: "Publish and share",
    detail:
      "Hit publish and copy your unique invite link. Share it anywhere — WhatsApp, email, Instagram — and guests open it instantly on any device.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 32 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section grain overflow-hidden"
      style={{
        background: "linear-gradient(170deg, #F3E7D8 0%, #FBF6EF 50%, #FFFDF8 100%)",
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
            Getting Started
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-text-main mb-5"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}
          >
            Your invite is ready in three simple steps
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22 }}
          >
            <OrnamentDivider className="max-w-xs mx-auto" />
          </motion.div>
        </div>

        {/* ── Steps ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid md:grid-cols-3 gap-px relative"
        >
          {/* Connecting track (desktop) */}
          <div
            className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px pointer-events-none"
            style={{
              background: "linear-gradient(to right, transparent, var(--accent-soft), var(--accent), var(--accent-soft), transparent)",
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative flex flex-col items-center text-center px-6 py-8 md:py-0"
              >
                {/* Step number circle */}
                <div className="relative mb-6">
                  <div
                    className="w-[68px] h-[68px] rounded-2xl flex items-center justify-center relative z-10"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      boxShadow: "0 2px 12px rgba(107,30,45,0.08)",
                    }}
                  >
                    <Icon size={26} className="text-primary" />
                  </div>
                  {/* Step number badge */}
                  <div
                    className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full flex items-center justify-center z-20"
                    style={{
                      background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
                      boxShadow: "0 2px 8px rgba(107,30,45,0.3)",
                    }}
                  >
                    <span className="text-white font-sans font-bold" style={{ fontSize: "9px" }}>
                      {i + 1}
                    </span>
                  </div>
                </div>

                {/* Step content */}
                <div className="flex flex-col items-center gap-3">
                  <span className="eyebrow" style={{ fontSize: "0.6rem", color: "var(--accent)", opacity: 0.8 }}>
                    {step.number}
                  </span>
                  <h3
                    className="font-display text-text-main"
                    style={{ fontSize: "1.3125rem", lineHeight: 1.2 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed max-w-[220px]" style={{ fontSize: "0.875rem" }}>
                    {step.detail}
                  </p>
                </div>

                {/* Vertical spacer line between steps on mobile */}
                {i < steps.length - 1 && (
                  <div className="md:hidden mt-6">
                    <VerticalGoldLine height={48} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14 flex flex-col items-center gap-3"
        >
          <button
            onClick={() => document.querySelector("#templates")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
            style={{ fontSize: "0.9375rem", padding: "0.9rem 2.25rem" }}
          >
            Start with a template <ArrowRight size={15} />
          </button>
          <p className="text-text-muted" style={{ fontSize: "0.8125rem" }}>
            Setup takes under 30 minutes. Your invite goes live instantly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
