"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { RotateCcw, Search, SearchX, X } from "lucide-react";
import ProductCard from "./ProductCard";
import { categories, products, type CategorySlug } from "@/data/products";

type Filter = CategorySlug | "all";

export default function Catalogue() {
  const params = useSearchParams();

  const initialCat = (params.get("category") as Filter) || "all";
  const [category, setCategory] = useState<Filter>(
    categories.some((c) => c.slug === initialCat) ? initialCat : "all"
  );
  const [query, setQuery] = useState(params.get("q") ?? "");

  // Keep state in sync when the URL changes (e.g. footer category links)
  useEffect(() => {
    const c = params.get("category") as Filter | null;
    setCategory(c && categories.some((x) => x.slug === c) ? c : "all");
  }, [params]);

  // Reflect filters in the URL so results can be shared
  const updateUrl = (c: Filter, q: string) => {
    const sp = new URLSearchParams();
    if (c !== "all") sp.set("category", c);
    if (q.trim()) sp.set("q", q.trim());
    const qs = sp.toString();
    window.history.replaceState(null, "", qs ? `/products/?${qs}` : "/products/");
  };

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const inCat = category === "all" || p.category === category;
      if (!inCat) return false;
      if (!q) return true;
      const hay = [p.name, p.summary, ...p.applications].join(" ").toLowerCase();
      return q.split(/\s+/).every((word) => hay.includes(word));
    });
  }, [category, query]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: products.length };
    categories.forEach((c) => (map[c.slug] = products.filter((p) => p.category === c.slug).length));
    return map;
  }, []);

  const hasFilters = category !== "all" || query.trim() !== "";
  const reset = () => {
    setCategory("all");
    setQuery("");
    updateUrl("all", "");
  };
  const activeName = categories.find((c) => c.slug === category)?.name;

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      {/* Filters */}
      <aside className="min-w-0 lg:col-span-3">
        <div className="lg:sticky lg:top-28">
          <label htmlFor="product-search" className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel-500">
            Search machines
          </label>
          <div className="relative mt-3">
            <Search size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-steel-400" aria-hidden />
            <input
              id="product-search"
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                updateUrl(category, e.target.value);
              }}
              placeholder="e.g. laddu, peda, namkeen"
              className="field pl-10 pr-10"
              autoComplete="off"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  updateUrl(category, "");
                }}
                className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-steel-400 hover:text-ink"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-steel-500" id="cat-label">
            Category
          </p>
          {/* Mobile: horizontal chips. Desktop: vertical list */}
          <div
            role="radiogroup"
            aria-labelledby="cat-label"
            className="-mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-steel-200 lg:px-0"
          >
            {[{ slug: "all" as Filter, name: "All machinery" }, ...categories].map((c) => {
              const active = category === c.slug;
              return (
                <button
                  key={c.slug}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => {
                    setCategory(c.slug);
                    updateUrl(c.slug, query);
                  }}
                  className={`flex shrink-0 items-center justify-between gap-3 border px-4 py-2.5 text-left text-[14px] font-medium transition-colors lg:border-0 lg:border-b lg:border-steel-200 lg:px-1 lg:py-3.5 ${
                    active
                      ? "border-ink bg-ink text-white lg:bg-transparent lg:text-brand"
                      : "border-steel-200 bg-white text-steel-600 hover:text-ink lg:bg-transparent"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`hidden h-1.5 w-1.5 transition-colors lg:inline-block ${active ? "bg-brand" : "bg-steel-300"}`}
                      aria-hidden
                    />
                    {c.name}
                  </span>
                  <span className={`font-mono text-[11px] ${active ? "text-steel-300 lg:text-brand" : "text-steel-400"}`}>
                    {counts[c.slug]}
                  </span>
                </button>
              );
            })}
          </div>

          {hasFilters && (
            <button type="button" onClick={reset} className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-ink hover:text-brand">
              <RotateCcw size={15} aria-hidden /> Reset filters
            </button>
          )}
        </div>
      </aside>

      {/* Results */}
      <div className="min-w-0 lg:col-span-9">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-steel-200 pb-4">
          <p className="text-[15px] text-steel-600" aria-live="polite">
            Showing <strong className="text-ink">{results.length}</strong> of {products.length} machines
            {activeName && (
              <>
                {" "}in <strong className="text-ink">{activeName}</strong>
              </>
            )}
            {query.trim() && (
              <>
                {" "}matching “<strong className="text-ink">{query.trim()}</strong>”
              </>
            )}
          </p>
        </div>

        {results.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="mt-8 flex flex-col items-center border border-dashed border-steel-300 bg-steel-50 px-6 py-20 text-center">
            <span className="flex h-14 w-14 items-center justify-center border border-steel-300 bg-white">
              <SearchX size={24} className="text-steel-500" aria-hidden />
            </span>
            <h2 className="mt-6 font-display text-2xl font-bold">No machines found</h2>
            <p className="mt-2 max-w-md text-[15px] text-steel-600">
              We couldn&apos;t find a machine matching your search. Try a different product name — or tell us
              what you make and we&apos;ll suggest suitable machinery.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={reset} className="btn-dark">
                <RotateCcw size={15} aria-hidden /> Reset filters
              </button>
              <a href="/contact/#enquiry" className="btn-outline">
                Ask our team
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
