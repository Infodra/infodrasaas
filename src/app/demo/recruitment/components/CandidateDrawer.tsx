"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Candidate } from "../types";

type CandidateDrawerProps = {
  candidate: Candidate | null;
  onClose: () => void;
  onShortlist: (id: string) => void;
  onReject: (id: string) => void;
};

export function CandidateDrawer({ candidate, onClose, onShortlist, onReject }: CandidateDrawerProps) {
  return (
    <AnimatePresence>
      {candidate ? (
        <>
          <motion.button
            type="button"
            aria-label="Close drawer"
            className="fixed inset-0 z-40 bg-slate-900/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 250, damping: 28 }}
            className="fixed right-0 top-0 z-50 h-screen w-full overflow-y-auto border-l border-slate-200/80 bg-white/95 p-6 backdrop-blur-xl sm:max-w-xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Candidate Details</h3>
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-slate-200/80 bg-slate-50 p-2 text-slate-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mb-6 flex items-center gap-3">
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-semibold text-white ${candidate.avatarClass}`}>
                {candidate.initials}
              </div>
              <div>
                <p className="text-base font-semibold text-slate-900">{candidate.name}</p>
                <p className="text-sm text-slate-400">{candidate.role} - {candidate.experience}</p>
              </div>
            </div>

            <section className="mb-5 rounded-2xl border border-slate-200/80 bg-slate-50 p-4">
              <h4 className="mb-3 text-sm font-medium text-slate-700">Experience Timeline</h4>
              <div className="space-y-3">
                {candidate.timeline.map((item, index) => (
                  <div key={`${item.company}-${item.year}`} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-400" />
                      {index < candidate.timeline.length - 1 ? <span className="mt-1 h-8 w-px bg-slate-200" /> : null}
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">{item.year}</p>
                      <p className="text-sm text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-400">{item.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-5 rounded-2xl border border-slate-200/80 bg-slate-50 p-4">
              <h4 className="mb-2 text-sm font-medium text-slate-700">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {candidate.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-brand-400/30 bg-brand-500/15 px-2.5 py-1 text-xs text-brand-700">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-5 rounded-2xl border border-slate-200/80 bg-slate-50 p-4">
              <h4 className="mb-2 text-sm font-medium text-slate-700">Education</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                {candidate.education.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-5 rounded-2xl border border-slate-200/80 bg-slate-50 p-4">
              <h4 className="mb-2 text-sm font-medium text-slate-700">Projects</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                {candidate.projects.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-5 rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-4 text-sm text-slate-400">
              Resume Preview Placeholder
            </section>

            <section className="mb-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-3">
                <p className="text-xs text-slate-400">Expected Salary</p>
                <p className="text-sm text-slate-900">{candidate.expectedSalary}</p>
              </div>
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-3">
                <p className="text-xs text-slate-400">Notice Period</p>
                <p className="text-sm text-slate-900">{candidate.noticePeriod}</p>
              </div>
            </section>

            <div className="grid gap-2 sm:grid-cols-3">
              <button
                type="button"
                onClick={() => onShortlist(candidate.id)}
                className="rounded-xl border border-emerald-400/30 bg-emerald-500/15 px-3 py-2 text-sm text-emerald-700 transition hover:bg-emerald-500/25"
              >
                Shortlist
              </button>
              <button
                type="button"
                onClick={() => onReject(candidate.id)}
                className="rounded-xl border border-rose-400/30 bg-rose-500/15 px-3 py-2 text-sm text-rose-700 transition hover:bg-rose-500/25"
              >
                Reject
              </button>
              <button
                type="button"
                className="rounded-xl border border-brand-400/30 bg-brand-500/15 px-3 py-2 text-sm text-brand-700 transition hover:bg-brand-500/25"
              >
                Schedule Interview
              </button>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}


