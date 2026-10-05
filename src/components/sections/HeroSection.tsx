"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Layers, Users, Workflow } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { CONTACT_FORM_HREF, PRODUCTS } from "@/lib/constants";

const highlights = ["Workforce & productivity", "Sales & real estate", "Accounting & automation"];
const benefits = [
  {
    icon: Layers,
    title: "Purpose-built for your business",
    description: "Choose focused tools for workforce, sales and property, with accounting and AI products on the way.",
  },
  {
    icon: Users,
    title: "Guidance from the first demo",
    description: "Explore your use case with our team and discuss onboarding, configuration and deployment support.",
  },
  {
    icon: Workflow,
    title: "Connected to the way you work",
    description: "Discuss Microsoft 365 connections and custom integrations that fit your chosen product and workflows.",
  },
];
const heroProducts = [
  ...PRODUCTS.filter((product) => product.status === "live"),
  ...PRODUCTS.filter((product) => product.status === "coming-soon"),
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs sm:text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              One portfolio. More possibilities.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Powerful SaaS Products{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Built to Automate,
              </span>{" "}
              Manage &amp; Grow
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              The right tools for the way you work. Manage your workforce,
              discover business leads and grow your real estate business with
              purpose-built cloud products from Infodra.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="#products" size="lg" className="group">
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </ButtonLink>
              <ButtonLink href={CONTACT_FORM_HREF} variant="outline" size="lg">
                <Play className="w-4 h-4" />
                Request Demo
              </ButtonLink>
            </div>
            <p className="text-xs text-slate-500">Purpose-built SaaS for people, sales, property and finance.</p>
            <aside aria-labelledby="hero-benefits-heading" className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-emerald-500/5 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Built around your business</p>
              <h2 id="hero-benefits-heading" className="mt-2 text-xl font-semibold text-white">Why Infodra SaaS?</h2>
              <ul className="mt-5 space-y-5">
                {benefits.map(({ icon: Icon, title, description }) => (
                  <li key={title} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10">
                      <Icon aria-hidden="true" className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href={CONTACT_FORM_HREF} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">
                Let&apos;s find your right fit
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </aside>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 shadow-2xl shadow-black/30"
          >
            <div className="flex items-center justify-between px-1 pb-4">
              <div>
                <p className="text-sm font-semibold text-white">Your business. Connected.</p>
                <p className="text-xs text-slate-400 mt-1">Explore the Infodra SaaS portfolio</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {heroProducts.map((product, index) => (
                <Link
                  key={product.id}
                  href={`#${product.id}`}
                  className={`group relative overflow-hidden rounded-2xl bg-slate-800 ${product.id === "workhub" || product.id === "list360" || product.id === "infodrabook" ? "col-span-2 h-44 sm:h-48" : "h-32 sm:h-36"} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400`}
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes={product.id === "workhub" || product.id === "list360" || product.id === "infodrabook" ? "(min-width: 1024px) 550px, (min-width: 640px) 700px, 95vw" : "(min-width: 1024px) 260px, 45vw"}
                    priority={index < 3}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-white font-semibold text-sm">{product.name}</p>
                      <ArrowRight className="w-4 h-4 text-white/80 shrink-0" />
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      {product.status === "coming-soon" ? "Coming soon" : product.tagline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
