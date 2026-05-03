import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-10 mb-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-zinc-900">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold tracking-tight text-zinc-900">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-6 leading-relaxed text-zinc-700">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="mb-6 ml-6 list-disc space-y-2 text-zinc-700 marker:text-zinc-400">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 ml-6 list-decimal space-y-2 text-zinc-700 marker:text-zinc-400">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li>
      {children}
    </li>
  ),
  a: ({ href, children }) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline underline-offset-4 hover:text-primary/80">
        {children}
      </a>
    );
  },
  strong: ({ children }) => (
    <strong className="font-semibold text-zinc-900">
      {children}
    </strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-4 border-primary/30 bg-primary/5 p-4 italic text-zinc-700">
      {children}
    </blockquote>
  ),
};
