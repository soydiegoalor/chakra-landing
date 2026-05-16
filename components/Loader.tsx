"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  visible: boolean;
}

export default function Loader({ visible }: LoaderProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#0A0806",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "28px",
          }}
        >
          {/* Mandala SVG decorativo girando */}
          <motion.svg
            width="110"
            height="110"
            viewBox="0 0 110 110"
            style={{ position: "absolute", opacity: 0.1 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="55"
              cy="55"
              r="50"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.5"
            />
            <circle
              cx="55"
              cy="55"
              r="36"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.5"
            />
            <circle
              cx="55"
              cy="55"
              r="22"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="0.5"
            />
            <line
              x1="55"
              y1="5"
              x2="55"
              y2="105"
              stroke="#C9A84C"
              strokeWidth="0.4"
            />
            <line
              x1="5"
              y1="55"
              x2="105"
              y2="55"
              stroke="#C9A84C"
              strokeWidth="0.4"
            />
            <line
              x1="20"
              y1="20"
              x2="90"
              y2="90"
              stroke="#C9A84C"
              strokeWidth="0.3"
            />
            <line
              x1="90"
              y1="20"
              x2="20"
              y2="90"
              stroke="#C9A84C"
              strokeWidth="0.3"
            />
          </motion.svg>

          {/* Spinner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              border: "1px solid #8B6914",
              borderTop: "1px solid #C9A84C",
            }}
            className="spin-anim"
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            style={{ textAlign: "center" }}
          >
            <p
              style={{
                fontFamily: "Cormorant Garamond, Georgia, serif",
                fontSize: "22px",
                letterSpacing: "8px",
                color: "#C9A84C",
                fontWeight: 300,
                textTransform: "uppercase",
              }}
            >
              CHAKRA
            </p>
            <p
              style={{
                fontFamily: "Montserrat, system-ui, sans-serif",
                fontSize: "8px",
                letterSpacing: "6px",
                color: "#8A7A6A",
                textTransform: "uppercase",
                marginTop: "5px",
                fontWeight: 300,
              }}
            >
              Cocina Peruana
            </p>
          </motion.div>

          {/* Barra de progreso */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              position: "absolute",
              bottom: "48px",
              width: "100px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(201,168,76,0.12)",
              }}
            >
              <motion.div
                style={{ height: "1px", background: "#C9A84C" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}