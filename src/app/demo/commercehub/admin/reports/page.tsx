"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, XAxis, YAxis, Bar } from "recharts";
import { products } from "../../lib/data";

const growth = [
  { name: "Q1", value: 18 },
  { name: "Q2", value: 27 },
  { name: "Q3", value: 31 },
  { name: "Q4", value: 39 },
];

const monthlyComparison = [
  { month: "Jan", current: 72, previous: 58 },
  { month: "Feb", current: 81, previous: 63 },
  { month: "Mar", current: 77, previous: 68 },
  { month: "Apr", current: 94, previous: 71 },
  { month: "May", current: 102, previous: 79 },
  { month: "Jun", current: 111, previous: 86 },
];

const categoryMix = [
  { name: "Electronics", value: 34 },
  { name: "Fashion", value: 18 },
  { name: "Home", value: 14 },
  { name: "Sports", value: 20 },
  { name: "Industrial", value: 14 },
];

const colors = ["#2563EB", "#14B8A6", "#0F172A", "#60A5FA", "#22C55E"];

export default function AdminReportsPage() {
  return (
    <div className="space-y-4 pb-10">
      <h1 className="text-2xl font-bold">Reports</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        {["Revenue", "Orders", "Growth"].map((item) => (
          <article key={item} className="rounded-3xl border border-slate-200 bg-white/85 p-4 dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item}</p>
            <p className="mt-2 text-xl font-bold">Live Demo</p>
          </article>
        ))}
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white/85 p-4 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="mb-3 font-semibold">Top Categories</h2>
          <div className="h-72"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={categoryMix} dataKey="value" nameKey="name" outerRadius={100}>{categoryMix.map((entry, index) => <Cell key={entry.name} fill={colors[index % colors.length]} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></div>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white/85 p-4 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="mb-3 font-semibold">Growth</h2>
          <div className="h-72"><ResponsiveContainer width="100%" height="100%"><BarChart data={growth}><XAxis dataKey="name" /><YAxis /><Tooltip /><Bar dataKey="value" fill="#14B8A6" radius={[8, 8, 0, 0]} /></BarChart></ResponsiveContainer></div>
        </article>
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white/85 p-4 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="mb-3 font-semibold">Monthly Comparison</h2>
          <div className="h-72"><ResponsiveContainer width="100%" height="100%"><BarChart data={monthlyComparison}><XAxis dataKey="month" /><YAxis /><Tooltip /><Bar dataKey="current" fill="#2563EB" radius={[8, 8, 0, 0]} /><Bar dataKey="previous" fill="#94A3B8" radius={[8, 8, 0, 0]} /></BarChart></ResponsiveContainer></div>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white/85 p-4 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="mb-3 font-semibold">Customer Growth</h2>
          <div className="space-y-3 text-sm">
            <p>New enterprise customers increased 39% this year.</p>
            <p>Repeat purchase confidence remains high across premium catalog demos.</p>
            <p>Regional demand shows strongest growth in electronics and industrial categories.</p>
          </div>
        </article>
      </div>
      <section className="rounded-3xl border border-slate-200 bg-white/85 p-4 dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="mb-3 font-semibold">Best Selling Products</h2>
        <div className="space-y-2 text-sm">{products.slice(0, 5).map((product) => <p key={product.id}>{product.name}</p>)}</div>
      </section>
    </div>
  );
}
