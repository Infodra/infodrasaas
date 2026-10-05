"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/80 hover:border-slate-300 transition-all duration-300"
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={industry.image}
          alt={industry.imageAlt}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
        <div className={`absolute bottom-4 left-5 w-10 h-10 rounded-xl bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]} flex items-center justify-center shadow-lg`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-slate-900 font-bold text-lg">{industry.name}</h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{industry.description}</p>
      </div>
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
          description="From property businesses to distributed field teams, discover SaaS tools that fit your industry's day-to-day workflows."
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, index) => (
            <IndustryCard key={industry.name} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
