"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechStackSection() {
  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Powered by Modern Technology"
          description="Built on battle-tested, enterprise-grade technologies for performance, reliability, and security."
          className="mb-14"
        />

        <div className="flex flex-wrap justify-center gap-3">
          {TECH_STACK.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 hover:shadow-md transition-all duration-200 cursor-default"
            >
              {/* Color dot representing the technology */}
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: tech.color }}
              />
              <span className="text-slate-700 font-medium text-sm whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
