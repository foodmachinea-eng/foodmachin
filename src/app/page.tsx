import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardCheck,
  Cog,
  Factory,
  FlaskConical,
  Headset,
  Layers,
  PenTool,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import ProductImage from "@/components/ProductImage";
import { EnquiryCTA, IllustrativeNote, SectionHeading } from "@/components/ui";
import { categories, featuredProducts, getProduct, productsInCategory } from "@/data/products";
import { facilityImages, site } from "@/data/site";

export default function HomePage() {
  const heroMain = getProduct("laddu-making-machine")!;
  const heroSecond = getProduct("peda-forming-machine")!;

  return (
    <>
      {/* ───────────────── HERO ───────────────── */}
      <section className="relative overflow-hidden bg-steel-50">
        <div className="bg-grid-light absolute inset-0" aria-hidden />
        <div className="container relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="min-w-0 lg:col-span-6 lg:pr-6">
            <p className="eyebrow animate-fade-up">Food processing machinery · {site.address.region}</p>
            <h1 className="mt-6 animate-fade-up text-[42px] font-extrabold leading-[1.02] tracking-tightest [animation-delay:80ms] sm:text-[54px] xl:text-[62px]">
              Engineering Smarter Solutions for{" "}
              <span className="relative inline-block text-brand">
                Food Manufacturing
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-brand/30"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path d="M2 9 C 80 2, 220 2, 298 8" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-steel-600 [animation-delay:160ms]">
              Explore machinery designed to support efficient, consistent and scalable food production.
            </p>
            <div className="mt-9 flex animate-fade-up flex-wrap gap-3 [animation-delay:240ms]">
              <Link href="/products/" className="btn-dark">
                Explore Our Machines <ArrowRight size={16} className="arrow" aria-hidden />
              </Link>
              <Link href="/contact/#enquiry" className="btn-primary">
                Request a Quote
              </Link>
            </div>

            <dl className="mt-12 grid max-w-xl animate-fade-up grid-cols-1 gap-px border border-steel-200 bg-steel-200 [animation-delay:320ms] sm:grid-cols-3">
              {[
                { k: "Built for", v: "Sweets · Namkeen · Bakery · Dairy" },
                { k: "Construction", v: "Food-grade stainless steel" },
                { k: "In-house", v: "R&D unit & quality lab" },
              ].map((f) => (
                <div key={f.k} className="bg-white p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel-500">{f.k}</dt>
                  <dd className="mt-1.5 text-[14px] font-semibold leading-snug text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Image composition */}
          <div className="relative lg:col-span-6">
            <div className="relative ml-auto aspect-[5/4] w-full max-w-[620px] animate-fade-in overflow-hidden bg-ink [animation-delay:150ms]">
              <ProductImage src={facilityImages.manufacturing.src} alt={facilityImages.manufacturing.alt} fit="cover" placeholder="Photo" className="opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <p className="absolute bottom-5 left-5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/80">
                Aksar · {facilityImages.manufacturing.caption}
              </p>
            </div>

            <Link
              href={`/products/${heroMain.slug}/`}
              className="group absolute -bottom-8 left-0 w-[52%] max-w-[270px] animate-fade-up border border-steel-200 bg-white shadow-[0_30px_60px_-30px_rgba(15,17,19,0.5)] [animation-delay:400ms] sm:-bottom-10 lg:-left-4"
            >
              <div className="aspect-square overflow-hidden p-4">
                <ProductImage src={heroMain.images[0]} alt={heroMain.name} zoom priority />
              </div>
              <div className="border-t border-steel-100 px-4 py-3">
                <p className="font-display text-[15px] font-bold leading-tight">{heroMain.name}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-steel-500">
                  {heroMain.specs[0].value}
                </p>
              </div>
            </Link>

            <Link
              href={`/products/${heroSecond.slug}/`}
              className="group absolute -top-6 right-3 hidden w-[34%] max-w-[190px] animate-fade-up border border-steel-200 bg-white shadow-[0_30px_60px_-30px_rgba(15,17,19,0.5)] [animation-delay:520ms] sm:block lg:-right-4"
            >
              <div className="aspect-square overflow-hidden p-3">
                <ProductImage src={heroSecond.images[0]} alt={heroSecond.name} zoom priority />
              </div>
              <p className="border-t border-steel-100 px-3 py-2 font-display text-[13px] font-bold leading-tight">
                {heroSecond.name}
              </p>
            </Link>
          </div>
        </div>
        <div className="h-10 sm:h-14" />
      </section>

      {/* ───────────────── INTRO ───────────────── */}
      <section className="py-20 sm:py-28">
        <div className="container grid items-center gap-14 lg:grid-cols-12">
          <div className="grid grid-cols-2 gap-4 lg:col-span-6" data-reveal>
            <figure className="relative col-span-2 aspect-[16/10] overflow-hidden bg-steel-100 sm:col-span-1 sm:row-span-2 sm:aspect-auto">
              <ProductImage src={facilityImages.infrastructure.src} alt={facilityImages.infrastructure.alt} fit="cover" placeholder="Photo" />
              <figcaption className="absolute bottom-0 left-0 bg-white px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
                {facilityImages.infrastructure.caption}
              </figcaption>
            </figure>
            <figure className="relative aspect-square overflow-hidden bg-steel-100">
              <ProductImage src={facilityImages.warehouse.src} alt={facilityImages.warehouse.alt} fit="cover" placeholder="Photo" />
            </figure>
            <div className="flex aspect-square flex-col justify-between bg-ink p-5 text-white">
              <Factory size={26} className="text-brand" aria-hidden />
              <p className="font-display text-[17px] font-bold leading-snug">
                Machines for sweets, snacks, bakery &amp; dairy items
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-8" data-reveal>
            <p className="eyebrow">About Aksar</p>
            <h2 className="mt-4 text-[32px] font-extrabold leading-[1.08] tracking-tightest sm:text-[42px]">
              A food machinery manufacturer focused on Indian sweets and namkeen.
            </h2>
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-steel-600">
              <p>
                {site.legalName} manufactures and exports food processing machines from Wadhwan, Gujarat.
                Our range covers laddu, peda, rasgulla, gulab jamun, halwa, khoya and namkeen production —
                built with food-grade stainless steel and hardchrome.
              </p>
              <p>{site.heritage}</p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["R&D unit", "Quality lab", "Production facility", "Warehousing"].map((t) => (
                <li key={t} className="flex items-center gap-3 border-b border-steel-200 pb-3 text-[15px] font-medium">
                  <span className="h-1.5 w-1.5 bg-brand" aria-hidden /> {t}
                </li>
              ))}
            </ul>
            <Link href="/about/" className="btn-outline mt-10">
              About the Company <ArrowRight size={16} className="arrow" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────── CATEGORIES ───────────────── */}
      <section className="border-y border-steel-200 bg-steel-50 py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Product range"
            title="Machinery for every stage of sweet & namkeen production"
            intro="From portioning and rounding to cooking, moulding and frying — browse by production need."
            action={
              <Link href="/products/" className="link-underline">
                View full catalogue <ArrowUpRight size={16} aria-hidden />
              </Link>
            }
          />
          <div className="mt-14 grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => {
              const cover = getProduct(c.coverProduct);
              const count = productsInCategory(c.slug).length;
              return (
                <Link
                  key={c.slug}
                  href={`/products/?category=${c.slug}`}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}
                  className="group relative flex flex-col bg-white p-6 transition-colors duration-300 hover:bg-ink sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] tracking-[0.16em] text-steel-400 group-hover:text-steel-500">
                      0{i + 1} — {count} machines
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-steel-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                      aria-hidden
                    />
                  </div>
                  <div className="my-6 aspect-[4/3] overflow-hidden bg-white p-3 transition-colors group-hover:bg-white">
                    <ProductImage src={cover?.images[0]} alt={c.name} zoom />
                  </div>
                  <h3 className="font-display text-[21px] font-bold leading-tight transition-colors group-hover:text-white">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-steel-600 transition-colors group-hover:text-steel-400">
                    {c.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand">
                    View Products <ArrowRight size={15} aria-hidden />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────────── FEATURED ───────────────── */}
      <section className="py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Featured machines"
            title="Built to bring consistency to your production line"
            action={
              <Link href="/products/" className="btn-outline">
                All Products <ArrowRight size={16} className="arrow" aria-hidden />
              </Link>
            }
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.slice(0, 8).map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── WHY CHOOSE US ───────────────── */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="container relative">
          <SectionHeading
            light
            eyebrow="Why Aksar"
            title={
              <>
                Practical machinery from a team that <span className="text-brand">builds and services</span> it.
              </>
            }
          />
          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Layers,
                t: "Machinery for food production",
                d: "A focused range for sweets, namkeen, bakery and dairy items — from single machines to complete lines.",
              },
              {
                icon: Wrench,
                t: "Manufacturing & servicing",
                d: "Machines are designed, fabricated and serviced by the same company, with an in-house R&D unit.",
              },
              {
                icon: Headset,
                t: "Product-focused support",
                d: "Talk directly to the team that builds the machine about your product, recipe and output needs.",
              },
              {
                icon: Cog,
                t: "Options for different requirements",
                d: "Contract manufacturing and OEM work are offered alongside the standard range.",
              },
            ].map(({ icon: Icon, t, d }, i) => (
              <div
                key={t}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                className="bg-ink p-7 sm:p-8"
              >
                <Icon size={28} strokeWidth={1.5} className="text-brand" aria-hidden />
                <h3 className="mt-8 font-display text-[20px] font-bold text-white">{t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-steel-400">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── MANUFACTURING PROCESS ───────────────── */}
      <section className="py-20 sm:py-28">
        <div className="container grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Manufacturing"
                title="From requirement to a running machine"
                intro="How a machine typically moves through design, fabrication and commissioning."
              />
              <div className="mt-6" data-reveal>
                <IllustrativeNote>
                  Illustrative process overview — to be confirmed with Aksar&apos;s production team.
                </IllustrativeNote>
              </div>
              <figure className="relative mt-8 aspect-[4/3] overflow-hidden bg-steel-100" data-reveal>
                <ProductImage src={facilityImages.team.src} alt={facilityImages.team.alt} fit="cover" placeholder="Photo" />
              </figure>
            </div>
          </div>
          <ol className="relative lg:col-span-7">
            {[
              {
                icon: ClipboardCheck,
                t: "Requirement study",
                d: "Understanding the product, mixture, piece weight and output you need.",
              },
              {
                icon: PenTool,
                t: "Design & engineering",
                d: "Configuration developed with the in-house R&D unit — dies, attachments and capacity.",
              },
              {
                icon: Factory,
                t: "Fabrication",
                d: "Machines built in food-grade stainless steel, with hardchrome where the application needs it.",
              },
              {
                icon: FlaskConical,
                t: "Testing",
                d: "Checks using the company's quality testing facilities before dispatch.",
              },
              {
                icon: Truck,
                t: "Dispatch & servicing",
                d: "Delivery from Wadhwan, with servicing support from the manufacturer.",
              },
            ].map(({ icon: Icon, t, d }, i, arr) => (
              <li key={t} className="relative flex gap-6 pb-12 last:pb-0" data-reveal>
                {i < arr.length - 1 && (
                  <span className="absolute left-7 top-16 h-[calc(100%-4rem)] w-px bg-steel-200" aria-hidden />
                )}
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center border border-steel-200 bg-white">
                  <Icon size={22} strokeWidth={1.6} className="text-ink" aria-hidden />
                </span>
                <div className="pt-1">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-brand">STEP 0{i + 1}</p>
                  <h3 className="mt-1 font-display text-[22px] font-bold">{t}</h3>
                  <p className="mt-2 max-w-md text-[15.5px] leading-relaxed text-steel-600">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────── QUALITY ───────────────── */}
      <section className="bg-steel-50 py-20 sm:py-28">
        <div className="container grid items-center gap-14 lg:grid-cols-2">
          <div data-reveal>
            <p className="eyebrow">Quality & reliability</p>
            <h2 className="mt-4 text-[32px] font-extrabold leading-[1.08] tracking-tightest sm:text-[42px]">
              Food-contact construction, checked before it leaves the factory.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-steel-600">
              Hygiene and repeatability matter as much as output. Aksar machines are built in food-grade
              stainless steel and hardchrome, and the company maintains its own quality lab and testing
              facilities.
            </p>
            <Link href="/quality/" className="btn-dark mt-9">
              Our Approach to Quality <ArrowRight size={16} className="arrow" aria-hidden />
            </Link>
          </div>
          <div className="grid gap-px border border-steel-200 bg-steel-200 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, t: "SS 304 bodies", d: "Full SS 304 bodies on peda, pressing and forming models." },
              { icon: FlaskConical, t: "Quality lab", d: "In-house quality lab and quality testing facilities." },
              { icon: Cog, t: "Consistent pieces", d: "Designed for uniform size, shape and weight per piece." },
              { icon: ClipboardCheck, t: "PLC control", d: "PLC based control on models such as the Rasmalai machine." },
            ].map(({ icon: Icon, t, d }, i) => (
              <div
                key={t}
                className="bg-white p-7"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <Icon size={24} strokeWidth={1.6} className="text-brand" aria-hidden />
                <h3 className="mt-5 font-display text-lg font-bold">{t}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-steel-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── APPLICATIONS ───────────────── */}
      <section className="py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Applications"
            title="Where our machines work"
            intro="Aksar machinery serves sweet shops, namkeen manufacturers, bakeries and dairies scaling up from manual production."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Indian sweets",
                d: "Laddu, peda, rasgulla, gulab jamun, rasmalai and modak.",
                p: "gulabjamun-making-machine",
                c: "rasgulla-gulabjamun",
              },
              {
                t: "Namkeen & snacks",
                d: "Sev, bhujia, papdi and fried snacks such as mini kachori.",
                p: "fully-automatic-namkeen-making-plant",
                c: "namkeen-frying",
              },
              {
                t: "Bakery items",
                d: "Cookies and mamoul shaped on peda forming and designing machines.",
                p: "peda-designing-forming-machine",
                c: "peda-moulding",
              },
              {
                t: "Dairy products",
                d: "Khoya and milk-based mixtures cooked in agitator machines.",
                p: "khoya-making-machine",
                c: "cooking-mixing",
              },
            ].map((a, i) => {
              const prod = getProduct(a.p);
              return (
                <Link
                  key={a.t}
                  href={`/products/?category=${a.c}`}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
                  className="group relative flex flex-col overflow-hidden border border-steel-200 bg-white"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-white p-5">
                    <ProductImage src={prod?.images[0]} alt={`${prod?.name} for ${a.t.toLowerCase()}`} zoom />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-steel-100 p-6">
                    <h3 className="font-display text-xl font-bold">{a.t}</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-steel-600">{a.d}</p>
                    <span className="mt-auto pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-steel-500 group-hover:text-brand">
                      See machines →
                    </span>
                  </div>
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
