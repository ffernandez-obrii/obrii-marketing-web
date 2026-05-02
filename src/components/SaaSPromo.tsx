import { ButtonLink } from "@/components/ui/button";

const APP_URL = "https://app.obriiconsulting.com";

export function SaaSPromo() {
  return (
    <section
      id="obrii-app"
      className="w-full px-6 py-20 sm:px-10 md:py-28 lg:px-12"
      aria-labelledby="saas-promo-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <span className="inline-flex items-center rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/80">
            Obrii App — HR SaaS
          </span>
          <h2
            id="saas-promo-heading"
            className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            El Termómetro Exacto de tu Talento
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-foreground/75 sm:text-lg">
            Nuestra plataforma propietaria te permite medir el fit cultural,
            detectar riesgo de burnout temprano y evaluar competencias técnicas
            a escala. Toma decisiones basadas en datos antes de que el talento
            crítico abandone la operación.
          </p>
          <div className="mt-8">
            <ButtonLink href={APP_URL} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
              Descubrir Obrii App →
            </ButtonLink>
          </div>
        </div>

        <div
          className="relative aspect-video overflow-hidden rounded-xl border border-border/60 bg-card/60 shadow-[0_0_0_1px_hsl(var(--border)/0.5),0_20px_40px_-28px_hsl(var(--ring)/0.6)] backdrop-blur"
          aria-hidden
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-background/40 to-accent/20" />
          <div className="relative flex h-full items-center justify-center p-8">
            <span className="text-sm font-medium text-muted-foreground">
              Vista previa del dashboard
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
