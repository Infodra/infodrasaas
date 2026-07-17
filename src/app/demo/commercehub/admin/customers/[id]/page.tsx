import { notFound } from "next/navigation";
import { customersById, orders, productsById, formatCurrency } from "../../../lib/data";

export default async function AdminCustomerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const customer = customersById.get(id);

  if (!customer) {
    notFound();
  }

  const customerOrders = orders.filter((order) => order.userId === customer.id);

  return (
    <div className="space-y-5 pb-10">
      <header className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
        <h1 className="text-2xl font-bold">{customer.name}</h1>
        <p className="text-sm text-slate-500">Customer profile, order history, wishlist and saved addresses.</p>
      </header>
      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="font-semibold">Profile</h2>
          <div className="mt-3 space-y-2 text-sm">
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
            <p>Purchase Value: {formatCurrency(customer.totalSpent)}</p>
          </div>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="font-semibold">Addresses</h2>
          <div className="mt-3 space-y-2 text-sm">
            {customer.addresses.map((address) => <p key={address}>{address}</p>)}
          </div>
        </article>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="font-semibold">Orders</h2>
        <div className="mt-3 space-y-2 text-sm">
          {customerOrders.map((order) => <p key={order.id}>{order.id} - {order.status}</p>)}
        </div>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="font-semibold">Wishlist</h2>
        <div className="mt-3 space-y-2 text-sm">
          {customer.wishlist.map((productId) => <p key={productId}>{productsById.get(productId)?.name}</p>)}
        </div>
      </section>
    </div>
  );
}