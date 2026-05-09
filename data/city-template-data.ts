export const IMAGE_BASE = "/template/CityTemplate";

export interface EventData {
  id: string;
  name: string;
  icon: string;
  dayLabel: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  dresscode: string;
  bgImage: string;
}

export interface ThingToKnow {
  icon: string;
  title: string;
  detail: string;
}

export const coupleData = {
  groom: {
    name: "Abhishek",
    fullName: "Abhishek Sharma",
    parents: "Mr. Ramesh Sharma & Mrs. Sunita Sharma",
    city: "New Delhi",
    photo: `${IMAGE_BASE}/munXckNtNDlAiOMLLgrVsV1o.jpg`,
    story:
      "A software engineer with a love for mountains, chai, and midnight novels. He met Kanika on a trek to Triund — and somehow never stopped walking beside her.",
  },
  bride: {
    name: "Kanika",
    fullName: "Kanika Mehta",
    parents: "Mr. Suresh Mehta & Mrs. Priya Mehta",
    city: "Chandigarh",
    photo: `${IMAGE_BASE}/ySQ0SbzHWfVo1ClVjS303cCa9E.jpg`,
    story:
      "A graphic designer who believes good design can change the world — and good chai can fix anything else. She found both in Abhishek.",
  },
  hashtag: "#AbhishekWedKanika",
  weddingDateISO: "2027-03-09T18:00:00+05:30",
  displayDate: "9th March 2027",
  tagline: "Together, forever.",
};

export const heroImages = {
  bg: `${IMAGE_BASE}/zB6koVKqO70HPnGHzeeNgMHgrUw.jpg`,
};

export const events: EventData[] = [
  {
    id: "mehendi",
    name: "Mehendi",
    icon: "🌿",
    dayLabel: "Day 1 · Saturday, 7 March",
    date: "Saturday, 7th March 2027",
    time: "4:00 PM onwards",
    venue: "The Grand Lawn, Sharma Residence",
    address: "B-47, Sector 15, New Delhi – 110075",
    mapsUrl: "https://maps.google.com/?q=28.6139,77.2090",
    dresscode: "Yellow & Green",
    bgImage: `${IMAGE_BASE}/fKFg2vQEmI70QHKfOSr54pE7KQ4.jpg`,
  },
  {
    id: "sangeet",
    name: "Sangeet",
    icon: "🎶",
    dayLabel: "Day 1 · Saturday, 7 March",
    date: "Saturday, 7th March 2027",
    time: "7:30 PM – 11:30 PM",
    venue: "Hotel Leela Palace — Grand Ballroom",
    address: "Chanakya Puri, New Delhi – 110023",
    mapsUrl: "https://maps.google.com/?q=28.5918,77.1881",
    dresscode: "Cocktail Attire",
    bgImage: `${IMAGE_BASE}/FLSOOveTOLX34LMuvOegzZoZ2eo.jpg`,
  },
  {
    id: "haldi",
    name: "Haldi",
    icon: "💛",
    dayLabel: "Day 2 · Sunday, 8 March",
    date: "Sunday, 8th March 2027",
    time: "10:00 AM onwards",
    venue: "Sharma Residence",
    address: "B-47, Sector 15, New Delhi – 110075",
    mapsUrl: "https://maps.google.com/?q=28.6139,77.2090",
    dresscode: "Yellow & White",
    bgImage: `${IMAGE_BASE}/22xXcSSm9sQYXLb74vUWOaNwXY.jpg`,
  },
  {
    id: "baraat",
    name: "Baraat & Wedding",
    icon: "🐴",
    dayLabel: "Day 3 · Monday, 9 March",
    date: "Monday, 9th March 2027",
    time: "Baraat: 5:00 PM · Wedding: 6:00 PM",
    venue: "The Oberoi New Delhi",
    address: "Dr. Zakir Hussain Marg, New Delhi – 110003",
    mapsUrl: "https://maps.google.com/?q=28.5992,77.2282",
    dresscode: "Traditional Indian Finery",
    bgImage: `${IMAGE_BASE}/ndc7VHWOkcPiELsDteUplHBg.jpg`,
  },
  {
    id: "pheras",
    name: "Pheras & Vidaai",
    icon: "🔥",
    dayLabel: "Day 3 · Monday, 9 March",
    date: "Monday, 9th March 2027",
    time: "9:00 PM onwards",
    venue: "The Oberoi New Delhi",
    address: "Dr. Zakir Hussain Marg, New Delhi – 110003",
    mapsUrl: "https://maps.google.com/?q=28.5992,77.2282",
    dresscode: "Traditional Indian Finery",
    bgImage: `${IMAGE_BASE}/DdFrH1xuj9wKnCb1V2cCwhyUujQ.jpg`,
  },
  {
    id: "reception",
    name: "Reception",
    icon: "🥂",
    dayLabel: "Day 4 · Tuesday, 10 March",
    date: "Tuesday, 10th March 2027",
    time: "7:00 PM – 10:30 PM",
    venue: "ITC Maurya — Bukhara Lawns",
    address: "Sardar Patel Marg, New Delhi – 110021",
    mapsUrl: "https://maps.google.com/?q=28.5995,77.1790",
    dresscode: "Formal / Cocktail",
    bgImage: `${IMAGE_BASE}/cY7IQeXj6h7Fgv6BdqdJep0Wog.jpg`,
  },
];

export const galleryImages = [
  { src: `${IMAGE_BASE}/zB6koVKqO70HPnGHzeeNgMHgrUw.jpg`, alt: "Couple photo 1" },
  { src: `${IMAGE_BASE}/CxMq9eNVYFWeipRkOH7L6BF7EV4.jpg`, alt: "Couple photo 2" },
  { src: `${IMAGE_BASE}/munXckNtNDlAiOMLLgrVsV1o.jpg`, alt: "Couple photo 3" },
  { src: `${IMAGE_BASE}/ySQ0SbzHWfVo1ClVjS303cCa9E.jpg`, alt: "Couple photo 4" },
  { src: `${IMAGE_BASE}/FLSOOveTOLX34LMuvOegzZoZ2eo.jpg`, alt: "Couple photo 5" },
  { src: `${IMAGE_BASE}/ndc7VHWOkcPiELsDteUplHBg.jpg`, alt: "Couple photo 6" },
  { src: `${IMAGE_BASE}/22xXcSSm9sQYXLb74vUWOaNwXY.jpg`, alt: "Couple photo 7" },
  { src: `${IMAGE_BASE}/fKFg2vQEmI70QHKfOSr54pE7KQ4.jpg`, alt: "Couple photo 8" },
];

export const rsvpData = {
  phone: "919876543210",
  message:
    "Hi! I'd like to confirm my attendance for Abhishek & Kanika's wedding celebrations. My name is [Your Name] and I'll be attending with [number] guests.",
  deadline: "28th February 2027",
};

export const thingsToKnow: ThingToKnow[] = [
  {
    icon: "👗",
    title: "Dress Code",
    detail:
      "Traditional Indian attire preferred for all ceremonies. Cocktail is welcome at the Sangeet & Reception.",
  },
  {
    icon: "🚗",
    title: "Parking",
    detail:
      "Valet available at all hotel venues. Avoid private cabs near Sharma Residence on Haldi day.",
  },
  {
    icon: "🏨",
    title: "Accommodation",
    detail:
      'Rooms held at Hotel Leela Palace. Mention "Sharma-Mehta Wedding" for the group rate.',
  },
  {
    icon: "🎁",
    title: "No-Gift Policy",
    detail:
      "Your love and presence is the greatest gift. Sweets from Old Delhi's Ghantewala always welcome!",
  },
  {
    icon: "📷",
    title: "Photography",
    detail:
      "Snap and tag #AbhishekWedKanika freely. During Pheras, please let the professionals lead.",
  },
  {
    icon: "👶",
    title: "Little Guests",
    detail:
      "Children are part of our joy! A dedicated kids' play area is set up at the wedding venue.",
  },
];
