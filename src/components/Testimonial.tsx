interface TestimonialProps {
  quote: string;
  name: string;
  title?: string;
  isLast?: boolean;
}

export default function Testimonial({
  quote,
  name,
  title,
  isLast,
}: TestimonialProps) {
  return (
    <div
      className={`pb-6 mb-6 ${!isLast ? "border-b border-border" : ""}`}
    >
      <blockquote className="text-sm leading-relaxed italic border-l-2 border-border pl-4 mb-3">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="font-mono text-xs">
        <span className="font-bold">{name}</span>
        {title && (
          <span className="text-secondary"> &mdash; {title}</span>
        )}
      </div>
    </div>
  );
}
