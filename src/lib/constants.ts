import type { Product, Testimonial, Feature, Stat, FAQ, Industry, NavLink } from "./types";

export const CONTACT_FORM_HREF = "/contact#contact-form";
export const WHATSAPP_HREF =
  "https://wa.me/919363753540?text=Hi%20Infodra%20Team%2C%20I%20need%20a%20demo%20for%20Infodra%20SaaS.%20Please%20share%20details.";

export const NAV_LINKS: NavLink[] = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
];

export const INFODRABOOK_FEATURE_GROUPS = [
  {
    title: "Billing & Payments",
    features: [
      "Estimates, Invoices & Payment Reminders",
      "Recurring Billing & Receivables",
      "Project Time Tracking & Billing",
      "Multi-Currency Transactions",
    ],
  },
  {
    title: "Accounting & Tax",
    features: [
      "Expense Tracking, Bills & Payables",
      "Bank Transactions & Reconciliation",
      "GST Accounting & E-Invoicing Workflows",
      "Inventory, Sales & Purchase Orders",
    ],
  },
  {
    title: "Reporting & Collaboration",
    features: [
      "Profit & Loss, Balance Sheet & Cash Flow",
      "Customer Portal & Accountant Access",
      "Workflow Automation & Approvals",
    ],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "workhub",
    name: "WorkHub",
    tagline: "Complete Employee Management",
    description:
      "Bring employee attendance, leave and work tracking into one workspace. Connect Microsoft 365, Teams activity and SharePoint so HR and operations can keep everyday workforce workflows organised.",
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
    image: "/images/saas/workhub.jpg",
    imageAlt: "A team collaborating around a table in a modern office",
    audience: "For HR and operations teams",
  },
  {
    id: "stafftrack",
    name: "StaffTrack",
    tagline: "Field Force & Attendance",
    description:
      "Give managers visibility into distributed field teams with GPS location tracking, attendance and timesheets. Employees can manage leave and everyday attendance through self-service workflows.",
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
    image: "/images/saas/stafftrack.jpg",
    imageAlt: "Field workers collaborating on a construction site",
    audience: "For field teams and site managers",
  },
  {
    id: "bizlead",
    name: "BizLead",
    tagline: "AI-Powered Lead Generation",
    description:
      "Move from prospect research to outreach-ready contacts with AI-assisted company discovery, contact verification and exports. Use lead analytics to focus your sales team's next steps.",
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
    image: "/images/saas/bizlead.jpg",
    imageAlt: "Business analytics and growth metrics on a laptop",
    audience: "For sales and growth teams",
  },
  {
    id: "ai-assistant",
    name: "AI Assistant",
    tagline: "Enterprise AI Copilot",
    description:
      "A planned enterprise copilot for searching documents, exploring your knowledge base and asking questions in chat. Designed to help teams find information and automate repeatable workflows.",
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
    image: "/images/saas/ai-assistant.jpg",
    imageAlt: "Robotics technology illustrating enterprise AI automation",
    audience: "For knowledge-driven teams",
  },
  {
    id: "crm",
    name: "Infodra CRM",
    tagline: "Connected Leads, Sales & Campaigns",
    description:
      "A planned sales workspace bringing LIST360-style lead capture, assignment, activity history and campaign workflows together with quotations, invoicing and customer management for growing businesses.",
    features: [
      "Lead Capture & Team Assignment",
      "Sales Pipeline & Contact Management",
      "Activity Timeline & Follow-up Tasks",
      "WhatsApp Campaign Workflows",
      "Quotations & Invoices",
      "Lead Source & Sales Analytics",
    ],
    icon: "BarChart3",
    gradient: "from-cyan-600 to-blue-600",
    status: "coming-soon",
    href: "https://www.crm.infodrasaas.com",
    image: "/images/saas/crm.jpg",
    imageAlt: "Sales colleagues planning customer relationships and next steps",
    audience: "For sales and customer success teams",
  },
  {
    id: "list360",
    name: "List360 Business",
    tagline: "Real Estate, Connected",
    description:
      "A real estate SaaS platform for agents, brokers, builders and channel partners. Publish properties on LIST360, capture buyer and tenant enquiries in your CRM, and turn conversations into site visits.",
    features: [
      "Property Listings on list360.in",
      "Lead Capture & Team Assignment",
      "Deal Pipeline & Activity History",
      "Official WhatsApp Business Campaigns",
      "Approved Templates & Scheduled Sends",
      "Delivery, Read & Lead Source Tracking",
    ],
    icon: "Building2",
    gradient: "from-emerald-600 to-teal-600",
    status: "live",
    href: "https://www.list360.in/business",
    image: "/images/saas/list360.jpg",
    imageAlt: "A modern residential property with landscaped outdoor space",
    audience: "For agents, brokers and developers",
  },
  {
    id: "infodrabook",
    name: "InfodraBook",
    tagline: "Cloud Accounting & Business Finance",
    description:
      "A planned cloud accounting workspace for small businesses and finance teams. Bring invoicing, expenses, banking, inventory and financial reporting together to manage everyday finances and understand your cash flow.",
    features: INFODRABOOK_FEATURE_GROUPS.flatMap((group) => group.features),
    icon: "BookOpen",
    gradient: "from-blue-600 to-indigo-600",
    status: "coming-soon",
    href: CONTACT_FORM_HREF,
    image: "/images/saas/infodrabook.jpg",
    imageAlt: "Business professionals reviewing financial paperwork at a desk",
    audience: "For business owners, accountants and finance teams",
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
  { name: "Microsoft Teams", image: "/images/integrations/teams.svg", description: "Bring workforce updates into team collaboration.", color: "#6264A7" },
  { name: "Outlook", image: "/images/integrations/outlook.svg", description: "Connect email and everyday communication.", color: "#0078D4" },
  { name: "SharePoint", image: "/images/integrations/sharepoint.svg", description: "Keep business documents and knowledge connected.", color: "#0078D4" },
  { name: "OneDrive", image: "/images/integrations/onedrive.svg", description: "Connect your team's cloud files and resources.", color: "#0078D4" },
  { name: "Azure", image: "/images/integrations/azure.svg", description: "Extend your enterprise cloud ecosystem.", color: "#0078D4" },
  { name: "Google Workspace", image: "/images/integrations/google-workspace.svg", description: "Connect the productivity tools your team uses.", color: "#4285F4" },
  { name: "Slack", image: "/images/integrations/slack.svg", description: "Bring timely updates into your team channels.", color: "#4A154B" },
  { name: "WhatsApp", image: "/images/integrations/whatsapp.svg", description: "Engage opted-in leads with approved campaigns.", color: "#25D366" },
  { name: "REST APIs", image: "/images/integrations/rest-api.svg", description: "Build tailored connections to business systems.", color: "#6366F1" },
];

export const INDUSTRIES: Industry[] = [
  { name: "Real Estate", icon: "Building2", image: "/images/saas/list360.jpg", imageAlt: "Modern residential real estate", description: "Connect property listings, buyer enquiries and campaigns with List360 Business." },
  { name: "Manufacturing", icon: "Factory", image: "/images/saas/manufacturing.jpg", imageAlt: "Industrial production equipment on a factory floor", description: "Coordinate workforce attendance and operations across production sites." },
  { name: "Engineering", icon: "Wrench", image: "/images/saas/engineering.jpg", imageAlt: "An engineer working with technical equipment", description: "Keep project teams, work tracking and shared knowledge in sync." },
  { name: "Construction", icon: "Building2", image: "/images/saas/stafftrack.jpg", imageAlt: "Construction professionals working on site", description: "Manage field attendance and location visibility across active sites." },
  { name: "Healthcare", icon: "HeartPulse", image: "/images/saas/healthcare.jpg", imageAlt: "Healthcare professionals reviewing information together", description: "Simplify staff coordination and day-to-day administrative workflows." },
  { name: "Education", icon: "GraduationCap", image: "/images/saas/education.jpg", imageAlt: "Students learning in a classroom", description: "Bring staff management, collaboration and institutional knowledge together." },
  { name: "Logistics", icon: "Truck", image: "/images/saas/logistics.jpg", imageAlt: "A warehouse with stocked storage aisles", description: "Track distributed teams and keep field operations moving." },
  { name: "Retail", icon: "ShoppingBag", image: "/images/saas/retail.jpg", imageAlt: "A contemporary retail store interior", description: "Connect store teams, customer relationships and sales opportunities." },
  { name: "Professional Services", icon: "Briefcase", image: "/images/saas/workhub.jpg", imageAlt: "Professional services colleagues collaborating", description: "Organise people, client pipelines and productivity in one SaaS portfolio." },
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
      "Infodra SaaS is a portfolio of cloud applications for workforce management (WorkHub and StaffTrack), AI-powered lead generation (BizLead), and real estate listings, CRM and WhatsApp campaigns (List360 Business). AI Assistant, Infodra CRM and InfodraBook, our planned cloud accounting product, are coming soon. Integrations and deployment options vary by product.",
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
