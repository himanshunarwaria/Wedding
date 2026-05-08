"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const BRAND = "InviteBliss";

const navLinks = [
  { label: "Templates",    href: "#templates"    },
  { label: "Features",     href: "#features"     },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ",          href: "#faq"          },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          background: isScrolled ? "rgba(251,245,236,0.92)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px) saturate(1.5)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(16px) saturate(1.5)" : "none",
          borderBottom: isScrolled ? "1px solid var(--border)" : "1px solid transparent",
          boxShadow: isScrolled ? "0 2px 20px rgba(110,31,50,0.08)" : "none",
        }}
      >
        <nav className="max-w-[1160px] mx-auto px-5 h-[68px] flex items-center justify-between gap-4">

          {/* Brand */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 shrink-0"
            style={{ textDecoration: "none" }}
          >
            <Sparkles size={17} style={{ color: "var(--gold)", flexShrink: 0 }} />
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "var(--primary)",
                letterSpacing: "-0.01em",
              }}
            >
              {BRAND}
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-2 rounded-full"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    transition: "color 0.18s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNav("#templates")}
              className="btn-primary"
              style={{ fontSize: "0.8125rem", padding: "0.5rem 1.25rem" }}
            >
              Explore Templates
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-xl"
            style={{ color: "var(--primary)", background: "none", border: "none", cursor: "pointer" }}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[68px] z-40 md:hidden"
            style={{
              background: "rgba(251,245,236,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)",
              boxShadow: "0 8px 32px rgba(110,31,50,0.1)",
            }}
          >
            <div className="max-w-[1160px] mx-auto px-5 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 rounded-xl"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.0625rem",
                    fontWeight: 500,
                    color: "var(--text-main)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    borderBottom: "1px solid var(--border)",
                    transition: "color 0.18s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--text-main)";
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 mt-2">
                <button
                  onClick={() => handleNav("#templates")}
                  className="btn-primary w-full justify-center"
                >
                  Explore Templates
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
