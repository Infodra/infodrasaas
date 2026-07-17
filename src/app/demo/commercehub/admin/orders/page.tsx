"use client";

import Link from "next/link";
import { useState } from "react";
import { orders, usersById, productsById, formatCurrency } from "../../lib/data";
import { Drawer } from "../../components/ui/Drawer";
import { SearchBar } from "../../components/ui/SearchBar";
import { DataTable } from "../../components/ui/DataTable";

export default function AdminOrdersPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const selected = orders.find((order) => order.id === selectedId) ?? null;
  const rows = orders.filter((order) => `${order.id} ${usersById.get(order.userId)?.name ?? ""}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="space-y-4 pb-10">
      <h1 className="text-2xl font-bold">Order Management</h1>
      <SearchBar value={query} onChange={setQuery} placeholder="Search orders or customers" className="max-w-md" />
      <DataTable
        rows={rows}
        rowKey={(order) => order.id}
        columns={[
          { key: "order", header: "Order Number", render: (order) => order.id },
          { key: "customer", header: "Customer", render: (order) => usersById.get(order.userId)?.name ?? "Unknown" },
          { key: "items", header: "Items", render: (order) => String(order.items.reduce((sum, item) => sum + item.quantity, 0)) },
          { key: "amount", header: "Amount", render: (order) => formatCurrency(order.items.reduce((sum, item) => sum + item.quantity * item.price, 0)) },
          { key: "status", header: "Status", render: (order) => <span className="rounded-full border border-slate-300 px-2 py-0.5 text-xs">{order.status}</span> },
          { key: "payment", header: "Payment", render: (order) => order.paymentMethod },
          { key: "date", header: "Date", render: (order) => order.date },
          {
            key: "actions",
            header: "Actions",
            render: (order) => (
              <div className="flex gap-2">
                <button type="button" onClick={() => setSelectedId(order.id)} className="rounded-lg border px-2 py-1 text-xs dark:border-slate-700">Quick View</button>
                <Link href={`/demo/commercehub/admin/orders/${order.id}`} className="rounded-lg border px-2 py-1 text-xs dark:border-slate-700">Details</Link>
              </div>
            ),
          },
        ]}
      />

      <Drawer open={Boolean(selected)} title="Order Details" onClose={() => setSelectedId(null)}>
        {selected ? (
          <div className="space-y-3 text-sm">
            <p><span className="font-semibold">Order:</span> {selected.id}</p>
            <p><span className="font-semibold">Status:</span> {selected.status}</p>
            <p><span className="font-semibold">Shipping:</span> {selected.deliveryMethod}</p>
            <div className="space-y-2">
              {selected.items.map((item) => {
                const product = productsById.get(item.productId);
                return <p key={item.productId}>{product?.name} x {item.quantity}</p>;
              })}
            </div>
            <div className="flex gap-2">
              {(["Pending", "Processing", "Delivered", "Cancelled"] as const).map((status) => (
                <span key={status} className="rounded-full border border-slate-300 px-2 py-1 text-xs">{status}</span>
              ))}
            </div>
          </div>
        ) : null}
      </Drawer>
    </div>
  );
}
