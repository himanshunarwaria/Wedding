"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faqs";

/* The 10 FAQ IDs to show, in display order */
const FAQ_IDS = ["1", "13", "5", "3", "7", "6", "11", "2", "9", "10"];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  const displayFaqs = FAQ_IDS.map((id) => faqs.find((f) => f.id === id)).filter(
    Boolean
  ) as (typeof faqs)[0][];

  return (
    <section id="faq" className="section grain" style={{ background: "var(--surface)" }}>
      <div className="section-inner">

        {/* Header */}
        <div className="section-header">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            FAQ
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
            Questions? Answers.
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
            Everything you need to know before you begin.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="max-w-[720px] mx-auto">
          {displayFaqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  borderBottom: "1px solid var(--border-gold)",
                  borderLeft: isOpen ? "3px solid var(--gold)" : "3px solid transparent",
                  paddingLeft: isOpen ? "0.875rem" : "0",
                  transition: "border-color 0.2s ease, padding-left 0.2s ease",
                }}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1rem",
                      fontWeight: isOpen ? 600 : 500,
                      color: isOpen ? "var(--primary)" : "var(--text-main)",
                      lineHeight: 1.4,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      background: isOpen ? "rgba(110,31,50,0.08)" : "var(--surface-warm)",
                      border: `1px solid ${isOpen ? "var(--primary)" : "var(--border)"}`,
                      transition: "background 0.2s ease, border-color 0.2s ease",
                    }}
                  >
                    {isOpen ? (
                      <Minus size={13} style={{ color: "var(--primary)" }} />
                    ) : (
                      <Plus size={13} style={{ color: "var(--text-muted)" }} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.9375rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.7,
                          paddingBottom: "1.375rem",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
