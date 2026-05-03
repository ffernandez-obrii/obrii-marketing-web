import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { AGENDAR_ASESORIA_URL, CONTACT_EMAIL } from "@/lib/site";

const LINKEDIN_HREF = "https://www.linkedin.com/company/obrii-consulting/";

const linkClass =
  "text-zinc-400 underline-offset-4 transition-colors hover:text-primary hover:underline";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
        <div className="flex flex-col items-center gap-8">
          <Link
            href="/"
            className="relative flex h-11 w-[132px] items-center opacity-90 transition-opacity hover:opacity-100"
            aria-label="Obrii Consulting — inicio"
          >
            <Image
              src="/logo.png"
              alt="Logo Obrii Consulting"
              width={132}
              height={44}
              className="h-11 w-auto object-contain"
            />
          </Link>

          <ButtonLink
            href={AGENDAR_ASESORIA_URL}
            variant="primary"
            size="default"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Reunión
          </ButtonLink>

          <p className="flex flex-col items-center gap-3 text-center text-sm text-zinc-500 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3 sm:gap-y-2">
            <span className="text-pretty">
              © 2026 Obrii Consulting. Francisco Fernández. Todos los derechos
              reservados.
            </span>
            <span className="hidden text-zinc-700 sm:inline" aria-hidden>
              ·
            </span>
            <a
              href={LINKEDIN_HREF}
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="hidden text-zinc-700 sm:inline" aria-hidden>
              ·
            </span>
            <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
              {CONTACT_EMAIL}
            </a>
          </p>

          <nav
            aria-label="Enlaces legales"
            className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-zinc-500"
          >
            <Link
              href="/privacidad"
              className="transition-colors hover:text-zinc-300"
            >
              Privacidad
            </Link>
            <span aria-hidden className="text-zinc-700">
              ·
            </span>
            <Link
              href="/terminos"
              className="transition-colors hover:text-zinc-300"
            >
              Términos
            </Link>
            <span aria-hidden className="text-zinc-700">
              ·
            </span>
            <Link
              href="/cookies"
              className="transition-colors hover:text-zinc-300"
            >
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
