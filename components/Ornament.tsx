/* ── Reusable decorative SVG elements ────────────────────────────
   Keep all ornaments subtle: thin strokes, low opacity, gold palette.
──────────────────────────────────────────────────────────────── */

/** Horizontal rule with a central lotus motif */
export function OrnamentDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 w-full ${className}`}>
      <div
        className="flex-1 h-px"
        style={{ background: "linear-gradient(to right, transparent, #C9A45C55)" }}
      />
      <svg viewBox="0 0 36 20" fill="none" className="w-8 h-4 flex-shrink-0">
        {/* Lotus petals */}
        <ellipse cx="18" cy="14" rx="3" ry="6" fill="#C9A45C" opacity="0.55" transform="rotate(0 18 14)" />
        <ellipse cx="18" cy="14" rx="3" ry="6" fill="#C9A45C" opacity="0.38" transform="rotate(45 18 14)" />
        <ellipse cx="18" cy="14" rx="3" ry="6" fill="#C9A45C" opacity="0.38" transform="rotate(-45 18 14)" />
        <ellipse cx="18" cy="14" rx="3" ry="6" fill="#C9A45C" opacity="0.3" transform="rotate(90 18 14)" />
        <circle cx="18" cy="14" r="2.5" fill="#C9A45C" opacity="0.65" />
      </svg>
      <div
        className="flex-1 h-px"
        style={{ background: "linear-gradient(to left, transparent, #C9A45C55)" }}
      />
    </div>
  );
}

/** Diamond separator — smaller, inline */
export function DiamondSep({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
      <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
        <rect x="6" y="1" width="7" height="7" rx="0.5" fill="#C9A45C" opacity="0.5" transform="rotate(45 6 6)" />
      </svg>
      <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
    </div>
  );
}

/** Lightweight corner floral — top-left orientation, caller mirrors for other corners */
export function CornerFloral({
  size = 80,
  opacity = 0.2,
  className = "",
}: {
  size?: number;
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      style={{ opacity }}
    >
      {/* Main branch */}
      <path d="M 5 75 Q 20 40 75 5" stroke="#C9A45C" strokeWidth="0.8" fill="none" />
      {/* Small leaves off the branch */}
      <ellipse cx="20" cy="58" rx="6" ry="3" fill="#C9A45C" transform="rotate(-45 20 58)" />
      <ellipse cx="35" cy="42" rx="6" ry="3" fill="#C9A45C" transform="rotate(-50 35 42)" />
      <ellipse cx="52" cy="26" rx="6" ry="3" fill="#C9A45C" transform="rotate(-55 52 26)" />
      {/* Small dots */}
      <circle cx="14" cy="67" r="1.5" fill="#C9A45C" />
      <circle cx="46" cy="33" r="1.5" fill="#C9A45C" />
      <circle cx="65" cy="14" r="1.5" fill="#C9A45C" />
      {/* Tip bud */}
      <ellipse cx="72" cy="8" rx="4" ry="2.5" fill="#C9A45C" transform="rotate(-55 72 8)" />
    </svg>
  );
}

/** Concentric ring mandala — used as background decoration in hero etc. */
export function RingMandala({
  size = 320,
  opacity = 0.12,
  className = "",
}: {
  size?: number;
  opacity?: number;
  className?: string;
}) {
  const cx = size / 2;
  const radii = [0.15, 0.27, 0.38, 0.47].map((r) => r * size);
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      style={{ opacity }}
    >
      {radii.map((r, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cx}
          r={r}
          stroke="#C9A45C"
          strokeWidth={0.7 - i * 0.1}
          strokeDasharray={i % 2 === 0 ? "4 3" : "2 4"}
        />
      ))}
      {/* Spoke dots at outermost ring */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const r = radii[3];
        return (
          <circle
            key={i}
            cx={cx + r * Math.cos(rad)}
            cy={cx + r * Math.sin(rad)}
            r="2.5"
            fill="#C9A45C"
            opacity="0.6"
          />
        );
      })}
      <circle cx={cx} cy={cx} r="6" fill="#C9A45C" opacity="0.4" />
      <circle cx={cx} cy={cx} r="3" fill="#C9A45C" opacity="0.6" />
    </svg>
  );
}

/** Thin vertical gold gradient line */
export function VerticalGoldLine({ height = 80, className = "" }: { height?: number; className?: string }) {
  return (
    <div
      className={`w-px ${className}`}
      style={{
        height: `${height}px`,
        background: "linear-gradient(to bottom, transparent, #C9A45C80, transparent)",
      }}
    />
  );
}
