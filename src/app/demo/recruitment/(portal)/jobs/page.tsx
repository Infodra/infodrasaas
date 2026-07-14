"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, MapPin, Users } from "lucide-react";
import { jobs } from "../../data/jobs";
import { StatusBadge } from "../../components/StatusBadge";

export default function JobsPage() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Jobs</p>
        <h2 className="text-2xl font-semibold text-white">Open Positions</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {jobs.map((job, index) => (
          <motion.article
            key={job.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, duration: 0.35 }}
            className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-xl shadow-black/20 backdrop-blur-xl"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">{job.title}</p>
              <StatusBadge status={job.status} />
            </div>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="flex items-center gap-2"><BriefcaseBusiness className="h-4 w-4 text-brand-300" /> {job.department}</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-300" /> {job.location}</p>
              <p className="flex items-center gap-2"><Users className="h-4 w-4 text-brand-300" /> {job.applications} applications</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-brand-400/30 bg-brand-500/10 px-2.5 py-1 text-xs text-brand-200">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
