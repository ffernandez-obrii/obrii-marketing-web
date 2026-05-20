import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  Activity,
  Brain,
  Calculator,
  ChevronDown,
  FileSearch,
  LineChart,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ButtonLink } from "@/components/ui/button";

const TRIAL_URL =
  "https://app.obriiconsulting.com/auth?mode=signup&trial=true";
const FREE_SIGNUP_URL = "https://app.obriiconsulting.com/auth?mode=signup";

export const metadata: Metadata = {
  title: {
    absolute:
      "Obrii App | Software de Clima Organizacional y Selección B2B con IA",
  },
  description:
    "Optimiza la gestión de talento. Automatiza entrevistas con el método BEI, mide riesgos psicosociales y evalúa el clima laboral con IA. Prueba 7 días gratis.",
  alternates: {
    canonical: "/obrii-app",
  },
  robots: { index: true, follow: true },
};

const problemCards = [
  {
    title: "Fatiga de decisión",
    description:
      "Procesos manuales que saturan al equipo de personas y retrasan cada contratación.",
  },
  {
    title: "Herramientas fragmentadas",
    description:
      "Múltiples tests legacy sin un hilo conductor ni trazabilidad entre etapas.",
  },
  {
    title: "Contratación por intuición",
    description:
      "Decisiones sin evidencia que terminan en rotación temprana y costo operativo.",
  },
] as const;

const pillars = [
  {
    title: "Selección y evaluación",
    items: ["Pruebas psicolaborales", "CV Screener con IA", "Entrevistas BEI"],
  },
  {
    title: "Talento y desarrollo",
    items: ["Evaluación de desempeño", "Mapa de competencias"],
  },
  {
    title: "Cultura y bienestar",
    items: ["Clima Pulse", "Test de Burnout", "DO Pocket"],
  },
  {
    title: "Estructura y decisiones",
    items: ["Costos laborales LATAM", "Compliance y alertas"],
  },
  {
    title: "Analítica de personas",
    items: ["Dashboards ejecutivos", "Próximamente"],
    upcoming: true,
  },
] as const;

const starTools: { name: string; description: string; icon: LucideIcon }[] = [
  {
    name: "CV Screener",
    description: "Estructura la evidencia del CV con IA antes de la entrevista.",
    icon: FileSearch,
  },
  {
    name: "Test de Burnout",
    description: "Detección temprana de riesgo de agotamiento laboral.",
    icon: Activity,
  },
  {
    name: "Entrevistas BEI",
    description:
      "Preparación contextual por competencias y eventos conductuales.",
    icon: MessageSquare,
  },
  {
    name: "Calculadora Laboral",
    description: "Costo empleador y provisiones para operación LATAM.",
    icon: Calculator,
  },
  {
    name: "Radar de Cumplimiento",
    description: "Alertas normativas y seguimiento de obligaciones laborales.",
    icon: ShieldCheck,
  },
  {
    name: "Suite Psicométrica",
    description: "DISC, Big Five y evaluación cognitiva en un solo flujo.",
    icon: Brain,
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "para siempre",
    features: [
      "Calculadora laboral",
      "Burnout individual",
      "Suite psicométrica base",
    ],
    cta: "Crear cuenta Free",
    href: FREE_SIGNUP_URL,
    highlighted: false,
  },
  {
    name: "Starter",
    price: "~$5.000",
    period: "CLP / mes",
    features: [
      "Todo lo incluido en Free",
      "Radar de Compliance",
      "Descriptores de cargo",
    ],
    cta: "Empezar con Starter",
    href: FREE_SIGNUP_URL,
    highlighted: false,
  },
  {
    name: "Pro",
    price: "~$10.000",
    period: "CLP / mes",
    features: [
      "Todo lo incluido en Starter",
      "CV Screener ilimitado",
      "Burnout para equipos",
      "Módulo BEI completo",
    ],
    cta: "Prueba 7 días",
    href: TRIAL_URL,
    highlighted: true,
  },
] as const;

const faqItems = [
  {
    question: "¿La IA toma decisiones por mí?",
    answer:
      "No. Obrii App audita, estructura y prepara evidencia para que tú —o tu comité— toméis la decisión final con criterio y trazabilidad.",
  },
  {
    question: "¿Cuál es la diferencia con Obrii Consulting?",
    answer:
      "Obrii App es el SaaS para operar en tu día a día: mediciones, automatización y reportes. Obrii Consulting es el servicio boutique de headhunting y evaluación ejecutiva con acompañamiento humano.",
  },
  {
    question: "¿Cómo se protegen los datos?",
    answer:
      "La plataforma opera sobre infraestructura en la nube con Supabase, aislamiento por tenant y sesiones seguras. Los datos de tu organización no se mezclan con otras cuentas.",
  },
] as const;

export default function ObriiAppPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col bg-zinc-50/80 pt-[5.75rem] sm:pt-24">
        <HeroSection />
        <ProblemSection />
        <PillarsSection />
        <ToolsSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

function SectionShell({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`px-6 py-20 sm:px-10 lg:px-12 lg:py-24 ${className}`}
    >
      <PageContainer>{children}</PageContainer>
    </section>
  );
}

function PageContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-6xl">{children}</div>;
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-zinc-200/80 bg-white px-6 pb-20 pt-12 sm:px-10 lg:px-12 lg:pb-28 lg:pt-16">
      <HeroBackground />
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1865f4]/20 bg-[#1865f4]/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#1865f4]">
          <Sparkles className="size-3.5" aria-hidden />
          HR Tech para equipos de alto rendimiento
        </span>
        <h1 className="mt-6 font-sans text-4xl font-bold tracking-tight text-zinc-900 text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
          Optimiza tu operación de RRHH. Reduce el riesgo operativo.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 text-pretty sm:text-xl">
          IA aplicada a selección, costos y evaluaciones para procesos más
          eficientes. Obrii App es un ecosistema SaaS que une rigor científico
          con inteligencia artificial para preparar evidencia, permitiendo que
          tú tomes la decisión final.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href={TRIAL_URL}
            variant="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[200px] bg-[#1865f4] shadow-lg shadow-[#1865f4]/25 hover:bg-[#1454d4]"
          >
            Probar 7 días gratis
          </ButtonLink>
          <ButtonLink
            href={FREE_SIGNUP_URL}
            variant="secondary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[200px] border-zinc-200 bg-white shadow-sm hover:border-[#1865f4]/30"
          >
            Crear cuenta Free
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-15%,rgba(24,101,244,0.14),transparent_55%)]"
      aria-hidden
    />
  );
}

function ProblemSection() {
  return (
    <SectionShell className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Las decisiones sin evidencia cuestan caro.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {problemCards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-zinc-200/90 bg-zinc-50/50 p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-zinc-900">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              {card.description}
            </p>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-12 max-w-2xl text-center text-base font-medium text-[#1865f4] sm:text-lg">
        Nuestra promesa: Automatizamos la estructura, nunca la decisión.
      </p>
    </SectionShell>
  );
}

function PillarsSection() {
  return (
    <SectionShell className="bg-zinc-50/80" id="pilares">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#1865f4]">
          HR OS
        </p>
        <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Los 5 pilares de tu operación de personas
        </h2>
      </div>
      <div className="mt-14 space-y-6">
        {pillars.map((pillar, index) => (
          <article
            key={pillar.title}
            className={`flex flex-col gap-6 rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm md:flex-row md:items-center md:gap-10 md:p-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#1865f4]/10 text-[#1865f4]">
              <LineChart className="size-6" aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold text-zinc-900">
                  {pillar.title}
                </h3>
                {"upcoming" in pillar && pillar.upcoming ? (
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-500">
                    Próximamente
                  </span>
                ) : null}
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-zinc-200/80 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function ToolsSection() {
  return (
    <SectionShell className="bg-white" id="herramientas">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Herramientas estrella
        </h2>
        <p className="mt-4 text-zinc-600">
          Módulos listos para usar desde el primer día, con evidencia exportable.
        </p>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {starTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <article
              key={tool.name}
              className="group rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-sm transition-all hover:border-[#1865f4]/25 hover:shadow-lg hover:shadow-[#1865f4]/5"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-[#1865f4]/10 text-[#1865f4] transition-colors group-hover:bg-[#1865f4] group-hover:text-white">
                <Icon className="size-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                {tool.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {tool.description}
              </p>
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

function PricingSection() {
  return (
    <SectionShell className="bg-zinc-50/80" id="precios">
      <div className="text-center">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Planes transparentes
          </h2>
          <p className="mt-4 text-zinc-600">
            Escala según el volumen y la madurez de tu operación de RRHH.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
                  plan.highlighted
                    ? "relative border-[#1865f4] bg-white shadow-xl shadow-[#1865f4]/10 ring-2 ring-[#1865f4]/20 lg:scale-[1.02]"
                    : "border-zinc-200/90 bg-white"
                }`}
              >
                {plan.highlighted ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1865f4] px-3 py-1 text-xs font-semibold text-white">
                    Recomendado
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold text-zinc-900">
                  {plan.name}
                </h3>
                <p className="mt-2">
                  <span className="text-3xl font-bold text-zinc-900">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-sm text-zinc-500">
                    {plan.period}
                  </span>
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-zinc-600"
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#1865f4]"
                        aria-hidden
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href={plan.href}
                  variant={plan.highlighted ? "primary" : "secondary"}
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 w-full ${
                    plan.highlighted
                      ? "bg-[#1865f4] shadow-md shadow-[#1865f4]/20 hover:bg-[#1454d4]"
                      : ""
                  }`}
                >
                  {plan.cta}
                </ButtonLink>
              </article>
            ))}
          </div>
      <p className="mt-10 text-center text-sm text-zinc-500">
        Plan Team (multi-asiento) próximamente.
      </p>
    </SectionShell>
  );
}

function FaqSection() {
  return (
    <SectionShell className="border-t border-zinc-200/80 bg-white pb-28" id="faq">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-sans text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <div className="mt-10 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-zinc-200/90 bg-zinc-50/40 shadow-sm open:bg-white open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-medium text-zinc-900 marker:content-none [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  className="size-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="border-t border-zinc-100 px-5 pb-4 pt-3 text-sm leading-relaxed text-zinc-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
