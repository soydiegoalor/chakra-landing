"use client";

import { motion } from "framer-motion";
import { useReveal } from "@/hooks/useReveal";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  style?: React.CSSProperties;
}

export default function RevealSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  style,
}: RevealSectionProps) {
  const { ref, visible } = useReveal();

  const initialY = direction === "up" ? 38 : 0;
  const initialX =
    direction === "left" ? -38 : direction === "right" ? 38 : 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      animate={visible ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration: 0.82,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}