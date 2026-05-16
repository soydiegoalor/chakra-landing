"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ReservaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservaModal({ isOpen, onClose }: ReservaModalProps) {
  // Estados para capturar los datos del formulario en tiempo real
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [personas, setPersonas] = useState("2 personas");
  const [ocasion, setOcasion] = useState("");

  // 💡 Configura aquí tu número de teléfono real de CHAKRA (con el prefijo del país, ej: 34 para España)
  const whatsappNumber = "34644655642"; 

  // Generador de horas de 13:00 a 17:00 en intervalos de 30 minutos
  const HORAS_DISPONIBLES = [
    "13:00", "13:30", "14:00", "14:30", 
    "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  // Función que construye el mensaje dinámico y redirige a WhatsApp
  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();

    // Construcción del texto elegante y estructurado
    let mensaje = `¡Hola! Me gustaría gestionar una reserva para CHAKRA.\n\n`;
    mensaje += `*Detalles de la solicitud:*\n`;
    mensaje += `• *Nombre:* ${nombre}\n`;
    if (telefono) mensaje += `• *Teléfono de contacto:* ${telefono}\n`;
    mensaje += `• *Fecha:* ${fecha}\n`;
    mensaje += `• *Hora:* ${hora}\n`;
    mensaje += `• *Comensales:* ${personas}\n`;
    if (ocasion) {
      const ocasionesMap: { [key: string]: string } = {
        cumpleanos: "Cumpleaños",
        aniversario: "Aniversario",
        negocios: "Cena de Negocios"
      };
      mensaje += `• *Ocasión especial:* ${ocasionesMap[ocasion] || ocasion}\n`;
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          {/* Fondo desenfocado translúcido */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(10, 8, 6, 0.85)",
              backdropFilter: "blur(8px)",
            }}
          />

          {/* Ventana del Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "540px",
              background: "#120E0A",
              border: "1px solid rgba(201,168,76,0.18)",
              padding: "40px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.7)",
              zIndex: 10,
            }}
          >
            {/* Botón Cerrar (X) */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "none",
                border: "none",
                color: "rgba(245,237,216,0.4)",
                fontSize: "20px",
                cursor: "pointer",
                transition: "color 0.2s",
                zIndex: 12,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,237,216,0.4)")}
            >
              ✕
            </button>

            {/* Encabezado */}
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <span
                style={{
                  fontFamily: "Montserrat, system-ui, sans-serif",
                  fontSize: "8.5px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                Reserva tu mesa
              </span>
              <h2
                style={{
                  fontFamily: "Cormorant Garamond, Georgia, serif",
                  fontSize: "clamp(24px, 4vw, 32px)",
                  fontWeight: 300,
                  color: "#F5EDD8",
                  lineHeight: 1.2,
                }}
              >
                Tu experiencia <em style={{ fontStyle: "italic", color: "#C9A84C" }}>CHAKRA</em> te espera
              </h2>
            </div>

            {/* Formulario que envía directamente a WhatsApp */}
            <form onSubmit={handleWhatsAppRedirect} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              
              <input 
                type="text" 
                placeholder="Nombre completo *" 
                required 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                style={inputStyle} 
              />
              
              <input 
                type="tel" 
                placeholder="Teléfono (opcional)" 
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                style={inputStyle} 
              />
              
              {/* Bloque de Fecha y Hora alineados */}
              <div style={{ display: "flex", gap: "12px" }}>
                <input 
                  type="date" 
                  required 
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  style={{ ...inputStyle, flex: 1 }} 
                />
                
                {/* ⏰ Selector de hora corregido y con rango limitado */}
                <select 
                  required 
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                  style={{ ...inputStyle, flex: 1, color: hora ? "#F5EDD8" : "rgba(245,237,216,0.4)" }}
                >
                  <option value="" disabled style={optionStyle}>Hora *</option>
                  {HORAS_DISPONIBLES.map((h) => (
                    <option key={h} value={h} style={optionStyle}>{h}</option>
                  ))}
                </select>
              </div>

              {/* Selector de Comensales */}
              <select 
                required 
                value={personas}
                onChange={(e) => setPersonas(e.target.value)}
                style={{ ...inputStyle, color: "#F5EDD8" }}
              >
                <option value="1 persona" style={optionStyle}>1 persona</option>
                <option value="2 personas" style={optionStyle}>2 personas</option>
                <option value="3 personas" style={optionStyle}>3 personas</option>
                <option value="4 personas" style={optionStyle}>4 personas</option>
                <option value="5 personas" style={optionStyle}>5 personas</option>
                <option value="6+ personas" style={optionStyle}>6+ personas</option>
              </select>

              {/* Selector de Ocasión */}
              <select 
                value={ocasion}
                onChange={(e) => setOcasion(e.target.value)}
                style={{ ...inputStyle, color: ocasion ? "#F5EDD8" : "rgba(245,237,216,0.6)" }}
              >
                <option value="" style={optionStyle}>Ocasión especial (opcional)</option>
                <option value="cumpleanos" style={optionStyle}>Cumpleaños</option>
                <option value="aniversario" style={optionStyle}>Aniversario</option>
                <option value="negocios" style={optionStyle}>Cena de Negocios</option>
              </select>

              {/* ÚNICO BOTÓN PRINCIPAL: Solicitar por WhatsApp */}
              <motion.button
                type="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  background: "transparent",
                  color: "#25D366", 
                  border: "1px solid rgba(37, 211, 102, 0.4)",
                  fontFamily: "Montserrat, system-ui, sans-serif",
                  fontSize: "11px",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  padding: "16px",
                  cursor: "pointer",
                  fontWeight: 500,
                  marginTop: "12px",
                  transition: "all 0.3s ease",
                }}
                whileHover={{
                  background: "rgba(37, 211, 102, 0.07)",
                  borderColor: "#25D366",
                  boxShadow: "0 0 24px rgba(37, 211, 102, 0.15)",
                }}
                whileTap={{ scale: 0.99 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.414 1.452 5.368 0 9.735-4.37 9.739-9.743.002-2.602-1.01-5.05-2.85-6.893-1.84-1.843-4.293-2.856-6.897-2.858-5.373 0-9.74 4.368-9.743 9.744-.001 1.99.52 3.93 1.508 5.642l-1.01 3.694 3.779-.994z"/>
                </svg>
                Enviar Solicitud por WhatsApp
              </motion.button>
              
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// 🎨 Estilos Base compartidos para los Inputs y Selects del formulario
const inputStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.03)",
  border: "1px solid rgba(201, 168, 76, 0.15)",
  color: "#F5EDD8",
  fontFamily: "Montserrat, system-ui, sans-serif",
  fontSize: "13px",
  padding: "14px 16px",
  outline: "none",
  borderRadius: "0px", 
  boxSizing: "border-box",
  transition: "border-color 0.25s ease, background-color 0.25s ease",
};

// 🎨 Estilo para forzar que el interior de las opciones se vea oscuro y legible
const optionStyle: React.CSSProperties = {
  background: "#120E0A",
  color: "#F5EDD8",
};