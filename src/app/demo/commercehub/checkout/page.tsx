"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useCommerceHubState } from "../hooks/useCommerceHubState";
import { productsById, formatCurrency } from "../lib/data";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart } = useCommerceHubState();

  const summary = useMemo(() => {
    const subtotal = cart.reduce((sum, item) => {
      const product = productsById.get(item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    const shipping = subtotal > 15000 ? 0 : 199;
    const tax = Math.round(subtotal * 0.08);
    return { subtotal, shipping, tax, total: subtotal + shipping + tax };
  }, [cart]);

  return (
    <div className="grid gap-5 pb-10 lg:grid-cols-[1.6fr_1fr]">
      <section className="rounded-3xl border border-slate-200 bg-white/90 p-5 dark:border-slate-800 dark:bg-slate-900/85">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <form
          className="mt-4 grid gap-3 sm:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault();
            clearCart();
            router.push("/demo/commercehub/checkout/success");
          }}
        >
          <input required placeholder="Full Name" className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
          <input required placeholder="Phone" className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
          <input required placeholder="Email" type="email" className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm sm:col-span-2 dark:border-slate-700 dark:bg-slate-950" />
          <input required placeholder="Shipping Address" className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm sm:col-span-2 dark:border-slate-700 dark:bg-slate-950" />
          <select className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950"><option>Standard Delivery</option><option>Express Delivery</option></select>
          <select className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950"><option>Card</option><option>UPI</option><option>Net Banking</option></select>
          <button className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white sm:col-span-2 hover:bg-blue-700">Place Order</button>
        </form>
      </section>

      <aside className="h-fit rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-lg dark:border-slate-800 dark:bg-slate-900/85">
        <h2 className="text-lg font-bold">Order Summary</h2>
        <div className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(summary.subtotal)}</span></div>
          <div className="flex justify-between"><span>Shipping</span><span>{formatCurrency(summary.shipping)}</span></div>
          <div className="flex justify-between"><span>Tax</span><span>{formatCurrency(summary.tax)}</span></div>
          <div className="flex justify-between border-t border-slate-200 pt-2 font-bold dark:border-slate-700"><span>Total</span><span>{formatCurrency(summary.total)}</span></div>
        </div>
      </aside>
    </div>
  );
}
