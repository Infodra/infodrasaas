import { notFound } from "next/navigation";
import { orders, productsById, usersById, formatCurrency } from "../../../lib/data";

export default async function AdminOrderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = orders.find((entry) => entry.id === id);

  if (!order) {
    notFound();
  }

  const customer = usersById.get(order.userId);
  const amount = order.items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="space-y-5 pb-10">
      <header className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
        <h1 className="text-2xl font-bold">Order {order.id}</h1>
        <p className="text-sm text-slate-500">Detailed operational view for order processing and invoicing.</p>
      </header>
      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="font-semibold">Customer Information</h2>
          <div className="mt-3 space-y-2 text-sm">
            <p>{customer?.name}</p>
            <p>{customer?.email}</p>
            <p>{customer?.phone}</p>
          </div>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="font-semibold">Shipping Address</h2>
          <div className="mt-3 space-y-2 text-sm">
            <p>{customer?.address}</p>
            <p>Delivery Method: {order.deliveryMethod}</p>
            <p>Payment Method: {order.paymentMethod}</p>
          </div>
        </article>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="font-semibold">Ordered Products</h2>
        <div className="mt-3 space-y-3 text-sm">
          {order.items.map((item) => {
            const product = productsById.get(item.productId);
            return <p key={item.productId}>{product?.name} x {item.quantity} - {formatCurrency(item.quantity * item.price)}</p>;
          })}
        </div>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="font-semibold">Order Timeline</h2>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {["Pending", "Processing", "Shipped", "Delivered"].map((step) => (
            <span key={step} className="rounded-full border border-slate-300 px-3 py-1 dark:border-slate-700">{step}</span>
          ))}
        </div>
      </section>
      <div className="flex gap-2">
        <button type="button" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Invoice</button>
        <div className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold dark:border-slate-700">Total: {formatCurrency(amount)}</div>
      </div>
    </div>
  );
}