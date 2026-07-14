import { ProductCard } from "./ProductCard";
import type { Product } from "@/data/products";

export function ProductGrid({ items }: { items: Product[] }) {
  if (items.length === 0) {
    return (
      <div className="mt-12 text-center py-20 rounded-3xl bg-[color:var(--secondary)]">
        <p className="text-muted-foreground">No products match your filters.</p>
      </div>
    );
  }
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
