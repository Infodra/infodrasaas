"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CandidateApplicationPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_44%),linear-gradient(180deg,#eff6ff_0%,#f8fafc_52%,#eef2ff_100%)] px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-xl shadow-black/20 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">LinkedIn-style Job View</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Senior Frontend Engineer</h1>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-600">
            <span className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1">Infodra Technologies</span>
            <span className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1">Chennai</span>
            <span className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1">12-18 LPA</span>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Build a premium candidate experience across recruitment workflows, optimize ATS performance,
            and collaborate with product, design, and engineering teams.
          </p>
        </header>

        <section className="rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-xl shadow-black/20 backdrop-blur-xl">
          <h2 className="text-lg font-semibold text-slate-900">Apply Now</h2>
          <form
            className="mt-5 grid gap-4 sm:grid-cols-2"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <input className="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Name" required />
            <input className="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Phone" required />
            <input type="email" className="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Email" required />
            <input className="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Experience" />
            <input className="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Current Company" />
            <input className="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Current Salary" />
            <input className="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Expected Salary" />
            <input className="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50" placeholder="Notice Period" />
            <input className="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500/50 sm:col-span-2" placeholder="Skills" />
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 px-4 py-7 text-center text-sm text-slate-500 sm:col-span-2">
              Resume Upload Placeholder
            </div>
            <button type="submit" className="rounded-2xl border border-brand-400/30 bg-brand-500/20 px-4 py-3 text-sm font-medium text-brand-700 transition hover:bg-brand-500/30 sm:col-span-2">
              Apply
            </button>
          </form>

          <AnimatePresence>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/15 p-4 text-sm text-emerald-700"
              >
                <p className="font-semibold">Application Submitted Successfully</p>
                <p className="mt-1">Reference Number: APL-2026-001245</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}


