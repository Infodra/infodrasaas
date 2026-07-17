import { ProductCard } from "./ProductCard";
import type { Product } from "../lib/types";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
