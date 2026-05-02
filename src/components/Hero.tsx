import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="contacto"
      className="w-full px-6 py-24 sm:px-10 sm:py-28 md:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center lg:max-w-4xl">
        <span className="inline-flex items-center rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/80">
          Consultoría Boutique en Chile
        </span>

        <h1 className="mt-8 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-5xl lg:text-6xl lg:leading-[1.1]">
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
