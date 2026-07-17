export default function CreateCouponPage() {
  return (
    <div className="space-y-4 pb-10">
      <h1 className="text-2xl font-bold">Create Coupon</h1>
      <form className="grid gap-4 rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80 lg:grid-cols-2">
        <input placeholder="Coupon Code" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <select className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950"><option>Percentage</option><option>Fixed Amount</option></select>
        <input placeholder="Discount Value" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <input placeholder="Expiry Date" type="date" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <input placeholder="Usage Limit" className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
        <select className="rounded-xl border border-slate-300 px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950"><option>Active</option><option>Scheduled</option></select>
        <div className="flex gap-2 lg:col-span-2">
          <button className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white">Save Coupon</button>
          <button type="button" className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm dark:border-slate-700">Cancel</button>
        </div>
      </form>
    </div>
  );
}