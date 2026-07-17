"use client";

import Link from "next/link";
import { productsById } from "../lib/data";
import { useCommerceHubState } from "../hooks/useCommerceHubState";
import { EmptyState } from "../components/ui/EmptyState";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useCommerceHubState();
  const products = wishlist.map((id) => productsById.get(id)).filter(Boolean);

  if (products.length === 0) {
    return <EmptyState title="Wishlist is empty" description="Save products to wishlist for later." />;
  }

  return (
    <div className="space-y-4 pb-10">
      <h1 className="text-2xl font-bold">Wishlist</h1>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article key={product!.id} className="rounded-3xl border border-slate-200 bg-white/85 p-4 dark:border-slate-800 dark:bg-slate-900/80">
            <p className="font-semibold">{product!.name}</p>
            <p className="mt-1 text-sm text-slate-500">{product!.description}</p>
            <div className="mt-3 flex gap-2">
              <button type="button" onClick={() => addToCart(product!.id, 1)} className="rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white">Move to Cart</button>
              <button type="button" onClick={() => toggleWishlist(product!.id)} className="rounded-xl border border-slate-300 px-3 py-2 text-xs">Remove</button>
            </div>
          </article>
        ))}
      </div>
      <Link href="/demo/commercehub/products" className="inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm">Continue browsing</Link>
    </div>
  );
}
