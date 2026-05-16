"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    color: "rgba(220,120,40,0.2)", 
    simbolo: "⬡",
    badge: "Icónico",
    imagen: "/images/guisos/lomo-saltado.jpg", 
  },
  {
    nombre: "Ceviche Norteño",
    descripcion:
      "Cortes gruesos de corvina, marinados con lima, ají limo, cebolla morada, choclo y boniato. Acompañado de tortilla de choclo. La pureza del Pacífico en cada bocado.",
    precio: "17 €",
    chakra: "Muladhara · Raíz",
    vino: "Ceramic Rosado",
    color: "rgba(40,140,220,0.2)",
    simbolo: "♦",
    badge: "Norteño",
    imagen: "/images/ceviches/ceviche-norteño.png",
  },
  {
    nombre: "Arroz con Mariscos Meloso",
    descripcion:
      "Arroz cremoso con variedad de mariscos frescos, ajíes y toque criollo. Un abrazo cálido del mar mediterráneo con el alma peruana. Para compartir y disfrutar.",
    precio: "19 €",
    chakra: "Anahata · Corazón",
    vino: "Bobal Dulce",
    color: "rgba(50,180,130,0.2)",
    simbolo: "❋",
    badge: "Estrella",
    imagen: "/images/arroces/arroz-mariscos.jpg",
  },
  {
    nombre: "Tiradito Nikkei",
    descripcion:
      "Finas láminas de corvina con crema de ají amarillo al estilo nikkei, toques de soya y sésamo tostado. La fusion japonesa-peruana llevada a su máxima expresión.",
    precio: "17 €",
    chakra: "Svadhisthana · Sacro",
    vino: "Bobal Blanco",
    color: "rgba(100,50,200,0.2)",
    simbolo: "◈",
    badge: "Chef",
    imagen: "/images/tiraditos/tiradito-nikkei.jpg",
  },
];

function EstellaCard({
  plato,
}: {
  plato: (typeof PLATOS)[0];
}) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#120E0A",
        border: "1px solid rgba(201,168,76,0.14)",
        height: "460px", // 💡 Altura máxima premium estandarizada para todos por igual
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        cursor: "default",
      }}
    >
      {/* 📸 Fotos reales de fondo */}
      {plato.imagen && (
        <img
          src={plato.imagen}
          alt={plato.nombre}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.55, 
            zIndex: 0,
          }}
        />
      )}

      {/* Capa de color del Chakra */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 30%, ${plato.color}, transparent 80%)`,
          mixBlendMode: "screen",
          zIndex: 1,
        }}
      />

      {/* Símbolo místico */}
      <div
        style={{
          position: "absolute",
          top: "24px",
          right: "24px",
          fontSize: "24px",
          color: "#C9A84C",
          opacity: 0.4,
          lineHeight: 1,
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        {plato.simbolo}
      </div>

      {/* Badge */}
      {plato.badge && (
        <span
          style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            background: "rgba(18, 14, 10, 0.85)", 
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(201,168,76,0.3)",
            color: "#C9A84C",
            fontSize: "7.5px",
            letterSpacing: "2.5px",
            padding: "4px 10px",
            textTransform: "uppercase",
            fontFamily: "Montserrat, system-ui, sans-serif",
            zIndex: 2,
          }}
        >
          {plato.badge}
        </span>
      )}

      {/* Texto interno con soporte de degradado oscuro completo */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "32px",
          background:
            "linear-gradient(to top, rgba(10,8,6,1) 0%, rgba(10,8,6,0.95) 70%, rgba(10,8,6,0.4) 92%, transparent 100%)",
        }}
      >
        <p
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "8.5px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#C9A84C",
            opacity: 0.9,
            marginBottom: "8px",
            fontWeight: 300,
          }}
        >
          {plato.chakra}
        </p>

        <h3
          style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontSize: "clamp(24px, 3.5vw, 32px)",
            fontWeight: 300,
            color: "#F5EDD8",
            marginBottom: "10px",
            lineHeight: 1.15,
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {plato.nombre}
        </h3>

        <p
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "11.5px",
            color: "rgba(245,237,216,0.7)",
            lineHeight: 1.65,
            marginBottom: "14px",
            fontWeight: 300,
          }}
        >
          {plato.descripcion}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
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
              background: "rgba(10,8,6,0.5)",
              padding: "2px 6px",
            }}
          >
            🍷 {plato.vino}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PlatosEstrella() {
  const { ref, visible } = useReveal(0.1);
  const [startIndex, setStartIndex] = useState(0);

  // 💡 Configuración del Carrusel Responsivo:
  // Muestra 3 platos simultáneos en pantallas grandes y de manera decreciente en tablets/móviles
  const platosVisibles = 3; 

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % PLATOS.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + PLATOS.length) % PLATOS.length);
  };

  // Generamos un array rotativo infinito para simular el carrusel sin saltos bruscos
  const itemsAMostrar = Array.from({ length: platosVisibles }).map((_, i) => {
    return PLATOS[(startIndex + i) % PLATOS.length];
  });

  return (
    <div style={{ background: "#1A1410", padding: "clamp(64px, 10vw, 120px) 0", overflow: "hidden" }}>
      <div style={{ padding: "0 clamp(20px, 5vw, 80px)", position: "relative" }}>
        
        {/* Header */}
        <RevealSection style={{ textAlign: "center", marginBottom: "48px" }}>
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
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>definen</em>{" "}
            CHAKRA
          </h2>
        </RevealSection>

        {/* 🏹 BOTONES DE FLECHAS (Alineados a los extremos del contenedor) */}
        <div style={{ 
          display: "flex", 
          justifyContent: "flex-end", 
          gap: "12px", 
          marginBottom: "24px",
          paddingRight: "4px"
        }}>
          <button
            onClick={prevSlide}
            style={{
              background: "none",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#C9A84C",
              fontSize: "18px",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.1)";
              e.currentTarget.style.borderColor = "#C9A84C";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
            }}
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            style={{
              background: "none",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#C9A84C",
              fontSize: "18px",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(201,168,76,0.1)";
              e.currentTarget.style.borderColor = "#C9A84C";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
            }}
          >
            ›
          </button>
        </div>

        {/* 📊 CONTENEDOR ANMADO DEL CARRUSEL */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            // Un grid fluido que en PC muestra 3 columnas perfectas del mismo tamaño gigante
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))",
            gap: "24px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {itemsAMostrar.map((plato, idx) => (
              <motion.div
                key={plato.nombre + "-" + startIndex + "-" + idx}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ width: "100%" }}
              >
                <EstellaCard plato={plato} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}