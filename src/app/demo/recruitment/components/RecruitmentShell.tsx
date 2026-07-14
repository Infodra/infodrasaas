"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { RecruitmentNavbar } from "./Navbar";

export function RecruitmentShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.22),_transparent_38%),linear-gradient(180deg,#020617_0%,#020817_55%,#0f172a_100%)] p-3 text-slate-100 sm:p-4 lg:p-6">
      <div className="mx-auto flex w-full max-w-[1700px] gap-4 lg:gap-6">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="w-full">
          <RecruitmentNavbar onMenuToggle={() => setIsSidebarOpen(true)} />
          {children}
        </main>
      </div>
    </div>
  );
}
