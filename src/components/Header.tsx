"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while menu is open; close with Escape
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href.replace(/\/$/, ""));

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-ink text-steel-300 md:block">
        <div className="container flex h-9 items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em]">
          <span>{site.tagline}</span>
          <div className="flex items-center gap-6">
            <span>{site.address.full}</span>
            <a href={site.phone.href} className="flex items-center gap-2 text-white hover:text-brand">
              <Phone size={12} aria-hidden /> {site.phone.display}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-all duration-300 ${
          scrolled ? "border-steel-200 shadow-[0_8px_30px_-12px_rgba(15,17,19,0.18)]" : "border-transparent"
        }`}
      >
        <div
          className={`container flex items-center justify-between transition-[height] duration-300 ${
            scrolled ? "h-[66px]" : "h-[var(--header-h)]"
          }`}
        >
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={`relative px-3.5 py-2 text-[14px] font-medium transition-colors hover:text-ink ${
                      isActive(l.href) ? "text-ink" : "text-steel-600"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute inset-x-3.5 -bottom-[3px] h-[2px] bg-brand transition-transform duration-300 ${
                        isActive(l.href) ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact/#enquiry" className="btn-primary hidden sm:inline-flex">
              Request a Quote <ArrowRight size={16} className="arrow" aria-hidden />
            </Link>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center text-ink lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <nav
          aria-label="Mobile"
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white pt-24 shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex-1 divide-y divide-steel-100 border-y border-steel-100 px-6">
            {navLinks.map((l, i) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  tabIndex={open ? 0 : -1}
                  className={`flex items-center justify-between py-4 font-display text-xl font-semibold ${
                    isActive(l.href) ? "text-brand" : "text-ink"
                  }`}
                >
                  <span>
                    <span className="mr-3 font-mono text-xs text-steel-400">0{i + 1}</span>
                    {l.label}
                  </span>
                  <ArrowRight size={18} className="text-steel-300" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-3 p-6">
            <Link href="/contact/#enquiry" tabIndex={open ? 0 : -1} className="btn-primary w-full">
              Request a Quote
            </Link>
            <a href={site.phone.href} tabIndex={open ? 0 : -1} className="btn-outline w-full">
              <Phone size={16} aria-hidden /> {site.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
