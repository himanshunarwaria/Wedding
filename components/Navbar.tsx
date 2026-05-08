"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const BRAND = "InviteBliss";

const navLinks = [
  { label: "Templates", href: "#templates" },
  { label: "Features",  href: "#features"  },
  { label: "FAQ",       href: "#faq"        },
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
          height: 68,
          transition:
            "background 0.28s ease, backdrop-filter 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
          background: isScrolled ? "rgba(248,241,231,0.94)" : "transparent",
          backdropFilter: isScrolled ? "blur(18px) saturate(1.6)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(18px) saturate(1.6)" : "none",
          borderBottom: isScrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
          boxShadow: isScrolled
            ? "0 2px 20px rgba(23,17,14,0.07)"
            : "none",
        }}
      >
        <nav
          className="mx-auto flex items-center justify-between gap-4"
          style={{
            maxWidth: 1160,
            height: "100%",
            padding: "0 1.25rem",
          }}
        >
          {/* ── Logo ── */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-1.5 shrink-0"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                color: "var(--gold)",
                fontSize: "0.8125rem",
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              ✦
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.1875rem",
                fontWeight: 700,
                color: "var(--text-main)",
                letterSpacing: "-0.01em",
              }}
            >
              {BRAND}
            </span>
          </a>

          {/* ── Desktop center links ── */}
          <ul
            className="hidden md:flex items-center gap-0.5"
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.5rem 1rem",
                    borderRadius: 100,
                    transition: "color 0.18s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "var(--text-main)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "var(--text-muted)";
                  }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              onClick={() => handleNav("#templates")}
              className="btn-primary"
              style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}
            >
              Explore Templates
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden"
            aria-label="Toggle navigation menu"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--primary)",
              padding: "0.375rem",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 z-40 md:hidden"
            style={{
              top: 68,
              background: "rgba(248,241,231,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)",
              boxShadow: "0 8px 32px rgba(23,17,14,0.09)",
            }}
          >
            <div
              className="mx-auto flex flex-col"
              style={{
                maxWidth: 1160,
                padding: "1.25rem 1.25rem 1.5rem",
                gap: "0.25rem",
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.0625rem",
                    fontWeight: 500,
                    color: "var(--text-main)",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid var(--border)",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: "0.875rem 0.5rem",
                    transition: "color 0.16s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "var(--text-main)";
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div style={{ paddingTop: "1rem" }}>
                <button
                  onClick={() => handleNav("#templates")}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
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
