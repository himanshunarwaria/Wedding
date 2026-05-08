import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* ── Manrope Bold/ExtraBold → --font-serif (used for display headings) ── */
const manropeDisplay = localFont({
  src: [
    { path: "../public/font/Manrope-Bold.ttf",      weight: "700", style: "normal" },
    { path: "../public/font/Manrope-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-serif",
  display: "swap",
  preload: true,
});

/* ── Manrope Light–Bold → --font-sans (body, UI, labels) ─────────────── */
const manrope = localFont({
  src: [
    { path: "../public/font/Manrope-Light.ttf",    weight: "300", style: "normal" },
    { path: "../public/font/Manrope-Regular.ttf",  weight: "400", style: "normal" },
    { path: "../public/font/Manrope-Medium.ttf",   weight: "500", style: "normal" },
    { path: "../public/font/Manrope-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/font/Manrope-Bold.ttf",     weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "InviteBliss — Premium Wedding Invite Websites",
  description:
    "Create a beautiful wedding invitation website in minutes. Choose a handcrafted template, personalise your love story, and share one elegant link with every guest.",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${manropeDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
