/**
 * Scene 4 — Distribution
 * KOL marketing, narrative design, content amplification.
 *
 * Layout:
 *   - 5 concentric rings positioned via calc() at (72vw, 50vh) so GSAP
 *     `scale` never clobbers centering (uses top/left, not transform).
 *   - 7 KOL avatars in a pre-computed elliptical orbit around the same center.
 *     Avatar centering uses negative margins (not transform) — GSAP-safe.
 *   - SVG connection lines from orbit center to each avatar.
 *   - Left-side content block constrained to 52% on large screens.
 */

import { splitToChars } from "@/components/shared/SplitText";

// ── Orbit geometry ────────────────────────────────────────────────────────────
// Center: (72%, 50%), semi-axes: RX=15%, RY=19%
// angle = (360/7)*i − 90° → first avatar at top of orbit.
// Pre-computed so server and client render identical HTML (no hydration diff).
const AVATARS = [
  { top: 31.0, left: 72.0, initials: "A8" },   // Alloc8
  { top: 38.2, left: 83.7, initials: "AIB" },  // All In Bitcoin
  { top: 54.2, left: 86.6, initials: "PA" },   // Polkassembly
  { top: 67.1, left: 78.5, initials: "CM" },   // Camelot (B2B)
  { top: 67.1, left: 65.5, initials: "AR" },   // Arbitrum (Grant)
  { top: 54.2, left: 57.4, initials: "C3" },   // Catastroph3y
  { top: 38.2, left: 60.3, initials: "SH" },   // SMHB NFT
];

const RINGS = [1, 2, 3, 4, 5];

const STATS = [
  { value: "3.2M+", label: "total impressions" },
  { value: "30+",   label: "KOLs managed"      },
  { value: "$50K",  label: "TVL driven"         },
];

export function SceneDistribution() {
  return (
    <section
      className="scene scene-distribution"
      aria-label="Distribution — Growth Systems"
    >

      {/* ── Orbital decoration — hidden on mobile, shown lg+ ──────────────── */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">

        {/* ── Concentric rings ───────────────────────────────────────────────
            calc() centering: top/left handle position, GSAP handles scale only. */}
        {RINGS.map((ring) => (
          <div
            key={ring}
            className="dist-ring absolute rounded-full border border-signal/8"
            style={{
              width:  `${ring * 14}vmin`,
              height: `${ring * 14}vmin`,
              top:    `calc(50% - ${ring * 7}vmin)`,
              left:   `calc(72% - ${ring * 7}vmin)`,
            }}
          />
        ))}

        {/* ── Center broadcast node ──────────────────────────────────────────
            Negative margins center it at (72%, 50%) without using transform.   */}
        <div
          className="dist-center-node absolute z-10 w-3 h-3 rounded-full bg-pulse"
          style={{ top: "50%", left: "72%", marginLeft: "-6px", marginTop: "-6px" }}
        />

        {/* ── SVG connection lines ────────────────────────────────────────────
            SVG fills the stage so % coords match avatar top/left percentages.  */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {AVATARS.map(({ top, left }, i) => (
            <line
              key={i}
              className="dist-connection"
              x1="72%" y1="50%"
              x2={`${left}%`} y2={`${top}%`}
              stroke="#F0EEE8"
              strokeWidth="0.5"
            />
          ))}
        </svg>

        {/* ── KOL avatar nodes ───────────────────────────────────────────────
            w-10 h-10 = 40×40px → marginLeft/Top = −20px (GSAP-safe centering). */}
        {AVATARS.map(({ top, left, initials }) => (
          <div
            key={initials}
            className="dist-avatar absolute z-10 w-10 h-10 rounded-full border border-noise bg-static flex items-center justify-center"
            style={{
              top:        `${top}%`,
              left:       `${left}%`,
              marginLeft: "-20px",
              marginTop:  "-20px",
            }}
          >
            <span className="font-mono text-xs text-dim">{initials}</span>
          </div>
        ))}

      </div>

      {/* ── Content block ────────────────────────────────────────────────── */}
      <div className="dist-content relative z-20 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 pt-16">

        <div className="mb-8">
          <span className="font-mono text-xs tracking-[0.25em] text-dim uppercase">
            04 / Distribution
          </span>
        </div>

        {/* Headline */}
        <h2 className="dist-title font-display text-signal leading-none mb-3 shrink-0 overflow-hidden whitespace-nowrap">
          {splitToChars("DISTRIBUTION.", "char")}
        </h2>

        {/* Lead name */}
        <div className="dist-name mb-6">
          <span className="font-mono text-sm md:text-base text-signal tracking-[0.2em] uppercase">
            Manasdipta Ray
          </span>
          <span className="font-mono text-xs text-dim tracking-widest ml-3">
            — Growth &amp; Marketing
          </span>
        </div>

        {/* Divider — GSAP animates scaleX 0 → 1 */}
        <div
          className="dist-divider h-px bg-noise/40 w-full mb-8"
          style={{ transformOrigin: "left center" }}
        />

        {/* Stats */}
        <div className="flex flex-wrap gap-12">
          {STATS.map(({ value, label }, i) => (
            <div key={i} className="dist-stat">
              <div className="font-display text-5xl text-signal leading-none">
                {value}
              </div>
              <div className="dist-stat-label font-mono text-xs text-dim tracking-widest mt-2">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-3">
          {["KOL Outreach", "Content & SEO", "B2B Partnerships", "Community Building", "Event Management"].map((tag) => (
            <span
              key={tag}
              className="dist-label font-mono text-xs text-dim border border-noise px-3 py-1.5 tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

    </section>
  );
}
