"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { OrnamentDivider } from "./Ornament";

interface Feature {
  label: string;
  yes: boolean;
  note?: string;
}

interface Tier {
  id: string;
  name: string;
  subtitle: string;
  emoji: string;
  price: string;
  priceNote: string;
  highlighted: boolean;
  badge: string | null;
  features: Feature[];
  cta: string | null;
}

const tiers: Tier[] = [
  {
    id: "printed",
    name: "Printed Cards",
    subtitle: "Traditional format",
    emoji: "📋",
    price: "₹15,000–₹40,000",
    priceNote: "per order + reprints",
    highlighted: false,
    badge: null,
    features: [
      { label: "One-time fixed cost",     yes: false, note: "Reprints cost extra" },
      { label: "Works on all devices",    yes: false, note: "Physical delivery only" },
      { label: "Edit after sharing",      yes: false },
      { label: "Real-time updates",       yes: false },
      { label: "Clickable maps & RSVP",   yes: false },
      { label: "Multi-event links",       yes: false },
      { label: "Photo gallery",           yes: false, note: "Printed only" },
      { label: "Background music",        yes: false },
    ],
    cta: null,
  },
  {
    id: "website",
    name: "Wedding Website",
    subtitle: "InviteBliss",
    emoji: "✨",
    price: "₹3,999",
    priceNote: "one-time · per wedding",
    highlighted: true,
    badge: "Best Value",
    features: [
      { label: "One-time fixed cost",     yes: true },
      { label: "Works on all devices",    yes: true },
      { label: "Edit after sharing",      yes: true },
      { label: "Real-time updates",       yes: true },
      { label: "Clickable maps & RSVP",   yes: true },
      { label: "Multi-event links",       yes: true },
      { label: "Photo gallery",           yes: true },
      { label: "Background music",        yes: true },
    ],
    cta: "Explore Templates",
  },
  {
    id: "video",
    name: "Video Invite",
    subtitle: "Short-form media",
    emoji: "🎬",
    price: "₹5,000–₹15,000",
    priceNote: "per video edit",
    highlighted: false,
    badge: null,
    features: [
      { label: "One-time fixed cost",    yes: true },
      { label: "Works on all devices",   yes: true },
      { label: "Edit after sharing",     yes: false },
      { label: "Real-time updates",      yes: false },
      { label: "Clickable maps & RSVP",  yes: false },
      { label: "Multi-event links",      yes: false },
      { label: "Photo gallery",          yes: true, note: "In-video only" },
      { label: "Background music",       yes: true },
    ],
    cta: null,
  },
];

const CheckIcon = ({ highlighted }: { highlighted: boolean }) => (
  <div
    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
    style={{
      background: highlighted ? "rgba(201,164,92,0.2)" : "rgba(201,164,92,0.12)",
    }}
  >
    <Check size={13} style={{ color: highlighted ? "#C9A45C" : "#C9A45C" }} strokeWidth={2.5} />
  </div>
);

const XIcon = () => (
  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-black/5">
    <X size={12} className="text-text-muted/50" strokeWidth={2} />
  </div>
);

export default function Comparison() {
  const handleScroll = () => {
    document.querySelector("#templates")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="comparison" className="section" style={{ background: "var(--surface)" }}>
      <div className="section-inner">

        {/* ── Header ── */}
        <div className="section-header">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            Why Switch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-text-main mb-5"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}
          >
            Why a wedding website beats every other invite format
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26 }}
          >
            <OrnamentDivider className="max-w-xs mx-auto" />
          </motion.div>
        </div>

        {/* ── Pricing columns ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-3 gap-4 md:gap-3 items-start max-w-3xl mx-auto"
        >
          {tiers.map((tier, idx) => (
            <div
              key={tier.id}
              className={`relative flex flex-col ${
                tier.highlighted
                  ? "tier-highlight md:-mt-6 md:mb-0"
                  : "tier-default"
              }`}
              style={{
                padding: tier.highlighted ? "2.25rem 1.75rem 2rem" : "1.75rem 1.5rem 1.75rem",
              }}
            >
              {/* Best Value badge */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{ background: "#C9A45C", color: "#43111B" }}
                  >
                    {tier.badge}
                  </span>
                </div>
              )}

              {/* Column header */}
              <div className="mb-5">
                <div className="text-2xl mb-2">{tier.emoji}</div>
                <h3
                  className="font-sans font-semibold mb-0.5"
                  style={{
                    color: tier.highlighted ? "#fff" : "var(--text-main)",
                    fontSize: "1.0625rem",
                  }}
                >
                  {tier.name}
                </h3>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: tier.highlighted ? "rgba(255,255,255,0.55)" : "var(--text-muted)",
                  }}
                >
                  {tier.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-5 pb-5" style={{ borderBottom: `1px solid ${tier.highlighted ? "rgba(255,255,255,0.12)" : "var(--border)"}` }}>
                <p
                  className="font-display"
                  style={{
                    fontSize: tier.highlighted ? "1.75rem" : "1.3125rem",
                    color: tier.highlighted ? "#C9A45C" : "var(--primary)",
                    lineHeight: 1.15,
                  }}
                >
                  {tier.price}
                </p>
                <p
                  style={{
                    fontSize: "0.6875rem",
                    color: tier.highlighted ? "rgba(255,255,255,0.45)" : "var(--text-muted)",
                    marginTop: "0.2rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {tier.priceNote}
                </p>
              </div>

              {/* Features list */}
              <ul className="flex flex-col gap-3 flex-1 mb-6">
                {tier.features.map((feat) => (
                  <li key={feat.label} className="flex items-start gap-2.5">
                    {feat.yes ? <CheckIcon highlighted={tier.highlighted} /> : <XIcon />}
                    <div>
                      <p
                        style={{
                          fontSize: "0.8125rem",
                          fontWeight: feat.yes ? 500 : 400,
                          color: tier.highlighted
                            ? feat.yes ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)"
                            : feat.yes ? "var(--text-main)" : "var(--text-muted)",
                          lineHeight: 1.4,
                        }}
                      >
                        {feat.label}
                      </p>
                      {feat.note && (
                        <p
                          style={{
                            fontSize: "0.625rem",
                            color: tier.highlighted ? "rgba(255,255,255,0.35)" : "var(--text-muted)",
                            marginTop: "1px",
                          }}
                        >
                          {feat.note}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* CTA (winner column only) */}
              {tier.cta && (
                <button
                  onClick={handleScroll}
                  className="w-full justify-center"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "#C9A45C",
                    color: "#43111B",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    letterSpacing: "0.02em",
                    padding: "0.8125rem 1.5rem",
                    borderRadius: "100px",
                    border: "none",
                    cursor: "pointer",
                    transition: "box-shadow 0.22s ease, transform 0.18s ease",
                    boxShadow: "0 4px 16px rgba(201,164,92,0.35)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(201,164,92,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(201,164,92,0.35)";
                  }}
                >
                  {tier.cta} <ArrowRight size={14} />
                </button>
              )}
            </div>
          ))}
        </motion.div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-text-muted mt-10"
          style={{ fontSize: "0.75rem" }}
        >
          All prices are indicative. Wedding website pricing is per template, one-time, with 12 months of hosting included.
        </motion.p>
      </div>
    </section>
  );
}
