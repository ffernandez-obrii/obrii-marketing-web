import Link from "next/link";

const primaryButtonClass =
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-11 rounded-[0.6rem] px-8 bg-primary/90 text-primary-foreground hover:bg-primary shadow-[0_0_0_1px_hsl(var(--primary)/0.35),0_10px_30px_-14px_hsl(var(--primary)/0.6)]";

const secondaryButtonClass =
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-11 rounded-[0.6rem] px-8 border border-input/60 bg-background/40 backdrop-blur-sm text-foreground hover:border-primary/40 hover:bg-primary/10";

export function Hero() {
  return (
    <section className="w-full px-6 py-24 sm:px-10 sm:py-28 md:py-32 lg:px-12 lg:py-40">
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
          <Link
            href="#contacto"
            className={primaryButtonClass}
          >
            Agendar Asesoría
          </Link>
          <Link
            href="#servicios"
            className={secondaryButtonClass}
          >
            Nuestros Servicios
          </Link>
        </div>
      </div>
    </section>
  );
}
