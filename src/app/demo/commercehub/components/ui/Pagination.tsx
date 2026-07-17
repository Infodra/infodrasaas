"use client";

export function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (value: number) => void;
}) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm dark:border-slate-800 dark:bg-slate-900/60">
      <button
        type="button"
        className="rounded-xl border border-slate-300 px-3 py-1.5 disabled:opacity-40 dark:border-slate-700"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Previous
      </button>
      <span className="text-slate-600 dark:text-slate-300">Page {page} of {totalPages}</span>
      <button
        type="button"
        className="rounded-xl border border-slate-300 px-3 py-1.5 disabled:opacity-40 dark:border-slate-700"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
