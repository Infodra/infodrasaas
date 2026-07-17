import Link from "next/link";
import { coupons } from "../../lib/data";
import { DataTable } from "../../components/ui/DataTable";

export default function AdminCouponsPage() {
  return (
    <div className="space-y-4 pb-10">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">Coupons</h1>
        <Link href="/demo/commercehub/admin/coupons/new" className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Create Coupon</Link>
      </div>
      <DataTable
        rows={coupons}
        rowKey={(coupon) => coupon.id}
        columns={[
          { key: "code", header: "Coupon Code", render: (coupon) => coupon.code },
          { key: "discount", header: "Discount", render: (coupon) => coupon.type === "percentage" ? `${coupon.discount}%` : `INR ${coupon.discount}` },
          { key: "usage", header: "Usage", render: (coupon) => String(coupon.usage) },
          { key: "expiry", header: "Expiry", render: (coupon) => coupon.expiry },
          { key: "status", header: "Status", render: (coupon) => <span className="rounded-full border border-slate-300 px-2 py-0.5 text-xs">{coupon.status}</span> },
        ]}
      />
    </div>
  );
}