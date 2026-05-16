"use client";

import { motion } from "framer-motion";

interface FooterProps {
  onReserva: () => void;
}

const CARTA_LINKS = [
  "Ceviches",
  "Tiraditos",
  "Causas",
  "Piqueos",
  "Guisos",
  "Arroces",
];

const HORARIOS = [
  "Mar – Vie | 13:30 – 16:00",
  "Mar – Sáb | 20:30 – 23:30",
  "Sáb – Dom | 13:30 – 16:30",
  "Lunes · Cerrado",
];

const SOCIAL = [
  { label: "IG", title: "Instagram" },
  { label: "FB", title: "Facebook" },
  { label: "TK", title: "TikTok" },
  { label: "GM", title: "Google Maps" },
];

export default function Footer({ onReserva }: FooterProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#0A0806",
        borderTop: "1px solid rgba(201,168,76,0.1)",
      }}
    >
      {/* Grid principal */}
      <div
        style={{
          padding: "clamp(52px, 8vw, 80px) clamp(20px, 5vw, 80px) clamp(40px, 6vw, 60px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
          gap: "clamp(36px, 5vw, 60px)",
        }}
      >
        {/* Columna Brand */}
        <div>
          <button
            onClick={() => scrollToSection("inicio")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              textAlign: "left",
              marginBottom: "16px",
              display: "block",
            }}
          >
            <span
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "22px",
                letterSpacing: "4px",
                color: "#C9A84C",
                fontWeight: 300,
                display: "block",
              }}
            >
              CHAKRA
            </span>
            <span
              style={{
                fontFamily: "Montserrat, system-ui, sans-serif",
                fontSize: "7.5px",
                letterSpacing: "6px",
                color: "#8A7A6A",
                textTransform: "uppercase",
                fontWeight: 300,
                display: "block",
                marginTop: "3px",
              }}
            >
              Cocina Peruana
            </span>
          </button>

          <p
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "12px",
              color: "rgba(245,237,216,0.38)",
              lineHeight: 1.8,
              fontWeight: 300,
              maxWidth: "240px",
            }}
          >
            Una experiencia gastronómica que celebra la riqueza culinaria del
            Perú con alma mediterránea. De perú a Valencia, desde 2025.
          </p>

          {/* Social */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "22px",
              flexWrap: "wrap",
            }}
          >
            {SOCIAL.map((s) => (
              <motion.button
                key={s.label}
                whileHover={{ scale: 1.05, borderColor: "rgba(201,168,76,0.5)" }}
                title={s.title}
                style={{
                  width: "36px",
                  height: "36px",
                  border: "1px solid rgba(201,168,76,0.18)",
                  background: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#8A7A6A",
                  fontFamily: "Montserrat, system-ui, sans-serif",
                  fontSize: "10px",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  letterSpacing: "0.5px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#C9A84C";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = "#8A7A6A";
                }}
              >
                {s.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Columna Carta */}
        <div>
          <h4
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "8.5px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "#C9A84C",
              fontWeight: 400,
              marginBottom: "20px",
            }}
          >
            La Carta
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {CARTA_LINKS.map((link) => (
              <li key={link} style={{ marginBottom: "9px" }}>
                <button
                  onClick={() => scrollToSection("carta")}
                  style={{
                    background: "none",
                    border: "none",
                    fontFamily: "Montserrat, system-ui, sans-serif",
                    fontSize: "12px",
                    color: "rgba(245,237,216,0.4)",
                    cursor: "pointer",
                    fontWeight: 300,
                    padding: 0,
                    transition: "color 0.3s ease",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "#F5EDD8";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "rgba(245,237,216,0.4)";
                  }}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna Horario */}
        <div>
          <h4
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "8.5px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "#C9A84C",
              fontWeight: 400,
              marginBottom: "20px",
            }}
          >
            Horario
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {HORARIOS.map((h) => (
              <li
                key={h}
                style={{
                  fontFamily: "Montserrat, system-ui, sans-serif",
                  fontSize: "11.5px",
                  color: "rgba(245,237,216,0.38)",
                  fontWeight: 300,
                  marginBottom: "9px",
                  lineHeight: 1.5,
                }}
              >
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna Contacto */}
        <div>
          <h4
            style={{
              fontFamily: "Montserrat, system-ui, sans-serif",
              fontSize: "8.5px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "#C9A84C",
              fontWeight: 400,
              marginBottom: "20px",
            }}
          >
            Contacto
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "9px" }}>
            {[
              "Av. Arquitecte Alfredo Simón, 24",
              "PPort de Sagunt",
              "+34 91 XXX XX XX",
              "hola@chakravalencia.es",
            ].map((item) => (
              <li
                key={item}
                style={{
                  fontFamily: "Montserrat, system-ui, sans-serif",
                  fontSize: "11.5px",
                  color: "rgba(245,237,216,0.38)",
                  fontWeight: 300,
                }}
              >
                {item}
              </li>
            ))}
            <li style={{ marginTop: "6px" }}>
              <button
                onClick={onReserva}
                style={{
                  background: "none",
                  border: "none",
                  fontFamily: "Montserrat, system-ui, sans-serif",
                  fontSize: "11.5px",
                  color: "#C9A84C",
                  cursor: "pointer",
                  fontWeight: 400,
                  padding: 0,
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "0.7";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                }}
              >
                Reservar mesa →
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div
        style={{
          borderTop: "1px solid rgba(201,168,76,0.08)",
          padding:
            "clamp(18px, 3vw, 26px) clamp(20px, 5vw, 80px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "10px",
            color: "rgba(245,237,216,0.22)",
            fontWeight: 300,
            letterSpacing: "1px",
          }}
        >
          © 2025 CHAKRA Cocina Peruana · Puerto de Sagutno
        </p>
        <p
          style={{
            fontFamily: "Montserrat, system-ui, sans-serif",
            fontSize: "10px",
            color: "rgba(245,237,216,0.22)",
            fontWeight: 300,
            letterSpacing: "1px",
          }}
        >
          Vinos Vicente Gandía · Hecho con alma
        </p>
      </div>
    </footer>
  );
}