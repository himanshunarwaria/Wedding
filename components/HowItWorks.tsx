"use client";

import { motion } from "framer-motion";

const PHONE_W = 180;
const PHONE_H = Math.round(PHONE_W * 2.05);

/* ── Step phone screens ── */
const StepOneScreen = () => (
  <div className="absolute inset-0 flex flex-col pt-10 pb-4 px-3" style={{ background: "var(--bg-2)" }}>
    <div className="absolute top-3 left-3 right-3 flex justify-between" style={{ fontSize: 5.5, color: "#5C4F47", opacity: 0.5 }}>
      <span>9:41</span><span>●●●</span>
    </div>
    <p style={{ fontSize: 6, letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 8, fontFamily: "var(--font-sans)" }}>
      Browse Templates
    </p>
    <div className="flex flex-col gap-2">
      {[
        { bg: "linear-gradient(135deg,#F5E6D0,#E8C9A0)", label: "Aaranya", sub: "Hindu Wedding", accent: "#8B3A0F" },
        { bg: "linear-gradient(135deg,#F9EEF2,#EDCDD8)", label: "Meher",   sub: "Christian",     accent: "#9C2B4B" },
        { bg: "linear-gradient(135deg,#1E2A5E,#0F1A42)", label: "Noor",    sub: "Muslim Wedding", accent: "#C9A45C" },
      ].map((t) => (
        <div key={t.label} className="flex items-center gap-2 rounded-lg overflow-hidden" style={{ border: "0.5px solid rgba(45,41,38,0.1)" }}>
          <div className="flex-shrink-0 w-10 h-10" style={{ background: t.bg }} />
          <div>
            <p style={{ fontSize: 8, fontWeight: 600, color: "#2D2926", fontFamily: "var(--font-sans)" }}>{t.label}</p>
            <p style={{ fontSize: 6, color: "#8B7D74", fontFamily: "var(--font-sans)" }}>{t.sub}</p>
          </div>
          <div className="ml-auto mr-2 w-3 h-3 rounded-full flex items-center justify-center" style={{ background: t.accent + "20" }}>
            <span style={{ fontSize: 5, color: t.accent }}>›</span>
          </div>
        </div>
      ))}
    </div>
    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full" style={{ background: "rgba(45,41,38,0.12)" }} />
  </div>
);

const StepTwoScreen = () => (
  <div className="absolute inset-0 flex flex-col pt-10 pb-4 px-3" style={{ background: "#FFFFFF" }}>
    <div className="absolute top-3 left-3 right-3 flex justify-between" style={{ fontSize: 5.5, color: "#5C4F47", opacity: 0.5 }}>
      <span>9:41</span><span>●●●</span>
    </div>
    <p style={{ fontSize: 6, letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 10, fontFamily: "var(--font-sans)" }}>
      Add Your Details
    </p>
    <div className="flex flex-col gap-2">
      {[
        { label: "Bride's name", value: "Priya Sharma" },
        { label: "Groom's name", value: "Arjun Mehta" },
        { label: "Wedding date", value: "14 Feb 2026" },
        { label: "Venue", value: "The Grand Palace, Jaipur" },
      ].map((field) => (
        <div key={field.label}>
          <p style={{ fontSize: 5.5, color: "#8B7D74", marginBottom: 1.5, fontFamily: "var(--font-sans)" }}>{field.label}</p>
          <div className="rounded-md px-2 py-1.5" style={{ background: "var(--bg-2)", border: "0.5px solid var(--border)", fontSize: 7.5, color: "#2D2926", fontFamily: "var(--font-sans)" }}>
            {field.value}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-3 py-1.5 rounded-full text-center" style={{ background: "linear-gradient(135deg,#C5A467,#B8933A)", fontSize: 7, color: "#2D2926", fontWeight: 600 }}>
      Preview Invite →
    </div>
    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full" style={{ background: "rgba(45,41,38,0.12)" }} />
  </div>
);

const StepThreeScreen = () => (
  <div className="absolute inset-0 flex flex-col pt-10 pb-4 px-3" style={{ background: "var(--bg-2)" }}>
    <div className="absolute top-3 left-3 right-3 flex justify-between" style={{ fontSize: 5.5, color: "#5C4F47", opacity: 0.5 }}>
      <span>9:41</span><span>●●●</span>
    </div>
    <p style={{ fontSize: 6, letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 8, fontFamily: "var(--font-sans)" }}>
      Share Your Invite
    </p>

    <div className="rounded-lg p-2 mb-3" style={{ background: "white", border: "0.5px solid var(--border)" }}>
      <p style={{ fontSize: 6, color: "#8B7D74", marginBottom: 2, fontFamily: "var(--font-sans)" }}>Your invite link</p>
      <p style={{ fontSize: 7, color: "#C5A467", fontFamily: "var(--font-sans)", fontWeight: 600 }}>invitebliss.in/priya-arjun</p>
    </div>

    <div className="flex flex-col gap-1.5">
      {[
        { icon: "💬", name: "Share on WhatsApp", color: "#25D366" },
        { icon: "📷", name: "Share on Instagram", color: "#E1306C" },
        { icon: "✉️", name: "Send via Email",    color: "#C5A467" },
        { icon: "📋", name: "Copy link",         color: "#5C4F47" },
      ].map((s) => (
        <div key={s.name} className="flex items-center gap-2 rounded-md px-2 py-1.5" style={{ background: "white", border: "0.5px solid var(--border)" }}>
          <span style={{ fontSize: 9 }}>{s.icon}</span>
          <span style={{ fontSize: 7, color: s.color, fontFamily: "var(--font-sans)", fontWeight: 500 }}>{s.name}</span>
        </div>
      ))}
    </div>
    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full" style={{ background: "rgba(45,41,38,0.12)" }} />
  </div>
);

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
    <section id="how-it-works" className="section" style={{ background: "var(--bg-3)" }}>
      <div className="section-inner">

        {/* Header */}
        <div className="section-header">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4"
          >
            How It Works
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
            From browse to live in three steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            style={{ fontSize: "1.0625rem", color: "var(--fg-muted)" }}
          >
            Most couples are done in under an hour.
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
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-16`}
              >
                {/* Phone */}
                <div
                  className="flex-shrink-0"
                  style={{ filter: "drop-shadow(0 24px 48px rgba(45,41,38,0.14))" }}
                >
                  <div className="phone-frame" style={{ width: PHONE_W, height: PHONE_H }}>
                    <Screen />
                  </div>
                </div>

                {/* Copy */}
                <div className="flex flex-col gap-5 max-w-[480px] text-center lg:text-left items-center lg:items-start">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--gold-pale)", border: "1px solid var(--gold-light)" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1rem",
                        fontWeight: 500,
                        color: "var(--gold-hover)",
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      fontWeight: 400,
                      color: "var(--fg)",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.0625rem",
                      color: "var(--fg-muted)",
                      lineHeight: 1.7,
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
