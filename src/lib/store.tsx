import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { toast } from "sonner";
import type { Product } from "@/data/products";

type CartItem = { product: Product; qty: number };

type StoreCtx = {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (p: Product, qty?: number) => void;
  removeFromCart: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  toggleWishlist: (p: Product) => void;
  inWishlist: (id: string) => boolean;
  cartCount: number;
  cartTotal: number;
  dark: boolean;
  toggleDark: () => void;
};

const Ctx = createContext<StoreCtx | null>(null);

function safeGet<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [dark, setDark] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setCart(safeGet("fsz.cart", []));
    setWishlist(safeGet("fsz.wishlist", []));
    setDark(safeGet("fsz.dark", false));
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem("fsz.cart", JSON.stringify(cart));
  }, [cart, isInitialized]);
  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem("fsz.wishlist", JSON.stringify(wishlist));
  }, [wishlist, isInitialized]);
  useEffect(() => {
    if (!isInitialized) return;
    localStorage.setItem("fsz.dark", JSON.stringify(dark));
    document.documentElement.classList.toggle("dark", dark);
  }, [dark, isInitialized]);

  const value = useMemo<StoreCtx>(() => {
    return {
      cart,
      wishlist,
      dark,
      toggleDark: () => setDark((d) => !d),
      addToCart: (p, qty = 1) => {
        setCart((prev) => {
          const found = prev.find((c) => c.product.id === p.id);
          if (found)
            return prev.map((c) =>
              c.product.id === p.id ? { ...c, qty: c.qty + qty } : c,
            );
          return [...prev, { product: p, qty }];
        });
        toast.success(`Added to cart`, { description: p.name });
      },
      removeFromCart: (id) =>
        setCart((prev) => prev.filter((c) => c.product.id !== id)),
      updateQty: (id, qty) =>
        setCart((prev) =>
          prev.map((c) =>
            c.product.id === id ? { ...c, qty: Math.max(1, qty) } : c,
          ),
        ),
      clearCart: () => setCart([]),
      toggleWishlist: (p) => {
        setWishlist((prev) => {
          const exists = prev.some((x) => x.id === p.id);
          if (exists) {
            toast(`Removed from wishlist`, { description: p.name });
            return prev.filter((x) => x.id !== p.id);
          }
          toast.success(`Added to wishlist`, { description: p.name });
          return [...prev, p];
        });
      },
      inWishlist: (id) => wishlist.some((x) => x.id === id),
      cartCount: cart.reduce((n, c) => n + c.qty, 0),
      cartTotal: cart.reduce((n, c) => n + c.qty * c.product.price, 0),
    };
  }, [cart, wishlist, dark]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useStore must be used within StoreProvider");
  return c;
}
