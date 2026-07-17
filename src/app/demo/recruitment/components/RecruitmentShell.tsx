"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { RecruitmentNavbar } from "./Navbar";

export function RecruitmentShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_44%),linear-gradient(180deg,#eff6ff_0%,#f8fafc_52%,#eef2ff_100%)] p-3 text-slate-800 sm:p-4 lg:p-6">
      <div className="mx-auto flex w-full max-w-[1700px] gap-4 lg:gap-6">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main className="min-w-0 flex-1">
          <RecruitmentNavbar onMenuToggle={() => setIsSidebarOpen(true)} />
          {children}
        </main>
      </div>
    </div>
  );
}


