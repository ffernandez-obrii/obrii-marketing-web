const sectors = [
  "Minería",
  "Banca y Finanzas",
  "Sector Público",
  "Retail",
  "Energía",
  "Tecnología",
] as const;

export function TrustBanner() {
  return (
    <section
      className="relative isolate w-full overflow-hidden border-y border-white/[0.08] bg-zinc-950 py-16 text-zinc-50"
      aria-labelledby="trust-banner-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.14),transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-12">
        <h2
          id="trust-banner-heading"
          className="text-center font-sans text-lg font-semibold tracking-tight text-white sm:text-xl md:text-2xl"
        >
          Experiencia estratégica en industrias de alta complejidad
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-12 md:grid-cols-6 md:gap-4">
          {sectors.map((label) => (
            <li
              key={label}
              className="flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-3 text-center text-sm font-medium text-zinc-200 backdrop-blur-sm transition-colors hover:border-white/[0.12] hover:bg-white/[0.06] sm:text-[0.9375rem]"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
