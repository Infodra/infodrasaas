"use client";

import { useState } from "react";
import { orders, users, formatCurrency } from "../lib/data";

const tabs = ["Profile", "Orders", "Wishlist", "Addresses", "Settings"] as const;

export default function UserDashboardPage() {
  const [active, setActive] = useState<(typeof tabs)[number]>("Profile");
  const user = users[0];

  return (
    <div className="space-y-5 pb-10">
      <header className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">User Dashboard</p>
        <h1 className="mt-1 text-2xl font-bold">Welcome, {user.name}</h1>
      </header>

      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button key={tab} type="button" onClick={() => setActive(tab)} className={`rounded-xl px-4 py-2 text-sm ${active === tab ? "bg-blue-600 text-white" : "border border-slate-300"}`}>
            {tab}
          </button>
        ))}
      </div>

      <section className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
        {active === "Profile" ? (
          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p><span className="font-semibold">Phone:</span> {user.phone}</p>
            <p><span className="font-semibold">Address:</span> {user.address}</p>
          </div>
        ) : null}
        {active === "Orders" ? (
          <div className="space-y-2 text-sm">
            {orders.map((order) => (
              <p key={order.id}>{order.id} - {order.status} - {formatCurrency(order.items.reduce((sum, item) => sum + item.quantity * item.price, 0))}</p>
            ))}
          </div>
        ) : null}
        {active === "Wishlist" ? <p className="text-sm text-slate-600">Use the wishlist page for full view and actions. Your saved items sync locally in this demo.</p> : null}
        {active === "Addresses" ? <div className="space-y-2 text-sm"><p>{user.address}</p><p>Additional warehouse delivery address available in settings.</p></div> : null}
        {active === "Settings" ? <div className="space-y-2 text-sm"><p>Email notifications: Enabled</p><p>SMS alerts: Enabled</p><p>Preferred payment: UPI</p></div> : null}
      </section>
    </div>
  );
}
