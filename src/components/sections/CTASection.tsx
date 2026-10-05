"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, PhoneCall } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { CONTACT_FORM_HREF } from "@/lib/constants";

export function CTASection() {
  return (
    <section id="cta" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/15 rounded-full blur-3xl" />
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
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Start your transformation today
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Ready to Transform{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Join hundreds of businesses already using Infodra SaaS to automate
            operations, boost productivity, and accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href={CONTACT_FORM_HREF} variant="primary" size="lg" className="group text-base">
              <CalendarCheck className="w-5 h-5" />
              Book a Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </ButtonLink>
            <ButtonLink href={CONTACT_FORM_HREF} variant="outline" size="lg" className="text-base">
              <PhoneCall className="w-5 h-5" />
              Contact Sales
            </ButtonLink>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-slate-500">
            {["No credit card required", "Setup in minutes", "Cancel anytime"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
