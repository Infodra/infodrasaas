"use client";

import { useState } from "react";
import { candidates as baseCandidates } from "../../data/candidates";
import { ApplicantCard } from "../../components/JobCard";
import { CandidateDrawer } from "../../components/CandidateDrawer";
import type { Candidate } from "../../types";

export default function CandidatesPage() {
  const [candidates, setCandidates] = useState(baseCandidates);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const updateStatus = (id: string, status: Candidate["status"]) => {
    setCandidates((current) =>
      current.map((candidate) => (candidate.id === id ? { ...candidate, status } : candidate))
    );

    setSelectedCandidate((current) =>
      current && current.id === id ? { ...current, status } : current
    );
  };

  return (
    <div className="space-y-6 pb-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Candidates</p>
        <h2 className="text-2xl font-semibold text-slate-900">Talent Pipeline</h2>
      </div>

      <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
        {candidates.map((candidate) => (
          <ApplicantCard
            key={candidate.id}
            candidate={candidate}
            onView={setSelectedCandidate}
            onShortlist={(id) => updateStatus(id, "Shortlisted")}
            onReject={(id) => updateStatus(id, "Rejected")}
          />
        ))}
      </div>

      <CandidateDrawer
        candidate={selectedCandidate}
        onClose={() => setSelectedCandidate(null)}
        onShortlist={(id) => updateStatus(id, "Shortlisted")}
        onReject={(id) => updateStatus(id, "Rejected")}
      />
    </div>
  );
}


