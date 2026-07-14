import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { CatalogControls } from "@/components/site/CatalogControls";
import { byCategory } from "@/data/products";

export const Route = createFileRoute("/shoes")({
  component: ShoesPage,
  head: () => ({
    meta: [
      { title: "Premium Shoes · Fusion Shoe Zone" },
      { name: "description", content: "Explore luxury sneakers, casual, sports and formal shoes at Fusion Shoe Zone." },
      { property: "og:title", content: "Premium Shoes · Fusion Shoe Zone" },
      { property: "og:description", content: "Sneakers, casual, sports and formal — crafted for everyday luxury." },
    ],
  }),
});

function ShoesPage() {
  return (
    <>
      <PageHeader
        crumb="Shoes"
        title="The Shoe Edit"
        subtitle="From street-ready sneakers to boardroom-worthy oxfords — step into premium."
      />
      <Section>
        <CatalogControls items={byCategory("shoes")} />
      </Section>
    </>
  );
}
