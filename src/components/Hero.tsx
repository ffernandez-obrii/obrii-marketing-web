import { ButtonLink } from "@/components/ui/button";

function HeroGridPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
      aria-hidden
    >
      <svg
        className="h-full w-full text-foreground"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="hero-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="contacto"
      className="relative isolate w-full overflow-hidden px-6 py-24 sm:px-10 sm:py-28 md:py-32 lg:px-12 lg:py-40"
    >
      <HeroGridPattern />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center lg:max-w-4xl">
        <span className="inline-flex items-center rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/80">
          Consultoría Boutique en Chile
        </span>

        <h1 className="mt-8 text-balance font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl md:text-5xl lg:text-6xl lg:leading-[1.1] [text-shadow:0_0_0_1px_hsl(var(--primary)/0.28),0_14px_50px_-18px_hsl(var(--primary)/0.45)]">
          Asegura el Talento Crítico para tu Operación B2B
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg md:text-xl">
          Evaluación psicológica y Headhunting especializado para Minería,
          Energía y Tecnología. Mitigamos tu riesgo operativo encontrando a los
          profesionales exactos que tu empresa necesita para escalar.
        </p>

        <div className="mt-12 flex w-full flex-col items-stretch justify-center gap-4 sm:mt-14 sm:w-auto sm:flex-row sm:items-center">
          <ButtonLink
            href={
              process.env.NEXT_PUBLIC_AGENDAR_ASESORIA_URL ?? "#contacto"
            }
            variant="primary"
            size="lg"
            {...((process.env.NEXT_PUBLIC_AGENDAR_ASESORIA_URL ?? "").startsWith(
              "http",
            )
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            Agendar Asesoría
          </ButtonLink>
          <ButtonLink href="#servicios" variant="secondary" size="lg">
            Nuestros Servicios
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
