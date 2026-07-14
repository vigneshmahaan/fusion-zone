import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  title,
  subtitle,
  crumb,
}: {
  title: string;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <div className="relative -mt-16 sm:-mt-20 gradient-royal text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 left-1/3 h-80 w-80 rounded-full bg-[color:var(--ember)]/25 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 sm:pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <nav className="text-sm text-white/70 flex items-center gap-1">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{crumb}</span>
          </nav>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-black">{title}</h1>
          <div className="mt-4 flex items-center gap-2">
            <div className="h-1.5 w-12 rounded-full bg-[color:var(--ember)] shadow-[0_0_8px_rgba(255,138,0,0.5)]" />
            <div className="h-1.5 w-8 rounded-full bg-[color:var(--teal)] shadow-[0_0_8px_rgba(15,148,144,0.5)]" />
          </div>
          {subtitle && <p className="mt-4 max-w-2xl text-white/80 leading-relaxed">{subtitle}</p>}
        </motion.div>
      </div>
    </div>
  );
}
