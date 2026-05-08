"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faqs";
import { OrnamentDivider } from "./Ornament";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="section" style={{ background: "var(--background)" }}>
      <div className="section-inner">

        {/* ── Header ── */}
        <div className="section-header">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            Questions & Answers
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-text-main mb-5"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}
          >
            Everything you want to know
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-text-muted mb-6"
            style={{ fontSize: "1.0625rem" }}
          >
            Still unsure? Drop us a message — we reply within a few hours.
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

        {/* ── Accordion ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="faq-item"
                style={{
                  borderLeft: isOpen ? "2px solid var(--accent)" : "2px solid transparent",
                  paddingLeft: isOpen ? "1rem" : "0",
                  marginLeft: isOpen ? "-1rem" : "0",
                  transition: "border-color 0.25s ease, padding-left 0.25s ease, margin-left 0.25s ease",
                }}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-start justify-between gap-5 py-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-sans font-medium transition-colors duration-200"
                    style={{
                      color: isOpen ? "var(--primary)" : "var(--text-main)",
                      fontSize: "1rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {faq.question}
                  </span>

                  <div className="flex-shrink-0 mt-0.5">
                    {isOpen ? (
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center"
                        style={{ background: "var(--primary)" }}
                      >
                        <Minus size={14} className="text-white" />
                      </div>
                    ) : (
                      <div
                        className="w-7 h-7 rounded-full border flex items-center justify-center transition-colors duration-200 group-hover:border-primary"
                        style={{ borderColor: "var(--border)" }}
                      >
                        <Plus size={14} className="text-text-muted group-hover:text-primary transition-colors" />
                      </div>
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p
                        className="pb-6 text-text-muted leading-relaxed"
                        style={{ fontSize: "0.9375rem", paddingRight: "2.5rem" }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Contact nudge ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="text-text-muted" style={{ fontSize: "0.9375rem" }}>
            Have a question not listed here?{" "}
            <a
              href="mailto:hello@invitebliss.in"
              className="text-primary font-semibold hover:underline underline-offset-4"
            >
              hello@invitebliss.in
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
