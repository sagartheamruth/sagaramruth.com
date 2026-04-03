import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/content";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts
    .filter((p) => p.published)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const posts = getBlogPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} — Sagar Amruth`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const posts = getBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post || !post.published) notFound();

  // Simple markdown-to-html: paragraphs, bold, italic, links
  const paragraphs = post.content
    .trim()
    .split(/\n\n+/)
    .filter(Boolean);

  return (
    <article>
      <header className="mb-6">
        <h1 className="font-mono text-xl sm:text-2xl font-bold tracking-tight">
          {post.title}
        </h1>
        <p className="font-mono text-[11px] text-secondary mt-1">
          {post.date}
        </p>
      </header>

      <div className="space-y-4">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-[14px] leading-[1.8] text-primary"
            dangerouslySetInnerHTML={{
              __html: p
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\*(.*?)\*/g, "<em>$1</em>")
                .replace(
                  /\[([^\]]+)\]\(([^)]+)\)/g,
                  '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
                ),
            }}
          />
        ))}
      </div>

      <hr className="border-border my-8" />

      <a
        href="/blog"
        className="font-mono text-xs text-secondary no-underline hover:text-primary"
      >
        &larr; back to blog
      </a>
    </article>
  );
}
