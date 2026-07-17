import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <section className="mx-auto max-w-2xl rounded-3xl border border-emerald-300 bg-emerald-50/70 p-10 text-center shadow-xl dark:border-emerald-900/60 dark:bg-emerald-900/20">
      <p className="text-xs uppercase tracking-[0.24em] text-emerald-700 dark:text-emerald-300">Success Page</p>
      <h1 className="mt-2 text-3xl font-bold text-emerald-800 dark:text-emerald-200">Order Placed Successfully</h1>
      <p className="mt-3 text-sm text-emerald-700/80 dark:text-emerald-300/80">Thank you for shopping with CommerceHub Demo. Order ID: ORD-CH-2026-1809.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/demo/commercehub/orders" className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">View Orders</Link>
        <Link href="/demo/commercehub/products" className="rounded-xl border border-emerald-400 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-slate-900">Continue Shopping</Link>
      </div>
    </section>
  );
}
