"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative bg-slate-950 pt-28 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4" />
            We&apos;re here to help
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
            Get{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              In Touch
            </span>
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Have questions? Our team is ready to help you find the perfect
            solution for your business. Reach out and we&apos;ll respond within
            24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
