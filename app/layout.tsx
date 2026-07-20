import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    "formwork Eastern Suburbs",
    "concrete Inner West Sydney",
    "steel fixing Western Sydney",
    "formwork Maroubra",
    "concrete Randwick",
    "formwork Homebush",
    "concrete contractor Sydney NSW",
  ],

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

  // Verifies site ownership for Google Search Console
  verification: {
    google: "7mn8oLAU9HAxmU5kk0hapkD-X80m6617h2pAou0deXA",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Starwood Constructions",
  description:
    "Premium formwork, steel fixing and concrete solutions for residential and commercial construction projects across Sydney.",
  url: siteUrl,
  telephone: "+61450890096",
  email: "info@starwoodconstructions.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "City", name: "Sydney" },
    { "@type": "Place", name: "Eastern Suburbs, Sydney" },
    { "@type": "Place", name: "Inner West, Sydney" },
    { "@type": "Place", name: "North Shore, Sydney" },
    { "@type": "Place", name: "Western Sydney" },
    { "@type": "Place", name: "South Sydney" },
    { "@type": "Place", name: "Hills District, Sydney" },
    { "@type": "Place", name: "Sutherland Shire, Sydney" },
  ],
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
        <Analytics />
      </body>
    </html>
  );
}
