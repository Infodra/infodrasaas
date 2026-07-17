import type { CandidateStatus, JobStatus } from "../types";

type BadgeStatus = CandidateStatus | JobStatus;

const statusStyles: Record<BadgeStatus, string> = {
  New: "bg-sky-500/15 text-sky-700 border-sky-500/30",
  Shortlisted: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
  Rejected: "bg-rose-500/15 text-rose-700 border-rose-500/30",
  Interview: "bg-amber-500/15 text-amber-700 border-amber-500/30",
  Open: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
  Closed: "bg-slate-500/15 text-slate-600 border-slate-500/30",
  Paused: "bg-amber-500/15 text-amber-700 border-amber-500/30",
};

export function StatusBadge({ status }: { status: BadgeStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}


