"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  FilePlus2,
  Files,
  Users,
  ChartNoAxesCombined,
  Settings,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
  { label: "Dashboard", href: "/demo/recruitment", icon: LayoutDashboard },
  { label: "Jobs", href: "/demo/recruitment/jobs", icon: BriefcaseBusiness },
  { label: "Create Job", href: "/demo/recruitment/create-job", icon: FilePlus2 },
  { label: "Applications", href: "/demo/recruitment/applications", icon: Files },
  { label: "Candidates", href: "/demo/recruitment/candidates", icon: Users },
  { label: "Reports", href: "/demo/recruitment/reports", icon: ChartNoAxesCombined },
  { label: "Settings", href: "/demo/recruitment/settings", icon: Settings },
];

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <motion.aside
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`fixed inset-y-3 left-3 z-40 h-[calc(100vh-1.5rem)] w-72 overflow-y-auto rounded-3xl border border-slate-200/80 bg-white/85 p-5 backdrop-blur-xl lg:static lg:inset-auto lg:h-auto lg:overflow-visible lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-[120%]"
        } transition-transform duration-300`}
      >
        <div className="mb-8 flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-brand-500 to-indigo-600" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Infodra SaaS</p>
            <p className="text-sm font-semibold text-slate-900">Recruitment Portal</p>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition-all ${
                  active
                    ? "bg-brand-500/20 text-slate-900 shadow-lg shadow-brand-500/10"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="mt-10 flex w-full items-center gap-3 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-3 py-2.5 text-sm text-rose-700 transition hover:bg-rose-500/20"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </motion.aside>

      {isOpen ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-30 bg-slate-950/60 lg:hidden"
          onClick={onClose}
        />
      ) : null}
    </>
  );
}


