import type { Metadata } from "next";
// @ts-ignore: CSS imports are handled by Next.js
import "./globals.css";

export const metadata: Metadata = {
  title: "CHAKRA Cocina Peruana",
  description:
    "Una experiencia gastronómica que celebra la riqueza culinaria con alma mediterránea. Cada plato representa la energía de un chakra.",
  keywords:
    "restaurante peruano, cocina peruana, ceviche, chakra restaurante, lomo saltado",
  openGraph: {
    title: "CHAKRA Cocina Peruana",
    description:
      "Una experiencia peruana que despierta todos tus sentidos. Sabores del Perú reinterpretados con alma mediterránea.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ background: "#0A0806" }}>{children}</body>
    </html>
  );
}