import { FaceFrownIcon } from "@heroicons/react/24/outline";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
      <FaceFrownIcon className="mx-auto h-10 w-10 text-slate-400" />
      <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p>
    </div>
  );
}
