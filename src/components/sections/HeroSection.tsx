"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, BarChart3, Users, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

const floatingCards = [
  { icon: Users, label: "Employees Online", value: "2,847", color: "from-blue-500 to-indigo-600", delay: 0 },
  { icon: TrendingUp, label: "Leads Generated", value: "+384 Today", color: "from-emerald-500 to-teal-600", delay: 0.2 },
  { icon: BarChart3, label: "Productivity Score", value: "94.2%", color: "from-violet-500 to-purple-600", delay: 0.4 },
  { icon: Zap, label: "AI Actions", value: "1,204 Saved", color: "from-orange-500 to-rose-600", delay: 0.6 },
];

const highlights = [
  "No infrastructure setup",
  "Microsoft 365 native",
  "Deploy in minutes",
];

export function HeroSection() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl animate-pulse-slow [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating AI particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400/40"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                AI-Powered SaaS Solutions for Modern Businesses
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Powerful SaaS Products{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
                Built to Automate,
              </span>{" "}
              Manage &amp; Grow
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed max-w-xl"
            >
              Deploy enterprise-ready SaaS applications for workforce management,
              lead generation, AI automation, productivity, and digital transformation.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScrollTo("#products")}
                className="group"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScrollTo("#cta")}
                className="group"
              >
                <Play className="w-4 h-4" />
                Request Demo
              </Button>
            </motion.div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* Main dashboard card */}
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-5 shadow-2xl shadow-black/50">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 h-5 rounded-md bg-slate-800 flex items-center px-3">
                    <span className="text-slate-500 text-xs">app.infodra.com/dashboard</span>
                  </div>
                </div>

                {/* Dashboard title */}
                <div className="mb-4">
                  <h3 className="text-white font-semibold text-sm">Infodra SaaS Dashboard</h3>
                  <p className="text-slate-500 text-xs mt-0.5">All products in one view</p>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Active Users", value: "2,847", trend: "+12%" },
                    { label: "Leads Today", value: "384", trend: "+28%" },
                    { label: "Tasks Done", value: "94.2%", trend: "+5%" },
                    { label: "AI Actions", value: "1,204", trend: "+43%" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-slate-800/60 p-3">
                      <div className="text-slate-400 text-xs mb-1">{stat.label}</div>
                      <div className="flex items-end justify-between">
                        <span className="text-white font-bold text-lg">{stat.value}</span>
                        <span className="text-emerald-400 text-xs font-medium">{stat.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fake chart */}
                <div className="rounded-xl bg-slate-800/60 p-3 mb-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-slate-400 text-xs font-medium">Weekly Activity</span>
                    <span className="text-blue-400 text-xs">View All</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[40, 65, 48, 80, 72, 90, 85].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.6, delay: 0.8 + i * 0.06, ease: "easeOut" }}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600 to-blue-400"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                      <span key={i} className="text-slate-600 text-[10px] flex-1 text-center">{d}</span>
                    ))}
                  </div>
                </div>

                {/* Product pills */}
                <div className="flex gap-2 flex-wrap">
                  {["WorkHub", "StaffTrack", "BizLead", "AI Assistant", "CRM"].map((p, i) => (
                    <span
                      key={p}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        i === 0
                          ? "bg-blue-500/20 text-blue-300"
                          : i === 1
                          ? "bg-emerald-500/20 text-emerald-300"
                          : i === 2
                          ? "bg-violet-500/20 text-violet-300"
                          : "bg-slate-700 text-slate-400"
                      }`}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating metric cards */}
              {floatingCards.map((card, i) => {
                const positions = [
                  "-top-6 -left-8",
                  "-top-6 -right-8",
                  "-bottom-6 -left-8",
                  "-bottom-6 -right-8",
                ];
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + card.delay }}
                    className={`absolute ${positions[i]} z-10`}
                    style={{ animation: `float ${4 + i}s ease-in-out infinite ${card.delay}s` }}
                  >
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur-sm shadow-xl whitespace-nowrap">
                      <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                        <Icon className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 leading-none">{card.label}</div>
                        <div className="text-white text-xs font-bold mt-0.5">{card.value}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-600 cursor-pointer"
            onClick={() => handleScrollTo("#trusted")}
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
