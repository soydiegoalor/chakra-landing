"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onReserva: () => void;
}

const NAV_LINKS = [
  { href: "chakras", label: "Experiencia" },
  { href: "carta", label: "La Carta" },
  { href: "estrellas", label: "Platos" },
  { href: "galeria", label: "Galería" },
  { href: "testimonios", label: "Opiniones" },
];

export default function Navbar({ onReserva }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // ESTA ES LA FUNCIÓN QUE FALTABA
  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: "easeOut", delay: 2.0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          padding: scrolled ? "13px 32px" : "22px 32px",
          background: scrolled ? "rgba(10,8,6,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "none",
          transition: "all 0.45s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("inicio")}
          style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0 }}
        >
          <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "21px", letterSpacing: "4px", color: "#C9A84C", fontWeight: 300, display: "block" }}>
            CHAKRA
          </span>
          <span style={{ fontFamily: "Montserrat, system-ui, sans-serif", fontSize: "7.5px", letterSpacing: "6px", color: "#8A7A6A", textTransform: "uppercase", fontWeight: 300, display: "block", marginTop: "2px" }}>
            Cocina Peruana
          </span>
        </button>

        {/* Desktop Links - CAMBIADOS A BUTTON CON ONCLICK */}
        <ul className="hidden lg:flex" style={{ gap: "36px", listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  color: "rgba(245,237,216,0.55)",
                  fontSize: "9.5px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "Montserrat, system-ui, sans-serif",
                  fontWeight: 300,
                  transition: "color 0.3s ease",
                  padding: "4px 0",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,237,216,0.55)")}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button onClick={onReserva} className="btn-ghost hidden md:inline-block" style={{ fontSize: "9.5px" }}>
            Reservar
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
            style={{ background: "none", border: "none", cursor: "pointer", color: "#C9A84C", display: "flex", alignItems: "center" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
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
              background: "rgba(10,8,6,0.97)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ fontFamily: "Cormorant Garamond", fontSize: "20px", color: "#C9A84C", letterSpacing: "5px", marginBottom: "48px" }}>
              CHAKRA
            </p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "28px", alignItems: "center" }}>
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    fontFamily: "Cormorant Garamond",
                    fontSize: "34px",
                    color: "rgba(245,237,216,0.85)",
                    cursor: "pointer",
                    letterSpacing: "2px",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <button
              onClick={() => { setMenuOpen(false); onReserva(); }}
              className="btn-primary"
              style={{ marginTop: "48px" }}
            >
              Reservar Mesa
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}