"use client";

/**
 * Navigation overlay
 * Minimal, always-on top. Shows current scene label + scroll progress bar.
 * Scene label updates as master timeline crosses scene thresholds.
 */

import { useEffect, useRef, useState } from "react";
import type Lenis from "lenis";
import { SCENES, TIMELINE_DURATION } from "@/lib/constants";

interface NavProps {
  lenisRef: React.MutableRefObject<Lenis | null>;
}

// Map progress (0-1) to a scene label
function progressToScene(p: number): string {
  const t = p * TIMELINE_DURATION;
  if (t < SCENES.systems.start)      return "01 — Signal";
  if (t < SCENES.networks.start)     return "02 — Systems";
  if (t < SCENES.distribution.start) return "03 — Networks";
  if (t < SCENES.machine.start)      return "04 — Distribution";
  if (t < SCENES.deployments.start)  return "05 — The Machine";
  if (t < SCENES.launch.start)       return "06 — Deployments";
  return "07 — Launch";
}

export function Nav({ lenisRef }: NavProps) {
  const [progress, setProgress] = useState(0);
  const [sceneLabel, setSceneLabel] = useState("01 — Signal");
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // rAF delay: Nav's useEffect runs before useLenis's useEffect (children
    // effects fire before parent effects in React). The rAF ensures Lenis
    // is initialised before we try to subscribe to its scroll events.
    let onScroll: ((data: { progress: number }) => void) | null = null;

    const id = requestAnimationFrame(() => {
      const lenis = lenisRef.current;
      if (!lenis) return;

      onScroll = ({ progress: p }: { progress: number }) => {
        setProgress(p);
        setSceneLabel(progressToScene(p));
        if (barRef.current) {
          barRef.current.style.transform = `scaleX(${p})`;
        }
      };

      lenis.on("scroll", onScroll);
    });

    return () => {
      cancelAnimationFrame(id);
      const lenis = lenisRef.current;
      if (lenis && onScroll) lenis.off("scroll", onScroll);
    };
  }, [lenisRef]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 md:px-16 py-6 pointer-events-none">
      {/* Agency wordmark */}
      <div className="pointer-events-auto">
        <span className="font-mono text-xs tracking-[0.3em] text-signal/80 uppercase">
          Mindshare
        </span>
      </div>

      {/* Scene indicator */}
      <div className="hidden sm:block font-mono text-xs tracking-widest text-dim uppercase transition-all duration-500">
        {sceneLabel}
      </div>

      {/* Scroll progress bar — full-width, pinned to top */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-noise/30">
        <div
          ref={barRef}
          className="h-full bg-pulse origin-left"
          style={{ transform: "scaleX(0)", willChange: "transform" }}
        />
      </div>
    </nav>
  );
}
