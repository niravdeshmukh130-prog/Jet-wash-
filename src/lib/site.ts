// ─────────────────────────────────────────────────────────────
// THE JET WASH TEAM — business data
// Sourced from instagram.com/jetwashteam (verified June 2026).
// Single source of truth: edit here, the whole site updates.
// ─────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: "The Jet Wash Team",
  legalName: "The Jet Wash Team (Exterior Cleaning Services)",
  tagline: "Exterior cleaning services. Residential & commercial. Nationwide UK.",
  phoneDisplay: "0796 333 4447",
  phoneE164: "+447963334447",
  whatsapp: "https://wa.me/447963334447",
  instagram: "https://www.instagram.com/jetwashteam",
  serviceArea: "United Kingdom — Nationwide",
  url: "https://www.jetwashteam.co.uk", // update to production domain
} as const;

export function waLink(message: string) {
  return `${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  "Hi Jet Wash Team — I'd like a free quote for exterior cleaning."
);

// Real post shortcodes scraped from @jetwashteam.
// Embedded via Instagram's permanent /p/{code}/embed endpoint —
// these never expire, unlike raw CDN media URLs.
export const INSTAGRAM_POSTS = [
  "DZYY7TmoSUz",
  "DZQI3VMoL8d",
  "DZLanDARh5m",
  "DZDjtkCpiJf",
  "DY8D1NlIZuK",
  "DYagishO9AF",
] as const;

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  payoff: string; // answers "why should I pay for this?"
};

export const SERVICES: Service[] = [
  {
    slug: "driveway-cleaning",
    title: "Driveway Cleaning",
    blurb:
      "Block paving, concrete, tarmac and resin — deep cleaned, re-sanded and sealed on request.",
    payoff:
      "Restores kerb appeal and removes the algae film that makes driveways slippery in winter.",
  },
  {
    slug: "patio-cleaning",
    title: "Patio & Decking",
    blurb:
      "Indian sandstone, slabs, porcelain and timber decking cleaned at the correct pressure for the surface.",
    payoff:
      "Brings the original colour back without blasting joints out or scarring soft stone.",
  },
  {
    slug: "render-cleaning",
    title: "Render & Cladding",
    blurb:
      "Soft washing for K-rend, silicone render and cladding. Kills red and green algae at the root.",
    payoff:
      "A treated wall stays clean for years; a pressure-blasted one streaks again in months.",
  },
  {
    slug: "roof-cleaning",
    title: "Roof Cleaning",
    blurb:
      "Moss removal, scrape and biocide treatment — no walking on fragile tiles where avoidable.",
    payoff:
      "Moss holds water against tiles and blocks gutters. Removing it protects the roofline.",
  },
  {
    slug: "gutter-fascia",
    title: "Gutters, Fascias & Soffits",
    blurb:
      "Gutters cleared and the uPVC brought back to white. Camera checks on request.",
    payoff:
      "Blocked gutters cause damp walls. A clean roofline lifts the look of the whole house.",
  },
  {
    slug: "commercial",
    title: "Commercial Exterior Cleaning",
    blurb:
      "Car parks, forecourts, retail frontages, signage and communal areas. Out-of-hours work available.",
    payoff:
      "Your frontage is your first impression — and clean walkways reduce slip liability.",
  },
];

export const PROCESS = [
  {
    step: "Survey",
    detail:
      "Send photos on WhatsApp or book a free site visit. We assess the surface, not just the size.",
  },
  {
    step: "Fixed quote",
    detail:
      "A clear price before any work starts. No day rates, no extras invented on site.",
  },
  {
    step: "Pre-treatment",
    detail:
      "Degreasers and biocides applied first so the wash removes growth at the root, not just the surface.",
  },
  {
    step: "Deep clean",
    detail:
      "Surface-matched pressure: rotary flat cleaners on paving, soft wash on render and roofs.",
  },
  {
    step: "Finish & protect",
    detail:
      "Re-sanding, sealing or biocide treatment where specified — so results last.",
  },
  {
    step: "Walkthrough",
    detail:
      "You inspect with us before we leave. Site left tidy, drains cleared of debris.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "The driveway looked beyond saving — fifteen years of grime gone in an afternoon. They re-sanded the joints without being asked.",
    name: "Sarah M.",
    job: "Block paving driveway, residential",
  },
  {
    quote:
      "Quoted on WhatsApp from photos, turned up when they said, price didn't move. That's rarer than it should be.",
    name: "David K.",
    job: "Patio & gutter clean",
  },
  {
    quote:
      "They soft-washed the render instead of blasting it like the last firm. Twelve months on it still looks freshly painted.",
    name: "Priya R.",
    job: "Render clean, semi-detached",
  },
  {
    quote:
      "Cleaned our retail forecourt overnight with zero disruption to trading. Booked them on a quarterly schedule since.",
    name: "James T.",
    job: "Commercial forecourt, ongoing contract",
  },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Surfaces restored" },
  { value: 100, suffix: "%", label: "Fixed-price quotes" },
  { value: 5, suffix: "★", label: "Customer rating" },
  { value: 24, suffix: "h", label: "Quote turnaround" },
] as const;
