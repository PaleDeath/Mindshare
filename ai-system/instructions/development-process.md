# DEVELOPMENT PROCESS

Follow these phases when implementing the website.

---

# PHASE 1 — ARCHITECTURE

Define:

- folder structure
- scene system
- animation system
- scroll orchestration

---

# PHASE 2 — SCENE MODULES

Each scene must have:

Scene component

/scenes/SceneName.tsx

Animation timeline

/animations/sceneSceneName.ts

---

# PHASE 3 — MASTER TIMELINE

All scene animations must be combined inside:

/animations/masterTimeline.ts

Example structure:

const master = gsap.timeline({ paused: true })

master.add(sceneSignal())
master.add(sceneSystems())
master.add(sceneNetworks())
master.add(sceneDistribution())
master.add(sceneMachine())
master.add(sceneDeployments())
master.add(sceneLaunch())

---

# PHASE 4 — SCROLL CONTROL

Scroll controls master timeline progress.

Example:

const progress = scrollY / maxScroll

master.progress(progress)

---

# PHASE 5 — PERFORMANCE RULES

Animations must use:

transform  
opacity

Avoid animating layout properties.

Use `will-change: transform` where appropriate.

---

# PHASE 6 — TESTING

Verify:

- scroll scrubbing works
- animations reverse correctly
- no layout thrashing