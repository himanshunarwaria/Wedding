"use client";

import { motion } from "framer-motion";
import { DollarSign, Users, Image, RefreshCw, Heart, Shield } from "lucide-react";
import { features } from "@/data/features";

const featureIcons = [DollarSign, Users, Image, RefreshCw, Heart, Shield];

export default function Features() {
  return (
    <section id="features" className="section grain" style={{ background: "var(--bg)" }}>
      <div className="section-inner">

        {/* Header */}
        <div className="section-header">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Features
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
            The Wedding Invite, Reinvented.
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
              marginBottom: "1.75rem",
            }}
          >
            Mobile-first, effortless to share, and more flexible than printed cards or WhatsApp videos.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
          >
            <button
              className="btn-outline"
              style={{ fontSize: "0.875rem", padding: "0.625rem 1.5rem" }}
              onClick={() =>
                document.querySelector("#templates")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Choose a template →
            </button>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = featureIcons[i] || DollarSign;
            return (
              <motion.div
                key={feature.id}
                className="card-warm grain-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  padding: "2rem",
                  border: "1px solid var(--border-gold)",
                  boxShadow: "0 2px 12px rgba(110,31,50,0.05), 0 8px 28px rgba(110,31,50,0.04)",
                }}
              >
                {/* Icon — gold ring */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: "var(--gold-faint)",
                    border: "1px solid var(--border-gold)",
                  }}
                >
                  <Icon size={20} style={{ color: "var(--primary)" }} />
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--text-main)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.35,
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
