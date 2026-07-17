import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById, getReviewsForProduct, products } from "../../lib/data";
import { Breadcrumbs } from "../../components/ui/Breadcrumbs";
import { ImageGallery } from "../../components/ui/ImageGallery";
import { RatingStars } from "../../components/ui/RatingStars";
import { RelatedProducts } from "../../components/RelatedProducts";
import { ProductActions } from "../../components/ProductActions";
import { TrackRecentlyViewed } from "../../components/TrackRecentlyViewed";

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);
  const productReviews = getReviewsForProduct(product.id);

  return (
    <div className="space-y-8 pb-10">
      <TrackRecentlyViewed productId={product.id} />
      <Breadcrumbs items={[{ label: "Home", href: "/demo/commercehub" }, { label: "Products", href: "/demo/commercehub/products" }, { label: product.name }]} />

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <ImageGallery images={product.images} alt={product.name} />
        <article className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900/85">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{product.category}</p>
          <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-sm font-medium text-slate-500">Brand: {product.brand}</p>
          <div className="mt-3"><RatingStars rating={product.rating} size="h-5 w-5" /></div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{product.description}</p>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
            <p className="text-sm font-semibold">Offer Badge: {product.discount}% OFF</p>
            <p className="mt-1 text-sm text-slate-600">Stock: {product.stock} units</p>
          </div>

          <ProductActions product={product} />

          <div className="mt-6 grid gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-sm dark:border-slate-700 dark:bg-slate-950">
            <p className="font-semibold">Specifications</p>
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between border-b border-slate-100 py-1.5 last:border-0 dark:border-slate-800">
                <span className="text-slate-500">{key}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/85 p-5 dark:border-slate-800 dark:bg-slate-900/80">
        <h2 className="text-xl font-bold">Reviews & Ratings</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {productReviews.map((review) => (
            <article key={review.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
              <p className="text-sm text-slate-600 dark:text-slate-300">"{review.comment}"</p>
              <div className="mt-2"><RatingStars rating={review.rating} /></div>
              <p className="mt-2 text-xs text-slate-500">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      <RelatedProducts products={related} />

      <Link href="/demo/commercehub/products" className="inline-flex rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm dark:border-slate-700 dark:bg-slate-900">
        Back to Products
      </Link>
    </div>
  );
}
