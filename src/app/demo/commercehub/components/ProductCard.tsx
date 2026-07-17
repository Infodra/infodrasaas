"use client";

import Image from "next/image";
import Link from "next/link";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import type { Product } from "../lib/types";
import { formatCurrency } from "../lib/data";
import { RatingStars } from "./ui/RatingStars";
import { useCommerceHubState } from "../hooks/useCommerceHubState";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, wishlist, toggleWishlist } = useCommerceHubState();
  const inWishlist = wishlist.includes(product.id);

  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white/85 shadow-sm transition hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/85"
    >
      <div className="relative">
        <Image src={product.thumbnail} alt={product.name} width={420} height={300} className="h-52 w-full object-cover" />
        <button
          type="button"
          className={`absolute right-3 top-3 rounded-full border p-2 ${inWishlist ? "border-teal-500 bg-teal-50 text-teal-600" : "border-slate-200 bg-white/90 text-slate-500"}`}
          onClick={() => toggleWishlist(product.id)}
        >
          <HeartIcon className="h-4 w-4" />
        </button>
        {product.discount > 0 ? (
          <span className="absolute left-3 top-3 rounded-full bg-teal-500 px-2.5 py-1 text-xs font-semibold text-white">
            {product.discount}% OFF
          </span>
        ) : null}
      </div>
      <div className="p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{product.category}</p>
        <Link href={`/demo/commercehub/products/${product.id}`} className="mt-1 block text-base font-semibold text-slate-900 hover:text-blue-700 dark:text-slate-100">
          {product.name}
        </Link>
        <div className="mt-2"><RatingStars rating={product.rating} /></div>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{formatCurrency(product.price)}</p>
            <p className="text-xs text-slate-500 line-through dark:text-slate-400">{formatCurrency(product.originalPrice)}</p>
          </div>
          <button
            type="button"
            onClick={() => addToCart(product.id, 1)}
            className="inline-flex items-center gap-1 rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
          >
            <ShoppingCartIcon className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </motion.article>
  );
}
