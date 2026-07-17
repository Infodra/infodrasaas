import Link from "next/link";

export function SearchSuggestions({
  query,
  suggestions,
}: {
  query: string;
  suggestions: string[];
}) {
  if (!query.trim()) {
    return null;
  }

  return (
    <div className="absolute left-0 top-[calc(100%+0.4rem)] z-50 w-full rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900">
      {suggestions.length > 0 ? (
        suggestions.map((suggestion) => (
          <Link
            key={suggestion}
            href={`/demo/commercehub/products?search=${encodeURIComponent(suggestion)}`}
            className="block rounded-xl px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {suggestion}
          </Link>
        ))
      ) : (
        <p className="px-3 py-2 text-sm text-slate-500">No suggestions found.</p>
      )}
    </div>
  );
}
