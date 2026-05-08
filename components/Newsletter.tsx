"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      className="section"
      style={{ background: "var(--bg-2)" }}
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[560px] mx-auto text-center"
        >
          <p className="eyebrow mb-5">Stay in the loop</p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--fg)",
              marginBottom: "1rem",
            }}
          >
            New templates, straight to your inbox
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.0625rem",
              color: "var(--fg-muted)",
              marginBottom: "2rem",
              lineHeight: 1.65,
            }}
          >
            We release new templates seasonally. Drop your email and be the first to see each new design.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2.5 py-4"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "var(--gold-pale)" }}
              >
                <Check size={16} style={{ color: "var(--gold-hover)" }} />
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 500, color: "var(--fg)" }}>
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
                boxShadow: "0 2px 12px rgba(45,41,38,0.07)",
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
                  color: "var(--fg)",
                  padding: "0.5rem 1rem",
                }}
              />
              <button
                type="submit"
                className="btn-primary"
                style={{ fontSize: "0.875rem", padding: "0.625rem 1.375rem", flexShrink: 0 }}
              >
                Notify me <ArrowRight size={14} />
              </button>
            </form>
          )}

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              color: "var(--fg-light)",
              marginTop: "1rem",
            }}
          >
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
