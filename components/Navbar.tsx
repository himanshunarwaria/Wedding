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
          height: 64,
          transition:
            "background 0.25s ease, backdrop-filter 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
          background: isScrolled ? "rgba(247,247,247,0.96)" : "rgba(247,247,247,0.7)",
          backdropFilter: "blur(16px) saturate(1.4)",
          WebkitBackdropFilter: "blur(16px) saturate(1.4)",
          borderBottom: "1px solid #E2E2E2",
          boxShadow: isScrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <nav
          className="mx-auto flex items-center justify-between gap-4"
          style={{ maxWidth: 1160, height: "100%", padding: "0 1.5rem" }}
        >
          {/* ── Logo ── */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 shrink-0"
            style={{ textDecoration: "none" }}
          >
            {/* Diamond mark */}
            <div
              style={{
                width: 18,
                height: 18,
                background: "#111111",
                borderRadius: 4,
                transform: "rotate(45deg)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "#111111",
                letterSpacing: "-0.02em",
              }}
            >
              {BRAND}
            </span>
          </a>

          {/* ── Desktop center links ── */}
          <ul
            className="hidden md:flex items-center gap-1"
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#666666",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.5rem 1rem",
                    borderRadius: 100,
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#111111";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#666666";
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
              style={{ fontSize: "0.875rem", padding: "0.5625rem 1.25rem" }}
            >
              Choose a template
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden"
            aria-label="Toggle navigation menu"
            style={{
              background: "none",
              border: "1px solid #E2E2E2",
              borderRadius: 10,
              cursor: "pointer",
              color: "#111111",
              padding: "0.375rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
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
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 z-40 md:hidden"
            style={{
              top: 64,
              background: "rgba(247,247,247,0.98)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid #E2E2E2",
              boxShadow: "0 8px 24px rgba(0,0,0,0.07)",
            }}
          >
            <div
              className="mx-auto flex flex-col"
              style={{ maxWidth: 1160, padding: "1.125rem 1.5rem 1.5rem", gap: "0.125rem" }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#111111",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid #E2E2E2",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: "0.875rem 0.25rem",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#666666";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#111111";
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
                  Choose a template
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
