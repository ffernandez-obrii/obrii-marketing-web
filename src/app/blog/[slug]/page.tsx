import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleShell } from "@/components/blog/ArticleShell";
import {
  getAllPosts,
  formatPostDate,
  getPostBySlug,
} from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/MdxComponents";

type Props = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.metadata.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Artículo" };
  }
  const title = post.metadata.seoTitle ?? post.metadata.title;
  const description = post.metadata.seoDescription ?? post.metadata.excerpt;
  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.metadata.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/blog/${post.metadata.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <ArticleShell
      title={post.metadata.title}
      date={formatPostDate(post.metadata.date)}
      author={post.metadata.author}
      tags={post.metadata.tags}
    >
      <div className="mdx-content font-serif text-base md:text-lg leading-relaxed text-slate-950 dark:text-slate-50">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </ArticleShell>
  );
}
