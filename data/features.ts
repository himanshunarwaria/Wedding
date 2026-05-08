/* ── EDIT FEATURES HERE ─────────────────────────────────────── */

export interface Feature {
  id: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: "cost",
    title: "A fraction of printed-card costs",
    description:
      "Premium invite experience without the ₹15,000+ printing bill. One price, all guests.",
  },
  {
    id: "elder",
    title: "Clear for every guest",
    description:
      "Large text, high-contrast design. Easy for elderly relatives to open and read.",
  },
  {
    id: "pre",
    title: "Pre-wedding highlight reel",
    description:
      "Showcase photos, your love story, all events, and memories — all in one beautiful website.",
  },
  {
    id: "edit",
    title: "Instant edits, live everywhere",
    description:
      "Changed the venue or time? Update once and every guest sees the latest version instantly.",
  },
  {
    id: "ritual",
    title: "Built for Indian rituals",
    description:
      "Mehendi, Sangeet, Haldi, Baraat, Wedding, Reception — all events on one link.",
  },
  {
    id: "private",
    title: "Private event pages",
    description:
      "Share only the relevant events with each guest group. One invite, multiple views.",
  },
];
