import { Heart, ShoppingBag, Star, Eye } from "lucide-react";
import type { Product } from "@/data/products";
import { useStore } from "@/lib/store";
import { Link } from "@tanstack/react-router";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, inWishlist } = useStore();
  const liked = inWishlist(product.id);

  return (
    <article
      className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-[0_30px_60px_-30px_rgba(61,27,106,0.35)] hover:-translate-y-1.5 transition-all duration-300"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--secondary)]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
          {product.badge && (
            <span className="rounded-full gradient-ember px-3 py-1 text-xs font-bold text-[color:var(--ember-foreground)] shadow-lg">
              {product.badge}
            </span>
          )}
          <button
            aria-label="Wishlist"
            onClick={() => toggleWishlist(product)}
            className={`ml-auto grid h-9 w-9 place-items-center rounded-full glass transition ${
              liked ? "text-[color:var(--ember)]" : "text-foreground"
            }`}
          >
            <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
          </button>
        </div>
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 transition-all duration-500 translate-y-0 opacity-100 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full gradient-royal py-2.5 px-3 text-xs font-bold text-white shadow-lg hover:shadow-[0_10px_40px_rgba(61,27,106,0.5)] hover:scale-105 transition duration-300"
          >
            <ShoppingBag className="h-3.5 w-3.5" /> Add
          </button>
          <Link
            to="/product/$id"
            params={{ id: product.id }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full glass py-2.5 px-3 text-xs font-bold text-foreground hover:bg-white/25 hover:scale-105 transition duration-300"
          >
            <Eye className="h-3.5 w-3.5" /> View
          </Link>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 text-[color:var(--ember)]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${i < Math.round(product.rating) ? "fill-current" : "opacity-30"}`}
            />
          ))}
          <span className="ml-1 text-xs text-muted-foreground">{product.rating.toFixed(1)}</span>
        </div>
        <h3 className="mt-1 font-semibold truncate">{product.name}</h3>
        <p className="text-xs text-muted-foreground">{product.subcategory}</p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-[color:var(--royal)] dark:text-primary">${product.price}</span>
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">${product.oldPrice}</span>
          )}
        </div>
      </div>
    </article>
  );
}
