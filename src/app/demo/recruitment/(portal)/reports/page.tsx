"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell } from "recharts";

const sourceData = [
  { name: "LinkedIn", value: 41 },
  { name: "Referral", value: 19 },
  { name: "Career Page", value: 23 },
  { name: "Naukri", value: 11 },
  { name: "Indeed", value: 6 },
];

const funnelData = [
  { month: "Jan", apps: 80, hires: 6 },
  { month: "Feb", apps: 72, hires: 5 },
  { month: "Mar", apps: 86, hires: 7 },
  { month: "Apr", apps: 91, hires: 8 },
  { month: "May", apps: 76, hires: 6 },
  { month: "Jun", apps: 95, hires: 9 },
];

const topSkills = [
  { subject: "React", A: 86 },
  { subject: "Node", A: 74 },
  { subject: "Python", A: 68 },
  { subject: "AWS", A: 61 },
  { subject: "SQL", A: 72 },
];

const recruiterPerformance = [
  { name: "Riya", value: 22 },
  { name: "Karan", value: 18 },
  { name: "Arjun", value: 26 },
  { name: "Neha", value: 20 },
];

const hiringFunnel = [
  { stage: "Applications", value: 264 },
  { stage: "Screened", value: 140 },
  { stage: "Shortlisted", value: 34 },
  { stage: "Interview", value: 12 },
  { stage: "Selected", value: 4 },
];

const colors = ["#38bdf8", "#3b82f6", "#6366f1", "#22c55e", "#f59e0b"];

function ReportCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-3xl border border-slate-200/80 bg-white/85 p-5 shadow-xl shadow-black/20 backdrop-blur-xl">
      <h3 className="mb-4 text-sm font-medium text-slate-600">{title}</h3>
      <div className="h-72">{children}</div>
    </article>
  );
}

export default function ReportsPage() {
  return (
    <div className="space-y-6 pb-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Reports</p>
        <h2 className="text-2xl font-semibold text-slate-900">Hiring Intelligence</h2>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <ReportCard title="Applications by Source">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={sourceData} dataKey="value" nameKey="name" outerRadius={95} label>
                {sourceData.map((item, index) => <Cell key={item.name} fill={colors[index % colors.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ReportCard>

        <ReportCard title="Monthly Hiring">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={funnelData}>
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line type="monotone" dataKey="apps" stroke="#38bdf8" strokeWidth={2.5} />
              <Line type="monotone" dataKey="hires" stroke="#22c55e" strokeWidth={2.5} />
            </LineChart>
          </ResponsiveContainer>
        </ReportCard>

        <ReportCard title="Top Skills">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={topSkills}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="subject" stroke="#cbd5e1" />
              <PolarRadiusAxis stroke="#64748b" />
              <Radar name="Demand" dataKey="A" stroke="#60a5fa" fill="#3b82f6" fillOpacity={0.45} />
            </RadarChart>
          </ResponsiveContainer>
        </ReportCard>

        <ReportCard title="Recruiter Performance">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={recruiterPerformance}>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Bar dataKey="value" fill="#38bdf8" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ReportCard>

        <ReportCard title="Hiring Funnel">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={hiringFunnel} layout="vertical" margin={{ left: 12 }}>
              <XAxis type="number" stroke="#94a3b8" />
              <YAxis type="category" dataKey="stage" stroke="#94a3b8" width={92} />
              <Tooltip />
              <Bar dataKey="value" fill="#60a5fa" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ReportCard>
      </div>
    </div>
  );
}


