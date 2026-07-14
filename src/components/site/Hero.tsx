import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setPos({
        x: (e.clientX - r.left - r.width / 2) / r.width,
        y: (e.clientY - r.top - r.height / 2) / r.height,
      });
    };
    el.addEventListener("mousemove", on);
    return () => el.removeEventListener("mousemove", on);
  }, []);

  return (
    <div
      ref={ref}
      className="relative -mt-16 sm:-mt-20 min-h-[100svh] overflow-hidden transition-colors duration-500 gradient-royal text-white border-b border-border/10"
    >
      {/* animated bg */}
      <div className="absolute inset-0 opacity-60 pointer-events-none" aria-hidden>
        <div
          className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full blur-3xl animate-gradient"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.35), transparent 60%)" }}
        />
        <div
          className="absolute -bottom-40 -right-20 h-[600px] w-[600px] rounded-full blur-3xl animate-gradient"
          style={{ background: "radial-gradient(circle, rgba(129,73,255,0.45), transparent 60%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(15,148,144,0.12), transparent 60%)" }}
        />
        {/* particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full animate-float bg-white/40"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 6) * 0.6}s`,
              animationDuration: `${5 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 min-h-[100svh] flex items-center">
        <div className="grid lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-shadow-luxe"
            >
              <span className="text-white">WALK IT.</span><br />
              <span className="text-white">WEAR IT.</span><br />
              <span className="gradient-text animate-gradient">LOVE IT.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-xl text-lg text-white/80"
            >
              Premium shoes, premium accessories & stylish kids fashion — curated for people who move with intent and dress with soul.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/shoes"
                className="btn-glow btn-glow-hover inline-flex items-center gap-2 rounded-full gradient-ember px-7 py-3.5 text-sm font-semibold text-[color:var(--ember-foreground)] shadow-lg"
              >
                Shop Shoes <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/new-arrivals"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition border glass-dark hover:bg-white/15 text-white border-white/20"
              >
                Explore Collections
              </Link>
            </motion.div>

            {/* Stats Cards */}
            <div className="mt-12 grid grid-cols-3 max-w-lg gap-4">
              {[
                { n: "50K+", l: "Happy customers", icon: Users, color: "text-[color:var(--teal)]" },
                { n: "1.2K+", l: "Premium products", icon: Sparkles, color: "text-[color:var(--ember)]" },
                { n: "4.9★", l: "Average rating", icon: Star, color: "text-yellow-500" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.l}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="transition-all duration-300 rounded-2xl p-4 flex flex-col items-center text-center shadow-lg border glass-dark hover:bg-white/10 border-white/10"
                  >
                    <div className={`p-2 rounded-full mb-2 bg-white/5 ${s.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="font-display text-xl sm:text-2xl font-black text-white">{s.n}</div>
                    <div className="text-[10px] sm:text-xs mt-0.5 font-medium leading-tight text-white/75">{s.l}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Floating showcase */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[420px] md:h-[520px] mt-10 lg:mt-0 w-full max-w-[320px] sm:max-w-none mx-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              style={{ transform: `translate3d(${pos.x * -30}px, ${pos.y * -30}px, 0) rotate(-8deg)` }}
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80"
              alt="Featured sneaker"
              className="absolute top-0 left-0 h-56 w-56 sm:h-72 sm:w-72 md:h-96 md:w-96 object-cover rounded-[2.5rem] shadow-luxe animate-float"
            />
            <motion.img
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{ transform: `translate3d(${pos.x * 20}px, ${pos.y * 20}px, 0)` }}
              src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80"
              alt="Luxury watch"
              className="absolute bottom-4 right-0 h-40 w-40 sm:h-52 sm:w-52 md:h-64 md:w-64 object-cover rounded-[2rem] shadow-luxe animate-float-slow"
            />
            <div className="absolute bottom-0 left-2 sm:left-4 rounded-2xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 animate-float-slow glass-dark z-10 shadow-xl">
              <div className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-full gradient-ember text-[color:var(--ember-foreground)] font-bold text-xs sm:text-sm">
                50%
              </div>
              <div className="text-[10px] sm:text-xs">
                <div className="font-semibold text-white">Season Sale</div>
                <div className="text-white/70">Up to 50% off</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* wave / fade to bg */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#0f1330]" />
    </div>
  );
}
