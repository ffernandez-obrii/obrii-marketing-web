const LINKEDIN_HREF = "https://www.linkedin.com/in/franciscofernandez";
const CONTACT_EMAIL = "ffernandez@obriiconsulting.com";

const linkClass =
  "text-foreground/55 underline-offset-4 transition-colors hover:text-primary hover:underline";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
        <p className="flex flex-col items-center gap-3 text-center text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3 sm:gap-y-2">
          <span className="text-pretty">
            © 2026 Obrii Consulting. Francisco Fernández. Todos los derechos
            reservados.
          </span>
          <span className="hidden text-foreground/30 sm:inline" aria-hidden>
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
          <span className="hidden text-foreground/30 sm:inline" aria-hidden>
            ·
          </span>
          <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </footer>
  );
}
