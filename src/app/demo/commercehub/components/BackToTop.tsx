"use client";

import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 rounded-full bg-blue-600 p-3 text-white shadow-xl transition hover:bg-blue-700"
      aria-label="Back to top"
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}
