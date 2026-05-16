"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar({ onReserva }: { onReserva: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    const handleScroll = () => setScrolled(window.scrollY > 55);
    
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
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
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
          padding: scrolled ? "12px 24px" : "24px 24px",
          background: scrolled ? "rgba(10,8,6,0.98)" : "transparent",
          backdropFilter: scrolled ? "blur(15px)" : "none",
          transition: "all 0.4s ease",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <div style={{ flex: 1 }}>
          <button onClick={() => scrollTo("inicio")} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
            <span style={{ fontFamily: "Cormorant Garamond", fontSize: "20px", letterSpacing: "3px", color: "#C9A84C", display: "block" }}>CHAKRA</span>
            <span style={{ fontSize: "7px", letterSpacing: "4px", color: "#8A7A6A", textTransform: "uppercase" }}>Cocina Peruana</span>
          </button>
        </div>

        {/* ENLACES CENTRALES (Solo si NO es móvil) */}
        {!isMobile && (
          <ul style={{ display: "flex", flex: 2, justifyContent: "center", gap: "30px", listStyle: "none", margin: 0, padding: 0 }}>
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
        )}

        {/* BOTÓN RESERVA + HAMBURGUESA */}
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "15px" }}>
          {(!isMobile || window.innerWidth > 640) && (
            <button onClick={onReserva} style={{ background: "none", border: "1px solid #C9A84C", color: "#C9A84C", padding: "8px 16px", fontSize: "9px", textTransform: "uppercase", letterSpacing: "2px", cursor: "pointer" }}>
              Reservar
            </button>
          )}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#C9A84C", cursor: "pointer", display: "flex", alignItems: "center" }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* MENÚ MÓVIL FULLSCREEN */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed", inset: 0, zIndex: 9998,
              background: "#0A0806",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "30px"
            }}
          >
            {NAV_LINKS.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} style={{ background: "none", border: "none", color: "#C9A84C", fontSize: "28px", fontFamily: "Cormorant Garamond", cursor: "pointer" }}>
                {link.label}
              </button>
            ))}
            <button onClick={() => { setMenuOpen(false); onReserva(); }} style={{ marginTop: "20px", background: "#C9A84C", color: "#0A0806", border: "none", padding: "12px 30px", fontSize: "14px", fontWeight: "bold", cursor: "pointer" }}>
              RESERVAR MESA
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
