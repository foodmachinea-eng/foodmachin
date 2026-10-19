import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/data/site";
import DecorImage from "./DecorImage";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  align = "left",
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <div
      data-reveal
      className={`flex flex-col gap-6 ${
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={align === "center" ? "max-w-2xl" : "max-w-2xl"}>
        <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</p>
        <h2
          className={`mt-4 text-[32px] font-extrabold leading-[1.08] tracking-tightest sm:text-[40px] lg:text-[46px] ${
            light ? "text-white" : ""
          }`}
        >
          {title}
        </h2>
        {intro && (
          <p className={`mt-5 text-[17px] leading-relaxed ${light ? "text-steel-300" : "text-steel-600"}`}>
            {intro}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

/** Inner-page banner with breadcrumb */
export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs: { href?: string; label: string }[];
  image?: { src: string; alt: string };
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="bg-grid absolute inset-0" aria-hidden />
      {image && (
        <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block" aria-hidden>
          <DecorImage src={image.src} className="h-full w-full object-cover opacity-45 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
        </div>
      )}
      <div className="container relative py-16 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb" className="animate-fade-in">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-steel-400">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-steel-600">/</span>}
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-steel-200" aria-current="page">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="eyebrow eyebrow-light mt-10 animate-fade-up">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl animate-fade-up text-[38px] font-extrabold leading-[1.04] tracking-tightest text-white [animation-delay:80ms] sm:text-[52px] lg:text-[60px]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl animate-fade-up text-[17px] leading-relaxed text-steel-300 [animation-delay:160ms] sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

export function EnquiryCTA() {
  return (
    <section className="relative overflow-hidden bg-brand text-white">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="container relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-12">
        <div className="lg:col-span-8" data-reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/70">Enquiry</p>
          <h2 className="mt-4 text-[32px] font-extrabold leading-[1.08] tracking-tightest text-white sm:text-[44px]">
            Looking for the Right Machinery for Your Production?
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/85">
            Tell us about your requirements and our team can help you explore suitable machinery.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch" data-reveal>
          <Link href="/contact/#enquiry" className="btn bg-ink text-white hover:bg-ink-700">
            Request a Quote <ArrowRight size={16} className="arrow" aria-hidden />
          </Link>
          <a href={site.phone.href} className="btn-outline-light">
            <Phone size={16} aria-hidden /> Call {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}

/** Small label used where content is illustrative rather than company-verified */
export function IllustrativeNote({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-start gap-2 border-l-2 border-brand bg-brand-soft px-3 py-2 text-[13px] leading-snug text-brand-dark">
      {children}
    </p>
  );
}
