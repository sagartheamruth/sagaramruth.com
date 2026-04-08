import {
  getSiteConfig,
  getProjects,
  getBrands,
  getTestimonials,
} from "@/lib/content";
import StatBar from "@/components/StatBar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import BrandGrid from "@/components/BrandGrid";
import Testimonial from "@/components/Testimonial";
import SafeImage from "@/components/SafeImage";

export default function Home() {
  const site = getSiteConfig();
  const projects = getProjects();
  const brands = getBrands();
  const testimonials = getTestimonials();

  return (
    <>
      {/* Hero */}
      <section>
        <div className="flex items-start gap-5">
          <SafeImage
            src={site.profileImage}
            alt={site.name}
            className="w-[80px] h-[80px] rounded-full object-cover"
            wrapperClassName="flex-shrink-0 mt-0.5"
          />
          <div className="min-w-0">
            <h1 className="font-mono text-xl sm:text-2xl font-bold tracking-tight">
              {site.name}
            </h1>
            <p className="font-mono text-xs text-secondary mt-0.5">
              {site.tagline}
            </p>
            <div className="flex flex-wrap gap-2 mt-2.5">
              {site.socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target={s.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-secondary no-underline border border-border rounded px-2 py-0.5 hover:border-primary hover:text-primary transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <ul className="mt-5 space-y-2.5 list-none pl-0">
          {site.bio.map((p, i) => (
            <li key={i} className="text-secondary text-[13px] leading-[1.75]">
              <span className="mr-1.5">&gt;</span>{p}
            </li>
          ))}
        </ul>
      </section>

      {/* Stats */}
      <StatBar stats={site.stats} subtitle={site.statsSubtitle} />

      {/* Work */}
      <Section title="Work">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            {...project}
            isLast={i === projects.length - 1}
          />
        ))}
      </Section>

      <hr className="border-border" />

      {/* Featured image */}
      {site.featuredImage && (
        <SafeImage
          src={site.featuredImage.src}
          alt={site.featuredImage.alt}
          className="w-full rounded-sm"
          wrapperClassName="py-6"
          caption={site.featuredImage.caption}
        />
      )}

      <hr className="border-border" />

      {/* Brands */}
      <Section title="Brand Collaborations">
        <BrandGrid brands={brands} />
      </Section>

      <hr className="border-border" />

      {/* Testimonials */}
      <Section title="What People Say">
        {testimonials.map((t, i) => (
          <Testimonial
            key={i}
            {...t}
            isLast={i === testimonials.length - 1}
          />
        ))}
      </Section>

      <hr className="border-border" />

      {/* Core Values */}
      <Section title="Core Values">
        <ul className="space-y-2.5 list-none pl-0">
          {site.values.map((v, i) => (
            <li key={i} className="text-secondary text-[13px] leading-[1.75] italic">
              <span className="mr-1.5 not-italic">&gt;</span>{v}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
