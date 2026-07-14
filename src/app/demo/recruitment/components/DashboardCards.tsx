"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, FileText, CalendarCheck2, UserRoundCheck, UserRoundX, Users } from "lucide-react";

const stats = [
  { label: "Total Jobs", value: "12", icon: BriefcaseBusiness },
  { label: "Applications", value: "264", icon: FileText },
  { label: "Today's Applications", value: "18", icon: Users },
  { label: "Shortlisted", value: "34", icon: UserRoundCheck },
  { label: "Interview Scheduled", value: "12", icon: CalendarCheck2 },
  { label: "Rejected", value: "8", icon: UserRoundX },
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
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 shadow-xl shadow-black/15 backdrop-blur-xl"
          >
            <div className="mb-4 inline-flex rounded-2xl border border-brand-400/30 bg-brand-500/15 p-2.5 text-brand-200">
              <Icon className="h-4 w-4" />
            </div>
            <p className="text-sm text-slate-300">{stat.label}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p>
          </motion.article>
        );
      })}
    </section>
  );
}
