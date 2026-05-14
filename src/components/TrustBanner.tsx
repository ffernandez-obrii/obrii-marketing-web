const sectors = ["MINERÍA", "ENERGÍA", "FINTECH"] as const;

export function TrustBanner() {
  return (
    <section
      className="border-y border-border/40 bg-muted/20 py-8"
      aria-label="Sectores atendidos"
    >
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Industrias de alto riesgo y alta exigencia
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground sm:text-base">
          {sectors.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
