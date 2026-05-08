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
      {/* ── Part 1: Emotional CTA ── */}
      <section
        className="section grain relative overflow-hidden"
        style={{ background: "linear-gradient(150deg, #7A1F35 0%, #3A0E19 100%)" }}
      >
        {/* Decorative gold ornament SVG */}
        <svg
          aria-hidden
          viewBox="0 0 200 200"
          fill="none"
          className="absolute pointer-events-none"
          style={{
            width: 320,
            height: 320,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.06,
          }}
        >
          {[0, 30, 60, 90, 120, 150].map((a) => {
            const rad = (a * Math.PI) / 180;
            const cx = 100 + 50 * Math.cos(rad);
            const cy = 100 + 50 * Math.sin(rad);
            return (
              <ellipse
                key={a}
                cx={cx}
                cy={cy}
                rx="28"
                ry="14"
                fill="#C7A15A"
                transform={`rotate(${a} ${cx} ${cy})`}
              />
            );
          })}
          <circle cx="100" cy="100" r="24" fill="#C7A15A" />
          <circle cx="100" cy="100" r="10" fill="#C7A15A" opacity="1.5" />
        </svg>

        {/* Top fade blob */}
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(199,161,90,0.15) 0%, transparent 70%)",
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
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 400,
                lineHeight: 1.12,
                color: "white",
                marginBottom: "1.25rem",
              }}
            >
              Your wedding invite should feel as special as your wedding.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.7,
                marginBottom: "2.25rem",
              }}
            >
              Choose a template, personalize it, and share a beautiful invite website today.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                className="btn-gold"
                style={{ fontSize: "0.9375rem", padding: "0.875rem 2rem" }}
                onClick={() => handleNav("#templates")}
              >
                Explore Templates
              </button>
              <button
                onClick={() => handleNav("#how-it-works")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "transparent",
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  padding: "0.875rem 2rem",
                  borderRadius: 100,
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  cursor: "pointer",
                  transition: "all 0.22s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.7)";
                  (e.currentTarget as HTMLButtonElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.85)";
                }}
              >
                Preview Demo
              </button>
            </div>
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
                  style={{ background: "rgba(110,31,50,0.1)" }}
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
                  boxShadow: "0 2px 16px rgba(110,31,50,0.08)",
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
