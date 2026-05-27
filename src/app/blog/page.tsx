import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllPosts,
  formatPostDate,
} from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos y reflexiones sobre talento crítico, evaluación psicolaboral y Headhunting B2B.",
  robots: { index: true },
};

export default function BlogIndexPage() {
  const sorted = getAllPosts();
  const featuredPost = sorted[0];
  const secondaryPosts = sorted.slice(1);

  return (
    <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-8 lg:px-12 overflow-hidden">
      {/* Halo ambiental decorativo de marca */}
      <div 
        className="pointer-events-none absolute inset-x-0 -top-12 mx-auto h-64 w-full max-w-5xl rounded-full opacity-35 blur-3xl"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(var(--primary) / 0.18), transparent 70%)"
        }}
      />

      <header className="relative max-w-2xl">
        <h1 className="font-sans text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Blog
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          Ideas prácticas sobre selección, evaluación y riesgo operativo en
          entornos B2B exigentes.
        </p>
      </header>

      {/* Featured Post Card */}
      {featuredPost && (
        <section className="relative mt-12">
          <article className="relative overflow-hidden bg-card/60 backdrop-blur border border-border/70 rounded-2xl shadow-[0_24px_48px_-12px_hsl(var(--foreground)/0.06)] ring-1 ring-black/[0.04] dark:ring-white/[0.06]">
            {/* Línea Espectral Superior (Hairline) */}
            <div className="h-1.5 w-full bg-gradient-to-r from-sky-500 via-primary to-violet-500" />
            
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <time
                    dateTime={featuredPost.metadata.date}
                    className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-sans"
                  >
                    {formatPostDate(featuredPost.metadata.date)}
                  </time>
                  {featuredPost.metadata.tags && featuredPost.metadata.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[10px] font-semibold text-primary tracking-wide font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="mt-4 font-sans text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl hover:text-primary transition-colors">
                  <Link href={`/blog/${featuredPost.metadata.slug}`}>
                    {featuredPost.metadata.title}
                  </Link>
                </h2>
                
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600">
                  {featuredPost.metadata.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <Link
                  href={`/blog/${featuredPost.metadata.slug}`}
                  className="inline-flex text-sm font-semibold text-primary underline-offset-4 transition-colors hover:underline"
                >
                  Leer artículo destacado →
                </Link>
                {featuredPost.metadata.author && (
                  <span className="text-xs font-medium text-zinc-500 font-sans">
                    Por {featuredPost.metadata.author}
                  </span>
                )}
              </div>
            </div>
          </article>
        </section>
      )}

      {/* Grid of Secondary Posts */}
      {secondaryPosts.length > 0 && (
        <div className="relative mt-14">
          <h3 className="font-sans text-lg font-semibold text-zinc-800 mb-6">
            Otros artículos de interés
          </h3>
          <ul className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {secondaryPosts.map((post) => (
              <li key={post.metadata.slug} className="flex">
                <article className="flex w-full flex-col bg-card/60 backdrop-blur border border-border/60 rounded-xl p-5 transition-all duration-300 shadow-[0_8px_16px_-6px_hsl(var(--foreground)/0.04)] hover:shadow-[0_20px_32px_-8px_hsl(var(--primary)/0.12)] hover:border-primary/30 hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <time
                      dateTime={post.metadata.date}
                      className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 font-sans"
                    >
                      {formatPostDate(post.metadata.date)}
                    </time>
                    {post.metadata.tags && post.metadata.tags.slice(0, 1).map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-[9px] font-semibold text-primary tracking-wide font-sans"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="mt-3 font-sans text-base font-semibold tracking-tight text-zinc-900 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.metadata.slug}`}>
                      {post.metadata.title}
                    </Link>
                  </h2>

                  <p className="mt-3 flex-1 text-xs sm:text-sm leading-relaxed text-zinc-600">
                    {post.metadata.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      href={`/blog/${post.metadata.slug}`}
                      className="inline-flex text-xs font-semibold text-primary underline-offset-4 transition-colors hover:underline"
                    >
                      Leer artículo →
                    </Link>
                    {post.metadata.author && (
                      <span className="text-[10px] font-medium text-zinc-500 font-sans">
                        Por {post.metadata.author}
                      </span>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
