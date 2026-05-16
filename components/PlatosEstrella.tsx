"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";
import RevealSection from "@/components/Revealsection";

const PLATOS = [
  {
    nombre: "Lomo Saltado",
    descripcion:
      "Clásico salteado de lomo de ternera, cebolla morada, tomate y salsa criolla. Servido con papas fritas y arroz blanco. El plato que define la fusión chino-peruana.",
    precio: "18 €",
    chakra: "Ajna · Tercer Ojo",
    vino: "Ceramic Tinto",
    color: "rgba(220,120,40,0.1)",
    simbolo: "⬡",
    badge: "Icónico",
  },
  {
    nombre: "Ceviche Norteño",
    descripcion:
      "Cortes gruesos de corvina, marinados con lima, ají limo, cebolla morada, choclo y boniato. Acompañado de tortilla de choclo. La pureza del Pacífico en cada bocado.",
    precio: "17 €",
    chakra: "Muladhara · Raíz",
    vino: "Ceramic Rosado",
    color: "rgba(40,140,220,0.1)",
    simbolo: "♦",
    badge: "Norteño",
  },
  {
    nombre: "Arroz con Mariscos Meloso",
    descripcion:
      "Arroz cremoso con variedad de mariscos frescos, ajíes y toque criollo. Un abrazo cálido del mar mediterráneo con el alma peruana. Para compartir y disfrutar.",
    precio: "19 €",
    chakra: "Anahata · Corazón",
    vino: "Bobal Dulce",
    color: "rgba(50,180,130,0.1)",
    simbolo: "❋",
    badge: "Estrella",
  },
  {
    nombre: "Tiradito Nikkei",
    descripcion:
      "Finas láminas de corvina con crema de ají amarillo al estilo nikkei, toques de soya y sésamo tostado. La fusión japonesa-peruana llevada a su máxima expresión.",
    precio: "17 €",
    chakra: "Svadhisthana · Sacro",
    vino: "Bobal Blanco",
    color: "rgba(100,50,200,0.1)",
    simbolo: "◈",
    badge: "Chef",
  },
];

function EstellaCard({
  plato,
  index,
}: {
  plato: (typeof PLATOS)[0];
  index: number;
}) {
  const { ref, visible } = useReveal(0.1);
  const isLarge = index === 0; // Primera card ocupa más espacio en desktop

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        gridRow: isLarge ? "span 2" : "span 1",
        position: "relative",
        overflow: "hidden",
        background: "#120E0A",
        border: "1px solid rgba(201,168,76,0.09)",
        minHeight: isLarge ? "420px" : "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        cursor: "default",
      }}
      whileHover={{ borderColor: "rgba(201,168,76,0.28)", transition: { duration: 0.3 } }}
    >
      {/* Fondo visual artístico con SVG */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 40% 40%, ${plato.color}, transparent 65%)`,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* SVG decorativo único por plato */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.07,
        }}
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="200"
          cy="180"
          r="120"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.5"
        />
        <circle
          cx="200"
          cy="180"
          r="80"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.5"
        />
        <circle
          cx="200"
          cy="180"
          r="40"
          fill="none"
          stroke="#C9A84C"
          strokeWidth="0.5"
        />
        <line
          x1="80"
          y1="180"
          x2="320"
          y2="180"
          stroke="#C9A84C"
          strokeWidth="0.4"
        />
        <line
          x1="200"
          y1="60"
          x2="200"
          y2="300"
          stroke="#C9A84C"
          strokeWidth="0.4"
        />
      </svg>

      {/* Símbolo grande decorativo */}
      <div
        style={{
          position: "absolute",
          top: "clamp(20px, 4%, 32px)",
          right: "clamp(20px, 4%, 32px)",
          fontSize: "clamp(48px, 8vw, 72px)",
          color: "#C9A84C",
          opacity: 0.07,
          lineHeight: 1,
          pointerEvents: "none",
        }}
      >
        {plato.simbolo}
      </div>

      {/* Badge */}
      {plato.badge && (
        <span
          style={{
            position: "absolute",
            top: "clamp(16px, 3%, 24px)",
            left: "clamp(16px, 3%, 24px)",
            background: "rgba(201,168,76,0.12)",
            border: "1px solid rgba(201,168,76,0.3)",
            color: "#C9A84C",
            fontSize: "7.5px",
            letterSpacing: "2.5px",
            padding: "4px 10px",
            textTransform: "uppercase",
            fontFamily: "Montserrat, system-ui, sans-serif",
          }}
        >
          {plato.badge}
        </span>
      )}

      {/* Contenido inferior */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(20px, 4%, 32px)",
          background:
            "linear-gradient(to top, rgba(10,8,6,0.95) 0%, rgba(10,8,6,0.4) 60%, transparent 100%)",
        }}
      >
        {/* Chakra */}
        <p
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "8.5px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#C9A84C",
            opacity: 0.7,
            marginBottom: "8px",
            fontWeight: 300,
          }}
        >
          {plato.chakra}
        </p>

        {/* Nombre */}
        <h3
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(24px, 3.5vw, 34px)",
            fontWeight: 300,
            color: "#F5EDD8",
            marginBottom: "10px",
            lineHeight: 1.15,
          }}
        >
          {plato.nombre}
        </h3>

        {/* Descripción – solo en la card grande */}
        {isLarge && (
          <p
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "12px",
              color: "rgba(245,237,216,0.5)",
              lineHeight: 1.75,
              marginBottom: "14px",
              fontWeight: 300,
              maxWidth: "420px",
            }}
          >
            {plato.descripcion}
          </p>
        )}

        {/* Precio + Vino */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "22px",
              color: "#C9A84C",
              fontWeight: 300,
            }}
          >
            {plato.precio}
          </span>
          <span
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "9px",
              letterSpacing: "2px",
              color: "#9E3345",
              textTransform: "uppercase",
              fontWeight: 300,
            }}
          >
            🍷 {plato.vino}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function PlatosEstrella() {
  return (
    <div style={{ background: "#1A1410", padding: "clamp(64px, 10vw, 120px) 0" }}>
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
            Imprescindibles
          </span>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(34px, 5vw, 62px)",
              fontWeight: 300,
              color: "#F5EDD8",
            }}
          >
            Platos que{" "}
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>
              definen
            </em>{" "}
            CHAKRA
          </h2>
        </RevealSection>

        {/* Grid asimétrico */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "3px",
          }}
        >
          {/* En desktop: primera columna más larga */}
          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr",
              gap: "3px",
            }}
            className="col-span-1 lg:col-span-1"
          >
            <EstellaCard plato={PLATOS[0]} index={0} />
          </div>

          {/* Resto de platos */}
          {PLATOS.slice(1).map((plato, i) => (
            <EstellaCard key={plato.nombre} plato={plato} index={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}