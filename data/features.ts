/* ── EDIT FEATURES HERE ─────────────────────────────────────── */

export interface Feature {
  id: string;
  icon: string; /* lucide icon name */
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: "mobile",
    icon: "Smartphone",
    title: "Mobile-first experience",
    description:
      "Every template is pixel-perfect on mobile. Guests open your link on any device and see a flawless invitation.",
  },
  {
    id: "editing",
    icon: "Pencil",
    title: "Easy editing",
    description:
      "No design skills needed. Fill in a simple form — names, dates, venue, love story — and watch your invite come alive.",
  },
  {
    id: "updates",
    icon: "RefreshCw",
    title: "Instant updates",
    description:
      "Venue changed? New sub-event added? Update once and everyone with your link sees the latest details immediately.",
  },
  {
    id: "rsvp",
    icon: "MapPin",
    title: "RSVP and map links",
    description:
      "Embed Google Maps for every venue and collect RSVPs digitally. No more chasing confirmations over WhatsApp.",
  },
  {
    id: "sharing",
    icon: "Share2",
    title: "Event-wise guest sharing",
    description:
      "Generate separate links for Mehendi, Sangeet, or Reception. Share only relevant events with the right guests.",
  },
  {
    id: "media",
    icon: "Music",
    title: "Photo and music support",
    description:
      "Add a couple photo gallery and a background melody that plays softly as guests scroll through your invite.",
  },
];
