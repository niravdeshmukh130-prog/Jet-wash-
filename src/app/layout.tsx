import type { Metadata, Viewport } from "next";
import "@fontsource/anton";
import "@fontsource-variable/archivo";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { BUSINESS, SERVICES } from "@/lib/site";


const title = "The Jet Wash Team — Exterior Cleaning Services | Nationwide UK";
const description =
  "Professional jet washing and exterior cleaning across the UK. Driveways, patios, render, roofs, gutters and commercial premises. Residential & commercial. Free fixed-price quotes — call or WhatsApp 0796 333 4447.";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title,
  description,
  keywords: [
    "jet washing",
    "pressure washing UK",
    "driveway cleaning",
    "patio cleaning",
    "render cleaning",
    "roof cleaning",
    "gutter cleaning",
    "commercial exterior cleaning",
    "soft washing",
  ],
  openGraph: {
    title,
    description,
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#141B20",
  width: "device-width",
  initialScale: 1,
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  name: BUSINESS.legalName,
  telephone: BUSINESS.phoneE164,
  url: BUSINESS.url,
  sameAs: [BUSINESS.instagram],
  areaServed: { "@type": "Country", name: "United Kingdom" },
  priceRange: "Free quotes",
  slogan: BUSINESS.tagline,
  makesOffer: SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
