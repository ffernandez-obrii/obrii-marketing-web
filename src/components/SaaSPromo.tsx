import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";

const APP_URL = "https://app.obriiconsulting.com";

export function SaaSPromo() {
  return (
    <section
      id="obrii-app"
      className="w-full px-6 py-20 sm:px-10 md:py-28 lg:px-12"
      aria-labelledby="saas-promo-heading"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2 md:gap-16 md:items-center">
        <div>
          <span className="inline-flex items-center rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/80">
            Obrii App — HR SaaS
          </span>
          <h2
            id="saas-promo-heading"
            className="mt-6 text-balance font-sans text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            El Termómetro Exacto de tu Talento
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-foreground/75 sm:text-lg">
            Nuestra plataforma propietaria te permite medir el fit cultural,
            detectar riesgo de burnout temprano y evaluar competencias técnicas
            a escala. Toma decisiones basadas en datos antes de que el talento
            crítico abandone la operación.
          </p>
          <div className="mt-8">
            <ButtonLink href={APP_URL} variant="primary" size="lg">
              Descubrir Obrii App →
            </ButtonLink>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-3xl overflow-hidden rounded-[1rem] border border-border/60 shadow-xl md:mx-0 md:max-w-none">
          <Image
            src="/dashboard-obrii.jpg"
            alt="Dashboard Obrii App"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="aspect-video h-auto w-full object-cover object-left-top"
            priority={false}
          />
        </figure>
      </div>
    </section>
  );
}
