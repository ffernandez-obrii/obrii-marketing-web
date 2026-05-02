import { ButtonLink } from "@/components/ui/button";

const cardClass =
  "p-8 rounded-xl border border-border/60 bg-card/60 backdrop-blur shadow-[0_0_0_1px_hsl(var(--border)/0.5),0_20px_40px_-28px_hsl(var(--ring)/0.6)] transition-shadow hover:shadow-[0_0_0_1px_hsl(var(--border)/0.55),0_24px_48px_-28px_hsl(var(--ring)/0.65)]";

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
    title: "Atracción de Talento y Headhunting",
    description:
      "Ciclo completo de búsqueda y selección para perfiles críticos, con garantía de permanencia y el mismo estándar de rigor en cada etapa.",
    detailPdf: "/propuesta-atraccion-talento.pdf",
  },
  {
    title: "Obrii App (SaaS)",
    description:
      "El termómetro de tu empresa. Plataforma transaccional y autogestionada para medir fit cultural, burnout y competencias técnicas al instante.",
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="w-full px-6 py-20 sm:px-10 md:py-28 lg:px-12"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center lg:max-w-4xl">
          <h2
            id="services-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Soluciones a Medida para tu Escala
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
            Evaluación por competencias y rigor metodológico para roles que no
            pueden fallar — más tecnología cuando tu operación necesita escala.
          </p>
        </header>

        <ul className="mt-14 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {services.map((item) => (
            <li key={item.title}>
              <article className={`${cardClass} flex h-full flex-col`}>
                <h3 className="text-lg font-semibold tracking-tight text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/75 sm:text-base">
                  {item.description}
                </p>
                {item.detailPdf ? (
                  <ButtonLink
                    href={item.detailPdf}
                    variant="secondary"
                    size="default"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full"
                    aria-label={`Descargar detalle del servicio: ${item.title}`}
                  >
                    📥 Descargar Detalle del Servicio
                  </ButtonLink>
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
            📄 Ver ejemplo de informe (anonimizado)
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
