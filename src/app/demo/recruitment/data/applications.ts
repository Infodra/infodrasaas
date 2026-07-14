import { candidates } from "./candidates";
import { jobs } from "./jobs";
import type { Application } from "../types";

const sources: Application["source"][] = [
  "LinkedIn",
  "Referral",
  "Career Page",
  "Naukri",
  "Indeed",
];

const statuses: Application["status"][] = ["New", "Shortlisted", "Rejected", "Interview"];

export const applications: Application[] = Array.from({ length: 100 }, (_, index) => {
  const candidate = candidates[index % candidates.length];
  const job = jobs[index % jobs.length];
  const day = 1 + (index % 30);

  return {
    id: `APL-2026-${String(index + 1001).padStart(6, "0")}`,
    candidateId: candidate.id,
    jobId: job.id,
    source: sources[index % sources.length],
    appliedDate: `2026-06-${String(day).padStart(2, "0")}`,
    status: statuses[index % statuses.length],
  };
});
