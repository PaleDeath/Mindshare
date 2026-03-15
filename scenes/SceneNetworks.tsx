/**
 * Scene 3 — Networks
 * Global community growth, partnerships, ecosystem building.
 */

import { splitToChars } from "@/components/shared/SplitText";

const FOCUS_ITEMS = [
  { label: "KOL Strategy",           detail: "10+ protocols & brands — Movement, Aptos, Wormhole" },
  { label: "Regional Ecosystem Ops", detail: "10 countries · 30+ events · 5 fellowship programs" },
  { label: "Business Development",   detail: "$100K+ TVL, 500+ users in 3 months at Alloc8" },
];

const GEO_LABELS = [
  { label: "INDIA",  top: "38%", left: "66%" },
  { label: "SEA",    top: "55%", left: "78%" },
  { label: "LATAM",  top: "62%", left: "68%" },
  { label: "JAPAN",  top: "28%", left: "84%" },
  { label: "KOREA",  top: "20%", left: "76%" },
];

// Node ring configuration (for the CSS-drawn network)
const RING1_NODES = 6;
const RING2_NODES = 10;

export function SceneNetworks() {
  return (
    <section
      className="scene scene-networks"
      aria-label="Networks — Ecosystem Growth"
    >
      {/* Network visualisation */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-end pr-4 lg:pr-16 pointer-events-none">
        <div className="relative w-[420px] h-[420px]">
          {/* SVG edges — suppressHydrationWarning: floating-point values
              differ by 1 ULP between Node.js and V8 serialization */}
          <svg className="absolute inset-0 w-full h-full" suppressHydrationWarning>
            {/* We generate edges as radial lines from center */}
            {Array.from({ length: RING1_NODES }).map((_, i) => {
              const angle = (360 / RING1_NODES) * i;
              const rad = (angle * Math.PI) / 180;
              const cx = 210, cy = 210, r1 = 110;
              const x2 = Math.round((cx + r1 * Math.cos(rad)) * 100) / 100;
              const y2 = Math.round((cy + r1 * Math.sin(rad)) * 100) / 100;
              return (
                <line
                  key={`r1-${i}`}
                  className="net-edge"
                  x1={cx} y1={cy} x2={x2} y2={y2}
                  stroke="#F0EEE8" strokeWidth="0.6"
                  strokeDasharray="100%" strokeDashoffset="100%"
                />
              );
            })}
            {Array.from({ length: RING2_NODES }).map((_, i) => {
              const angle = (360 / RING2_NODES) * i;
              const rad = (angle * Math.PI) / 180;
              const cx = 210, cy = 210, r2 = 185;
              const x2 = Math.round((cx + r2 * Math.cos(rad)) * 100) / 100;
              const y2 = Math.round((cy + r2 * Math.sin(rad)) * 100) / 100;
              return (
                <line
                  key={`r2-${i}`}
                  className="net-edge"
                  x1={cx} y1={cy} x2={x2} y2={y2}
                  stroke="#F0EEE8" strokeWidth="0.6"
                  strokeDasharray="100%" strokeDashoffset="100%"
                />
              );
            })}
          </svg>

          {/* Center node */}
          <div
            className="net-node net-node--center absolute w-4 h-4 rounded-full bg-pulse"
            style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
          />

          {/* Ring 1 nodes */}
          {Array.from({ length: RING1_NODES }).map((_, i) => {
            const angle = (360 / RING1_NODES) * i;
            const rad = (angle * Math.PI) / 180;
            const r = 110;
            const sy = Math.round(r * Math.sin(rad) * 100) / 100;
            const sx = Math.round(r * Math.cos(rad) * 100) / 100;
            return (
              <div
                key={i}
                className="net-node net-node--ring1 absolute w-2.5 h-2.5 rounded-full bg-signal/60"
                style={{ top: `calc(50% + ${sy}px - 5px)`, left: `calc(50% + ${sx}px - 5px)` }}
                suppressHydrationWarning
              />
            );
          })}

          {/* Ring 2 nodes */}
          {Array.from({ length: RING2_NODES }).map((_, i) => {
            const angle = (360 / RING2_NODES) * i;
            const rad = (angle * Math.PI) / 180;
            const r = 185;
            const sy = Math.round(r * Math.sin(rad) * 100) / 100;
            const sx = Math.round(r * Math.cos(rad) * 100) / 100;
            return (
              <div
                key={i}
                className="net-node net-node--ring2 absolute w-1.5 h-1.5 rounded-full bg-signal/30"
                style={{ top: `calc(50% + ${sy}px - 3px)`, left: `calc(50% + ${sx}px - 3px)` }}
                suppressHydrationWarning
              />
            );
          })}
        </div>
      </div>

      {/* Geo labels */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {GEO_LABELS.map(({ label, top, left }) => (
          <div
            key={label}
            className="net-geo-label absolute font-mono text-xs text-dim tracking-widest"
            style={{ top, left }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 pt-16">

        <div className="mb-8">
          <span className="font-mono text-xs tracking-[0.25em] text-dim uppercase">03 / Networks</span>
        </div>

        <h2 className="net-title font-display text-signal leading-none mb-4 overflow-hidden shrink-0 whitespace-nowrap">
          {splitToChars("NETWORKS", "char")}
        </h2>

        {/* Lead name */}
        <div className="net-name mb-12">
          <span className="font-mono text-sm md:text-base text-signal tracking-[0.2em] uppercase">
            Nilavo Dhar
          </span>
          <span className="font-mono text-xs text-dim tracking-widest ml-3">
            — Ecosystem &amp; BD
          </span>
        </div>

        <div className="space-y-8 max-w-lg">
          {FOCUS_ITEMS.map(({ label, detail }, i) => (
            <div key={i} className="net-focus-item">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-1 h-1 rounded-full bg-pulse" />
                <span className="font-sans text-xl text-signal">{label}</span>
              </div>
              <p className="pl-4 font-sans text-sm text-dim">{detail}</p>
            </div>
          ))}
        </div>

        {/* Counter */}
        <div className="net-counter mt-12 font-mono text-xs text-dim">
          <span className="text-pulse text-2xl font-display">10</span>
          <span className="ml-2">countries</span>
          <span className="mx-3 text-noise">·</span>
          <span className="text-pulse text-2xl font-display">30+</span>
          <span className="ml-2">events</span>
        </div>

      </div>

    </section>
  );
}
