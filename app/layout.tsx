import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://starwoodconstructions.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Starwood Constructions | Formwork, Steel Fixing & Concrete Sydney",
  description:
    "Starwood Constructions delivers premium formwork, steel fixing and concrete solutions across Sydney for residential and commercial construction projects.",
  keywords: [
    "formwork Sydney",
    "steel fixing Sydney",
    "concrete construction Sydney",
    "retaining walls Sydney",
    "residential construction Sydney",
    "commercial construction Sydney",
  ],

  // Controls the preview card when your link is shared on Facebook, WhatsApp, LinkedIn, etc.
  openGraph: {
    title: "Starwood Constructions | Formwork, Steel Fixing & Concrete Sydney",
    description:
      "Premium formwork, steel fixing and concrete solutions for residential and commercial projects across Sydney.",
    url: siteUrl,
    siteName: "Starwood Constructions",
    images: [
      {
        url: "/images/homebush-slab.jpg",
        width: 1200,
        height: 630,
        alt: "Starwood Constructions formwork project",
      },
    ],
    locale: "en_AU",
    type: "website",
  },

  // Controls the preview card specifically on Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Starwood Constructions | Formwork, Steel Fixing & Concrete Sydney",
    description:
      "Premium formwork, steel fixing and concrete solutions for residential and commercial projects across Sydney.",
    images: ["/images/homebush-slab.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: siteUrl,
  },
};

// Structured data (JSON-LD) telling Google this is a local business —
// helps with local search results and Google's business knowledge panel.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Starwood Constructions",
  description:
    "Premium formwork, steel fixing and concrete solutions for residential and commercial construction projects across Sydney.",
  url: siteUrl,
  telephone: "+61450890096",
  email: "starwood.construction1@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  areaServed: {
    "@type": "City",
    name: "Sydney",
  },
  sameAs: ["https://www.facebook.com/share/17zpuxuD3w/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen bg-black text-white">
        {children}
      </body>
    </html>
  );
}
