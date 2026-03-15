/**
 * Scene 7 — Launch
 * Duration: 3 seconds in the master timeline (starts at 23s)
 *
 * Narrative: The invitation — start a project with the agency.
 *
 * Motion design:
 *   - Horizontal rule draws in first (cinematic beat)
 *   - "READY TO LAUNCH?" drops in character by character
 *   - Decorative scope graphic fades in right side
 *   - Three-ring sonar pulse: rings appear sequentially (elastic), then
 *     expand outward in a staggered wave (sonar ping effect)
 *   - Email address slides in
 *   - Subtext and footer stagger in
 *   - Terminal scene — no exit animation
 */

import { gsap } from "@/lib/gsap";
import { EASE, DUR, SCENE_CROSS_FADE } from "./motionConfig";

export function sceneLaunch(): gsap.core.Timeline {
  const tl = gsap.timeline();

  // ── Initial state ────────────────────────────────────────────────────────
  tl.set(".scene-launch",                          { opacity: 0 },                              0);
  tl.set(".scene-launch .launch-cta .char",        { yPercent: 110, opacity: 0 },               0);
  tl.set(".scene-launch .launch-email",            { opacity: 0, yPercent: 20 },                0);
  tl.set(".scene-launch .launch-pulse",            { scale: 0, opacity: 0 },                    0);
  tl.set(".scene-launch .launch-ring",             { scale: 0, opacity: 0 },                    0);
  tl.set(".scene-launch .launch-ring2",            { scale: 0, opacity: 0 },                    0);
  tl.set(".scene-launch .launch-ring3",            { scale: 0, opacity: 0 },                    0);
  tl.set(".scene-launch .launch-scope",            { opacity: 0 },                              0);
  tl.set(".scene-launch .launch-sub",              { opacity: 0, yPercent: 10 },                0);
  tl.set(".scene-launch .launch-footer-item",      { opacity: 0 },                              0);
  tl.set(".scene-launch .launch-line",             { scaleX: 0, transformOrigin: "left center" }, 0);

  // ── 0.0s: Scene in ───────────────────────────────────────────────────────
  tl.fromTo(
    ".scene-launch",
    { opacity: 0 },
    { opacity: 1, duration: SCENE_CROSS_FADE, ease: EASE.smooth },
    0
  );

  // ── 0.2 → 0.5s: Line draws in first (cinematic beat) ─────────────────────
  tl.to(
    ".scene-launch .launch-line",
    { scaleX: 1, duration: DUR.sm, ease: EASE.inOut },
    0.2
  );

  // ── 0.3 → 1.2s: CTA headline drops in character by character ─────────────
  tl.to(
    ".scene-launch .launch-cta .char",
    {
      yPercent: 0,
      opacity: 1,
      duration: DUR.lg,
      ease: EASE.out,
      stagger: { each: 0.07, from: "start" },
    },
    0.3
  );

  // ── 0.4s: Decorative scope fades in ──────────────────────────────────────
  tl.to(
    ".scene-launch .launch-scope",
    { opacity: 1, duration: DUR.md, ease: EASE.smooth },
    0.4
  );

  // ── 0.9s: Pulse dot appears ───────────────────────────────────────────────
  tl.to(
    ".scene-launch .launch-pulse",
    { scale: 1, opacity: 1, duration: DUR.sm, ease: EASE.elastic },
    0.9
  );

  // ── 0.9 → 1.2s: Three rings appear sequentially (inner → outer) ──────────
  tl.to(
    ".scene-launch .launch-ring",
    { scale: 1, opacity: 1, duration: DUR.sm, ease: EASE.elastic },
    0.9
  );
  tl.to(
    ".scene-launch .launch-ring2",
    { scale: 1, opacity: 1, duration: DUR.sm, ease: EASE.elastic },
    1.05
  );
  tl.to(
    ".scene-launch .launch-ring3",
    { scale: 1, opacity: 1, duration: DUR.sm, ease: EASE.elastic },
    1.2
  );

  // ── 1.1 → 1.6s: Email slides in ──────────────────────────────────────────
  tl.to(
    ".scene-launch .launch-email",
    { opacity: 1, yPercent: 0, duration: DUR.md, ease: EASE.out },
    1.1
  );

  // ── 1.4 → 1.8s: Subtext ─────────────────────────────────────────────────
  tl.to(
    ".scene-launch .launch-sub",
    { opacity: 1, yPercent: 0, duration: DUR.sm, ease: EASE.out },
    1.4
  );

  // ── 1.6 → 2.0s: Footer items stagger in ──────────────────────────────────
  tl.to(
    ".scene-launch .launch-footer-item",
    {
      opacity: 1,
      duration: DUR.sm,
      ease: EASE.out,
      stagger: { each: 0.1 },
    },
    1.6
  );

  // ── 2.0 → 3.0s: Sonar ping — three rings expand and fade in a wave ───────
  tl.to(
    ".scene-launch .launch-ring",
    { scale: 2.5, opacity: 0, duration: DUR.xl, ease: "power3.out" },
    2.0
  );
  tl.to(
    ".scene-launch .launch-ring2",
    { scale: 2.5, opacity: 0, duration: DUR.xl, ease: "power3.out" },
    2.2
  );
  tl.to(
    ".scene-launch .launch-ring3",
    { scale: 2.5, opacity: 0, duration: DUR.xl, ease: "power3.out" },
    2.4
  );

  // NOTE: Terminal scene — no exit animation. Timeline ends here.

  return tl;
}
