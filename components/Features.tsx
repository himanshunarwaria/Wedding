"use client";

import { motion } from "framer-motion";
import { Smartphone, Pencil, RefreshCw, MapPin, Share2, Music } from "lucide-react";
import { features } from "@/data/features";
import { OrnamentDivider } from "./Ornament";

const iconMap: Record<string, React.ElementType> = {
  Smartphone, Pencil, RefreshCw, MapPin, Share2, Music,
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Features() {
  return (
    <section
      id="features"
      className="section"
      style={{ background: "var(--background)" }}
    >
      <div className="section-inner">

        {/* ── Header ── */}
        <div className="section-header">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            Why InviteBliss
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-text-main mb-5"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}
          >
            Everything your wedding invite should do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-text-muted mb-6"
            style={{ fontSize: "1.0625rem" }}
          >
            More flexible than printed cards. More useful than a video invite.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26 }}
          >
            <OrnamentDivider className="max-w-xs mx-auto" />
          </motion.div>
        </div>

        {/* ── Feature grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Smartphone;
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="group relative flex gap-4 p-7 rounded-2xl border border-border bg-surface cursor-default"
                style={{
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
                }}
                whileHover={{
                  y: -2,
                  borderColor: "var(--accent-soft)",
                  boxShadow: "0 0 0 1px var(--accent-soft), 0 8px 32px rgba(107,30,45,0.08)",
                }}
              >
                {/* Left: icon */}
                <div
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                  style={{ background: "var(--surface-alt)" }}
                >
                  <Icon
                    size={20}
                    className="text-primary group-hover:text-primary transition-colors duration-200"
                  />
                </div>

                {/* Right: text */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-sans font-semibold text-text-main" style={{ fontSize: "0.9375rem" }}>
                    {feature.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed" style={{ fontSize: "0.875rem" }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
