"use client";

import { motion } from "framer-motion";
import RevealSection from "@/components/Revealsection";

const TESTIMONIOS = [
  {
    texto:
      "El mejor restaurante peruano que he probado en España. Y he probado muchos. Esto es otra dimensión completamente diferente.",
    autor: "Carolina M.",
    origen: "Puerto de Sagunto",
    fuente: "Google Reviews",
    stars: 5,
  },
  {
    texto:
      "No es una cena, es una experiencia. Cada plato cuenta una historia y el equipo lo hace todo parecer mágico.",
    autor: "Pablo R.",
    origen: "Valencia",
    fuente: "Google Reviews",
    stars: 5,
  },
  {
    texto:
      "El ceviche parece arte. Lo miré dos minutos antes de comerlo y lo lamenté porque desapareció demasiado rápido.",
    autor: "Sofía L.",
    origen: "Valencia",
    fuente: "TripAdvisor",
    stars: 5,
  },
  {
    texto:
      "El ambiente es único. Oscuro, íntimo, con esa música de fondo. Vine solo a cenar y me quedé más de tres horas.",
    autor: "Marco A.",
    origen: "Valencia",
    fuente: "Google Reviews",
    stars: 5,
  },
  {
    texto:
      "El arroz con mariscos meloso es lo más cercano al cielo que he probado. El maridaje con Gandía, simplemente perfecto.",
    autor: "Elena V.",
    origen: "Valencia",
    fuente: "Google Reviews",
    stars: 5,
  },
  {
    texto:
      "Celebré mi aniversario aquí y fue absolutamente mágico. El equipo hizo que nos sintiéramos especiales en todo momento.",
    autor: "Lucía T.",
    origen: "Valencia",
    fuente: "TripAdvisor",
    stars: 5,
  },
];

function StarIcon() {
  return (
    <div
      className="star-shape"
      style={{
        width: "11px",
        height: "11px",
        background: "#C9A84C",
        flexShrink: 0,
      }}
    />
  );
}

function TestimonioCard({
  testimonio,
  index,
}: {
  testimonio: (typeof TESTIMONIOS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.75,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4, transition: { duration: 0.28 } }}
      style={{
        background: "#120E0A",
        border: "1px solid rgba(201,168,76,0.1)",
        padding: "clamp(24px, 4vw, 36px) clamp(20px, 3vw, 30px)",
        position: "relative",
        overflow: "hidden",
        transition: "border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(201,168,76,0.28)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(201,168,76,0.1)";
      }}
    >
      {/* Comilla decorativa */}
      <div
        style={{
          position: "absolute",
          top: "-12px",
          left: "22px",
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontSize: "90px",
          color: "#C9A84C",
          opacity: 0.14,
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        "
      </div>

      {/* Estrellas */}
      <div
        style={{
          display: "flex",
          gap: "4px",
          marginBottom: "18px",
        }}
      >
        {Array.from({ length: testimonio.stars }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Texto */}
      <p
        style={{
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontSize: "clamp(17px, 2.2vw, 20px)",
          fontWeight: 300,
          fontStyle: "italic",
          color: "#F5EDD8",
          lineHeight: 1.55,
          marginBottom: "22px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {testimonio.texto}
      </p>

      {/* Autor */}
      <div>
        <p
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#C9A84C",
            fontWeight: 400,
          }}
        >
          {testimonio.autor}
        </p>
        <p
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "10px",
            color: "rgba(245,237,216,0.28)",
            marginTop: "3px",
            fontWeight: 300,
          }}
        >
          {testimonio.origen} · {testimonio.fuente}
        </p>
      </div>
    </motion.div>
  );
}

export default function TestimoniosSection() {
  return (
    <div style={{ background: "#0A0806", padding: "clamp(64px, 10vw, 120px) 0" }}>
      <div style={{ padding: "0 clamp(20px, 5vw, 80px)" }}>
        {/* Header */}
        <RevealSection style={{ textAlign: "center", marginBottom: "60px" }}>
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
            Lo que dicen
          </span>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(34px, 5vw, 62px)",
              fontWeight: 300,
              color: "#F5EDD8",
              marginBottom: "16px",
            }}
          >
            Experiencias que{" "}
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>perduran</em>
          </h2>
          <div className="deco-line" />
        </RevealSection>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "2px",
            background: "rgba(201,168,76,0.05)",
          }}
        >
          {TESTIMONIOS.map((t, i) => (
            <TestimonioCard key={t.autor} testimonio={t} index={i} />
          ))}
        </div>

        {/* Nota */}
        <RevealSection style={{ textAlign: "center", marginTop: "36px" }}>
          <p
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "9px",
              letterSpacing: "3px",
              color: "rgba(201,168,76,0.3)",
              textTransform: "uppercase",
              fontWeight: 300,
            }}
          >
            ★ 4.9 / 5 · más de 300 reseñas verificadas
          </p>
        </RevealSection>
      </div>
    </div>
  );
}