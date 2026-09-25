import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Phone, Star } from "lucide-react";
import { WaIcon } from "./Header";
import { WA_URL, TEL_URL, HERO_BG } from "@/lib/site";

const LINES = ["¿TE QUEDASTE", "EN LA CALLE?"];

const MaskedLine = ({ children, delay, className }: { children: string; delay: number; className?: string }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className={`block ${className ?? ""}`}
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section id="inicio" ref={ref} className="relative overflow-hidden" data-testid="hero-section">
      <motion.div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})`, y: bgY, scale: 1.15 }}
      />
      <div className="absolute inset-0 -z-10 hero-scrim" />
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-8 sm:pt-24">
        <motion.div
          className="mb-6 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="flex items-center gap-2 rounded-full bg-[#FF3D2E] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white" data-testid="hero-badge-24hs">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse-dot" />
            Urgencias 24hs
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-[#1F222A] px-4 py-1.5 text-xs font-bold text-[#F5C518]" data-testid="hero-badge-rating">
            <Star className="h-3.5 w-3.5 fill-[#F5C518]" /> 4.9 en Google · 35 reseñas
          </span>
        </motion.div>

        <h1 className="font-display text-5xl uppercase leading-[0.95] text-white sm:text-7xl lg:text-8xl" data-testid="hero-title">
          {LINES.map((l, i) => (
            <MaskedLine key={l} delay={0.25 + i * 0.12}>{l}</MaskedLine>
          ))}
          <MaskedLine delay={0.49} className="text-[#F5C518]">SOLUCIÓN MECÁNICA</MaskedLine>
          <MaskedLine delay={0.61} className="text-outline">EN BERISSO, YA.</MaskedLine>
        </h1>

        <motion.p
          className="mt-6 max-w-xl text-base text-zinc-300 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
        >
          Mecánica integral, service y auxilio las 24 horas. Escribinos ahora y te pasamos{" "}
          <strong className="text-[#F5C518]">presupuesto sin cargo</strong>.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-cta"
            className="flex h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 text-base font-extrabold text-white transition-transform hover:scale-[1.03] active:scale-95"
          >
            <WaIcon className="h-5 w-5" />
            Pedir ayuda por WhatsApp
          </a>
          <a
            href={TEL_URL}
            data-testid="hero-call-cta"
            className="flex h-14 items-center justify-center gap-3 rounded-full border-2 border-[#F5C518] px-8 text-base font-extrabold text-[#F5C518] transition-colors hover:bg-[#F5C518] hover:text-black active:scale-95"
          >
            <Phone className="h-5 w-5" />
            Llamar ahora
          </a>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {["Autos", "Camionetas", "Camiones", "Motos"].map((t) => (
            <span key={t} className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-300">
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
