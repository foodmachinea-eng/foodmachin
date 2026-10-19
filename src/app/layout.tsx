import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Sweet & Namkeen Making Machinery Manufacturer`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "sweet making machine",
    "laddu making machine",
    "peda making machine",
    "rasgulla making machine",
    "gulab jamun machine",
    "halwa making machine",
    "khoya making machine",
    "namkeen making machine",
    "Aksar Food Machine",
    "Wadhwan",
    "Gujarat",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.legalName,
    title: `${site.name} — Food Processing Machinery`,
    description: site.description,
    url: site.url,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  icons: { icon: site.logo, apple: site.logo },
};

export const viewport: Viewport = {
  themeColor: "#15171a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://5.imimg.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
