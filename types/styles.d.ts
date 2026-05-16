// Extensiones de tipos globales para el proyecto CHAKRA

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

// Tipos utilitarios compartidos
export interface ChakraItem {
  id: string;
  nombre: string;
  titulo: string;
  simbolo: string;
  subtitulo: string;
  descripcion: string;
  vino: string;
  glowColor: string;
}

export interface PlatoItem {
  nombre: string;
  descripcion: string;
  precio: string;
  badge?: string;
}

export interface CartaCategory {
  id: string;
  label: string;
  simbolo: string;
  chakra: string;
  vino: string;
  platos: PlatoItem[];
}

export interface TestimonioItem {
  texto: string;
  autor: string;
  origen: string;
  fecha: string;
}