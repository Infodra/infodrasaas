"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { productsById, formatCurrency } from "../lib/data";
import { useCommerceHubState } from "../hooks/useCommerceHubState";
import { EmptyState } from "../components/ui/EmptyState";

export default function CartPage() {
  const { cart, updateCartQuantity, removeFromCart } = useCommerceHubState();
  const [coupon, setCoupon] = useState("");

  const rows = useMemo(() => cart.map((item) => ({ item, product: productsById.get(item.productId)! })).filter((row) => row.product), [cart]);
  const subtotal = rows.reduce((sum, row) => sum + row.product.price * row.item.quantity, 0);
  const shipping = subtotal > 15000 ? 0 : 199;
  const tax = Math.round(subtotal * 0.08);
  const couponDiscount = coupon.trim().toUpperCase() === "FLASH40" ? Math.round(subtotal * 0.1) : 0;
  const grandTotal = subtotal + shipping + tax - couponDiscount;

  if (rows.length === 0) {
    return <EmptyState title="Your cart is empty" description="Add products to continue shopping." />;
  }

  return (
    <div className="grid gap-5 pb-10 lg:grid-cols-[1.6fr_1fr]">
      <section className="space-y-3 rounded-3xl border border-slate-200 bg-white/85 p-4 dark:border-slate-800 dark:bg-slate-900/80">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        {rows.map((row) => (
          <article key={row.item.productId} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold">{row.product.name}</p>
                <p className="text-sm text-slate-500">{formatCurrency(row.product.price)}</p>
              </div>
              <button type="button" onClick={() => removeFromCart(row.item.productId)} className="text-xs text-rose-600">Remove</button>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <button type="button" onClick={() => updateCartQuantity(row.item.productId, Math.max(1, row.item.quantity - 1))} className="rounded-lg border px-2">-</button>
              <span className="min-w-8 text-center">{row.item.quantity}</span>
              <button type="button" onClick={() => updateCartQuantity(row.item.productId, row.item.quantity + 1)} className="rounded-lg border px-2">+</button>
            </div>
          </article>
        ))}
      </section>

      <aside className="h-fit rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg dark:border-slate-800 dark:bg-slate-900/85">
        <h2 className="text-lg font-bold">Order Summary</h2>
        <div className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>{formatCurrency(shipping)}</span></div>
          <div className="flex justify-between"><span>Tax</span><span>{formatCurrency(tax)}</span></div>
          <div className="mt-2 border-t border-slate-200 pt-2 dark:border-slate-700 flex justify-between"><span>Grand Total</span><span className="font-bold">{formatCurrency(grandTotal)}</span></div>
        </div>
        <div className="mt-4">
          <input value={coupon} onChange={(event) => setCoupon(event.target.value)} placeholder="Coupon code" className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-950" />
          <p className="mt-1 text-xs text-slate-500">Try code: FLASH40</p>
        </div>
        <Link href="/demo/commercehub/products" className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-semibold dark:border-slate-700">
          Continue Shopping
        </Link>
        <Link href="/demo/commercehub/checkout" className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
          Proceed to Checkout
        </Link>
      </aside>
    </div>
  );
}
