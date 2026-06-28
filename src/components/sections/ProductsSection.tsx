"use client";

import { motion } from "framer-motion";
import {
  Users, MapPin, Zap, Bot, BarChart3,
  CheckCircle, ArrowRight, Clock
} from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Card";
import type { Product } from "@/lib/types";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  MapPin,
  Zap,
  Bot,
  BarChart3,
};

const GRADIENT_CLASSES: Record<string, string> = {
  "from-blue-600 to-indigo-600": "from-blue-600 to-indigo-600",
  "from-emerald-600 to-teal-600": "from-emerald-600 to-teal-600",
  "from-violet-600 to-purple-600": "from-violet-600 to-purple-600",
  "from-orange-600 to-rose-600": "from-orange-600 to-rose-600",
  "from-cyan-600 to-blue-600": "from-cyan-600 to-blue-600",
};

function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = ICON_MAP[product.icon] || Zap;
  const isComingSoon = product.status === "coming-soon";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300 transition-all duration-300 overflow-hidden"
    >
      {/* Top gradient accent */}
      <div className={`h-1 w-full bg-gradient-to-r ${product.gradient}`} />

      {/* Card Body */}
      <div className="p-6">
        {/* Icon + Status */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shadow-lg`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          {isComingSoon ? (
            <Badge variant="orange">
              <Clock className="w-3 h-3" />
              Coming Soon
            </Badge>
          ) : (
            <Badge variant="green">
              <CheckCircle className="w-3 h-3" />
              Live
            </Badge>
          )}
        </div>

        {/* Name + tagline */}
        <h3 className="text-xl font-bold text-slate-900 mb-1">{product.name}</h3>
        <p className="text-sm font-medium text-slate-500 mb-3">{product.tagline}</p>
        <p className="text-sm text-slate-600 leading-relaxed mb-5">{product.description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient} shrink-0`} />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 group/btn ${
            isComingSoon
              ? "bg-slate-100 text-slate-500 cursor-not-allowed"
              : `bg-gradient-to-r ${product.gradient} text-white hover:opacity-90 shadow-sm`
          }`}
          disabled={isComingSoon}
        >
          {isComingSoon ? "Coming Soon" : "Learn More"}
          {!isComingSoon && (
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          )}
        </button>
      </div>
    </motion.div>
  );
}

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="Enterprise SaaS for Every Business Need"
          description="A growing suite of purpose-built applications — from workforce automation to AI-powered lead generation — all on a single, secure platform."
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <Button variant="secondary" size="lg">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
