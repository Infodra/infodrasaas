"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02]",
      secondary:
        "bg-white text-slate-900 hover:bg-slate-50 shadow-sm border border-slate-200 hover:scale-[1.02]",
      ghost: "text-slate-700 hover:bg-slate-100",
      outline:
        "border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm hover:scale-[1.02]",
    };

    const sizes = {
      sm: "text-sm px-4 py-2",
      md: "text-sm px-5 py-2.5",
      lg: "text-base px-7 py-3.5",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
