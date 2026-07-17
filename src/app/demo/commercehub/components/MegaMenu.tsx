"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Category } from "../lib/types";

export function MegaMenu({ categories }: { categories: Category[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute left-0 top-full z-40 mt-3 hidden w-[680px] rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-2xl dark:border-slate-800 dark:bg-slate-900/95 lg:block"
    >
      <p className="mb-4 text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Shop by category</p>
      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/demo/commercehub/products?category=${category.id}`}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-blue-500/40 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
