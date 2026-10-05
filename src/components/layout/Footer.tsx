"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Products: PRODUCTS.map((product) => ({
    label: product.name,
    href: product.status === "live" && product.href.startsWith("https://")
      ? product.href
      : `/#${product.id}`,
  })),
  Solutions: [
    { label: "Manufacturing", href: "#" },
    { label: "Construction", href: "#" },
    { label: "Healthcare", href: "#" },
    { label: "Enterprise", href: "#" },
    { label: "Startups", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  Demo: [
    { label: "Recruitment Portal", href: "/demo/recruitment" },
    { label: "CommerceHub", href: "/demo/commercehub" },
  ],
};

const social = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@infodra.com" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      {/* Newsletter bar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold text-lg">Stay in the loop</h3>
              <p className="text-slate-400 text-sm mt-1">
                Product updates, industry insights, and no spam.
              </p>
            </div>
            <form
              className="flex gap-2 w-full md:w-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors flex items-center gap-1.5 shrink-0"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" aria-label="Infodra SaaS home" className="block mb-4 w-fit">
              <Image
                src="/infodra-brand-technologies.png"
                alt="Infodra - Software as a Service"
                width={220}
                height={83}
                className="h-auto w-52"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
              SaaS products for workforce management, lead generation, real estate,
              accounting, customer relationships and AI automation. Built for modern businesses.
            </p>
            <div className="flex gap-3">
              {social.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Infodra Technologies Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-500 hover:text-white text-xs transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
