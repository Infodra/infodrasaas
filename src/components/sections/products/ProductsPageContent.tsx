"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BarChart3, BookOpen, Bot, Building2, Check, ClipboardList,
  ExternalLink, MapPin, ScanLine, Wallet, Zap, MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { CONTACT_FORM_HREF, PRODUCTS } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type ShowcaseProduct = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  highlights: string[];
  icon: LucideIcon;
  gradient: string;
  status: "available" | "coming-soon";
  href?: string;
  ctaLabel: string;
  audience: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  imageBg?: string;
  imagePosition?: string;
};

type Overrides = Partial<ShowcaseProduct> & Pick<ShowcaseProduct, "highlights" | "gradient">;

function fromCatalog(id: string, icon: LucideIcon, overrides: Overrides): ShowcaseProduct {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) throw new Error(`Unknown product: ${id}`);
  return {
    id: product.id,
    name: product.name,
    tagline: product.tagline,
    description: product.description,
    features: product.features,
    icon,
    status: product.status === "live" ? "available" : "coming-soon",
    href: product.href.startsWith("https://") ? product.href : undefined,
    ctaLabel: `Explore ${product.name}`,
    audience: product.audience,
    image: product.image,
    imageAlt: product.imageAlt,
    imageFit: product.imageFit,
    imageBg: product.imageBg,
    ...overrides,
  };
}

const SHOWCASE: ShowcaseProduct[] = [
  fromCatalog("infodrabook", BookOpen, {
    name: "InfodraBooks",
    tagline: "Cloud Accounting & Business Finance",
    description:
      "Manage invoicing, accounting, GST, expenses and inventory in one cloud workspace, so your finances stay organised and your cash flow stays clear.",
    features: [
      "Estimates, Invoices & Payment Reminders",
      "GST Accounting & E-Invoicing Workflows",
      "Expense Tracking, Bills & Payables",
      "Bank Transactions & Reconciliation",
      "Inventory, Sales & Purchase Orders",
      "Profit & Loss, Balance Sheet & Cash Flow",
    ],
    highlights: ["Invoicing", "GST Accounting", "Expense Tracking", "Inventory", "Bank Reconciliation", "Financial Reports"],
    gradient: "from-cyan-600 to-blue-700",
    ctaLabel: "Explore InfodraBooks",
  }),
  fromCatalog("ai-assistant", Bot, {
    description:
      "An enterprise copilot for searching business documents, retrieving information from your knowledge base and supporting repeatable workflows through chat.",
    features: ["Business Knowledge", "Document Search", "Information Retrieval", "Chat", "Workflow Assistance"],
    highlights: ["Knowledge Base", "Document Search", "Information Retrieval", "Chat Assistant", "Workflow Assistance"],
    gradient: "from-slate-700 to-sky-600",
    imagePosition: "50% 30%",
  }),
  fromCatalog("crm", BarChart3, {
    name: "CRM + Campaign Manager",
    tagline: "Connected Leads, Sales & Campaigns",
    description:
      "Capture and assign leads, manage your sales pipeline and follow-ups, and run WhatsApp campaign workflows from one sales workspace.",
    features: [
      "Lead Management",
      "Sales Pipeline & Contact Management",
      "Activity Timeline & Follow-up Tasks",
      "WhatsApp Campaign Workflows",
      "Quotations & Invoices",
      "Lead Source & Sales Analytics",
    ],
    highlights: ["Lead Management", "Sales Pipeline", "Follow-up Tasks", "WhatsApp Campaigns", "Quotations & Invoices", "Sales Analytics"],
    gradient: "from-blue-800 to-cyan-600",
    ctaLabel: "Explore CRM + Campaign Manager",
  }),
  fromCatalog("hr-payroll", Wallet, {
    highlights: ["Salary Profiles", "Payroll Processing", "Payslips", "Statutory Calculations"],
    gradient: "from-yellow-600 to-orange-600",
  }),
  fromCatalog("workhub", ClipboardList, {
    tagline: "Team Work & Productivity",
    description:
      "Track team tasks, assignments and work progress in one place, with attendance and leave alongside so managers can see how work is moving.",
    features: [
      "Work Tracking",
      "Employee Attendance",
      "Leave Management",
      "Attendance Dashboard",
      "Microsoft 365 Integration",
      "Teams Activity",
    ],
    highlights: ["Task Tracking", "Assignments", "Work Progress", "Attendance", "Leave", "Productivity"],
    gradient: "from-stone-700 to-orange-700",
    imagePosition: "50% 65%",
  }),
  fromCatalog("stafftrack", MapPin, {
    tagline: "GPS Field Tracking & Attendance",
    description:
      "Give managers visibility into field teams with GPS employee tracking and field attendance, while employees handle leave and timesheets through self-service.",
    highlights: ["GPS Tracking", "Field Attendance", "Location Tracking", "Leave", "Timesheets", "Employee Self Service"],
    gradient: "from-emerald-600 to-teal-600",
  }),
  fromCatalog("list360", Building2, {
    tagline: "Real Estate, Connected",
    description:
      "A specialised real estate product for agents, brokers, builders and channel partners. Publish properties on list360.in, capture enquiries and turn conversations into site visits.",
    highlights: ["Property Listings", "Lead Capture", "Deal Pipeline", "WhatsApp Campaigns", "Approved Templates", "Lead Source Tracking"],
    gradient: "from-slate-800 to-emerald-700",
    ctaLabel: "Explore List360",
  }),
  fromCatalog("cardly", ScanLine, {
    tagline: "AI Business Card Management",
    description:
      "Scan business cards with AI and keep every new contact organised, searchable and ready for follow-up.",
    highlights: ["AI Card Scanning", "Contact Management", "Searchable Library", "Follow-up Ready"],
    gradient: "from-blue-700 to-sky-500",
  }),
  fromCatalog("bizlead", Zap, {
    tagline: "B2B Lead Discovery",
    description:
      "Discover B2B prospects with AI-assisted company discovery, contact verification and exports, then use lead analytics to focus your sales team.",
    highlights: ["AI Lead Generation", "Company Database", "Contact Discovery", "Lead Verification", "Export", "Analytics"],
    gradient: "from-violet-800 to-purple-600",
  }),
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function ProductActions({ product }: { product: ShowcaseProduct }) {
  const buttonClass = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
    product.gradient
  );

  if (product.status === "coming-soon" || !product.href) {
    return (
      <Link href={CONTACT_FORM_HREF} className={buttonClass}>
        Request Early Access
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      <Link href={product.href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
        {product.ctaLabel}
        <ExternalLink aria-hidden="true" className="h-4 w-4" />
      </Link>
      <Link href={CONTACT_FORM_HREF} className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600">
        Request a Demo
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Link>
    </div>
  );
}

function ProductVisual({ product, className }: { product: ShowcaseProduct; className?: string }) {
  return (
    <div className={cn("flex flex-col", product.imageBg, className)}>
      <div className="relative aspect-[1479/765] w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 700px, 100vw"
          className={product.imageFit === "contain" ? "object-contain" : "object-cover"}
          style={product.imagePosition ? { objectPosition: product.imagePosition } : undefined}
        />
      </div>
      <div className={cn("relative flex flex-1 flex-col justify-center gap-4 overflow-hidden bg-gradient-to-br p-6 text-white sm:p-8", product.gradient)}>
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <p className="relative text-xs font-semibold uppercase tracking-widest text-white/80">{product.audience}</p>
        <p className="relative text-xl font-bold sm:text-2xl">Key capabilities</p>
        <ul className="relative flex flex-wrap gap-2.5">
          {product.highlights.map((item) => (
            <li key={item} className="rounded-full border border-white/30 bg-white/15 px-3.5 py-1.5 text-sm font-medium backdrop-blur-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProductBand({ product, imageRight }: { product: ShowcaseProduct; imageRight: boolean }) {
  const Icon = product.icon;
  const headingId = `${product.id}-heading`;

  return (
    <motion.article
      {...fadeUp}
      aria-labelledby={headingId}
      id={product.id}
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="grid lg:min-h-[560px] lg:grid-cols-2">
        <ProductVisual product={product} className={cn(imageRight && "lg:order-2")} />
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
          <div className={cn("mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg", product.gradient)}>
            <Icon aria-hidden="true" className="h-6 w-6 text-white" />
          </div>
          <h3 id={headingId} className="text-3xl font-bold text-slate-900 sm:text-4xl">{product.name}</h3>
          <p className="mt-2 text-base font-medium text-slate-500">{product.tagline}</p>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">{product.description}</p>
          <ul className="mt-7 grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-base text-slate-600">
                <span aria-hidden="true" className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br", product.gradient)}>
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-8"><ProductActions product={product} /></div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProductsPageContent() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 pb-20 pt-32 sm:pb-24 sm:pt-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Business Software for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Growing Businesses
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
              Manage finances, customers, teams and business operations with{" "}
              <span className="whitespace-nowrap">Infodra SaaS.</span>
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink href="#portfolio" size="lg" className="group">
                Explore Our Products
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink href={CONTACT_FORM_HREF} variant="outline" size="lg">
                <MessageCircle aria-hidden="true" className="h-5 w-5" />
                Talk to Our Team
              </ButtonLink>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="portfolio" aria-label="Infodra SaaS products" className="scroll-mt-20 bg-slate-50 py-16 sm:py-20">
        <h2 className="sr-only">Our products</h2>
        <div className="mx-auto max-w-[88rem] space-y-10 px-4 sm:px-6 lg:px-8">
          {SHOWCASE.map((product, index) => (
            <ProductBand key={product.id} product={product} imageRight={index % 2 === 0} />
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-3xl" />
        </div>
        <motion.div {...fadeUp} className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Find the Right Software for Your Business
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
            Tell us what your business needs, and our team will help you choose the right solution.
          </p>
          <ButtonLink href={CONTACT_FORM_HREF} size="lg" className="group">
            Contact Our Team
            <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </ButtonLink>
        </motion.div>
      </section>
    </>
  );
}
