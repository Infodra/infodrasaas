"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingBagIcon, MagnifyingGlassIcon, HeartIcon, ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { categories, products } from "../lib/data";
import { MegaMenu } from "./MegaMenu";
import { ThemeToggle } from "./ThemeToggle";
import { useCommerceHubState } from "../hooks/useCommerceHubState";
import { SearchSuggestions } from "./SearchSuggestions";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState("");
  const { cartCount, wishlist } = useCommerceHubState();
  const suggestions = products
    .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 5)
    .map((product) => product.name);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="relative" onMouseEnter={() => setOpenMenu(true)} onMouseLeave={() => setOpenMenu(false)}>
          <Link href="/demo/commercehub" className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-slate-900 text-white">
              <ShoppingBagIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">CommerceHub Demo</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Premium Storefront</p>
            </div>
          </Link>
          {openMenu ? <MegaMenu categories={categories} /> : null}
        </div>

        <div className="relative hidden flex-1 items-center rounded-2xl border border-slate-200 bg-white px-3 py-2 md:flex dark:border-slate-800 dark:bg-slate-900">
          <MagnifyingGlassIcon className="h-4 w-4 text-slate-500" />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products, brands, categories" className="ml-2 w-full bg-transparent text-sm outline-none" />
          <SearchSuggestions query={search} suggestions={suggestions} />
        </div>

        <nav className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/demo/commercehub/wishlist" className="relative rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-900">
            <HeartIcon className="h-5 w-5" />
            {wishlist.length > 0 ? <span className="absolute -right-1 -top-1 rounded-full bg-teal-500 px-1.5 text-[10px] text-white">{wishlist.length}</span> : null}
          </Link>
          <Link href="/demo/commercehub/cart" className="relative rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-900">
            <ShoppingCartIcon className="h-5 w-5" />
            {cartCount > 0 ? <span className="absolute -right-1 -top-1 rounded-full bg-blue-600 px-1.5 text-[10px] text-white">{cartCount}</span> : null}
          </Link>
          <Link href="/demo/commercehub/dashboard" className="rounded-xl border border-slate-200 bg-white p-2 dark:border-slate-800 dark:bg-slate-900">
            <UserCircleIcon className="h-5 w-5" />
          </Link>
        </nav>
      </div>
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 overflow-x-auto px-4 pb-3 text-sm text-slate-600 sm:px-6 dark:text-slate-300">
        <Link href="/demo/commercehub/products" className="whitespace-nowrap">Explore Products</Link>
        <Link href="/demo/commercehub/admin" className="whitespace-nowrap">Admin Dashboard</Link>
        <Link href="/demo/commercehub/admin/categories" className="whitespace-nowrap">Categories</Link>
        <Link href="/demo/commercehub/admin/inventory" className="whitespace-nowrap">Inventory</Link>
        <Link href="/demo/commercehub/admin/coupons" className="whitespace-nowrap">Coupons</Link>
        <Link href="/demo/commercehub/admin/ai" className="whitespace-nowrap">AI Commerce</Link>
        <Link href="/demo/commercehub/orders" className="whitespace-nowrap">Order History</Link>
        <Link href="/demo/commercehub/about" className="whitespace-nowrap">About</Link>
        <Link href="/demo/commercehub/contact" className="whitespace-nowrap">Contact</Link>
      </div>
    </header>
  );
}
