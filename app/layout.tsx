import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
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
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
