/**
 * Scene 1 — Signal
 * Presentational component only. All animation is handled by sceneSignal.ts.
 * DOM elements expose CSS class selectors that GSAP targets.
 */

import { splitToChars } from "@/components/shared/SplitText";

const NOISE_LINE_COUNT = 24;

export function SceneSignal() {
  return (
    <section
      className="scene scene-signal"
      aria-label="Signal — The Problem"
    >
      {/* Noise overlay — CSS SVG feTurbulence grain texture, no external asset */}
      <div className="signal-noise-overlay absolute inset-0 noise-texture mix-blend-overlay pointer-events-none z-10" style={{ opacity: 0.6 }} />

      {/* Static noise lines — horizontal scan effect */}
      <div className="signal-noise-lines absolute inset-0 flex flex-col justify-around pointer-events-none overflow-hidden">
        {Array.from({ length: NOISE_LINE_COUNT }).map((_, i) => (
          <div
            key={i}
            className="signal-noise-line w-full h-px bg-signal/15"
            style={{ opacity: 0.3 + (i % 3) * 0.1 }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="signal-content relative z-20 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 pt-16">

        {/* Scene label */}
        <div className="mb-8">
          <span className="font-mono text-xs tracking-[0.25em] text-dim uppercase">
            01 / Signal
          </span>
        </div>

        {/* Hero headline — per-line overflow masking for GSAP yPercent reveal.
             shrink-0 prevents flex-shrink from collapsing the element. */}
        <h1 className="signal-headline font-display text-signal leading-none mb-8 shrink-0">
          <div className="overflow-hidden">
            {splitToChars("THE INTERNET", "char")}
          </div>
          <div className="overflow-hidden">
            {splitToChars("IS NOISY.", "char text-pulse")}
          </div>
        </h1>

        {/* Subtext */}
        <p className="signal-sub font-sans text-dim text-lg md:text-xl max-w-xl leading-relaxed">
          Most brands fail. Not because they aren&apos;t good.
          <br />
          Because no one builds the system to make them seen.
        </p>

      </div>

      {/* Pulse signal indicator */}
      <div className="signal-indicator absolute bottom-12 right-12 z-20 flex items-center gap-4">
        {/* Expanding rings */}
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className="signal-ring absolute w-10 h-10 rounded-full border border-pulse/60" />
          <div className="signal-ring absolute w-10 h-10 rounded-full border border-pulse/40" />
          <div className="signal-pulse w-2 h-2 rounded-full bg-pulse" />
        </div>
        <span className="font-mono text-xs text-pulse tracking-widest">SIGNAL DETECTED</span>
      </div>

    </section>
  );
}
