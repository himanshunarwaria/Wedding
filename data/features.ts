/* ── EDIT FEATURES HERE ─────────────────────────────────────── */

export interface Feature {
  id: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: "cost",
    title: "Cheaper than most printed and video invites.",
    description:
      "Premium invite experience without the ₹15,000+ printing bill. One price, all guests.",
  },
  {
    id: "elder",
    title: "No tiny text. Clear, readable, and easy for every guest.",
    description:
      "Large text, high-contrast design. Easy for elderly relatives to open and read.",
  },
  {
    id: "pre",
    title: "Showcase your photos and story beautifully.",
    description:
      "Highlight reel, love story, all events, and memories — all in one beautiful website.",
  },
  {
    id: "edit",
    title: "Any change? Update instantly, even after sharing.",
    description:
      "Changed the venue or time? Update once and every guest sees the latest version automatically.",
  },
  {
    id: "ritual",
    title: "Built for Indian wedding events, functions, and traditions.",
    description:
      "Mehendi, Sangeet, Haldi, Baraat, Wedding, Reception — all events on one link.",
  },
  {
    id: "private",
    title: "Invite different guests to different events.",
    description:
      "Share only the relevant events with each guest group. One invite, multiple views.",
  },
];
