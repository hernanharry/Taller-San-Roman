import { motion } from "motion/react";
import { SEPARATOR_BG } from "@/lib/site";

const PILLARS = [
  { num: "01", title: "Reputación comprobada", desc: "4.9★ en Google. Los vecinos de Berisso avalan la honestidad y la claridad en cada diagnóstico." },
  { num: "02", title: "Atención fuera de horario", desc: "Las fallas no avisan. Guardia real de urgencias 24hs, también fines de semana y feriados." },
  { num: "03", title: "Repuestos en el día", desc: "Trabajamos con distribuidores de la zona para que tu vehículo no pase días detenido." },
];

export const PorQue = () => (
  <section id="por-que" className="relative overflow-hidden border-y border-white/10 py-20" data-testid="why-us-section">
    <div
      className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
      style={{ backgroundImage: `url(${SEPARATOR_BG})` }}
    />
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0B0C0E] via-transparent to-[#0B0C0E]" />
    <div className="mx-auto max-w-6xl px-4 sm:px-8">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF3D2E]">La diferencia</p>
        <h2 className="mt-2 font-display text-4xl uppercase text-white sm:text-5xl">¿Por qué San Román?</h2>
      </motion.div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {PILLARS.map((p, i) => (
          <motion.div
            key={p.num}
            className="border-l-2 border-[#F5C518] pl-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            data-testid={`pillar-${p.num}`}
          >
            <span className="font-display text-5xl text-outline">{p.num}</span>
            <h3 className="mt-3 font-display text-xl uppercase text-white">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
