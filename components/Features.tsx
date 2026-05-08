"use client";

import { motion } from "framer-motion";
import {
  IndianRupee,
  Users,
  Image,
  RefreshCw,
  Sparkles,
  Lock,
} from "lucide-react";
import { features } from "@/data/features";

const featureIcons = [IndianRupee, Users, Image, RefreshCw, Sparkles, Lock];

export default function Features() {
  return (
    <section
      id="features"
      className="section grain"
      style={{ background: "var(--bg)" }}
    >
      <div className="section-inner">

        {/* ── Section header ── */}
        <div className="section-header">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Features
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.09, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
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
            transition={{ delay: 0.18, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.0625rem",
              color: "var(--text-muted)",
              lineHeight: 1.65,
              marginBottom: "1.75rem",
            }}
          >
            Mobile-first, effortless to share. Costs less than printed cards,
            but feels far more premium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28, duration: 0.45 }}
          >
            <button
              className="btn-outline"
              style={{ fontSize: "0.875rem", padding: "0.625rem 1.5rem" }}
              onClick={() =>
                document
                  .querySelector("#templates")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Choose a template →
            </button>
          </motion.div>
        </div>

        {/* ── Feature cards grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => {
            const Icon = featureIcons[i] ?? IndianRupee;
            return (
              <motion.div
                key={feature.id}
                className="grain-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  background: "var(--cream-card)",
                  border: "1px solid var(--border-gold)",
                  borderRadius: 20,
                  padding: "2rem",
                  boxShadow:
                    "0 2px 12px rgba(23,17,14,0.05), 0 8px 28px rgba(23,17,14,0.04)",
                }}
              >
                {/* Icon container */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 16,
                    background: "var(--gold-faint)",
                    border: "1px solid var(--border-gold)",
                    marginBottom: "1.25rem",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} style={{ color: "var(--primary)" }} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "var(--text-main)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.35,
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
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
