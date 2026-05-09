"use client";

import { motion } from "framer-motion";

const PHONE_W = 180;
const PHONE_H = Math.round(PHONE_W * 2.05);

/* ── Step 1 screen: template grid preview ── */
function StepOneScreen() {
  return (
    <div
      className="absolute inset-0 flex flex-col pt-10 pb-4 px-3"
      style={{ background: "#F5F5F5" }}
    >
      <div
        className="absolute top-3 left-3 right-3 flex justify-between"
        style={{ fontSize: 5.5, color: "#666", opacity: 0.6, fontFamily: "var(--font-sans)" }}
      >
        <span>9:41</span>
        <span>●●●</span>
      </div>
      <p
        style={{
          fontSize: 6,
          letterSpacing: "0.14em",
          color: "#999",
          textTransform: "uppercase",
          marginBottom: 8,
          fontFamily: "var(--font-sans)",
        }}
      >
        Browse Templates
      </p>
      <div className="flex flex-col gap-2">
        {[
          { bg: "linear-gradient(135deg,#F5E6D0,#E8C9A0)", label: "Aaranya",  sub: "Hindu Wedding",  accent: "#8B3A0F" },
          { bg: "linear-gradient(135deg,#F9EEF2,#EDCDD8)", label: "Meher",    sub: "Christian",      accent: "#9C2B4B" },
          { bg: "linear-gradient(135deg,#1E2A5E,#0F1A42)", label: "Noor",     sub: "Muslim Wedding", accent: "#C9A45C" },
        ].map((t) => (
          <div
            key={t.label}
            className="flex items-center gap-2 rounded-lg overflow-hidden"
            style={{ background: "white", border: "0.5px solid #E2E2E2" }}
          >
            <div className="flex-shrink-0 w-10 h-10" style={{ background: t.bg }} />
            <div>
              <p style={{ fontSize: 8, fontWeight: 600, color: "#111", fontFamily: "var(--font-sans)" }}>
                {t.label}
              </p>
              <p style={{ fontSize: 6, color: "#888", fontFamily: "var(--font-sans)" }}>
                {t.sub}
              </p>
            </div>
            <div
              className="ml-auto mr-2"
              style={{ fontSize: 10, color: t.accent, fontWeight: 600 }}
            >
              ›
            </div>
          </div>
        ))}
      </div>
      <div
        className="absolute bottom-2.5 left-1/2 -translate-x-1/2"
        style={{ width: 24, height: 2, borderRadius: 2, background: "rgba(0,0,0,0.1)" }}
      />
    </div>
  );
}

/* ── Step 2 screen: edit form UI ── */
function StepTwoScreen() {
  return (
    <div
      className="absolute inset-0 flex flex-col pt-10 pb-4 px-3"
      style={{ background: "#FFFFFF" }}
    >
      <div
        className="absolute top-3 left-3 right-3 flex justify-between"
        style={{ fontSize: 5.5, color: "#666", opacity: 0.6, fontFamily: "var(--font-sans)" }}
      >
        <span>9:41</span>
        <span>●●●</span>
      </div>
      <p
        style={{
          fontSize: 6,
          letterSpacing: "0.14em",
          color: "#999",
          textTransform: "uppercase",
          marginBottom: 10,
          fontFamily: "var(--font-sans)",
        }}
      >
        Add Your Details
      </p>
      <div className="flex flex-col gap-2">
        {[
          { label: "Bride's name",  value: "Priya Sharma" },
          { label: "Groom's name",  value: "Arjun Mehta" },
          { label: "Wedding date",  value: "14 Feb 2026" },
          { label: "Venue",         value: "The Grand Palace, Jaipur" },
        ].map((field) => (
          <div key={field.label}>
            <p
              style={{
                fontSize: 5.5,
                color: "#888",
                marginBottom: 1.5,
                fontFamily: "var(--font-sans)",
              }}
            >
              {field.label}
            </p>
            <div
              className="rounded-md px-2 py-1.5"
              style={{
                background: "#F5F5F5",
                border: "0.5px solid #E2E2E2",
                fontSize: 7.5,
                color: "#111",
                fontFamily: "var(--font-sans)",
              }}
            >
              {field.value}
            </div>
          </div>
        ))}
      </div>
      <div
        className="mt-3 py-1.5 rounded-full text-center"
        style={{
          background: "#111111",
          fontSize: 7,
          color: "white",
          fontWeight: 600,
          fontFamily: "var(--font-sans)",
        }}
      >
        Preview Invite →
      </div>
      <div
        className="absolute bottom-2.5 left-1/2 -translate-x-1/2"
        style={{ width: 24, height: 2, borderRadius: 2, background: "rgba(0,0,0,0.1)" }}
      />
    </div>
  );
}

/* ── Step 3 screen: share link card ── */
function StepThreeScreen() {
  return (
    <div
      className="absolute inset-0 flex flex-col pt-10 pb-4 px-3"
      style={{ background: "#F5F5F5" }}
    >
      <div
        className="absolute top-3 left-3 right-3 flex justify-between"
        style={{ fontSize: 5.5, color: "#666", opacity: 0.6, fontFamily: "var(--font-sans)" }}
      >
        <span>9:41</span>
        <span>●●●</span>
      </div>
      <p
        style={{
          fontSize: 6,
          letterSpacing: "0.14em",
          color: "#999",
          textTransform: "uppercase",
          marginBottom: 8,
          fontFamily: "var(--font-sans)",
        }}
      >
        Share Your Invite
      </p>

      <div
        className="rounded-lg p-2 mb-3"
        style={{ background: "white", border: "0.5px solid #E2E2E2" }}
      >
        <p style={{ fontSize: 6, color: "#888", marginBottom: 2, fontFamily: "var(--font-sans)" }}>
          Your invite link
        </p>
        <p style={{ fontSize: 7, color: "#111", fontFamily: "var(--font-sans)", fontWeight: 600 }}>
          invitebliss.in/priya-arjun
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        {[
          { icon: "💬", name: "Share on WhatsApp",  color: "#25D366" },
          { icon: "📷", name: "Share on Instagram", color: "#E1306C" },
          { icon: "✉️", name: "Send via Email",     color: "#666" },
          { icon: "📋", name: "Copy link",          color: "#888" },
        ].map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-2 rounded-md px-2 py-1.5"
            style={{ background: "white", border: "0.5px solid #E2E2E2" }}
          >
            <span style={{ fontSize: 9 }}>{s.icon}</span>
            <span
              style={{
                fontSize: 7,
                color: s.color,
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
              }}
            >
              {s.name}
            </span>
          </div>
        ))}
      </div>
      <div
        className="absolute bottom-2.5 left-1/2 -translate-x-1/2"
        style={{ width: 24, height: 2, borderRadius: 2, background: "rgba(0,0,0,0.1)" }}
      />
    </div>
  );
}

const steps = [
  {
    number: "01",
    title: "Browse & pick your design",
    description:
      "Explore 6 handcrafted templates. Filter by wedding type — Hindu, Christian, Sikh, Muslim, South Indian, or Save the Date. Preview each one and choose the design that feels like you.",
    Screen: StepOneScreen,
  },
  {
    number: "02",
    title: "Add your details",
    description:
      "Fill in names, dates, venues, and event timings. Upload a couple photo, add background music. Everything through a simple form — no design tool, no code. Done in under 60 minutes.",
    Screen: StepTwoScreen,
  },
  {
    number: "03",
    title: "Share with everyone",
    description:
      "Copy your unique invite link and share it on WhatsApp, Instagram, email, or SMS. Update the details anytime — guests always see the latest version when they open the link.",
    Screen: StepThreeScreen,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section"
      style={{ background: "#FFFFFF", borderTop: "1px solid #E2E2E2" }}
    >
      <div className="section-inner">

        {/* Header */}
        <div className="section-header">
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
            Create a stunning wedding invite website in 10 minutes.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.0625rem",
              color: "#666666",
            }}
          >
            Easily change text, photos, events, colors, and make your love story the star.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-20 lg:gap-28">
          {steps.map((step, i) => {
            const Screen = step.Screen;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-16`}
              >
                {/* Phone mockup */}
                <div
                  className="flex-shrink-0"
                  style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))" }}
                >
                  <div className="phone-frame" style={{ width: PHONE_W, height: PHONE_H }}>
                    <Screen />
                  </div>
                </div>

                {/* Copy */}
                <div className="flex flex-col gap-5 max-w-[480px] text-center lg:text-left items-center lg:items-start">
                  {/* Step number */}
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "3rem",
                        fontWeight: 800,
                        color: "#E8E8E8",
                        lineHeight: 1,
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Thin rule */}
                  <div style={{ width: 32, height: 2, background: "#111111", borderRadius: 2 }} />

                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "#111111",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.0625rem",
                      color: "#666666",
                      lineHeight: 1.72,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
