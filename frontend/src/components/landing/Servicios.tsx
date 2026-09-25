import { motion } from "motion/react";
import { Wrench, Droplets, Siren } from "lucide-react";

const SERVICES = [
  {
    id: "service-card-general",
    tag: "01 / Principal",
    icon: Wrench,
    title: "Mecánica General",
    desc: "Motor, tren delantero, frenos, embrague, inyección electrónica y suspensión. Todas las marcas.",
    badge: "Diagnóstico honesto",
  },
  {
    id: "service-card-service",
    tag: "02 / Preventivo",
    icon: Droplets,
    title: "Service y Mantenimiento",
    desc: "Cambio de aceite y filtros, distribución, chequeo pre-VTV y escaneo computarizado. Entrega en el día.",
    badge: "Repuestos en el día",
  },
  {
    id: "service-card-urgencias",
    tag: "03 / Emergencias",
    icon: Siren,
    title: "Urgencias 24hs",
    desc: "Auxilio mecánico en Berisso y zona, de noche, fines de semana y feriados. No te dejamos varado.",
    badge: "Guardia activa 24/7",
  },
];

export const Servicios = () => (
  <section id="servicios" className="mx-auto max-w-6xl px-4 py-20 sm:px-8" data-testid="services-section">
    <motion.p
      className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF3D2E]"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      Qué hacemos
    </motion.p>
    <motion.h2
      className="mt-2 font-display text-4xl uppercase text-white sm:text-5xl"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      Servicios del taller
    </motion.h2>
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {SERVICES.map((s, i) => (
        <motion.article
          key={s.id}
          data-testid={s.id}
          className="group rounded-2xl border border-white/10 bg-[#14161A] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C518]/40"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <s.icon className="h-8 w-8 text-[#F5C518]" />
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">{s.tag}</span>
          </div>
          <h3 className="mt-5 font-display text-2xl uppercase text-white">{s.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.desc}</p>
          <span className="mt-5 inline-block rounded-full bg-[#F5C518]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#F5C518]">
            {s.badge}
          </span>
        </motion.article>
      ))}
    </div>
  </section>
);
