"use client";

import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  FunnelChart,
  Funnel,
  LabelList,
} from "recharts";

const applicationsPerDay = [
  { day: "Mon", value: 8 },
  { day: "Tue", value: 12 },
  { day: "Wed", value: 14 },
  { day: "Thu", value: 16 },
  { day: "Fri", value: 11 },
  { day: "Sat", value: 9 },
  { day: "Sun", value: 7 },
];

const hiringFunnel = [
  { value: 264, name: "Applications", fill: "#38bdf8" },
  { value: 94, name: "Screened", fill: "#3b82f6" },
  { value: 34, name: "Shortlisted", fill: "#6366f1" },
  { value: 12, name: "Interview", fill: "#8b5cf6" },
  { value: 4, name: "Offer", fill: "#14b8a6" },
];

const jobWiseApplications = [
  { name: "Frontend", value: 42 },
  { name: "Backend", value: 38 },
  { name: "React", value: 27 },
  { name: "AI", value: 24 },
  { name: "Mechanical", value: 21 },
];

const expDistribution = [
  { name: "0-2 yrs", value: 22 },
  { name: "2-4 yrs", value: 38 },
  { name: "4-6 yrs", value: 24 },
  { name: "6+ yrs", value: 16 },
];

const colors = ["#38bdf8", "#3b82f6", "#6366f1", "#8b5cf6", "#14b8a6"];

const activities = [
  { title: "Priya Natarajan shortlisted for Frontend Developer", time: "8 mins ago" },
  { title: "Interview scheduled with Arun Kumar", time: "23 mins ago" },
  { title: "Automation Engineer job moved to paused state", time: "1 hr ago" },
  { title: "New application received from LinkedIn", time: "2 hrs ago" },
  { title: "Backend Developer position published", time: "4 hrs ago" },
];

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-slate-200/80 bg-white/85 p-5 shadow-xl shadow-black/20 backdrop-blur-xl"
    >
      <h3 className="mb-4 text-sm font-medium text-slate-600">{title}</h3>
      <div className="h-72">{children}</div>
    </motion.article>
  );
}

export function RecruitmentCharts() {
  return (
    <section className="grid gap-4 xl:grid-cols-2">
      <ChartCard title="Applications per Day">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={applicationsPerDay}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#60a5fa" fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Hiring Funnel">
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            <Tooltip />
            <Funnel dataKey="value" data={hiringFunnel} isAnimationActive>
              <LabelList position="right" fill="#334155" stroke="none" dataKey="name" />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Job Wise Applications">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={jobWiseApplications}>
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#38bdf8" />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Experience Distribution">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={expDistribution} dataKey="value" nameKey="name" cx="50%" cy="45%" outerRadius={95} label>
              {expDistribution.map((item, index) => (
                <Cell key={item.name} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="rounded-3xl border border-slate-200/80 bg-white/85 p-5 shadow-xl shadow-black/20 backdrop-blur-xl xl:col-span-2"
      >
        <h3 className="mb-4 text-sm font-medium text-slate-600">Latest Activity Timeline</h3>
        <div className="space-y-4">
          {activities.map((activity, idx) => (
            <div key={activity.title} className="flex gap-3">
              <div className="flex flex-col items-center">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-400" />
                {idx < activities.length - 1 ? <span className="mt-1 h-9 w-px bg-slate-200" /> : null}
              </div>
              <div>
                <p className="text-sm text-slate-800">{activity.title}</p>
                <p className="mt-1 text-xs text-slate-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.article>
    </section>
  );
}


