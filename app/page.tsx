"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ChakrasSection from "@/components/Chakrassection";
import CartaSection from "@/components/CartaSection";
import PlatosEstrella from "@/components/PlatosEstrella";
import GaleriaSection from "@/components/GaleriaSection";
import TestimoniosSection from "@/components/TestimoniosSection";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import ReservaModal from "@/components/ReservaModal";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  const openReserva = () => setModalOpen(true);
  const closeReserva = () => setModalOpen(false);

  return (
    <>
      <Loader visible={loading} />
      <CustomCursor />
<ReservaModal isOpen={modalOpen} onClose={closeReserva} />
      <main
        style={{ background: "#0A0806", overflowX: "hidden" }}
        aria-label="CHAKRA Cocina Peruana"
      >
        <Navbar onReserva={openReserva} />

        <section id="inicio">
          <Hero onReserva={openReserva} />
        </section>

        <div className="section-divider" />

        <section id="chakras">
          <ChakrasSection />
        </section>

        <div className="section-divider" />

        <section id="carta">
          <CartaSection />
        </section>

        <div className="section-divider" />

        <section id="estrellas">
          <PlatosEstrella />
        </section>

        <div className="section-divider" />

        <section id="galeria">
          <GaleriaSection />
        </section>

        <div className="section-divider" />

        <section id="testimonios">
          <TestimoniosSection />
        </section>

        <div className="section-divider" />

        <CTAFinal onReserva={openReserva} />

        <Footer onReserva={openReserva} />
      </main>
    </>
  );
}