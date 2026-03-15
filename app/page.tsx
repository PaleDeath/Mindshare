"use client";

/**
 * Main Page — The Cinematic Scroll Experience
 *
 * Architecture:
 *   1. A tall <main> element (2600vh) provides the scroll height.
 *      Its only job is to be tall — scroll distance = animation time.
 *
 *   2. A sticky container (100vh, position: sticky, top: 0) acts as
 *      the "stage". All scenes are rendered inside it, stacked on top
 *      of each other via absolute positioning.
 *
 *   3. useLenis() smooths the scroll.
 *
 *   4. useMasterTimeline() builds the GSAP master timeline and binds
 *      Lenis scroll progress → master.progress(p).
 *
 *   5. The Nav and Cursor are rendered outside the stage but inside
 *      the viewport (fixed positioning).
 */

import { useLenis }          from "@/hooks/useLenis";
import { useMasterTimeline } from "@/hooks/useMasterTimeline";

import { Nav }          from "@/components/ui/Nav";
import { Cursor }       from "@/components/ui/Cursor";
import { ScrollHint }   from "@/components/ui/ScrollHint";

import { SceneSignal }       from "@/scenes/SceneSignal";
import { SceneSystems }      from "@/scenes/SceneSystems";
import { SceneNetworks }     from "@/scenes/SceneNetworks";
import { SceneDistribution } from "@/scenes/SceneDistribution";
import { SceneMachine }      from "@/scenes/SceneMachine";
import { SceneDeployments }  from "@/scenes/SceneDeployments";
import { SceneLaunch }       from "@/scenes/SceneLaunch";

import { TOTAL_SCROLL_VH } from "@/lib/constants";

export default function Home() {
  // 1. Initialise Lenis smooth scroll + GSAP ticker binding
  const lenisRef = useLenis();

  // 2. Build master timeline + bind to Lenis scroll progress
  useMasterTimeline(lenisRef);

  return (
    <>
      {/* ── Overlay UI (always on top) ────────────────────────────────── */}
      <Cursor />
      <Nav lenisRef={lenisRef} />
      <ScrollHint lenisRef={lenisRef} />

      {/* ── Scroll spacer + sticky stage ─────────────────────────────── */}
      <main
        className="relative bg-void"
        style={{ height: `${TOTAL_SCROLL_VH}vh` }}
      >
        {/*
          Sticky container — the animation stage.
          100vh tall, sticks to top while body scrolls.
          All scenes render inside this as absolute layers.
        */}
        <div
          className="sticky top-0 w-full overflow-hidden"
          style={{ height: "100vh" }}
        >
          {/*
            All scenes are absolutely positioned to fill the stage.
            Visibility is controlled entirely by the GSAP timeline
            (autoAlpha on each .scene element).
            They are stacked in z-order matching scene sequence.
          */}
          <SceneSignal />
          <SceneSystems />
          <SceneNetworks />
          <SceneDistribution />
          <SceneMachine />
          <SceneDeployments />
          <SceneLaunch />
        </div>
      </main>
    </>
  );
}
