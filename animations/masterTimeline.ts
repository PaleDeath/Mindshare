/**
 * Master Timeline
 * ─────────────────────────────────────────────────────────────────────────────
 * This is the single source of truth for the entire site's animation.
 *
 * Architecture:
 *   1. Each scene module returns a self-contained GSAP timeline.
 *   2. Scene timelines are added to the master at their designated start times.
 *   3. The master timeline is paused — it is NEVER played automatically.
 *   4. Scroll progress (0 → 1) drives the master via master.progress(p).
 *
 * Timeline map (seconds):
 *   Signal       0  → 3
 *   Systems      3  → 7
 *   Networks     7  → 11
 *   Distribution 11 → 15
 *   Machine      15 → 20
 *   Deployments  20 → 23
 *   Launch       23 → 26
 *
 * Each scene starts at its designated second on the master timeline.
 * Scenes can overlap slightly via cross-fades (SCENE_CROSS_FADE = 0.4s).
 */

import { gsap } from "@/lib/gsap";
import { TIMELINE_DURATION, SCENES } from "@/lib/constants";

import { sceneSignal }       from "./sceneSignal";
import { sceneSystems }      from "./sceneSystems";
import { sceneNetworks }     from "./sceneNetworks";
import { sceneDistribution } from "./sceneDistribution";
import { sceneMachine }      from "./sceneMachine";
import { sceneDeployments }  from "./sceneDeployments";
import { sceneLaunch }       from "./sceneLaunch";

let _master: gsap.core.Timeline | null = null;

/**
 * Build and return the master timeline.
 * Idempotent — calling it again returns the same instance.
 */
export function buildMasterTimeline(): gsap.core.Timeline {
  if (_master) {
    _master.kill();
    _master = null;
  }

  _master = gsap.timeline({
    paused: true,
    // Prevent auto-kill — we manage this manually
    autoRemoveChildren: false,
  });

  // Add each scene at its absolute start time within the master.
  // The position parameter (third arg to .add()) is in seconds.
  _master.add(sceneSignal(),       SCENES.signal.start);
  _master.add(sceneSystems(),      SCENES.systems.start);
  _master.add(sceneNetworks(),     SCENES.networks.start);
  _master.add(sceneDistribution(), SCENES.distribution.start);
  _master.add(sceneMachine(),      SCENES.machine.start);
  _master.add(sceneDeployments(),  SCENES.deployments.start);
  _master.add(sceneLaunch(),       SCENES.launch.start);

  // Ensure the total duration matches our constant
  // (GSAP may round, so we pad with a tiny empty tween if needed)
  if (_master.duration() < TIMELINE_DURATION) {
    _master.to({}, { duration: TIMELINE_DURATION - _master.duration() });
  }

  return _master;
}

/** Access the singleton master timeline (after buildMasterTimeline() was called) */
export function getMasterTimeline(): gsap.core.Timeline | null {
  return _master;
}

/** Kill and reset — call on unmount */
export function destroyMasterTimeline(): void {
  if (_master) {
    _master.kill();
    _master = null;
  }
}
