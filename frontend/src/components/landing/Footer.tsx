import { WaIcon } from "./Header";
import { WA_URL, PHONE_DISPLAY } from "@/lib/site";

export const Footer = () => (
  <footer className="border-t border-white/10 bg-[#08090A] py-10" data-testid="footer">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-8">
      <img src="/img/logo-sanroman.jpg" alt="Taller San Román" className="h-10 w-auto rounded" />
      <p className="text-xs text-zinc-500">
        Taller San Román · Mecánica integral y urgencias 24hs · Berisso, Buenos Aires · {PHONE_DISPLAY}
      </p>
      <p className="text-xs text-zinc-600">© {new Date().getFullYear()} Taller San Román. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export const FloatingWhatsApp = () => (
  <a
    href={WA_URL}
    target="_blank"
    rel="noopener noreferrer"
    data-testid="floating-whatsapp-cta"
    aria-label="WhatsApp — ¿Tenés una urgencia?"
    className="group fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl animate-pulse-wa transition-transform hover:scale-110 active:scale-95"
  >
    <WaIcon className="h-8 w-8" />
    <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-[#1C1F26] px-4 py-2 text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
      ¿Tenés una urgencia?
    </span>
  </a>
);
