"use client";

import { motion } from "framer-motion";
import RevealSection from "@/components/Revealsection";

const GALERIA_ITEMS = [
  {
    titulo: "Sala Principal",
    subtitulo: "Ambiente cálido e íntimo",
    bg: "linear-gradient(160deg, #1a0e08 0%, #0d0806 100%)",
    accentColor: "rgba(201,168,76,0.3)",
    simbolo: "♦",
    svgContent: "sala",
  },
  {
    titulo: "Ceviche Bar",
    subtitulo: "Mariscos del día",
    bg: "linear-gradient(135deg, #0a1520 0%, #0d0806 100%)",
    accentColor: "rgba(24,95,165,0.25)",
    simbolo: "◈",
    svgContent: "bar",
  },
  {
    titulo: "Mesa del Chef",
    subtitulo: "Experiencia privada",
    bg: "linear-gradient(135deg, #15080a 0%, #0d0806 100%)",
    accentColor: "rgba(158,51,69,0.3)",
    simbolo: "✦",
    svgContent: "chef",
  },
  {
    titulo: "Terraza",
    subtitulo: "Al aire libre",
    bg: "linear-gradient(135deg, #0c100d 0%, #0d0806 100%)",
    accentColor: "rgba(29,158,117,0.2)",
    simbolo: "❋",
    svgContent: "terraza",
  },
  {
    titulo: "Bodega de Vinos",
    subtitulo: "Vicente Gandía collection",
    bg: "linear-gradient(135deg, #100a08 0%, #0d0806 100%)",
    accentColor: "rgba(232,200,122,0.25)",
    simbolo: "◉",
    svgContent: "bodega",
  },
];

function GaleriaItem({
  item,
  index,
}: {
  item: (typeof GALERIA_ITEMS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ scale: 1.015, transition: { duration: 0.35 } }}
      style={{
        minWidth: "clamp(240px, 30vw, 360px)",
        height: "480px",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        cursor: "pointer",
        background: item.bg,
      }}
    >
      {/* Fondo radial de color */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 45% 40%, ${item.accentColor}, transparent 65%)`,
        }}
      />

      {/* SVG decorativo */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.12,
        }}
        viewBox="0 0 360 480"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="180"
          cy="200"
          r="120"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.5"
        />
        <circle
          cx="180"
          cy="200"
          r="75"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.5"
        />
        <circle
          cx="180"
          cy="200"
          r="35"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.5"
        />
        <line
          x1="60"
          y1="200"
          x2="300"
          y2="200"
          stroke="#C9A84C"
          strokeWidth="0.4"
        />
        <line
          x1="180"
          y1="80"
          x2="180"
          y2="320"
          stroke="#C9A84C"
          strokeWidth="0.4"
        />
      </svg>

      {/* Símbolo grande central */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          fontSize: "90px",
          color: "#C9A84C",
          opacity: 0.06,
          lineHeight: 1,
          pointerEvents: "none",
        }}
      >
        {item.simbolo}
      </div>

      {/* Overlay inferior */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "55%",
          background:
            "linear-gradient(to top, rgba(10,8,6,0.92) 0%, transparent 100%)",
        }}
      />

      {/* Texto inferior */}
      <div
        style={{
          position: "absolute",
          bottom: "28px",
          left: "24px",
          right: "24px",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "22px",
            fontWeight: 300,
            color: "#F5EDD8",
            marginBottom: "5px",
          }}
        >
          {item.titulo}
        </p>
        <p
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "9.5px",
            letterSpacing: "3px",
            color: "#C9A84C",
            textTransform: "uppercase",
            fontWeight: 300,
          }}
        >
          {item.subtitulo}
        </p>
      </div>
    </motion.div>
  );
}

export default function GaleriaSection() {
  return (
    <div
      style={{
        background: "#120E0A",
        padding: "clamp(64px, 10vw, 120px) 0",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ padding: "0 clamp(20px, 5vw, 80px)", marginBottom: "52px" }}>
        <RevealSection style={{ textAlign: "center" }}>
          <span
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "9.5px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "#C9A84C",
              display: "block",
              marginBottom: "16px",
              fontWeight: 300,
            }}
          >
            El Ambiente
          </span>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(34px, 5vw, 62px)",
              fontWeight: 300,
              color: "#F5EDD8",
            }}
          >
            Donde el espacio{" "}
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>inspira</em>
          </h2>
        </RevealSection>
      </div>

      {/* Galería horizontal con scroll */}
      <div
        className="gallery-scroll"
        style={{
          display: "flex",
          gap: "3px",
          overflowX: "auto",
          padding: "0 clamp(20px, 5vw, 80px)",
        }}
      >
        {GALERIA_ITEMS.map((item, i) => (
          <GaleriaItem key={item.titulo} item={item} index={i} />
        ))}
      </div>

      {/* Indicador de scroll */}
      <div
        style={{
          padding: "28px clamp(20px, 5vw, 80px) 0",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "rgba(201,168,76,0.1)",
          }}
        >
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "30%" }}
            viewport={{ once: false }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ height: "1px", background: "#C9A84C" }}
          />
        </div>
        <span
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "8.5px",
            letterSpacing: "3px",
            color: "rgba(201,168,76,0.35)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Desliza →
        </span>
      </div>
    </div>
  );
}