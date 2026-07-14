"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [autoScreen, setAutoScreen] = useState(false);
  const [publicForm, setPublicForm] = useState(true);

  return (
    <div className="space-y-6 pb-8">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Settings</p>
        <h2 className="text-2xl font-semibold text-white">Portal Preferences</h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {[{
          label: "Email Alerts",
          desc: "Notify recruiters for new applications.",
          value: emailAlerts,
          set: setEmailAlerts,
        }, {
          label: "Auto Screening",
          desc: "Apply AI-based scoring rules to incoming profiles.",
          value: autoScreen,
          set: setAutoScreen,
        }, {
          label: "Public Application Form",
          desc: "Allow candidates to submit from public job links.",
          value: publicForm,
          set: setPublicForm,
        }].map((item) => (
          <article key={item.label} className="rounded-3xl border border-white/10 bg-slate-900/60 p-5 shadow-xl shadow-black/20 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-white">{item.label}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
              </div>
              <button
                type="button"
                onClick={() => item.set(!item.value)}
                className={`h-7 w-12 rounded-full p-1 transition ${item.value ? "bg-brand-500" : "bg-slate-600"}`}
              >
                <span className={`block h-5 w-5 rounded-full bg-white transition ${item.value ? "translate-x-5" : "translate-x-0"}`} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
