"use client";

/**
 * ScrollHint
 * Animated scroll indicator — visible at the very start (progress ≈ 0),
 * fades out once the user actually scrolls.
 *
 * Robustness: waits 600ms after mount before listening for scroll events.
 * This avoids being killed by browser scroll-restoration or Lenis
 * initialization events that fire before the user has interacted.
 */

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import type Lenis from "lenis";

interface ScrollHintProps {
  lenisRef: React.MutableRefObject<Lenis | null>;
}

export function ScrollHint({ lenisRef }: ScrollHintProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let onScroll: ((data: { progress: number }) => void) | null = null;
    let timerId: ReturnType<typeof setTimeout> | null = null;

    // Delayed subscription: ignore scroll events from browser restoration
    // and Lenis init. Only start listening after things have settled.
    timerId = setTimeout(() => {
      const lenis = lenisRef.current;
      if (!lenis || !ref.current) return;

      // If user is already well into the page (e.g. reload mid-scroll),
      // hide immediately without animation.
      if (window.scrollY > 200) {
        if (ref.current) ref.current.style.opacity = "0";
        return;
      }

      onScroll = ({ progress }: { progress: number }) => {
        if (progress > 0.02 && ref.current) {
          gsap.to(ref.current, { opacity: 0, yPercent: 20, duration: 0.5, ease: "power2.out" });
          lenis.off("scroll", onScroll!);
          onScroll = null;
        }
      };

      lenis.on("scroll", onScroll);
    }, 600);

    return () => {
      if (timerId) clearTimeout(timerId);
      const lenis = lenisRef.current;
      if (lenis && onScroll) lenis.off("scroll", onScroll);
    };
  }, [lenisRef]);

  return (
    <div
      ref={ref}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-2 pointer-events-none"
      style={{ opacity: 0.5 }}
    >
      {/* Animated line */}
      <div className="relative w-px h-8 bg-signal/10 overflow-hidden">
        <div className="absolute top-0 w-full h-1/2 bg-signal/50 animate-scroll-line" />
      </div>
      <span className="font-mono text-[10px] text-dim/40 tracking-[0.2em] uppercase">Scroll</span>
    </div>
  );
}
