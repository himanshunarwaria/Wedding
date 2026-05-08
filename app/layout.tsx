import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

/* ── Replace brand name / tagline in metadata below ── */
export const metadata: Metadata = {
  title: "InviteBliss — Premium Wedding Invite Websites",
  description:
    "Create a beautiful wedding invitation website in minutes. Choose a handcrafted template, personalize your love story, and share one elegant link with every guest.",
  keywords: [
    "wedding invitation website",
    "digital wedding invite",
    "online shaadi card",
    "wedding website template",
    "Indian wedding invite",
    "custom wedding link",
  ],
  openGraph: {
    title: "InviteBliss — Premium Wedding Invite Websites",
    description:
      "Beautiful wedding invitation websites, ready in minutes. Designed for Indian weddings.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "InviteBliss — Premium Wedding Invite Websites",
    description:
      "Choose a design, add your story, share one link. Wedding websites made simple.",
  },
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
