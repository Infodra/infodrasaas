"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { brands, products, formatCurrency } from "../../lib/data";
import { Pagination } from "../../components/ui/Pagination";
import { SearchBar } from "../../components/ui/SearchBar";
import { DataTable } from "../../components/ui/DataTable";

const PAGE_SIZE = 5;

export default function AdminProductsPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [brand, setBrand] = useState("all");
  const [page, setPage] = useState(1);

  const rows = useMemo(() =>
    products
      .filter((product) => (status === "all" ? true : product.availability === status))
      .filter((product) => (brand === "all" ? true : product.brand === brand))
      .filter((product) => (query ? product.name.toLowerCase().includes(query.toLowerCase()) : true)),
    [brand, query, status]
  );

  const totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const paged = rows.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="space-y-4 pb-10">
      <h1 className="text-2xl font-bold">Product Management</h1>
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-2 sm:flex-row">
          <SearchBar value={query} onChange={(value) => { setQuery(value); setPage(1); }} placeholder="Search products" className="sm:min-w-72" />
          <select value={brand} onChange={(event) => { setBrand(event.target.value); setPage(1); }} className="rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950">
            <option value="all">All brands</option>
            {brands.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/demo/commercehub/admin/products/new" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Add Product</Link>
          <button type="button" className="rounded-xl border border-slate-300 px-4 py-2 text-sm dark:border-slate-700">Export</button>
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row">
        <select value={status} onChange={(event) => { setStatus(event.target.value); setPage(1); }} className="rounded-xl border border-slate-300 px-3 py-2 text-sm">
          <option value="all">All</option>
          <option value="in-stock">In stock</option>
          <option value="low-stock">Low stock</option>
        </select>
      </div>
      <DataTable
        rows={paged}
        rowKey={(product) => product.id}
        columns={[
          {
            key: "image",
            header: "Image",
            render: (product) => <Image src={product.thumbnail} alt={product.name} width={56} height={56} className="h-14 w-14 rounded-2xl object-cover" />,
          },
          {
            key: "name",
            header: "Name",
            render: (product) => (
              <div>
                <p className="font-semibold">{product.name}</p>
                <p className="text-xs text-slate-500">SKU-{product.id.toUpperCase()}</p>
              </div>
            ),
          },
          { key: "category", header: "Category", render: (product) => product.category },
          { key: "brand", header: "Brand", render: (product) => product.brand },
          { key: "price", header: "Price", render: (product) => formatCurrency(product.price) },
          { key: "discount", header: "Discount", render: (product) => `${product.discount}%` },
          { key: "stock", header: "Stock", render: (product) => String(product.stock) },
          { key: "status", header: "Status", render: (product) => <span className="rounded-full border border-slate-300 px-2 py-0.5 text-xs">{product.availability}</span> },
          {
            key: "actions",
            header: "Actions",
            render: (product) => (
              <div className="flex gap-2">
                <Link href={`/demo/commercehub/products/${product.id}`} className="rounded-lg border px-2 py-1 text-xs dark:border-slate-700">View</Link>
                <Link href="/demo/commercehub/admin/products/new" className="rounded-lg border px-2 py-1 text-xs dark:border-slate-700">Edit</Link>
              </div>
            ),
          },
        ]}
      />
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
