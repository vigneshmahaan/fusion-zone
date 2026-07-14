import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { CatalogControls } from "@/components/site/CatalogControls";
import { byCategory } from "@/data/products";

export const Route = createFileRoute("/kids")({
  component: KidsPage,
  head: () => ({
    meta: [
      { title: "Kids Collection · Fusion Shoe Zone" },
      { name: "description", content: "Shoes, t-shirts, dresses, jackets and accessories for kids at Fusion Shoe Zone." },
      { property: "og:title", content: "Kids Collection · Fusion Shoe Zone" },
      { property: "og:description", content: "Playful, comfortable, and full of personality — for the littlest icons." },
    ],
  }),
});

function KidsPage() {
  return (
    <>
      <PageHeader
        crumb="Kids Collection"
        title="Kids Collection"
        subtitle="Soft materials, bright colors and big personality — ready for every adventure."
      />
      <Section>
        <CatalogControls items={byCategory("kids")} />
      </Section>
    </>
  );
}
