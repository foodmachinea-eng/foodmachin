import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site } from "@/data/site";
import { categories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-steel-300">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo dark />
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-steel-400">
            {site.legalName} manufactures food processing machinery for sweets, namkeen, bakery and
            dairy products from Wadhwan, Gujarat.
          </p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-steel-500">
            GSTIN {site.gstin}
          </p>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-steel-500">
            Machinery
          </h2>
          <ul className="mt-5 space-y-3 text-[15px]">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/products/?category=${c.slug}`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-steel-500">
            Company
          </h2>
          <ul className="mt-5 space-y-3 text-[15px]">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-steel-500">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-[15px]">
            <li>
              <a href={site.phone.href} className="flex items-start gap-3 hover:text-white">
                <Phone size={17} className="mt-0.5 shrink-0 text-brand" aria-hidden />
                {site.phone.display}
              </a>
            </li>
            <li>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white"
              >
                <MapPin size={17} className="mt-0.5 shrink-0 text-brand" aria-hidden />
                <span>
                  {site.address.line}
                  <br />
                  {site.address.region}
                </span>
              </a>
            </li>
          </ul>
          <Link href="/contact/#enquiry" className="btn-primary mt-8">
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-[13px] text-steel-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Website redesign preview — enquiry form is a demo and does not send messages.</p>
        </div>
      </div>
    </footer>
  );
}
