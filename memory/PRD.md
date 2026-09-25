# PRD — Taller San Román (Landing)

## Problem statement original
Landing de una sola página para taller mecánico en Berisso. Objetivo único: más contactos por WhatsApp. Contacto solo WhatsApp (+54 9 11 6134-4052) + llamada, sin formularios. Precios: "Presupuesto sin cargo". Identidad: dark + amarillo #F5C518 + rojo #FF3D2E, fuentes Anton + Archivo. Secciones: header sticky, hero con badges 24hs/4.9★, servicios, galería de trabajos (fotos reales), reseñas con link a Google, por qué elegirnos, contacto con mapa, footer + botón flotante WhatsApp. Extras: schema LocalBusiness, lazy loading, accesibilidad, mobile-first.

## Arquitectura
- Frontend: Vite + React 19 + TS, `src/pages/Landing.tsx` + `src/components/landing/*` (Header, Hero, Marquee, Servicios, Trabajos, Resenas, PorQue, Contacto, Footer).
- Motion: `motion/react` (reveal enmascarado línea por línea en hero, scroll-reveals, parallax en hero) + Lenis (scroll suave).
- Constantes en `src/lib/site.ts` (URLs de WhatsApp/tel/mapa, dirección, horarios, fondos).
- Assets reales del taller en `frontend/public/img/` (logo-sanroman.jpg + 4 fotos de trabajos).
- Backend: sin cambios (solo status de template); la landing no depende de él.
- Schema JSON-LD AutoRepair + fonts Anton/Archivo + favicon SVG en `frontend/index.html`.

## Datos reales confirmados
- WhatsApp/tel: +54 9 11 6134-4052 (mensaje pre-cargado "Hola Gabriel, necesito ayuda con mi vehículo...").
- Link Google Maps/reseñas: https://maps.app.goo.gl/xvughZotnKip91sK7 (rating 4.9 verificado en la ficha).
- Dirección según ficha de Google: Fray Mamerto Esquiú 2530 (la ficha indica Munro; el cliente comunica Berisso — revisar con el cliente).
- Horarios: Lun–Vie 9–13 y 15–20, Sáb 9–13, urgencias 24hs (tomados de la ficha de Google).

## Implementado (2026-09-25)
- Landing completa one-page con las 8 secciones, botón flotante WhatsApp, marquee editorial, grid asimétrico de trabajos con fotos reales, testimonios, mapa embebido, schema LocalBusiness, lazy loading, data-testids en todos los CTAs.
- Verificado: typecheck limpio, curl /api OK, screenshots desktop + mobile por URL pública.

## Backlog
- P0: Confirmar con el cliente dirección exacta (discrepancia Berisso vs ficha Google "Munro").
- P1: Foto de Gabriel para "Por qué elegirnos" (marca personal).
- P1: Reemplazar testimonios de muestra por reseñas reales copiadas de Google.
- P2: Versión PNG transparente del logo (hoy se usa el cartel JPG completo en header/footer).
- P2: OG image dedicada para compartir por WhatsApp.
