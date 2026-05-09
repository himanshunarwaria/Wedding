"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────
   WeddingCouple — stylised bride & groom SVG illustration
───────────────────────────────────────────────────────────────── */
function WeddingCouple() {
  return (
    <svg
      viewBox="0 0 155 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Shadow */}
      <ellipse cx="77" cy="133" rx="55" ry="4.5" fill="#000" opacity="0.07" />

      {/* ── GROOM (x ≈ 47) ── */}
      {/* Shoes */}
      <ellipse cx="39" cy="128" rx="7" ry="3.5" fill="#2A1A0E" />
      <ellipse cx="55" cy="128" rx="7" ry="3.5" fill="#2A1A0E" />
      {/* Dhoti */}
      <rect x="32" y="76" width="30" height="50" rx="5" fill="#3D2A1A" />
      {/* Sherwani */}
      <rect x="28" y="26" width="38" height="52" rx="10" fill="#8C1515" />
      {/* Center button line */}
      <line
        x1="47" y1="26" x2="47" y2="68"
        stroke="#7A1010" strokeWidth="1.5" opacity="0.45"
      />
      {/* Head */}
      <circle cx="47" cy="16" r="14" fill="#F2C080" />
      {/* Turban */}
      <path
        d="M30,15 Q32,2 47,1 Q62,2 64,15 Q58,21 47,20 Q36,21 30,15Z"
        fill="#8C1515"
      />
      {/* Turban inner ridge */}
      <path
        d="M33,13 Q36,3 47,2 Q58,3 61,13"
        stroke="#A01818" strokeWidth="1.5" fill="none" opacity="0.35"
      />
      {/* Turban jewel */}
      <circle cx="47" cy="3" r="2.5" fill="#E8C050" opacity="0.88" />
      {/* Eyes */}
      <ellipse
        cx="43" cy="17" rx="2" ry="2.2"
        fill="none" stroke="#C08040" strokeWidth="0.7" opacity="0.45"
      />
      <ellipse
        cx="51" cy="17" rx="2" ry="2.2"
        fill="none" stroke="#C08040" strokeWidth="0.7" opacity="0.45"
      />
      {/* Smile */}
      <path
        d="M42,22 Q47,25.5 52,22"
        stroke="#C08040" strokeWidth="0.8" fill="none" opacity="0.4"
      />

      {/* ── BRIDE (x ≈ 107) ── */}
      {/* Lehenga flare */}
      <path d="M80,58 L134,58 L141,133 L73,133 Z" fill="#B81818" />
      {/* Gold hem */}
      <path
        d="M72,130 L142,130"
        stroke="#E8C050" strokeWidth="2.5" strokeLinecap="round" opacity="0.82"
      />
      {/* Middle decorative band */}
      <path
        d="M76,90 Q107,84 138,90"
        stroke="#E8C050" strokeWidth="0.8" fill="none" opacity="0.28"
      />
      {/* Choli */}
      <rect x="82" y="26" width="50" height="34" rx="10" fill="#B81818" />
      {/* Dupatta */}
      <path
        d="M74,24 Q107,11 140,24 L142,40 Q107,33 72,40Z"
        fill="#B81818" opacity="0.28"
      />
      {/* Head */}
      <circle cx="107" cy="15" r="13" fill="#F2C080" />
      {/* Hair bun */}
      <circle cx="107" cy="4" r="8" fill="#281808" />
      {/* Hair ornament */}
      <circle cx="107" cy="-2" r="2.5" fill="#E8C050" opacity="0.88" />
      {/* Hair line */}
      <path
        d="M100,6 Q107,2 114,6"
        stroke="#3A2010" strokeWidth="1.2" fill="none" opacity="0.38"
      />
      {/* Bindi */}
      <circle cx="107" cy="18" r="2" fill="#B81818" />
      {/* Eyes */}
      <ellipse
        cx="103" cy="17" rx="2" ry="2.2"
        fill="none" stroke="#C08040" strokeWidth="0.7" opacity="0.45"
      />
      <ellipse
        cx="111" cy="17" rx="2" ry="2.2"
        fill="none" stroke="#C08040" strokeWidth="0.7" opacity="0.45"
      />
      {/* Smile */}
      <path
        d="M102,22 Q107,25.5 112,22"
        stroke="#C08040" strokeWidth="0.8" fill="none" opacity="0.4"
      />
      {/* Bangles left */}
      <ellipse
        cx="80" cy="48" rx="5.5" ry="2.5"
        fill="none" stroke="#E8C050" strokeWidth="1.2" opacity="0.72"
      />
      {/* Bangles right */}
      <ellipse
        cx="134" cy="48" rx="5.5" ry="2.5"
        fill="none" stroke="#E8C050" strokeWidth="1.2" opacity="0.72"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CTACard
───────────────────────────────────────────────────────────────── */
function CTACard() {
  const handleScrollToTemplates = () => {
    document.querySelector("#templates")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#FFFFFF",
        border: "1px solid #E0E0E0",
        borderRadius: 20,
        padding: "2.5rem 2rem 0 2rem",
        minHeight: 280,
      }}
    >
      {/* Text content — above illustration */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.6875rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            color: "#888",
            textTransform: "uppercase",
            marginBottom: "1rem",
            margin: "0 0 1rem",
          }}
        >
          Get Started
        </p>

        {/* Heading */}
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.5rem, 2vw, 1.875rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#111",
            marginBottom: "0.75rem",
            maxWidth: 240,
          }}
        >
          Invite Your Guests in 10 Minutes!
        </h3>

        {/* Subheading */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.9375rem",
            color: "#666",
            letterSpacing: "0.04em",
            fontWeight: 500,
            marginBottom: "1.75rem",
          }}
        >
          Choose. Customise. Share.
        </p>

        {/* CTA button */}
        <button
          onClick={handleScrollToTemplates}
          style={{
            background: "#111",
            color: "white",
            fontFamily: "var(--font-sans)",
            fontSize: "0.875rem",
            fontWeight: 600,
            padding: "0.625rem 1.5rem",
            borderRadius: 100,
            border: "none",
            cursor: "pointer",
            display: "inline-block",
            marginBottom: "1.5rem",
          }}
        >
          Choose a template
        </button>
      </div>

      {/* Illustration */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: "1rem",
          width: 155,
          height: 136,
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <WeddingCouple />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Footer
───────────────────────────────────────────────────────────────── */
export default function Footer() {
  return (
    <div style={{ background: "#F7F7F7", borderTop: "1px solid #E2E2E2" }}>
      <div
        style={{ maxWidth: 1160, margin: "0 auto", padding: "5rem 1.5rem 0" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top columns row */}
          <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-start">

            {/* Left side — 3-column grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-10">

              {/* Column 1 — Brand heading */}
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    letterSpacing: "-0.02em",
                    color: "#111",
                    margin: 0,
                  }}
                >
                  Website
                  <br />
                  Templates
                  <br />
                  for Wedding
                  <br />
                  Invites
                </h2>
              </div>

              {/* Column 2 — Contact */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "#111",
                    lineHeight: 1.35,
                    marginBottom: "0.875rem",
                  }}
                >
                  Need any help? We've got your back.
                </p>

                <a
                  href="mailto:hello@invitebliss.in"
                  style={{
                    display: "block",
                    color: "#555",
                    fontSize: "0.875rem",
                    fontFamily: "var(--font-sans)",
                    textDecoration: "none",
                    marginBottom: "1.25rem",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#111";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#555";
                  }}
                >
                  hello@invitebliss.in
                </a>

                {/* Social icons */}
                <div className="flex gap-3">
                  {/* Instagram */}
                  <button
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      border: "1px solid #D8D8D8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "white",
                      cursor: "pointer",
                      transition: "border-color 0.15s ease",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#111";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#D8D8D8";
                    }}
                    aria-label="Instagram"
                  >
                    <Instagram size={15} style={{ color: "#555" }} />
                  </button>

                  {/* Youtube */}
                  <button
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      border: "1px solid #D8D8D8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "white",
                      cursor: "pointer",
                      transition: "border-color 0.15s ease",
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#111";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.borderColor = "#D8D8D8";
                    }}
                    aria-label="Youtube"
                  >
                    <Youtube size={15} style={{ color: "#555" }} />
                  </button>
                </div>
              </div>

              {/* Column 3 — Information links */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: "#111",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "1.25rem",
                  }}
                >
                  Information
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.625rem",
                  }}
                >
                  {[
                    { label: "About Us", href: "#" },
                    { label: "Contact us", href: "#" },
                    { label: "Privacy Policy", href: "#" },
                    { label: "Refund Policy", href: "#" },
                    { label: "Terms", href: "#" },
                  ].map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        style={{
                          color: "#666",
                          fontSize: "0.875rem",
                          fontFamily: "var(--font-sans)",
                          textDecoration: "none",
                          transition: "color 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = "#111";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.color = "#666";
                        }}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right side — CTA card */}
            <div style={{ flexShrink: 0, width: "100%", maxWidth: 360 }}>
              <CTACard />
            </div>
          </div>

          {/* Bottom strip */}
          <div
            style={{
              borderTop: "1px solid #E2E2E2",
              marginTop: "4rem",
              padding: "1.5rem 0 2rem",
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              {/* Brand row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ fontSize: "0.875rem", color: "#888" }}>◆</span>
                <div
                  style={{
                    width: 1,
                    height: 16,
                    background: "#D0D0D0",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "#111",
                  }}
                >
                  Missingpiece
                  <sup style={{ fontSize: "0.5rem", verticalAlign: "super" }}>
                    ®
                  </sup>
                </span>
              </div>

              {/* Copyright */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  color: "#888",
                  margin: 0,
                }}
              >
                © Missing Piece 2026
              </p>

              {/* Ornament */}
              <span style={{ color: "#ccc", fontSize: "1rem" }}>✦</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
