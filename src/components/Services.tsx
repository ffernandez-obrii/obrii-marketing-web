import { ButtonLink } from "@/components/ui/button";
import { Download } from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  detailPdf?: "/propuesta-evaluacion.pdf" | "/propuesta-atraccion-talento.pdf";
};

const services: ServiceItem[] = [
  {
    title: "Evaluación Psicolaboral",
    description:
      "Validación rigurosa de candidatos finalistas por competencias: decisión objetiva, defendible ante dirección y con trazabilidad metodológica completa.",
    detailPdf: "/propuesta-evaluacion.pdf",
  },
  {
    title: "Headhunting",
    description:
      "Ciclo completo de búsqueda y selección para perfiles críticos, con garantía de permanencia y el mismo estándar de rigor en cada etapa.",
    detailPdf: "/propuesta-atraccion-talento.pdf",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="w-full bg-gradient-to-b from-transparent via-zinc-50 to-white px-6 py-20 sm:px-10 md:py-28 lg:px-12"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-4xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="services-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-primary sm:text-4xl"
          >
            Soluciones a Medida para tu Escala
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
            Evaluación por competencias y rigor metodológico para roles que no
            pueden fallar — más tecnología cuando tu operación necesita escala.
          </p>
        </header>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
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
                {item.detailPdf ? (
                  <a
                    href={item.detailPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
                    aria-label={`Descargar detalle del servicio: ${item.title}`}
                  >
                    <Download className="h-4 w-4" />
                    Descargar Detalle del Servicio
                  </a>
                ) : null}
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center md:mt-14">
          <ButtonLink
            href="/informe-ejemplo.pdf"
            variant="secondary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver ejemplo de informe anonimizado en PDF"
          >
            Ver ejemplo de informe (anonimizado)
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
