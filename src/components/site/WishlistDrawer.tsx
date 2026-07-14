import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useStore } from "@/lib/store";
import { Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

export function WishlistDrawer({ children }: { children: ReactNode }) {
  const { wishlist, toggleWishlist, addToCart } = useStore();

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Wishlist</SheetTitle>
        </SheetHeader>
        {wishlist.length === 0 ? (
          <div className="flex-1 grid place-items-center text-center px-6">
            <div>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--secondary)] text-[color:var(--royal)]">
                <Heart className="h-7 w-7" />
              </div>
              <p className="mt-4 font-medium">No favorites yet</p>
              <p className="text-sm text-muted-foreground">Tap the heart on any product to save it.</p>
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto -mx-6 px-6 py-4 space-y-3">
            {wishlist.map((p) => (
              <div key={p.id} className="flex gap-3 rounded-2xl border border-border p-3">
                <img src={p.image} alt={p.name} loading="lazy" className="h-20 w-20 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-medium truncate">{p.name}</p>
                    <button onClick={() => toggleWishlist(p)} aria-label="Remove"><X className="h-4 w-4" /></button>
                  </div>
                  <p className="text-sm text-[color:var(--royal)] font-semibold">${p.price}</p>
                  <Button
                    size="sm"
                    className="mt-2 gradient-royal text-white rounded-full"
                    onClick={() => addToCart(p)}
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
