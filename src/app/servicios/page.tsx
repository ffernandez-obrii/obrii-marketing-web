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
    "Servicios | Evaluación Psicolaboral de Precisión y Selección B2B — Obrii Consulting",
  description:
    "Catálogo de servicios de Obrii Consulting: evaluación psicolaboral de precisión por competencias (STAR/BEI), suite psicométrica propia, niveles por escala de cargos y SLA de 48 horas. Cobertura en Chile y toda Latinoamérica.",
  alternates: {
    canonical: "/servicios",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "/servicios",
    title:
      "Servicios | Evaluación Psicolaboral de Precisión — Obrii Consulting",
    description:
      "Evaluación por competencias y rigor metodológico para roles que no pueden fallar, con cobertura en Chile y toda Latinoamérica.",
    images: ["/dashboard-obrii.jpg"],
  },
};

/* ------------------------------------------------------------------ */
/* Datos del servicio principal: Evaluación Psicolaboral de Precisión  */
/* ------------------------------------------------------------------ */

const methodologyPoints: { icon: LucideIcon; label: string; text: string }[] = [
  {
    icon: MessageSquareText,
    label: "Entrevistas a medida",
    text: "Aplicación de metodologías STAR o BEI según el perfil del cargo.",
  },
  {
    icon: BrainCircuit,
    label: "Diccionarios personalizados",
    text: "Evaluamos bajo el modelo de Martha Alles, Spencer o el diccionario interno de tu organización.",
  },
  {
    icon: Globe2,
    label: "Operación LATAM",
    text: "Procesos 100% online mediante videollamada con cobertura en todo Chile y la región.",
  },
  {
    icon: Clock,
    label: "SLA de Entrega",
    text: "Informe Ejecutivo y Dashboard comparativo en un máximo de 48 horas hábiles post-entrevista.",
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

const depthTiers: {
  icon: LucideIcon;
  name: string;
  badge: string;
  description: string;
  highlighted?: boolean;
}[] = [
  {
    icon: GraduationCap,
    name: "Jefatura",
    badge: "Premium",
    description:
      "Diseñado para roles estratégicos. Incluye por defecto el chequeo exhaustivo de referencias laborales para asegurar el Person-Organization Fit (P-O Fit).",
    highlighted: true,
  },
  {
    icon: Target,
    name: "Profesional",
    badge: "Especialización",
    description:
      "Foco en competencias de alta especialización técnica y gestión. (Referencias laborales disponibles como Add-on).",
  },
  {
    icon: Gauge,
    name: "Administrativo / Técnico",
    badge: "Operativo",
    description:
      "Orientado a la eficiencia operativa y ajuste procedimental. (Referencias laborales disponibles como Add-on).",
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
    id: "headhunting",
    title: "Headhunting",
    summary:
      "Ciclo completo de búsqueda y selección para perfiles críticos, con garantía de permanencia y el mismo estándar de rigor en cada etapa.",
    bullets: [
      "Mapeo de mercado y búsqueda directa de talento pasivo",
      "Evaluación psicolaboral integrada en cada finalista",
      "Garantía de permanencia y acompañamiento de onboarding",
    ],
  },
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
          <HeroSection />
          <EvaluacionPsicolaboralSection />
          <UpcomingSection />
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

function HeroSection() {
  return (
    <section className="relative border-b border-zinc-200/80 px-6 pb-20 pt-12 sm:px-10 lg:px-12 lg:pb-24 lg:pt-16">
      <div className="relative mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/80 backdrop-blur-sm">
          <Sparkles className="size-3.5 text-primary" aria-hidden />
          Catálogo de servicios B2B
        </span>
        <h1 className="mt-6 text-balance font-sans text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1] [text-shadow:0_0_0_1px_hsl(var(--primary)/0.28),0_14px_50px_-18px_hsl(var(--primary)/0.45)]">
          Soluciones a Medida para tu Escala
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground/70 text-pretty sm:text-xl">
          Evaluación por competencias y rigor metodológico para roles que no
          pueden fallar — más tecnología cuando tu operación necesita escalar en
          Chile y el resto de Latinoamérica.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          <ButtonLink
            href="#evaluacion-psicolaboral"
            variant="secondary"
            size="lg"
            className="min-w-[200px]"
          >
            Ver evaluación psicolaboral
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function EvaluacionPsicolaboralSection() {
  return (
    <section
      id="evaluacion-psicolaboral"
      className="scroll-mt-24 bg-white px-6 py-20 sm:px-10 lg:px-12 lg:py-24"
    >
      <PageContainer>
        {/* Encabezado del servicio */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Servicio Core
          </span>
          <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Evaluación Psicolaboral de Precisión
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg">
            Validación rigurosa de candidatos finalistas por competencias:
            decisión objetiva, defendible ante dirección y con trazabilidad
            metodológica completa.
          </p>
        </div>

        {/* Enfoque consultivo y adaptabilidad metodológica */}
        <div className="mt-16">
          <h3 className="text-center font-sans text-2xl font-semibold tracking-tight text-zinc-900">
            Enfoque consultivo y adaptabilidad metodológica
          </h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {methodologyPoints.map((point) => {
              const Icon = point.icon;
              return (
                <article
                  key={point.label}
                  className="flex gap-4 rounded-2xl border border-zinc-200/90 bg-zinc-50/50 p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base font-semibold text-zinc-900">
                      {point.label}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                      {point.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Suite de evaluaciones integrada */}
        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-sans text-2xl font-semibold tracking-tight text-zinc-900">
              Suite de Evaluaciones Integrada{" "}
              <span className="text-primary">(Obrii App)</span>
            </h3>
            <p className="mt-3 text-pretty italic leading-relaxed text-zinc-500">
              Ofrecemos una suite propia que combina la psicometría más rigurosa
              con nuevas herramientas validadas por la ciencia.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {suiteCategories.map((category) => (
              <article
                key={category.title}
                className="rounded-2xl border border-zinc-200/90 bg-white p-7 shadow-sm transition-all hover:border-primary/25 hover:shadow-lg hover:shadow-primary/5"
              >
                <h4 className="text-lg font-semibold text-zinc-900">
                  {category.title}
                </h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.tests.map((test) => (
                    <li
                      key={test}
                      className="rounded-lg border border-zinc-200/80 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-700"
                    >
                      {test}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Niveles de profundidad */}
        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-sans text-2xl font-semibold tracking-tight text-zinc-900">
              Niveles de Profundidad
            </h3>
            <p className="mt-3 text-zinc-500">
              Adaptamos la profundidad de la evaluación a la escala del cargo.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {depthTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <article
                  key={tier.name}
                  className={`relative flex flex-col rounded-2xl border p-7 shadow-sm ${
                    tier.highlighted
                      ? "border-primary bg-white shadow-xl shadow-primary/10 ring-2 ring-primary/20"
                      : "border-zinc-200/90 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        tier.highlighted
                          ? "bg-primary text-primary-foreground"
                          : "bg-zinc-100 text-zinc-500"
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-zinc-900">
                    {tier.name}
                  </h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
                    {tier.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* CTA de contacto + descarga */}
        <div className="mt-16 rounded-2xl border border-primary/20 bg-primary/[0.04] p-8 shadow-sm backdrop-blur-sm sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h3 className="font-sans text-2xl font-semibold tracking-tight text-zinc-900">
                ¿Deseas cotizar este servicio?
              </h3>
              <p className="mt-2 text-zinc-600">
                Contáctanos directamente y diseñamos una propuesta a la medida de
                tu proceso.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  <Mail className="h-4 w-4" />
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={CONTACT_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
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
                className="inline-flex items-center justify-center gap-2 rounded-md border border-input/60 bg-background/40 px-8 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/10"
              >
                <Download className="h-4 w-4" />
                Descargar Detalle del Servicio
              </a>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function UpcomingSection() {
  return (
    <section className="border-t border-zinc-200/80 bg-zinc-50/80 px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
      <PageContainer>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Catálogo en expansión
          </p>
          <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Más servicios, mismo estándar de rigor
          </h2>
          <p className="mt-4 text-zinc-600">
            Estos servicios se integran muy pronto al catálogo. Si te interesan
            hoy, escríbenos y los activamos para tu proceso.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {upcomingServices.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="flex scroll-mt-24 flex-col rounded-2xl border border-zinc-200/90 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-500">
                  Próximamente
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-zinc-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {service.summary}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
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
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
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
    <section className="border-t border-zinc-200/80 bg-white px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
      <PageContainer>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Hablemos de tu próximo proceso crítico
          </h2>
          <p className="mt-4 text-zinc-600">
            Acompañamos a empresas en Chile y toda Latinoamérica a tomar
            decisiones de talento con evidencia y trazabilidad.
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
            <ButtonLink
              href={`mailto:${CONTACT_EMAIL}`}
              variant="secondary"
              size="lg"
              className="min-w-[200px]"
            >
              Escribir un correo
            </ButtonLink>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
