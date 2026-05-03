import type { Metadata } from "next";
import Link from "next/link";
import {
  blogPosts,
  formatPostDate,
} from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos y reflexiones sobre talento crítico, evaluación psicolaboral y Headhunting B2B.",
  robots: { index: true },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-8 lg:px-12">
      <header className="max-w-2xl">
        <h1 className="font-sans text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Blog
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          Ideas prácticas sobre selección, evaluación y riesgo operativo en
          entornos B2B exigentes.
        </p>
      </header>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
        {sorted.map((post) => (
          <li key={post.slug}>
            <article className="flex h-full flex-col rounded-xl border border-zinc-200/90 bg-zinc-50/40 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] transition-colors hover:border-zinc-300">
              <time
                dateTime={post.date}
                className="text-xs font-medium uppercase tracking-wide text-zinc-500"
              >
                {formatPostDate(post.date)}
              </time>
              <h2 className="mt-3 font-sans text-lg font-semibold tracking-tight text-zinc-900">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 sm:text-[0.9375rem]">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline"
              >
                Leer artículo
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
