import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0806",
};

export const metadata: Metadata = {
  title: "CHAKRA Cocina Peruana",
  description: "Una experiencia gastronómica que celebra la riqueza culinaria con alma mediterránea.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Esto fuerza al móvil a no hacer zoom raro */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body style={{ background: "#0A0806", margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
