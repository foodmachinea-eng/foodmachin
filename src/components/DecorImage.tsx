"use client";

import { useEffect, useRef, useState } from "react";

/** Decorative background photo that simply disappears if it cannot load. */
export default function DecorImage({ src, className = "" }: { src: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [src]);
  if (failed) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={src} alt="" referrerPolicy="no-referrer" onError={() => setFailed(true)} className={className} />;
}
