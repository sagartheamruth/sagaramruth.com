interface BlogPostCardProps {
  title: string;
  date: string;
  summary: string;
  href?: string;
  isLast?: boolean;
}

export default function BlogPostCard({
  title,
  date,
  summary,
  href,
  isLast,
}: BlogPostCardProps) {
  const TitleEl = href ? "a" : "span";

  return (
    <div
      className={`pb-5 mb-5 ${!isLast ? "border-b border-border" : ""}`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-mono text-sm font-bold tracking-tight">
          {href ? (
            <a href={href} className="no-underline hover:underline">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <span className="font-mono text-[10px] text-secondary whitespace-nowrap">
          {date}
        </span>
      </div>
      <p className="text-secondary text-sm mt-1.5 leading-relaxed">
        {summary}
      </p>
    </div>
  );
}
