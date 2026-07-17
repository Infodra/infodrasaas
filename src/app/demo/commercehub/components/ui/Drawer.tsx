"use client";

import { AnimatePresence, motion } from "framer-motion";

export function Drawer({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-40 bg-slate-950/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-label="Close drawer"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
            className="fixed right-0 top-0 z-50 h-screen w-full max-w-md overflow-y-auto border-l border-slate-200 bg-white/95 p-5 shadow-2xl dark:border-slate-800 dark:bg-slate-900/95"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
              <button
                type="button"
                className="rounded-xl border border-slate-300 px-2.5 py-1.5 text-xs dark:border-slate-700"
                onClick={onClose}
              >
                Close
              </button>
            </div>
            {children}
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
