"use client";

import { useEffect, useRef } from "react";
import type Lenis from "lenis";
import { gsap } from "gsap";
import { buildMasterTimeline } from "@/animations/masterTimeline";

/**
 * Initialises the GSAP master timeline and binds scroll progress from Lenis.
 *
 * The binding model:
 *   lenis.on('scroll', ({ progress }) => master.progress(progress))
 *
 * This means the master timeline's playhead is driven entirely by the
 * normalised scroll position (0 = top, 1 = bottom).  Scrubbing up/down
 * is perfectly deterministic.
 *
 * @param lenisRef - ref to the Lenis instance (from useLenis)
 */
export function useMasterTimeline(
  lenisRef: React.MutableRefObject<Lenis | null>
) {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    let onScroll: ((data: { progress: number }) => void) | null = null;

    // rAF delay ensures all scene DOM elements are fully mounted
    const id = requestAnimationFrame(() => {
      // ── Step 1: Set ground-truth initial states BEFORE building timeline.
      // This prevents GSAP's lazy renderer from reading stale CSS values as
      // FROM states when tweens are created inside buildMasterTimeline().
      gsap.set(".scene-signal",       { opacity: 1 }); // Scene 1 visible
      gsap.set(".scene-systems",      { opacity: 0 });
      gsap.set(".scene-networks",     { opacity: 0 });
      gsap.set(".scene-distribution", { opacity: 0 });
      gsap.set(".scene-machine",      { opacity: 0 });
      gsap.set(".scene-deployments",  { opacity: 0 });
      gsap.set(".scene-launch",       { opacity: 0 });

      // ── Step 2: Build the master timeline (all scene sub-timelines).
      const master = buildMasterTimeline();
      timelineRef.current = master;

      const lenis = lenisRef.current;
      if (!lenis) return;

      // ── Step 3: Immediately seek to current scroll position.
      // On fresh page load (scrollY = 0), Lenis won't fire a scroll event
      // until the user actually scrolls. Without this initial seek, scene
      // elements display their CSS defaults instead of GSAP initial states
      // (e.g. headline chars stay invisible, subtext stays visible).
      //
      // IMPORTANT: Never seek to exactly 0 on a paused timeline — GSAP treats
      // it as a no-op because the playhead is already at 0, so .set() calls
      // at position 0 in child timelines never fire. Use a tiny epsilon.
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const initialProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      const seekTime = Math.max(0.001, initialProgress * master.duration());
      master.seek(seekTime);

      onScroll = ({ progress }: { progress: number }) => {
        // Convert normalised progress (0-1) to timeline time, then seek.
        // Using seek() instead of progress() to also force render on each tick.
        master.seek(progress * master.duration());
      };

      lenis.on("scroll", onScroll);
    });

    return () => {
      cancelAnimationFrame(id);
      const lenis = lenisRef.current;
      if (lenis && onScroll) lenis.off("scroll", onScroll);
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, [lenisRef]);

  return timelineRef;
}
