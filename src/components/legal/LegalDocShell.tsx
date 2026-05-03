import type { ReactNode } from "react";

type LegalDocShellProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalDocShell({
  title,
  lastUpdated,
  children,
}: LegalDocShellProps) {
  return (
    <main className="py-16 md:py-20">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
          {title}
        </h1>
        <p className="mt-2 text-sm text-zinc-500">{lastUpdated}</p>
        <div className="mt-8 flex flex-col gap-8 text-base leading-relaxed text-zinc-700 [&_section]:space-y-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-zinc-900 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:marker:text-zinc-400">
          {children}
        </div>
      </article>
    </main>
  );
}
