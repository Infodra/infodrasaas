"use client";

import { motion } from "framer-motion";
import type { Candidate } from "../types";
import { StatusBadge } from "./StatusBadge";

type JobCardProps = {
  candidate: Candidate;
  onView: (candidate: Candidate) => void;
  onShortlist: (id: string) => void;
  onReject: (id: string) => void;
};

export function ApplicantCard({ candidate, onView, onShortlist, onReject }: JobCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-lg shadow-black/20 backdrop-blur-xl"
    >
      <div className="mb-4 flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold text-white ${candidate.avatarClass}`}>
            {candidate.initials}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">{candidate.name}</h4>
            <p className="text-xs text-slate-400">{candidate.role} • {candidate.experience}</p>
          </div>
        </div>
        <StatusBadge status={candidate.status} />
      </div>

      <div className="grid gap-2 text-xs text-slate-300 sm:grid-cols-2">
        <p>Skills: {candidate.skills.join(", ")}</p>
        <p>Location: {candidate.location}</p>
        <p>Current Salary: {candidate.currentSalary}</p>
        <p>Expected Salary: {candidate.expectedSalary}</p>
        <p>Notice Period: {candidate.noticePeriod}</p>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <button
          type="button"
          onClick={() => onView(candidate)}
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-100 transition hover:bg-white/10"
        >
          View
        </button>
        <button
          type="button"
          onClick={() => onShortlist(candidate.id)}
          className="rounded-xl border border-emerald-400/30 bg-emerald-500/15 px-3 py-2 text-xs text-emerald-100 transition hover:bg-emerald-500/25"
        >
          Shortlist
        </button>
        <button
          type="button"
          onClick={() => onReject(candidate.id)}
          className="rounded-xl border border-rose-400/30 bg-rose-500/15 px-3 py-2 text-xs text-rose-100 transition hover:bg-rose-500/25"
        >
          Reject
        </button>
      </div>
    </motion.article>
  );
}
