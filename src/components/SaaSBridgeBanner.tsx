import Link from "next/link";
import { Activity, Brain, Calculator, FileSearch, type LucideIcon } from "lucide-react";
import { APP_TRIAL_URL } from "@/lib/site";

const pillars: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Selección",
    description: "CV Screener con IA y entrevistas BEI/STAR estructuradas.",
    icon: FileSearch,
  },
  {
    title: "Talento",
    description: "Suite psicométrica y mapas de competencias accionables.",
    icon: Brain,
  },
  {
    title: "Cultura",
    description: "Clima Pulse y detección temprana de burnout.",
    icon: Activity,
  },
  {
    title: "Estructura",
    description: "Costos laborales LATAM y decisiones con trazabilidad.",
    icon: Calculator,
  },
];

export function SaaSBridgeBanner() {
  return (
    <section
      className="relative mx-auto w-full max-w-6xl px-6 py-12 sm:px-10 lg:px-12"
      aria-labelledby="saas-bridge-heading"
    >
      {/* Halo ambiental difuso detrás de la tarjeta */}
      <div
        className="pointer-events-none absolute inset-0 mx-auto h-full w-full max-w-5xl blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, hsl(var(--primary) / 0.22), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative overflow-hidden border border-border/70 bg-gradient-to-br from-card via-sky-500/3 to-violet-500/5 backdrop-blur-md shadow-[0_32px_64px_-12px_hsl(var(--primary)/0.08)] rounded-2xl ring-1 ring-white/40 dark:ring-black/10 transition-all duration-300 hover:shadow-[0_32px_64px_-12px_hsl(var(--primary)/0.12)]">
        {/* Hairline espectral premium */}
        <div className="h-1.5 w-full bg-gradient-to-r from-sky-500 via-primary to-violet-500" />

        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12">
          {/* Columna de copy + CTA */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/70 px-3 py-1 font-sans text-xs font-medium tracking-wide text-foreground/80 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              HR OS modular
            </span>
            <h2
              id="saas-bridge-heading"
              className="mt-4 text-balance font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Del servicio boutique al software propio.
            </h2>
            <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
              <strong className="font-semibold text-foreground">Obrii App</strong>{" "}
              es el HR OS modular que nace de nuestra consultoría: reúne en un
              solo flujo —de la selección a la estructura de costos— lo que hoy
              resuelves con herramientas dispersas. La IA prepara la evidencia;
              la decisión sigue siendo tuya. Operación pensada para Chile y toda
              Latinoamérica.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={APP_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-sans text-sm font-semibold text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_0_25px_hsl(var(--primary)/0.25)]"
              >
                Prueba 7 días gratis →
              </Link>
              <Link
                href="/obrii-app"
                className="inline-flex items-center justify-center rounded-lg border border-border/70 bg-background/60 px-6 py-3 font-sans text-sm font-semibold text-foreground/80 backdrop-blur-sm transition-colors hover:text-foreground"
              >
                Conocer Obrii App
              </Link>
            </div>
            <p className="mt-3 font-sans text-xs text-muted-foreground">
              Sin tarjeta de crédito · Configura tu cuenta en menos de un minuto.
            </p>
          </div>

          {/* Rejilla de 4 pilares en sub-paneles de vidrio */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-border/60 bg-gradient-to-br from-muted/60 to-muted/30 p-4 shadow-sm"
                >
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4.5" aria-hidden />
                  </div>
                  <h3 className="mt-3 font-sans text-sm font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 font-sans text-xs leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
