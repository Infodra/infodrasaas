const aiCards = [
  "AI Product Recommendation",
  "AI Shopping Assistant",
  "AI Customer Insights",
  "AI Sales Forecast",
  "AI Demand Prediction",
  "AI Review Summary",
  "Inventory Forecast",
  "Smart Search",
];

export default function AdminAIFeaturesPage() {
  return (
    <div className="space-y-4 pb-10">
      <h1 className="text-2xl font-bold">AI Commerce</h1>
      <p className="text-sm text-slate-500">Premium enterprise AI widgets for commerce storytelling and client demos.</p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {aiCards.map((title) => (
          <article key={title} className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-blue-50 p-5 shadow-lg dark:border-slate-800 dark:from-slate-900 dark:to-slate-800">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">AI Module</p>
            <h2 className="mt-2 text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Interactive insight card for premium client demos.</p>
          </article>
        ))}
      </div>
    </div>
  );
}
