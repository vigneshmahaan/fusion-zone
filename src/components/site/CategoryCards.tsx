import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const cats = [
  {
    to: "/shoes",
    title: "Men's Shoes",
    desc: "Luxury sneakers, casual, sports & formal.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=80",
  },
  {
    to: "/men-accessories",
    title: "Men's Accessories",
    desc: "Premium men's watches and wearable rings.",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    to: "/kids",
    title: "Kids Collection",
    desc: "Shoes, clothing & accessories for little icons.",
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=1000&q=80",
  },
] as const;

export function CategoryCards() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {cats.map((c) => (
        <div key={c.to}>
          <Link
            to={c.to}
            className="group relative block overflow-hidden rounded-[2rem] shadow-luxe aspect-[4/5]"
          >
            <img
              src={c.image}
              alt={c.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--royal)]/90 via-[color:var(--royal)]/30 to-transparent" />
            <div className="absolute inset-0 p-7 flex flex-col justify-end text-white">
              <h3 className="font-display text-3xl font-bold">{c.title}</h3>
              <p className="mt-2 text-white/85 max-w-xs">{c.desc}</p>
              <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full glass-dark px-4 py-2 text-sm font-semibold group-hover:bg-[color:var(--ember)] group-hover:text-[color:var(--ember-foreground)] transition">
                Explore <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
