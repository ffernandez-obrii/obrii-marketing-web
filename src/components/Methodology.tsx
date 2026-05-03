import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Bot, BrainCircuit, Target, Workflow, Video, FileText } from "lucide-react";

const pillars: readonly {
  title: string;
  description: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Entrevistas STAR",
    description:
      "Evaluación por competencias de alto estándar para explorar comportamientos pasados y predecir el desempeño futuro.",
    Icon: Target,
  },
  {
    title: "Flexibilidad Metodológica",
    description:
      "Trabajamos con el Diccionario de Competencias de Martha Alles o nos integramos y adaptamos al modelo propio de su organización.",
    Icon: Workflow,
  },
  {
    title: "Batería de Evaluación",
    description:
      "Triangulación de datos midiendo: 1. Comunicación, 2. Resolución de Problemas, 3. Modelo Big 5 (Personalidad) y 4. Gestión del Tiempo.",
    Icon: BrainCircuit,
  },
  {
    title: "Registro y Transparencia",
    description:
      "La sesión es capturada mediante herramientas de transcripción de última generación para garantizar la trazabilidad de la información.",
    Icon: Video,
  },
  {
    title: "Auditoría de IA",
    description:
      "Inteligencia Artificial que audita y objetiva el proceso para eliminar sesgos y elevar la calidad de la decisión humana.",
    Icon: Bot,
  },
  {
    title: "Reportes Técnicos",
    description:
      "Entrega de informes detallados con análisis predictivo de ajuste al cargo y recomendaciones claras de contratación.",
    Icon: FileText,
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
        <p className="mx-auto mt-6 max-w-2xl text-center text-zinc-400">
          Diseñado para cuando ya cuenta con candidatos finalistas y requiere una validación experta, objetiva y profesional antes de tomar la decisión final. Devolución de informe psicolaboral en un máximo de 72 horas.
        </p>

        <ul className="mt-14 grid auto-rows-fr grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {pillars.map((item) => {
            const { Icon } = item;
            return (
              <li key={item.title}>
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

        <div className="mt-12 flex justify-center">
          <a
            href="/informe-ejemplo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 mt-10 rounded-full border border-zinc-300 bg-white text-zinc-800 font-medium hover:bg-zinc-50 hover:border-zinc-400 transition-all shadow-sm"
          >
            <FileText className="mr-2 h-4 w-4" />
            Ver ejemplo de informe (anonimizado)
          </a>
        </div>
      </div>
    </section>
  );
}
