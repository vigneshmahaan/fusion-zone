import { createFileRoute, Link } from "@tanstack/react-router";
import { findProduct, byCategory } from "@/data/products";
import { useState, useRef } from "react";
import { Heart, ShoppingBag, Star, Package, Truck, RotateCcw, ThumbsUp } from "lucide-react";
import { useStore } from "@/lib/store";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeader } from "@/components/site/Section";
import { ProductGrid } from "@/components/site/ProductGrid";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
});

function ProductPage() {
  const { id } = Route.useParams();
  const product = findProduct(id);
  const { addToCart, toggleWishlist, inWishlist } = useStore();
  
  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-8">
        <h1 className="font-display text-4xl font-black mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">We couldn't find the product you're looking for.</p>
        <Link to="/" className="btn-glow inline-flex items-center gap-2 rounded-full gradient-ember px-7 py-3.5 text-sm font-semibold text-[color:var(--ember-foreground)] shadow-lg">
          Back to Home
        </Link>
      </div>
    );
  }

  const liked = inWishlist(product.id);
  const gallery = product.images ?? [product.image, product.image, product.image, product.image];
  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [zoomed, setZoomed] = useState(false);

  // Get related products (same category, excluding this one, max 4)
  const relatedProducts = byCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <PageHeader crumb={product.name} title={product.name} subtitle={product.subcategory} />
      
      <Section className="py-12">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery side */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setZoomed((v) => !v)}
              className="relative aspect-square overflow-hidden rounded-3xl bg-[color:var(--secondary)]/60 dark:bg-zinc-800 border border-border/40 group cursor-zoom-in"
              aria-label="Zoom image"
            >
              <img
                src={activeImage}
                alt={product.name}
                className={`h-full w-full object-cover transition-transform duration-500 ${zoomed ? "scale-150 cursor-zoom-out" : "group-hover:scale-105"}`}
              />
              {product.badge && (
                <span className="absolute top-4 left-4 rounded-full gradient-ember px-4 py-1.5 text-sm font-bold text-[color:var(--ember-foreground)] shadow">
                  {product.badge}
                </span>
              )}
            </button>

            <div className="grid grid-cols-4 gap-3">
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
                  <img src={imgUrl} alt={`${product.name} view ${index + 1}`} loading="lazy" className="h-full w-full object-cover" />
                  {activeImage === imgUrl && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-[color:var(--teal)]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Details side */}
          <div className="flex flex-col">
            <span className="inline-flex self-start items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--teal)] bg-[color:var(--teal)]/10 rounded-full px-3 py-1 mb-4">
              <Package className="h-3 w-3" />
              {product.subcategory}
            </span>
            
            <h1 className="font-display text-4xl sm:text-5xl font-black text-foreground leading-tight">{product.name}</h1>
            
            <div className="mt-4 flex items-center gap-1.5 text-[color:var(--ember)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < Math.round(product.rating) ? "fill-current" : "opacity-25"}`} />
              ))}
              <span className="ml-2 text-base font-bold text-foreground">{product.rating.toFixed(1)}</span>
              <span className="text-sm text-muted-foreground ml-1">/ 5.0 · (128 Reviews)</span>
            </div>

            <div className="mt-6 flex items-baseline gap-4">
              <span className="text-4xl font-black text-primary">${product.price}</span>
              {product.oldPrice && (
                <span className="text-xl text-muted-foreground line-through">${product.oldPrice}</span>
              )}
              {product.oldPrice && (
                <span className="text-base font-bold text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                  Save ${product.oldPrice - product.price}
                </span>
              )}
            </div>

            <p className="mt-8 text-base text-muted-foreground leading-relaxed">
              Crafted for everyday luxury — premium materials, comfort-first design, and finishing details you'll notice at a glance. Elevate your wardrobe with a piece designed to stand the test of time and trends.
            </p>

            <div className="mt-8 space-y-3 p-6 glass rounded-2xl border-border/40">
              {[
                { icon: Truck, text: "Free express shipping on orders over $100" },
                { icon: RotateCcw, text: "30-day hassle-free returns & exchanges" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-foreground font-medium">
                  <div className="p-2 rounded-full bg-[color:var(--teal)]/10 text-[color:var(--teal)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  {text}
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-3 mt-auto">
              <Button
                className="flex-1 gradient-ember text-[color:var(--ember-foreground)] text-lg font-bold rounded-full h-14 shadow-lg hover:shadow-[0_6px_25px_rgba(255,138,0,0.45)] hover:scale-[1.02] transition-all duration-300"
                onClick={() => addToCart(product)}
              >
                <ShoppingBag className="mr-2 h-5 w-5" /> Add to cart
              </Button>
              <Button
                variant="outline"
                className={`rounded-full h-14 w-14 p-0 transition-all duration-300 ${liked ? "border-red-400/50 bg-red-50 dark:bg-red-950/30" : "hover:border-red-300 glass"}`}
                onClick={() => toggleWishlist(product)}
                aria-label="Toggle wishlist"
              >
                <Heart className={`h-6 w-6 transition-all duration-300 ${liked ? "fill-red-500 text-red-500 scale-110" : ""}`} />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Customer Reviews Section */}
      <Section id="reviews" className="bg-background/50 border-t border-border/30 overflow-hidden">
        <SectionHeader eyebrow="Feedback" title="Customer Reviews" subtitle="See what others are saying about this product." />

        {/* Scrolling marquee */}
        <div
          className="mt-12 relative"
          style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}
        >
          <div
            className="flex gap-6 w-max"
            style={{
              animation: "review-scroll 28s linear infinite",
            }}
            onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
          >
            {/* Duplicate reviews for seamless loop */}
            {[
              { name: "Alex Johnson",  rating: 5, date: "2 days ago",   text: "Absolutely love this! The quality is outstanding and it fits perfectly into my daily rotation. Highly recommend.", likes: 12 },
              { name: "Sarah Williams", rating: 4, date: "1 week ago",   text: "Great product, shipping was fast. It looks exactly like the pictures. Only giving 4 stars because the box was slightly dented upon arrival.", likes: 4 },
              { name: "Michael Chen",  rating: 5, date: "2 weeks ago",  text: "Worth every penny. The craftsmanship is evident and I've received so many compliments already.", likes: 8 },
              { name: "Emily Davis",   rating: 5, date: "1 month ago",  text: "This is my third purchase from Fusion and they never disappoint. Exceptional comfort and style.", likes: 23 },
              { name: "Ryan Patel",    rating: 5, date: "3 days ago",   text: "Shipping was super fast and the packaging was beautiful. The product exceeded all my expectations!", likes: 17 },
              { name: "Mia Thompson",  rating: 4, date: "2 months ago", text: "Very stylish and comfortable. I wear these almost every day. Will definitely be buying more from Fusion.", likes: 9 },
              // duplicated for loop
              { name: "Alex Johnson",  rating: 5, date: "2 days ago",   text: "Absolutely love this! The quality is outstanding and it fits perfectly into my daily rotation. Highly recommend.", likes: 12 },
              { name: "Sarah Williams", rating: 4, date: "1 week ago",   text: "Great product, shipping was fast. It looks exactly like the pictures. Only giving 4 stars because the box was slightly dented upon arrival.", likes: 4 },
              { name: "Michael Chen",  rating: 5, date: "2 weeks ago",  text: "Worth every penny. The craftsmanship is evident and I've received so many compliments already.", likes: 8 },
              { name: "Emily Davis",   rating: 5, date: "1 month ago",  text: "This is my third purchase from Fusion and they never disappoint. Exceptional comfort and style.", likes: 23 },
              { name: "Ryan Patel",    rating: 5, date: "3 days ago",   text: "Shipping was super fast and the packaging was beautiful. The product exceeded all my expectations!", likes: 17 },
              { name: "Mia Thompson",  rating: 4, date: "2 months ago", text: "Very stylish and comfortable. I wear these almost every day. Will definitely be buying more from Fusion.", likes: 9 },
            ].map((review, i) => (
              <div
                key={i}
                className="glass flex-shrink-0 w-[300px] sm:w-[340px] p-6 rounded-2xl border border-border/40"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full gradient-royal text-white grid place-items-center font-bold text-sm shadow">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{review.name}</div>
                      <div className="text-xs text-muted-foreground">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex text-[color:var(--ember)]">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className={`h-3.5 w-3.5 ${j < review.rating ? "fill-current" : "opacity-25"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">{review.text}</p>
                <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-[color:var(--teal)] transition">
                  <ThumbsUp className="h-3.5 w-3.5" /> Helpful ({review.likes})
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Inline keyframe for the review scroll */}
        <style>{`
          @keyframes review-scroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </Section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <Section id="related" className="bg-[color:var(--secondary)]/10">
          <SectionHeader eyebrow="More to love" title="Related Products" subtitle={`Discover more items from our ${product.category} collection.`} />
          <ProductGrid items={relatedProducts} />
        </Section>
      )}
    </>
  );
}
