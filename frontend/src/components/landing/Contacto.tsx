import { motion } from "motion/react";
import { Phone, MapPin, Clock } from "lucide-react";
import { WaIcon } from "./Header";
import { WA_URL, TEL_URL, MAP_EMBED_URL, ADDRESS, HOURS, PHONE_DISPLAY } from "@/lib/site";

export const Contacto = () => (
  <section id="contacto" className="mx-auto max-w-6xl px-4 py-20 sm:px-8" data-testid="contact-section">
    <div className="grid items-start gap-10 lg:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <img src="/img/logo-sanroman.jpg" alt="Taller San Román — Taller Mecánico" className="w-full max-w-md rounded-xl border border-white/10" data-testid="contact-logo" />
        <h2 className="mt-8 font-display text-4xl uppercase text-white sm:text-5xl">
          Presupuesto <span className="text-[#F5C518]">sin cargo</span>
        </h2>
        <p className="mt-3 max-w-md text-sm text-zinc-400">
          Contanos qué le pasa a tu vehículo y te respondemos con un presupuesto claro, sin compromiso.
        </p>
        <ul className="mt-6 space-y-3 text-sm text-zinc-300">
          <li className="flex items-start gap-3" data-testid="contact-address">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FF3D2E]" />
            {ADDRESS}
          </li>
          <li className="flex items-start gap-3" data-testid="contact-hours">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#FF3D2E]" />
            <span>{HOURS} · <strong className="text-[#F5C518]">Urgencias 24 hs</strong></span>
          </li>
          <li className="flex items-start gap-3" data-testid="contact-phone">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#FF3D2E]" />
            {PHONE_DISPLAY}
          </li>
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-whatsapp-cta"
            className="flex h-14 items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 text-base font-extrabold text-white transition-transform hover:scale-[1.03] active:scale-95"
          >
            <WaIcon className="h-5 w-5" /> Escribir por WhatsApp
          </a>
          <a
            href={TEL_URL}
            data-testid="contact-call-cta"
            className="flex h-14 items-center justify-center gap-3 rounded-full border-2 border-[#F5C518] px-8 text-base font-extrabold text-[#F5C518] transition-colors hover:bg-[#F5C518] hover:text-black active:scale-95"
          >
            <Phone className="h-5 w-5" /> Llamar
          </a>
        </div>
      </motion.div>
      <motion.div
        className="overflow-hidden rounded-2xl border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        data-testid="contact-map"
      >
        <iframe
          title="Mapa — Taller San Román, Berisso"
          src={MAP_EMBED_URL}
          className="h-[420px] w-full grayscale-[35%] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </motion.div>
    </div>
  </section>
);
