"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CityDecorImage from "./CityDecorImage";
import { galleryImages, coupleData } from "@/data/city-template-data";

const GOLD = "#C4963A";
const TEXT = "#2C1A0E";

export default function CityGallery() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + galleryImages.length) % galleryImages.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % galleryImages.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section style={{ background: TEXT }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: "center", padding: "3rem 1.5rem 1.75rem" }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.5625rem",
            fontWeight: 600,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: GOLD,
            marginBottom: "0.625rem",
          }}
        >
          ✦ &nbsp; Gallery &nbsp; ✦
        </p>
        <h2
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(1.875rem, 8vw, 2.375rem)",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Our Memories
        </h2>
      </motion.div>

      {/* Carousel */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: "4/5",
          width: "100%",
          background: "rgba(255,255,255,0.04)",
        }}
      >
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "absolute", inset: 0 }}
          >
            <CityDecorImage
              src={galleryImages[current].src}
              alt={galleryImages[current].alt}
              fill
              style={{ objectFit: "cover" }}
              fallbackStyle={{ background: "#2C1A0E" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Arrow buttons */}
        <button
          onClick={prev}
          aria-label="Previous photo"
          style={{
            position: "absolute",
            left: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(10,5,2,0.55)",
            border: `1px solid rgba(196,150,58,0.4)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(4px)",
          }}
        >
          <ChevronLeft size={18} color="white" />
        </button>

        <button
          onClick={next}
          aria-label="Next photo"
          style={{
            position: "absolute",
            right: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(10,5,2,0.55)",
            border: `1px solid rgba(196,150,58,0.4)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            backdropFilter: "blur(4px)",
          }}
        >
          <ChevronRight size={18} color="white" />
        </button>

        {/* Counter */}
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "1rem",
            zIndex: 10,
            background: "rgba(10,5,2,0.55)",
            border: `1px solid rgba(196,150,58,0.3)`,
            borderRadius: 100,
            padding: "0.25rem 0.75rem",
            backdropFilter: "blur(4px)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
              fontSize: "0.6875rem",
              fontWeight: 600,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            {current + 1} / {galleryImages.length}
          </span>
        </div>
      </div>

      {/* Dot indicators */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "1.25rem 0 2rem",
        }}
      >
        {galleryImages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            aria-label={`Go to photo ${i + 1}`}
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              borderRadius: 100,
              background:
                i === current ? GOLD : "rgba(196,150,58,0.3)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Hashtag */}
      <p
        style={{
          fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
          fontSize: "0.75rem",
          fontWeight: 500,
          color: "rgba(196,150,58,0.7)",
          textAlign: "center",
          paddingBottom: "2.5rem",
          letterSpacing: "0.04em",
        }}
      >
        {coupleData.hashtag}
      </p>
    </section>
  );
}
