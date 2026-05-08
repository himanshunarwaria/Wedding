"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface Row {
  label: string;
  printed: boolean | string;
  video: boolean | string;
  invitebliss: boolean | string;
}

const rows: Row[] = [
  { label: "Edit after sending",          printed: false,          video: false,   invitebliss: true },
  { label: "Works on all phones",         printed: false,          video: true,    invitebliss: true },
  { label: "Google Maps for venue",       printed: false,          video: false,   invitebliss: true },
  { label: "Online RSVP collection",      printed: false,          video: false,   invitebliss: true },
  { label: "Background music",            printed: false,          video: true,    invitebliss: true },
  { label: "Multiple events on one link", printed: true,           video: false,   invitebliss: true },
  { label: "Eco-friendly",                printed: false,          video: true,    invitebliss: true },
  { label: "Shareable link",              printed: false,          video: "Partial", invitebliss: true },
];

const pricingRow = {
  label: "Typical price",
  printed: "₹10,000–₹25,000",
  video: "₹3,000–₹8,000",
  invitebliss: "₹3,999",
};

const Cell = ({ val, highlight }: { val: boolean | string; highlight?: boolean }) => {
  if (typeof val === "string") {
    return (
      <td
        className="py-3.5 text-center"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.875rem",
          fontWeight: highlight ? 700 : 500,
          color: highlight ? "var(--gold-hover)" : "var(--fg-muted)",
        }}
      >
        {val}
      </td>
    );
  }
  return (
    <td className="py-3.5 text-center">
      {val ? (
        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full mx-auto" style={{ background: "rgba(197,164,103,0.15)" }}>
          <Check size={13} style={{ color: "var(--gold-hover)", strokeWidth: 2.5 }} />
        </div>
      ) : (
        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full mx-auto" style={{ background: "rgba(45,41,38,0.06)" }}>
          <X size={12} style={{ color: "var(--fg-light)", strokeWidth: 2 }} />
        </div>
      )}
    </td>
  );
};

export default function Comparison() {
  return (
    <section id="comparison" className="section" style={{ background: "var(--bg)" }}>
      <div className="section-inner">

        {/* Header */}
        <div className="section-header">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            Why switch
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
            InviteBliss vs the alternatives
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{ fontSize: "1.0625rem", color: "var(--fg-muted)" }}
          >
            See how a wedding website invite compares to printed cards and video invites.
          </motion.p>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[540px]" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
            <thead>
              <tr>
                <th className="pb-5 text-left" style={{ width: "38%" }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--fg-light)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500 }}>
                    Feature
                  </span>
                </th>
                {[
                  { label: "Printed Cards", sub: "Traditional" },
                  { label: "WhatsApp Videos", sub: "Digital video" },
                  { label: "InviteBliss", sub: "Wedding website", highlight: true },
                ].map((col) => (
                  <th key={col.label} className="pb-5 text-center" style={{ width: "20.67%" }}>
                    <div
                      className="inline-flex flex-col items-center gap-1 px-3 py-2 rounded-xl"
                      style={{
                        background: col.highlight ? "var(--gold-pale)" : "transparent",
                        border: col.highlight ? "1px solid var(--gold-light)" : "none",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: col.highlight ? "var(--gold-hover)" : "var(--fg)",
                        }}
                      >
                        {col.label}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.6875rem",
                          color: col.highlight ? "var(--gold)" : "var(--fg-light)",
                        }}
                      >
                        {col.sub}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  style={{
                    borderTop: "1px solid var(--border-light)",
                    background: i % 2 === 0 ? "transparent" : "rgba(248,241,234,0.4)",
                  }}
                >
                  <td
                    className="py-3.5"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "var(--fg)",
                      paddingLeft: "0.5rem",
                    }}
                  >
                    {row.label}
                  </td>
                  <Cell val={row.printed} />
                  <Cell val={row.video} />
                  <Cell val={row.invitebliss} highlight />
                </tr>
              ))}
              {/* Price row */}
              <tr style={{ borderTop: "2px solid var(--border)" }}>
                <td
                  className="py-4"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--fg)",
                    paddingLeft: "0.5rem",
                  }}
                >
                  {pricingRow.label}
                </td>
                <Cell val={pricingRow.printed} />
                <Cell val={pricingRow.video} />
                <Cell val={pricingRow.invitebliss} highlight />
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
