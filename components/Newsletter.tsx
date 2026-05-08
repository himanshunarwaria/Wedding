"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Check } from "lucide-react";
import { RingMandala } from "./Ornament";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setLoading(true);
    /* ── Replace with your API call ── */
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section
      id="newsletter"
      className="section relative overflow-hidden grain"
      style={{
        background: "linear-gradient(145deg, #6B1E2D 0%, #43111B 100%)",
      }}
    >
      {/* Background mandala */}
      <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
        <RingMandala size={420} opacity={0.06} />
      </div>
      <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
        <RingMandala size={320} opacity={0.04} />
      </div>

      <div className="section-inner relative z-10">
        <div className="max-w-lg mx-auto text-center">

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <Mail size={22} style={{ color: "#C9A45C" }} />
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3"
            style={{ color: "#C9A45C", fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}
          >
            Stay in the loop
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-white mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", lineHeight: 1.1 }}
          >
            Get new wedding template drops first
          </motion.h2>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="mb-9 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}
          >
            Join the list for new designs, launch discounts, and invite ideas curated for Indian weddings.
          </motion.p>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
          >
            {submitted ? (
              <div
                className="flex items-center justify-center gap-3 rounded-2xl px-6 py-4"
                style={{ background: "rgba(201,164,92,0.15)", border: "1px solid rgba(201,164,92,0.25)" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "#C9A45C" }}
                >
                  <Check size={15} style={{ color: "#43111B" }} strokeWidth={2.5} />
                </div>
                <p className="text-white font-medium" style={{ fontSize: "0.9375rem" }}>
                  You&rsquo;re on the list — we&rsquo;ll reach out when new templates drop.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail
                    size={15}
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full pl-10 pr-4 py-3.5 rounded-2xl text-white placeholder:text-white/35 text-sm outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1.5px solid rgba(255,255,255,0.14)",
                      fontSize: "0.9375rem",
                    }}
                    onFocus={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "#C9A45C";
                      (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(201,164,92,0.15)";
                    }}
                    onBlur={(e) => {
                      (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.14)";
                      (e.target as HTMLInputElement).style.boxShadow = "none";
                    }}
                  />
                </div>
                <button type="submit" disabled={loading} className="btn-accent shrink-0 justify-center"
                        style={{ padding: "0.875rem 1.75rem", borderRadius: "16px", fontSize: "0.9375rem" }}>
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 rounded-full animate-spin"
                          style={{ borderColor: "#43111B30", borderTopColor: "#43111B" }} />
                  ) : (
                    <>Subscribe <ArrowRight size={14} /></>
                  )}
                </button>
              </form>
            )}
            <p className="mt-4" style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem" }}>
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
