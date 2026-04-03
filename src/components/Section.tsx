interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="py-5">
      <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-secondary mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      {children}
    </section>
  );
}
