import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import type { ReactNode } from "react";
import { toast } from "sonner";

export function CartDrawer({ children }: { children: ReactNode }) {
  const { cart, cartTotal, removeFromCart, updateQty, clearCart } = useStore();

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Your Cart</SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 grid place-items-center text-center px-6">
            <div>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--secondary)] text-[color:var(--royal)]">
                <ShoppingBag className="h-7 w-7" />
              </div>
              <p className="mt-4 font-medium">Your cart is empty</p>
              <p className="text-sm text-muted-foreground">Add some premium picks to get started.</p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto -mx-6 px-6 py-4 space-y-3">
              {cart.map(({ product, qty }) => (
                <div
                  key={product.id}
                  className="flex gap-3 rounded-2xl border border-border p-3 hover:shadow-md transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-20 w-20 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-medium truncate">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.subcategory}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        aria-label="Remove"
                        className="p-1 rounded hover:bg-muted"
                      >
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-border">
                        <button
                          className="p-1.5 hover:bg-muted rounded-l-full"
                          onClick={() => updateQty(product.id, qty - 1)}
                          aria-label="Decrease"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-sm font-medium">{qty}</span>
                        <button
                          className="p-1.5 hover:bg-muted rounded-r-full"
                          onClick={() => updateQty(product.id, qty + 1)}
                          aria-label="Increase"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="font-semibold text-[color:var(--royal)]">
                        ${(product.price * qty).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-xl font-bold">${cartTotal.toFixed(2)}</span>
              </div>
              <Button
                className="w-full gradient-ember text-[color:var(--ember-foreground)] font-semibold h-11 rounded-full"
                onClick={() => toast.success("Checkout coming soon", { description: "This is a demo store." })}
              >
                Checkout
              </Button>
              <button
                onClick={clearCart}
                className="w-full text-xs text-muted-foreground hover:text-foreground"
              >
                Clear cart
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
