"use client";

import Link from "next/link";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, LineChart, Line } from "recharts";
import { orders, products, users, formatCurrency } from "../lib/data";
import { StatisticCard } from "../components/StatisticCard";
import { ChartCard } from "../components/ChartCard";
import { OrderCard } from "../components/OrderCard";

const salesSeries = [
  { month: "Jan", sales: 420000, orders: 120, visitors: 4200 },
  { month: "Feb", sales: 510000, orders: 138, visitors: 5100 },
  { month: "Mar", sales: 470000, orders: 129, visitors: 4900 },
  { month: "Apr", sales: 620000, orders: 172, visitors: 6400 },
  { month: "May", sales: 690000, orders: 190, visitors: 7100 },
  { month: "Jun", sales: 740000, orders: 208, visitors: 7600 },
];

export default function AdminDashboardPage() {
  const totalSales = salesSeries.reduce((sum, item) => sum + item.sales, 0);
  const revenue = totalSales * 0.72;
  const lowStockProducts = products.filter((product) => product.stock <= 15).slice(0, 4);
  const quickActions = [
    { label: "Add Product", href: "/demo/commercehub/admin/products/new" },
    { label: "Create Category", href: "/demo/commercehub/admin/categories/new" },
    { label: "Create Coupon", href: "/demo/commercehub/admin/coupons/new" },
    { label: "Inventory Check", href: "/demo/commercehub/admin/inventory" },
  ];

  return (
    <div className="space-y-5 pb-10">
      <header className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-sm text-slate-500">Total Sales, Orders, Customers, Products, Revenue and trends.</p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {[
          { label: "Total Revenue", value: formatCurrency(revenue), change: "+12.4% vs last month" },
          { label: "Orders", value: String(orders.length), change: "+18 active today" },
          { label: "Customers", value: String(users.length), change: "+7 new this week" },
          { label: "Products", value: String(products.length), change: "2 launches scheduled" },
          { label: "Sales", value: formatCurrency(totalSales), change: "Strong Q2 momentum" },
        ].map((item) => (
          <StatisticCard key={item.label} label={item.label} value={item.value} change={item.change} />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <ChartCard title="Monthly Revenue">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesSeries}><XAxis dataKey="month" /><YAxis /><Tooltip /><Bar dataKey="sales" fill="#2563EB" radius={[8, 8, 0, 0]} /></BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
        <ChartCard title="Monthly Orders">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesSeries}><XAxis dataKey="month" /><YAxis /><Tooltip /><Line type="monotone" dataKey="orders" stroke="#14B8A6" strokeWidth={2.5} /><Line type="monotone" dataKey="visitors" stroke="#0F172A" strokeWidth={2.5} /></LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <ChartCard title="Recent Orders">
          <div className="space-y-3">
            {orders.slice(0, 3).map((order) => (
              <OrderCard key={order.id} order={order} href={`/demo/commercehub/admin/orders/${order.id}`} />
            ))}
          </div>
        </ChartCard>
        <ChartCard title="Low Stock Products">
          <div className="space-y-2 text-sm">
            {lowStockProducts.map((product) => <p key={product.id}>{product.name} - {product.stock} left</p>)}
          </div>
        </ChartCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <ChartCard title="Latest Customers">
          <div className="grid gap-3 sm:grid-cols-2">
            {users.map((user) => (
              <Link key={user.id} href={`/demo/commercehub/admin/customers/${user.id}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-700 dark:bg-slate-950">
                {user.name} joined recently. Email campaign reminder pending.
              </Link>
            ))}
          </div>
        </ChartCard>
        <ChartCard title="Quick Actions">
          <div className="grid gap-2">
            {quickActions.map((action) => (
              <Link key={action.href} href={action.href} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold dark:border-slate-700 dark:bg-slate-950">
                {action.label}
              </Link>
            ))}
          </div>
        </ChartCard>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/85 p-4 dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="mb-3 font-semibold">Sales Overview</h2>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {users.map((user) => (
            <div key={user.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm dark:border-slate-700 dark:bg-slate-950">
              {user.name} drives premium segment growth across enterprise storefront demos.
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
