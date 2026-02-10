import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Volt & Ray | Premium Solar Solutions",
  description:
    "Empowering homes and businesses with clean, renewable energy solutions. Custom solar installations, commercial grids, and advanced energy storage.",
  keywords: [
    "Solar Panels",
    "Renewable Energy",
    "Solar Installation",
    "Commercial Solar",
    "Energy Storage",
    "Volt & Ray",
    "Sustainable Energy",
  ],
  authors: [{ name: "Volt & Ray" }],
  creator: "Volt & Ray",
  metadataBase: new URL("https://voltandray.com"), // Replace with actual domain when known
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://voltandray.com",
    title: "Volt & Ray | Premium Solar Solutions",
    description:
      "Empowering homes and businesses with clean, renewable energy solutions.",
    siteName: "Volt & Ray",
    images: [
      {
        url: "/og-image.jpg", // Needs to be created or mapped
        width: 1200,
        height: 630,
        alt: "Volt & Ray Solar Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Volt & Ray | Premium Solar Solutions",
    description:
      "Empowering homes and businesses with clean, renewable energy solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} antialiased font-sans`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
