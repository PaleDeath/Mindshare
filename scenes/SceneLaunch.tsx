/**
 * Scene 7 — Launch
 * The terminal scene. Call to action. Invite collaboration.
 *
 * Layout (three-zone flex column):
 *   TOP    — scene label
 *   MIDDLE — flex-1: horizontal rule + headline + pulse+email + subtext
 *   BOTTOM — shrink-0: footer row with team names + copyright
 *
 * No absolute-positioned footer or fixed margins — ensures footer is always
 * visible regardless of viewport height.
 */

import { splitToChars } from "@/components/shared/SplitText";
import { AGENCY_EMAILS } from "@/lib/constants";

const TEAM = [
  "Taseen Iqbal · Systems",
  "Nilavo Dhar · Networks",
  "Manasdipta Ray · Distribution",
];

export function SceneLaunch() {
  return (
    <section
      className="scene scene-launch"
      aria-label="Launch — Start a Project"
    >

      {/* ── Decorative scope graphic ──────────────────────────────────────────
          Purely visual. GSAP only touches opacity (never x/y/scale) so the
          CSS translateY(-50%) centering is preserved.                         */}
      <div
        className="launch-scope absolute pointer-events-none"
        aria-hidden="true"
        style={{
          right: "8vw",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0,
        }}
      >
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          <circle cx="160" cy="160" r="120" stroke="#F0EEE8" strokeWidth="0.6" opacity="0.08" />
          <circle cx="160" cy="160" r="70"  stroke="#F0EEE8" strokeWidth="0.6" opacity="0.06" />
          <line x1="160" y1="20"  x2="160" y2="140" stroke="#F0EEE8" strokeWidth="0.6" opacity="0.07" />
          <line x1="160" y1="180" x2="160" y2="300" stroke="#F0EEE8" strokeWidth="0.6" opacity="0.07" />
          <line x1="20"  y1="160" x2="140" y2="160" stroke="#F0EEE8" strokeWidth="0.6" opacity="0.07" />
          <line x1="180" y1="160" x2="300" y2="160" stroke="#F0EEE8" strokeWidth="0.6" opacity="0.07" />
        </svg>
      </div>

      {/* ── Three-zone layout ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col h-full px-8 md:px-16 lg:px-24 pt-20 pb-8">

        {/* TOP — scene label */}
        <div className="shrink-0">
          <span className="font-mono text-xs tracking-[0.25em] text-dim uppercase">
            07 / Launch
          </span>
        </div>

        {/* MIDDLE — main CTA content, vertically centered */}
        <div className="flex-1 flex flex-col justify-center min-h-0">

          {/* Horizontal rule */}
          <div
            className="launch-line w-full h-px bg-noise mb-6"
            style={{ transformOrigin: "left center" }}
          />

          {/* CTA headline */}
          <h2 className="launch-cta font-display text-signal leading-none mb-6 shrink-0">
            <div className="overflow-hidden">
              {splitToChars("READY TO", "char")}
            </div>
            <div className="overflow-hidden">
              {splitToChars("LAUNCH?", "char text-pulse")}
            </div>
          </h2>

          {/* Pulse rings + emails */}
          <div className="flex items-start gap-6 mb-4 shrink-0">
            {/* Three-ring sonar pulse container
                The container is w-12 h-12 (48px); larger rings overflow it —
                that is intentional (stage clips them, not this element).     */}
            <div className="relative shrink-0 w-12 h-12 flex items-center justify-center mt-1">
              <div
                className="launch-ring absolute rounded-full border border-pulse/50"
                style={{ width: 48, height: 48 }}
              />
              <div
                className="launch-ring2 absolute rounded-full border border-pulse/30"
                style={{ width: 72, height: 72 }}
              />
              <div
                className="launch-ring3 absolute rounded-full border border-pulse/15"
                style={{ width: 96, height: 96 }}
              />
              <div className="launch-pulse relative z-10 w-3 h-3 rounded-full bg-pulse" />
            </div>

            {/* Stacked emails */}
            <div className="flex flex-col gap-2">
              {AGENCY_EMAILS.map(({ name, email }) => (
                <div key={email} className="launch-email flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="font-sans text-base sm:text-lg md:text-xl text-signal hover:text-pulse transition-colors duration-300 break-all sm:break-normal"
                  >
                    {email}
                  </a>
                  <span className="font-mono text-xs text-dim tracking-widest">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subtext */}
          <p className="launch-sub font-sans text-dim max-w-md leading-relaxed shrink-0">
            Tell us what you&apos;re building.
            We&apos;ll make sure the world finds it.
          </p>

        </div>

        {/* BOTTOM — footer, always anchored to bottom of scene */}
        <div className="shrink-0 pt-6 border-t border-noise/30">
          <div className="flex flex-wrap items-center justify-between gap-4">

            {/* Team names */}
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              {TEAM.map((name) => (
                <span
                  key={name}
                  className="launch-footer-item font-mono text-xs md:text-sm text-signal/80 tracking-widest"
                >
                  {name}
                </span>
              ))}
            </div>

            {/* Copyright */}
            <span className="launch-footer-item font-mono text-xs text-dim/40">
              © {new Date().getFullYear()} Mindshare
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}
