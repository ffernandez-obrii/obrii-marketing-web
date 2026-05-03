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
  return {
    title: post.metadata.title,
    description: post.metadata.excerpt,
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
      title={post.metadata.title}
      date={formatPostDate(post.metadata.date)}
    >
      <div className="mdx-content">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </ArticleShell>
  );
}
