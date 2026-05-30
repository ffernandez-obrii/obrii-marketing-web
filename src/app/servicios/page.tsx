import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  Gauge,
  Globe2,
  GraduationCap,
  Mail,
  MessageSquareText,
  Phone,
  Sparkles,
  Target,
  type LucideIcon,
} from "lucide-react";
import { HeroAtmosphere } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ButtonLink } from "@/components/ui/button";
import { AGENDAR_ASESORIA_URL } from "@/lib/site";

const CONTACT_EMAIL = "ffernandez@obriiconsulting.com";
const CONTACT_PHONE_DISPLAY = "+56 9 6788 3910";
const CONTACT_PHONE_TEL = "+56967883910";
const CONTACT_WHATSAPP = "https://wa.me/56967883910";

export const metadata: Metadata = {
  title:
    "Servicios de Headhunting y Evaluación Psicolaboral | Obrii Consulting",
  description:
    "Soluciones premium de Headhunting B2B y Evaluación Psicolaboral de precisión en Chile y LATAM. Unimos la psicología organizacional con análisis de datos para decisiones sin margen de error.",
  alternates: {
    canonical: "/servicios",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/servicios",
    title:
      "Servicios de Headhunting y Evaluación Psicolaboral | Obrii Consulting",
    description:
      "Atracción, evaluación de perfiles críticos y headhunting B2B de ciclo completo. Garantía de permanencia y rigor psicolaboral.",
    images: ["/dashboard-obrii.jpg"],
  },
};

/* ------------------------------------------------------------------ */
/* Datos de los Servicios                                             */
/* ------------------------------------------------------------------ */

const methodologyPoints: { icon: LucideIcon; label: string; text: string }[] = [
  {
    icon: Calendar,
    label: "Sin carga para tu equipo",
    text: "Obrii asume la gestión directa de agenda con el candidato. Tu equipo únicamente debe proveer los datos de contacto iniciales.",
  },
  {
    icon: MessageSquareText,
    label: "Entrevistas de precisión",
    text: "Aplicación de metodologías científicas STAR o BEI adaptadas a los diccionarios de tu organización.",
  },
  {
    icon: Clock,
    label: "Entrega garantizada en 48h",
    text: "Despacho del Informe Ejecutivo y Dashboard comparativo en un máximo de 48 horas hábiles tras la entrevista.",
  },
  {
    icon: CheckCircle2,
    label: "Confidencialidad garantizada",
    text: "El manejo de transcripciones, puntajes y perfilamiento opera bajo estricto secreto profesional del psicólogo evaluador y protección de datos.",
  },
];

const suiteCategories: { title: string; tests: string[] }[] = [
  {
    title: "Personalidad y Comportamiento",
    tests: [
      "DISC",
      "Zavic",
      "Big Five",
      "Motivación y valores laborales",
      "Impulsividad y autocontrol (BIS-11)",
    ],
  },
  {
    title: "Cognición y Aptitud",
    tests: [
      "Agilidad cognitiva",
      "Resolución de problemas",
      "Razonamiento numérico",
      "Atención al detalle",
    ],
  },
  {
    title: "Juicio y Liderazgo",
    tests: [
      "Leadership Profiler (Tríada predictiva)",
      "Juicio situacional (General, Operaciones o Servicio al cliente)",
      "Priorización de bandeja",
    ],
  },
  {
    title: "Habilidades Técnicas",
    tests: [
      "Inglés (CEFR)",
      "AI & Prompt Engineering",
      "Alfabetización de datos",
      "Excel avanzado",
    ],
  },
];

/* Acentos pastel: detalle estético sutil (no texto). Tonos sky/coral/amber/mint. */
const pastelAccents = ["#7dd3fc", "#fca5a5", "#fcd34d", "#6ee7b7"];

const depthTiers: {
  icon: LucideIcon;
  name: string;
  badge: string;
  description: string;
  priceUf: string;
  priceUsd: string;
  highlighted?: boolean;
}[] = [
  {
    icon: GraduationCap,
    name: "Jefatura",
    badge: "Premium",
    description:
      "Diseñado para roles estratégicos de liderazgo. Incluye por defecto el chequeo exhaustivo de referencias laborales para asegurar el Person-Organization Fit (P-O Fit).",
    priceUf: "23 UF",
    priceUsd: "$880 USD",
    highlighted: true,
  },
  {
    icon: Target,
    name: "Profesional",
    badge: "Especialización",
    description:
      "Foco en competencias de alta especialización técnica y gestión comercial u operativa. (Referencias laborales disponibles como Add-on).",
    priceUf: "17,85 UF",
    priceUsd: "$660 USD",
  },
  {
    icon: Gauge,
    name: "Administrativo / Técnico",
    badge: "Operativo",
    description:
      "Orientado a la eficiencia operativa, ajuste procedimental y soporte técnico de procesos. (Referencias laborales disponibles como Add-on).",
    priceUf: "11,9 UF",
    priceUsd: "$440 USD",
  },
];

/* Servicios próximos: estructura lista para completar más adelante. */
const upcomingServices: {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
}[] = [
  {
    id: "diagnostico-organizacional",
    title: "Diagnóstico Organizacional",
    summary:
      "Lectura estructurada de clima, cultura y riesgos psicosociales para anticipar la rotación y fortalecer el desempeño de tus equipos.",
    bullets: [
      "Medición de clima y riesgos psicosociales",
      "Detección temprana de burnout y puntos de fricción",
      "Plan de acción con indicadores y seguimiento",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="relative isolate flex flex-1 flex-col overflow-hidden bg-background pt-[5.75rem] sm:pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(56rem,92vh)]">
          <HeroAtmosphere />
        </div>
        <div className="relative z-[1] flex flex-1 flex-col">
          {/* 1 · Claro: Hero & Overview */}
          <HeroSection />
          {/* 2 · Oscuro: Evaluacion Psicolaboral */}
          <EvaluacionPsicolaboralSection />
          {/* 3 · Claro: Headhunting Activo y Tarifas */}
          <HeadhuntingSection />
          {/* 4 · Claro: Próximamente (cercano) */}
          <UpcomingSection />
          {/* 5 · Oscuro: Cierre */}
          <ClosingCta />
        </div>
      </main>
      <Footer />
    </>
  );
}

function PageContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-6xl">{children}</div>;
}

/* Tarjeta "bento" sobre fondo oscuro: vidrio esmerilado + glow al hover. */
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

/* Chip de test sobre fondo oscuro. */
function DarkChip({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300">
      {children}
    </li>
  );
}

function HeroSection() {
  return (
    <section className="relative border-b border-zinc-200/80 px-6 py-24 sm:px-10 sm:py-28 lg:px-12 lg:py-32">
      <div className="relative mx-auto w-full max-w-6xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground/80 backdrop-blur-sm">
          <Sparkles className="size-3.5 text-primary" aria-hidden />
          Psicología Organizacional y Datos para Contratar sin Margen de Error
        </span>
        <h1 className="mt-7 text-balance font-sans text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05] [text-shadow:0_0_0_1px_hsl(var(--primary)/0.28),0_14px_50px_-18px_hsl(var(--primary)/0.45)]">
          Servicios de Atracción, Headhunting y Selección
        </h1>
        <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-foreground/70 text-pretty sm:text-xl font-medium">
          Consultora especializada en la selección de capital humano para organizaciones que necesitan contratar bien, sin margen para el error. Unimos el rigor de la psicología organizacional con análisis de datos para asegurar procesos transparentes, ágiles y basados en el mérito.
        </p>

        {/* ------------------------------------------------------------------ */}
        {/* SERVICIOS OVERVIEW (Ir de lo general a lo particular)            */}
        {/* ------------------------------------------------------------------ */}
        <div className="mt-20 text-left border-t border-zinc-200/80 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">
              SERVICIOS
            </h2>
            <p className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Nuestras Soluciones de Reclutamiento y Headhunting
            </p>
            <p className="mt-3 text-sm text-zinc-500">
              Explora nuestra gama de soluciones orientadas a la precisión e idoneidad del talento.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1: Evaluación Psicolaboral */}
            <a
              href="#evaluacion-psicolaboral"
              className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BrainCircuit className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-zinc-950 group-hover:text-primary transition-colors">
                Evaluación Psicolaboral
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 flex-1">
                Validación de candidatos finalistas con pruebas psicométricas avanzadas en Obrii App y entrevistas de validez empírica (STAR/BEI) con SLA de 48h.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                Ver detalle del servicio
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>

            {/* Card 2: Headhunting B2B */}
            <a
              href="#headhunting"
              className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Target className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-zinc-950 group-hover:text-primary transition-colors">
                Headhunting B2B
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 flex-1">
                Búsqueda proactiva, mapeo de mercado y reclutamiento integral de perfiles críticos bajo estricto estándar metodológico y con garantía de permanencia.
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary">
                Ver detalle del servicio
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>

            {/* Card 3: Diagnóstico Organizacional (Próximamente) */}
            <div className="relative flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200 text-zinc-500">
                  <Globe2 className="size-5" />
                </div>
                <span className="rounded-full bg-zinc-200/80 px-2.5 py-0.5 text-xs font-semibold text-zinc-600">
                  Próximamente
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-zinc-400">
                Diagnóstico Organizacional
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500 flex-1">
                Lectura estructurada de clima, cultura y riesgos psicosociales para anticipar la rotación y fortalecer el desempeño de tus equipos.
              </p>
              <div className="mt-6 text-xs font-medium text-zinc-400 italic">
                Servicio en configuración
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EvaluacionPsicolaboralSection() {
  return (
    <section
      id="evaluacion-psicolaboral"
      className="relative isolate scroll-mt-24 overflow-hidden border-y border-white/[0.08] bg-zinc-950 px-6 py-20 text-zinc-50 sm:px-10 md:py-28 lg:px-12 lg:py-32"
      aria-labelledby="evaluacion-heading"
    >
      {/* Glow de marca */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(ellipse_70%_45%_at_100%_60%,rgba(99,102,241,0.08),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-300/90 backdrop-blur-sm">
            <Sparkles className="size-3.5" aria-hidden />
            Evaluación
          </span>
          <h2
            id="evaluacion-heading"
            className="mt-6 text-balance font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Evaluación Psicolaboral de Precisión
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-zinc-400 font-medium">
            Validación de competencias y rigor metodológico para finalistas que no pueden fallar: decisiones transparentes apoyadas por evidencia científica y trazabilidad completa.
          </p>
        </div>

        {/* Enfoque consultivo y adaptabilidad metodológica */}
        <div className="mt-16">
          <h3 className="text-center font-sans text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Valores y Estándares de Nuestro Servicio
          </h3>
          <ul className="mt-10 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {methodologyPoints.map((point) => {
              const Icon = point.icon;
              return (
                <li key={point.label}>
                  <BentoCard>
                    <Icon
                      className="mb-6 size-9 shrink-0 text-sky-400/85"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                    <h4 className="text-base font-semibold tracking-tight text-white">
                      {point.label}
                    </h4>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                      {point.text}
                    </p>
                  </BentoCard>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Batería Psicométrica de Predicción (Propuesta Comercial) */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-950/40 px-3.5 py-1 text-xs font-semibold text-sky-300">
              Metodología de Alto Estándar
            </span>
            <h3 className="mt-4 font-sans text-xl font-bold tracking-tight text-white sm:text-2xl">
              Nuestra Batería Psicométrica de Predicción
            </h3>
            <p className="mt-3 text-zinc-400">
              Evaluamos dimensiones críticas clave apoyadas por la ciencia para asegurar la idoneidad y el rendimiento laboral.
            </p>
          </div>
          <ul className="mt-10 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
            <li>
              <BentoCard>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 mb-5">
                  <BrainCircuit className="size-5" />
                </div>
                <h4 className="text-base font-semibold text-white">
                  Resolución de Problemas
                </h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  Mide con precisión la agilidad mental, razonamiento estructurado y la capacidad analítica para resolver tareas complejas.
                </p>
              </BentoCard>
            </li>
            <li>
              <BentoCard>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 mb-5">
                  <Clock className="size-5" />
                </div>
                <h4 className="text-base font-semibold text-white">
                  Gestión del Tiempo
                </h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  Evalúa de forma empírica la capacidad de planificación, eficiencia operativa y priorización del flujo de trabajo.
                </p>
              </BentoCard>
            </li>
            <li>
              <BentoCard>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 mb-5">
                  <MessageSquareText className="size-5" />
                </div>
                <h4 className="text-base font-semibold text-white">
                  Comunicación
                </h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  Analiza la claridad verbal y escrita, la escucha activa y la etiqueta profesional en contextos dinámicos y de equipo.
                </p>
              </BentoCard>
            </li>
            <li>
              <BentoCard>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500/10 text-rose-400 mb-5">
                  <Target className="size-5" />
                </div>
                <h4 className="text-base font-semibold text-white">
                  Modelo Big5
                </h4>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  El estándar científico de oro en la psicología organizacional para predecir personalidad, adaptabilidad y encaje al cargo.
                </p>
              </BentoCard>
            </li>
          </ul>
        </div>

        {/* Suite de evaluaciones integrada */}
        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-sans text-xl font-semibold tracking-tight text-white sm:text-2xl">
              Suite Completa de Evaluaciones{" "}
              <span className="text-sky-400">(Obrii App)</span>
            </h3>
            <p className="mt-3 text-pretty italic leading-relaxed text-zinc-400">
              Una plataforma propia robusta que aglutina todas nuestras pruebas para una experiencia de usuario rápida y amigable.
            </p>
          </div>
          <ul className="mt-10 grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {suiteCategories.map((category, index) => {
              const accent = pastelAccents[index % pastelAccents.length];
              return (
                <li key={category.title}>
                  <BentoCard>
                    <h4 className="flex items-center gap-2.5 text-lg font-semibold text-white">
                      <span
                        className="size-2 shrink-0 rounded-full"
                        style={{
                          backgroundColor: accent,
                          boxShadow: `0 0 8px 0 ${accent}`,
                        }}
                        aria-hidden
                      />
                      {category.title}
                    </h4>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {category.tests.map((test) => (
                        <DarkChip key={test}>{test}</DarkChip>
                      ))}
                    </ul>
                  </BentoCard>
                </li>
              );
            })}
          </ul>
        </div>

        {/* CTA de contacto + descarga */}
        <div className="mt-16">
          <BentoCard className="border-primary/30">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h3 className="font-sans text-2xl font-semibold tracking-tight text-white">
                  ¿Deseas contratar evaluaciones psicolaborales?
                </h3>
                <p className="mt-2 text-zinc-400 font-medium">
                  Contáctanos directamente y despachamos tu requerimiento de forma ágil bajo estricto estándar ético.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition-colors hover:text-sky-200"
                  >
                    <Mail className="h-4 w-4" />
                    {CONTACT_EMAIL}
                  </a>
                  <a
                    href={CONTACT_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition-colors hover:text-sky-200"
                    aria-label={`Teléfono y WhatsApp: ${CONTACT_PHONE_DISPLAY}`}
                  >
                    <Phone className="h-4 w-4" />
                    {CONTACT_PHONE_DISPLAY}
                  </a>
                </div>
                <p className="sr-only">
                  Teléfono y WhatsApp:{" "}
                  <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE_DISPLAY}</a>
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3">
                <ButtonLink
                  href={AGENDAR_ASESORIA_URL}
                  variant="primary"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:min-w-[220px]"
                >
                  <Calendar className="h-4 w-4" />
                  Agendar reunión
                </ButtonLink>
                <a
                  href="/propuesta-evaluacion.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-8 py-2.5 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/[0.08]"
                >
                  <Download className="h-4 w-4" />
                  Descargar Detalle del Servicio
                </a>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

function HeadhuntingSection() {
  const steps = [
    {
      num: "01",
      title: "Levantamiento de Perfil",
      desc: "Definición técnica exhaustiva de competencias, requisitos del cargo y fit de cultura organizacional.",
    },
    {
      num: "02",
      title: "Publicación y Reclutamiento",
      desc: "Difusión en portales especializados y ejecución activa de headhunting directo de talento pasivo relevante.",
    },
    {
      num: "03",
      title: "Preselección de Candidatos",
      desc: "Filtro curricular minucioso comparando la trayectoria y expectativas con el perfil de tu empresa.",
    },
    {
      num: "04",
      title: "Evaluación Psicolaboral",
      desc: "Aplicación de test psicométricos predictivos de Obrii App y entrevistas por competencias basadas en STAR.",
    },
    {
      num: "05",
      title: "Validación de Referencias",
      desc: "Verificación y auditoría minuciosa del desempeño y fit ético directamente con jefaturas previas.",
    },
    {
      num: "06",
      title: "Informe Técnico de Ajuste",
      desc: "Generación de Informe Ejecutivo, Dashboard comparativo y análisis de encaje en el puesto.",
    },
    {
      num: "07",
      title: "Presentación de Candidatos",
      desc: "Exposición guiada de la terna finalista altamente calificada ante el comité directivo o de selección.",
    },
    {
      num: "08",
      title: "Selección Final y Onboarding",
      desc: "Soporte activo en el cierre del proceso, onboarding de integración y garantía de permanencia.",
    },
  ];

  return (
    <section
      id="headhunting"
      className="relative scroll-mt-24 overflow-hidden border-b border-zinc-200 bg-white px-6 py-20 sm:px-10 md:py-28 lg:px-12 lg:py-32"
      aria-labelledby="headhunting-heading"
    >
      {/* Fondo estético con radial azul sutil (matching landing page styling) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(59,130,246,0.06),transparent_60%),radial-gradient(ellipse_80%_50%_at_0%_100%,rgba(99,102,241,0.03),transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-sm">
            <Target className="size-3.5" aria-hidden />
            Búsqueda Directa
          </span>
          <h2
            id="headhunting-heading"
            className="mt-6 text-balance font-sans text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl"
          >
            Servicio de Reclutamiento y Headhunting B2B
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty leading-relaxed text-zinc-600 font-medium">
            Búsqueda directa del mejor talento pasivo del mercado y selección integral para roles críticos, con el mismo rigor psicolaboral en cada etapa para garantizar la permanencia del candidato.
          </p>
        </div>

        {/* Las 8 etapas en Grid */}
        <div className="mt-20">
          <div className="text-center">
            <h3 className="font-sans text-xl font-bold text-zinc-900 sm:text-2xl">
              Etapas de Nuestro Proceso de Headhunting
            </h3>
            <p className="mt-2 text-sm text-zinc-500">
              Un flujo de trabajo ordenado de atracción de talento y selección de precisión.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="group relative flex flex-col rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-primary/30 group-hover:text-primary/70 transition-colors">
                    {step.num}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-primary/20 group-hover:bg-primary/80 group-hover:scale-125 transition-all" />
                </div>
                <h4 className="mt-4 text-base font-bold text-zinc-900 group-hover:text-primary transition-colors">
                  {step.title}
                </h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Niveles y Valores del Servicio (Pricing Table)                     */}
        {/* ------------------------------------------------------------------ */}
        <div className="mt-24 border-t border-zinc-200 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary">
              Tarifas Transparentes
            </span>
            <h3 className="mt-4 font-sans text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
              Niveles y Valores del Servicio de Headhunting
            </h3>
            <p className="mt-3 text-zinc-600">
              Adaptamos la profundidad y alcance del headhunting según el nivel de responsabilidad del cargo, asegurando un proceso transparente y sin margen de error.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {depthTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.name}
                  className={`group relative flex flex-col rounded-2xl border p-6 bg-white shadow-sm transition-all duration-300 ${
                    tier.highlighted
                      ? "border-primary/50 ring-1 ring-primary/20 shadow-md md:scale-105"
                      : "border-zinc-200 hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        tier.highlighted
                          ? "bg-primary text-white shadow-sm"
                          : "border border-zinc-200 bg-zinc-50 text-zinc-600"
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>
                  <div className="mt-6 flex flex-col border-b border-zinc-100 pb-4">
                    <h4 className="text-xl font-bold text-zinc-950">
                      {tier.name}
                    </h4>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-primary">
                        {tier.priceUf}
                      </span>
                      <span className="text-xs font-medium text-zinc-500">
                        + 19% IVA
                      </span>
                    </div>
                    <span className="mt-0.5 text-xs text-zinc-500">
                      Valor referencial: {tier.priceUsd}
                    </span>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600">
                    {tier.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ventajas competitivas de Headhunting */}
        <div className="mt-20 rounded-2xl border border-zinc-200 bg-zinc-50/40 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-3">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Garantías Obrii
              </span>
              <h3 className="mt-2 font-sans text-xl font-bold text-zinc-900">
                ¿Por qué confiar tu headhunting y selección a Obrii?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Diseñamos un pipeline de atracción de talento a medida que no depende de la postulación espontánea. Llegamos al candidato pasivo ideal y lo evaluamos bajo un estándar psicológico excepcional.
              </p>
            </div>

            <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">
                    Búsqueda activa y mapeo de mercado
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                    Realizamos un mapeo proactivo del mercado objetivo para atraer perfiles de alta competitividad y talento pasivo valioso.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">
                    Garantía de permanencia extendida
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                    Garantizamos la idoneidad del cargo. Si el candidato cesa funciones antes del plazo acordado, repetimos el proceso sin costo extra.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">
                    Evaluación psicológica de élite
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                    Integramos por defecto nuestra robusta suite psicométrica y entrevistas de validez empírica en cada finalista presentado.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">
                    Acompañamiento y Onboarding
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                    Colaboramos activamente en el proceso de integración inicial del candidato para maximizar el ajuste organizacional a largo plazo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA de Headhunting */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap">
          <ButtonLink
            href={AGENDAR_ASESORIA_URL}
            variant="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[200px]"
          >
            Agendar reunión
          </ButtonLink>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Consulta%20Servicio%20de%20Headhunting`}
            className="inline-flex h-11 min-w-[200px] items-center justify-center gap-2 rounded-md border border-zinc-300 bg-white px-8 text-sm font-medium text-zinc-700 transition-all hover:border-primary/40 hover:bg-zinc-50"
          >
            <Mail className="h-4 w-4 text-zinc-500" />
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}

function UpcomingSection() {
  return (
    <section
      id="diagnostico-organizacional"
      className="scroll-mt-24 bg-zinc-50/80 px-6 py-20 sm:px-10 lg:px-12 lg:py-24"
    >
      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Catálogo en expansión
          </p>
          <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Más servicios, mismo estándar de rigor
          </h2>
          <p className="mt-4 text-zinc-600">
            Este servicio se integrará muy pronto de forma completamente automatizada en nuestra suite digital. Si te interesa hoy, escríbenos y lo activamos de inmediato.
          </p>
        </div>

        <div className="mt-14 max-w-xl mx-auto">
          {upcomingServices.map((service) => (
            <article
              key={service.id}
              className="flex flex-col rounded-2xl border border-zinc-200/90 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-500">
                  Próximamente
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-zinc-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {service.summary}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 border-b border-zinc-100 pb-6">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-sm text-zinc-600"
                  >
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-primary/60"
                      aria-hidden
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Consulta:%20${encodeURIComponent(
                  service.title,
                )}`}
                className="mt-6 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                Consultar disponibilidad
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="relative isolate overflow-hidden border-t border-white/[0.08] bg-zinc-950 px-6 py-20 text-zinc-50 sm:px-10 lg:px-12 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(ellipse_60%_50%_at_50%_120%,rgba(99,102,241,0.1),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Hablemos de tu próximo proceso crítico
        </h2>
        <p className="mt-4 text-zinc-400">
          Acompañamos a empresas en Chile y toda Latinoamérica a tomar decisiones de talento con evidencia, ciencia y total trazabilidad.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href={AGENDAR_ASESORIA_URL}
            variant="primary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[200px]"
          >
            Agendar reunión
          </ButtonLink>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex h-11 min-w-[200px] items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-8 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/[0.08]"
          >
            Escribir un correo
          </a>
        </div>
      </div>
    </section>
  );
}
