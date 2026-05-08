import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TemplateShowcase from "@/components/TemplateShowcase";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TemplateShowcase />
        <Features />
        <HowItWorks />
        <Comparison />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
