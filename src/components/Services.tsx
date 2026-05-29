"use client";

import { useState } from "react";
import { ChevronDown, Download, Mail, Phone } from "lucide-react";

const QUOTE_EMAIL = "ffernandez@obriiconsulting.com";
const QUOTE_PHONE_DISPLAY = "+56 9 6788 3910";
const QUOTE_PHONE_TEL = "+56967883910";
const QUOTE_WHATSAPP = "https://wa.me/56967883910";

type DetailGroup = {
  heading: string;
  /** Texto introductorio opcional (cursiva) que precede a los ítems. */
  intro?: string;
  items: { label: string; text?: string }[];
};

type ServiceItem = {
  title: string;
  description: string;
  detailPdf?: "/propuesta-evaluacion.pdf" | "/propuesta-atraccion-talento.pdf";
  /** Título enriquecido para el panel expandible (SEO + venta). */
  detailTitle?: string;
  detailGroups?: DetailGroup[];
};

const services: ServiceItem[] = [
  {
    title: "Evaluación Psicolaboral",
    description:
      "Validación rigurosa de candidatos finalistas por competencias: decisión objetiva, defendible ante dirección y con trazabilidad metodológica completa.",
    detailPdf: "/propuesta-evaluacion.pdf",
    detailTitle: "Evaluación Psicolaboral de Precisión",
    detailGroups: [
      {
        heading: "Enfoque Consultivo y Adaptabilidad Metodológica",
        items: [
          {
            label: "Entrevistas a medida",
            text: "Aplicación de metodologías STAR o BEI según el perfil del cargo.",
          },
          {
            label: "Diccionarios personalizados",
            text: "Evaluamos bajo el modelo de Martha Alles, Spencer o el diccionario interno de tu organización.",
          },
          {
            label: "Operación LATAM",
            text: "Procesos 100% online mediante videollamada con cobertura en todo Chile y la región.",
          },
          {
            label: "SLA de Entrega",
            text: "Informe Ejecutivo y Dashboard comparativo en un máximo de 48 horas hábiles post-entrevista.",
          },
        ],
      },
      {
        heading: "Suite de Evaluaciones Integrada (Obrii App)",
        intro:
          "Ofrecemos una suite propia que combina la psicometría más rigurosa con nuevas herramientas validadas por la ciencia:",
        items: [
          {
            label: "Personalidad y Comportamiento",
            text: "DISC, Zavic, Big Five, Motivación y valores laborales, Impulsividad y autocontrol (BIS-11).",
          },
          {
            label: "Cognición y Aptitud",
            text: "Agilidad cognitiva, Resolución de problemas, Razonamiento numérico, Atención al detalle.",
          },
          {
            label: "Juicio y Liderazgo",
            text: "Leadership Profiler (Tríada predictiva), Juicio situacional (General, Operaciones o Servicio al cliente), Priorización de bandeja.",
          },
          {
            label: "Habilidades Técnicas",
            text: "Inglés (CEFR), AI & Prompt Engineering, Alfabetización de datos, Excel avanzado.",
          },
        ],
      },
      {
        heading: "Niveles de Profundidad (Escala de Cargos)",
        items: [
          {
            label: "Jefatura (Premium)",
            text: "Diseñado para roles estratégicos. Incluye por defecto el chequeo exhaustivo de referencias laborales para asegurar el Person-Organization Fit (P-O Fit).",
          },
          {
            label: "Profesional",
            text: "Foco en competencias de alta especialización técnica y gestión. (Referencias laborales disponibles como Add-on).",
          },
          {
            label: "Administrativo / Técnico",
            text: "Orientado a la eficiencia operativa y ajuste procedimental. (Referencias laborales disponibles como Add-on).",
          },
        ],
      },
    ],
  },
  {
    title: "Headhunting",
    description:
      "Ciclo completo de búsqueda y selección para perfiles críticos, con garantía de permanencia y el mismo estándar de rigor en cada etapa.",
    detailPdf: "/propuesta-atraccion-talento.pdf",
  },
];

function ServiceDetail({ service }: { service: ServiceItem }) {
  return (
    <div className="mt-6 border-t border-zinc-200 pt-6">
      <h4 className="text-base font-semibold tracking-tight text-primary">
        {service.detailTitle}
      </h4>

      <div className="mt-5 space-y-6">
        {service.detailGroups?.map((group) => (
          <div key={group.heading}>
            <p className="text-sm font-semibold text-zinc-900">
              {group.heading}
            </p>
            {group.intro ? (
              <p className="mt-1.5 text-sm italic leading-relaxed text-zinc-500">
                {group.intro}
              </p>
            ) : null}
            <ul className="mt-3 space-y-2.5">
              {group.items.map((item) => (
                <li key={item.label} className="flex gap-2.5 text-sm leading-relaxed">
                  <span
                    aria-hidden
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                  />
                  <span className="text-zinc-600">
                    <span className="font-medium text-zinc-900">
                      {item.label}
                      {item.text ? ": " : ""}
                    </span>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA de cotización */}
      <div className="mt-7 rounded-xl border border-primary/20 bg-primary/[0.04] p-5 backdrop-blur-sm">
        <p className="text-sm font-semibold text-zinc-900">
          ¿Deseas cotizar este servicio? Contáctanos directamente:
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href={`mailto:${QUOTE_EMAIL}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <Mail className="h-4 w-4" />
            {QUOTE_EMAIL}
          </a>
          <a
            href={QUOTE_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            aria-label={`Teléfono y WhatsApp: ${QUOTE_PHONE_DISPLAY}`}
          >
            <Phone className="h-4 w-4" />
            {QUOTE_PHONE_DISPLAY}
          </a>
        </div>
        <p className="sr-only">
          Teléfono y WhatsApp:{" "}
          <a href={`tel:${QUOTE_PHONE_TEL}`}>{QUOTE_PHONE_DISPLAY}</a>
        </p>
      </div>
    </div>
  );
}

export function Services() {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <section
      id="servicios"
      className="w-full scroll-mt-24 bg-gradient-to-b from-transparent via-zinc-50 to-white px-6 py-20 sm:px-10 md:py-28 lg:px-12"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-4xl">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="services-heading"
            className="text-balance font-sans text-3xl font-semibold tracking-tight text-primary sm:text-4xl"
          >
            Soluciones a Medida para tu Escala
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-foreground/70 sm:text-lg">
            Evaluación por competencias y rigor metodológico para roles que no
            pueden fallar — más tecnología cuando tu operación necesita escalar
            en Chile y el resto de Latinoamérica.
          </p>
        </header>

        <ul className="mt-14 grid grid-cols-1 items-start gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {services.map((item) => {
            const hasDetail = Boolean(item.detailGroups?.length);
            const isOpen = openTitle === item.title;
            const panelId = `service-detail-${item.title
              .toLowerCase()
              .replace(/\s+/g, "-")}`;

            return (
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

                  <div className="mt-6 flex flex-col gap-4">
                    {hasDetail ? (
                      <button
                        type="button"
                        onClick={() =>
                          setOpenTitle((prev) =>
                            prev === item.title ? null : item.title,
                          )
                        }
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary/90 px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.35),0_10px_30px_-14px_hsl(var(--primary)/0.6)] transition-all duration-200 hover:bg-primary active:scale-[0.98]"
                      >
                        {isOpen ? "Ocultar detalles" : "Ver detalles del servicio"}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : null}

                    {item.detailPdf ? (
                      <a
                        href={item.detailPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
                        aria-label={`Descargar detalle del servicio: ${item.title}`}
                      >
                        <Download className="h-4 w-4" />
                        Descargar Detalle del Servicio
                      </a>
                    ) : null}
                  </div>

                  {hasDetail ? (
                    <div
                      id={panelId}
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ServiceDetail service={item} />
                      </div>
                    </div>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
