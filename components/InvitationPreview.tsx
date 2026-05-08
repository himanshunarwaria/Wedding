"use client";

import { Template } from "@/data/templates";

/* ─── Motif SVG components ─────────────────────────────────── */

const Mandala = ({ color }: { color: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
    {[14, 22, 30].map((r, i) => (
      <circle key={i} cx="32" cy="32" r={r} stroke={color} strokeWidth={0.7 - i * 0.15}
              strokeDasharray={i === 0 ? "3 2" : i === 1 ? "2 3" : "1.5 4"} opacity={0.6 - i * 0.1} />
    ))}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a, i) => {
      const r = (a * Math.PI) / 180;
      return <circle key={i} cx={32 + 22 * Math.cos(r)} cy={32 + 22 * Math.sin(r)} r={i % 2 === 0 ? 2 : 1.2} fill={color} opacity={i % 2 === 0 ? "0.55" : "0.35"} />;
    })}
    {[0, 60, 120, 180, 240, 300].map((a, i) => {
      const r = (a * Math.PI) / 180;
      return <line key={i} x1={32 + 14 * Math.cos(r)} y1={32 + 14 * Math.sin(r)}
                   x2={32 + 28 * Math.cos(r)} y2={32 + 28 * Math.sin(r)}
                   stroke={color} strokeWidth="0.5" opacity="0.4" />;
    })}
    <circle cx="32" cy="32" r="5" fill={color} opacity="0.35" />
    <circle cx="32" cy="32" r="2.5" fill={color} opacity="0.6" />
  </svg>
);

const CrossFloral = ({ color }: { color: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
    <rect x="28.5" y="10" width="7" height="44" rx="3" fill={color} opacity="0.3" />
    <rect x="10" y="24" width="44" height="7" rx="3" fill={color} opacity="0.3" />
    <circle cx="32" cy="32" r="22" stroke={color} strokeWidth="0.6" strokeDasharray="3 3" opacity="0.4" />
    {[0, 90, 180, 270].map((a, i) => {
      const r = (a * Math.PI) / 180;
      return (
        <g key={i}>
          <circle cx={32 + 22 * Math.cos(r)} cy={32 + 22 * Math.sin(r)} r="3" fill={color} opacity="0.5" />
        </g>
      );
    })}
    <circle cx="32" cy="32" r="5" fill={color} opacity="0.4" />
  </svg>
);

const CrescentStar = ({ color }: { color: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
    <path d="M32 8 Q52 18 52 32 Q52 46 32 56 Q16 46 18 32 Q16 16 32 8 Z"
          stroke={color} strokeWidth="0.9" fill="none" opacity="0.6" />
    <path d="M34 16 L35.5 21 L41 22 L36.5 26 L38 31 L34 28 L30 31 L31.5 26 L27 22 L32.5 21 Z"
          fill={color} opacity="0.5" />
    <circle cx="45" cy="18" r="3.5" fill={color} opacity="0.4" />
    <circle cx="32" cy="32" r="18" stroke={color} strokeWidth="0.4" strokeDasharray="2 4" opacity="0.3" />
  </svg>
);

const RingDuo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
    <circle cx="24" cy="36" r="13" stroke={color} strokeWidth="1.4" opacity="0.7" />
    <circle cx="40" cy="36" r="13" stroke={color} strokeWidth="1.4" opacity="0.7" />
    <path d="M22 20 Q32 14 42 20" stroke={color} strokeWidth="0.9" fill="none" strokeLinecap="round" opacity="0.5" />
    <circle cx="32" cy="17" r="2" fill={color} opacity="0.4" />
    {[0, 60, 120, 180, 240, 300].map((a, i) => {
      const r = (a * Math.PI) / 180;
      return <circle key={i} cx={24 + 13 * Math.cos(r)} cy={36 + 13 * Math.sin(r)} r="1.2" fill={color} opacity="0.35" />;
    })}
  </svg>
);

const KolamStar = ({ color }: { color: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
    <rect x="20" y="20" width="24" height="24" rx="1" stroke={color} strokeWidth="0.8" opacity="0.5"
          transform="rotate(45 32 32)" />
    <rect x="14" y="14" width="36" height="36" rx="1" stroke={color} strokeWidth="0.5" opacity="0.3" />
    <rect x="26" y="26" width="12" height="12" rx="1" stroke={color} strokeWidth="0.7" opacity="0.6"
          transform="rotate(45 32 32)" />
    {[0, 90, 180, 270].map((a, i) => {
      const r = (a * Math.PI) / 180;
      return <circle key={i} cx={32 + 20 * Math.cos(r)} cy={32 + 20 * Math.sin(r)} r="2.5" fill={color} opacity="0.5" />;
    })}
    {[45, 135, 225, 315].map((a, i) => {
      const r = (a * Math.PI) / 180;
      return <circle key={i} cx={32 + 17 * Math.cos(r)} cy={32 + 17 * Math.sin(r)} r="1.5" fill={color} opacity="0.35" />;
    })}
    <circle cx="32" cy="32" r="3.5" fill={color} opacity="0.55" />
  </svg>
);

const KhandaSign = ({ color }: { color: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14">
    <path d="M32 10 L32 54" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
    <path d="M18 26 Q25 20 32 24 Q39 20 46 26" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
    <circle cx="32" cy="32" r="16" stroke={color} strokeWidth="0.9" opacity="0.45" />
    <path d="M20 46 Q32 40 44 46" stroke={color} strokeWidth="0.9" fill="none" opacity="0.5" />
    {[0, 60, 120, 180, 240, 300].map((a, i) => {
      const r = (a * Math.PI) / 180;
      return <circle key={i} cx={32 + 16 * Math.cos(r)} cy={32 + 16 * Math.sin(r)} r="1.5" fill={color} opacity="0.35" />;
    })}
  </svg>
);

const motifMap = {
  mandala: Mandala,
  cross: CrossFloral,
  crescent: CrescentStar,
  ring: RingDuo,
  kolam: KolamStar,
  khanda: KhandaSign,
} as const;

/* ─── Corner border ornament ───────────────────────────────── */
const CornerBorder = ({ color, opacity = 0.35 }: { color: string; opacity?: number }) => (
  <>
    {/* Top-left */}
    <svg viewBox="0 0 28 28" fill="none" className="absolute top-3 left-3 w-7 h-7" style={{ opacity }}>
      <path d="M 2 14 L 2 2 L 14 2" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="2" cy="2" r="1.5" fill={color} />
    </svg>
    {/* Top-right */}
    <svg viewBox="0 0 28 28" fill="none" className="absolute top-3 right-3 w-7 h-7" style={{ opacity, transform: "scaleX(-1)" }}>
      <path d="M 2 14 L 2 2 L 14 2" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="2" cy="2" r="1.5" fill={color} />
    </svg>
    {/* Bottom-left */}
    <svg viewBox="0 0 28 28" fill="none" className="absolute bottom-3 left-3 w-7 h-7" style={{ opacity, transform: "scaleY(-1)" }}>
      <path d="M 2 14 L 2 2 L 14 2" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="2" cy="2" r="1.5" fill={color} />
    </svg>
    {/* Bottom-right */}
    <svg viewBox="0 0 28 28" fill="none" className="absolute bottom-3 right-3 w-7 h-7" style={{ opacity, transform: "scale(-1,-1)" }}>
      <path d="M 2 14 L 2 2 L 14 2" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="2" cy="2" r="1.5" fill={color} />
    </svg>
  </>
);

/* ─── Main export ──────────────────────────────────────────── */
export default function InvitationPreview({ template }: { template: Template }) {
  const MotifComp = motifMap[template.motif];

  return (
    <div
      className="relative w-full"
      style={{ background: template.screenBg, aspectRatio: "4 / 5.4" }}
    >
      {/* Inner card frame (slight padding inset) */}
      <div
        className="absolute inset-3 rounded-xl flex flex-col items-center justify-between py-5 px-5"
        style={{ border: `1px solid ${template.screenAccent}22` }}
      >
        <CornerBorder color={template.screenAccent} opacity={0.4} />

        {/* Top section */}
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="flex items-center gap-2 w-full">
            <div className="flex-1 h-px" style={{ background: `${template.screenAccent}30` }} />
            <svg viewBox="0 0 8 8" fill="none" className="w-2 h-2 flex-shrink-0">
              <rect x="4" y="0" width="5" height="5" rx="0.3" fill={template.screenAccent} opacity="0.5" transform="rotate(45 4 4)" />
            </svg>
            <div className="flex-1 h-px" style={{ background: `${template.screenAccent}30` }} />
          </div>
          <p
            className="font-serif text-center"
            style={{
              fontSize: "0.5rem",
              color: template.screenAccent,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              opacity: 0.75,
            }}
          >
            Together with their families
          </p>
        </div>

        {/* Motif */}
        <div className="flex items-center justify-center">
          <MotifComp color={template.screenAccent} />
        </div>

        {/* Names */}
        <div className="flex flex-col items-center gap-0.5 text-center">
          <p
            className="font-serif"
            style={{
              fontSize: "1.375rem",
              color: template.screenText,
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "0.02em",
            }}
          >
            Priya
          </p>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.5625rem",
              color: template.screenAccent,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.65,
            }}
          >
            and
          </span>
          <p
            className="font-serif"
            style={{
              fontSize: "1.375rem",
              color: template.screenText,
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Arjun
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 w-full">
          <div className="flex-1 h-px" style={{ background: `${template.screenAccent}25` }} />
          <div className="w-1 h-1 rounded-full" style={{ background: `${template.screenAccent}45` }} />
          <div className="flex-1 h-px" style={{ background: `${template.screenAccent}25` }} />
        </div>

        {/* Date + venue */}
        <div className="flex flex-col items-center gap-1">
          <p
            className="font-serif"
            style={{
              fontSize: "0.6875rem",
              color: template.screenText,
              letterSpacing: "0.12em",
              opacity: 0.85,
            }}
          >
            14 · 02 · 2026
          </p>
          <p
            style={{
              fontSize: "0.5rem",
              color: template.screenText,
              opacity: 0.5,
              letterSpacing: "0.07em",
            }}
          >
            The Grand Palace, Jaipur
          </p>
        </div>
      </div>
    </div>
  );
}
