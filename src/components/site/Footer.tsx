import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const cols = [
  {
    title: "Shop",
    links: [
      { to: "/shoes", label: "Shoes" },
      { to: "/men-accessories", label: "Men Accessories" },
      { to: "/kids", label: "Kids Collection" },
      { to: "/new-arrivals", label: "New Arrivals" },
      { to: "/offers", label: "Offers" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/contact", label: "Contact" },
      { to: "/offers", label: "Special Offers" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { to: "/contact", label: "Help Center" },
      { to: "/contact", label: "Shipping & Returns" },
      { to: "/contact", label: "Size Guide" },
      { to: "/contact", label: "Order Tracking" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative gradient-royal text-white/85 mt-24 border-t-2 border-[color:var(--teal)]/40 shadow-[0_-10px_30px_rgba(15,148,144,0.15)]">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-[color:var(--ember)]/20 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-[color:var(--teal)]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-5">
          <Logo className="h-12" />
          <p className="text-sm max-w-sm">
            Premium footwear, premium men accessories, and stylish kids fashion — curated for the ones who walk it, wear it, and love it.
          </p>
          <div className="flex items-start gap-3 text-sm"><MapPin className="h-4 w-4 mt-0.5 text-[color:var(--teal)]" />24 Fusion Avenue, Fashion District, Mumbai 400001</div>
          <div className="flex items-center gap-3 text-sm"><Phone className="h-4 w-4 text-[color:var(--ember)]" />+91 98765 43210</div>
          <div className="flex items-center gap-3 text-sm"><Mail className="h-4 w-4 text-[color:var(--teal)]" />hello@fusionshoezone.com</div>
          <div className="flex items-center gap-2 pt-2">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid h-10 w-10 place-items-center rounded-full glass-dark hover:bg-[color:var(--teal)] hover:text-white hover:scale-110 hover:shadow-[0_0_15px_rgba(15,148,144,0.5)] transition duration-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title} className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">{c.title}</h4>
            <ul className="space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-[color:var(--ember)] transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-4">
          <h4 className="text-white font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-4">Get exclusive drops, offers, and styling tips — straight to your inbox.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const email = new FormData(e.currentTarget).get("email") as string;
              if (!email) return;
              toast.success("You're in!", { description: "Welcome to the Fusion insider list." });
              (e.currentTarget as HTMLFormElement).reset();
            }}
            className="glass-dark flex items-center gap-2 rounded-full p-1.5"
          >
            <Input
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              className="border-0 bg-transparent text-white placeholder:text-white/60 focus-visible:ring-0"
            />
            <Button className="gradient-ember text-[color:var(--ember-foreground)] font-semibold rounded-full">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Fusion Shoe Zone & Accessories. All rights reserved.</p>
          <p className="text-[color:var(--ember)] font-bold tracking-widest text-[10px] uppercase">Walk it. Wear it. Love it.</p>
        </div>
      </div>
    </footer>
  );
}
