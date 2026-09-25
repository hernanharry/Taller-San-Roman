const ITEMS = [
  "Presupuesto sin cargo",
  "Atención 24 horas",
  "Repuestos en el día",
  "Mecánica integral Berisso",
  "Diagnóstico honesto",
  "Taller San Román",
];

export const Marquee = () => {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-[#F5C518] py-3" data-testid="marquee-ticker" aria-hidden="true">
      <div className="flex w-max animate-marquee items-center gap-8 pr-8">
        {[...row, ...row].map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-lg uppercase tracking-wide text-black">
            {item}
            <span className="text-[#FF3D2E]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};
