interface StatBarProps {
  stats: Array<{ value: string; label: string }>;
}

export default function StatBar({ stats }: StatBarProps) {
  return (
    <div className="flex border-y border-border py-4 my-6">
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
  );
}
