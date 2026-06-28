import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Infodra SaaS – AI-Powered SaaS Solutions for Modern Businesses",
  description:
    "Deploy enterprise-ready SaaS applications for workforce management, lead generation, AI automation, productivity, and digital transformation.",
  keywords: [
    "SaaS",
    "AI automation",
    "workforce management",
    "lead generation",
    "Microsoft 365",
    "enterprise software",
    "Infodra",
  ],
  authors: [{ name: "Infodra Technologies" }],
  creator: "Infodra Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saas.infodra.com",
    siteName: "Infodra SaaS",
    title: "Infodra SaaS – AI-Powered SaaS Solutions for Modern Businesses",
    description:
      "Deploy enterprise-ready SaaS applications for workforce management, lead generation, AI automation, productivity, and digital transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infodra SaaS – AI-Powered SaaS Solutions for Modern Businesses",
    description:
      "Deploy enterprise-ready SaaS applications for workforce management, lead generation, AI automation, productivity, and digital transformation.",
    creator: "@infodra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
