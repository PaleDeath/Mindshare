/**
 * Scene timing constants.
 * Each scene occupies a slice of the master timeline.
 *
 * Timeline model:
 *   Total duration = 26 seconds
 *   1 second = 100vh of scroll
 *   Total page scroll height = 2600vh
 *
 * Scene durations (seconds):
 *   Signal:       3s  → scroll: 300vh
 *   Systems:      4s  → scroll: 400vh
 *   Networks:     4s  → scroll: 400vh
 *   Distribution: 4s  → scroll: 400vh
 *   Machine:      5s  → scroll: 500vh
 *   Deployments:  3s  → scroll: 300vh
 *   Launch:       3s  → scroll: 300vh
 *   TOTAL:       26s  → scroll: 2600vh
 */

export const TIMELINE_DURATION = 26; // seconds

export const SCENES = {
  signal: {
    start: 0,
    end: 3,
    label: "signal",
    scrollVh: 300,
  },
  systems: {
    start: 3,
    end: 7,
    label: "systems",
    scrollVh: 400,
  },
  networks: {
    start: 7,
    end: 11,
    label: "networks",
    scrollVh: 400,
  },
  distribution: {
    start: 11,
    end: 15,
    label: "distribution",
    scrollVh: 400,
  },
  machine: {
    start: 15,
    end: 20,
    label: "machine",
    scrollVh: 500,
  },
  deployments: {
    start: 20,
    end: 23,
    label: "deployments",
    scrollVh: 300,
  },
  launch: {
    start: 23,
    end: 26,
    label: "launch",
    scrollVh: 300,
  },
} as const;

/** Total page height in vh units */
export const TOTAL_SCROLL_VH = Object.values(SCENES).reduce(
  (sum, s) => sum + s.scrollVh,
  0
); // 2600

/** Projects shown in Scene 6 */
export const PROJECTS = [
  {
    id: "01",
    name: "HAEL.R",
    category: "3D Mental Health App",
    tags: ["Three.js", "AI", "WebGL"],
    year: "2024",
  },
  {
    id: "02",
    name: "ALLOC8",
    category: "DeFi Yield Aggregator",
    tags: ["Networks", "Growth", "DeFi"],
    year: "2024",
  },
  {
    id: "03",
    name: "WORMHOLE",
    category: "Cross-Chain Ecosystem",
    tags: ["BD", "Ecosystem", "Events"],
    year: "2024",
  },
] as const;

export const AGENCY_EMAIL = "taseeniqbal.ti@gmail.com";

export const AGENCY_EMAILS = [
  { name: "Taseen Iqbal",     email: "taseeniqbal.ti@gmail.com" },
  { name: "Nilavo Dhar",      email: "nilavodhar200@gmail.com" },
  { name: "Manasdipta Ray",   email: "raymanasdiptaray@gmail.com" },
] as const;
