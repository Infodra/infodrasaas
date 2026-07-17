export default function AddCategoryPage() {
  return (
    <div className="space-y-4 pb-10">
      <h1 className="text-2xl font-bold">Add Category</h1>
      <form className="grid gap-4 rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80 lg:grid-cols-2">
        <input placeholder="Category Name" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <input placeholder="Image URL" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <select className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950"><option>Active</option><option>Hidden</option></select>
        <input placeholder="Display Order" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <textarea placeholder="Category Description" rows={5} className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm lg:col-span-2 dark:border-slate-700 dark:bg-slate-950" />
        <div className="flex gap-2 lg:col-span-2">
          <button className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white">Save Category</button>
          <button type="button" className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm dark:border-slate-700">Cancel</button>
        </div>
      </form>
    </div>
  );
}