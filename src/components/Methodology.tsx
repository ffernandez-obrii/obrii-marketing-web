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
  const [featured, ...rest] = pillars;

  return (
    <section
      className="border-y border-border/40 bg-background py-16 sm:py-20"
      aria-labelledby="methodology-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <h2
          id="methodology-heading"
          className="mx-auto max-w-3xl text-center font-sans text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Evaluación Psicolaboral de Alto Estándar
        </h2>

        <ul className="mt-12 grid auto-rows-fr grid-cols-1 gap-4 md:mt-14 md:grid-cols-3 md:grid-rows-2 md:gap-5">
          <li className="md:col-span-2 md:row-span-2">
            <article className="flex h-full min-h-[280px] flex-col rounded-2xl border border-border/40 bg-muted/50 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:p-8 md:min-h-0 md:p-10">
              <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-xl flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base md:mt-6">
                {featured.description}
              </p>
            </article>
          </li>
          {rest.map((item) => (
            <li key={item.title} className="md:col-span-1 md:row-span-1">
              <article className="flex h-full flex-col rounded-2xl border border-border/40 bg-muted/50 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:p-8">
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
