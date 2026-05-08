"use client";

import { motion } from "framer-motion";
import { RefreshCw, Hand, Music, CalendarDays, Clock, Smartphone } from "lucide-react";

interface BentoFeature {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  large?: boolean;
  accent?: string;
}

const bentoFeatures: BentoFeature[] = [
  {
    id: "updates",
    icon: RefreshCw,
    title: "Your invite, always up to date",
    description:
      "Changed the venue? New event added? Update once — and every guest who opens your link sees the latest details instantly. No reprints, no re-sharing.",
    large: true,
    accent: "#C5A467",
  },
  {
    id: "rsvp",
    icon: Hand,
    title: "RSVP in one tap",
    description:
      "Guests confirm attendance with a single tap. All responses collected in your dashboard — no spreadsheets, no WhatsApp chasing.",
    large: true,
    accent: "#C4967A",
  },
  {
    id: "music",
    icon: Music,
    title: "Background music",
    description: "Upload your favourite song or shehnai track to play as guests scroll.",
    accent: "#8B7D74",
  },
  {
    id: "events",
    icon: CalendarDays,
    title: "6+ events, one link",
    description: "Mehendi, Sangeet, Haldi, Wedding, Reception — all on one invite.",
    accent: "#8B7D74",
  },
  {
    id: "speed",
    icon: Clock,
    title: "Ready in 60 minutes",
    description: "Fill in the details, preview, publish. No design or tech skills needed.",
    accent: "#8B7D74",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile-first design",
    description: "Every template looks stunning on any device, built for smartphones first.",
    accent: "#8B7D74",
  },
];

export default function Features() {
  return (
    <section id="features" className="section" style={{ background: "var(--bg)" }}>
      <div className="section-inner">

        {/* Header */}
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
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--fg)",
              marginBottom: "1.25rem",
            }}
          >
            Everything your wedding invite should do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{ fontSize: "1.0625rem", color: "var(--fg-muted)" }}
          >
            More flexible than printed cards. Smarter than a video invite.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {bentoFeatures.map((f, i) => {
            const Icon = f.icon;
            const isLarge = f.large;
            return (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={isLarge ? "bento-large" : ""}
                style={{
                  background: "white",
                  border: "1px solid var(--border-light)",
                  borderRadius: 20,
                  padding: isLarge ? "2rem" : "1.5rem",
                  boxShadow: "0 2px 8px rgba(45,41,38,0.05), 0 8px 24px rgba(45,41,38,0.04)",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(45,41,38,0.09), 0 20px 48px rgba(45,41,38,0.07)" }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${f.accent}14` }}
                >
                  <Icon size={18} style={{ color: f.accent }} />
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: isLarge ? "1.125rem" : "0.9375rem",
                    fontWeight: 600,
                    color: "var(--fg)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    color: "var(--fg-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {f.description}
                </p>

                {/* Decorative corner for large cards */}
                {isLarge && (
                  <div
                    className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
                    style={{ background: `${f.accent}08` }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
