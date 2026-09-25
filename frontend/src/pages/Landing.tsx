import { useEffect } from "react";
import Lenis from "lenis";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Servicios } from "@/components/landing/Servicios";
import { Trabajos } from "@/components/landing/Trabajos";
import { Resenas } from "@/components/landing/Resenas";
import { PorQue } from "@/components/landing/PorQue";
import { Contacto } from "@/components/landing/Contacto";
import { Footer, FloatingWhatsApp } from "@/components/landing/Footer";

export default function Landing() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-zinc-100">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Servicios />
        <Trabajos />
        <Resenas />
        <PorQue />
        <Contacto />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
