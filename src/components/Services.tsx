const cardClass =
  "p-8 rounded-[1rem] border border-border/60 bg-card/60 backdrop-blur-sm hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.2),0_10px_30px_-14px_hsl(var(--primary)/0.3)] transition-all";

const services = [
  {
    title: "Atracción de Talento",
    description:
      "Gestionamos el ciclo completo de búsqueda y evaluación para perfiles críticos, asegurando calidad metodológica y garantía de permanencia.",
  },
  {
    title: "Evaluación Psicolaboral",
    description:
      "Validamos a sus candidatos finalistas mediante entrevistas estructuradas STAR + tres tests psicométricos y auditoría de IA para una objetividad total.",
  },
  {
    title: "Obrii App (SaaS)",
    description:
      "El termómetro de tu empresa. Plataforma transaccional y autogestionada para medir fit cultural, burnout y competencias técnicas al instante.",
  },
] as const;

export function Services() {
  return (
    <section
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
            Desde diagnósticos automatizados en la nube hasta consultoría de
            alto nivel para roles críticos.
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
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
