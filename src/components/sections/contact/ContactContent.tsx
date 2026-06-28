"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Phone, Mail, Clock, MessageCircle,
  Send, CheckCircle2, ChevronDown, Building2,
  ExternalLink,
} from "lucide-react";

/* ─── Contact Info Data ──────────────────────────────────────────── */

const INFO_CARDS = [
  {
    icon: Building2,
    label: "Company",
    title: "Infodra Technologies Private Limited",
    lines: [],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: MapPin,
    label: "Address",
    title: "Innov8, 2nd Floor, Campus 1",
    lines: [
      "RMZ Millenia Business Park",
      "No.143, Dr.M.G.R.Road",
      "Perungudi, Chennai – 600096",
    ],
    gradient: "from-emerald-500 to-teal-600",
    action: {
      label: "View on Map",
      href: "https://maps.google.com/maps?q=ARMZ+Millenia+Business+Park+Perungudi+Chennai+600096",
    },
  },
  {
    icon: Phone,
    label: "Phone",
    title: "+91 93637 53540",
    lines: ["Available Mon–Sat"],
    gradient: "from-violet-500 to-purple-600",
    action: { label: "Call Now", href: "tel:+919363753540" },
  },
  {
    icon: Mail,
    label: "Email",
    title: "info@infodra.in",
    lines: ["We respond within 24 hours"],
    gradient: "from-orange-500 to-rose-600",
    action: { label: "Send Email", href: "mailto:info@infodra.in" },
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    title: "Chat on WhatsApp",
    lines: ["+91 93637 53540"],
    gradient: "from-green-500 to-emerald-600",
    action: {
      label: "Open WhatsApp",
      href: "https://wa.me/919363753540?text=Hi%20Infodra%20Team%2C%20I%20need%20a%20demo%20for%20Infodra%20SaaS.%20Please%20share%20details.",
    },
  },
  {
    icon: Clock,
    label: "Business Hours",
    title: "Monday – Friday",
    lines: ["9:00 AM – 6:00 PM IST", "Saturday: 10:00 AM – 4:00 PM IST", "Sunday: Closed"],
    gradient: "from-cyan-500 to-blue-600",
  },
];

/* ─── FAQ Data ───────────────────────────────────────────────────── */

const CONTACT_FAQS = [
  {
    question: "How long does it take to get a response?",
    answer:
      "We aim to respond to all enquiries within 24 hours on business days. For urgent matters, you can reach us directly via phone (+91 93637 53540) or WhatsApp for a faster response.",
  },
  {
    question: "Which products are best for my business?",
    answer:
      "It depends on your business size and challenges. WorkHub and StaffTrack are ideal for companies managing employees or field teams. BizLead suits sales-focused teams. Our AI Assistant and CRM are great for digital transformation. Book a demo and our team will recommend the right fit.",
  },
  {
    question: "Do you offer trial periods or demos?",
    answer:
      "Yes! We offer live product demos tailored to your business context. After the demo, we can arrange a pilot deployment for eligible enterprise clients. Reach out via the form or WhatsApp to book a session.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We offer flexible subscription plans — monthly and annual. Enterprise clients can opt for custom billing arrangements. All pricing is transparent with no hidden fees. Contact our sales team for a detailed quote.",
  },
];

/* ─── Sub-components ─────────────────────────────────────────────── */

function InfoCard({
  card,
  index,
}: {
  card: (typeof INFO_CARDS)[0];
  index: number;
}) {
  const Icon = card.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group flex flex-col gap-3 p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:border-slate-300 transition-all duration-300"
    >
      <div
        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-md shrink-0`}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
          {card.label}
        </p>
        <p className="text-slate-900 font-semibold text-sm leading-snug">{card.title}</p>
        {card.lines.map((line) => (
          <p key={line} className="text-slate-500 text-sm mt-0.5">
            {line}
          </p>
        ))}
      </div>
      {card.action && (
        <a
          href={card.action.href}
          target={card.action.href.startsWith("http") ? "_blank" : undefined}
          rel={card.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={`mt-auto inline-flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
        >
          {card.action.label}
          <ExternalLink className="w-3 h-3 text-blue-500" />
        </a>
      )}
    </motion.div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-16 px-6"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Message Sent!
        </h3>
        <p className="text-slate-500 mb-6 max-w-xs">
          Thank you for reaching out. Our team will get back to you within 24
          hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", phone: "", service: "", message: "" });
          }}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium underline underline-offset-2"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Email <span className="text-rose-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 XXXXX XXXXX"
            value={form.phone}
            onChange={handleChange}
            className={inputBase}
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Service Interest
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`${inputBase} appearance-none pr-10 cursor-pointer`}
            >
              <option value="">Select a service</option>
              <option value="Engineering">Engineering</option>
              <option value="Technology">Technology</option>
              <option value="Staffing">Staffing</option>
              <option value="WorkHub">WorkHub – Workforce Management</option>
              <option value="StaffTrack">StaffTrack – GPS Attendance</option>
              <option value="BizLead">BizLead – Lead Generation</option>
              <option value="AI Assistant">AI Assistant</option>
              <option value="CRM">CRM</option>
              <option value="Other">Other / General Enquiry</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Message <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, team size, or any questions you have…"
          value={form.message}
          onChange={handleChange}
          className={`${inputBase} resize-none`}
        />
      </div>

      <p className="text-xs text-slate-400">
        <span className="text-rose-500">*</span> Required fields
      </p>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
      >
        {loading ? (
          <>
            <svg
              className="w-4 h-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

function FAQItem({
  faq,
  index,
}: {
  faq: (typeof CONTACT_FAQS)[0];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-slate-200 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-slate-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-900 text-sm leading-snug">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center"
        >
          <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="px-5 pb-5 bg-white">
              <div className="h-px bg-slate-100 mb-4" />
              <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main ContactContent ────────────────────────────────────────── */

export function ContactContent() {
  return (
    <div className="bg-slate-50">
      {/* Info cards */}
      <section className="py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INFO_CARDS.map((card, i) => (
              <InfoCard key={card.label} card={card} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Map — full width */}
      <section className="py-10 pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Find Us on the Map</h2>
                <p className="text-slate-500 text-sm mt-0.5">
                  Innov8, ARMZ Millenia Business Park, No.143, Dr.M.G.R.Road, Perungudi, Chennai – 600096
                </p>
              </div>
              <a
                href="https://maps.google.com/maps?q=ARMZ+Millenia+Business+Park+Perungudi+Chennai+600096"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-semibold shrink-0"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="h-[420px] w-full">
              <iframe
                title="Infodra Technologies Location"
                src="https://maps.google.com/maps?q=ARMZ+Millenia+Business+Park+No.143+Dr+MGR+Road+Perungudi+Chennai+600096&output=embed&z=15"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form + Quick Contact — side by side */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
            >
              <div className="p-7 border-b border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900">
                  Send Us a Message
                </h2>
                <p className="text-slate-500 text-sm mt-1">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>
              <div className="p-7">
                <ContactForm />
              </div>
            </motion.div>

            {/* Quick contact strip */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm p-7 h-full"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Prefer to reach out directly?
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                Skip the form — connect with our team instantly via your preferred channel.
              </p>
              <div className="space-y-4">
                <a
                  href="https://wa.me/919363753540?text=Hi%20Infodra%20Team%2C%20I%20need%20a%20demo%20for%20Infodra%20SaaS.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 hover:bg-green-100 border border-green-200 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-500 flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-800">Chat on WhatsApp</div>
                    <div className="text-xs text-slate-500 mt-0.5">+91 93637 53540 · Instant reply</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>

                <a
                  href="tel:+919363753540"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500 flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-800">Call Us</div>
                    <div className="text-xs text-slate-500 mt-0.5">+91 93637 53540 · Mon–Fri 9AM–6PM IST</div>
                  </div>
                </a>

                <a
                  href="mailto:info@infodra.in"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-orange-50 hover:bg-orange-100 border border-orange-200 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center shrink-0 shadow-sm">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-800">Email Us</div>
                    <div className="text-xs text-slate-500 mt-0.5">info@infodra.in · Reply within 24 hrs</div>
                  </div>
                </a>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Business Hours</p>
                  <div className="space-y-1.5 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Monday – Friday</span>
                      <span className="font-medium text-slate-800">9:00 AM – 6:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium text-slate-800">10:00 AM – 4:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium text-red-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-blue-600 mb-2">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-3">
            {CONTACT_FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
