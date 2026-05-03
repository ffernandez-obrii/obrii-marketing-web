import Link from "next/link";

const roles = [
  "Ejecutivo Comercial Senior (Factoring)",
  "Gerente Comercial",
  "Psicóloga Laboral",
  "Profesional de Oficina Técnica",
  "Analista de Control de Gestión",
  "Encargado de Programación y Control",
  "Prevencionista de Riesgos",
  "Administrativo de RRHH (Obra)",
  "Control de Documentos",
  "Profesional de Calidad",
  "Coordinador Administrativo Académico",
  "Académico Administrador Público",
  "Magíster/Doctor en Administración Pública",
  "Experto en Políticas Públicas y Economía"
];

export function RolesTrayectoria() {
  return (
    <section className="w-full bg-white px-6 py-20 sm:px-10 md:py-24 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 text-center md:mb-16">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Experiencia en Roles Críticos y Posiciones Estratégicas
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg">
            Nuestra metodología de evaluación y selección ha sido aplicada con éxito en diversos sectores, validando talento para posiciones que sostienen la continuidad operativa y el rigor académico.
          </p>
        </header>

        <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {roles.map((role) => (
            <li
              key={role}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-primary/40 hover:bg-white hover:text-primary hover:shadow-md sm:px-5 sm:py-2.5 sm:text-base"
            >
              {role}
            </li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center text-center md:mt-16">
          <Link
            href="/consultoria"
            className="group inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Descubra cómo aplicamos este rigor en nuestra Consultoría
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
