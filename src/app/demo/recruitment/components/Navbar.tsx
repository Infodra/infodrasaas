"use client";

import { Bell, Mail, Menu, Search } from "lucide-react";
import Image from "next/image";

type NavbarProps = {
  onMenuToggle: () => void;
};

export function RecruitmentNavbar({ onMenuToggle }: NavbarProps) {
  return (
    <header className="sticky top-0 z-20 mb-6 rounded-3xl border border-slate-200/80 bg-white/85 p-4 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open sidebar"
            onClick={onMenuToggle}
            className="rounded-xl border border-slate-200/80 bg-slate-50 p-2 text-slate-700 lg:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
          <div className="hidden sm:block">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Company Logo</p>
            <h1 className="text-lg font-semibold text-slate-900">Recruitment Portal</h1>
          </div>
        </div>

        <div className="hidden max-w-md flex-1 items-center gap-2 rounded-2xl border border-slate-200/80 bg-slate-50 px-3 py-2 md:flex">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search jobs, candidates, skills"
            className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-500 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="rounded-xl border border-slate-200/80 bg-slate-50 p-2 text-slate-700 transition hover:bg-slate-100"
          >
            <Bell className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="rounded-xl border border-slate-200/80 bg-slate-50 p-2 text-slate-700 transition hover:bg-slate-100"
          >
            <Mail className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-slate-50 px-2.5 py-1.5">
            <Image
              src="/logo.png"
              alt="Profile Avatar"
              width={26}
              height={26}
              className="rounded-full"
            />
            <span className="hidden text-sm text-slate-700 sm:block">HR Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}


