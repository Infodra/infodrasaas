"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, FileText, CalendarCheck2, UserRoundCheck, UserRoundX, Users } from "lucide-react";

const stats = [
  {
    label: "Total Jobs",
    value: "12",
    icon: BriefcaseBusiness,
    trend: "+2 this week",
    tone: "from-sky-100 via-blue-50 to-indigo-100",
  },
  {
    label: "Applications",
    value: "264",
    icon: FileText,
    trend: "+18.4%",
    tone: "from-cyan-100 via-blue-50 to-indigo-100",
  },
  {
    label: "Today's Applications",
    value: "18",
    icon: Users,
    trend: "+5 since morning",
    tone: "from-violet-100 via-indigo-50 to-blue-100",
  },
  {
    label: "Shortlisted",
    value: "34",
    icon: UserRoundCheck,
    trend: "+7 ready",
    tone: "from-emerald-100 via-teal-50 to-cyan-100",
  },
  {
    label: "Interview Scheduled",
    value: "12",
    icon: CalendarCheck2,
    trend: "6 today",
    tone: "from-amber-100 via-orange-50 to-yellow-100",
  },
  {
    label: "Rejected",
    value: "8",
    icon: UserRoundX,
    trend: "-3 vs last week",
    tone: "from-rose-100 via-pink-50 to-orange-100",
  },
];

export function DashboardCards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.45 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className={`group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br ${stat.tone} p-5 shadow-[0_14px_40px_-18px_rgba(15,23,42,0.35)] transition-all duration-300`}
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/60 blur-2xl" />

            <div className="relative mb-4 flex items-start justify-between">
              <div className="inline-flex rounded-2xl border border-brand-300/40 bg-white/85 p-2.5 text-brand-700 shadow-sm shadow-brand-200/50">
                <Icon className="h-4 w-4" />
              </div>
              <span className="rounded-full border border-emerald-300/50 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                {stat.trend}
              </span>
            </div>

            <p className="relative text-sm font-medium text-slate-600">{stat.label}</p>
            <p className="relative mt-2 text-4xl font-bold tracking-tight text-slate-900">{stat.value}</p>

            <div className="relative mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/70">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-brand-400 to-indigo-500 transition-all duration-500 group-hover:w-full" />
            </div>
          </motion.article>
        );
      })}
    </section>
  );
}


