import { Check } from "lucide-react";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const profileImageSrc = (() => {
  const pub = path.join(process.cwd(), "public");
  if (fs.existsSync(path.join(pub, "francisco-perfil.jpg"))) {
    return "/francisco-perfil.jpg";
  }
  if (fs.existsSync(path.join(pub, "_CVA7492.JPG"))) {
    return "/_CVA7492.JPG";
  }
  return "/_CVA7492.JPG";
})();

const highlights = [
  "Rigor Metodológico (Entrevistas STAR)",
  "Evaluación Psicométrica Avanzada",
  "Visión de Negocio B2B",
] as const;

export function ConsultantProfile() {
  return (
    <section
      id="consultor"
      className="w-full px-6 py-20 sm:px-10 md:py-28 lg:px-12"
      aria-labelledby="consultant-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/80">
              Tu Partner Estratégico
            </span>

            <h2
              id="consultant-heading"
              className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Francisco Fernández
            </h2>

            <h3 className="mt-3 text-lg font-medium text-primary sm:text-xl">
              Psicólogo Consultor &amp; Magíster(c) en MDPO
            </h3>

            <p className="mt-6 text-pretty text-base leading-relaxed text-foreground/75 sm:text-lg">
              Mi enfoque combina el rigor clínico de la psicología con la
              eficiencia operativa de la inteligencia artificial. Como tu
              consultor, no solo te entrego una plataforma de diagnóstico;
              diseño la estrategia de talento para proteger la continuidad de tu
              negocio y audito personalmente cada evaluación crítica.
            </p>

            <ul className="mt-8 space-y-4" aria-label="Fortalezas del consultor">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3 text-left">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src={profileImageSrc}
              width={500}
              height={500}
              alt="Francisco Fernández - Psicólogo Consultor"
              className="aspect-square h-auto w-full max-w-[500px] rounded-[1rem] border border-border/60 object-cover shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
