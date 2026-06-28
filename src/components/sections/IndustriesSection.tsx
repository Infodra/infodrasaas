"use client";

import { motion } from "framer-motion";
import {
  Factory, Wrench, Building2, HeartPulse,
  GraduationCap, Truck, ShoppingBag, Briefcase,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Industry } from "@/lib/types";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory, Wrench, Building2, HeartPulse,
  GraduationCap, Truck, ShoppingBag, Briefcase,
};

const GRADIENTS = [
  "from-blue-500 to-indigo-600",
  "from-emerald-500 to-teal-600",
  "from-violet-500 to-purple-600",
  "from-orange-500 to-rose-600",
  "from-cyan-500 to-blue-600",
  "from-amber-500 to-orange-600",
  "from-pink-500 to-rose-600",
  "from-slate-500 to-slate-700",
];

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const Icon = ICON_MAP[industry.icon] || Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/80 hover:border-slate-300 transition-all duration-300 cursor-default"
    >
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <span className="text-slate-700 font-semibold text-sm text-center">
        {industry.name}
      </span>
    </motion.div>
  );
}

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Built for Your Industry"
          description="Infodra SaaS is trusted across diverse industries — configurable workflows that adapt to your sector's unique requirements."
          className="mb-14"
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {INDUSTRIES.map((industry, index) => (
            <IndustryCard key={industry.name} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
