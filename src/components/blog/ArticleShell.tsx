import Link from "next/link";
import type { ReactNode } from "react";

type ArticleShellProps = {
  title: string;
  date: string;
  backHref?: string;
  backLabel?: string;
  children: ReactNode;
};

export function ArticleShell({
  title,
  date,
  backHref = "/blog",
  backLabel = "← Volver al blog",
  children,
}: ArticleShellProps) {
  return (
    <main className="py-16 md:py-20">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link
          href={backHref}
          className="mb-8 inline-flex min-h-[44px] items-center py-1 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
        >
          {backLabel}
        </Link>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          {title}
        </h1>
        <p className="mt-2 text-sm text-zinc-500">{date}</p>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-zinc-700">
          {children}
        </div>
      </article>
    </main>
  );
}
