import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProductImage from "./ProductImage";
import { getCategory, type Product } from "@/data/products";

export default function ProductCard({ product, index }: { product: Product; index?: number }) {
  const cat = getCategory(product.category);
  const keySpec = product.specs[0];
  const href = `/products/${product.slug}/`;

  return (
    <article
      data-reveal
      style={{ ["--reveal-delay" as string]: `${((index ?? 0) % 4) * 70}ms` }}
      className="group flex h-full flex-col border border-steel-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-steel-300 hover:shadow-[0_24px_50px_-28px_rgba(15,17,19,0.35)]"
    >
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden bg-white" tabIndex={-1} aria-hidden>
        <div className="absolute inset-0 p-6">
          <ProductImage src={product.images[0]} alt={product.name} zoom />
        </div>
        <span className="absolute left-0 top-0 bg-ink px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white">
          {cat?.short}
        </span>
      </Link>

      <div className="flex flex-1 flex-col border-t border-steel-100 p-5 sm:p-6">
        <h3 className="font-display text-[19px] font-bold leading-snug">
          <Link href={href} className="hover:text-brand">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-steel-600">{product.summary}</p>

        {keySpec && (
          <dl className="mt-4 flex items-baseline justify-between gap-4 border-t border-dashed border-steel-200 pt-3 font-mono text-[11px] uppercase tracking-[0.08em]">
            <dt className="text-steel-500">{keySpec.label}</dt>
            <dd className="text-right font-medium text-ink">{keySpec.value}</dd>
          </dl>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-5">
          <Link href={href} className="link-underline text-[14px]">
            View Details <ArrowUpRight size={15} aria-hidden />
          </Link>
          <Link
            href={`/contact/?product=${product.slug}#enquiry`}
            className="text-[14px] font-semibold text-brand hover:text-brand-dark"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </article>
  );
}
