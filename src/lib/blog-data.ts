export type BlogPost = {
  slug: string;
  title: string;
  /** Fecha en formato ISO (YYYY-MM-DD) para orden y metadata. */
  date: string;
  excerpt: string;
  /** Párrafos planos; el artículo los renderiza como <p> sin Markdown. */
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "talento-critico-en-operaciones-b2b",
    title: "Talento crítico en operaciones B2B: por qué la evaluación psicolaboral importa más que nunca",
    date: "2026-04-12",
    excerpt:
      "Cómo alinear criterios de selección con el riesgo operativo real en sectores de alta exigencia — sin improvisación.",
    content: [
      "Las organizaciones que dependen de instalaciones críticas no pueden permitirse errores de contratación en roles sensibles. La evaluación psicolaboral de alto estándar no es un “extra”: reduce incertidumbre y acelera decisiones defendibles ante dirección y directorio.",
      "En Headhunting especializado, el valor está en validar hipótesis de desempeño con evidencia trazable: entrevistas estructuradas, triangulación psicométrica y gobernanza del proceso — incluyendo revisión de sesgos cuando el proceso incorpora herramientas digitales o IA.",
      "[PLACEHOLDER_LEGAL_O_FINANCIERO] Complete este apartado con el mensaje y disclaimers que apruebe su asesoría — aquí puede enlazar a servicios o casos de uso sin comprometer confidencialidad.",
    ],
  },
  {
    slug: "star-y-trazabilidad-en-seleccion",
    title: "STAR y trazabilidad: cómo documentar decisiones de selección sin perder agilidad",
    date: "2026-05-02",
    excerpt:
      "Un marco simple para capturar comportamiento pasado con rigor, útil tanto para informes internos como para auditorías futuras.",
    content: [
      "Las metodologías basadas en comportamiento pasado ganan fuerza cuando quedan registradas de forma consistente. STAR no es solo una lista de preguntas: es una forma de capturar evidencia comparable entre candidatos y entre entrevistadores.",
      "La trazabilidad no debe convertir el proceso en burocracia eterna. El objetivo es que cada recomendación final pueda explicarse en una página: qué se observó, cómo se ponderó y qué riesgos quedan explícitos para quien toma la decisión final.",
      "[PLACEHOLDER_INTERNO] Añada aquí ejemplos anonimizados o una checklist interna según su política de comunicación.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatPostDate(isoDate: string): string {
  return new Intl.DateTimeFormat("es-CL", {
    dateStyle: "long",
    timeZone: "America/Santiago",
  }).format(new Date(`${isoDate}T12:00:00`));
}
