"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import RevealSection from "@/components/Revealsection";

const CHAKRAS = [
  {
    id: "muladhara",
    nombre: "Muladhara · Raíz",
    titulo: "Ceviches",
    simbolo: "♦",
    subtitulo: "Para despertar el placer de vivir",
    descripcion:
      "La pureza del limón, el ají y el pescado fresco que conecta con la tierra del Pacífico. El comienzo de todo viaje sensorial.",
    vino: "Ceramic Rosado · Vicente Gandía",
    glowColor: "rgba(220,50,50,0.14)",
  },
  {
    id: "svadhisthana",
    nombre: "Svadhisthana · Sacro",
    titulo: "Tiraditos",
    simbolo: "◈",
    subtitulo: "Para abrir la creatividad y el gozo",
    descripcion:
      "El fluir de la fusión nikkei. Seda en el paladar, pasión en cada corte. La creatividad líquida de la costa peruana.",
    vino: "Bobal Blanco · Vicente Gandía",
    glowColor: "rgba(230,120,40,0.14)",
  },
  {
    id: "manipura",
    nombre: "Manipura · Plexo Solar",
    titulo: "Causas",
    simbolo: "✦",
    subtitulo: "Para fortalecer la confianza",
    descripcion:
      "Energía y poder en capas perfectas. La papa amarilla como sol concentrado. Combinaciones que encienden el fuego interior.",
    vino: "Bobal Rosado · Vicente Gandía",
    glowColor: "rgba(230,200,40,0.14)",
  },
  {
    id: "anahata",
    nombre: "Anahata · Corazón",
    titulo: "Arroces",
    simbolo: "❋",
    subtitulo: "Para calmar la ansiedad y disfrutar",
    descripcion:
      "Arroces melosos y compartidos que generan grandes conversaciones. El calor de la mesa peruana elevado al arte.",
    vino: "Bobal Dulce · Vicente Gandía",
    glowColor: "rgba(50,180,80,0.14)",
  },
  {
    id: "vishuddha",
    nombre: "Vishuddha · Garganta",
    titulo: "Piqueos",
    simbolo: "◉",
    subtitulo: "Para expresarse y compartir con fluidez",
    descripcion:
      "La voz profunda de la cocina criolla. Bocados que hablan directamente al alma. Contundencia con elegancia.",
    vino: "Bobal Rosado · Vicente Gandía",
    glowColor: "rgba(40,140,220,0.14)",
  },
  {
    id: "ajna",
    nombre: "Ajna · Tercer Ojo",
    titulo: "Guisos",
    simbolo: "⬡",
    subtitulo: "Para abrir la intuición y la visión",
    descripcion:
      "Guisos ancestrales con ingredientes mediterráneos. La profundidad del Perú interpretada con alma contemporánea.",
    vino: "Ceramic Tinto · Vicente Gandía",
    glowColor: "rgba(100,50,200,0.14)",
  },
];

function ChakraCard({
  chakra,
  index,
}: {
  chakra: (typeof CHAKRAS)[0];
  index: number;
}) {
  const { ref, visible } = useReveal(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.78,
        delay: index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5, transition: { duration: 0.28 } }}
      style={{
        position: "relative",
        background: "#1A1410",
        border: "1px solid rgba(201,168,76,0.09)",
        padding: "clamp(28px, 4vw, 40px) clamp(22px, 3vw, 32px)",
        cursor: "pointer",
        overflow: "hidden",
        transition: "border-color 0.4s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(201,168,76,0.28)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(201,168,76,0.09)";
      }}
    >
      {/* Glow hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 100%, ${chakra.glowColor}, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Símbolo */}
        <span
          style={{
            fontSize: "36px",
            color: "#C9A84C",
            display: "block",
            marginBottom: "18px",
            opacity: 0.8,
            lineHeight: 1,
          }}
        >
          {chakra.simbolo}
        </span>

        {/* Nombre chakra */}
        <p
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "8.5px",
            letterSpacing: "5px",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginBottom: "8px",
            fontWeight: 300,
          }}
        >
          {chakra.nombre}
        </p>

        {/* Título sección */}
        <h3
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(22px, 3vw, 28px)",
            fontWeight: 300,
            color: "#F5EDD8",
            marginBottom: "6px",
            lineHeight: 1.2,
          }}
        >
          {chakra.titulo}
        </h3>

        {/* Subtítulo */}
        <p
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "10px",
            color: "rgba(245,237,216,0.38)",
            marginBottom: "14px",
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          {chakra.subtitulo}
        </p>

        {/* Descripción */}
        <p
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "12px",
            color: "rgba(245,237,216,0.48)",
            lineHeight: 1.78,
            fontWeight: 300,
          }}
        >
          {chakra.descripcion}
        </p>

        {/* Vino */}
        <div
          style={{
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: "1px solid rgba(201,168,76,0.1)",
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "9.5px",
            letterSpacing: "2px",
            color: "#9E3345",
            textTransform: "uppercase",
            fontWeight: 300,
          }}
        >
          🍷 {chakra.vino}
        </div>
      </div>
    </motion.div>
  );
}

export default function ChakrasSection() {
  return (
    <div style={{ background: "#120E0A", padding: "clamp(64px, 10vw, 120px) 0" }}>
      <div style={{ padding: "0 clamp(20px, 5vw, 80px)" }}>
        {/* Header */}
        <RevealSection className="text-center" style={{ maxWidth: "680px", margin: "0 auto 72px" }}>
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
            El Concepto
          </span>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(34px, 5vw, 62px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "#F5EDD8",
              marginBottom: "18px",
            }}
          >
            Un viaje a través de{" "}
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>
              los chakras
            </em>
          </h2>
          <div className="deco-line" style={{ marginBottom: "20px" }} />
          <p
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "13.5px",
              color: "rgba(245,237,216,0.52)",
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            En CHAKRA concebimos la cocina como un viaje de equilibrio. Cada
            plato representa la energía de un chakra y se inspira en la riqueza
            del Perú, interpretada con productos del Mediterráneo y acompañada
            por los vinos de Vicente Gandía.
          </p>
        </RevealSection>

        {/* Grid de cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "2px",
            background: "rgba(201,168,76,0.06)",
          }}
        >
          {CHAKRAS.map((chakra, i) => (
            <ChakraCard key={chakra.id} chakra={chakra} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}