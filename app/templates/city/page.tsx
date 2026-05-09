import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import CityTemplate from "@/components/templates/city/CityTemplate";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-invite-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhishek Weds Kanika — 9th March 2027",
  description:
    "You are cordially invited to celebrate the wedding of Abhishek Sharma and Kanika Mehta. Join us for four days of love, laughter, and togetherness.",
};

export default function CityTemplatePage() {
  return (
    <main className={cormorant.variable}>
      <CityTemplate />
    </main>
  );
}
