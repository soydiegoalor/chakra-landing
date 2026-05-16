"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

interface ReservaModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ReservaModal({ open, onClose }: ReservaModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    fecha: "",
    personas: "2",
    ocasion: "",
  });

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Prevenir scroll del body
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.nombre || !form.email || !form.fecha) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        nombre: "",
        email: "",
        telefono: "",
        fecha: "",
        personas: "2",
        ocasion: "",
      });
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.82)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <motion.div
            key="modal-content"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#1A1410",
              border: "1px solid rgba(201,168,76,0.2)",
              width: "100%",
              maxWidth: "480px",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "clamp(32px, 5vw, 52px) clamp(24px, 4vw, 42px)",
              position: "relative",
            }}
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "18px",
                right: "18px",
                background: "none",
                border: "none",
                color: "#8A7A6A",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#C9A84C";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#8A7A6A";
              }}
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            {/* Éxito */}
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{
                    textAlign: "center",
                    padding: "40px 20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "rgba(29,158,117,0.15)",
                      border: "1px solid rgba(29,158,117,0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Check size={24} color="#1D9E75" />
                  </div>
                  <h3
                    style={{
                      fontFamily: "Cormorant Garamond, Georgia, serif",
                      fontSize: "28px",
                      fontWeight: 300,
                      color: "#F5EDD8",
                    }}
                  >
                    ¡Reserva confirmada!
                  </h3>
                  <p
                    style={{
                      fontFamily: "Montserrat, system-ui, sans-serif",
                      fontSize: "13px",
                      color: "rgba(245,237,216,0.55)",
                      fontWeight: 300,
                      lineHeight: 1.7,
                    }}
                  >
                    Recibirás un email de confirmación en breve. Te esperamos
                    para vivir la experiencia CHAKRA.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {/* Header */}
                  <div style={{ marginBottom: "30px" }}>
                    <span
                      style={{
                        fontFamily: "Montserrat, system-ui, sans-serif",
                        fontSize: "8.5px",
                        letterSpacing: "6px",
                        textTransform: "uppercase",
                        color: "#C9A84C",
                        display: "block",
                        marginBottom: "10px",
                        fontWeight: 300,
                      }}
                    >
                      Reserva tu mesa
                    </span>
                    <h3
                      style={{
                        fontFamily: "Cormorant Garamond, Georgia, serif",
                        fontSize: "30px",
                        fontWeight: 300,
                        color: "#F5EDD8",
                        lineHeight: 1.2,
                      }}
                    >
                      Tu experiencia{" "}
                      <em style={{ fontStyle: "italic", color: "#C9A84C" }}>
                        CHAKRA
                      </em>{" "}
                      te espera
                    </h3>
                  </div>

                  {/* Formulario */}
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: "12px" }}
                  >
                    <input
                      className="modal-input"
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Nombre completo *"
                      required
                      autoComplete="name"
                    />
                    <input
                      className="modal-input"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      required
                      autoComplete="email"
                    />
                    <input
                      className="modal-input"
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="Teléfono"
                      autoComplete="tel"
                    />

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "12px",
                      }}
                    >
                      <input
                        className="modal-input"
                        type="date"
                        name="fecha"
                        value={form.fecha}
                        onChange={handleChange}
                        required
                        style={{ colorScheme: "dark" }}
                      />
                      <select
                        className="modal-input"
                        name="personas"
                        value={form.personas}
                        onChange={handleChange}
                      >
                        <option value="1">1 persona</option>
                        <option value="2">2 personas</option>
                        <option value="3">3 personas</option>
                        <option value="4">4 personas</option>
                        <option value="5">5 personas</option>
                        <option value="6+">6+ personas</option>
                      </select>
                    </div>

                    <select
                      className="modal-input"
                      name="ocasion"
                      value={form.ocasion}
                      onChange={handleChange}
                    >
                      <option value="">Ocasión especial (opcional)</option>
                      <option value="cumpleanos">Cumpleaños</option>
                      <option value="aniversario">Aniversario</option>
                      <option value="negocios">Negocios</option>
                      <option value="romantico">Cena romántica</option>
                      <option value="celebracion">Celebración</option>
                      <option value="otro">Otro</option>
                    </select>

                    {/* Botón submit */}
                    <motion.button
                      onClick={handleSubmit}
                      className="btn-primary"
                      style={{ marginTop: "8px", width: "100%", textAlign: "center" }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      Confirmar Reserva
                    </motion.button>

                    {/* Nota */}
                    <p
                      style={{
                        fontFamily: "Montserrat, system-ui, sans-serif",
                        fontSize: "10px",
                        color: "rgba(245,237,216,0.25)",
                        textAlign: "center",
                        fontWeight: 300,
                        marginTop: "4px",
                      }}
                    >
                      O llama al{" "}
                      <span style={{ color: "rgba(201,168,76,0.5)" }}>
                        +34 91 XXX XX XX
                      </span>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}