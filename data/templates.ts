/* ── EDIT TEMPLATES HERE ──────────────────────────────────────
   Change name, category, description, price, and gradient.
   gradient:  any Tailwind bg-gradient-to-br from/via/to classes.
   ──────────────────────────────────────────────────────────── */

export type Category =
  | "All"
  | "Hindu Wedding"
  | "Christian Wedding"
  | "Sikh Wedding"
  | "Muslim Wedding"
  | "South Indian"
  | "Save the Date";

export interface Template {
  id: string;
  name: string;
  category: Exclude<Category, "All">;
  tagline: string;
  description: string;
  price: string;
  /* CSS values for the invitation preview card background */
  previewBg: string;
  previewAccent: string;
  previewText: string;
  motif: "mandala" | "cross" | "khanda" | "crescent" | "kolam" | "ring";
  badge: string;
}

export const templates: Template[] = [
  {
    id: "aaranya",
    name: "Aaranya",
    category: "Hindu Wedding",
    tagline: "Earthy & Botanical",
    description:
      "Warm terracotta florals and ancient motifs in a sun-drenched editorial layout.",
    price: "₹3,999",
    previewBg: "linear-gradient(145deg, #F5E6D0 0%, #E8C9A0 100%)",
    previewAccent: "#8B3A0F",
    previewText: "#3D1A08",
    motif: "mandala",
    badge: "Hindu Wedding",
  },
  {
    id: "meher",
    name: "Meher",
    category: "Christian Wedding",
    tagline: "Soft & Romantic",
    description:
      "Delicate blush florals, gold script, and a timeless chapel-inspired layout.",
    price: "₹3,999",
    previewBg: "linear-gradient(145deg, #F9EEF2 0%, #EDCDD8 100%)",
    previewAccent: "#9C2B4B",
    previewText: "#4A1528",
    motif: "cross",
    badge: "Christian Wedding",
  },
  {
    id: "noor",
    name: "Noor",
    category: "Muslim Wedding",
    tagline: "Regal & Geometric",
    description:
      "Deep indigo and gold geometric patterns framing a majestic walima invitation.",
    price: "₹3,999",
    previewBg: "linear-gradient(145deg, #1E2A5E 0%, #0F1A42 100%)",
    previewAccent: "#C9A45C",
    previewText: "#EAD5A5",
    motif: "crescent",
    badge: "Muslim Wedding",
  },
  {
    id: "vows",
    name: "Vows",
    category: "Save the Date",
    tagline: "Minimal & Modern",
    description:
      "Crisp white space, sage green accents, and a typographic-first save-the-date.",
    price: "₹3,999",
    previewBg: "linear-gradient(145deg, #F2F5F0 0%, #D9E5D6 100%)",
    previewAccent: "#3A6349",
    previewText: "#1E3328",
    motif: "ring",
    badge: "Save the Date",
  },
  {
    id: "amara",
    name: "Amara",
    category: "South Indian",
    tagline: "Temple & Tradition",
    description:
      "Vibrant mango yellow and vermillion with intricate kolam-inspired borders.",
    price: "₹3,999",
    previewBg: "linear-gradient(145deg, #FDF0C5 0%, #F5D76E 100%)",
    previewAccent: "#B5350D",
    previewText: "#5C1A08",
    motif: "kolam",
    badge: "South Indian",
  },
  {
    id: "saajan",
    name: "Saajan",
    category: "Sikh Wedding",
    tagline: "Heritage & Grace",
    description:
      "Saffron and ivory with celestial khanda motifs for a soulful Anand Karaj.",
    price: "₹3,999",
    previewBg: "linear-gradient(145deg, #FEF0DC 0%, #F5C878 100%)",
    previewAccent: "#7B3800",
    previewText: "#3D1C00",
    motif: "khanda",
    badge: "Sikh Wedding",
  },
];

export const categories: Category[] = [
  "All",
  "Hindu Wedding",
  "Christian Wedding",
  "Sikh Wedding",
  "Muslim Wedding",
  "South Indian",
  "Save the Date",
];
