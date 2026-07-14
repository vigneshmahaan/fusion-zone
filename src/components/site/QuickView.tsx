import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Star, Package, Truck, RotateCcw } from "lucide-react";
import type { Product } from "@/data/products";
import { useStore } from "@/lib/store";

export function QuickView({
  product,
  open,
  onOpenChange,
}: {
  product: Product;
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  const { addToCart, toggleWishlist, inWishlist } = useStore();
  const liked = inWishlist(product.id);

  // Use product's own images array (4 views of the same product)
  const gallery = product.images ?? [product.image, product.image, product.image, product.image];

  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [zoomed, setZoomed] = useState(false);

  // Reset when product changes
  useEffect(() => {
    setActiveImage(gallery[0]);
    setZoomed(false);
  }, [product.id]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 max-h-[90dvh] overflow-y-auto overflow-x-hidden rounded-3xl border-border/60">
        <div className="grid md:grid-cols-2">

          {/* ── Gallery side ─────────────────────────── */}
          <div className="flex flex-col gap-3 p-4 bg-[color:var(--secondary)]/20 dark:bg-white/[0.03] border-b md:border-b-0 md:border-r border-border/30">

            {/* Main image with zoom toggle */}
            <button
              onClick={() => setZoomed((v) => !v)}
              className="relative aspect-square overflow-hidden rounded-2xl bg-[color:var(--secondary)]/60 dark:bg-zinc-800 border border-border/40 group cursor-zoom-in"
              aria-label="Zoom image"
            >
              <img
                src={activeImage}
                alt={product.name}
                className={`h-full w-full object-cover transition-transform duration-500 ${zoomed ? "scale-150 cursor-zoom-out" : "group-hover:scale-105"}`}
              />
              {/* Badge overlay */}
              {product.badge && (
                <span className="absolute top-3 left-3 rounded-full gradient-ember px-3 py-1 text-xs font-bold text-[color:var(--ember-foreground)] shadow">
                  {product.badge}
                </span>
              )}
            </button>

            {/* Thumbnail row — 4 images of the same product */}
            <div className="grid grid-cols-4 gap-2">
              {gallery.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => { setActiveImage(imgUrl); setZoomed(false); }}
                  className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                    activeImage === imgUrl
                      ? "border-[color:var(--teal)] scale-95 shadow-[0_0_14px_rgba(15,148,144,0.5)]"
                      : "border-transparent hover:border-foreground/25 hover:scale-105"
                  }`}
                  aria-label={`View ${product.name} angle ${index + 1}`}
                >
                  <img
                    src={imgUrl}
                    alt={`${product.name} view ${index + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  {/* Active indicator dot */}
                  {activeImage === imgUrl && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-[color:var(--teal)]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ── Details side ─────────────────────────── */}
          <div className="p-6 flex flex-col">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl text-foreground leading-tight">{product.name}</DialogTitle>
            </DialogHeader>

            {/* Category pill */}
            <span className="mt-2 inline-flex self-start items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--teal)] bg-[color:var(--teal)]/10 rounded-full px-3 py-1">
              <Package className="h-3 w-3" />
              {product.subcategory}
            </span>

            {/* Stars */}
            <div className="mt-4 flex items-center gap-1.5 text-[color:var(--ember)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-current" : "opacity-25"}`} />
              ))}
              <span className="ml-1 text-sm font-semibold text-foreground">{product.rating.toFixed(1)}</span>
              <span className="text-xs text-muted-foreground">/ 5.0</span>
            </div>

            {/* Price */}
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-black text-primary">${product.price}</span>
              {product.oldPrice && (
                <span className="text-base text-muted-foreground line-through">${product.oldPrice}</span>
              )}
              {product.oldPrice && (
                <span className="text-sm font-bold text-green-600 dark:text-green-400">
                  Save ${product.oldPrice - product.price}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Crafted for everyday luxury — premium materials, comfort-first design, and finishing details you'll notice at a glance.
            </p>

            {/* Perks */}
            <div className="mt-5 space-y-2">
              {[
                { icon: Truck, text: "Free shipping on orders over $100" },
                { icon: RotateCcw, text: "30-day hassle-free returns" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon className="h-3.5 w-3.5 text-[color:var(--teal)] shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-6 pt-5 border-t border-border/40 flex gap-2 mt-auto">
              <Button
                className="flex-1 gradient-ember text-[color:var(--ember-foreground)] font-bold rounded-full h-11 shadow-lg hover:shadow-[0_6px_20px_rgba(255,138,0,0.45)] hover:scale-[1.02] transition-all duration-300"
                onClick={() => { addToCart(product); onOpenChange(false); }}
              >
                <ShoppingBag className="mr-2 h-4 w-4" /> Add to cart
              </Button>
              <Button
                variant="outline"
                className={`rounded-full h-11 w-11 p-0 transition-all duration-300 ${liked ? "border-red-400/50 bg-red-50 dark:bg-red-950/30" : "hover:border-red-300"}`}
                onClick={() => toggleWishlist(product)}
                aria-label="Toggle wishlist"
              >
                <Heart className={`h-4 w-4 transition-all duration-300 ${liked ? "fill-red-500 text-red-500 scale-110" : ""}`} />
              </Button>
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
