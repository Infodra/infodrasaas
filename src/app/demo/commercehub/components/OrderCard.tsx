import Link from "next/link";
import type { Order } from "../lib/types";
import { formatCurrency } from "../lib/data";

export function OrderCard({ order, customerName, href }: { order: Order; customerName?: string; href?: string }) {
  const amount = order.items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <article className="rounded-3xl border border-slate-200 bg-white/85 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="font-semibold">{order.id}</p>
          <p className="text-xs text-slate-500">{customerName ?? "Customer not assigned"}</p>
        </div>
        <span className="rounded-full border border-slate-300 px-2.5 py-1 text-xs">{order.status}</span>
      </div>
      <div className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
        <p>Date: {order.date}</p>
        <p>Amount: {formatCurrency(amount)}</p>
        <p>Tracking: {order.trackingId}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className="rounded-xl border border-slate-300 px-3 py-1.5 text-xs font-semibold dark:border-slate-700">
          Invoice
        </button>
        <button type="button" className="rounded-xl border border-slate-300 px-3 py-1.5 text-xs font-semibold dark:border-slate-700">
          Track Timeline
        </button>
        {href ? (
          <Link href={href} className="rounded-xl border border-slate-300 px-3 py-1.5 text-xs font-semibold dark:border-slate-700">
            View Details
          </Link>
        ) : null}
      </div>
    </article>
  );
}