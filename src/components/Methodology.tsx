import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Bot, BrainCircuit, Target } from "lucide-react";

const pillars: readonly {
  title: string;
  description: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Entrevistas STAR",
    description:
      "Exploración profunda de comportamientos pasados para predecir el desempeño futuro con precisión.",
    Icon: Target,
  },
  {
    title: "Batería Psicométrica",
    description:
      "Triangulación de datos usando 3 tests estandarizados para evaluar personalidad, lógica y competencias críticas.",
    Icon: BrainCircuit,
  },
  {
    title: "Auditoría de IA",
    description:
      "Revisión algorítmica del proceso para garantizar cero sesgos y una objetividad total en el informe final.",
    Icon: Bot,
  },
];

function BentoCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.04] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-[transform,border-color,box-shadow] duration-300 motion-safe:hover:-translate-y-1 hover:border-primary/40 motion-safe:hover:shadow-[0_24px_48px_-28px_hsl(var(--primary)/0.22)] sm:p-8 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_90%_75%_at_50%_-15%,rgba(255,255,255,0.09),transparent_58%),radial-gradient(ellipse_70%_50%_at_100%_100%,hsl(var(--primary)/0.06),transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </article>
  );
}

export function Methodology() {
  const [featured, ...rest] = pillars;
  const FeaturedIcon = featured.Icon;

  return (
    <section
      className="relative isolate w-full overflow-hidden border-y border-white/[0.08] bg-zinc-950 px-6 py-20 text-zinc-50 sm:px-10 md:py-28 lg:px-12 lg:py-32"
      aria-labelledby="methodology-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(ellipse_70%_45%_at_100%_60%,rgba(99,102,241,0.08),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <h2
          id="methodology-heading"
          className="mx-auto max-w-3xl text-center font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl"
        >
          Evaluación Psicolaboral de Alto Estándar
        </h2>

        <ul className="mt-14 grid auto-rows-fr grid-cols-1 gap-5 md:mt-16 md:grid-cols-3 md:grid-rows-2 md:gap-6">
          <li className="md:col-span-2 md:row-span-2">
            <BentoCard className="min-h-[280px] md:min-h-0 md:p-10">
              <FeaturedIcon
                className="mb-6 size-10 shrink-0 text-sky-400/85"
                strokeWidth={1.25}
                aria-hidden
              />
              <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-xl flex-1 text-sm leading-relaxed text-zinc-400 sm:text-base md:mt-6">
                {featured.description}
              </p>
            </BentoCard>
          </li>
          {rest.map((item) => {
            const { Icon } = item;
            return (
              <li key={item.title} className="md:col-span-1 md:row-span-1">
                <BentoCard>
                  <Icon
                    className="mb-6 size-10 shrink-0 text-sky-400/85"
                    strokeWidth={1.25}
                    aria-hidden
                  />
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400 sm:text-base">
                    {item.description}
                  </p>
                </BentoCard>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
