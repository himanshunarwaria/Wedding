import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

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

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
