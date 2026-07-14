import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { ProductGrid } from "@/components/site/ProductGrid";
import { products } from "@/data/products";

export const Route = createFileRoute("/offers")({
  component: OffersPage,
  head: () => ({
    meta: [
      { title: "Special Offers · Fusion Shoe Zone" },
      { name: "description", content: "Up to 50% off on premium shoes, accessories and kids fashion." },
      { property: "og:title", content: "Special Offers · Fusion Shoe Zone" },
      { property: "og:description", content: "Iconic pieces at unbeatable prices." },
    ],
  }),
});

function OffersPage() {
  const deals = products.filter((p) => p.oldPrice);
  return (
    <>
      <PageHeader crumb="Offers" title="Up to 50% Off" subtitle="Limited-time deals across every category. When they're gone, they're gone." />
      <Section>
        <ProductGrid items={deals} />
      </Section>
    </>
  );
}
