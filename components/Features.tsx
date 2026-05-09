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
      className="section"
      style={{ background: "#F7F7F7", borderTop: "1px solid #E2E2E2" }}
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
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "#111111",
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
              color: "#666666",
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => {
            const Icon = featureIcons[i] ?? IndianRupee;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  background: "white",
                  border: "1px solid #E2E2E2",
                  borderRadius: 20,
                  padding: "1.875rem",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.25s ease, transform 0.25s ease",
                }}
                whileHover={{ y: -3, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
              >
                {/* Icon container */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "#F5F5F5",
                    border: "1px solid #E2E2E2",
                    marginBottom: "1.25rem",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} style={{ color: "#111111" }} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#111111",
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
                    color: "#666666",
                    lineHeight: 1.65,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
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
