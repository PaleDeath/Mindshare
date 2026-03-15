/**
 * Scene 3 — Networks
 * Duration: 4 seconds in the master timeline (starts at 7s)
 *
 * Narrative: Ecosystem growth — partnerships, communities, global connections.
 *
 * Motion design:
 *   - Node network expands from center (propagation metaphor)
 *   - "NETWORKS" title reveals via clip-path mask
 *   - Connection lines draw between nodes (SVG stroke-dashoffset)
 *   - Focus areas stagger in below
 *   - Geographical labels float in at offset positions
 *   - Exit: network contracts, title fades
 */

import { gsap } from "@/lib/gsap";
import { EASE, DUR, STAGGER, SCENE_CROSS_FADE } from "./motionConfig";

export function sceneNetworks(): gsap.core.Timeline {
  const tl = gsap.timeline();

  // ── Initial state ────────────────────────────────────────────────────────
  tl.set(".scene-networks", { opacity: 0 }, 0);
  tl.set(".scene-networks .net-title .char", { opacity: 0, yPercent: 80 }, 0);
  tl.set(".scene-networks .net-node", { scale: 0, opacity: 0 }, 0);
  tl.set(".scene-networks .net-edge", { strokeDashoffset: "100%", opacity: 0 }, 0);
  tl.set(".scene-networks .net-focus-item", { opacity: 0, xPercent: -3 }, 0);
  tl.set(".scene-networks .net-geo-label", { opacity: 0, scale: 0.8 }, 0);
  tl.set(".scene-networks .net-counter", { opacity: 0 }, 0);
  tl.set(".scene-networks .net-name", { opacity: 0, yPercent: 10 }, 0);

  // ── 0.0s: Scene in ───────────────────────────────────────────────────────
  tl.fromTo(".scene-networks", { opacity: 0 }, { opacity: 1, duration: SCENE_CROSS_FADE, ease: EASE.smooth }, 0);

  // ── 0.1 → 0.7s: Title mask reveal ───────────────────────────────────────
  tl.to(
    ".scene-networks .net-title .char",
    {
      opacity: 1,
      yPercent: 0,
      duration: DUR.md,
      ease: EASE.out,
      stagger: { each: 0.06, from: "start" },
    },
    0.1
  );

  // ── 0.3 → 0.7s: Lead name fades in ───────────────────────────────────────
  tl.to(
    ".scene-networks .net-name",
    { opacity: 1, yPercent: 0, duration: DUR.sm, ease: EASE.out },
    0.3
  );

  // ── 0.4 → 1.2s: Central node appears, then outer nodes propagate outward ─
  tl.to(
    ".scene-networks .net-node--center",
    { scale: 1, opacity: 1, duration: DUR.sm, ease: EASE.elastic },
    0.4
  );

  tl.to(
    ".scene-networks .net-node--ring1",
    {
      scale: 1,
      opacity: 1,
      duration: DUR.sm,
      ease: EASE.elastic,
      stagger: { each: 0.08, from: "center" },
    },
    0.7
  );

  tl.to(
    ".scene-networks .net-node--ring2",
    {
      scale: 1,
      opacity: 1,
      duration: DUR.sm,
      ease: EASE.out,
      stagger: { each: 0.06, from: "center" },
    },
    1.0
  );

  // ── 0.8 → 1.6s: Edges draw in ───────────────────────────────────────────
  tl.to(
    ".scene-networks .net-edge",
    {
      strokeDashoffset: 0,
      opacity: 0.4,
      duration: DUR.lg,
      ease: EASE.smooth,
      stagger: { each: 0.05 },
    },
    0.8
  );

  // ── 1.2 → 2.0s: Focus items slide in ────────────────────────────────────
  tl.to(
    ".scene-networks .net-focus-item",
    {
      opacity: 1,
      xPercent: 0,
      duration: DUR.md,
      ease: EASE.out,
      stagger: { each: 0.2 },
    },
    1.2
  );

  // ── 1.6 → 2.2s: Geo labels appear ───────────────────────────────────────
  tl.to(
    ".scene-networks .net-geo-label",
    {
      opacity: 1,
      scale: 1,
      duration: DUR.sm,
      ease: EASE.out,
      stagger: { each: 0.12, from: "random" },
    },
    1.6
  );

  // ── 1.8 → 2.4s: Counter ticks up ────────────────────────────────────────
  tl.to(".scene-networks .net-counter", { opacity: 1, duration: DUR.xs }, 1.8);

  // ── 3.0 → 3.6s: Exit — network contracts ────────────────────────────────
  tl.to(
    ".scene-networks .net-node",
    {
      scale: 0,
      opacity: 0,
      duration: DUR.sm,
      ease: EASE.in,
      stagger: { each: 0.04, from: "end" },
    },
    3.0
  );

  tl.to(
    ".scene-networks .net-title",
    { yPercent: -6, opacity: 0, duration: DUR.sm, ease: EASE.inOut },
    3.1
  );

  tl.to(
    ".scene-networks .net-focus-item",
    { opacity: 0, xPercent: 3, duration: DUR.sm, ease: EASE.inOut, stagger: { each: 0.08 } },
    3.0
  );

  tl.to(
    ".scene-networks .net-name",
    { opacity: 0, duration: DUR.sm, ease: EASE.inOut },
    3.0
  );

  // ── Cross-fade out ───────────────────────────────────────────────────────
  tl.to(
    ".scene-networks",
    { opacity: 0, duration: SCENE_CROSS_FADE, ease: EASE.smooth },
    4 - SCENE_CROSS_FADE
  );

  return tl;
}
