"use client";

import { useState } from "react";
import { Copy, ExternalLink, Link2, Rocket } from "lucide-react";

export default function CreateJobPage() {
  const [jobTitle, setJobTitle] = useState("Senior Frontend Engineer");
  const [published, setPublished] = useState(false);

  return (
    <div className="grid gap-6 pb-8 xl:grid-cols-[1.6fr_1fr]">
      <section className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-black/20 backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Create Job</p>
        <h2 className="mt-1 text-2xl font-semibold text-white">Design a high-converting job post</h2>

        <form
          className="mt-6 grid gap-4 sm:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault();
            setPublished(true);
          }}
        >
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Department" defaultValue="Engineering" />
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Company" defaultValue="Infodra Technologies" />
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Location" defaultValue="Chennai" />
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Employment Type" defaultValue="Full Time" />
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Experience" defaultValue="3-6 years" />
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Salary" defaultValue="12-18 LPA" />
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Skills" defaultValue="React, TypeScript, Next.js" />
          <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Openings" defaultValue="2" />
          <textarea className="min-h-32 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 sm:col-span-2" placeholder="Description" defaultValue="Build and scale modern recruitment workflows, collaborate with product and engineering teams, and deliver premium candidate experiences." />

          <button type="submit" className="rounded-2xl border border-brand-400/30 bg-brand-500/20 px-4 py-3 text-sm font-medium text-brand-100 transition hover:bg-brand-500/30 sm:col-span-2">
            Publish
          </button>
        </form>

        {published ? (
          <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/15 p-3 text-sm text-emerald-100">
            Job published successfully for: {jobTitle}
          </div>
        ) : null}
      </section>

      <aside className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-black/20 backdrop-blur-xl">
        <h3 className="text-base font-semibold text-white">Generated Public Link</h3>
        <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-brand-200">
          https://infodrasaas.com/demo/recruitment
        </div>

        <div className="mt-4 grid gap-2">
          <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 transition hover:bg-white/10">
            <Copy className="h-4 w-4" />
            Copy Link
          </button>
          <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 transition hover:bg-white/10">
            <ExternalLink className="h-4 w-4" />
            Preview Job
          </button>
          <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-brand-400/30 bg-brand-500/20 px-3 py-2 text-sm text-brand-100 transition hover:bg-brand-500/30">
            <Rocket className="h-4 w-4" />
            Publish
          </button>
        </div>

        <div className="mt-6 rounded-2xl border border-brand-400/20 bg-gradient-to-br from-brand-500/20 via-indigo-500/10 to-transparent p-4">
          <p className="flex items-center gap-2 text-sm font-medium text-white">
            <Link2 className="h-4 w-4" />
            Share-ready recruitment link
          </p>
          <p className="mt-2 text-xs text-slate-300">
            Telecaller can immediately share this public job page to candidates.
          </p>
        </div>
      </aside>
    </div>
  );
}
