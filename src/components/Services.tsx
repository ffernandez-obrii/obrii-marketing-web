import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  detailPdf?: "/propuesta-evaluacion.pdf" | "/propuesta-atraccion-talento.pdf";
  /** Ancla del servicio dentro de la página /servicios. */
  detailAnchor: string;
};

const services: ServiceItem[] = [
  {
    title: "Evaluación Psicolaboral",
    description:
      "Validación rigurosa de candidatos finalistas por competencias: decisión objetiva, defendible ante dirección y con trazabilidad metodológica completa.",
    detailPdf: "/propuesta-evaluacion.pdf",
    detailAnchor: "/servicios#evaluacion-psicolaboral",
  },
  {
    title: "Headhunting",
    description:
      "Ciclo completo de búsqueda y selección para perfiles críticos, con garantía de permanencia y el mismo estándar de rigor en cada etapa.",
    detailPdf: "/propuesta-atraccion-talento.pdf",
    detailAnchor: "/servicios#headhunting",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="w-full scroll-mt-24 bg-gradient-to-b from-transparent via-zinc-50 to-white px-6 py-20 sm:px-10 md:py-28 lg:px-12"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-4xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="services-heading"
            className="text-balance font-sans text-3xl font-semibold tracking-tight text-primary sm:text-4xl"
          >
            Soluciones a Medida para tu Escala
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
            Evaluación por competencias y rigor metodológico para roles que no
            pueden fallar — más tecnología cuando tu operación necesita escalar
            en Chile y el resto de Latinoamérica.
          </p>
        </header>

        <ul className="mt-14 grid grid-cols-1 items-stretch gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {services.map((item) => (
            <li key={item.title}>
              <article className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl">
                <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">
                  Servicio Core
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-col gap-4">
                  <Link
                    href={item.detailAnchor}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary/90 px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.35),0_10px_30px_-14px_hsl(var(--primary)/0.6)] transition-all duration-200 hover:bg-primary active:scale-[0.98]"
                    aria-label={`Ver detalle del servicio: ${item.title}`}
                  >
                    Ver detalle del servicio
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  {item.detailPdf ? (
                    <a
                      href={item.detailPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
                      aria-label={`Descargar detalle del servicio: ${item.title}`}
                    >
                      <Download className="h-4 w-4" />
                      Descargar Detalle del Servicio
                    </a>
                  ) : null}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
