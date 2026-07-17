"use client";

export default function ContactPage() {
  return (
    <div className="grid gap-5 pb-10 lg:grid-cols-[1.3fr_1fr]">
      <section className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-1 text-sm text-slate-500">Have a question about the demo? Reach out to us.</p>
        <form className="mt-4 grid gap-3" onSubmit={(event) => event.preventDefault()}>
          <input placeholder="Name" className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
          <input placeholder="Email" className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
          <textarea placeholder="Message" rows={5} className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm dark:border-slate-700 dark:bg-slate-950" />
          <button className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">Send Message</button>
        </form>
      </section>
      <aside className="space-y-4">
        <div className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-lg font-semibold">Contact Details</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Email: hello@commercehub.demo</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">Phone: +91 90000 12345</p>
        </div>
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-950">
          Map Placeholder
        </div>
      </aside>
    </div>
  );
}
