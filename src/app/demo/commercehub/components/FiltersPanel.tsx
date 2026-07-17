"use client";

import { categories, brands } from "../lib/data";

type Filters = {
  category: string;
  brand: string;
  rating: number;
  availability: string;
  discountOnly: boolean;
  maxPrice: number;
};

export function FiltersPanel({
  value,
  onChange,
}: {
  value: Filters;
  onChange: (next: Filters) => void;
}) {
  return (
    <aside className="space-y-4 rounded-3xl border border-slate-200 bg-white/85 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Category</label>
        <select
          value={value.category}
          onChange={(event) => onChange({ ...value, category: event.target.value })}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
        >
          <option value="all">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Brand</label>
        <select
          value={value.brand}
          onChange={(event) => onChange({ ...value, brand: event.target.value })}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
        >
          <option value="all">All</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>{brand.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Price up to</label>
        <input
          type="range"
          min={1000}
          max={30000}
          step={500}
          value={value.maxPrice}
          onChange={(event) => onChange({ ...value, maxPrice: Number(event.target.value) })}
          className="mt-2 w-full"
        />
        <p className="text-xs text-slate-500">INR {value.maxPrice.toLocaleString("en-IN")}</p>
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Rating</label>
        <select
          value={value.rating}
          onChange={(event) => onChange({ ...value, rating: Number(event.target.value) })}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
        >
          <option value={0}>All</option>
          <option value={4}>4+</option>
          <option value={4.5}>4.5+</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Availability</label>
        <select
          value={value.availability}
          onChange={(event) => onChange({ ...value, availability: event.target.value })}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950"
        >
          <option value="all">All</option>
          <option value="in-stock">In stock</option>
          <option value="low-stock">Low stock</option>
        </select>
      </div>
      <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950">
        <input
          type="checkbox"
          checked={value.discountOnly}
          onChange={(event) => onChange({ ...value, discountOnly: event.target.checked })}
        />
        Discount only
      </label>
    </aside>
  );
}
