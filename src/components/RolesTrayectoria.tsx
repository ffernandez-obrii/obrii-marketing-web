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
    <section className="w-full overflow-hidden border-b border-zinc-200/60 bg-transparent py-8 sm:py-10">
      <div className="mx-auto mb-6 max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-sm md:text-base font-semibold uppercase tracking-widest text-primary">
          Experiencia en Roles Críticos y Posiciones Estratégicas
        </h2>
      </div>

      <div className="relative mx-auto flex max-w-[100vw] overflow-hidden bg-transparent">
        {/* Gradient Masks for smooth fade out at the edges */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 md:w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 md:w-32 bg-gradient-to-l from-background to-transparent" />
        
        {/* Scrolling Container */}
        <div 
          className="flex w-max items-center hover:[animation-play-state:paused]"
          style={{ animation: 'marquee 50s linear infinite' }}
        >
          {[1, 2].map((set) => (
            <div key={set} className="flex shrink-0 items-center gap-3 pr-3 md:gap-4 md:pr-4">
              {roles.map((role, idx) => (
                <div
                  key={`${set}-${idx}`}
                  className="cursor-default whitespace-nowrap rounded-md border border-zinc-200/60 bg-white px-3 py-1.5 text-xs text-zinc-500 shadow-sm transition-colors hover:border-primary/30 hover:text-primary md:px-4 md:py-2 md:text-sm"
                >
                  {role}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
