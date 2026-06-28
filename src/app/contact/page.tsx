import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactContent } from "@/components/sections/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us – Infodra SaaS",
  description:
    "Get in touch with Infodra Technologies. Reach us for demos, custom development, deployment support, or general enquiries.",
  openGraph: {
    title: "Contact Infodra Technologies | Get in Touch",
    description:
      "Reach out to the Infodra team for SaaS demos, enterprise enquiries, or custom development.",
    url: "https://saas.infodra.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
