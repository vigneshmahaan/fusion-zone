import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { Logo } from "./Logo";
import { useStore } from "@/lib/store";
import { products } from "@/data/products";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "./CartDrawer";
import { WishlistDrawer } from "./WishlistDrawer";

const links = [
  { to: "/", label: "Home" },
  { to: "/shoes", label: "Shoes" },
  {
    to: "/men-accessories",
    label: "Men Accessories",
    dropdown: [
      { to: "/men-accessories" as const, search: { subcategory: "All" } as const, label: "All Accessories" },
      { to: "/men-accessories" as const, search: { subcategory: "Watch" } as const, label: "Watches" },
      { to: "/men-accessories" as const, search: { subcategory: "Ring" } as const, label: "Rings" },
    ],
  },
  { to: "/kids", label: "Kids Collection" },
  { to: "/new-arrivals", label: "New Arrivals" },
  { to: "/offers", label: "Offers" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function MobileNavLink({
  link,
  onClose,
}: {
  link: {
    to: string;
    label: string;
    dropdown?: readonly {
      readonly to: any;
      readonly search: any;
      readonly label: string;
    }[];
  };
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (link.dropdown) {
    return (
      <div className="flex flex-col">
        <div className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-white/10">
          <Link
            to={link.to}
            className="text-lg font-medium text-white/90 grow"
            onClick={onClose}
          >
            {link.label}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-xl hover:bg-white/10 text-white/80 transition"
          >
            <ChevronDown className={`h-5 w-5 transition-transform duration-250 ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
        {open && (
          <div className="ml-4 pl-4 border-l border-white/10 flex flex-col gap-1.5 my-1.5">
            {link.dropdown.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                search={item.search}
                className="px-4 py-2 rounded-lg text-base font-medium text-white/70 hover:text-white hover:bg-white/10 transition"
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={link.to}
      className="px-4 py-3 rounded-xl text-lg font-medium text-white/90 hover:bg-white/10 transition"
      onClick={onClose}
    >
      {link.label}
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, wishlist } = useStore();
  const { location } = useRouterState();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 gradient-royal border-b border-[color:var(--teal)]/20 shadow-[0_10px_40px_-15px_rgba(15,148,144,0.35)] ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <Logo className={scrolled ? "h-9" : "h-11"} />

          <nav className="ml-6 hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to;
              if ("dropdown" in l) {
                return (
                  <div
                    key={l.to}
                    className="relative group py-2"
                  >
                    <Link
                      to={l.to}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                        active
                          ? "text-[color:var(--ember)]"
                          : "text-white/85 hover:text-white"
                      }`}
                    >
                      {l.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                      <span
                        className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-[color:var(--teal)] transition-transform duration-300 ${
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full mt-1 w-48 glass-dark rounded-2xl border border-border/20 shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 py-2">
                      {l.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          search={item.search}
                          className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "text-[color:var(--ember)]"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-[color:var(--teal)] transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-1 sm:gap-2 text-white">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((v) => !v)}
              className="p-2 rounded-full hover:bg-white/10 transition"
            >
              <Search className="h-5 w-5" />
            </button>

            <WishlistDrawer>
              <button
                aria-label={`Wishlist (${wishlist.length})`}
                className="relative p-2 rounded-full hover:bg-white/10 transition"
              >
                <Heart className="h-5 w-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-[color:var(--teal)] px-1 text-[10px] font-bold text-white shadow-[0_0_8px_rgba(15,148,144,0.6)]">
                    {wishlist.length}
                  </span>
                )}
              </button>
            </WishlistDrawer>

            <CartDrawer>
              <button
                aria-label={`Cart (${cartCount})`}
                className="relative p-2 rounded-full hover:bg-white/10 transition"
              >
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-[color:var(--ember)] px-1 text-[10px] font-bold text-[color:var(--ember-foreground)] shadow-[0_0_8px_rgba(255,138,0,0.6)]">
                    {cartCount}
                  </span>
                )}
              </button>
            </CartDrawer>

            <button
              aria-label="Account"
              className="p-2 rounded-full hover:bg-white/10 transition hidden sm:inline-grid"
            >
              <User className="h-5 w-5" />
            </button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="p-2 rounded-full hover:bg-white/10 transition lg:hidden"
                >
                  {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="gradient-royal text-white border-l-white/10 w-[85vw] sm:w-96">
                <SheetHeader>
                  <SheetTitle className="text-white">Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-1">
                  {links.map((l) => (
                    <MobileNavLink
                      key={l.to}
                      link={l}
                      onClose={() => setMobileOpen(false)}
                    />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {searchOpen && (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3 pb-1 animate-reveal relative">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const q = searchQuery.toLowerCase();
                const match = products.find(p => p.name.toLowerCase().includes(q) || p.subcategory.toLowerCase().includes(q));
                if (match) {
                  window.location.href = `/product/${match.id}`;
                  setSearchOpen(false);
                  setSearchQuery("");
                }
              }}
              className="glass flex items-center gap-2 rounded-full px-4 py-2"
            >
              <Search className="h-4 w-4 text-white/80" />
              <Input
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search shoes, accessories, kids collection…"
                className="border-0 bg-transparent text-white placeholder:text-white/60 focus-visible:ring-0"
              />
              <Button
                type="submit"
                size="sm"
                className="gradient-ember text-[color:var(--ember-foreground)] font-semibold rounded-full"
              >
                Search
              </Button>
            </form>

            {/* Auto-complete Dropdown */}
            {searchQuery.trim().length > 0 && (
              <div className="absolute top-full left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 mt-2 glass-dark rounded-2xl border border-border/20 shadow-2xl overflow-hidden max-h-80 overflow-y-auto z-50">
                {products
                  .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.subcategory.toLowerCase().includes(searchQuery.toLowerCase()))
                  .slice(0, 5)
                  .map(product => (
                    <Link
                      key={product.id}
                      to="/product/$id"
                      params={{ id: product.id }}
                      onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                      className="flex items-center gap-4 p-3 hover:bg-white/10 transition border-b border-border/10 last:border-0"
                    >
                      <img src={product.image} alt={product.name} className="h-12 w-12 object-cover rounded-lg" />
                      <div>
                        <div className="text-white font-semibold text-sm">{product.name}</div>
                        <div className="text-white/60 text-xs">{product.subcategory}</div>
                      </div>
                      <div className="ml-auto text-[color:var(--ember)] font-bold">${product.price}</div>
                    </Link>
                  ))}
                {products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.subcategory.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                  <div className="p-4 text-white/60 text-sm text-center">No products found matching "{searchQuery}"</div>
                )}
              </div>
            )}
          </div>
        )}
      </header>
      <div className={scrolled ? "h-16" : "h-20"} aria-hidden />
    </>
  );
}
