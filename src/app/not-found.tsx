import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-grid-light bg-steel-50 py-28 sm:py-36">
      <div className="container text-center">
        <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-brand">Error 404</p>
        <h1 className="mt-4 text-[44px] font-extrabold tracking-tightest sm:text-[60px]">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-steel-600">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-dark">
            Back to Home
          </Link>
          <Link href="/products/" className="btn-outline">
            Browse Machines <ArrowRight size={16} className="arrow" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
