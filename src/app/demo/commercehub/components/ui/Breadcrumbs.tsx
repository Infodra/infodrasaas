import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={item.label} className="flex items-center gap-1">
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-slate-800 dark:hover:text-slate-200">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-slate-800 dark:text-slate-200" : ""}>{item.label}</span>
            )}
            {!isLast ? <ChevronRightIcon className="h-3 w-3" /> : null}
          </div>
        );
      })}
    </nav>
  );
}
