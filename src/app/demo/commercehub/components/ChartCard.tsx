export function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white/85 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
      <h2 className="mb-3 font-semibold">{title}</h2>
      {children}
    </article>
  );
}