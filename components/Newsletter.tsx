"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  const handleNav = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* ── Part 1: Final CTA block ── */}
      <section
        className="section grain relative overflow-hidden"
        style={{ background: "var(--primary)" }}
      >
        {/* Ambient gold radial glow */}
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(185,154,93,0.12) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 pointer-events-none"
          style={{
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(185,154,93,0.08) 0%, transparent 65%)",
          }}
        />

        <div className="section-inner relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[680px] mx-auto text-center"
          >
            {/* Ornament */}
            <div className="ornament-divider justify-center mb-6"
              style={{ "--ornament-color": "rgba(185,154,93,0.4)" } as React.CSSProperties}
            >
              <svg viewBox="0 0 12 12" fill="none" style={{ width: 10, height: 10 }}>
                <rect x="6" y="0" width="8" height="8" rx="0.5"
                  fill="var(--gold)" opacity="0.5" transform="rotate(45 6 6)" />
              </svg>
            </div>

            <p
              className="eyebrow mb-5"
              style={{ color: "var(--gold)", opacity: 0.75 }}
            >
              Get Started Today
            </p>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Invite Your Guests in<br />10 Minutes!
            </h2>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "0.06em",
                marginBottom: "2.5rem",
                fontWeight: 500,
              }}
            >
              Choose. Customise. Share.
            </p>

            <button
              className="btn-gold"
              style={{ fontSize: "0.9375rem", padding: "0.9375rem 2.25rem" }}
              onClick={() => handleNav("#templates")}
            >
              Choose a template →
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Part 2: Newsletter ── */}
      <section className="section grain" style={{ background: "var(--surface-warm)" }}>
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[560px] mx-auto text-center"
          >
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "var(--primary)",
                marginBottom: "0.75rem",
              }}
            >
              Be the first to know when a new template drops.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                color: "var(--text-muted)",
                marginBottom: "1.875rem",
              }}
            >
              We release new templates seasonally — get early access.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-2.5 py-4"
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(23,17,14,0.08)" }}
                >
                  <Check size={17} style={{ color: "var(--primary)" }} />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--primary)",
                  }}
                >
                  You&rsquo;re on the list!
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 p-1.5 rounded-full"
                style={{
                  background: "white",
                  border: "1.5px solid var(--border)",
                  boxShadow: "0 2px 16px rgba(23,17,14,0.08)",
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    color: "var(--text-main)",
                    padding: "0.5rem 1rem",
                    minWidth: 0,
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ fontSize: "0.875rem", padding: "0.625rem 1.25rem", flexShrink: 0 }}
                >
                  Notify me <ArrowRight size={14} />
                </button>
              </form>
            )}

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                marginTop: "1rem",
              }}
            >
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
