import Link from "next/link";
import { categories, brands, offers, products, reviews } from "./lib/data";
import { CategoryCard } from "./components/CategoryCard";
import { ProductCard } from "./components/ProductCard";
import { OfferBanner } from "./components/OfferBanner";
import { RecentlyViewed } from "./components/RecentlyViewed";

const heroShortcuts = [
  { label: "Premium Catalog", href: "/demo/commercehub/products" },
  { label: "Smart Filters", href: "/demo/commercehub/products" },
  { label: "Realtime Cart", href: "/demo/commercehub/cart" },
  { label: "Admin Insights", href: "/demo/commercehub/admin" },
];

const testimonials = [
  {
    name: "Priyanka Sharma",
    role: "Procurement Lead, Astera Group",
    quote: "CommerceHub helped us demonstrate a premium digital commerce journey to enterprise clients in days.",
  },
  {
    name: "Vivek Arora",
    role: "Head of Digital, Nexa Retail",
    quote: "The UI feels polished and modern. Perfect for pitching product strategy and user experience.",
  },
  {
    name: "Anjali Menon",
    role: "CX Director, NovaCommerce",
    quote: "A strong SaaS-grade storefront with data-driven admin views, exactly what our stakeholders needed.",
  },
];

const faqs = [
  { q: "Is this production-ready backend?", a: "No. This is a frontend-only demo for client presentations and UX validation." },
  { q: "Can this connect to real APIs?", a: "Yes. The architecture is componentized and can be integrated with backend services." },
  { q: "Does it support responsive devices?", a: "Yes. Desktop, tablet and mobile are fully supported with adaptive layouts." },
];

export default function CommerceHubHomePage() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4);
  const bestSellers = products.filter((product) => product.bestSeller).slice(0, 4);
  const trending = products.filter((product) => product.trending).slice(0, 4);

  return (
    <div className="space-y-16 pb-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/85 p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900/75 md:p-12">
        <div className="pointer-events-none absolute -right-28 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-blue-700 dark:text-blue-300">CommerceHub Demo</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              Modern E-Commerce Platform
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              A premium shopping experience powered by modern web technologies.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#todays-deals" className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                Explore Products
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/40 bg-gradient-to-br from-blue-600 to-slate-900 p-6 text-white shadow-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-blue-100">3D shopping illustration</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {heroShortcuts.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl border border-white/20 bg-white/10 px-3 py-4 text-center text-sm font-medium transition hover:bg-white/18 hover:shadow-lg"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <OfferBanner offer={offers[0]} />

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Categories</h2>
          <Link href="/demo/commercehub/products" className="text-sm font-semibold text-blue-700 dark:text-blue-300">See all</Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 8).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section id="todays-deals">
        <h2 className="mb-4 text-2xl font-bold">Today&apos;s Deals</h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Trending Products</h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {trending.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Featured Brands</h2>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div key={brand.id} className="rounded-2xl border border-slate-200 bg-white/80 px-3 py-6 text-center text-sm font-semibold dark:border-slate-800 dark:bg-slate-900/70">
              {brand.name}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Best Sellers</h2>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <RecentlyViewed />

      <section>
        <h2 className="mb-4 text-2xl font-bold">Customer Reviews</h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review) => (
            <article key={review.id} className="rounded-3xl border border-slate-200 bg-white/85 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/80">
              <p className="text-sm text-slate-600 dark:text-slate-300">"{review.comment}"</p>
              <p className="mt-4 text-sm font-semibold">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="text-2xl font-bold">Customer Testimonials</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-sm text-slate-600 dark:text-slate-300">"{item.quote}"</p>
              <p className="mt-3 text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-slate-500">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-600 to-slate-900 p-7 text-white shadow-2xl">
        <h2 className="text-2xl font-bold">Newsletter</h2>
        <p className="mt-2 text-sm text-blue-100">Get product updates, campaign drops and premium offers.</p>
        <form className="mt-4 flex flex-col gap-2 sm:flex-row">
          <input className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm placeholder:text-blue-100/80 focus:outline-none" placeholder="Enter your business email" />
          <button className="rounded-xl bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-600">Subscribe</button>
        </form>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">FAQ</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <article key={faq.q} className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-slate-800 dark:bg-slate-900/70">
              <p className="font-semibold">{faq.q}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900/80">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Demo Modules</p>
            <h2 className="text-2xl font-bold">Explore The New Pages</h2>
            <p className="mt-1 text-sm text-slate-500">Customer journeys and admin modules are now available across the CommerceHub demo.</p>
          </div>
          <Link href="/demo/commercehub/admin" className="text-sm font-semibold text-blue-700 dark:text-blue-300">Open Admin Dashboard</Link>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "Product Catalog", href: "/demo/commercehub/products", description: "Search, filters, grid and list views." },
            { title: "Shopping Cart", href: "/demo/commercehub/cart", description: "Coupons, totals and checkout flow." },
            { title: "User Account", href: "/demo/commercehub/dashboard", description: "Profile, orders, addresses and settings." },
            { title: "Order History", href: "/demo/commercehub/orders", description: "Track past orders and invoice actions." },
            { title: "Admin Products", href: "/demo/commercehub/admin/products", description: "Product table, filters and add product form." },
            { title: "Admin Categories", href: "/demo/commercehub/admin/categories", description: "Category table and create category page." },
            { title: "Inventory & Coupons", href: "/demo/commercehub/admin/inventory", description: "Stock visibility, alerts and promo operations." },
            { title: "AI Commerce", href: "/demo/commercehub/admin/ai", description: "Premium demo widgets for AI-powered commerce." },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition hover:border-blue-400 hover:bg-white dark:border-slate-700 dark:bg-slate-950/70 dark:hover:bg-slate-900">
              <p className="text-sm font-semibold">{item.title}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">Open Page</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
