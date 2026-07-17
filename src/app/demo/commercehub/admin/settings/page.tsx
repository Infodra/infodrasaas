export default function AdminSettingsPage() {
  return (
    <div className="space-y-5 pb-10">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="grid gap-4 xl:grid-cols-2">
        {[
          { title: "Store Information", body: "CommerceHub Demo, enterprise storefront showcase, marketing contact and operational regions." },
          { title: "Logo", body: "Upload control placeholder for the storefront logo and favicon assets." },
          { title: "Theme", body: "Blue primary brand palette, modern neutrals, light and dark mode support." },
          { title: "Currency", body: "INR default with display formatting and regional separators." },
          { title: "Tax", body: "GST and regional tax rules configured for demo calculations." },
          { title: "Shipping", body: "Standard and express delivery options, free shipping thresholds and ETA copy." },
          { title: "Payment Methods", body: "Card, UPI and Net Banking toggles for checkout display." },
          { title: "Notification Settings", body: "Customer email alerts, low stock alerts and campaign reminder toggles." },
        ].map((section) => (
          <article key={section.title} className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{section.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}