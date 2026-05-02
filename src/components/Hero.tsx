import { ButtonLink } from "@/components/ui/button";
import { AGENDAR_ASESORIA_URL, CONTACT_EMAIL } from "@/lib/site";

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
      className="relative isolate w-full overflow-hidden px-6 pb-24 pt-10 sm:px-10 sm:pb-28 sm:pt-12 md:pb-32 md:pt-14 lg:px-12 lg:pb-40 lg:pt-16"
    >
      <HeroGridPattern />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center lg:max-w-4xl">
        <span className="inline-flex items-center rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/80">
          Ps. Francisco Fernández, consultor profesional
        </span>

        <h1 className="mt-8 text-balance font-sans text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-5xl lg:text-6xl lg:leading-[1.1] [text-shadow:0_0_0_1px_hsl(var(--primary)/0.28),0_14px_50px_-18px_hsl(var(--primary)/0.45)]">
          Asegura el Talento Crítico para tu Operación B2B
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg md:text-xl">
          Evaluación psicológica y Headhunting especializado para Minería,
          Energía y Tecnología. Mitigamos tu riesgo operativo encontrando a los
          profesionales exactos que tu empresa necesita para escalar.
        </p>

        <div className="mt-12 flex w-full flex-col items-stretch justify-center gap-4 sm:mt-14 sm:w-auto sm:flex-row sm:items-center">
          <ButtonLink
            href={AGENDAR_ASESORIA_URL}
            variant="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Asesoría
          </ButtonLink>
          <ButtonLink href="#servicios" variant="secondary" size="lg">
            Nuestros Servicios
          </ButtonLink>
        </div>

        <p className="mt-8 text-xs text-foreground/45 sm:text-sm">
          <span className="text-foreground/35">Contacto:</span>{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-medium text-foreground/55 underline-offset-2 transition-colors hover:text-primary hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
