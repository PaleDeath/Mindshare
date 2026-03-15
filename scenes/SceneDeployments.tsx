/**
 * Scene 6 — Deployments
 * Selected projects — "systems in the wild".
 */

import { splitToChars } from "@/components/shared/SplitText";
import { PROJECTS } from "@/lib/constants";

export function SceneDeployments() {
  return (
    <section
      className="scene scene-deployments"
      aria-label="Deployments — Selected Projects"
    >
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 pt-16">

        {/* Header */}
        <div className="mb-6 md:mb-12">
          <div className="mb-4">
            <span className="font-mono text-xs tracking-[0.25em] text-dim uppercase">06 / Deployments</span>
          </div>
          <h2 className="dep-header font-display text-signal leading-none shrink-0">
            <div className="overflow-hidden">
              {splitToChars("SYSTEMS IN", "char")}
            </div>
            <div className="overflow-hidden">
              {splitToChars("THE WILD.", "char")}
            </div>
          </h2>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="dep-card relative border border-noise p-4 md:p-6 group cursor-pointer overflow-hidden"
            >
              {/* Scan line effect */}
              <div className="dep-card-scan absolute top-0 left-0 w-full h-[1px] bg-pulse" />

              {/* Number */}
              <div className="dep-card-number font-mono text-xs text-dim mb-3 md:mb-6">
                {project.id}
              </div>

              {/* Name */}
              <h3 className="font-display text-2xl text-signal mb-2 group-hover:text-pulse transition-colors duration-300">
                {project.name}
              </h3>

              {/* Category */}
              <p className="font-sans text-sm text-dim mb-4">
                {project.category}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="dep-card-tag font-mono text-xs text-pulse/70 border border-pulse/20 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Year */}
              <div className="dep-card-tag absolute bottom-4 right-4 font-mono text-xs text-dim/40">
                {project.year}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="dep-footer mt-6 md:mt-10 flex items-center gap-4">
          <div className="h-px bg-noise flex-1 max-w-xs" />
          <span className="font-mono text-xs text-dim tracking-widest">MORE AVAILABLE ON REQUEST</span>
        </div>

      </div>
    </section>
  );
}
