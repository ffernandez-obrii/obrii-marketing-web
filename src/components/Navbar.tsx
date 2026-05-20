"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { AGENDAR_ASESORIA_URL } from "@/lib/site";

const APP_URL = "https://app.obriiconsulting.com";

const navItems = [
  { href: "#servicios", label: "Consultoría" },
  { href: "/obrii-app", label: "Plataforma SaaS" },
  { href: "#consultor", label: "El Consultor" },
  { href: "/blog", label: "Blog" },
] as const;

const navLinkClass =
  "text-sm font-medium text-foreground/85 transition-colors hover:text-primary";

const navLinkMobileClass =
  "rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[95%] max-w-5xl -translate-x-1/2">
      <div className="rounded-full border border-border/50 bg-background/80 shadow-sm backdrop-blur-md">
        <div className="flex h-14 items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6">
          <Link
            href="/"
            className="flex min-w-0 shrink-0 items-center gap-2 transition-opacity hover:opacity-90 sm:gap-2.5"
            aria-label="Obrii Consulting — inicio"
          >
            <Image
              src="/logo.png"
              alt=""
              width={120}
              height={40}
              className="h-8 w-auto shrink-0 object-contain object-left sm:h-9"
              priority
              aria-hidden
            />
            <span className="truncate text-sm font-bold tracking-tight text-primary sm:text-base">
              Obrii Consulting
            </span>
          </Link>

          <nav
            className="hidden items-center gap-6 lg:gap-8 md:flex"
            aria-label="Principal"
          >
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass}
                >
                  {item.label}
                </Link>
              ) : (
                <a key={item.href} href={item.href} className={navLinkClass}>
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-2.5">
            <ButtonLink
              href={APP_URL}
              variant="primary"
              size="default"
              className="hidden shrink-0 text-xs sm:inline-flex sm:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Obrii App
            </ButtonLink>
            <ButtonLink
              href={AGENDAR_ASESORIA_URL}
              variant="primary"
              size="default"
              className="inline-flex shrink-0 text-xs sm:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Reunión
            </ButtonLink>

            <button
              type="button"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background/50 text-foreground backdrop-blur-sm md:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-[18px]" /> : <Menu className="size-[18px]" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="mt-2 rounded-2xl border border-border/50 bg-background/95 p-4 shadow-lg backdrop-blur-md md:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Móvil">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkMobileClass}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className={navLinkMobileClass}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ),
            )}
            <ButtonLink
              href={APP_URL}
              variant="primary"
              size="default"
              className="mt-1 w-full"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Obrii App
            </ButtonLink>
            <ButtonLink
              href={AGENDAR_ASESORIA_URL}
              variant="primary"
              size="default"
              className="w-full"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Agendar Reunión
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
