"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface Row {
  row: string;
  printed: string;
  video: string;
  ib: string;
}

const rows: Row[] = [
  { row: "Cost",          printed: "₹10k–₹25k",   video: "₹3k–₹8k",        ib: "₹3,999 one-time"   },
  { row: "Customization", printed: "Limited",       video: "Hard to change",  ib: "Fully editable"    },
  { row: "Interactivity", printed: "Static",        video: "View-only",       ib: "Maps, RSVP, music" },
  { row: "Updating",      printed: "Impossible",    video: "Resend required", ib: "Instant & live"    },
];

export default function Comparison() {
  return (
    <section id="comparison" className="section" style={{ background: "var(--surface)" }}>
      <div className="section-inner">

        {/* Header */}
        <div className="section-header">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Switch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
            What cards and video invites can&apos;t do, InviteBliss can.
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
            }}
          >
            Turn a one-time invite into a living wedding experience — without extra cost or hassle.
          </motion.p>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-x-auto"
        >
          <div
            style={{
              background: "white",
              border: "1px solid var(--border-gold)",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(23,17,14,0.06), 0 0 0 1px rgba(199,161,90,0.06)",
            }}
          >
            <table className="w-full min-w-[560px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-gold)" }}>
                  <th
                    className="text-left"
                    style={{
                      padding: "1rem 1.25rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      width: "28%",
                    }}
                  >
                    Feature
                  </th>

                  <th className="text-center" style={{ padding: "1rem 0.875rem", width: "24%" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                      }}
                    >
                      Printed Cards
                    </span>
                  </th>

                  <th className="text-center" style={{ padding: "1rem 0.875rem", width: "24%" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                      }}
                    >
                      WhatsApp Videos
                    </span>
                  </th>

                  {/* InviteBliss — dominant */}
                  <th
                    className="text-center"
                    style={{
                      padding: "0.875rem",
                      width: "24%",
                      background: "var(--gold-faint)",
                    }}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div
                        style={{
                          background: "var(--primary)",
                          borderRadius: 100,
                          padding: "0.3rem 1rem",
                          display: "inline-block",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            color: "white",
                          }}
                        >
                          InviteBliss
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.625rem",
                          fontWeight: 600,
                          color: "var(--gold)",
                          letterSpacing: "0.06em",
                        }}
                      >
                        ✦ Best Choice
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.row}
                    style={{
                      borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none",
                      background: i % 2 === 0 ? "transparent" : "rgba(251,246,238,0.5)",
                    }}
                  >
                    <td
                      style={{
                        padding: "0.875rem 1.25rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--text-main)",
                      }}
                    >
                      {row.row}
                    </td>

                    <td
                      className="text-center"
                      style={{
                        padding: "0.875rem 0.75rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8125rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      <div className="flex items-center justify-center gap-1.5">
                        <X size={12} style={{ color: "#C4A0A0", flexShrink: 0 }} />
                        {row.printed}
                      </div>
                    </td>

                    <td
                      className="text-center"
                      style={{
                        padding: "0.875rem 0.75rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8125rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      <div className="flex items-center justify-center gap-1.5">
                        <X size={12} style={{ color: "#C4A0A0", flexShrink: 0 }} />
                        {row.video}
                      </div>
                    </td>

                    <td
                      className="text-center"
                      style={{
                        padding: "0.875rem 0.75rem",
                        background: "var(--gold-faint)",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "var(--primary)",
                      }}
                    >
                      <div className="flex items-center justify-center gap-1.5">
                        <Check size={13} style={{ color: "var(--primary)", flexShrink: 0 }} />
                        {row.ib}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
