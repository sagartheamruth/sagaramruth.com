interface LinkItemProps {
  label: string;
  url: string;
  description?: string;
  isLast?: boolean;
}

export default function LinkItem({
  label,
  url,
  description,
  isLast,
}: LinkItemProps) {
  return (
    <a
      href={url}
      target={url.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className={`flex items-center justify-between py-3.5 no-underline group ${
        !isLast ? "border-b border-border" : ""
      }`}
    >
      <div>
        <div className="font-mono text-sm font-semibold group-hover:underline">
          {label}
        </div>
        {description && (
          <div className="font-mono text-[11px] text-secondary mt-0.5">
            {description}
          </div>
        )}
      </div>
      <span className="text-secondary text-sm group-hover:translate-x-0.5 transition-transform">
        &rarr;
      </span>
    </a>
  );
}
