"use client";

import { motion } from "framer-motion";
import type { Offer } from "../lib/types";

export function OfferBanner({ offer }: { offer: Offer }) {
  const timeLeft = Math.max(0, new Date(offer.endsAt).getTime() - Date.now());
  const hours = Math.floor(timeLeft / (1000 * 60 * 60));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-600 to-slate-900 p-5 text-white shadow-2xl"
    >
      <p className="text-xs uppercase tracking-[0.24em] text-blue-100">Flash Sale Banner</p>
      <h3 className="mt-1 text-2xl font-bold">{offer.title}</h3>
      <p className="mt-1 text-sm text-blue-100">{offer.description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
        <span className="rounded-xl bg-white/15 px-3 py-1 font-semibold">Code: {offer.code}</span>
        <span className="rounded-xl bg-teal-400/20 px-3 py-1">Ends in {hours}h</span>
      </div>
    </motion.div>
  );
}
