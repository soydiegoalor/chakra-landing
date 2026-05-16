"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  onReserva: () => void;
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 2.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.88, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero({ onReserva }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  const scrollToChakras = () => {
    document.getElementById("chakras")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCarta = () => {
    document.getElementById("carta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        height: "100svh",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0A0806",
      }}
    >
      {/* ── Fondo: gradientes y mandala ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 28% 52%, rgba(107,31,42,0.42) 0%, transparent 58%), radial-gradient(ellipse at 72% 28%, rgba(201,168,76,0.11) 0%, transparent 50%)",
          }}
        />
        {/* Mandala SVG de fondo */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.045,
          }}
          viewBox="0 0 1400 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="700" cy="450" r="420" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="700" cy="450" r="280" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="700" cy="450" r="160" fill="none" stroke="#C9A84C" strokeWidth="0.5" />
          <circle cx="200" cy="180" r="250" fill="none" stroke="#C9A84C" strokeWidth="0.4" />
          <circle cx="1200" cy="720" r="220" fill="none" stroke="#C9A84C" strokeWidth="0.4" />
          <line x1="0" y1="450" x2="1400" y2="450" stroke="#C9A84C" strokeWidth="0.3" />
          <line x1="700" y1="0" x2="700" y2="900" stroke="#C9A84C" strokeWidth="0.3" />
          <line x1="0" y1="0" x2="1400" y2="900" stroke="#C9A84C" strokeWidth="0.18" />
          <line x1="1400" y1="0" x2="0" y2="900" stroke="#C9A84C" strokeWidth="0.18" />
        </svg>
        {/* Glow inferior vino */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background:
              "linear-gradient(to top, rgba(107,31,42,0.22) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Contenido con parallax ── */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          width: "100%",
          maxWidth: "900px",
          padding: "0 20px",
        }}
      >
        <motion.div variants={stagger} initial="hidden" animate="visible">
          {/* Eyebrow */}
          <motion.p
            variants={item}
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "9.5px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "#C9A84C",
              fontWeight: 300,
              marginBottom: "28px",
            }}
          >
            Puerto de Sagunto · Cocina Viva · Alma Peruana
          </motion.p>

          {/* Línea deco */}
          <motion.div variants={item} className="deco-line" style={{ marginBottom: "28px" }} />

          {/* Título */}
          <motion.h1
            variants={item}
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(42px, 8vw, 96px)",
              lineHeight: 1.02,
              fontWeight: 300,
              color: "#F5EDD8",
              marginBottom: "26px",
              letterSpacing: "1px",
            }}
          >
            Una experiencia peruana
            <br />
            que despierta{" "}
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>
              todos tus sentidos
            </em>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={item}
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "clamp(12px, 1.4vw, 15px)",
              fontWeight: 300,
              lineHeight: 1.85,
              color: "rgba(245,237,216,0.62)",
              maxWidth: "580px",
              margin: "0 auto 48px",
              letterSpacing: "0.25px",
            }}
          >
            Cada plato representa la energía de un chakra. Sabores del Perú
            reinterpretados con alma mediterránea, maridados con los vinos
            de Vicente Gandía.
          </motion.p>

          {/* Botones */}
          <motion.div
            variants={item}
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button className="btn-primary" onClick={onReserva}>
              Reservar Mesa
            </button>
            <button className="btn-secondary" onClick={scrollToCarta}>
              Ver Carta
            </button>
          </motion.div>

          {/* Separadores de categorías */}
          <motion.div
            variants={item}
            style={{
              display: "flex",
              gap: "0",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "52px",
            }}
          >
            {["Ceviches", "Tiraditos", "Causas", "Guisos", "Arroces"].map(
              (cat, i, arr) => (
                <span
                  key={cat}
                  style={{
                    fontFamily: "Montserrat, system-ui, sans-serif",
                    fontSize: "8.5px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: "rgba(201,168,76,0.38)",
                    fontWeight: 300,
                  }}
                >
                  {cat}
                  {i < arr.length - 1 && (
                    <span style={{ margin: "0 10px", color: "rgba(201,168,76,0.18)" }}>
                      ·
                    </span>
                  )}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.button
        onClick={scrollToChakras}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 10,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        aria-label="Descubrir"
      >
        <div className="scroll-line-bar" style={{ height: "60px" }} />
        <span
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "7.5px",
            letterSpacing: "4px",
            color: "#8A7A6A",
            textTransform: "uppercase",
          }}
        >
          Descubrir
        </span>
      </motion.button>

      {/* ── Texto lateral decorativo (solo desktop) ── */}
      <div
        className="hidden xl:block"
        style={{
          position: "absolute",
          right: "28px",
          top: "50%",
          transform: "translateY(-50%) rotate(180deg)",
          writingMode: "vertical-rl",
          fontFamily: "Montserrat, system-ui, sans-serif",
          fontSize: "7.5px",
          letterSpacing: "5px",
          color: "rgba(201,168,76,0.22)",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}
      >
        Cocina · Energía · Emoción
      </div>
      <div
        className="hidden xl:block"
        style={{
          position: "absolute",
          left: "28px",
          top: "50%",
          transform: "translateY(-50%)",
          writingMode: "vertical-rl",
          fontFamily: "Montserrat, system-ui, sans-serif",
          fontSize: "7.5px",
          letterSpacing: "5px",
          color: "rgba(201,168,76,0.22)",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}
      >
        Puerto de Sagunto · España · Perú
      </div>
    </div>
  );
}