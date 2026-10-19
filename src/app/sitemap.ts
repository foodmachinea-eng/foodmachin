import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "about/", "products/", "manufacturing/", "quality/", "contact/"].map((p) => ({
    url: `${site.url}/${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const productPages = products.map((p) => ({
    url: `${site.url}/products/${p.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pages, ...productPages];
}
