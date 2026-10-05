"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_FORM_HREF, INTEGRATIONS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Integrations"
          title="Connect Your Entire Ecosystem"
          description="Build a connected workflow around the tools you already use. Availability and setup vary by SaaS product; our team can help you choose the right connections."
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INTEGRATIONS.map((integration, index) => {
            return (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group flex items-start gap-4 p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:border-slate-300 transition-all duration-200"
              >
                <div
                  className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${integration.color}15` }}
                >
                  <Image
                    src={integration.image}
                    alt={`${integration.name} logo`}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{integration.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mt-2">{integration.description}</p>
                </div>
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
            <Link href={CONTACT_FORM_HREF} className="text-blue-600 font-semibold underline underline-offset-4">
              Talk to us about custom integrations
            </Link>{" "}
            — connect any REST API or enterprise system.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
