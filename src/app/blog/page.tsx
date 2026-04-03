import type { Metadata } from "next";
import { getBlogPosts } from "@/lib/content";
import Section from "@/components/Section";
import BlogPostCard from "@/components/BlogPostCard";

export const metadata: Metadata = {
  title: "Blog — Sagar Amruth",
  description: "Curation, readings, and thoughts on AI content creation.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <section className="pb-4">
        <h1 className="font-mono text-2xl font-bold tracking-tight">blog</h1>
        <p className="text-secondary text-sm mt-2 leading-relaxed">
          Things I&apos;m reading, thinking about, and curating. A mix of AI,
          content creation, technology, and the future of media.
        </p>
      </section>

      <Section title="Posts">
        {posts.length > 0 ? (
          posts.map((post, i) => (
            <BlogPostCard
              key={post.slug}
              title={post.title}
              date={post.date}
              summary={post.summary}
              href={post.published ? `/blog/${post.slug}` : undefined}
              isLast={i === posts.length - 1}
            />
          ))
        ) : (
          <p className="font-mono text-xs text-secondary italic">
            No posts yet.
          </p>
        )}
      </Section>

      <p className="font-mono text-xs text-secondary text-center italic py-8">
        more posts coming soon.
      </p>
    </>
  );
}
