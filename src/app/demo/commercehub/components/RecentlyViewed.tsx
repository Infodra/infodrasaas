"use client";

import Link from "next/link";
import { productsById } from "../lib/data";
import { useCommerceHubState } from "../hooks/useCommerceHubState";

export function RecentlyViewed() {
  const { recentlyViewed } = useCommerceHubState();
  const rows = recentlyViewed.map((id) => productsById.get(id)).filter(Boolean);

  if (rows.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">Recently Viewed</h2>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {rows.map((product) => (
          <Link
            key={product!.id}
            href={`/demo/commercehub/products/${product!.id}`}
            className="min-w-64 rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/80"
          >
            <p className="font-semibold">{product!.name}</p>
            <p className="mt-1 text-xs text-slate-500">{product!.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
