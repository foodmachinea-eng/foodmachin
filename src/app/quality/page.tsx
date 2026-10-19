import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cog, Cpu, Droplets, FlaskConical, Ruler, ShieldCheck } from "lucide-react";
import { EnquiryCTA, IllustrativeNote, PageHero, SectionHeading } from "@/components/ui";
import { products } from "@/data/products";
import { facilityImages, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Quality",
  description: `Quality at ${site.legalName}: food-grade stainless steel and hardchrome construction, SS 304 bodies, an in-house quality lab and testing facilities.`,
  alternates: { canonical: "/quality/" },
};

export default function QualityPage() {
  const ss304 = products.filter((p) => p.specs.some((s) => s.value.includes("SS 304")) || p.features.some((f) => f.includes("SS 304")));

  return (
    <>
      <PageHero
        eyebrow="Quality"
        title="Built for food contact. Checked before dispatch."
        intro="How Aksar approaches construction, hygiene and consistency across its machinery."
        crumbs={[{ href: "/", label: "Home" }, { label: "Quality" }]}
        image={{ src: facilityImages.team.src, alt: "" }}
      />

      <section className="py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Construction"
            title="What goes into an Aksar machine"
            intro="Quality commitments drawn from the company's published product and facility information."
          />
          <div className="mt-14 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, t: "Food-grade materials", d: "Machines are made with food-grade stainless steel and hardchrome." },
              { icon: Droplets, t: "SS 304 bodies", d: "Peda forming, pressing and double-screw models use a full SS 304 body; the gulab jamun fryer uses SS 304 or anodised parts." },
              { icon: Ruler, t: "Consistent pieces", d: "Forming and rounding machines are designed for uniform piece size, shape and weight." },
              { icon: Cpu, t: "Controlled operation", d: "PLC based control on selected machines such as the Rasmalai Making Machine." },
              { icon: FlaskConical, t: "Quality lab", d: "An in-house quality lab and quality testing facilities." },
              { icon: Cog, t: "Servicing", d: "The manufacturer provides servicing for the machines it builds." },
            ].map(({ icon: Icon, t, d }, i) => (
              <div key={t} className="bg-white p-8" data-reveal style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}>
                <Icon size={26} strokeWidth={1.5} className="text-brand" aria-hidden />
                <h3 className="mt-6 font-display text-xl font-bold">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-steel-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="container relative grid gap-14 lg:grid-cols-2">
          <div data-reveal>
            <p className="eyebrow eyebrow-light">Customer requirements</p>
            <h2 className="mt-4 text-[32px] font-extrabold leading-[1.08] tracking-tightest text-white sm:text-[42px]">
              Quality starts with the right machine for your product.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-steel-300">
              Piece weight, mixture consistency and daily volume all affect how a machine should be set up.
              Sharing these details early helps the team recommend dies, attachments and capacity that fit.
            </p>
            <div className="mt-6">
              <IllustrativeNote>Checklist below is a suggested enquiry guide, not a formal QA procedure.</IllustrativeNote>
            </div>
          </div>
          <ul className="space-y-px bg-white/10" data-reveal>
            {[
              "Product(s) you want to make",
              "Piece weight and shape",
              "Required output per hour or per day",
              "Heating preference — electric or gas",
              "Space and power available on site",
            ].map((t, i) => (
              <li key={t} className="flex items-center gap-5 bg-ink px-6 py-5">
                <span className="font-mono text-[12px] text-brand">0{i + 1}</span>
                <span className="text-[16px] text-white">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container">
          <SectionHeading eyebrow="SS 304 construction" title="Machines with SS 304 bodies or parts" />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ss304.map((p) => (
              <li key={p.slug} data-reveal>
                <Link
                  href={`/products/${p.slug}/`}
                  className="group flex items-center justify-between border border-steel-200 px-5 py-4 transition-colors hover:border-ink"
                >
                  <span className="font-display text-[17px] font-semibold">{p.name}</span>
                  <ArrowRight size={16} className="text-steel-300 transition-transform group-hover:translate-x-1 group-hover:text-brand" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EnquiryCTA />
    </>
  );
}
