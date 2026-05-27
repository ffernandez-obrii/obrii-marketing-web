import Link from "next/link";

export function SaaSBridgeBanner() {
  return (
    <section
      className="relative mx-auto w-full max-w-6xl px-6 py-10 sm:px-10 lg:px-12"
      aria-labelledby="saas-bridge-heading"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-muted/50 via-card to-card p-8 shadow-lg">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.2), transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative max-w-3xl">
          <h2
            id="saas-bridge-heading"
            className="font-sans text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance"
          >
            ¿Buscas automatizar tus decisiones de talento con Inteligencia
            Artificial?
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
            Conoce Obrii App: nuestro HR OS modular diseñado para estructurar
            evidencia fidedigna de candidatos, medir clima, precaver burnout y
            simular costos laborales en un menú lateral claro. Pruébalo gratis
            por 7 días.
          </p>
          <div className="mt-6">
            <Link
              href="/obrii-app"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
            >
              Conocer Obrii App →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
