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
    <section className="w-full bg-transparent px-6 py-10 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-6 text-center text-xl font-semibold text-primary md:text-2xl">
          Experiencia en Roles Críticos y Posiciones Estratégicas
        </h2>

        <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
          {roles.map((role) => (
            <li
              key={role}
              className="cursor-default rounded-md border border-zinc-200/60 bg-white px-3 py-1.5 text-xs text-zinc-500 shadow-sm transition-colors hover:bg-zinc-50 md:text-sm"
            >
              {role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
