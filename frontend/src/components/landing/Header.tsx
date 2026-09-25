import { Phone } from "lucide-react";
import { WA_URL, TEL_URL } from "@/lib/site";

const WaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.83 14.12c-.25.7-1.45 1.33-2.02 1.42-.52.08-1.17.11-1.89-.12-.44-.14-1-.32-1.71-.63-3.02-1.3-4.99-4.34-5.14-4.54-.15-.2-1.23-1.63-1.23-3.11 0-1.48.78-2.21 1.05-2.51.27-.3.6-.38.8-.38.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.85 2.07.92 2.22.08.15.13.33.03.53-.1.2-.15.33-.3.5-.15.18-.32.4-.45.53-.15.15-.31.31-.13.61.18.3.79 1.31 1.7 2.12 1.17 1.04 2.16 1.37 2.46 1.52.3.15.48.13.65-.08.18-.2.75-.88.95-1.18.2-.3.4-.25.67-.15.28.1 1.75.83 2.05.98.3.15.5.22.58.35.07.13.07.73-.18 1.42z" />
  </svg>
);

export { WaIcon };

export const Header = () => (
  <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0C0E]/85 backdrop-blur-xl">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-8">
      <a href="#inicio" className="flex items-center gap-2.5" data-testid="header-logo">
        <img src="/img/logo-sanroman.jpg" alt="Taller San Román" className="h-9 w-auto rounded-sm" />
        <span className="hidden font-display text-sm uppercase tracking-wide text-white sm:block">
          Taller San Román
        </span>
      </a>
      <div className="flex items-center gap-2">
        <span className="mr-1 hidden items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#F5C518] md:flex" data-testid="header-status-badge">
          <span className="h-2 w-2 rounded-full bg-[#FF3D2E] animate-pulse-dot" />
          Guardia 24hs
        </span>
        <a
          href={TEL_URL}
          data-testid="header-call-cta"
          className="flex h-11 items-center gap-2 rounded-full border border-[#F5C518]/60 px-4 text-sm font-bold text-[#F5C518] transition-colors hover:bg-[#F5C518] hover:text-black"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Llamar</span>
        </a>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="header-whatsapp-cta"
          className="flex h-11 items-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
        >
          <WaIcon className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  </header>
);
