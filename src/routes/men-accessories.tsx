import { createFileRoute, useSearch } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { CatalogControls } from "@/components/site/CatalogControls";
import { byCategory } from "@/data/products";
import { z } from "zod";

const accessoriesSearchSchema = z.object({
  subcategory: z.string().optional().catch("All"),
});

export const Route = createFileRoute("/men-accessories")({
  validateSearch: (search) => accessoriesSearchSchema.parse(search),
  component: MenAccessoriesPage,
  head: () => ({
    meta: [
      { title: "Men's Accessories · Fusion Shoe Zone" },
      { name: "description", content: "Discover premium rings, bracelets, necklaces, and other accessories at Fusion Shoe Zone." },
      { property: "og:title", content: "Men's Accessories · Fusion Shoe Zone" },
      { property: "og:description", content: "Rings, bracelets, and neck chains — details that define your style." },
    ],
  }),
});

function MenAccessoriesPage() {
  const search = useSearch({ from: "/men-accessories" });
  const defaultSub = search.subcategory || "All";

  return (
    <>
      <PageHeader
        crumb="Accessories"
        title="Men's Accessories"
        subtitle="Rings, bracelets, and chains — details that define your style."
      />
      <Section>
        <CatalogControls items={byCategory("accessories")} defaultSubcategory={defaultSub} />
      </Section>
    </>
  );
}
