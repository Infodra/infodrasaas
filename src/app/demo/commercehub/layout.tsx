import type { Metadata } from "next";
import { CommerceHubProvider } from "./hooks/useCommerceHubState";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { commerceHubStructuredData } from "./lib/schema";

export const metadata: Metadata = {
  title: "CommerceHub Demo | Modern E-Commerce Platform",
  description:
    "A premium frontend-only e-commerce SaaS demo built with Next.js 15, TypeScript, and Tailwind CSS.",
  openGraph: {
    title: "CommerceHub Demo | Modern E-Commerce Platform",
    description:
      "Premium shopping experience powered by modern web technologies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CommerceHub Demo | Modern E-Commerce Platform",
    description:
      "Premium shopping experience powered by modern web technologies.",
  },
};

export default function CommerceHubLayout({ children }: { children: React.ReactNode }) {
  const schema = commerceHubStructuredData();

  return (
    <CommerceHubProvider>
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.13),_transparent_36%),linear-gradient(180deg,#ffffff_0%,#f8fafc_48%,#eef2ff_100%)] text-slate-900 transition-colors dark:bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.18),_transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_48%,#111827_100%)] dark:text-slate-100">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Navbar />
        <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6">{children}</main>
        <Footer />
        <BackToTop />
      </div>
    </CommerceHubProvider>
  );
}
