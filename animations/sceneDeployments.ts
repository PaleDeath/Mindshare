/**
 * Scene 6 — Deployments
 * Duration: 3 seconds in the master timeline (starts at 20s)
 *
 * Narrative: "Systems in the wild" — selected real-world projects.
 *
 * Motion design:
 *   - Section header slides in
 *   - Project cards flip / reveal from bottom in stagger
 *   - Each card's tag line types in
 *   - A horizontal scan line sweeps across each card
 *   - Exit: cards slide up and off screen
 */

import { gsap } from "@/lib/gsap";
import { EASE, DUR, STAGGER, SCENE_CROSS_FADE } from "./motionConfig";

export function sceneDeployments(): gsap.core.Timeline {
  const tl = gsap.timeline();

  // ── Initial state ────────────────────────────────────────────────────────
  tl.set(".scene-deployments", { opacity: 0 }, 0);
  tl.set(".scene-deployments .dep-header .char", { yPercent: 100, opacity: 0 }, 0);
  tl.set(".scene-deployments .dep-card", { yPercent: 12, opacity: 0 }, 0);
  tl.set(".scene-deployments .dep-card-scan", { scaleX: 0, transformOrigin: "left center", opacity: 0 }, 0);
  tl.set(".scene-deployments .dep-card-number", { opacity: 0 }, 0);
  tl.set(".scene-deployments .dep-card-tag", { opacity: 0, xPercent: -2 }, 0);
  tl.set(".scene-deployments .dep-footer", { opacity: 0, yPercent: 10 }, 0);

  // ── 0.0s: Scene in ───────────────────────────────────────────────────────
  tl.fromTo(".scene-deployments", { opacity: 0 }, { opacity: 1, duration: SCENE_CROSS_FADE, ease: EASE.smooth }, 0);

  // ── 0.1 → 0.6s: Header chars reveal ─────────────────────────────────────
  tl.to(
    ".scene-deployments .dep-header .char",
    {
      yPercent: 0,
      opacity: 1,
      duration: DUR.sm,
      ease: EASE.out,
      stagger: { each: 0.05 },
    },
    0.1
  );

  // ── 0.4 → 1.2s: Cards reveal in stagger ─────────────────────────────────
  tl.to(
    ".scene-deployments .dep-card",
    {
      yPercent: 0,
      opacity: 1,
      duration: DUR.md,
      ease: EASE.out,
      stagger: { each: 0.2, from: "start" },
    },
    0.4
  );

  // ── 0.6 → 1.6s: Scan lines sweep across cards ───────────────────────────
  tl.to(
    ".scene-deployments .dep-card-scan",
    {
      scaleX: 1,
      opacity: 1,
      duration: DUR.sm,
      ease: EASE.smooth,
      stagger: { each: 0.2 },
    },
    0.6
  );

  tl.to(
    ".scene-deployments .dep-card-scan",
    {
      opacity: 0,
      duration: DUR.sm,
      ease: EASE.smooth,
      stagger: { each: 0.2 },
    },
    0.9
  );

  // ── 0.9 → 1.4s: Numbers and tags appear ─────────────────────────────────
  tl.to(
    ".scene-deployments .dep-card-number",
    { opacity: 0.4, duration: DUR.xs, stagger: { each: 0.2 } },
    0.9
  );

  tl.to(
    ".scene-deployments .dep-card-tag",
    { opacity: 1, xPercent: 0, duration: DUR.sm, ease: EASE.out, stagger: { each: 0.08 } },
    1.0
  );

  // ── 1.6 → 2.0s: Footer appears ───────────────────────────────────────────
  tl.to(
    ".scene-deployments .dep-footer",
    { opacity: 1, yPercent: 0, duration: DUR.sm, ease: EASE.out },
    1.6
  );

  // ── 2.4 → 2.8s: Exit — cards slide up ────────────────────────────────────
  tl.to(
    ".scene-deployments .dep-card",
    {
      yPercent: -8,
      opacity: 0,
      duration: DUR.sm,
      ease: EASE.inOut,
      stagger: { each: 0.1, from: "end" },
    },
    2.4
  );

  tl.to(
    ".scene-deployments .dep-header",
    { yPercent: -6, opacity: 0, duration: DUR.sm, ease: EASE.inOut },
    2.4
  );

  // ── Cross-fade out ────────────────────────────────────────────────────────
  tl.to(
    ".scene-deployments",
    { opacity: 0, duration: SCENE_CROSS_FADE, ease: EASE.smooth },
    3 - SCENE_CROSS_FADE
  );

  return tl;
}
