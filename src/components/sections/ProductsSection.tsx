"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Users, MapPin, Zap, Bot, BarChart3,
  CheckCircle, ArrowRight, Clock, Building2, ExternalLink, BookOpen
} from "lucide-react";
import { CONTACT_FORM_HREF, INFODRABOOK_FEATURE_GROUPS, PRODUCTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Card";
import type { Product } from "@/lib/types";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  MapPin,
  Zap,
  Bot,
  BarChart3,
  Building2,
  BookOpen,
};

function FeaturedAccountingCard({ product }: { product: Product }) {
  return (
    <motion.article
      id={product.id}
      aria-labelledby={`${product.id}-heading`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="col-span-full scroll-mt-28 overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm"
    >
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="bg-slate-950">
          <div className="relative h-56 sm:h-64 lg:h-60">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
            <div className="absolute top-5 left-6">
              <Badge variant="orange"><Clock className="h-3 w-3" />Coming Soon</Badge>
            </div>
            <p className="absolute bottom-5 left-6 right-6 text-xs font-medium text-slate-200">{product.audience}</p>
          </div>
          <div className="p-6 pt-2 sm:p-8 sm:pt-2">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600">
              <BookOpen aria-hidden="true" className="h-6 w-6 text-white" />
            </div>
            <h3 id={`${product.id}-heading`} className="text-3xl font-bold text-white">{product.name}</h3>
            <p className="mt-2 text-sm font-medium text-blue-300">{product.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{product.description}</p>
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/70 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">Your finances, connected</p>
          <h4 className="mt-2 text-2xl font-bold text-slate-900">From your first invoice to a clearer financial picture</h4>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">Explore the planned capabilities for managing business finances in one cloud workspace.</p>
          <div className="my-7 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {INFODRABOOK_FEATURE_GROUPS.map((group) => (
              <div key={group.title} className="rounded-2xl border border-slate-200/80 bg-white/80 p-4">
                <h5 className="mb-4 text-sm font-bold text-slate-900">{group.title}</h5>
                <ul className="space-y-3">
                  {group.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                      <CheckCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-auto flex flex-col items-start justify-between gap-4 border-t border-blue-100 pt-6 sm:flex-row sm:items-center">
            <p className="max-w-sm text-xs leading-relaxed text-slate-500">Coming soon. Register your interest to discuss the planned features and early access.</p>
            <ButtonLink href={CONTACT_FORM_HREF} className="w-full shrink-0 sm:w-auto">
              Request Early Access
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = ICON_MAP[product.icon] || Zap;
  const isComingSoon = product.status === "coming-soon";

  return (
    <motion.div
      id={product.id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative flex flex-col scroll-mt-28 rounded-2xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300 transition-all duration-300 overflow-hidden"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
        <p className="absolute bottom-4 left-6 right-6 text-xs font-medium text-white">{product.audience}</p>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1">
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
        {product.id === "crm" && (
          <p className="mb-5 rounded-xl bg-cyan-50 p-3 text-xs text-cyan-800 break-words">
            Planned launch: <span className="font-semibold">{new URL(product.href).hostname}</span>
          </p>
        )}
        {product.id === "list360" && (
          <p className="mb-5 text-xs text-slate-500">
            SMS and email campaigns are coming soon. WhatsApp campaigns require recipient opt-in and approved templates.
          </p>
        )}

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
        <div className="mt-auto space-y-3">
          <Link
            href={CONTACT_FORM_HREF}
            className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 bg-gradient-to-r ${product.gradient} text-white hover:opacity-90 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
          >
            {isComingSoon ? "Request Early Access" : "Request Demo"}
            <ArrowRight className="w-4 h-4" />
          </Link>
          {!isComingSoon && product.href.startsWith("https://") && (
            <a href={product.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600">
              Explore {product.name}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
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
          description="Purpose-built tools for your people, pipeline, properties and finances. Discover workforce automation, AI-powered prospecting and real estate SaaS, with cloud accounting and more on the way."
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, index) =>
            product.id === "infodrabook" ? (
              <FeaturedAccountingCard key={product.id} product={product} />
            ) : (
              <ProductCard key={product.id} product={product} index={index} />
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <ButtonLink href={CONTACT_FORM_HREF} variant="secondary" size="lg">
            Find the Right SaaS for Your Business
            <ArrowRight className="w-4 h-4" />
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
