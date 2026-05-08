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
    const onScroll = () => setIsScrolled(window.scrollY > 24);
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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isScrolled ? "rgba(253,248,244,0.9)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px) saturate(1.4)" : "none",
          borderBottom: isScrolled ? "1px solid var(--border-light)" : "1px solid transparent",
          boxShadow: isScrolled ? "0 1px 20px rgba(45,41,38,0.06)" : "none",
        }}
      >
        <nav className="max-w-[1160px] mx-auto px-5 h-[66px] flex items-center justify-between gap-4">

          {/* Brand */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 shrink-0"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.1875rem",
              fontWeight: 500,
              color: "var(--fg)",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            <Sparkles size={16} style={{ color: "var(--gold)" }} />
            {BRAND}
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-2 rounded-full transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--fg-muted)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--fg)";
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--fg-muted)";
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
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
              style={{ fontSize: "0.875rem", padding: "0.625rem 1.375rem" }}
            >
              Explore Templates
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-xl transition-colors"
            style={{ color: "var(--fg)" }}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-0 top-[66px] z-40 md:hidden"
            style={{
              background: "rgba(253,248,244,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)",
              boxShadow: "0 8px 32px rgba(45,41,38,0.08)",
            }}
          >
            <div className="max-w-[1160px] mx-auto px-5 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 rounded-xl transition-colors duration-150"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--fg)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--bg-2)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--gold-hover)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--fg)";
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 mt-1" style={{ borderTop: "1px solid var(--border)" }}>
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
