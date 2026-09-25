import { motion } from "motion/react";

const PHOTOS = [
  { src: "/img/trabajo-camion.jpg", title: "Auxilio y mecánica pesada", sub: "Camión Don Pedro · cabina levantada", span: "md:col-span-2 md:row-span-2", ratio: "aspect-[4/5] md:aspect-auto" },
  { src: "/img/trabajo-auto.jpg", title: "Diagnóstico honesto", sub: "Frenos y tren delantero", span: "", ratio: "aspect-square" },
  { src: "/img/trabajo-motor.jpg", title: "Rectificación y motores", sub: "Motor completo en cadena", span: "", ratio: "aspect-square" },
  { src: "/img/trabajo-noche.jpg", title: "Atendemos de noche", sub: "Guardia nocturna en Berisso", span: "md:col-span-2", ratio: "aspect-[16/10] md:aspect-[2/1]" },
  { src: "/img/logo-sanroman.jpg", title: "Nuestro taller en Berisso", sub: "Ensenada 996", span: "md:col-span-2", ratio: "aspect-[16/10] md:aspect-[2/1]", contain: true },
];

export const Trabajos = () => (
  <section id="trabajos" className="border-y border-white/10 bg-[#0E1013] py-20" data-testid="trabajos-section">
    <div className="mx-auto max-w-6xl px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF3D2E]">Trabajo real</p>
        <h2 className="mt-2 font-display text-4xl uppercase text-white sm:text-5xl">Trabajos en el taller</h2>
        <p className="mt-3 max-w-lg text-sm text-zinc-400">Fotos reales de vehículos atendidos en nuestras instalaciones. Sin stock, sin vueltas.</p>
      </motion.div>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4" data-testid="trabajos-gallery-grid">
        {PHOTOS.map((p, i) => (
          <motion.figure
            key={p.src + i}
            className={`group relative overflow-hidden rounded-xl border border-white/10 ${p.span}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            data-testid={`trabajo-item-${i + 1}`}
          >
            <img
              src={p.src}
              alt={p.title}
              loading="lazy"
              className={`${p.ratio} h-full w-full ${p.contain ? "bg-black object-contain" : "object-cover"} transition-transform duration-700 group-hover:scale-105`}
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-10">
              <span className="font-display text-lg uppercase leading-tight text-white">{p.title}</span>
              <span className="block text-xs text-[#F5C518]">{p.sub}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);
