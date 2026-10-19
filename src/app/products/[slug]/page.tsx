import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Phone } from "lucide-react";
import Gallery from "@/components/Gallery";
import ProductCard from "@/components/ProductCard";
import { EnquiryCTA } from "@/components/ui";
import { getCategory, getProduct, products, relatedProducts } from "@/data/products";
import { site } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: p.name,
    description: `${p.summary} Manufactured by ${site.legalName}, Wadhwan, Gujarat.`,
    alternates: { canonical: `/products/${p.slug}/` },
    openGraph: {
      title: `${p.name} | ${site.name}`,
      description: p.summary,
      images: p.images[0] ? [{ url: p.images[0], width: 500, height: 500, alt: p.name }] : undefined,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category)!;
  const related = relatedProducts(product, 4);
  const quoteHref = `/contact/?product=${product.slug}#enquiry`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.overview,
    image: product.images,
    category: category.name,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@type": "Organization", name: site.legalName },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div className="border-b border-steel-200 bg-steel-50">
        <nav aria-label="Breadcrumb" className="container py-4">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-steel-500">
            <li>
              <Link href="/" className="hover:text-ink">Home</Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/products/" className="hover:text-ink">Products</Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href={`/products/?category=${category.slug}`} className="hover:text-ink">
                {category.short}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-ink" aria-current="page">{product.name}</li>
          </ol>
        </nav>
      </div>

      {/* Main */}
      <section className="py-12 sm:py-16">
        <div className="container grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="animate-fade-in lg:col-span-6">
            <Gallery images={product.images} name={product.name} />
          </div>

          <div className="lg:col-span-6">
            <Link
              href={`/products/?category=${category.slug}`}
              className="eyebrow animate-fade-up hover:text-brand"
            >
              {category.name}
            </Link>
            <h1 className="mt-4 animate-fade-up text-[36px] font-extrabold leading-[1.05] tracking-tightest [animation-delay:60ms] sm:text-[48px]">
              {product.name}
            </h1>
            <p className="mt-5 animate-fade-up text-lg leading-relaxed text-steel-600 [animation-delay:120ms]">
              {product.overview}
            </p>

            <div className="mt-8 flex animate-fade-up flex-wrap gap-3 [animation-delay:180ms]">
              <Link href={quoteHref} className="btn-primary">
                Request a Quote <ArrowRight size={16} className="arrow" aria-hidden />
              </Link>
              <a href={site.phone.href} className="btn-outline">
                <Phone size={16} aria-hidden /> {site.phone.display}
              </a>
            </div>

            {/* Specs */}
            <div className="mt-12 animate-fade-up [animation-delay:240ms]">
              <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-steel-500">
                Technical specifications
              </h2>
              {product.specs.length > 0 ? (
                <>
                  <dl className="mt-4 border-t border-ink">
                    {product.specs.map((s) => (
                      <div key={s.label} className="grid grid-cols-2 gap-4 border-b border-steel-200 py-3.5 text-[15px]">
                        <dt className="text-steel-600">{s.label}</dt>
                        <dd className="font-semibold text-ink">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-[13px] text-steel-500">
                    As published by the manufacturer. Final specifications depend on configuration — confirm
                    with our team when requesting a quote.
                  </p>
                </>
              ) : (
                <p className="mt-4 border border-dashed border-steel-300 bg-steel-50 px-5 py-4 text-[15px] text-steel-600">
                  Detailed specifications for this machine are available on request.{" "}
                  <Link href={quoteHref} className="font-semibold text-brand hover:text-brand-dark">
                    Ask for the spec sheet →
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features & applications */}
      <section className="border-t border-steel-200 bg-steel-50 py-16 sm:py-20">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div data-reveal>
            <p className="eyebrow">Key features</p>
            <ul className="mt-6 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-4 border border-steel-200 bg-white px-5 py-4 text-[15.5px]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-brand text-white">
                    <Check size={13} strokeWidth={3} aria-hidden />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <p className="eyebrow">Applications</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.applications.map((a) => (
                <li key={a} className="border-l-2 border-ink bg-white px-5 py-4 font-display text-[17px] font-semibold">
                  {a}
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-ink p-6 text-white sm:p-8">
              <h3 className="font-display text-xl font-bold text-white">Need this for a different product?</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-steel-400">
                Share your recipe, piece weight and daily output — we&apos;ll advise on dies, attachments or a
                more suitable machine.
              </p>
              <Link href={quoteHref} className="btn-primary mt-6">
                Discuss Your Requirement
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 sm:py-24">
          <div className="container">
            <div className="flex flex-wrap items-end justify-between gap-4" data-reveal>
              <div>
                <p className="eyebrow">Related machinery</p>
                <h2 className="mt-3 text-[30px] font-extrabold tracking-tightest sm:text-[36px]">You may also need</h2>
              </div>
              <Link href="/products/" className="link-underline">
                Full catalogue <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <EnquiryCTA />
    </>
  );
}
