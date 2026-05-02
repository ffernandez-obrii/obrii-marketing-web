const pillars = [
  {
    title: "Entrevistas STAR",
    description:
      "Exploración profunda de comportamientos pasados para predecir el desempeño futuro con precisión.",
  },
  {
    title: "Batería Psicométrica",
    description:
      "Triangulación de datos usando 3 tests estandarizados para evaluar personalidad, lógica y competencias críticas.",
  },
  {
    title: "Auditoría de IA",
    description:
      "Revisión algorítmica del proceso para garantizar cero sesgos y una objetividad total en el informe final.",
  },
] as const;

export function Methodology() {
  return (
    <section
      className="border-y border-border/40 bg-muted/30 py-16 sm:py-20"
      aria-labelledby="methodology-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <h2
          id="methodology-heading"
          className="mx-auto max-w-3xl text-center font-sans text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Evaluación Psicolaboral de Alto Estándar
        </h2>

        <ul className="mt-12 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
          {pillars.map((item) => (
            <li key={item.title}>
              <article className="flex h-full flex-col rounded-xl border border-border/50 bg-background/60 p-6 backdrop-blur-sm sm:p-8">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
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
