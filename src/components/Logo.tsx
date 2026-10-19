import Link from "next/link";
import { site } from "@/data/site";
import DecorImage from "./DecorImage";

/** Company logo (as published by Aksar) plus a typeset wordmark for legibility at small sizes. */
export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden bg-white ring-1 ring-steel-200">
        <DecorImage src={site.logo} className="h-full w-full object-contain" />
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[17px] font-extrabold uppercase tracking-[0.04em] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          Aksar
        </span>
        <span
          className={`mt-1 block font-mono text-[10px] uppercase tracking-[0.22em] ${
            dark ? "text-steel-400" : "text-steel-500"
          }`}
        >
          Food Machine LLP
        </span>
      </span>
    </Link>
  );
}
