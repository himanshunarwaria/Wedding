"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("stickyBarDismissed")) {
      setDismissed(true);
      return;
    }
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem("stickyBarDismissed", "true");
  };

  const handleCta = () => {
    document.querySelector("#templates")?.scrollIntoView({ behavior: "smooth" });
    dismiss();
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 inset-x-0 z-50"
          style={{
            background: "rgba(247,247,247,0.96)",
            backdropFilter: "blur(16px) saturate(1.4)",
            borderTop: "1px solid #E2E2E2",
            boxShadow: "0 -2px 16px rgba(0,0,0,0.08)",
          }}
        >
          <div className="max-w-[1160px] mx-auto px-5 py-3.5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 min-w-0">
              <Sparkles
                size={16}
                style={{ color: "var(--gold)", flexShrink: 0 }}
              />
              <p
                className="truncate"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "var(--fg)",
                }}
              >
                Find your perfect wedding invite template
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleCta}
                className="btn-primary"
                style={{ fontSize: "0.8125rem", padding: "0.5rem 1.25rem" }}
              >
                Explore Templates
              </button>
              <button
                onClick={dismiss}
                className="p-1.5 rounded-full transition-colors"
                style={{ color: "var(--fg-light)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "var(--bg-2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "transparent";
                }}
                aria-label="Dismiss"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
