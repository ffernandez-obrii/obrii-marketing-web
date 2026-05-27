import Link from "next/link";
import type { ReactNode } from "react";

type ArticleShellProps = {
  title: string;
  date: string;
  author?: string;
  tags?: string[];
  backHref?: string;
  backLabel?: string;
  children: ReactNode;
};

export function ArticleShell({
  title,
  date,
  author,
  tags,
  backHref = "/blog",
  backLabel = "← Volver al blog",
  children,
}: ArticleShellProps) {
  return (
    <main className="py-16 md:py-20 relative overflow-hidden">
      {/* Halo ambiental decorativo en la lectura del artículo */}
      <div 
        className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-72 w-full max-w-4xl rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, hsl(var(--primary) / 0.15), transparent 75%)"
        }}
      />

      <article className="relative mx-auto max-w-3xl px-6 lg:px-8 font-sans">
        <Link
          href={backHref}
          className="mb-8 inline-flex min-h-[44px] items-center py-1 text-sm font-semibold text-zinc-500 transition-colors hover:text-zinc-900"
        >
          {backLabel}
        </Link>
        
        {/* Renderizado de Tags */}
        {tags && tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-0.5 text-xs font-semibold text-primary tracking-wide transition-colors hover:bg-primary/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          {title}
        </h1>

        {/* Metadatos (Autor y Fecha) */}
        <div className="mt-4 flex items-center gap-3 text-sm text-zinc-500 border-b border-zinc-200/60 pb-6">
          <time dateTime={date}>{date}</time>
          {author && (
            <>
              <span className="text-zinc-300" aria-hidden>|</span>
              <span>Por <span className="font-semibold text-zinc-800">{author}</span></span>
            </>
          )}
        </div>

        <div className="mt-8 space-y-6">
          {children}
        </div>
      </article>
    </main>
  );
}
