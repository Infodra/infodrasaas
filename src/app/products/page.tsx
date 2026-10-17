import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/layout/WhatsAppCTA";
import { ProductsPageContent } from "@/components/sections/products/ProductsPageContent";

export const metadata: Metadata = {
  title: "Products – Business Software for Growing Businesses | Infodra SaaS",
  description:
    "Explore Infodra SaaS products for accounting, CRM, AI assistance, payroll, work management, field tracking, real estate, business cards and lead discovery.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Infodra SaaS Products – Business Software for Growing Businesses",
    description:
      "Manage finances, customers, teams and business operations with Infodra SaaS.",
    url: "https://www.infodrasaas.com/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductsPageContent />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
}
