// data/siteData.js
// All site content in one place – update names, prices, links and images as needed.

export const siteConfig = {
  name: "Lumière Vows",
  email: "zaryabmalik.work@gmail.com",
  phone: "+44 7441 941693",
  heroVideo: "/videos/hero-loop.mp4",
  heroPoster: "/images/hero-poster.jpg",
};

export const whatsAppTemplateBodyLimit = 1024;

/* ── Hero section ── */
export const heroWords = [
  "Your", "wedding", "day,", ["edited"], "the", "way", "you", ["felt"], "it.",
];

export const stats = [
  { number: "350+", label: "Films delivered" },
  { number: "100%", label: "Couples retained" },
  { number: "4K", label: "Cinematic grade" },
];

/* ── Films (portfolio) ── */
export const films = [
  { id: 1, title: "Ameera & Joy", place: "Rosewood, London", region: "uk", video: "/videos/ameera-joy.mp4", poster: "/images/ameera-joy-poster.jpg", from: "#3a1424", to: "#1a0a14" },
  { id: 2, title: "Sundus & Ayaz", place: "The Savoy, London", region: "uk", video: "/videos/sundus-ayaz.mp4", poster: "/images/sundus-ayaz-poster.jpg", from: "#2c1228", to: "#140b18" },
  { id: 3, title: "Malak & Firas", place: "The Plaza, New York", region: "us", video: "/videos/malak-firas.mp4", poster: "/images/malak-firas-poster.jpg", from: "#3a2010", to: "#1a0e08" },
  { id: 4, title: "Aliya & Ahmed", place: "Hever Castle, Kent", region: "uk", video: "/videos/aliya-ahmed.mp4", poster: "/images/aliya-ahmed-poster.jpg", from: "#281826", to: "#120c12" },
  { id: 5, title: "Lia & Telem", place: "Beverly Hills Hotel, LA", region: "us", video: "/videos/lia-telem.mp4", poster: "/images/lia-telem-poster.jpg", from: "#241420", to: "#100a10" },
  { id: 6, title: "Aisha & Ahmed", place: null, region: null, video: "/videos/shoot-aisha-ahmed.mp4", poster: "/images/shoot-aisha-ahmed-poster.jpg", from: "#281826", to: "#120c12" },
];

/* ── Services ── */
export const services = [
  { title: "Highlight edit", text: "3–5 min cinematic reel of your best moments, colour-graded in 4K.", price: "From £1,200" },
  { title: "Feature film", text: "15–40 min story-first film built around your vows, the speeches and the in-between moments.", price: "From £2,800" },
  { title: "Raw footage delivery", text: "Every usable clip, organised, synced and colour-matched, ready for your archive.", price: "From £800" },
  { title: "Social teasers", text: "Vertical reels optimised for Instagram, TikTok and WhatsApp — delivered within 48 hours.", price: "From £450" },
  { title: "Multi-cam sync & grade", text: "Full timeline assembly from 2–5 cameras with professional colour grading and audio mix.", price: "From £1,600" },
];

/* ── Process steps ── */
export const steps = [
  { title: "Upload footage", text: "Send us your raw files via our secure upload link. We accept all formats." },
  { title: "Creative brief", text: "We discuss your vision, music preferences and the moments that matter most." },
  { title: "Edit & review", text: "You receive a first cut within 3 weeks. Two rounds of revisions are included." },
  { title: "Delivery", text: "Final film delivered in 4K via download link, plus social-ready versions." },
];

/* ── Testimonials ── */
export const testimonials = [
  { text: "Our film felt like a movie. Every time we watch it we relive the whole day.", by: "Ameera & Joy · London" },
  { text: "Invisible on the day, but every important moment was there. The edit blew us away.", by: "Sundus & Ayaz · London" },
  { text: "The colour, the pacing, the music. Our families still ask us to play it again and again.", by: "Malak & Firas · New York" },
];

/* ── Marquees ── */
export const marquee1 = [
  "Wedding films", "Highlight reels", "4K colour grade", "Feature edits", "Social teasers",
];
export const marquee2 = [
  "Lumière Vows", "Cinematic post-production", "UK & US",
];
