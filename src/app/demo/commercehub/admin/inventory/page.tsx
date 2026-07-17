import { products } from "../../lib/data";
import { DataTable } from "../../components/ui/DataTable";

export default function AdminInventoryPage() {
  return (
    <div className="space-y-4 pb-10">
      <h1 className="text-2xl font-bold">Inventory Management</h1>
      <DataTable
        rows={products}
        rowKey={(product) => product.id}
        columns={[
          { key: "sku", header: "SKU", render: (product) => `SKU-${product.id.toUpperCase()}` },
          { key: "product", header: "Product", render: (product) => product.name },
          { key: "current", header: "Current Stock", render: (product) => String(product.stock) },
          { key: "reserved", header: "Reserved", render: (product) => String(Math.max(1, Math.round(product.stock * 0.15))) },
          { key: "available", header: "Available", render: (product) => String(Math.max(0, product.stock - Math.max(1, Math.round(product.stock * 0.15)))) },
          { key: "status", header: "Status", render: (product) => <span className="rounded-full border border-slate-300 px-2 py-0.5 text-xs">{product.stock <= 15 ? "Low Stock" : "Healthy"}</span> },
          { key: "alerts", header: "Low Stock Alerts", render: (product) => product.stock <= 15 ? "Reorder recommended" : "Stable" },
        ]}
      />
    </div>
  );
}