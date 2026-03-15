/**
 * Scene 5 — The Machine
 * Duration: 5 seconds in the master timeline (starts at 15s)
 *
 * Narrative: All three forces converge into a single launch engine.
 * Systems + Networks + Distribution → THE MACHINE.
 *
 * Motion design:
 *   - Three pillars (Systems / Networks / Distribution) slide in from
 *     their respective edges and lock into position
 *   - They rotate/converge into a triangular formation
 *   - "THE MACHINE" title assembles from the center explosion
 *   - Orbiting ring spins up
 *   - Agency tagline fades in below
 *   - Sustained hold — this is the big reveal
 *   - Exit: machine zooms toward camera (scale up + fade)
 */

import { gsap } from "@/lib/gsap";
import { EASE, DUR, STAGGER, SCENE_CROSS_FADE } from "./motionConfig";

export function sceneMachine(): gsap.core.Timeline {
  const tl = gsap.timeline();

  // ── Initial state ────────────────────────────────────────────────────────
  tl.set(".scene-machine", { opacity: 0 }, 0);
  tl.set(".scene-machine .mach-pillar--systems", { xPercent: -60, opacity: 0 }, 0);
  tl.set(".scene-machine .mach-pillar--networks", { yPercent: 40, opacity: 0 }, 0);
  tl.set(".scene-machine .mach-pillar--distribution", { xPercent: 60, opacity: 0 }, 0);
  tl.set(".scene-machine .mach-title .char", { scale: 0.4, opacity: 0 }, 0);
  tl.set(".scene-machine .mach-orbit-ring", { rotation: 0, opacity: 0, scale: 0.6 }, 0);
  tl.set(".scene-machine .mach-tagline", { yPercent: 20, opacity: 0 }, 0);
  tl.set(".scene-machine .mach-connector", { scaleX: 0, opacity: 0, transformOrigin: "center" }, 0);
  tl.set(".scene-machine .mach-center-node", { scale: 0, opacity: 0 }, 0);
  tl.set(".scene-machine .mach-services", { opacity: 0, yPercent: 10 }, 0);

  // ── 0.0s: Scene in ───────────────────────────────────────────────────────
  tl.fromTo(".scene-machine", { opacity: 0 }, { opacity: 1, duration: SCENE_CROSS_FADE, ease: EASE.smooth }, 0);

  // ── 0.2 → 1.0s: Three pillars slide into position ───────────────────────
  tl.to(
    ".scene-machine .mach-pillar--systems",
    { xPercent: 0, opacity: 1, duration: DUR.lg, ease: EASE.out },
    0.2
  );
  tl.to(
    ".scene-machine .mach-pillar--networks",
    { yPercent: 0, opacity: 1, duration: DUR.lg, ease: EASE.out },
    0.35
  );
  tl.to(
    ".scene-machine .mach-pillar--distribution",
    { xPercent: 0, opacity: 1, duration: DUR.lg, ease: EASE.out },
    0.5
  );

  // ── 0.9 → 1.2s: Connectors draw between pillars ─────────────────────────
  tl.to(
    ".scene-machine .mach-connector",
    {
      scaleX: 1,
      opacity: 0.4,
      duration: DUR.sm,
      ease: EASE.inOut,
      stagger: { each: 0.1 },
    },
    0.9
  );

  // ── 1.1 → 1.4s: Center node materialises ────────────────────────────────
  tl.to(
    ".scene-machine .mach-center-node",
    { scale: 1, opacity: 1, duration: DUR.sm, ease: EASE.elastic },
    1.1
  );

  // ── 1.3 → 2.1s: Title chars explode in from center ──────────────────────
  tl.to(
    ".scene-machine .mach-title .char",
    {
      scale: 1,
      opacity: 1,
      duration: DUR.md,
      ease: EASE.out,
      stagger: { each: 0.06, from: "center" },
    },
    1.3
  );

  // ── 1.8 → 2.8s: Orbit ring spins up ─────────────────────────────────────
  tl.to(
    ".scene-machine .mach-orbit-ring",
    {
      rotation: 180,
      opacity: 0.6,
      scale: 1,
      duration: DUR.xl,
      ease: EASE.smooth,
    },
    1.8
  );

  // ── 2.2 → 2.8s: Tagline appears ─────────────────────────────────────────
  tl.to(
    ".scene-machine .mach-tagline",
    { yPercent: 0, opacity: 1, duration: DUR.md, ease: EASE.out },
    2.2
  );

  // ── 2.5 → 3.0s: Services line fades in ────────────────────────────────────
  tl.to(
    ".scene-machine .mach-services",
    { opacity: 1, yPercent: 0, duration: DUR.sm, ease: EASE.out },
    2.5
  );

  // ── 2.8 → 3.6s: Orbit ring continues spinning (sustained energy) ────────
  tl.to(
    ".scene-machine .mach-orbit-ring",
    { rotation: 360, duration: DUR.xl, ease: "none" },
    2.8
  );

  // ── 3.8 → 4.6s: Exit — machine zooms forward ────────────────────────────
  tl.to(
    ".scene-machine .mach-body",
    { scale: 1.15, opacity: 0, duration: DUR.md, ease: EASE.in },
    3.8
  );

  // ── Cross-fade out ───────────────────────────────────────────────────────
  tl.to(
    ".scene-machine",
    { opacity: 0, duration: SCENE_CROSS_FADE, ease: EASE.smooth },
    5 - SCENE_CROSS_FADE
  );

  return tl;
}
