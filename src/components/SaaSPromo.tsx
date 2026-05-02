import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";

const APP_URL = "https://app.obriiconsulting.com";

export function SaaSPromo() {
  return (
    <section
      id="obrii-app"
      className="relative isolate w-full overflow-hidden bg-zinc-950 px-6 py-20 text-zinc-50 sm:px-10 md:py-28 lg:px-12"
      aria-labelledby="saas-promo-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(ellipse_70%_45%_at_100%_60%,rgba(99,102,241,0.08),transparent_50%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden />

      <div className="relative mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-300 backdrop-blur-md">
            Obrii App — HR SaaS
          </span>
          <h2
            id="saas-promo-heading"
            className="mt-6 text-balance font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            El Termómetro Exacto de tu Talento
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
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

        <figure className="relative mx-auto w-full max-w-3xl md:mx-0 md:max-w-none">
          <div className="rounded-2xl border border-white/[0.09] bg-zinc-900/40 p-[3px] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_56px_-8px_hsl(var(--primary)/0.42),0_24px_64px_-28px_rgba(0,0,0,0.85)] ring-1 ring-sky-400/15">
            <div className="overflow-hidden rounded-[calc(1rem-2px)] ring-1 ring-white/[0.06]">
              <Image
                src="/dashboard-obrii.jpg"
                alt="Dashboard Obrii App"
                width={1600}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="aspect-video h-auto w-full object-cover object-left-top"
                priority={false}
              />
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
