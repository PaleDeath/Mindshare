/**
 * Scene 4 — Distribution
 * Duration: 4 seconds in the master timeline (starts at 11s)
 *
 * Narrative: Growth systems — KOL networks, content propagation, viral loops.
 *
 * Motion design:
 *   - Expanding concentric rings (propagation / broadcast metaphor)
 *   - Title "DISTRIBUTION" slams in from left (char stagger)
 *   - Center broadcast node pops in via elastic
 *   - Connection lines from center to each KOL avatar fade in
 *   - Horizontal divider draws left→right
 *   - KOL avatar nodes appear in elliptical orbit (elastic stagger)
 *   - Stat numbers rise up from below
 *   - Exit: rings pulse outward + content collapses left
 */

import { gsap } from "@/lib/gsap";
import { EASE, DUR, SCENE_CROSS_FADE } from "./motionConfig";

export function sceneDistribution(): gsap.core.Timeline {
  const tl = gsap.timeline();

  // ── Initial state ────────────────────────────────────────────────────────
  tl.set(".scene-distribution",                          { opacity: 0 },                                        0);
  tl.set(".scene-distribution .dist-title .char",        { xPercent: -8, opacity: 0 },                         0);
  tl.set(".scene-distribution .dist-ring",               { scale: 0, opacity: 0 },                             0);
  tl.set(".scene-distribution .dist-avatar",             { scale: 0, opacity: 0 },                             0);
  tl.set(".scene-distribution .dist-center-node",        { scale: 0, opacity: 0 },                             0);
  tl.set(".scene-distribution .dist-connection",         { opacity: 0 },                                       0);
  tl.set(".scene-distribution .dist-divider",            { scaleX: 0 },                                        0);
  tl.set(".scene-distribution .dist-stat",               { yPercent: 30, opacity: 0 },                         0);
  tl.set(".scene-distribution .dist-stat-label",          { opacity: 0 },                                       0);
  tl.set(".scene-distribution .dist-label",              { opacity: 0 },                                       0);
  tl.set(".scene-distribution .dist-name",               { opacity: 0, yPercent: 10 },                          0);

  // ── 0.0s: Scene in ───────────────────────────────────────────────────────
  tl.fromTo(
    ".scene-distribution",
    { opacity: 0 },
    { opacity: 1, duration: SCENE_CROSS_FADE, ease: EASE.smooth },
    0
  );

  // ── 0.1 → 0.7s: Rings expand outward in sequence ────────────────────────
  tl.to(
    ".scene-distribution .dist-ring",
    {
      scale: 1,
      opacity: 0.15,
      duration: DUR.lg,
      ease: "power2.out",
      stagger: { each: 0.2, from: "start" },
    },
    0.1
  );

  // ── 0.2 → 0.8s: Title chars slam in from left ───────────────────────────
  tl.to(
    ".scene-distribution .dist-title .char",
    {
      xPercent: 0,
      opacity: 1,
      duration: DUR.md,
      ease: EASE.out,
      stagger: { each: 0.04, from: "start" },
    },
    0.2
  );

  // ── 0.4 → 0.8s: Lead name fades in ───────────────────────────────────────
  tl.to(
    ".scene-distribution .dist-name",
    { opacity: 1, yPercent: 0, duration: DUR.sm, ease: EASE.out },
    0.4
  );

  // ── 0.5s: Center broadcast node pops in ─────────────────────────────────
  tl.to(
    ".scene-distribution .dist-center-node",
    { scale: 1, opacity: 1, duration: DUR.sm, ease: EASE.elastic },
    0.5
  );

  // ── 0.6 → 1.4s: Avatar nodes appear in elliptical orbit ─────────────────
  tl.to(
    ".scene-distribution .dist-avatar",
    {
      scale: 1,
      opacity: 1,
      duration: DUR.sm,
      ease: EASE.elastic,
      stagger: { each: 0.12, from: "random" },
    },
    0.6
  );

  // ── 0.9 → 1.4s: Divider draws in left→right ─────────────────────────────
  tl.to(
    ".scene-distribution .dist-divider",
    { scaleX: 1, duration: DUR.md, ease: EASE.inOut },
    0.9
  );

  // ── 0.9 → 1.5s: Connection lines fade in ────────────────────────────────
  tl.to(
    ".scene-distribution .dist-connection",
    {
      opacity: 0.18,
      duration: DUR.lg,
      ease: EASE.smooth,
      stagger: { each: 0.08 },
    },
    0.9
  );

  // ── 1.4 → 2.0s: Stats rise up ───────────────────────────────────────────
  tl.to(
    ".scene-distribution .dist-stat",
    {
      yPercent: 0,
      opacity: 1,
      duration: DUR.sm,
      ease: EASE.out,
      stagger: { each: 0.15 },
    },
    1.4
  );

  tl.to(
    ".scene-distribution .dist-stat-label",
    { opacity: 1, duration: DUR.sm, ease: EASE.out, stagger: { each: 0.1 } },
    1.6
  );

  tl.to(
    ".scene-distribution .dist-label",
    { opacity: 1, duration: DUR.sm, ease: EASE.out, stagger: { each: 0.08 } },
    1.8
  );

  // ── 2.0 → 2.8s: Rings pulse outward (growth moment) ─────────────────────
  tl.to(
    ".scene-distribution .dist-ring",
    {
      scale: 1.3,
      opacity: 0,
      duration: DUR.xl,
      ease: "power3.out",
      stagger: { each: 0.3 },
    },
    2.0
  );

  // ── 3.0 → 3.6s: Exit — content collapses left ───────────────────────────
  tl.to(
    ".scene-distribution .dist-content",
    { xPercent: -4, opacity: 0, duration: DUR.md, ease: EASE.inOut },
    3.0
  );

  tl.to(
    ".scene-distribution .dist-avatar",
    {
      scale: 0,
      opacity: 0,
      duration: DUR.sm,
      ease: EASE.in,
      stagger: { each: 0.06, from: "random" },
    },
    3.0
  );

  // ── Cross-fade out ───────────────────────────────────────────────────────
  tl.to(
    ".scene-distribution",
    { opacity: 0, duration: SCENE_CROSS_FADE, ease: EASE.smooth },
    4 - SCENE_CROSS_FADE
  );

  return tl;
}
