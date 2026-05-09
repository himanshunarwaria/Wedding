"use client";

import { useState } from "react";
import { Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

/* ─────────────────────────────────────────────────────────────────
   Inline data
───────────────────────────────────────────────────────────────── */
type ShowcaseCategory =
  | "All"
  | "Hindu Weddings"
  | "Christian Weddings"
  | "Sikh Weddings"
  | "Muslim Weddings"
  | "South-Indian Weddings"
  | "Save the date";

const CATEGORIES: ShowcaseCategory[] = [
  "All",
  "Hindu Weddings",
  "Christian Weddings",
  "Sikh Weddings",
  "Muslim Weddings",
  "South-Indian Weddings",
  "Save the date",
];

const SHOWCASE_TEMPLATES = [
  {
    id: "city",
    name: "City",
    category: "Hindu Weddings" as ShowcaseCategory,
    price: "INR 3999",
    description:
      "Perfect for Hindu weddings — effortless to edit, share. Designed to feel completely yours.",
    previewBg: "linear-gradient(150deg, #E8C07A 0%, #C47028 60%, #9A3E18 100%)",
    previewAccent: "#FFF2D0",
    previewText: "#FFF8F0",
  },
  {
    id: "beach",
    name: "Beach",
    category: "Hindu Weddings" as ShowcaseCategory,
    price: "INR 3999",
    description:
      "Perfect for Hindu weddings — effortless to edit, share. Designed to feel completely yours.",
    previewBg: "linear-gradient(170deg, #F5C870 0%, #E87828 50%, #C44818 100%)",
    previewAccent: "#FFE4B0",
    previewText: "#FFF4E0",
  },
  {
    id: "mountain",
    name: "Mountain",
    category: "Hindu Weddings" as ShowcaseCategory,
    price: "INR 3999",
    description:
      "Perfect for Hindu weddings — effortless to edit, share. Designed to feel completely yours.",
    previewBg: "linear-gradient(170deg, #0A1628 0%, #142042 50%, #1A2850 100%)",
    previewAccent: "#C9A45C",
    previewText: "#EAD5A5",
  },
] as const;

type ShowcaseTemplate = (typeof SHOWCASE_TEMPLATES)[number];

/* ─────────────────────────────────────────────────────────────────
   PreviewDecor — unique decorative SVG per template id
───────────────────────────────────────────────────────────────── */
function PreviewDecor({
  id,
  accent,
}: {
  id: string;
  accent: string;
}) {
  if (id === "city") {
    // 4 paper lanterns hanging from the top
    const lanterns = [
      { x: 28, stringLen: 18, bodyH: 20 },
      { x: 72, stringLen: 14, bodyH: 22 },
      { x: 116, stringLen: 20, bodyH: 18 },
      { x: 164, stringLen: 12, bodyH: 22 },
    ];
    return (
      <svg
        viewBox="0 0 200 100"
        fill="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "55%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {lanterns.map((l, i) => {
          const topY = 0;
          const bodyY = l.stringLen;
          const bodyRx = 7;
          const bodyRy = l.bodyH / 2;
          return (
            <g key={i}>
              {/* string */}
              <line
                x1={l.x}
                y1={topY}
                x2={l.x}
                y2={bodyY}
                stroke={accent}
                strokeWidth="0.6"
                opacity="0.55"
              />
              {/* top ring */}
              <ellipse
                cx={l.x}
                cy={bodyY}
                rx={bodyRx * 0.6}
                ry="1.4"
                stroke={accent}
                strokeWidth="0.5"
                fill="none"
                opacity="0.35"
              />
              {/* body */}
              <ellipse
                cx={l.x}
                cy={bodyY + bodyRy}
                rx={bodyRx}
                ry={bodyRy}
                fill={accent}
                opacity="0.55"
              />
              {/* bottom ring */}
              <ellipse
                cx={l.x}
                cy={bodyY + l.bodyH}
                rx={bodyRx * 0.6}
                ry="1.4"
                stroke={accent}
                strokeWidth="0.5"
                fill="none"
                opacity="0.28"
              />
            </g>
          );
        })}
      </svg>
    );
  }

  if (id === "beach") {
    return (
      <svg
        viewBox="0 0 200 70"
        fill="none"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "35%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {/* wave 1 */}
        <path
          d="M0,28 C30,14 60,36 90,28 C120,20 150,38 200,24 L200,70 L0,70 Z"
          fill={accent}
          opacity="0.18"
        />
        {/* wave 2 */}
        <path
          d="M0,42 C40,28 80,50 120,38 C155,28 175,46 200,36 L200,70 L0,70 Z"
          fill={accent}
          opacity="0.12"
        />
        {/* sun — top right of the full preview, rendered in this svg at top-right */}
        <circle cx="178" cy="10" r="12" fill={accent} opacity="0.25" />
      </svg>
    );
  }

  if (id === "mountain") {
    const stars = [
      { cx: 18, cy: 12, r: 0.9, op: 0.65 },
      { cx: 45, cy: 7, r: 1.1, op: 0.7 },
      { cx: 72, cy: 16, r: 0.8, op: 0.6 },
      { cx: 100, cy: 5, r: 1.0, op: 0.68 },
      { cx: 130, cy: 11, r: 0.9, op: 0.62 },
      { cx: 158, cy: 6, r: 1.1, op: 0.7 },
      { cx: 185, cy: 14, r: 0.8, op: 0.65 },
      { cx: 58, cy: 22, r: 0.7, op: 0.6 },
      { cx: 142, cy: 20, r: 0.8, op: 0.63 },
    ];
    return (
      <svg
        viewBox="0 0 200 152"
        fill="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {/* stars */}
        {stars.map((s, i) => (
          <circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r={s.r}
            fill={accent}
            opacity={s.op}
          />
        ))}
        {/* crescent moon — two offset circles approach */}
        <circle cx="165" cy="30" r="11" fill={accent} opacity="0.45" />
        <circle cx="170" cy="27" r="9" fill="#142042" opacity="1" />

        {/* mountain silhouette back */}
        <path
          d="M0,152 L0,100 L40,58 L80,88 L110,48 L150,82 L180,55 L200,68 L200,152 Z"
          fill={accent}
          opacity="0.12"
        />
        {/* mountain silhouette front */}
        <path
          d="M0,152 L0,115 L30,80 L65,105 L95,68 L130,98 L160,72 L200,90 L200,152 Z"
          fill={accent}
          opacity="0.18"
        />
      </svg>
    );
  }

  return null;
}

/* ─────────────────────────────────────────────────────────────────
   WeddingOrnament — 6-petal mandala SVG
───────────────────────────────────────────────────────────────── */
function WeddingOrnament({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" style={{ width: "100%", height: "100%" }}>
      {[0, 60, 120, 180, 240, 300].map((a) => {
        const rad = (a * Math.PI) / 180;
        const cx = 10 + 4 * Math.cos(rad);
        const cy = 10 + 4 * Math.sin(rad);
        return (
          <ellipse
            key={a}
            cx={cx}
            cy={cy}
            rx={2}
            ry={1.2}
            fill={color}
            opacity={0.45}
            transform={`rotate(${a} ${cx} ${cy})`}
          />
        );
      })}
      <circle cx="10" cy="10" r="2" fill={color} opacity="0.5" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   DeviceFrame — laptop mockup
───────────────────────────────────────────────────────────────── */
function DeviceFrame({
  previewBg,
  previewAccent,
  previewText,
  templateId,
}: {
  previewBg: string;
  previewAccent: string;
  previewText: string;
  templateId: string;
}) {
  return (
    <div style={{ width: "100%", maxWidth: 280, margin: "0 auto" }}>
      {/* Screen */}
      <div
        style={{
          border: "2px solid #1A1A1A",
          borderBottom: "none",
          borderRadius: "10px 10px 0 0",
          overflow: "hidden",
        }}
      >
        {/* Browser chrome */}
        <div
          style={{
            height: 26,
            background: "#1A1A1A",
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
            gap: 5,
          }}
        >
          {/* Traffic light dots */}
          {["#444", "#444", "#444"].map((c, i) => (
            <div
              key={i}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: c,
                flexShrink: 0,
              }}
            />
          ))}
          {/* URL bar */}
          <div
            style={{
              flex: 1,
              height: 12,
              borderRadius: 6,
              background: "#282828",
              marginLeft: 6,
              display: "flex",
              alignItems: "center",
              paddingLeft: 6,
              overflow: "hidden",
            }}
          >
            <span
              style={{
                fontSize: 5,
                color: "#555",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-sans)",
              }}
            >
              invitebliss.in/{templateId}
            </span>
          </div>
        </div>

        {/* Preview content */}
        <div
          style={{
            height: 152,
            background: previewBg,
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Decorative layer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <PreviewDecor id={templateId} accent={previewAccent} />
          </div>

          {/* Centered invite content */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
            }}
          >
            {/* Label */}
            <p
              style={{
                fontSize: 5.5,
                letterSpacing: "0.18em",
                color: previewAccent,
                opacity: 0.72,
                textTransform: "uppercase",
                fontFamily: "var(--font-sans)",
                marginBottom: 5,
                margin: "0 0 5px",
              }}
            >
              WEDDING INVITATION
            </p>

            {/* Ornament */}
            <div
              style={{
                width: 18,
                height: 18,
                margin: "0 auto 4px",
                opacity: 0.55,
              }}
            >
              <WeddingOrnament color={previewAccent} />
            </div>

            {/* Names */}
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 15,
                fontWeight: 700,
                color: previewText,
                lineHeight: 1.12,
                margin: 0,
              }}
            >
              Priya &amp; Arjun
            </p>

            {/* Divider */}
            <div
              style={{
                width: 28,
                height: 1,
                background: previewAccent,
                opacity: 0.3,
                margin: "4px auto",
              }}
            />

            {/* Date */}
            <p
              style={{
                fontSize: 5.5,
                color: previewText,
                opacity: 0.52,
                letterSpacing: "0.09em",
                fontStyle: "italic",
                fontFamily: "var(--font-sans)",
                margin: 0,
              }}
            >
              14 · February · 2026
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bezel */}
      <div
        style={{
          height: 14,
          background: "linear-gradient(180deg,#282828 0%,#1A1A1A 100%)",
          border: "2px solid #1A1A1A",
          borderTop: "1px solid #333",
          borderRadius: "0 0 6px 6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "40%",
            height: 3,
            borderRadius: 2,
            background: "rgba(255,255,255,0.04)",
          }}
        />
      </div>

      {/* Stand */}
      <div
        style={{
          height: 4,
          background: "#303030",
          width: "42%",
          margin: "0 auto",
          borderRadius: "0 0 3px 3px",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   TemplateCard
───────────────────────────────────────────────────────────────── */
function TemplateCard({
  template,
  index,
}: {
  template: ShowcaseTemplate;
  index: number;
}) {
  const [shadow, setShadow] = useState("0 2px 12px rgba(0,0,0,0.05)");
  const router = useRouter();
  const href = `/templates/${template.id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
    >
      <div
        onClick={() => router.push(href)}
        style={{
          background: "#FFFFFF",
          border: "1px solid #E2E2E2",
          borderRadius: 18,
          overflow: "hidden",
          cursor: "pointer",
          boxShadow: shadow,
          transition: "box-shadow 0.22s ease",
        }}
        onMouseEnter={() => setShadow("0 8px 32px rgba(0,0,0,0.10)")}
        onMouseLeave={() => setShadow("0 2px 12px rgba(0,0,0,0.05)")}
      >
        {/* Preview container */}
        <div
          style={{
            background: "#EDEDED",
            padding: "2rem 1.5rem 1.75rem",
            position: "relative",
          }}
        >
          {/* Category pill */}
          <div
            style={{
              position: "absolute",
              top: "1rem",
              left: "1rem",
              zIndex: 10,
              background: "white",
              border: "1px solid #D8D8D8",
              borderRadius: 100,
              padding: "0.3rem 0.875rem",
              fontSize: "0.6875rem",
              fontWeight: 500,
              color: "#444",
              boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
              fontFamily: "var(--font-sans)",
            }}
          >
            {template.category}
          </div>

          {/* Eye button — opens template in new tab */}
          <button
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              zIndex: 10,
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "white",
              border: "1px solid #D8D8D8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              window.open(href, "_blank");
            }}
          >
            <Eye size={13} style={{ color: "#666" }} />
          </button>

          <DeviceFrame
            previewBg={template.previewBg}
            previewAccent={template.previewAccent}
            previewText={template.previewText}
            templateId={template.id}
          />
        </div>

        {/* Info area */}
        <div style={{ padding: "1.25rem 1.375rem 1.375rem" }}>
          {/* Title + price row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              marginBottom: "0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.1875rem",
                fontWeight: 700,
                color: "#111",
                letterSpacing: "-0.01em",
              }}
            >
              {template.name}
            </span>
            <span
              style={{
                background: "#111",
                color: "white",
                borderRadius: 100,
                padding: "0.3rem 0.875rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.8125rem",
                fontWeight: 600,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {template.price}
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              color: "#666",
              lineHeight: 1.62,
              margin: 0,
            }}
          >
            {template.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Main TemplateShowcase component
───────────────────────────────────────────────────────────────── */
export default function TemplateShowcase() {
  const [activeCategory, setActiveCategory] = useState<ShowcaseCategory>("All");

  const filtered =
    activeCategory === "All"
      ? SHOWCASE_TEMPLATES
      : SHOWCASE_TEMPLATES.filter((t) => t.category === activeCategory);

  return (
    <section
      id="templates"
      style={{ background: "#F7F7F7", borderTop: "1px solid #E2E2E2", padding: "6rem 1.25rem" }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>

        {/* Header block */}
        <div
          style={{
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto",
            marginBottom: "4.5rem",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#111",
              marginBottom: "0.875rem",
            }}
          >
            Designed for your{" "}
            <span style={{ fontStyle: "italic" }}>BIG</span> day. Easy-to-edit.
            Effortless to Share.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.0625rem",
              color: "#666",
              lineHeight: 1.6,
              marginBottom: "2.75rem",
            }}
          >
            Pick a style. Add your story. Share in minutes
          </motion.p>

          {/* Select Category label */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "#888",
              letterSpacing: "0.04em",
              marginBottom: "0.875rem",
            }}
          >
            Select Category
          </p>

          {/* Filter pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              justifyContent: "center",
            }}
          >
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    padding: "0.4375rem 1.125rem",
                    borderRadius: 100,
                    background: active ? "#111" : "white",
                    color: active ? "white" : "#555",
                    border: active ? "1px solid #111" : "1px solid #D8D8D8",
                    cursor: "pointer",
                    transition: "all 0.18s ease",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Template grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: "1.5rem" }}
          >
            {filtered.length === 0 ? (
              <div
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  color: "#999",
                  padding: "3rem 0",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Templates coming soon for this category.
              </div>
            ) : (
              filtered.map((template, index) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  index={index}
                />
              ))
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
