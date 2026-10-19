"use client";

import { Camera } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Props {
  src?: string;
  alt: string;
  className?: string;
  /** Scale up slightly when a parent `.group` is hovered */
  zoom?: boolean;
  priority?: boolean;
  /** contain = product cut-outs, cover = facility photography */
  fit?: "contain" | "cover";
  /** Text shown when no photo is available */
  placeholder?: string;
}

/**
 * Company photograph with a neutral fallback panel.
 * When a product has no published photo (or the image fails to load) we show a
 * "photo to be supplied" panel rather than an unrelated stock image or a broken icon.
 */
export default function ProductImage({
  src,
  alt,
  className = "",
  zoom = false,
  priority = false,
  fit = "contain",
  placeholder = "Photo to be supplied",
}: Props) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // The image may have already failed before React hydrated (onError would be missed)
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (!src || failed) {
    return (
      <div
        className={`bg-grid-light flex h-full w-full flex-col items-center justify-center gap-3 bg-steel-100 text-center text-steel-500 ${className}`}
        role="img"
        aria-label={alt ? `${alt} — ${placeholder.toLowerCase()}` : placeholder}
      >
        <span className="flex h-12 w-12 items-center justify-center border border-steel-300 bg-white">
          <Camera size={20} aria-hidden />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em]">{placeholder}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`h-full w-full ${fit === "cover" ? "object-cover" : "object-contain"} ${
        zoom ? "transition-transform duration-700 ease-out group-hover:scale-[1.06]" : ""
      } ${className}`}
    />
  );
}
