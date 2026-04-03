import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

// ── Types ──

export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  socialHandle: string;
  profileImage: string;
  bio: string[];
  stats: Array<{ value: string; label: string }>;
  socials: Array<{ label: string; url: string }>;
  featuredImage: { src: string; alt: string; caption: string };
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface TestimonialData {
  quote: string;
  name: string;
  title?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  published: boolean;
}

export interface LinkItem {
  label: string;
  url: string;
  description?: string;
  category?: string;
}

// ── Loaders ──

function readJSON<T>(filename: string): T {
  const filePath = path.join(contentDir, filename);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export function getSiteConfig(): SiteConfig {
  return readJSON<SiteConfig>("site.json");
}

export function getProjects(): Project[] {
  return readJSON<Project[]>("projects.json");
}

export function getBrands(): string[] {
  return readJSON<string[]>("brands.json");
}

export function getTestimonials(): TestimonialData[] {
  return readJSON<TestimonialData[]>("testimonials.json");
}

export function getLinks(): LinkItem[] {
  return readJSON<LinkItem[]>("links/links.json");
}

export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(contentDir, "blog");

  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: (data.title as string) || filename.replace(/\.md$/, ""),
      date: (data.date as string) || "",
      summary: (data.summary as string) || "",
      content,
      published: data.published !== false,
    };
  });

  // Sort: published first, then by date descending
  return posts.sort((a, b) => {
    if (a.published !== b.published) return a.published ? -1 : 1;
    if (a.date === "coming soon" && b.date !== "coming soon") return 1;
    if (b.date === "coming soon" && a.date !== "coming soon") return -1;
    return b.date.localeCompare(a.date);
  });
}
