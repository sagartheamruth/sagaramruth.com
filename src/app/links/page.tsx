import type { Metadata } from "next";
import { getLinks } from "@/lib/content";
import Section from "@/components/Section";
import LinkItem from "@/components/LinkItem";

export const metadata: Metadata = {
  title: "Links — Sagar Amruth",
  description: "Find Sagar Amruth on social media and the web.",
};

export default function LinksPage() {
  const links = getLinks();

  // Group by category
  const categories = new Map<string, typeof links>();
  for (const link of links) {
    const cat = link.category || "other";
    if (!categories.has(cat)) categories.set(cat, []);
    categories.get(cat)!.push(link);
  }

  return (
    <>
      <section className="pb-4">
        <h1 className="font-mono text-2xl font-bold tracking-tight">links</h1>
        <p className="text-secondary text-sm mt-2 leading-relaxed">
          Find me on the internet.
        </p>
      </section>

      {Array.from(categories.entries()).map(([category, items]) => (
        <Section key={category} title={category}>
          {items.map((link, i) => (
            <LinkItem
              key={i}
              {...link}
              isLast={i === items.length - 1}
            />
          ))}
        </Section>
      ))}
    </>
  );
}
