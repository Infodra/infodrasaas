"use client";

import { motion } from "framer-motion";
import {
  Shield, Grid3X3, Cloud, Sparkles, Layers, Code2,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Feature } from "@/lib/types";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Grid3x3: Grid3X3,
  Cloud,
  Sparkles,
  Layers,
  Code2,
};

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = ICON_MAP[feature.icon] || Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/5 to-indigo-500/5" />

      <div className="relative">
        <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/25 transition-colors">
          <Icon className="w-5 h-5 text-blue-400" />
        </div>
        <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Infodra SaaS"
          title="Built for Enterprise. Ready for Scale."
          description="Everything you need to deploy, manage, and grow enterprise SaaS — with security and reliability at the core."
          light
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
