/* ── EDIT TESTIMONIALS HERE ─────────────────────────────────── */

export interface Testimonial {
  id: string;
  initials: string;
  name: string;
  role: string;  /* e.g. "Bride, Delhi NCR" */
  quote: string;
  stars: number;
  avatarBg: string; /* Tailwind bg color class */
  templateUsed: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    initials: "PA",
    name: "Priya & Arjun",
    role: "Married in Jaipur",
    quote:
      "We used the Aaranya template and every relative was blown away. Our dadi called it 'the most beautiful card she'd ever received' — and she meant it! Setting it up took under an hour.",
    stars: 5,
    avatarBg: "bg-rose-100",
    templateUsed: "Aaranya",
  },
  {
    id: "2",
    initials: "SR",
    name: "Sneha & Rahul",
    role: "Married in Mumbai",
    quote:
      "Instead of spending ₹25,000 on printed cards that half the guests wouldn't keep, we spent ₹3,999 and got something people actually screenshot and share. Worth every rupee.",
    stars: 5,
    avatarBg: "bg-amber-100",
    templateUsed: "Vows",
  },
  {
    id: "3",
    initials: "FN",
    name: "Fatima & Naved",
    role: "Married in Hyderabad",
    quote:
      "The Noor template matched our wedding vibe perfectly. The gold-on-navy design looked absolutely royal. Our friends abroad could RSVP without any confusion — the map link was a lifesaver.",
    stars: 5,
    avatarBg: "bg-indigo-100",
    templateUsed: "Noor",
  },
  {
    id: "4",
    initials: "GK",
    name: "Grace & Kevin",
    role: "Married in Bengaluru",
    quote:
      "Meher was dreamy. The blush and gold felt like a fairytale. I kept updating the schedule as events moved around and nobody received outdated info. That alone saved us so much stress.",
    stars: 5,
    avatarBg: "bg-pink-100",
    templateUsed: "Meher",
  },
  {
    id: "5",
    initials: "DM",
    name: "Deepika & Manish",
    role: "Married in Chennai",
    quote:
      "Amara had those beautiful kolam borders that felt authentically South Indian, not generic. All five of our events — Engagement, Muhurtham, Reception — were on one invite. Perfect.",
    stars: 5,
    avatarBg: "bg-yellow-100",
    templateUsed: "Amara",
  },
  {
    id: "6",
    initials: "HP",
    name: "Harpreet & Pavan",
    role: "Married in Amritsar",
    quote:
      "Saajan captured the spirit of Anand Karaj beautifully. We added the shabad and a photo from the gurudwara. Family members in Canada and Australia felt like they were part of the planning from day one.",
    stars: 5,
    avatarBg: "bg-orange-100",
    templateUsed: "Saajan",
  },
  {
    id: "7",
    initials: "AK",
    name: "Aisha & Kabir",
    role: "Married in Delhi",
    quote:
      "Noor template was absolutely stunning. Our overseas family felt connected to every event through the invite. The Arabic font and gold design left everyone speechless.",
    stars: 5,
    avatarBg: "bg-purple-100",
    templateUsed: "Noor",
  },
  {
    id: "8",
    initials: "VR",
    name: "Vidya & Rajan",
    role: "Married in Coimbatore",
    quote:
      "Amara captured South Indian tradition perfectly. The kolam motifs, the color palette — our families said it was the most beautiful invite they had ever seen.",
    stars: 5,
    avatarBg: "bg-yellow-100",
    templateUsed: "Amara",
  },
];
