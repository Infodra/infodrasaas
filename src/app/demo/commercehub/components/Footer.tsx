import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">CommerceHub Demo</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">A premium, frontend-only e-commerce SaaS demonstration.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Store</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><Link href="/demo/commercehub/products">Products</Link></li>
            <li><Link href="/demo/commercehub/wishlist">Wishlist</Link></li>
            <li><Link href="/demo/commercehub/cart">Cart</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Company</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><Link href="/demo/commercehub/about">About</Link></li>
            <li><Link href="/demo/commercehub/contact">Contact</Link></li>
            <li><Link href="/demo/commercehub/dashboard">User Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Admin Demo</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-500 dark:text-slate-400">
            <li><Link href="/demo/commercehub/admin">Dashboard</Link></li>
            <li><Link href="/demo/commercehub/admin/products">Product Management</Link></li>
            <li><Link href="/demo/commercehub/admin/reports">Reports</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
        CommerceHub Demo © 2026. Built with Next.js 15, TypeScript and Tailwind CSS.
      </div>
    </footer>
  );
}
