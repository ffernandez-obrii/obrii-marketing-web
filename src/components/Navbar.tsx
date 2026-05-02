"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";

const APP_URL = "https://app.obriiconsulting.com";
const AGENDAR_HREF =
  process.env.NEXT_PUBLIC_AGENDAR_ASESORIA_URL ?? "#contacto";

const navItems = [
  { href: "#servicios", label: "Consultoría" },
  { href: "#obrii-app", label: "Obrii App" },
  { href: "#consultor", label: "El Consultor" },
] as const;

const navLinkClass =
  "text-sm font-medium text-foreground/80 transition-colors hover:text-primary";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6 lg:px-12">
        <Link
          href="/"
          className="shrink-0 text-base font-semibold tracking-tight text-primary transition-colors hover:text-primary/90"
        >
          Obrii Consulting
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Principal"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ButtonLink
            href={APP_URL}
            variant="secondary"
            size="default"
            className="hidden md:inline-flex"
          >
            Iniciar Sesión
          </ButtonLink>
          <ButtonLink
            href={AGENDAR_HREF}
            variant="primary"
            size="default"
            className="inline-flex shrink-0"
            {...(AGENDAR_HREF.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            Agendar Asesoría
          </ButtonLink>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-background/40 text-foreground backdrop-blur-sm md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border/40 bg-background/95 px-6 py-4 backdrop-blur-md md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Móvil">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1 text-sm font-medium text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <ButtonLink
              href={APP_URL}
              variant="secondary"
              size="default"
              className="mt-2 w-full md:hidden"
              onClick={() => setOpen(false)}
            >
              Iniciar Sesión
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
