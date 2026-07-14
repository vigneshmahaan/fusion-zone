import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Section, SectionHeader } from "@/components/site/Section";
import { CategoryCards } from "@/components/site/CategoryCards";
import { ProductGrid } from "@/components/site/ProductGrid";
import { bestSellers, byCategory, newArrivals } from "@/data/products";
import { Marquee } from "@/components/site/Marquee";
import { Features } from "@/components/site/Features";
import { Testimonials } from "@/components/site/Testimonials";
import { InstagramGallery } from "@/components/site/InstagramGallery";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Fusion Shoe Zone & Accessories · Walk it. Wear it. Love it." },
      { name: "description", content: "Discover premium shoes, stylish men accessories and kids fashion at Fusion Shoe Zone & Accessories." },
    ],
  }),
});

function Home() {
  return (
    <>
      <Hero />

      <Section id="categories">
        <SectionHeader
          eyebrow="Curated categories"
          title="Shop by category"
          subtitle="Three worlds, one premium standard. Explore what fits your vibe."
        />
        <CategoryCards />
      </Section>

      <Section id="trending">
        <SectionHeader
          eyebrow="Trending"
          title="Trending Shoes"
          subtitle="The picks everyone's talking about this season."
        />
        <ProductGrid items={byCategory("shoes").slice(0, 4)} />
        <div className="mt-10 text-center">
          <Link to="/shoes" className="inline-flex items-center gap-2 rounded-full gradient-royal px-6 py-3 text-sm font-semibold text-white">
            View all shoes <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Marquee />

      <Section id="accessories">
        <SectionHeader
          eyebrow="Curated Accessories"
          title="Men's Accessories"
          subtitle="Elevate your look with premium rings, bracelets, and essential details."
        />
        <ProductGrid items={byCategory("accessories").slice(0, 4)} />
        <div className="mt-10 text-center">
          <Link to="/men-accessories" className="inline-flex items-center gap-2 rounded-full gradient-royal px-6 py-3 text-sm font-semibold text-white hover:scale-105 transition duration-300 shadow-lg">
            View all accessories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section id="kids" className="rounded-[3rem] bg-[color:var(--secondary)] mx-4 sm:mx-6 lg:mx-8 max-w-none">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Little icons"
            title="Kids Fashion Collection"
            subtitle="Soft, playful, and made to keep up with big adventures."
          />
          <ProductGrid items={byCategory("kids").slice(0, 4)} />
        </div>
      </Section>

      <Section id="new-arrivals">
        <SectionHeader eyebrow="Just landed" title="New Arrivals" subtitle="Freshly stocked drops from every category." />
        <ProductGrid items={newArrivals()} />
      </Section>

      {/* Special offer banner */}
      <Section id="offers">
        <div className="relative overflow-hidden rounded-[3rem] gradient-royal text-white p-10 sm:p-16 shadow-luxe">
          <div className="absolute inset-0 pointer-events-none opacity-70" aria-hidden>
            <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[color:var(--ember)]/30 blur-3xl animate-gradient" />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl animate-gradient" />
          </div>
          <div className="relative grid lg:grid-cols-2 items-center gap-10">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[color:var(--ember)]">Season sale</span>
              <h3 className="mt-3 font-display text-4xl sm:text-6xl font-black">UP TO 50% OFF</h3>
              <p className="mt-4 text-white/85 max-w-md">
                Iconic pieces at unbeatable prices. Only for a limited time — refresh your wardrobe today.
              </p>
              <Link to="/offers" className="mt-6 inline-flex items-center gap-2 rounded-full gradient-ember px-7 py-3.5 text-sm font-semibold text-[color:var(--ember-foreground)] btn-glow btn-glow-hover">
                Shop the sale <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["1595950653106-6c9ebd614d3a","1523275335684-37898b6baf30","1514989940723-e8e51635b782","1600185365483-26d7a4cc7519","1546868871-7041f2a55e12","1503944583220-79d8926ad5e2"].map((id, i) => (
                <img
                  key={id}
                  src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=400&q=80`}
                  alt=""
                  loading="lazy"
                  className={`h-28 sm:h-36 w-full object-cover rounded-2xl shadow-luxe ${i % 2 ? "animate-float-slow" : "animate-float"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="best-sellers">
        <SectionHeader eyebrow="Loved by many" title="Best Sellers" subtitle="Our most-loved products, chosen by you." />
        <ProductGrid items={bestSellers()} />
      </Section>

      <Section id="why">
        <SectionHeader eyebrow="Why Fusion" title="Why shoppers choose us" subtitle="Everything we do is designed to make you love where you shop." />
        <Features />
      </Section>

      <Section id="reviews" className="rounded-[3rem] bg-[color:var(--secondary)] mx-4 sm:mx-6 lg:mx-8 max-w-none">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Reviews" title="What our customers say" />
          <Testimonials />
        </div>
      </Section>

      <Section id="instagram">
        <SectionHeader eyebrow="@fusionshoezone" title="Follow the movement" subtitle="Tag us to be featured in our gallery." />
        <InstagramGallery />
      </Section>
    </>
  );
}
