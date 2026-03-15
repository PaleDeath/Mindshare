/**
 * Scene 5 — The Machine
 * Engineering + Networks + Distribution converge into the launch engine.
 */

import { splitToChars } from "@/components/shared/SplitText";


export function SceneMachine() {
  return (
    <section
      className="scene scene-machine"
      aria-label="The Machine — Launch Engine"
    >
      <div className="mach-body absolute inset-0 flex flex-col items-center justify-center">

        {/* Orbit ring — CSS circle */}
        <div
          className="mach-orbit-ring absolute rounded-full border border-pulse/25"
          style={{ width: "60vmin", height: "60vmin" }}
        />
        <div
          className="mach-orbit-ring absolute rounded-full border border-signal/15"
          style={{ width: "80vmin", height: "80vmin" }}
        />

        {/* Three pillars arranged as a triangle */}
        <div className="relative w-full max-w-3xl h-[40vh] md:h-[50vh] flex items-center justify-center">

          {/* Connector lines — hidden on very small screens where pillars stack */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
            {/* Systems → Center */}
            <line
              className="mach-connector"
              x1="20%" y1="30%"
              x2="50%" y2="50%"
              stroke="#F0EEE8" strokeWidth="0.5" strokeOpacity="0.3"
            />
            {/* Networks → Center */}
            <line
              className="mach-connector"
              x1="50%" y1="75%"
              x2="50%" y2="50%"
              stroke="#F0EEE8" strokeWidth="0.5" strokeOpacity="0.3"
            />
            {/* Distribution → Center */}
            <line
              className="mach-connector"
              x1="80%" y1="30%"
              x2="50%" y2="50%"
              stroke="#F0EEE8" strokeWidth="0.5" strokeOpacity="0.3"
            />
          </svg>

          {/* Pillar: Systems (top-left) */}
          <div className="mach-pillar mach-pillar--systems absolute top-[10%] left-[4%] md:top-[18%] md:left-[8%]">
            <PillarCard label="SYSTEMS" name="Taseen Iqbal" role="Engineering" />
          </div>

          {/* Pillar: Networks (bottom-center) */}
          <div className="mach-pillar mach-pillar--networks absolute bottom-[8%] left-1/2 -translate-x-1/2">
            <PillarCard label="NETWORKS" name="Nilavo Dhar" role="Ecosystem" />
          </div>

          {/* Pillar: Distribution (top-right) */}
          <div className="mach-pillar mach-pillar--distribution absolute top-[10%] right-[4%] md:top-[18%] md:right-[8%]">
            <PillarCard label="DISTRIBUTION" name="Manasdipta Ray" role="Growth" />
          </div>

          {/* Center convergence node */}
          <div className="mach-center-node relative z-10 flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-pulse mb-4" />
          </div>

        </div>

        {/* Main title */}
        <h2 className="mach-title font-display text-signal text-center leading-none mt-4 overflow-hidden shrink-0">
          {splitToChars("THE MACHINE", "char")}
        </h2>

        {/* Tagline */}
        <p className="mach-tagline font-sans text-dim text-center text-base mt-6 tracking-widest uppercase">
          This is Mindshare.
        </p>

        {/* Services */}
        <p className="mach-services font-mono text-xs text-dim/60 text-center mt-3 tracking-wider">
          SEO &middot; Websites &middot; Growth Marketing &middot; Ecosystem Building
        </p>

      </div>

      {/* Scene label */}
      <div className="absolute top-20 left-8 md:left-16">
        <span className="font-mono text-xs tracking-[0.25em] text-dim uppercase">05 / The Machine</span>
      </div>

    </section>
  );
}

function PillarCard({ label, name, role }: { label: string; name: string; role: string }) {
  return (
    <div className="border border-noise/50 px-3 py-2 md:px-4 md:py-3 bg-void/80 backdrop-blur-sm max-w-[160px] md:max-w-none">
      <div className="font-mono text-xs text-pulse tracking-widest mb-1">{label}</div>
      <div className="font-mono text-xs md:text-sm text-signal tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">{name}</div>
      <div className="font-sans text-[10px] md:text-xs text-dim mt-0.5">{role}</div>
    </div>
  );
}
