interface BrandGridProps {
  brands: string[];
}

export default function BrandGrid({ brands }: BrandGridProps) {
  return (
    <div className="flex flex-wrap gap-x-1.5 gap-y-0.5">
      {brands.map((brand, i) => (
        <span key={i} className="font-mono text-sm text-secondary">
          {brand}
          {i < brands.length - 1 && (
            <span className="text-border ml-1.5">&middot;</span>
          )}
        </span>
      ))}
    </div>
  );
}
