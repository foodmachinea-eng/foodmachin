import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Factory, FlaskConical, PenTool, Truck, Wrench } from "lucide-react";
import ProductImage from "@/components/ProductImage";
import { EnquiryCTA, IllustrativeNote, PageHero, SectionHeading } from "@/components/ui";
import { facilityImages, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Manufacturing",
  description: `Manufacturing at ${site.legalName}: in-house R&D, food-grade stainless steel fabrication, quality testing and servicing from Wadhwan, Gujarat.`,
  alternates: { canonical: "/manufacturing/" },
};

const steps = [
  {
    icon: ClipboardCheck,
    t: "Requirement study",
    d: "Every enquiry starts with the product — mixture type, piece weight, shape and the output you need per hour or per day.",
  },
  {
    icon: PenTool,
    t: "Design & engineering",
    d: "The R&D unit develops the machine configuration: dies for designer peda and modak, attachments such as rasmalai tikki formers, and capacity.",
  },
  {
    icon: Factory,
    t: "Fabrication",
    d: "Food-contact parts are fabricated in food-grade stainless steel, with hardchrome where the application calls for it.",
  },
  {
    icon: Wrench,
    t: "Assembly",
    d: "Drives, agitators, extruder heads and controls — including PLC control on selected models — are assembled and set up.",
  },
  {
    icon: FlaskConical,
    t: "Testing",
    d: "Machines are checked using the company's quality testing facilities before dispatch.",
  },
  {
    icon: Truck,
    t: "Dispatch & servicing",
    d: "Machines are dispatched from Wadhwan, Gujarat, with servicing support from the manufacturer.",
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title="Designed, built and serviced in-house"
        intro="An overview of how Aksar machines are engineered and built at the company's facility in Wadhwan, Gujarat."
        crumbs={[{ href: "/", label: "Home" }, { label: "Manufacturing" }]}
        image={{ src: facilityImages.manufacturing.src, alt: "" }}
      />

      <section className="py-20 sm:py-28">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <figure className="relative" data-reveal>
            <div className="aspect-[4/3] overflow-hidden bg-steel-100">
              <ProductImage src={facilityImages.manufacturing.src} alt={facilityImages.manufacturing.alt} fit="cover" placeholder="Photo" />
            </div>
            <figcaption className="absolute -bottom-5 right-5 bg-ink px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white">
              {facilityImages.manufacturing.caption}
            </figcaption>
          </figure>
          <div data-reveal>
            <p className="eyebrow">Facility</p>
            <h2 className="mt-4 text-[32px] font-extrabold leading-[1.08] tracking-tightest sm:text-[42px]">
              R&amp;D, production, quality lab and warehousing under one roof.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-steel-600">
              {site.legalName} runs its own R&amp;D unit, production, quality lab and warehousing, which
              allows machines to be adapted to specific products and supported after installation. Contract
              manufacturing and OEM work are also offered.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[facilityImages.warehouse, facilityImages.team].map((img) => (
                <figure key={img.src} className="relative aspect-square overflow-hidden bg-steel-100">
                  <ProductImage src={img.src} alt={img.alt} fit="cover" placeholder="Photo" />
                  <figcaption className="absolute bottom-0 left-0 bg-white px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em]">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-steel-200 bg-steel-50 py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Process"
            title="How a machine is made"
            intro="From the first conversation about your product to a machine running on your floor."
          />
          <div className="mt-6" data-reveal>
            <IllustrativeNote>
              Illustrative process overview based on the company&apos;s published capabilities — exact stages to be
              confirmed with Aksar&apos;s production team.
            </IllustrativeNote>
          </div>
          <ol className="mt-12 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ icon: Icon, t, d }, i) => (
              <li
                key={t}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}
                className="relative bg-white p-8"
              >
                <span className="absolute right-6 top-5 font-display text-[56px] font-extrabold leading-none text-steel-100">
                  0{i + 1}
                </span>
                <Icon size={26} strokeWidth={1.5} className="relative text-brand" aria-hidden />
                <h3 className="relative mt-8 font-display text-xl font-bold">{t}</h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-steel-600">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap gap-3" data-reveal>
            <Link href="/quality/" className="btn-dark">
              Quality & Construction <ArrowRight size={16} className="arrow" aria-hidden />
            </Link>
            <Link href="/products/" className="btn-outline">
              View Machines
            </Link>
          </div>
        </div>
      </section>

      <EnquiryCTA />
    </>
  );
}
