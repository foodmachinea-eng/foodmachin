import type { Metadata } from "next";
import { Suspense } from "react";
import { ArrowUpRight, Clock, MapPin, Phone, User } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { PageHero } from "@/components/ui";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us & Request a Quote",
  description: `Contact ${site.legalName}, Wadhwan, Surendranagar, Gujarat. Call ${site.phone.display} or send an enquiry for sweet and namkeen making machines.`,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a quote"
        intro="Tell us what you produce and the output you need. Our team will help you find suitable machinery."
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      />

      <section id="enquiry" className="scroll-mt-24 bg-steel-50 py-14 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-12">
          <aside className="space-y-4 lg:col-span-4">
            <a
              href={site.phone.href}
              className="group block border border-steel-200 bg-white p-6 transition-colors hover:border-ink"
            >
              <Phone size={22} strokeWidth={1.6} className="text-brand" aria-hidden />
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-steel-500">Call us</p>
              <p className="mt-1 font-display text-2xl font-bold">{site.phone.display}</p>
            </a>

            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-steel-200 bg-white p-6 transition-colors hover:border-ink"
            >
              <div className="flex items-start justify-between">
                <MapPin size={22} strokeWidth={1.6} className="text-brand" aria-hidden />
                <ArrowUpRight size={18} className="text-steel-300 group-hover:text-brand" aria-hidden />
              </div>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-steel-500">Location</p>
              <p className="mt-1 font-display text-xl font-bold leading-snug">
                {site.address.line}
                <br />
                {site.address.region}
              </p>
              <p className="mt-3 text-[14px] font-semibold text-brand">Open in Google Maps</p>
            </a>

            <div className="border border-steel-200 bg-white p-6">
              <User size={22} strokeWidth={1.6} className="text-brand" aria-hidden />
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-steel-500">Contact person</p>
              <p className="mt-1 font-display text-xl font-bold">{site.partner}</p>
              <p className="text-[14px] text-steel-600">Partner, {site.legalName}</p>
            </div>

            <div className="flex gap-4 bg-ink p-6 text-steel-300">
              <Clock size={20} className="mt-0.5 shrink-0 text-brand" aria-hidden />
              <p className="text-[14px] leading-relaxed">
                Include your product, piece weight and required output — it helps us respond with a relevant
                recommendation.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <Suspense fallback={<div className="h-[640px] border border-steel-200 bg-white" />}>
              <EnquiryForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
