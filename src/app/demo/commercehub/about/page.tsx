export default function AboutPage() {
  return (
    <div className="space-y-4 pb-10">
      <h1 className="text-3xl font-bold">About CommerceHub</h1>
      <section className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="text-xl font-semibold">Company</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">CommerceHub Demo is a premium frontend concept built for enterprise e-commerce presentations.</p>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="text-xl font-semibold">Mission</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Enable teams to showcase a modern shopping platform with confidence, speed and visual impact.</p>
      </section>
      <section className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="text-xl font-semibold">Why Choose Us</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
          <li>Enterprise-grade UI language</li>
          <li>Frontend-only rapid prototype architecture</li>
          <li>Reusable component system</li>
        </ul>
      </section>
    </div>
  );
}
