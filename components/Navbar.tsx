"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ onReserva }: { onReserva: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: "smooth"
      });
    }
  };

  const NAV_LINKS = [
    { href: "chakras", label: "Experiencia" },
    { href: "carta", label: "La Carta" },
    { href: "estrellas", label: "Platos" },
    { href: "galeria", label: "Galería" },
    { href: "testimonios", label: "Opiniones" },
  ];

  return (
    <>
      <motion.nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          padding: scrolled ? "10px 24px" : "20px 24px",
          background: scrolled ? "rgba(10,8,6,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Esto separa Logo de Menú de Botón
        }}
      >
        {/* LADO IZQUIERDO: LOGO */}
        <div style={{ flex: "1 1 0%", display: "flex", justifyContent: "flex-start" }}>
          <button onClick={() => scrollTo("inicio")} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
            <span style={{ fontFamily: "Cormorant Garamond", fontSize: "20px", letterSpacing: "3px", color: "#C9A84C", display: "block" }}>CHAKRA</span>
            <span style={{ fontSize: "7px", letterSpacing: "4px", color: "#8A7A6A", textTransform: "uppercase" }}>Cocina Peruana</span>
          </button>
        </div>

        {/* CENTRO: ENLACES (Solo se ven en pantallas grandes) */}
        <ul className="hidden lg:flex" style={{ flex: "2 1 0%", justifyContent: "center", gap: "30px", listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                style={{ background: "none", border: "none", color: "rgba(245,237,216,0.6)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer" }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* LADO DERECHO: RESERVAR + HAMBURGUESA */}
        <div style={{ flex: "1 1 0%", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "15px" }}>
          <button 
            onClick={onReserva} 
            style={{ 
              background: "none", 
              border: "1px solid #C9A84C", 
              color: "#C9A84C", 
              padding: "8px 16px", 
              fontSize: "10px", 
              textTransform: "uppercase", 
              letterSpacing: "2px",
              cursor: "pointer"
            }}
            className="hidden sm:block"
          >
            Reservar
          </button>

          {/* Icono Hamburguesa siempre visible en móvil, oculto en LG si quieres */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#C9A84C", cursor: "pointer" }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Menú Móvil (AnimatePresence) - El que ya tenías pero asegúrate de que cubra todo */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 490,
              background: "rgba(10,8,6,0.98)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px"
            }}
          >
            {NAV_LINKS.map((link) => (
              <button 
                key={link.href} 
                onClick={() => scrollTo(link.href)} 
                style={{ background: "none", border: "none", color: "#F5EDD8", fontSize: "24px", fontFamily: "Cormorant Garamond" }}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
