/* ── EDIT FAQs HERE ─────────────────────────────────────────── */

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "Do I need any coding or design skills?",
    answer:
      "Not at all. Every template comes with a simple form where you fill in names, dates, venue, and your story. No code, no design tool, no technical knowledge required. If you can type, you can create your invite.",
  },
  {
    id: "2",
    question: "Can I edit the template content myself?",
    answer:
      "Yes, completely. After purchase you receive access to your own invite editor. You can update every piece of text, swap photos, change event timings, and add new details — all from a simple dashboard without touching a single line of code.",
  },
  {
    id: "3",
    question: "Can I change details after I've already shared the link?",
    answer:
      "Absolutely. Your invite link is live, meaning any change you make is reflected instantly. If the venue shifts, the time changes, or a new event is added — update it once and everyone who opens your link sees the latest version automatically.",
  },
  {
    id: "4",
    question: "Does it work on mobile phones?",
    answer:
      "Every single template is designed mobile-first. Whether guests open your link on an iPhone, Android, or a basic smartphone browser, the invite looks stunning and loads fast. Most guests will view it on mobile — so we built for that first.",
  },
  {
    id: "5",
    question: "Can I add Google Maps and an RSVP form?",
    answer:
      "Yes to both. You can embed a Google Maps link for each event venue so guests tap and navigate directly. The RSVP feature lets guests confirm their attendance digitally — no more calling each person individually or tracking a spreadsheet.",
  },
  {
    id: "6",
    question: "Can I use one template for multiple wedding events?",
    answer:
      "Yes. Indian weddings often have 4–6 events — Mehendi, Sangeet, Haldi, Engagement, Wedding, Reception. You can add all events to a single invite and even generate separate shareable links per event so you share only the relevant event with each guest group.",
  },
  {
    id: "7",
    question: "Do I need to buy a domain name?",
    answer:
      "No domain purchase needed. Your invite is hosted on our platform and you receive a clean shareable link (for example: invitebliss.in/your-name). Just copy the link and share it wherever you want — WhatsApp, Instagram, email, or SMS.",
  },
  {
    id: "8",
    question: "What happens after I buy a template?",
    answer:
      "After purchase you get immediate access to your invite editor. Set up your invite, preview how it looks on mobile, then publish and copy your unique invite link. You can share it the same day. Your invite remains live for 12 months from the date of purchase.",
  },
  {
    id: "9",
    question: "Can I add background music to the invite?",
    answer:
      "Yes. You can upload a short audio clip — a favourite song, a classical shehnai piece, or even a personalised voice note — that plays softly as guests scroll through your invite. You control whether it auto-plays or requires a tap to start.",
  },
  {
    id: "10",
    question: "Is this better than a WhatsApp video invite?",
    answer:
      "Very much so. Video invites are beautiful but they can't be updated, they compress poorly, they don't include clickable maps or RSVPs, and they take up storage on guests' phones. A wedding website invite is lighter, smarter, and always up to date. Guests bookmark it, not delete it.",
  },
];
