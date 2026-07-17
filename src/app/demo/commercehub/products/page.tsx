"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "../lib/data";
import { ProductCard } from "../components/ProductCard";
import { FiltersPanel } from "../components/FiltersPanel";
import { Pagination } from "../components/ui/Pagination";
import { EmptyState } from "../components/ui/EmptyState";
import { RatingStars } from "../components/ui/RatingStars";
import { formatCurrency } from "../lib/data";

type ViewMode = "grid" | "list";
type SortMode = "newest" | "price-asc" | "price-desc" | "popularity" | "rating";

const PAGE_SIZE = 6;

export default function ProductListingPage() {
  const [view, setView] = useState<ViewMode>("grid");
  const [sort, setSort] = useState<SortMode>("newest");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    category: "all",
    brand: "all",
    rating: 0,
    availability: "all",
    discountOnly: false,
    maxPrice: 30000,
  });

  const filtered = useMemo(() => {
    const next = products
      .filter((product) => (filters.category === "all" ? true : product.category === filters.category))
      .filter((product) => (filters.brand === "all" ? true : product.brand === filters.brand))
      .filter((product) => product.price <= filters.maxPrice)
      .filter((product) => product.rating >= filters.rating)
      .filter((product) => (filters.availability === "all" ? true : product.availability === filters.availability))
      .filter((product) => (filters.discountOnly ? product.discount > 0 : true))
      .filter((product) =>
        search
          ? `${product.name} ${product.description}`.toLowerCase().includes(search.toLowerCase())
          : true
      );

    const sorted = [...next].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "popularity") return b.popularity - a.popularity;
      if (sort === "rating") return b.rating - a.rating;
      return Number(b.newest) - Number(a.newest);
    });

    return sorted;
  }, [filters, search, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="pb-10">
      <div className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
        <h1 className="text-2xl font-bold">Product Listing</h1>
        <p className="mt-1 text-sm text-slate-500">Grid/List view, advanced filters and sorting.</p>

        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <input
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setPage(1);
            }}
            placeholder="Search products"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm md:max-w-sm dark:border-slate-700 dark:bg-slate-950"
          />
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              className={`rounded-xl border px-3 py-2 text-sm ${view === "grid" ? "bg-blue-600 text-white" : "border-slate-300"}`}
              onClick={() => setView("grid")}
            >
              Grid View
            </button>
            <button
              type="button"
              className={`rounded-xl border px-3 py-2 text-sm ${view === "list" ? "bg-blue-600 text-white" : "border-slate-300"}`}
              onClick={() => setView("list")}
            >
              List View
            </button>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortMode)}
              className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price Low to High</option>
              <option value="price-desc">Price High to Low</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[280px_1fr]">
        <FiltersPanel value={filters} onChange={(next) => { setFilters(next); setPage(1); }} />

        <div>
          {paged.length === 0 ? (
            <EmptyState title="No products found" description="Try adjusting filters or search terms." />
          ) : (
            view === "grid" ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {paged.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {paged.map((product) => (
                  <article key={product.id} className="grid gap-4 rounded-3xl border border-slate-200 bg-white/85 p-4 shadow-sm md:grid-cols-[220px_1fr_auto] dark:border-slate-800 dark:bg-slate-900/80">
                    <Image src={product.thumbnail} alt={product.name} width={220} height={180} className="h-44 w-full rounded-2xl object-cover" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{product.category}</p>
                      <Link href={`/demo/commercehub/products/${product.id}`} className="mt-1 block text-lg font-semibold">{product.name}</Link>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{product.description}</p>
                      <div className="mt-3"><RatingStars rating={product.rating} /></div>
                    </div>
                    <div className="flex flex-col justify-between gap-3 md:items-end">
                      <div>
                        <p className="text-lg font-bold">{formatCurrency(product.price)}</p>
                        <p className="text-xs text-slate-500 line-through">{formatCurrency(product.originalPrice)}</p>
                      </div>
                      <Link href={`/demo/commercehub/products/${product.id}`} className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                        View Product
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )
          )}
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </div>
    </div>
  );
}
