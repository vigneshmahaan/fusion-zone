import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section, SectionHeader } from "@/components/site/Section";
import { Features } from "@/components/site/Features";
import { motion } from "framer-motion";
import { Clock, Users, ShoppingBag, Star, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us · Fusion Shoe Zone" },
      { name: "description", content: "The story behind Fusion Shoe Zone & Accessories — premium shoes, men accessories and kids fashion." },
      { property: "og:title", content: "About Us · Fusion Shoe Zone" },
      { property: "og:description", content: "Affordable luxury and thoughtful service — that's the Fusion promise." },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHeader
        crumb="About"
        title="Our Story"
        subtitle="Fusion Shoe Zone & Accessories was built on a simple idea — everyone deserves to feel confident in what they wear."
      />

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* New premium boutique image */}
          <div className="relative">
            <motion.img
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
              alt="Fusion boutique interior"
              className="rounded-[2rem] shadow-luxe object-cover w-full aspect-[4/5]"
            />
            {/* Floating brand badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-5 -right-5 glass rounded-2xl px-5 py-4 shadow-luxe border border-border/40"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full gradient-royal text-white">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-lg font-black text-[color:var(--royal)] dark:text-primary">10+ Years</div>
                  <div className="text-xs text-muted-foreground">of premium craft</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Who we are"
              title="Affordable luxury, made for everyday"
              subtitle="From premium footwear to stylish accessories and playful kids fashion — we curate pieces that feel special, without the intimidating price tag."
              center={false}
            />

            {/* Stats cards */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { n: "10+",   l: "Years of craft",    icon: Clock,        color: "text-[color:var(--teal)]",    bg: "bg-[color:var(--teal)]/10" },
                { n: "50K+",  l: "Happy customers",   icon: Users,        color: "text-primary",                 bg: "bg-primary/10" },
                { n: "1.2K+", l: "Premium SKUs",      icon: ShoppingBag,  color: "text-[color:var(--ember)]",   bg: "bg-[color:var(--ember)]/10" },
                { n: "4.9★",  l: "Average rating",    icon: Star,         color: "text-yellow-500",              bg: "bg-yellow-500/10" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.l}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="glass rounded-2xl p-5 flex items-start gap-4 border border-border/50 hover:border-[color:var(--teal)]/40 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`p-2.5 rounded-xl ${s.bg} ${s.color} shrink-0`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-3xl font-black text-primary">{s.n}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 font-medium">{s.l}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section id="values">
        <SectionHeader eyebrow="Our promise" title="Built on service, styled with soul" />
        <Features />
      </Section>

      <Section>
        <div className="rounded-[3rem] gradient-royal text-white p-10 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-[color:var(--ember)]/30 blur-3xl" />
            <div className="absolute -bottom-10 right-10 h-60 w-60 rounded-full bg-[color:var(--teal)]/20 blur-3xl" />
          </div>
          <p className="relative font-display text-3xl sm:text-5xl font-black gradient-text">
            Walk it. Wear it. Love it.
          </p>
          <p className="relative mt-4 text-white/80 max-w-xl mx-auto">
            Three words. One promise. A better everyday, one premium piece at a time.
          </p>
        </div>
      </Section>
    </>
  );
}
