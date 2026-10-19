import type { Metadata } from "next";
import { Suspense } from "react";
import Catalogue from "@/components/Catalogue";
import { EnquiryCTA, PageHero } from "@/components/ui";
import { products } from "@/data/products";
import { facilityImages } from "@/data/site";

export const metadata: Metadata = {
  title: "Products — Sweet, Namkeen & Food Processing Machines",
  description:
    "Browse Aksar Food Machine's catalogue: laddu, peda, rasgulla, gulab jamun, halwa, khoya, gulla cutting and namkeen making machines.",
  alternates: { canonical: "/products/" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product catalogue"
        title="Food processing machinery"
        intro={`${products.length} machines for sweets, namkeen, bakery and dairy production. Search by product or filter by production stage.`}
        crumbs={[{ href: "/", label: "Home" }, { label: "Products" }]}
        image={{ src: facilityImages.warehouse.src, alt: "" }}
      />
      <section className="py-14 sm:py-20">
        <div className="container">
          <Suspense fallback={<div className="h-96" />}>
            <Catalogue />
          </Suspense>
        </div>
      </section>
      <EnquiryCTA />
    </>
  );
}
