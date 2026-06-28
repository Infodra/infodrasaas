"use client";

import { motion } from "framer-motion";
import { TRUSTED_COMPANIES } from "@/lib/constants";

export function TrustedBySection() {
  return (
    <section id="trusted" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-slate-400 tracking-widest uppercase mb-8"
        >
          Trusted by growing businesses and engineering organizations
        </motion.p>

        <div className="relative overflow-hidden">
          {/* Gradient fades on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES, ...TRUSTED_COMPANIES].map(
              (company, i) => (
                <div
                  key={`${company}-${i}`}
                  className="flex items-center justify-center shrink-0 px-8 py-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors group"
                >
                  {/* Placeholder logo as stylized text */}
                  <div className="w-32 flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-gradient-to-br from-slate-300 to-slate-400 group-hover:from-blue-400 group-hover:to-indigo-500 transition-all" />
                      <span className="text-slate-500 font-semibold text-sm tracking-tight group-hover:text-slate-700 transition-colors whitespace-nowrap">
                        {company}
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}
          </motion.div>
        </div>

        {/* Trust metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mt-10"
        >
          {[
            { value: "500+", label: "Companies" },
            { value: "50,000+", label: "Users" },
            { value: "12+", label: "Industries" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
