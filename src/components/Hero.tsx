import { ButtonLink } from "@/components/ui/button";
import { AGENDAR_ASESORIA_URL, CONTACT_EMAIL } from "@/lib/site";

/** Fondo sin retícula: gradientes suaves + halos difuminados (estilo vidrio / futurista sobrio). */
function HeroAtmosphere() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.07] via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_50%_-8%,hsl(var(--primary)/0.14),transparent_58%)]" />
      <div className="absolute -left-[15%] top-[8%] h-[min(55vw,26rem)] w-[min(55vw,26rem)] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-[12%] top-[28%] h-[min(48vw,22rem)] w-[min(48vw,22rem)] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute bottom-[15%] left-1/3 h-40 w-[min(70vw,28rem)] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)/0.15)_0%,transparent_35%,transparent_65%,hsl(var(--background)/0.4)_100%)]" />
      <div className="absolute left-1/2 top-[18%] h-px w-[min(92%,36rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="contacto"
      className="relative isolate w-full overflow-hidden px-6 pb-24 pt-10 sm:px-10 sm:pb-28 sm:pt-12 md:pb-32 md:pt-14 lg:px-12 lg:pb-40 lg:pt-16"
    >
      <HeroAtmosphere />
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
