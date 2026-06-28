"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const numeric = parseFloat(value);
    if (isNaN(numeric)) {
      setDisplay(value);
      return;
    }
    const duration = 2000;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;
      setDisplay(
        Number.isInteger(numeric)
          ? Math.round(current).toString()
          : current.toFixed(1)
      );
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

export function StatsSection() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Businesses Choose Us"
          title="Numbers That Speak for Themselves"
          light
          className="mb-16"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group text-center p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/30"
            >
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-none">
                <AnimatedNumber value={stat.value} />
                {stat.suffix && (
                  <span className="text-blue-400">{stat.suffix}</span>
                )}
              </div>
              <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
