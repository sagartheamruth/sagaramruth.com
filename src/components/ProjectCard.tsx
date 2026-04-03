interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  isLast?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tags,
  isLast,
}: ProjectCardProps) {
  return (
    <div
      className={`pb-4 mb-4 ${!isLast ? "border-b border-border" : ""}`}
    >
      <h3 className="font-mono text-sm font-bold tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-secondary text-[13px] leading-[1.7]">{description}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="font-mono text-[10px] px-2 py-0.5 bg-tag-bg text-secondary rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
