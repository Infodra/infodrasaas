import Link from "next/link";
import { categories, products } from "../../lib/data";
import { DataTable } from "../../components/ui/DataTable";

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-4 pb-10">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">Category Management</h1>
        <Link href="/demo/commercehub/admin/categories/new" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Add Category</Link>
      </div>
      <DataTable
        rows={categories}
        rowKey={(category) => category.id}
        columns={[
          { key: "image", header: "Category Image", render: () => <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-teal-500/20" /> },
          { key: "name", header: "Category Name", render: (category) => category.name },
          { key: "count", header: "Product Count", render: (category) => String(products.filter((product) => product.category === category.id).length) },
          { key: "status", header: "Status", render: () => <span className="rounded-full border border-slate-300 px-2 py-0.5 text-xs">Active</span> },
          { key: "actions", header: "Actions", render: () => <div className="flex gap-2"><button className="rounded-lg border px-2 py-1 text-xs dark:border-slate-700">Edit</button><button className="rounded-lg border px-2 py-1 text-xs dark:border-slate-700">Delete</button></div> },
        ]}
      />
    </div>
  );
}