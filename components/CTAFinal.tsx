"use client";

import { motion } from "framer-motion";
import RevealSection from "@/components/Revealsection";

interface CTAFinalProps {
  onReserva: () => void;
}

export default function CTAFinal({ onReserva }: CTAFinalProps) {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0A0806",
      }}
    >
      {/* Fondos */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Glow vino central */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(107,31,42,0.55) 0%, rgba(10,8,6,0.95) 65%)",
          }}
        />
        {/* Mandala SVG */}
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.06,
          }}
          viewBox="0 0 1400 700"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle
            cx="700"
            cy="350"
            r="480"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="0.5"
          />
          <circle
            cx="700"
            cy="350"
            r="340"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="0.5"
          />
          <circle
            cx="700"
            cy="350"
            r="200"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="0.5"
          />
          <circle
            cx="700"
            cy="350"
            r="90"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="0.5"
          />
          <line
            x1="700"
            y1="0"
            x2="700"
            y2="700"
            stroke="#C9A84C"
            strokeWidth="0.3"
          />
          <line
            x1="0"
            y1="350"
            x2="1400"
            y2="350"
            stroke="#C9A84C"
            strokeWidth="0.3"
          />
          <line
            x1="220"
            y1="0"
            x2="1180"
            y2="700"
            stroke="#C9A84C"
            strokeWidth="0.2"
          />
          <line
            x1="1180"
            y1="0"
            x2="220"
            y2="700"
            stroke="#C9A84C"
            strokeWidth="0.2"
          />
        </svg>
        {/* Glow superior dorado sutil */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: "2px",
            background:
              "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)",
          }}
        />
      </div>

      {/* Contenido */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "700px",
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 60px)",
          width: "100%",
        }}
      >
        <RevealSection>
          {/* Eyebrow */}
          <span
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "9.5px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "#C9A84C",
              display: "block",
              marginBottom: "28px",
              fontWeight: 300,
            }}
          >
            ¿Listo para el viaje?
          </span>

          {/* Título */}
          <h2
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(52px, 9vw, 100px)",
              lineHeight: 1.0,
              fontWeight: 300,
              color: "#F5EDD8",
              marginBottom: "26px",
            }}
          >
            Tu mesa
            <br />
            ya está{" "}
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>lista</em>
          </h2>

          {/* Línea */}
          <div className="deco-line" style={{ marginBottom: "26px" }} />

          {/* Subtítulo */}
          <p
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "clamp(13px, 1.4vw, 15px)",
              color: "rgba(245,237,216,0.55)",
              lineHeight: 1.85,
              marginBottom: "44px",
              fontWeight: 300,
            }}
          >
            Descubre una experiencia peruana que conecta sabor, energía y
            emoción. Un lugar donde cada visita es un recuerdo imborrable.
          </p>

          {/* Botón CTA gigante */}
          <motion.button
            onClick={onReserva}
            className="btn-primary"
            style={{ fontSize: "12px", padding: "20px 60px" }}
            whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
            whileTap={{ scale: 0.98 }}
          >
            Reservar Experiencia
          </motion.button>

          {/* Teléfono */}
          <p
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "10px",
              letterSpacing: "3px",
              color: "rgba(201,168,76,0.3)",
              textTransform: "uppercase",
              marginTop: "26px",
              fontWeight: 300,
            }}
          >
            O llámanos · +34 91 XXX XX XX
          </p>
        </RevealSection>
      </div>
    </div>
  );
}