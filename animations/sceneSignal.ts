/**
 * Scene 1 — Signal
 * Duration: 3 seconds in the master timeline
 *
 * Narrative: The internet is noisy. Products fail because they never reach
 * the right networks.
 *
 * Motion design:
 *   - Noise/static lines animate in from void
 *   - Hero headline character-by-character reveal
 *   - Subtext slides up
 *   - Pulse dot expands (signal metaphor)
 *   - End: elements dissolve / compress as we transition to Systems
 */

import { gsap } from "@/lib/gsap";
import { EASE, DUR, STAGGER, SCENE_CROSS_FADE } from "./motionConfig";

export function sceneSignal(): gsap.core.Timeline {
  const tl = gsap.timeline();

  // ── 0.0s: Initial state — everything invisible ──────────────────────────
  tl.set(".scene-signal", { opacity: 1 }, 0);
  tl.set(".scene-signal .signal-noise-line", { scaleX: 0, transformOrigin: "left center" }, 0);
  tl.set(".scene-signal .signal-headline .char", { yPercent: 110, opacity: 0 }, 0);
  tl.set(".scene-signal .signal-sub", { yPercent: 40, opacity: 0 }, 0);
  tl.set(".scene-signal .signal-pulse", { scale: 0, opacity: 0 }, 0);
  tl.set(".scene-signal .signal-noise-overlay", { opacity: 0.6 }, 0);
  tl.set(".scene-signal .signal-indicator", { opacity: 0 }, 0);

  // ── 0.0 → 0.4s: Noise static lines tear in ──────────────────────────────
  tl.to(
    ".scene-signal .signal-noise-line",
    {
      scaleX: 1,
      duration: DUR.md,
      ease: EASE.out,
      stagger: { each: 0.04, from: "random" },
    },
    0
  );

  // ── 0.2 → 0.8s: Noise overlay fades — clarity emerging ──────────────────
  tl.to(
    ".scene-signal .signal-noise-overlay",
    { opacity: 0, duration: DUR.lg, ease: EASE.smooth },
    0.2
  );

  // ── 0.3 → 1.1s: Headline chars cascade in ───────────────────────────────
  tl.to(
    ".scene-signal .signal-headline .char",
    {
      yPercent: 0,
      opacity: 1,
      duration: DUR.md,
      ease: EASE.out,
      stagger: STAGGER,
    },
    0.3
  );

  // ── 0.8 → 1.3s: Pulse indicator appears ─────────────────────────────────
  tl.to(
    ".scene-signal .signal-indicator",
    { opacity: 1, duration: DUR.sm, ease: EASE.out },
    0.8
  );
  tl.to(
    ".scene-signal .signal-pulse",
    { scale: 1, opacity: 1, duration: DUR.sm, ease: EASE.elastic },
    0.8
  );

  // ── 1.0 → 1.6s: Subtext slides up ───────────────────────────────────────
  tl.to(
    ".scene-signal .signal-sub",
    { yPercent: 0, opacity: 1, duration: DUR.md, ease: EASE.out },
    1.0
  );

  // ── 1.6 → 2.0s: Pulse ring expands outward ──────────────────────────────
  tl.to(
    ".scene-signal .signal-ring",
    {
      scale: 3,
      opacity: 0,
      duration: DUR.xl,
      ease: "power2.out",
      stagger: { each: 0.3, repeat: 0 },
    },
    1.6
  );

  // ── 2.0 → 2.6s: Noise lines retract — transition out ────────────────────
  tl.to(
    ".scene-signal .signal-noise-line",
    {
      scaleX: 0,
      transformOrigin: "right center",
      duration: DUR.md,
      ease: EASE.in,
      stagger: { each: 0.03, from: "end" },
    },
    2.0
  );

  // ── 2.2 → 2.6s: Scene fades to void ─────────────────────────────────────
  tl.to(
    ".scene-signal .signal-content",
    { yPercent: -8, opacity: 0, duration: DUR.md, ease: EASE.inOut },
    2.2
  );

  // ── 2.6 → 3.0s: Scene itself fades out (cross-dissolve) ─────────────────
  tl.to(
    ".scene-signal",
    { opacity: 0, duration: SCENE_CROSS_FADE, ease: EASE.smooth },
    3 - SCENE_CROSS_FADE
  );

  return tl;
}
