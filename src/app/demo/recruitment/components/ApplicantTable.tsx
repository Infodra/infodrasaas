"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { jobs } from "../data/jobs";
import { StatusBadge } from "./StatusBadge";

export function RecentJobsTable() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-xl shadow-black/20 backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Recent Jobs</h3>
        <Link href="/demo/recruitment/jobs" className="text-sm text-brand-300 hover:text-brand-200">
          View all
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-3 py-3">Job Title</th>
              <th className="px-3 py-3">Department</th>
              <th className="px-3 py-3">Location</th>
              <th className="px-3 py-3">Applications</th>
              <th className="px-3 py-3">Status</th>
              <th className="px-3 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.slice(0, 7).map((job) => (
              <tr key={job.id} className="border-t border-white/5 text-slate-200">
                <td className="px-3 py-3">{job.title}</td>
                <td className="px-3 py-3">{job.department}</td>
                <td className="px-3 py-3">{job.location}</td>
                <td className="px-3 py-3">{job.applications}</td>
                <td className="px-3 py-3">
                  <StatusBadge status={job.status} />
                </td>
                <td className="px-3 py-3">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-100 transition hover:bg-white/10"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
}
