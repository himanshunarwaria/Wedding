"use client";

import { motion } from "framer-motion";
import { Sparkles, Instagram, Twitter, Mail, Heart } from "lucide-react";

const BRAND   = "InviteBliss";
const TAGLINE = "Premium wedding invitation websites for every couple.";
const EMAIL   = "hello@invitebliss.in";
const YEAR    = new Date().getFullYear();

const footerLinks = {
  Templates: [
    { label: "All Templates",     href: "#templates" },
    { label: "Hindu Wedding",     href: "#templates" },
    { label: "Christian Wedding", href: "#templates" },
    { label: "Sikh Wedding",      href: "#templates" },
    { label: "Save the Date",     href: "#templates" },
  ],
  Product: [
    { label: "Features",     href: "#features"     },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing",      href: "#templates"    },
    { label: "FAQ",          href: "#faq"          },
  ],
  Company: [
    { label: "About",          href: "#"                   },
    { label: "Contact",        href: `mailto:${EMAIL}`     },
    { label: "Privacy Policy", href: "#"                   },
    { label: "Refund Policy",  href: "#"                   },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#",               label: "Instagram" },
  { icon: Twitter,   href: "#",               label: "Twitter"   },
  { icon: Mail,      href: `mailto:${EMAIL}`, label: "Email"     },
];

export default function Footer() {
  const handleNav = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(170deg, #2A1218 0%, var(--footer-bg) 100%)" }}
    >
      {/* Top wave — fill from surface-warm */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: 56 }}
        >
          <path d="M0,56 C480,0 960,56 1440,0 L1440,0 L0,0 Z" fill="var(--surface-warm)" />
        </svg>
      </div>

      <div className="max-w-[1160px] mx-auto px-5 pt-24 pb-10">

        {/* Main grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-14"
        >
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-2 mb-4"
              style={{ textDecoration: "none" }}
            >
              <Sparkles size={17} style={{ color: "var(--gold)" }} />
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.3125rem",
                  fontWeight: 600,
                  color: "white",
                  letterSpacing: "-0.01em",
                }}
              >
                {BRAND}
              </span>
            </a>
            <p
              className="italic mb-3"
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.875rem",
                fontFamily: "var(--font-serif)",
                fontWeight: 300,
                lineHeight: 1.65,
              }}
            >
              {TAGLINE}
            </p>
            <a
              href={`mailto:${EMAIL}`}
              style={{
                color: "var(--gold)",
                fontSize: "0.8125rem",
                textDecoration: "none",
                opacity: 0.8,
                transition: "opacity 0.15s ease",
                fontFamily: "var(--font-sans)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.8"; }}
            >
              {EMAIL}
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.45)",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "var(--gold)";
                    el.style.borderColor = "var(--gold)";
                    el.style.color = "var(--text-main)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(255,255,255,0.06)";
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.color = "rgba(255,255,255,0.45)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p
                className="mb-4"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {heading}
              </p>
              <ul className="space-y-2.5" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          handleNav(link.href);
                        }
                      }}
                      style={{
                        color: "rgba(255,255,255,0.38)",
                        fontSize: "0.875rem",
                        textDecoration: "none",
                        transition: "color 0.15s ease",
                        fontFamily: "var(--font-sans)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "0.75rem",
              fontFamily: "var(--font-sans)",
            }}
          >
            &copy; {YEAR} {BRAND}. All rights reserved.
          </p>
          <p
            className="flex items-center gap-1.5"
            style={{
              color: "rgba(255,255,255,0.22)",
              fontSize: "0.75rem",
              fontFamily: "var(--font-sans)",
            }}
          >
            Made with{" "}
            <Heart size={10} style={{ color: "var(--gold)", fill: "var(--gold)" }} />{" "}
            for every couple
          </p>
        </div>
      </div>
    </footer>
  );
}
