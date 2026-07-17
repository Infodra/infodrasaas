"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Squares2X2Icon,
  CubeIcon,
  TagIcon,
  ShoppingCartIcon,
  UsersIcon,
  ArchiveBoxIcon,
  TicketIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const nav = [
  { href: "/demo/commercehub/admin", label: "Dashboard", icon: Squares2X2Icon },
  { href: "/demo/commercehub/admin/products", label: "Products", icon: CubeIcon },
  { href: "/demo/commercehub/admin/categories", label: "Categories", icon: TagIcon },
  { href: "/demo/commercehub/admin/orders", label: "Orders", icon: ShoppingCartIcon },
  { href: "/demo/commercehub/admin/customers", label: "Customers", icon: UsersIcon },
  { href: "/demo/commercehub/admin/inventory", label: "Inventory", icon: ArchiveBoxIcon },
  { href: "/demo/commercehub/admin/coupons", label: "Coupons", icon: TicketIcon },
  { href: "/demo/commercehub/admin/reports", label: "Reports", icon: ChartBarSquareIcon },
  { href: "/demo/commercehub/admin/ai", label: "AI Commerce", icon: SparklesIcon },
  { href: "/demo/commercehub/admin/settings", label: "Settings", icon: Cog6ToothIcon },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="rounded-3xl border border-slate-200 bg-white/90 p-4 dark:border-slate-800 dark:bg-slate-900/90">
      <p className="mb-4 text-xs uppercase tracking-[0.24em] text-slate-500">Admin Panel</p>
      <nav className="space-y-1">
        {nav.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <button type="button" className="mt-5 flex w-full items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
        <ArrowLeftStartOnRectangleIcon className="h-4 w-4" />
        Logout
      </button>
    </aside>
  );
}
