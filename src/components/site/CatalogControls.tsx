import { useMemo, useState, useEffect } from "react";
import type { Product } from "@/data/products";
import { ProductGrid } from "./ProductGrid";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function CatalogControls({ items, defaultSubcategory = "All" }: { items: Product[]; defaultSubcategory?: string }) {
  const subs = useMemo(() => Array.from(new Set(items.map((p) => p.subcategory))), [items]);
  const [sub, setSub] = useState<string>(defaultSubcategory);
  const [sort, setSort] = useState<string>("featured");

  useEffect(() => {
    if (defaultSubcategory) {
      setSub(defaultSubcategory);
    }
  }, [defaultSubcategory]);

  const filtered = useMemo(() => {
    let list = sub === "All" ? items : items.filter((p) => p.subcategory === sub);
    switch (sort) {
      case "price-asc": list = [...list].sort((a, b) => a.price - b.price); break;
      case "price-desc": list = [...list].sort((a, b) => b.price - a.price); break;
      case "rating": list = [...list].sort((a, b) => b.rating - a.rating); break;
    }
    return list;
  }, [items, sub, sort]);

  return (
    <>
      <div className="mt-10 flex flex-wrap items-center gap-3 justify-between">
        <div className="flex flex-wrap gap-2">
          {["All", ...subs].map((s) => (
            <Button
              key={s}
              variant={s === sub ? "default" : "outline"}
              size="sm"
              className={`rounded-full ${s === sub ? "gradient-royal text-white" : ""}`}
              onClick={() => setSub(s)}
            >
              {s}
            </Button>
          ))}
        </div>
        <Select value={sort} onValueChange={setSort}>
          <SelectTrigger className="w-44 rounded-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="rating">Top Rated</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ProductGrid items={filtered} />
    </>
  );
}
