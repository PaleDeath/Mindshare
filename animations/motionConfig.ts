/**
 * Motion Grammar Config
 * Shared timing, easing, and motion constants used across all scene timelines.
 * This is the design token layer for animation — change values here to tune
 * the feel of the entire site.
 */

// ─── Easing curves ────────────────────────────────────────────────────────────

export const EASE = {
  /** Cinematic out — used for reveals, entrances */
  out: "power3.out",
  /** Snappy in-out — used for morphs and state transitions */
  inOut: "power2.inOut",
  /** Explosive in — used for impact moments */
  in: "power4.in",
  /** Elastic finish — used sparingly for emphasis */
  elastic: "elastic.out(1, 0.4)",
  /** Custom bezier: ultra-smooth for parallax layers */
  smooth: "power1.inOut",
} as const;

// ─── Reveal motion verb ───────────────────────────────────────────────────────

export const REVEAL = {
  duration: 0.9,
  ease: EASE.out,
  y: 60,
  opacity: 0,
} as const;

// ─── Stagger motion verb ─────────────────────────────────────────────────────

export const STAGGER = {
  each: 0.08,
  ease: EASE.out,
} as const;

// ─── Parallax motion verb ─────────────────────────────────────────────────────

/** yPercent offsets for each depth layer over one scene duration */
export const PARALLAX = {
  background: -20,  // moves subtly (slow layer)
  midground:  -50,  // medium
  foreground: -90,  // fastest
} as const;

// ─── Typography ───────────────────────────────────────────────────────────────

export const TYPE = {
  /** Clip-path mask reveal: line slides up from under a mask */
  maskRevealFrom: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
  maskRevealTo:   "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
  duration: 0.8,
  ease: EASE.out,
} as const;

// ─── Transition durations ─────────────────────────────────────────────────────

export const DUR = {
  xs:  0.3,
  sm:  0.5,
  md:  0.8,
  lg:  1.2,
  xl:  1.8,
} as const;

// ─── Scene fade between scenes ────────────────────────────────────────────────

export const SCENE_CROSS_FADE = 0.4; // seconds overlap between scenes
