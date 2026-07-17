type StatisticCardProps = {
  label: string;
  value: string;
  change?: string;
};

export function StatisticCard({ label, value, change }: StatisticCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white/85 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-black">{value}</p>
      {change ? <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-300">{change}</p> : null}
    </article>
  );
}