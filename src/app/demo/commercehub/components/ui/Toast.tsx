"use client";

import { AnimatePresence, motion } from "framer-motion";

export function Toast({ show, message }: { show: boolean; message: string }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-5 right-5 z-50 rounded-2xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 shadow-xl"
        >
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
