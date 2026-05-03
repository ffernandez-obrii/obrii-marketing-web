import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleShell } from "@/components/blog/ArticleShell";
import {
  blogPosts,
  formatPostDate,
  getPostBySlug,
} from "@/lib/blog-data";

type Props = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Artículo" };
  }
  return {
    title: post.title,
    description: post.excerpt,
    robots: { index: true },
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
      title={post.title}
      date={formatPostDate(post.date)}
    >
      {post.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </ArticleShell>
  );
}
