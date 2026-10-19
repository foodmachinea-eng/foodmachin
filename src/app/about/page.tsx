import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Boxes, FlaskConical, Globe, Handshake, Microscope, Warehouse } from "lucide-react";
import ProductImage from "@/components/ProductImage";
import { EnquiryCTA, PageHero, SectionHeading } from "@/components/ui";
import { categories, getProduct, productsInCategory } from "@/data/products";
import { facilityImages, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `About ${site.legalName} — manufacturer and exporter of sweet, namkeen and food processing machinery in Wadhwan, Gujarat.`,
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Machinery for India's sweet and snack makers"
        intro={`${site.legalName} designs, manufactures and services food processing machines from Wadhwan, Gujarat.`}
        crumbs={[{ href: "/", label: "Home" }, { label: "About Us" }]}
        image={{ src: facilityImages.infrastructure.src, alt: "" }}
      />

      {/* Introduction */}
      <section className="py-20 sm:py-28">
        <div className="container grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7" data-reveal>
            <p className="eyebrow">Company profile</p>
            <h2 className="mt-4 text-[32px] font-extrabold leading-[1.08] tracking-tightest sm:text-[42px]">
              A manufacturer and exporter of food processing machines.
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-steel-600">
              <p>
                {site.legalName} manufactures machines used in the production of sweets, snacks, bakery and
                dairy items. The range includes laddu, peda, rasgulla, rasmalai, gulab jamun, modak, halwa,
                khoya and namkeen machines, along with gulla and kaju katli cutting machines and frying
                systems.
              </p>
              <p>
                Machines are built using food-grade stainless steel and hardchrome. The company operates an
                R&amp;D unit, a quality lab, production and warehousing, and offers contract manufacturing and
                OEM work alongside its standard range.
              </p>
              <p>{site.heritage}</p>
            </div>
          </div>
          <aside className="lg:col-span-5" data-reveal>
            <dl className="divide-y divide-steel-200 border-y border-ink">
              {[
                { k: "Company", v: site.legalName },
                { k: "Location", v: site.address.full },
                { k: "Partner", v: site.partner },
                { k: "Business", v: "Manufacturer & exporter" },
                { k: "Services", v: "Manufacturing, servicing, contract manufacturing & OEM" },
                { k: "GSTIN", v: site.gstin },
              ].map((r) => (
                <div key={r.k} className="grid grid-cols-3 gap-4 py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-steel-500">{r.k}</dt>
                  <dd className="col-span-2 text-[15px] font-medium text-ink">{r.v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Imagery */}
      <section className="pb-20 sm:pb-28">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(facilityImages).map((img, i) => (
            <figure
              key={img.src}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              className={`group relative overflow-hidden bg-steel-100 ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <ProductImage src={img.src} alt={img.alt} fit="cover" placeholder="Photo" className="aspect-square" zoom />
              <figcaption className="absolute bottom-0 left-0 bg-white px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Strengths */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="container relative">
          <SectionHeading light eyebrow="Our strengths" title="What sits behind every machine" />
          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Microscope, t: "R&D unit", d: "In-house research and development for machine design and attachments." },
              { icon: FlaskConical, t: "Quality lab", d: "Quality testing facilities to check machines before dispatch." },
              { icon: Boxes, t: "Production", d: "Fabrication and assembly carried out in the company's own facility." },
              { icon: Warehouse, t: "Warehousing", d: "Dedicated warehousing for materials and finished machines." },
              { icon: Handshake, t: "Contract & OEM", d: "Contract manufacturing and OEM work for specific requirements." },
              { icon: Globe, t: "Export", d: `Export markets listed by the company include ${site.exportMarkets.join(", ")}.` },
            ].map(({ icon: Icon, t, d }, i) => (
              <div key={t} className="bg-ink p-8" data-reveal style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}>
                <Icon size={26} strokeWidth={1.5} className="text-brand" aria-hidden />
                <h3 className="mt-6 font-display text-xl font-bold text-white">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-steel-400">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products overview */}
      <section className="py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Products & applications"
            title="Our product range"
            action={
              <Link href="/products/" className="btn-outline">
                Browse Catalogue <ArrowRight size={16} className="arrow" aria-hidden />
              </Link>
            }
          />
          <div className="mt-12 divide-y divide-steel-200 border-y border-steel-200">
            {categories.map((c, i) => {
              const cover = getProduct(c.coverProduct);
              const items = productsInCategory(c.slug);
              return (
                <Link
                  key={c.slug}
                  href={`/products/?category=${c.slug}`}
                  data-reveal
                  className="group grid items-center gap-5 py-6 sm:grid-cols-12"
                >
                  <span className="font-mono text-[12px] text-steel-400 sm:col-span-1">0{i + 1}</span>
                  <div className="hidden h-20 w-24 bg-white p-1 sm:col-span-2 sm:block">
                    <ProductImage src={cover?.images[0]} alt={c.name} />
                  </div>
                  <div className="sm:col-span-4">
                    <h3 className="font-display text-xl font-bold transition-colors group-hover:text-brand">{c.name}</h3>
                  </div>
                  <p className="text-[14.5px] text-steel-600 sm:col-span-4">
                    {items.map((p) => p.name).join(" · ")}
                  </p>
                  <ArrowRight className="hidden text-steel-300 transition-transform group-hover:translate-x-1 group-hover:text-brand sm:col-span-1 sm:block sm:justify-self-end" aria-hidden />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </>
  );
}
