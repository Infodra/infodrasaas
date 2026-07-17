import Link from "next/link";
import { customers, formatCurrency } from "../../lib/data";
import { DataTable } from "../../components/ui/DataTable";

export default function AdminCustomersPage() {
  return (
    <div className="space-y-4 pb-10">
      <h1 className="text-2xl font-bold">Customer Management</h1>
      <DataTable
        rows={customers}
        rowKey={(customer) => customer.id}
        columns={[
          {
            key: "customer",
            header: "Customer",
            render: (customer) => (
              <Link href={`/demo/commercehub/admin/customers/${customer.id}`} className="font-semibold text-blue-700 dark:text-blue-300">
                {customer.name}
              </Link>
            ),
          },
          { key: "purchaseValue", header: "Purchase Value", render: (customer) => formatCurrency(customer.totalSpent) },
          { key: "orders", header: "Orders", render: (customer) => String(customer.orders) },
          { key: "wishlist", header: "Wishlist", render: (customer) => String(customer.wishlist.length) },
          { key: "addresses", header: "Addresses", render: (customer) => String(customer.addresses.length) },
          { key: "email", header: "Email", render: (customer) => customer.email },
          { key: "phone", header: "Phone", render: (customer) => customer.phone },
        ]}
      />
    </div>
  );
}
