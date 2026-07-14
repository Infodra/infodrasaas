"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { DashboardCards } from "../components/DashboardCards";
import { RecruitmentCharts } from "../components/Charts";
import { RecentJobsTable } from "../components/ApplicantTable";
import { ApplicantCard } from "../components/JobCard";
import { CandidateDrawer } from "../components/CandidateDrawer";
import { candidates as baseCandidates } from "../data/candidates";
import type { Candidate } from "../types";

export default function RecruitmentDashboardPage() {
  const [candidateList, setCandidateList] = useState(baseCandidates);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const featuredCandidates = useMemo(() => candidateList.slice(0, 6), [candidateList]);

  const updateStatus = (id: string, status: Candidate["status"]) => {
    setCandidateList((current) =>
      current.map((candidate) => (candidate.id === id ? { ...candidate, status } : candidate))
    );

    setSelectedCandidate((current) =>
      current && current.id === id ? { ...current, status } : current
    );
  };

  return (
    <div className="space-y-6 pb-8">
      <DashboardCards />
      <RecruitmentCharts />
      <RecentJobsTable />

      <section>
        <h2 className="mb-4 text-lg font-semibold text-white">Recent Applicants</h2>
        <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
          {featuredCandidates.map((candidate) => (
            <ApplicantCard
              key={candidate.id}
              candidate={candidate}
              onView={setSelectedCandidate}
              onShortlist={(id) => updateStatus(id, "Shortlisted")}
              onReject={(id) => updateStatus(id, "Rejected")}
            />
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-black/20 backdrop-blur-xl"
      >
        <h2 className="mb-4 text-lg font-semibold text-white">Demo Flow</h2>
        <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Step 1: HR creates Job",
            "Step 2: System Generates Public Link",
            "Step 3: Telecaller shares Link",
            "Step 4: Candidate Applies",
            "Step 5: HR views Applications",
            "Step 6: Shortlist -> Interview -> Selection",
          ].map((step) => (
            <div key={step} className="rounded-2xl border border-brand-400/20 bg-brand-500/10 p-4">
              {step}
            </div>
          ))}
        </div>
      </motion.section>

      <CandidateDrawer
        candidate={selectedCandidate}
        onClose={() => setSelectedCandidate(null)}
        onShortlist={(id) => updateStatus(id, "Shortlisted")}
        onReject={(id) => updateStatus(id, "Rejected")}
      />
    </div>
  );
}
