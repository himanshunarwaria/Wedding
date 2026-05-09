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

  return (
    <section
      className="section"
      style={{ background: "#F7F7F7", borderTop: "1px solid #E2E2E2" }}
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[540px] mx-auto text-center"
        >
          <p className="eyebrow" style={{ marginBottom: "1rem" }}>
            Stay Updated
          </p>

          <h2
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1.625rem, 2.5vw, 2.25rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.025em",
              color: "#111111",
              marginBottom: "0.75rem",
            }}
          >
            Be the first to know when a new template drops.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              color: "#666666",
              marginBottom: "2rem",
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
                style={{ background: "#111111" }}
              >
                <Check size={16} style={{ color: "white" }} />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#111111",
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
                border: "1.5px solid #E2E2E2",
                boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
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
                  color: "#111111",
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
              color: "#999999",
              marginTop: "1rem",
            }}
          >
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
