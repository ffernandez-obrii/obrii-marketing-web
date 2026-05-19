import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ButtonLink } from "@/components/ui/button";

const TRIAL_URL =
  "https://app.obriiconsulting.com/auth?mode=signup&trial=true";

export const metadata: Metadata = {
  title: {
    absolute:
      "Obrii App | Software de Clima Organizacional y Selección B2B con IA",
  },
  description:
    "Optimiza la gestión de talento. Automatiza entrevistas con el método BEI, mide riesgos psicosociales y evalúa el clima laboral con IA. Prueba 7 días gratis.",
  alternates: {
    canonical: "/obrii-app",
  },
  robots: { index: true, follow: true },
};

export default function ObriiAppPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col pt-[5.75rem] sm:pt-24">
        <section className="relative isolate overflow-hidden px-6 pb-24 pt-12 sm:px-10 lg:px-12 lg:pb-32 lg:pt-16">
          <HeroBackground />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
              Plataforma SaaS · RRHH con IA
            </span>
            <h1 className="mt-6 font-sans text-4xl font-bold tracking-tight text-zinc-900 text-balance sm:text-5xl">
              La evolución de RRHH impulsada por IA
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 text-pretty">
              Obrii App centraliza selección por competencias (método BEI),
              medición de riesgos psicosociales y clima organizacional en un
              solo panel. Decisiones basadas en datos, menos carga operativa
              para tu equipo de personas.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink
                href={TRIAL_URL}
                variant="primary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Probar 7 días gratis →
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.12),transparent_60%)]"
      aria-hidden
    />
  );
}
