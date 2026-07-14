import { ShieldCheck, Truck, Lock, RotateCcw, Sparkles, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: Sparkles, title: "Premium Quality", desc: "Only the finest materials & finishes." },
  { icon: ShieldCheck, title: "Trusted Products", desc: "100% authentic — guaranteed." },
  { icon: Truck, title: "Fast Delivery", desc: "Free shipping over $100." },
  { icon: Lock, title: "Secure Payments", desc: "Encrypted checkout, safe & simple." },
  { icon: RotateCcw, title: "Easy Returns", desc: "30-day hassle-free returns." },
  { icon: HeartHandshake, title: "Customer Love", desc: "Rated 4.9 by 50k+ shoppers." },
];

export function Features() {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <motion.div
          key={it.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="glass rounded-3xl p-6 hover:-translate-y-1 hover:shadow-luxe transition"
        >
          <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-royal text-white">
            <it.icon className="h-5 w-5" />
          </div>
          <h4 className="mt-4 font-display text-xl font-semibold text-[color:var(--royal)]">{it.title}</h4>
          <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
