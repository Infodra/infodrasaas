"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  Users, MapPin, Zap, Bot, BarChart3, Building2, BookOpen, CreditCard, Wallet, ArrowRight,
} from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  MapPin,
  Zap,
  Bot,
  BarChart3,
  Building2,
  BookOpen,
  CreditCard,
  Wallet,
};

export function ProductsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="products" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="Enterprise SaaS for Every Business Need"
          description="Purpose-built tools for your people, pipeline, properties and finances. Discover workforce automation, AI-powered prospecting, real estate SaaS and cloud accounting in one portfolio."
          className="mb-16"
        />

        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.map((product, index) => {
            const Icon = ICON_MAP[product.icon] ?? Zap;
            const isComingSoon = product.status === "coming-soon";

            return (
              <motion.li
                key={product.id}
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="flex justify-center"
              >
                <Link
                  href={`/products#${product.id}`}
                  className="group flex w-full max-w-[11rem] flex-col items-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                >
                  <motion.div
                    animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                    transition={{ duration: 3.5 + (index % 3) * 0.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                    whileHover={{ scale: 1.12, rotate: -3 }}
                    className={`relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${product.gradient} shadow-xl shadow-slate-300/70 transition-shadow duration-300 group-hover:shadow-2xl`}
                  >
                    <Icon aria-hidden="true" className="h-11 w-11 text-white" />
                    <span aria-hidden="true" className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 to-white/20" />
                  </motion.div>
                  <span className="mt-4 text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </span>
                  <span className="mt-1 text-xs leading-snug text-slate-500">{product.tagline}</span>
                  {isComingSoon && (
                    <span className="mt-2 rounded-full border border-orange-200 bg-orange-50 px-2.5 py-0.5 text-[11px] font-medium text-orange-700">
                      Coming Soon
                    </span>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <ButtonLink href="/products" size="lg" className="group">
            Explore Products
            <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
