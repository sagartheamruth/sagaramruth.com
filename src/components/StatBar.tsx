interface StatBarProps {
  stats: Array<{ value: string; label: string }>;
  subtitle?: string;
}

export default function StatBar({ stats, subtitle }: StatBarProps) {
  return (
    <div className="border-y border-border py-4 my-6">
      <div className="flex">
        {stats.map((stat, i) => (
          <div key={i} className="flex-1 text-center">
            <div className="font-mono text-xl font-bold tracking-tight">
              {stat.value}
            </div>
            <div className="font-mono text-[11px] text-secondary uppercase tracking-wider mt-0.5">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      {subtitle && (
        <p className="font-mono text-[11px] text-secondary text-center mt-3">
          {subtitle}
        </p>
      )}
    </div>
  );
}
