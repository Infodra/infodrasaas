"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Category } from "../lib/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <motion.div whileHover={{ y: -6, rotate: -0.3 }} className="h-full">
      <Link
        href={`/demo/commercehub/products?category=${category.id}`}
        className="relative flex h-full items-center justify-between overflow-hidden rounded-3xl border border-amber-200/70 bg-gradient-to-r from-rose-50 via-amber-50 to-orange-50 p-4 shadow-[0_10px_30px_-18px_rgba(249,115,22,0.85)] transition hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-[0_16px_40px_-18px_rgba(244,63,94,0.5)] dark:border-amber-400/25 dark:bg-gradient-to-r dark:from-rose-950/30 dark:via-amber-900/20 dark:to-orange-900/30"
      >
        <span className="pointer-events-none absolute -right-6 -top-7 h-16 w-16 rounded-full bg-rose-300/30 blur-xl dark:bg-rose-500/20" />
        <span className="pointer-events-none absolute -bottom-8 left-12 h-16 w-16 rounded-full bg-amber-300/30 blur-xl dark:bg-amber-500/20" />
        <div className="relative">
          <p className="text-sm font-bold text-slate-900 dark:text-slate-100">{category.name}</p>
          <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">Festive curated picks</p>
          <p className="mt-2 inline-flex rounded-full bg-white/70 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-rose-700 dark:bg-white/10 dark:text-amber-200">
            Celebration Edit
          </p>
        </div>
        <div className="relative rounded-2xl border border-rose-200/70 bg-gradient-to-r from-rose-500 to-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-sm dark:border-rose-300/30 dark:from-rose-600 dark:to-amber-600">
          Explore
        </div>
      </Link>
    </motion.div>
  );
}
