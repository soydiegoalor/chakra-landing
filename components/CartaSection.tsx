"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealSection from "@/components/Revealsection";

interface Plato {
  nombre: string;
  descripcion: string;
  precio: string;
  badge?: string;
  alergenos?: string;
  imagen?: string;
}

interface Categoria {
  id: string;
  label: string;
  simbolo: string;
  chakra: string;
  vino: string;
  platos: Plato[];
}

const CATEGORIAS: Categoria[] = [
  {
    id: "ceviches",
    label: "Ceviches",
    simbolo: "♦",
    chakra: "Muladhara · Raíz",
    vino: "Ceramic Rosado · Vicente Gandía",
    platos: [
      {
        nombre: "Ceviche Norteño",
        descripcion:
          "Cortes gruesos de corvina, marinados con lima, ají limo, cebolla morada, choclo y boniato. Acompañado de tortilla de choclo.",
        precio: "17 €",
        alergenos: "(4)",
        imagen: "/images/ceviches/ceviche-norteño.png",
      },
      {
        nombre: "Ceviche Carretillero",
        descripcion:
          "Estilo callejero: corvina, calamar empanizado, chicharrón crocante, cancha serrana con leche de tigre de base.",
        precio: "19 €",
        badge: "Favorito",
        alergenos: "(1, 2, 3, 4, 13)",
        imagen: "/images/ceviches/ceviche-carretillero.jpg",
      },
      {
        nombre: "Ceviche Mixto",
        descripcion:
          "Corvina, calamar y langostinos en leche de tigre tradicional. Camote, choclo y cebolla morada.",
        precio: "20 €",
        alergenos: "(2, 4, 13)",
        imagen: "/images/ceviches/ceviche-mixto.jpg",
      },
    ],
  },
  {
    id: "tiraditos",
    label: "Tiraditos",
    simbolo: "◈",
    chakra: "Svadhisthana · Sacro",
    vino: "Bobal Blanco · Vicente Gandía",
    platos: [
      {
        nombre: "Tiradito de Ají Amarillo",
        descripcion:
          "Finas láminas de corvina en salsa cremosa de ají amarillo.",
        precio: "16 €",
        alergenos: "(4)",
        imagen: "/images/tiraditos/tiradito-aji-amarillo.jpg",
      },
      {
        nombre: "Tiradito Nikkei",
        descripcion:
          "Finas láminas de corvina con crema de ají amarillo al estilo nikkei, toques de soya y sésamo tostado.",
        precio: "17 €",
        badge: "Chef",
        alergenos: "(4, 11)",
        imagen: "/images/tiraditos/tiradito-nikkei.jpg",
      },
      {
        nombre: "Tiradito de Rocoto",
        descripcion:
          "Tiradito suave con crema de rocoto ahumado, cebollita china, chips de plátano.",
        precio: "17 €",
        alergenos: "(4)",
        imagen: "/images/tiraditos/tiradito-rocoto.jpg",
      },
    ],
  },
  {
    id: "causas",
    label: "Causas",
    simbolo: "✦",
    chakra: "Manipura · Plexo Solar",
    vino: "Bobal Rosado · Vicente Gandía",
    platos: [
      {
        nombre: "Causa Limeña de Pollo o Atún",
        descripcion:
          "Puré de papa con ají amarillo y limón, relleno de pollo o atún con mayonesa. Palta fresca.",
        precio: "13 €",
        alergenos: "(3, 4, 7)",
        imagen: "/images/causas/causa-limeña.jpg",
      },
      {
        nombre: "Causa de Langostinos",
        descripcion:
          "Causa con tartar de langostinos, palta y toques cítricos.",
        precio: "14 €",
        badge: "Premium",
        alergenos: "(2, 7)",
        imagen: "/images/causas/causa-langostinos.jpg",
      },
      {
        nombre: "Causa Acevichada",
        descripcion: "Causa con ceviche de corvina y palta.",
        precio: "16 €",
        alergenos: "(4)",
        imagen: "/images/causas/causa-acevichada.jpg",
      },
    ],
  },
  {
    id: "piqueos",
    label: "Piqueos",
    simbolo: "❋",
    chakra: "Vishuddha · Garganta",
    vino: "Bobal Rosado · Vicente Gandía",
    platos: [
      {
        nombre: "Papa Rellena con Huancaína",
        descripcion:
          "Papa dorada y crujiente, rellena de guiso criollo con carne de cerdo y acompañada de cremosa salsa huancaína.",
        precio: "10 €",
        alergenos: "(3, 7)",
        imagen: "/images/piqueos/papa-rellena-huancaína.jpg",
      },
      {
        nombre: "Papa a la Huancaína",
        descripcion:
          "Clásico peruano: cremosa salsa de ají amarillo, sobre láminas de papa cocida, coronadas con huevo cocido y aceituna.",
        precio: "7 €",
        badge: "Clásico",
        alergenos: "(7)",
        imagen: "/images/piqueos/papa-huancaína.jpg",  
      },
      {
        nombre: "Langostinos al Panko con Mermelada de Rocoto",
        descripcion:
          "Langostinos crocantes en cobertura de panko, servidos con mermelada de rocoto de sabor dulce y picante.",
        precio: "15 €",
        badge: "Estrella",
        alergenos: "(1, 2, 6, 11)",
        imagen: "/images/piqueos/langostinos-panko.jpg",
      },
      {
        nombre: "Chicharrón Mixto",
        descripcion:
          "Selección de mariscos y pescados fritos al estilo criollo, crocantes y jugosos, servidos con yuca dorada y salsa criolla.",
        precio: "17 €",
        alergenos: "(1, 2, 3, 4)",
        imagen: "/images/piqueos/chicharrón-mixto.jpg",
      },
    ],
  },
  {
    id: "guisos",
    label: "Guisos",
    simbolo: "⬡",
    chakra: "Ajna · Tercer Ojo",
    vino: "Ceramic Tinto / Bobal Negro",
    platos: [
      {
        nombre: "Ají de Gallina",
        descripcion:
          "Clásico guiso peruano de pollo deshilachado en cremosa salsa de ají amarillo, acompañado de arroz blanco.",
        precio: "15 €",
        badge: "Clásico",
        alergenos: "(3, 7)",
        imagen: "/images/guisos/ají-gallina.jpg",
      },
      {
        nombre: "Lomo Saltado",
        descripcion:
          "Clásico salteado de lomo, cebolla, tomate y salsa criolla, servido con papas fritas y arroz.",
        precio: "18 €",
        badge: "Icónico",
        alergenos: "(6, 13)",
        imagen: "/images/guisos/lomo-saltado.jpg",
      },
      {
        nombre: "Carapulcra",
        descripcion:
          "Guiso ancestral de papa seca y cerdo cocido a fuego lento con ají panca, maní tostado y especias peruanas, acompañado de arroz blanco.",
        precio: "17 €",
        alergenos: "(5)",
        imagen: "/images/guisos/carapulcra.jpg",
      },
      {
        nombre: "Picante de Mariscos",
        descripcion:
          "Guiso criollo de mariscos en salsa cremosa y ligeramente picante, acompañado de arroz blanco.",
        precio: "18 €",
        alergenos: "(2, 7, 13)",
        imagen: "/images/guisos/picante-mariscos.jpg",
      },
      {
        nombre: "Pescado a lo Macho",
        descripcion:
          "Filete de corvina frito cubierto con salsa de mariscos en ajíes y vino blanco.",
        precio: "19 €",
        badge: "Chef",
        alergenos: "(1, 2, 4, 7, 13)",
        imagen: "/images/guisos/pescado-lo-macho.jpg",
      },
      {
        nombre: "Pescado Empanizado con Papas Fritas",
        descripcion:
          "Crujiente filete de corvina empanizado, servido con papas fritas doradas.",
        precio: "13 €",
        alergenos: "(1, 3, 4)",
        imagen: "/images/guisos/pescado-empanizado.jpg",
      },
    ],
  },
  {
    id: "arroces",
    label: "Arroces",
    simbolo: "◉",
    chakra: "Anahata · Corazón",
    vino: "Bobal Dulce / Bobal Blanco",
    platos: [
      {
        nombre: "Arroz con Mariscos Meloso",
        descripcion:
          "Arroz cremoso y sabroso, preparado con variedad de mariscos frescos, ajíes y un toque criollo que realza el sabor del mar.",
        precio: "19 €",
        badge: "Estrella",
        alergenos: "(2, 7, 13)",
        imagen: "/images/arroces/arroz-mariscos.jpg",
      },
      {
        nombre: "Arroz Verde con Mariscos",
        descripcion:
          "Arroz aromático al culantro, salteado con mariscos frescos y coronado con el auténtico sabor criollo del mar.",
        precio: "19 €",
        alergenos: "(2, 7, 13)",
        imagen: "/images/arroces/arroz-verde.jpg",
      },
      {
        nombre: "Arroz Chaufa de Mariscos o Pollo",
        descripcion:
          "Clásico arroz frito al estilo peruano, salteado al wok con huevo, verduras frescas y el toque especial de la casa.",
        precio: "16 €",
        alergenos: "(2, 3, 6, 11, 13)",
        imagen: "/images/arroces/arroz-chaufa.jpg",
      },
      {
        nombre: "Tacu Tacu con Picante de Mariscos",
        descripcion:
          "Tradicional tacu tacu de arroz y alubias, acompañado de un guiso criollo de mariscos en su salsa.",
        precio: "22 €",
        badge: "Premium",
        alergenos: "(2, 7, 13)",
        imagen: "/images/arroces/tacu-tacu-mariscos.jpg",
      },
      {
        nombre: "Tacu Tacu con Lomo Saltado",
        descripcion:
          "Crocante tacu tacu de arroz y alubias, servido con jugoso lomo saltado al wok, verduras salteadas y el inconfundible sabor criollo.",
        precio: "22 €",
        alergenos: "(6, 13)",
        imagen: "/images/arroces/tacu-tacu-lomo.jpg",
      },
    ],
  },
];

function PlatoCard({ plato, index }: { plato: Plato; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      style={{
        background: "#120E0A",
        border: "1px solid rgba(201,168,76,0.09)",
        // Reducimos el padding superior/lateral si hay imagen para que quede mejor asentada
        padding: plato.imagen ? "0px 22px 26px 22px" : "26px 22px", 
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
      whileHover={{
        backgroundColor: "#1A1410",
        borderColor: "rgba(201,168,76,0.22)",
        transition: { duration: 0.25 },
      }}
    >
      
      {plato.imagen && (
  <div style={{ 
    width: "calc(100% + 44px)", 
    marginLeft: "-22px",        
    marginTop: "-26px",         
    height: "180px",            
    position: "relative",
    marginBottom: "20px",
    overflow: "hidden"
  }}>
    <img 
      src={plato.imagen} // 👈 Esto jalará automáticamente "/images/ceviche-norteno.png"
      alt={plato.nombre} // 👈 Esto pondrá automáticamente "Ceviche Norteño" como texto alternativo
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover", 
      }}
    />
  </div>
)}

      {/* Badge */}
      {plato.badge && (
        <span
          style={{
            position: "absolute",
            // Si hay imagen, bajamos el badge para que flote sobre ella de manera elegante
            top: plato.imagen ? "14px" : "14px", 
            right: "14px",
            background: "rgba(18, 14, 10, 0.75)", // Más opaco para que se lea sobre la foto
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(201,168,76,0.28)",
            color: "#C9A84C",
            fontSize: "7.5px",
            letterSpacing: "2px",
            padding: "4px 8px",
            textTransform: "uppercase",
            fontFamily: "Montserrat, system-ui, sans-serif",
            zIndex: 2, // Asegura que se vea por encima de la foto
          }}
        >
          {plato.badge}
        </span>
      )}

      {/* Nombre */}
      <h4
        style={{
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontSize: "clamp(18px, 2.5vw, 22px)",
          fontWeight: 300,
          color: "#F5EDD8",
          marginBottom: "8px",
          paddingRight: plato.badge && !plato.imagen ? "70px" : "0", // Ajuste de espacio
          lineHeight: 1.25,
        }}
      >
        {plato.nombre}
      </h4>

      {/* Descripción */}
      <p
        style={{
          fontFamily: "Montserrat, system-ui, sans-serif",
          fontSize: "11px",
          color: "rgba(245,237,216,0.42)",
          lineHeight: 1.7,
          marginBottom: "12px",
          fontWeight: 300,
        }}
      >
        {plato.descripcion}
        {plato.alergenos && (
          <span style={{ color: "rgba(245,237,216,0.22)", marginLeft: "6px" }}>
            {plato.alergenos}
          </span>
        )}
      </p>

      {/* Precio */}
      <p
        style={{
          fontFamily: "Cormorant Garamond, Georgia, serif",
          fontSize: "18px",
          color: "#C9A84C",
          fontWeight: 300,
          letterSpacing: "1px",
        }}
      >
        {plato.precio}
      </p>

      {/* Línea hover inferior */}
      <motion.div
        initial={{ width: "0%" }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "1px",
          background: "#C9A84C",
        }}
      />
    </motion.div>
  );
}

export default function CartaSection() {
  const [activeTab, setActiveTab] = useState("ceviches");

  const currentCat = CATEGORIAS.find((c) => c.id === activeTab)!;

  return (
    <div style={{ background: "#0A0806", padding: "clamp(64px, 10vw, 120px) 0" }}>
      <div style={{ padding: "0 clamp(20px, 5vw, 80px)" }}>
        {/* Header */}
        <RevealSection style={{ textAlign: "center", marginBottom: "52px" }}>
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
            Nuestra Propuesta
          </span>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, Georgia, serif",
              fontSize: "clamp(34px, 5vw, 62px)",
              fontWeight: 300,
              color: "#F5EDD8",
              marginBottom: "10px",
            }}
          >
            La{" "}
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Carta</em>
          </h2>
          <p
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "11px",
              color: "rgba(245,237,216,0.35)",
              letterSpacing: "2px",
              fontWeight: 300,
            }}
          >
            Temporada actual · Ingredientes de mercado
          </p>
        </RevealSection>

        {/* Tabs */}
        <RevealSection style={{ marginBottom: "40px" }}>
          <div
            className="tab-scroll"
            style={{
              display: "flex",
              overflowX: "auto",
              borderBottom: "1px solid rgba(201,168,76,0.14)",
              gap: "0",
            }}
          >
            {CATEGORIAS.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === cat.id
                    ? "1px solid #C9A84C"
                    : "1px solid transparent",
                  marginBottom: "-1px",
                  color: activeTab === cat.id
                    ? "#C9A84C"
                    : "rgba(245,237,216,0.38)",
                  fontFamily: "Montserrat, system-ui, sans-serif",
                  fontSize: "9.5px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  padding: "14px 20px",
                  cursor: "pointer",
                  fontWeight: 300,
                  whiteSpace: "nowrap",
                  transition: "color 0.3s ease, border-color 0.3s ease",
                }}
              >
                <span style={{ marginRight: "6px" }}>{cat.simbolo}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </RevealSection>

        {/* Chakra + Vino info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + "-info"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              alignItems: "center",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                fontFamily: "Montserrat, system-ui, sans-serif",
                fontSize: "9px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.5)",
                fontWeight: 300,
              }}
            >
              {currentCat.chakra}
            </span>
            <span style={{ color: "rgba(201,168,76,0.2)", fontSize: "10px" }}>·</span>
            <span
              style={{
                fontFamily: "Montserrat, system-ui, sans-serif",
                fontSize: "9px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#9E3345",
                fontWeight: 300,
              }}
            >
              🍷 {currentCat.vino}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Grid de platos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 290px), 1fr))",
              gap: "2px",
              background: "rgba(201,168,76,0.05)",
            }}
          >
            {currentCat.platos.map((plato, i) => (
              <PlatoCard key={plato.nombre} plato={plato} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Alérgenos nota */}
        <RevealSection style={{ marginTop: "28px" }}>
          <p
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "9.5px",
              color: "rgba(245,237,216,0.25)",
              fontWeight: 300,
              letterSpacing: "0.5px",
            }}
          >
            Alérgenos: (1) Gluten · (2) Crustáceos · (3) Huevos · (4) Pescado
            · (5) Cacahuetes · (6) Soja · (7) Leche · (11) Sésamo · (13)
            Sulfitos. Consulte con nuestro equipo.
          </p>
        </RevealSection>
      </div>
    </div>
  );
}