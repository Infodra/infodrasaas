"use client";

import { motion } from "framer-motion";
import {
  MessageSquare, Mail, Globe, HardDrive, Cloud,
  Briefcase, Hash, MessageCircle, Code2,
} from "lucide-react";
import { INTEGRATIONS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  MessageSquare, Mail, Globe, HardDrive, Cloud,
  Briefcase, Hash, MessageCircle, Code2,
};

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Integrations"
          title="Connect Your Entire Ecosystem"
          description="Infodra SaaS plugs seamlessly into the tools your team already uses — from Microsoft 365 to Google Workspace and beyond."
          className="mb-14"
        />

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4 justify-items-center">
          {INTEGRATIONS.map((integration, index) => {
            const Icon = ICON_MAP[integration.icon] || Cloud;
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:border-slate-300 transition-all duration-200 cursor-default w-24"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${integration.color}15` }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: integration.color }}
                  />
                </div>
                <span className="text-xs font-medium text-slate-600 text-center leading-tight">
                  {integration.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Connection lines visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-center"
        >
          <p className="text-slate-700 font-medium">
            Don&apos;t see your tool?{" "}
            <span className="text-blue-600 font-semibold">
              We build custom integrations
            </span>{" "}
            — connect any REST API or enterprise system.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
