export default function AddProductPage() {
  return (
    <div className="space-y-4 pb-10">
      <h1 className="text-2xl font-bold">Add Product</h1>
      <form className="grid gap-4 rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80 lg:grid-cols-2">
        <input placeholder="Product Name" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <input placeholder="SKU" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <textarea placeholder="Description" rows={5} className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm lg:col-span-2 dark:border-slate-700 dark:bg-slate-950" />
        <input placeholder="Category" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <input placeholder="Brand" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <input placeholder="Price" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <input placeholder="Discount" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <input placeholder="Quantity" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <input placeholder="Weight" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <input placeholder="Dimensions" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <input placeholder="Images" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm lg:col-span-2 dark:border-slate-700 dark:bg-slate-950" />
        <input placeholder="Tags" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm lg:col-span-2 dark:border-slate-700 dark:bg-slate-950" />
        <textarea placeholder="Specifications" rows={4} className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm lg:col-span-2 dark:border-slate-700 dark:bg-slate-950" />
        <div className="flex gap-2 lg:col-span-2">
          <button className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white">Save Product</button>
          <button type="button" className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm dark:border-slate-700">Cancel</button>
        </div>
      </form>
    </div>
  );
}