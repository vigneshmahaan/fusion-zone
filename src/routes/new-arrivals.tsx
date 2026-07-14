import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { ProductGrid } from "@/components/site/ProductGrid";
import { newArrivals } from "@/data/products";

export const Route = createFileRoute("/new-arrivals")({
  component: NewArrivalsPage,
  head: () => ({
    meta: [
      { title: "New Arrivals · Fusion Shoe Zone" },
      { name: "description", content: "The latest drops in shoes, accessories and kids fashion at Fusion Shoe Zone." },
      { property: "og:title", content: "New Arrivals · Fusion Shoe Zone" },
      { property: "og:description", content: "Fresh drops across every category. Be first." },
    ],
  }),
});

function NewArrivalsPage() {
  return (
    <>
      <PageHeader crumb="New Arrivals" title="Just Landed" subtitle="This week's freshest additions across every category." />
      <Section>
        <ProductGrid items={newArrivals()} />
      </Section>
    </>
  );
}
