"use client";

import { motion } from "framer-motion";
import CityDecorImage from "./CityDecorImage";
import { coupleData, heroImages } from "@/data/city-template-data";

const GOLD = "#C4963A";

export default function CityHero() {
  return (
    <div
      style={{
        position: "relative",
        height: "100dvh",
        minHeight: 580,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background image */}
      <CityDecorImage
        src={heroImages.bg}
        alt="Wedding background"
        fill
        style={{ objectFit: "cover", objectPosition: "center top" }}
        priority
        fallbackStyle={{ background: "#2C1A0E" }}
      />

      {/* Layered overlays for cinematic depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,5,2,0.92) 0%, rgba(10,5,2,0.45) 45%, rgba(10,5,2,0.2) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 2rem",
          width: "100%",
        }}
      >
        {/* Ornament */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.5625rem",
            fontWeight: 600,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: GOLD,
            marginBottom: "1.5rem",
          }}
        >
          ✦ &nbsp; The Wedding of &nbsp; ✦
        </motion.p>

        {/* Groom name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(3.25rem, 15vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.0,
            color: "white",
            margin: 0,
          }}
        >
          {coupleData.groom.name}
        </motion.h1>

        {/* & */}
        <motion.p
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55, duration: 0.6, ease: "backOut" }}
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(1.75rem, 8vw, 2.75rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: GOLD,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          &amp;
        </motion.p>

        {/* Bride name */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily:
              "var(--font-invite-serif, 'Cormorant Garamond', Georgia, serif)",
            fontSize: "clamp(3.25rem, 15vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.0,
            color: "white",
            margin: 0,
          }}
        >
          {coupleData.bride.name}
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: 1,
            width: 72,
            background: GOLD,
            margin: "1.75rem auto",
            transformOrigin: "center",
          }}
        />

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.88, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.8125rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          {coupleData.displayDate}
        </motion.p>

        {/* Hashtag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-sans, 'Manrope', sans-serif)",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.06em",
            color: GOLD,
            marginTop: "0.5rem",
            opacity: 0.85,
          }}
        >
          {coupleData.hashtag}
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "2.25rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 1,
            height: 44,
            background:
              "linear-gradient(to bottom, transparent, rgba(196,150,58,0.7))",
          }}
        />
      </motion.div>
    </div>
  );
}
