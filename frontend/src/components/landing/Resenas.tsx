import { motion } from "motion/react";
import { Star, ExternalLink } from "lucide-react";
import { GOOGLE_MAPS_URL } from "@/lib/site";

const REVIEWS = [
  { author: "Gaston Poncetta", date: "Hace 8 meses", text: "Excelente servicio. Me quedé varado en la ruta un domingo y no solo me repararon el auto, sino que consiguieron el repuesto el mismo día. Muy recomendable." },
  { author: "Diego Alejandro", date: "Hace 2 semanas", text: "Gracias Gabriel, me salvaste un sábado a la tarde cuando otros talleres estaban cerrados. Me diste una mano de verdad." },
  { author: "Matías Denóvile", date: "Hace 2 años", text: "Tuvimos un problema con el rulemán de la rueda en plena madrugada y Gabriel lo arregló rápido, con una predisposición destacable. ¡Muy recomendable!" },
];

export const Resenas = () => (
  <section id="resenas" className="mx-auto max-w-6xl px-4 py-20 sm:px-8" data-testid="reviews-section">
    <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF3D2E]">Reputación</p>
        <h2 className="mt-2 font-display text-4xl uppercase text-white sm:text-5xl">Lo que dicen los vecinos</h2>
      </motion.div>
      <motion.a
        href={GOOGLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="google-reviews-link"
        className="flex items-center gap-3 rounded-2xl border border-[#F5C518]/30 bg-[#F5C518]/5 px-5 py-4 transition-colors hover:bg-[#F5C518]/15"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="font-display text-4xl text-[#F5C518]">4.9</span>
        <span>
          <span className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[#F5C518] text-[#F5C518]" />
            ))}
          </span>
          <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-zinc-300">
            Ver reseñas en Google <ExternalLink className="h-3 w-3" />
          </span>
        </span>
      </motion.a>
    </div>
    <div className="mt-10 grid gap-4 md:grid-cols-3">
      {REVIEWS.map((r, i) => (
        <motion.blockquote
          key={r.author}
          className="rounded-2xl border border-white/10 bg-[#14161A] p-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          data-testid={`review-card-${i + 1}`}
        >
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} className="h-3.5 w-3.5 fill-[#F5C518] text-[#F5C518]" />
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300">"{r.text}"</p>
          <footer className="mt-4 text-xs">
            <span className="font-bold text-white">{r.author}</span>
            <span className="text-zinc-500"> · {r.date} · Google</span>
          </footer>
        </motion.blockquote>
      ))}
    </div>
  </section>
);
