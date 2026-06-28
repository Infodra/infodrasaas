import type { Product, Testimonial, Feature, Stat, FAQ, Industry, NavLink } from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
];

export const PRODUCTS: Product[] = [
  {
    id: "workhub",
    name: "WorkHub",
    tagline: "Complete Employee Management",
    description:
      "Unified workforce management platform deeply integrated with Microsoft 365 ecosystem.",
    features: [
      "Employee Attendance",
      "Work Tracking",
      "Leave Management",
      "Microsoft 365 Integration",
      "SharePoint Integration",
      "Teams Activity",
      "Attendance Dashboard",
    ],
    icon: "Users",
    gradient: "from-blue-600 to-indigo-600",
    status: "live",
    href: "#",
  },
  {
    id: "stafftrack",
    name: "StaffTrack",
    tagline: "Field Force & Attendance",
    description:
      "Real-time GPS field workforce tracking with attendance and timesheet management.",
    features: [
      "GPS Tracking",
      "Attendance",
      "Leave",
      "Timesheets",
      "Location Tracking",
      "Employee Self Service",
    ],
    icon: "MapPin",
    gradient: "from-emerald-600 to-teal-600",
    status: "live",
    href: "#",
  },
  {
    id: "bizlead",
    name: "BizLead",
    tagline: "AI-Powered Lead Generation",
    description:
      "Discover, verify, and export targeted business leads powered by AI intelligence.",
    features: [
      "AI Lead Generation",
      "Company Database",
      "Contact Discovery",
      "Lead Verification",
      "Export",
      "Analytics",
    ],
    icon: "Zap",
    gradient: "from-violet-600 to-purple-600",
    status: "live",
    href: "#",
  },
  {
    id: "ai-assistant",
    name: "AI Assistant",
    tagline: "Enterprise AI Copilot",
    description:
      "Intelligent enterprise assistant with document search, knowledge base, and workflow automation.",
    features: [
      "Enterprise AI Assistant",
      "Document Search",
      "Knowledge Base",
      "Chat",
      "Automation",
    ],
    icon: "Bot",
    gradient: "from-orange-600 to-rose-600",
    status: "coming-soon",
    href: "#",
  },
  {
    id: "crm",
    name: "CRM",
    tagline: "Sales & Customer Success",
    description:
      "End-to-end CRM with pipeline management, invoicing, and customer relationship tools.",
    features: [
      "Sales Pipeline",
      "Customer Management",
      "Quotations",
      "Tasks",
      "Invoices",
    ],
    icon: "BarChart3",
    gradient: "from-cyan-600 to-blue-600",
    status: "coming-soon",
    href: "#",
  },
];

export const FEATURES: Feature[] = [
  {
    id: "security",
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, SOC 2 compliance, and role-based access control to keep your data safe.",
    icon: "Shield",
  },
  {
    id: "m365",
    title: "Microsoft 365 Integration",
    description:
      "Deep native integration with Teams, SharePoint, Outlook, and the full Microsoft Graph API.",
    icon: "Grid3x3",
  },
  {
    id: "cloud",
    title: "Cloud Hosted",
    description:
      "Fully managed cloud infrastructure on Azure with automatic scaling and zero maintenance.",
    icon: "Cloud",
  },
  {
    id: "ai",
    title: "AI Powered",
    description:
      "Embedded AI features across every product — from smart suggestions to workflow automation.",
    icon: "Sparkles",
  },
  {
    id: "scalable",
    title: "Scalable Architecture",
    description:
      "Microservices-based architecture built to scale from 10 to 100,000 users without refactoring.",
    icon: "Layers",
  },
  {
    id: "api",
    title: "API First",
    description:
      "Every feature is accessible via REST API with comprehensive documentation and SDKs.",
    icon: "Code2",
  },
];

export const TECH_STACK = [
  { name: "Next.js", color: "#000000" },
  { name: "FastAPI", color: "#009688" },
  { name: "Python", color: "#3776AB" },
  { name: "React", color: "#61DAFB" },
  { name: "Microsoft 365", color: "#D83B01" },
  { name: "MS Graph", color: "#00A4EF" },
  { name: "SharePoint", color: "#0078D4" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Azure", color: "#0078D4" },
  { name: "Cloudflare", color: "#F48120" },
  { name: "Docker", color: "#2496ED" },
  { name: "Vercel", color: "#000000" },
];

export const INTEGRATIONS = [
  { name: "Microsoft Teams", icon: "MessageSquare", color: "#6264A7" },
  { name: "Outlook", icon: "Mail", color: "#0078D4" },
  { name: "SharePoint", icon: "Globe", color: "#0078D4" },
  { name: "OneDrive", icon: "HardDrive", color: "#0078D4" },
  { name: "Azure", icon: "Cloud", color: "#0078D4" },
  { name: "Google Workspace", icon: "Briefcase", color: "#4285F4" },
  { name: "Slack", icon: "Hash", color: "#4A154B" },
  { name: "WhatsApp", icon: "MessageCircle", color: "#25D366" },
  { name: "REST APIs", icon: "Code2", color: "#6366F1" },
];

export const INDUSTRIES: Industry[] = [
  { name: "Manufacturing", icon: "Factory" },
  { name: "Engineering", icon: "Wrench" },
  { name: "Construction", icon: "Building2" },
  { name: "Healthcare", icon: "HeartPulse" },
  { name: "Education", icon: "GraduationCap" },
  { name: "Logistics", icon: "Truck" },
  { name: "Retail", icon: "ShoppingBag" },
  { name: "Professional Services", icon: "Briefcase" },
];

export const STATS: Stat[] = [
  { label: "Uptime SLA", value: "99.9", suffix: "%" },
  { label: "Enterprise Security", value: "SOC 2", suffix: "" },
  { label: "Support", value: "24×7", suffix: "" },
  { label: "Cloud Ready", value: "100", suffix: "%" },
  { label: "Deployment", value: "Fast", suffix: "" },
  { label: "Architecture", value: "Scalable", suffix: "" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    role: "CTO",
    company: "Precision Engineering Ltd.",
    content:
      "WorkHub transformed how we manage 500+ employees across 12 sites. The Microsoft Teams integration is seamless and the attendance dashboard gives us real-time visibility we never had before.",
    avatar: "RK",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Operations Director",
    company: "BuildTech Constructions",
    content:
      "StaffTrack's GPS tracking helped us reduce ghost attendance by 90%. The mobile app is intuitive, and the reports save our HR team 20+ hours every week.",
    avatar: "PS",
    rating: 5,
  },
  {
    id: "3",
    name: "Arjun Mehta",
    role: "Sales Head",
    company: "GrowthFirst Solutions",
    content:
      "BizLead's AI-powered lead discovery is unlike anything I've used. We generated 3× more qualified leads in the first month. The contact verification alone paid for the subscription.",
    avatar: "AM",
    rating: 5,
  },
];

export const FAQS: FAQ[] = [
  {
    question: "What is Infodra SaaS?",
    answer:
      "Infodra SaaS is a suite of enterprise-grade cloud applications built for modern businesses — covering workforce management (WorkHub, StaffTrack), AI-powered lead generation (BizLead), CRM, and an AI Assistant. All products are built on a secure, scalable, cloud-native architecture with deep Microsoft 365 integration.",
  },
  {
    question: "Can I request custom development?",
    answer:
      "Yes. We offer custom module development, white-labeling, and bespoke integrations tailored to your business processes. Our engineering team works closely with clients to build and deploy custom features within agreed timelines.",
  },
  {
    question: "Do you provide deployment support?",
    answer:
      "Absolutely. We provide full onboarding, configuration, and deployment support. Our products are cloud-hosted and fully managed — no infrastructure setup needed on your side. For enterprise deployments, we assign a dedicated implementation engineer.",
  },
  {
    question: "Do you offer API integration?",
    answer:
      "Every Infodra SaaS product is API-first. We expose comprehensive REST APIs with detailed documentation, SDKs, and webhook support — enabling you to integrate with your existing ERP, HRMS, or any third-party tool.",
  },
  {
    question: "How secure are the applications?",
    answer:
      "Security is foundational to every product we build. All data is encrypted at rest and in transit (AES-256 / TLS 1.3). We follow OWASP security guidelines, implement role-based access control, audit logging, and host on Microsoft Azure with geo-redundant backups.",
  },
];

export const TRUSTED_COMPANIES = [
  "Acme Corp",
  "TechFlow Inc",
  "BuildBase Ltd",
  "NovaCraft",
  "PrecisionX",
  "DataForge",
];
