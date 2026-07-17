"use client";

import { useState } from "react";
import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import type { Product } from "../lib/types";
import { formatCurrency } from "../lib/data";
import { useCommerceHubState } from "../hooks/useCommerceHubState";
import { Toast } from "./ui/Toast";

export function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const { addToCart, toggleWishlist, wishlist } = useCommerceHubState();

  const handleAdd = () => {
    addToCart(product.id, quantity);
    setShowToast(true);
    window.setTimeout(() => setShowToast(false), 1400);
  };

  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center gap-3">
        <p className="text-3xl font-black">{formatCurrency(product.price)}</p>
        <p className="text-sm text-slate-500 line-through">{formatCurrency(product.originalPrice)}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <label className="rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-700">
          Quantity
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(event) => setQuantity(Math.max(1, Number(event.target.value)))}
            className="ml-2 w-14 bg-transparent text-right outline-none"
          />
        </label>
        <button
          type="button"
          onClick={handleAdd}
          className="inline-flex items-center gap-1 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          <ShoppingBagIcon className="h-4 w-4" />
          Add to Cart
        </button>
        <button
          type="button"
          onClick={handleAdd}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold dark:border-slate-700 dark:bg-slate-950"
        >
          Buy Now
        </button>
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          className={`inline-flex items-center gap-1 rounded-xl border px-4 py-2.5 text-sm font-semibold ${wishlist.includes(product.id) ? "border-teal-500 bg-teal-50 text-teal-700" : "border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-950"}`}
        >
          <HeartIcon className="h-4 w-4" />
          Wishlist
        </button>
      </div>
      <Toast show={showToast} message="Added to cart" />
    </div>
  );
}
