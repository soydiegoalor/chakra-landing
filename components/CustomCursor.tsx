"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springCfg = { damping: 28, stiffness: 220, mass: 0.5 };
  const followerX = useSpring(mouseX, springCfg);
  const followerY = useSpring(mouseY, springCfg);

  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  // No renderizar en SSR ni en pantallas táctiles
  if (!mounted) return null;

  return (
    <>
      {/* Punto principal */}
      <motion.div
        className="hidden md:block"
        style={{
          position: "fixed",
          left: mouseX,
          top: mouseY,
          width: 8,
          height: 8,
          background: "#C9A84C",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10000,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
      />
      {/* Círculo seguidor */}
      <motion.div
        className="hidden md:block"
        style={{
          position: "fixed",
          left: followerX,
          top: followerY,
          width: 34,
          height: 34,
          border: "1px solid rgba(201,168,76,0.35)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}