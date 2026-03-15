/**
 * Scene 2 — Systems
 * Full-stack development, AI tools, interactive 3D web applications.
 */

import { splitToChars } from "@/components/shared/SplitText";

// System node grid dimensions
const NODE_COLS = 8;
const NODE_ROWS = 5;

const CAPABILITIES = [
  { label: "Full-Stack & Cloud",    tag: "Azure · Node.js · Next.js" },
  { label: "3D Web & AI",           tag: "Three.js · TensorFlow.js" },
  { label: "Security & DevOps",     tag: "OWASP · Docker · K8s" },
];

export function SceneSystems() {
  return (
    <section
      className="scene scene-systems"
      aria-label="Systems — Engineering Capability"
    >
      {/* Node grid background */}
      <div
        className="absolute inset-0 grid pointer-events-none opacity-0"
        style={{ gridTemplateColumns: `repeat(${NODE_COLS}, 1fr)` }}
      >
        {Array.from({ length: NODE_COLS * NODE_ROWS }).map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <div className="sys-node w-1 h-1 rounded-full bg-signal/25" />
          </div>
        ))}
      </div>

      {/* Architecture diagram — right side (lg+) */}
      <div className="absolute inset-0 hidden lg:flex items-center justify-end pr-4 lg:pr-16 pointer-events-none">
        <div className="sys-diagram relative w-[380px] h-[380px]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none">
            {/* Layered horizontal planes */}
            <rect className="sys-layer" x="60" y="60" width="260" height="50" rx="2" stroke="#F0EEE8" strokeWidth="0.5" opacity="0.12" />
            <rect className="sys-layer" x="40" y="140" width="300" height="50" rx="2" stroke="#F0EEE8" strokeWidth="0.5" opacity="0.10" />
            <rect className="sys-layer" x="60" y="220" width="260" height="50" rx="2" stroke="#F0EEE8" strokeWidth="0.5" opacity="0.08" />

            {/* Vertical connectors between layers */}
            <line className="sys-connector" x1="130" y1="110" x2="130" y2="140" stroke="#C8F23A" strokeWidth="0.5" opacity="0.25" />
            <line className="sys-connector" x1="190" y1="110" x2="190" y2="140" stroke="#C8F23A" strokeWidth="0.5" opacity="0.25" />
            <line className="sys-connector" x1="250" y1="110" x2="250" y2="140" stroke="#C8F23A" strokeWidth="0.5" opacity="0.25" />
            <line className="sys-connector" x1="130" y1="190" x2="130" y2="220" stroke="#C8F23A" strokeWidth="0.5" opacity="0.25" />
            <line className="sys-connector" x1="190" y1="190" x2="190" y2="220" stroke="#C8F23A" strokeWidth="0.5" opacity="0.25" />
            <line className="sys-connector" x1="250" y1="190" x2="250" y2="220" stroke="#C8F23A" strokeWidth="0.5" opacity="0.25" />

            {/* Data flow nodes on each layer */}
            <circle className="sys-arch-node" cx="130" cy="85" r="4" fill="#C8F23A" opacity="0.5" />
            <circle className="sys-arch-node" cx="190" cy="85" r="4" fill="#C8F23A" opacity="0.5" />
            <circle className="sys-arch-node" cx="250" cy="85" r="4" fill="#C8F23A" opacity="0.5" />
            <circle className="sys-arch-node" cx="130" cy="165" r="3.5" fill="#F0EEE8" opacity="0.3" />
            <circle className="sys-arch-node" cx="190" cy="165" r="3.5" fill="#F0EEE8" opacity="0.3" />
            <circle className="sys-arch-node" cx="250" cy="165" r="3.5" fill="#F0EEE8" opacity="0.3" />
            <circle className="sys-arch-node" cx="130" cy="245" r="3" fill="#F0EEE8" opacity="0.2" />
            <circle className="sys-arch-node" cx="190" cy="245" r="3" fill="#F0EEE8" opacity="0.2" />
            <circle className="sys-arch-node" cx="250" cy="245" r="3" fill="#F0EEE8" opacity="0.2" />

            {/* Outer frame */}
            <rect className="sys-frame" x="20" y="30" width="340" height="270" rx="4" stroke="#F0EEE8" strokeWidth="0.3" opacity="0.06" strokeDasharray="4 6" />
          </svg>

          {/* Layer labels */}
          <span className="sys-layer-label absolute font-mono text-[10px] text-pulse/60 tracking-widest" style={{ top: "19%", right: "8%" }}>FRONTEND</span>
          <span className="sys-layer-label absolute font-mono text-[10px] text-dim tracking-widest" style={{ top: "41%", right: "4%" }}>API / SERVICES</span>
          <span className="sys-layer-label absolute font-mono text-[10px] text-dim tracking-widest" style={{ top: "62%", right: "8%" }}>INFRA / DATA</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 pt-16">

        {/* Scene label */}
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.25em] text-dim uppercase">02 / Systems</span>
          <div className="sys-line flex-1 h-px bg-noise max-w-xs" />
        </div>

        {/* Title */}
        <h2 className="sys-title font-display text-signal leading-none mb-4 overflow-hidden shrink-0">
          {splitToChars("SYSTEMS", "char")}
        </h2>

        {/* Architect name */}
        <div className="sys-name mb-12">
          <span className="font-mono text-sm md:text-base text-signal tracking-[0.2em] uppercase">
            Taseen Iqbal
          </span>
          <span className="font-mono text-xs text-dim tracking-widest ml-3">
            — Full-Stack Architect
          </span>
        </div>

        {/* Capability list */}
        <div className="space-y-6 max-w-2xl">
          {CAPABILITIES.map(({ label, tag }, i) => (
            <div key={i} className="sys-capability flex flex-wrap items-baseline gap-x-6 gap-y-1">
              <span className="font-mono text-xs text-dim w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-sans text-xl md:text-2xl text-signal">
                {label}
              </span>
              <span className="sys-tag font-mono text-xs text-pulse tracking-widest md:ml-auto shrink-0">
                {tag}
              </span>
            </div>
          ))}
        </div>

        {/* Terminal-style tag line */}
        <div className="mt-16">
          <div className="sys-tag inline-flex items-center gap-3 font-mono text-sm text-dim border border-noise px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-pulse animate-pulse" />
            <span>system.status &gt; <span className="text-pulse">OPERATIONAL</span></span>
          </div>
        </div>

      </div>

    </section>
  );
}
