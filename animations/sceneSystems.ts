/**
 * Scene 2 — Systems
 * Duration: 4 seconds in the master timeline (starts at 3s)
 *
 * Narrative: Engineering capability — software systems, AI tools,
 * interactive web technology.
 *
 * Motion design:
 *   - Scene fades in from void
 *   - Large "SYSTEMS" title assembles from top
 *   - Three capability lines typewriter-reveal from left
 *   - Grid of system nodes activates (stagger from center)
 *   - Terminal cursor blinks on last line
 *   - Exit: title scales down, grid implodes to center
 */

import { gsap } from "@/lib/gsap";
import { EASE, DUR, STAGGER, SCENE_CROSS_FADE } from "./motionConfig";

export function sceneSystems(): gsap.core.Timeline {
  const tl = gsap.timeline();

  // ── Initial state ────────────────────────────────────────────────────────
  tl.set(".scene-systems", { opacity: 0 }, 0);
  tl.set(".scene-systems .sys-title .char", { yPercent: -110, opacity: 0 }, 0);
  tl.set(".scene-systems .sys-capability", { xPercent: -4, opacity: 0 }, 0);
  tl.set(".scene-systems .sys-node", { scale: 0, opacity: 0 }, 0);
  tl.set(".scene-systems .sys-line", { scaleX: 0, transformOrigin: "left center" }, 0);
  tl.set(".scene-systems .sys-tag", { opacity: 0, yPercent: 20 }, 0);
  tl.set(".scene-systems .sys-name", { opacity: 0, yPercent: 10 }, 0);
  tl.set(".scene-systems .sys-diagram", { opacity: 0 }, 0);
  tl.set(".scene-systems .sys-layer", { opacity: 0, strokeDasharray: "260", strokeDashoffset: "260" }, 0);
  tl.set(".scene-systems .sys-connector", { opacity: 0, scaleY: 0, transformOrigin: "top center" }, 0);
  tl.set(".scene-systems .sys-arch-node", { scale: 0, opacity: 0, transformOrigin: "center" }, 0);
  tl.set(".scene-systems .sys-layer-label", { opacity: 0 }, 0);

  // ── 0.0 → 0.3s: Scene cross-fades in ────────────────────────────────────
  tl.fromTo(".scene-systems", { opacity: 0 }, { opacity: 1, duration: SCENE_CROSS_FADE, ease: EASE.smooth }, 0);

  // ── 0.1 → 0.9s: Title chars fall from above ─────────────────────────────
  tl.to(
    ".scene-systems .sys-title .char",
    {
      yPercent: 0,
      opacity: 1,
      duration: DUR.md,
      ease: EASE.out,
      stagger: { each: 0.05, from: "start" },
    },
    0.1
  );

  // ── 0.4 → 0.8s: Architect name fades in ──────────────────────────────────
  tl.to(
    ".scene-systems .sys-name",
    { opacity: 1, yPercent: 0, duration: DUR.sm, ease: EASE.out },
    0.4
  );

  // ── 0.5 → 0.8s: Horizontal rule draws in ────────────────────────────────
  tl.to(
    ".scene-systems .sys-line",
    { scaleX: 1, duration: DUR.sm, ease: EASE.inOut },
    0.5
  );

  // ── 0.6 → 1.4s: Capability lines slide in ───────────────────────────────
  tl.to(
    ".scene-systems .sys-capability",
    {
      xPercent: 0,
      opacity: 1,
      duration: DUR.md,
      ease: EASE.out,
      stagger: { each: 0.18 },
    },
    0.6
  );

  // ── 0.9 → 1.6s: System nodes activate from center outward ───────────────
  tl.to(
    ".scene-systems .sys-node",
    {
      scale: 1,
      opacity: 1,
      duration: DUR.sm,
      ease: EASE.elastic,
      stagger: { each: 0.06, from: "center", grid: "auto" },
    },
    0.9
  );

  // ── 0.6s: Architecture diagram fades in ──────────────────────────────────
  tl.to(".scene-systems .sys-diagram", { opacity: 1, duration: DUR.sm, ease: EASE.smooth }, 0.6);

  // ── 0.7 → 1.3s: Layers draw in (top to bottom) ─────────────────────────
  tl.to(
    ".scene-systems .sys-layer",
    {
      opacity: 0.12,
      strokeDashoffset: 0,
      duration: DUR.md,
      ease: EASE.inOut,
      stagger: { each: 0.15 },
    },
    0.7
  );

  // ── 1.0 → 1.4s: Connectors scale in ────────────────────────────────────
  tl.to(
    ".scene-systems .sys-connector",
    {
      scaleY: 1,
      opacity: 0.25,
      duration: DUR.sm,
      ease: EASE.out,
      stagger: { each: 0.06 },
    },
    1.0
  );

  // ── 1.1 → 1.5s: Architecture nodes pop in ──────────────────────────────
  tl.to(
    ".scene-systems .sys-arch-node",
    {
      scale: 1,
      opacity: 0.5,
      duration: DUR.sm,
      ease: EASE.elastic,
      stagger: { each: 0.05, from: "start" },
    },
    1.1
  );

  // ── 1.3 → 1.6s: Layer labels appear ────────────────────────────────────
  tl.to(
    ".scene-systems .sys-layer-label",
    { opacity: 1, duration: DUR.sm, ease: EASE.out, stagger: { each: 0.12 } },
    1.3
  );

  // ── 1.4 → 1.8s: Tags float in ───────────────────────────────────────────
  tl.to(
    ".scene-systems .sys-tag",
    {
      opacity: 1,
      yPercent: 0,
      duration: DUR.sm,
      ease: EASE.out,
      stagger: { each: 0.1 },
    },
    1.4
  );

  // ── 2.8 → 3.4s: Exit — title scales and moves up ────────────────────────
  tl.to(
    ".scene-systems .sys-title",
    { yPercent: -6, opacity: 0, duration: DUR.md, ease: EASE.inOut },
    2.8
  );

  // ── 3.0 → 3.6s: Nodes implode to center ─────────────────────────────────
  tl.to(
    ".scene-systems .sys-node",
    {
      scale: 0,
      opacity: 0,
      duration: DUR.sm,
      ease: EASE.in,
      stagger: { each: 0.04, from: "center", grid: "auto" },
    },
    3.0
  );

  tl.to(
    ".scene-systems .sys-capability",
    { xPercent: 4, opacity: 0, duration: DUR.sm, ease: EASE.inOut, stagger: { each: 0.1 } },
    3.0
  );

  tl.to(
    ".scene-systems .sys-name",
    { opacity: 0, duration: DUR.sm, ease: EASE.inOut },
    2.9
  );

  // ── 3.0 → 3.4s: Diagram fades out ──────────────────────────────────────
  tl.to(
    ".scene-systems .sys-diagram",
    { opacity: 0, duration: DUR.sm, ease: EASE.inOut },
    3.0
  );

  // ── Cross-fade out ───────────────────────────────────────────────────────
  tl.to(
    ".scene-systems",
    { opacity: 0, duration: SCENE_CROSS_FADE, ease: EASE.smooth },
    4 - SCENE_CROSS_FADE
  );

  return tl;
}
