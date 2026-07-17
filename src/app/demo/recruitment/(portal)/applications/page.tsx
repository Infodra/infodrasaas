"use client";

import { useMemo, useState } from "react";
import { Download, Search } from "lucide-react";
import { applications } from "../../data/applications";
import { candidates } from "../../data/candidates";
import { jobs } from "../../data/jobs";
import { StatusBadge } from "../../components/StatusBadge";

const pageSize = 10;

export default function ApplicationsPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "New" | "Shortlisted" | "Rejected" | "Interview">("All");
  const [page, setPage] = useState(1);

  const rows = useMemo(() => {
    const merged = applications.map((application) => {
      const candidate = candidates.find((item) => item.id === application.candidateId);
      const job = jobs.find((item) => item.id === application.jobId);

      return {
        ...application,
        candidate,
        job,
      };
    });

    return merged.filter((row) => {
      const matchedQuery =
        !query ||
        row.candidate?.name.toLowerCase().includes(query.toLowerCase()) ||
        row.job?.title.toLowerCase().includes(query.toLowerCase()) ||
        row.candidate?.skills.join(" ").toLowerCase().includes(query.toLowerCase());

      const matchedStatus = statusFilter === "All" || row.status === statusFilter;
      return matchedQuery && matchedStatus;
    });
  }, [query, statusFilter]);

  const totalPages = Math.ceil(rows.length / pageSize);
  const pagedRows = rows.slice((page - 1) * pageSize, page * pageSize);

  const exportTable = () => {
    const csv = [
      "Candidate,Experience,Skills,Location,Applied Date,Status,Job",
      ...rows.map((row) =>
        [
          row.candidate?.name,
          row.candidate?.experience,
          row.candidate?.skills.join(" | "),
          row.candidate?.location,
          row.appliedDate,
          row.status,
          row.job?.title,
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "applications-export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-5 pb-8">
      <div className="flex flex-col gap-3 rounded-3xl border border-slate-200/80 bg-white/85 p-5 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <h2 className="text-xl font-semibold text-slate-900">Applications</h2>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-slate-50 px-3 py-2">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search"
              className="w-44 bg-transparent text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value as typeof statusFilter);
              setPage(1);
            }}
            className="rounded-xl border border-slate-200/80 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:outline-none"
          >
            <option className="bg-slate-900">All</option>
            <option className="bg-slate-900">New</option>
            <option className="bg-slate-900">Shortlisted</option>
            <option className="bg-slate-900">Interview</option>
            <option className="bg-slate-900">Rejected</option>
          </select>
          <button
            type="button"
            onClick={exportTable}
            className="inline-flex items-center gap-1 rounded-xl border border-brand-400/30 bg-brand-500/20 px-3 py-2 text-sm text-brand-700 transition hover:bg-brand-500/30"
          >
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-slate-200/80 bg-white/85 p-3 shadow-xl shadow-black/15 backdrop-blur-xl">
        <table className="min-w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-3 py-3">Photo</th>
              <th className="px-3 py-3">Candidate</th>
              <th className="px-3 py-3">Experience</th>
              <th className="px-3 py-3">Skills</th>
              <th className="px-3 py-3">Location</th>
              <th className="px-3 py-3">Applied Date</th>
              <th className="px-3 py-3">Status</th>
              <th className="px-3 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pagedRows.map((row) => (
              <tr key={row.id} className="border-t border-white/5 text-slate-800">
                <td className="px-3 py-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-semibold text-slate-900 ${row.candidate?.avatarClass}`}>
                    {row.candidate?.initials}
                  </div>
                </td>
                <td className="px-3 py-3">
                  <p>{row.candidate?.name}</p>
                  <p className="text-xs text-slate-500">{row.job?.title}</p>
                </td>
                <td className="px-3 py-3">{row.candidate?.experience}</td>
                <td className="px-3 py-3">{row.candidate?.skills.slice(0, 2).join(", ")}</td>
                <td className="px-3 py-3">{row.candidate?.location}</td>
                <td className="px-3 py-3">{row.appliedDate}</td>
                <td className="px-3 py-3"><StatusBadge status={row.status} /></td>
                <td className="px-3 py-3">
                  <div className="flex gap-2">
                    <button type="button" className="rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-xs">View</button>
                    <button type="button" className="rounded-lg border border-brand-400/30 bg-brand-500/15 px-2.5 py-1 text-xs text-brand-700">Shortlist</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/85 px-4 py-3 text-sm text-slate-600">
        <p>Showing {(page - 1) * pageSize + 1} to {Math.min(page * pageSize, rows.length)} of {rows.length}</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            className="rounded-lg border border-slate-200/80 bg-slate-50 px-3 py-1.5 disabled:opacity-40"
          >
            Prev
          </button>
          <span>Page {page} / {Math.max(totalPages, 1)}</span>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
            className="rounded-lg border border-slate-200/80 bg-slate-50 px-3 py-1.5 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}


