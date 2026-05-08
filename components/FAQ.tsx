"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="section" style={{ background: "var(--bg)" }}>
      <div className="section-inner">

        {/* Header */}
        <div className="section-header">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            FAQ
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
            Frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{ fontSize: "1.0625rem", color: "var(--fg-muted)" }}
          >
            Everything you need to know before you begin.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="max-w-[720px] mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                style={{ borderBottom: "1px solid var(--border-light)" }}
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
                      fontWeight: 500,
                      color: isOpen ? "var(--gold-hover)" : "var(--fg)",
                      lineHeight: 1.4,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
                    style={{
                      background: isOpen ? "var(--gold-pale)" : "var(--bg-2)",
                      border: `1px solid ${isOpen ? "var(--gold-light)" : "var(--border)"}`,
                    }}
                  >
                    {isOpen ? (
                      <Minus size={13} style={{ color: "var(--gold-hover)" }} />
                    ) : (
                      <Plus size={13} style={{ color: "var(--fg-muted)" }} />
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
                          color: "var(--fg-muted)",
                          lineHeight: 1.7,
                          paddingBottom: "1.25rem",
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
