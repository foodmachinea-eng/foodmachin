"use client";

import { useState } from "react";
import ProductImage from "./ProductImage";

export default function Gallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="group relative aspect-square overflow-hidden border border-steel-200 bg-white">
        <div className="absolute inset-0 p-8 sm:p-12">
          <ProductImage src={images[active]} alt={name} zoom priority />
        </div>
        {images.length > 0 && (
          <span className="absolute bottom-0 left-0 bg-white/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-steel-500">
            Manufacturer photo
          </span>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3" role="tablist" aria-label="Product images">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show image ${i + 1}`}
              onClick={() => setActive(i)}
              className={`aspect-square border bg-white p-2 transition-colors ${
                i === active ? "border-ink" : "border-steel-200 hover:border-steel-400"
              }`}
            >
              <ProductImage src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
