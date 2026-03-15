# MOTION GRAMMAR — CINEMATIC SCROLL SYSTEM

This document defines the motion architecture used in this project.

The system is inspired by high-end interactive websites such as:

- https://landonorris.com
- https://ddark.dev
- https://bogdankolomiyets.com
- https://www.nicolaromei.com
- https://www.itsoffbrand.com

The goal is to replicate the **experience philosophy**, not the visual design.

---

# 1 — CORE PRINCIPLE: SCROLL = TIME

Most websites use scroll triggers.

Example:

scroll → reveal element

Cinematic websites use scroll as a **time controller**.

scroll position → animation timeline progress

Meaning:

scrollY / pageHeight = timelineProgress

Example:

timelineDuration = 20 seconds

scrollProgress = scrollY / totalScrollableHeight

timeline.seek(scrollProgress * timelineDuration)

If the user scrolls to 50% of the page:

timelineTime = 10 seconds.

This keeps animation perfectly synchronized with scroll.

There are:

- no delays
- no triggers
- no animation guessing

Only **timeline scrubbing**.

---

# 2 — MASTER TIMELINE MODEL

The website animation system is built around **one master timeline**.

Conceptual model:

MASTER TIMELINE
│
├── Scene 1 (Hero intro)
├── Scene 2 (Systems reveal)
├── Scene 3 (Network expansion)
├── Scene 4 (Distribution propagation)
├── Scene 5 (Agency formation)
├── Scene 6 (Deployments)
├── Scene 7 (Launch)

Example GSAP structure:


const master = gsap.timeline({ paused: true })

master.add(sceneSignal())
master.add(sceneSystems())
master.add(sceneNetworks())
master.add(sceneDistribution())
master.add(sceneMachine())
master.add(sceneDeployments())
master.add(sceneLaunch())


Scroll moves the playhead.

Example:


ScrollTrigger.create({
start: 0,
end: "max",
scrub: true,
animation: master
})


Or manually:


master.progress(scrollProgress)


---

# 3 — SCENE SEGMENTATION

The page is divided into **temporal scenes**.

Not traditional page sections.

Each scene occupies a **time window** in the master timeline.

Example timeline:

0s — 3s      Signal / hero  
3s — 6s      Systems  
6s — 9s      Networks  
9s — 12s     Distribution  
12s — 16s    The Machine  
16s — 20s    Deployments  
20s — 24s    Launch

Scroll moves through these time ranges.

So:

scroll distance → scene duration

---

# 4 — SCROLL DISTANCE = SCENE DURATION

To control pacing, scroll distance is mapped to timeline duration.

Example:

2000px scroll = 2 seconds animation

If a scene lasts 4 seconds:

sceneScrollLength = 4000px

This determines how long users stay inside a scene.

---

# 5 — MOTION VERBS (THE VISUAL LANGUAGE)

The animation system uses a consistent vocabulary.

These are the allowed motion patterns.

---

## Motion Verb 1 — Reveal

Elements appear through masks or fades.

Common techniques:

- clip-path reveal
- translateY + opacity
- scale + blur

Typical timing:

0.6s – 1.2s

Ease:

power3.out

Purpose:

Introduce new information.

---

## Motion Verb 2 — Parallax

Layers move at different speeds.

Example:

background speed = 0.2x  
midground speed = 0.5x  
foreground speed = 1x

Implementation:

yPercent transforms.

Example:


gsap.to(bg, { yPercent: -30 })
gsap.to(mid, { yPercent: -60 })
gsap.to(fg, { yPercent: -100 })


This produces pseudo-3D depth.

---

## Motion Verb 3 — Stagger

Groups animate sequentially.

Examples:

- text characters
- grid items
- project cards
- logos

Standard stagger timing:

0.05s – 0.12s

Example:


gsap.from(".item", {
opacity:0,
y:40,
stagger:0.08
})


Purpose:

Create visual rhythm.

---

## Motion Verb 4 — Morph / Transform

Elements transform into new states.

Examples:

hero image → thumbnail grid  
logo → navigation element  
card → fullscreen modal

These transitions preserve **object continuity**.

The element changes role rather than disappearing.

---

## Motion Verb 5 — Scene Freeze (Pinning)

A section stops scrolling while animation continues.

Example:


ScrollTrigger({
trigger: section,
pin: true,
scrub: true
})


Effect:

scroll continues  
content stays fixed  
animation progresses

This turns the page into a **stage**.

---

# 6 — DEPTH SYSTEM

Scenes use layered motion.

Layer 1 — Background  
Layer 2 — Content  
Layer 3 — UI overlays

Example:

background image  
text blocks  
cursor / navigation

Each layer moves at a different speed.

This creates pseudo-3D depth without WebGL.

---

# 7 — MOTION PACING

The pacing follows film editing rhythm.

Pattern:

FAST  
SLOW  
FAST  
SLOW  
BIG MOMENT  
REST

Example timeline:

0–1s   quick hero intro  
1–3s   slow reveal  
3–4s   fast typography  
4–7s   cinematic pan  
7–8s   transition

---

# 8 — SCROLL SMOOTHING

Scroll is filtered through a smoothing engine.

Recommended libraries:

- Lenis
- Locomotive Scroll
- Smooth Scrollbar

These convert:

wheel delta → velocity → eased scroll position

Example:

scrollPosition = lerp(previous, target, 0.1)

This produces fluid movement.

---

# 9 — CURSOR AS INTERACTION LAYER

Cursor acts as a UI layer.

Cursor states:

default  
hover  
drag  
locked  
scroll hint

Example interactions:

hover card → cursor expands  
drag scene → arrows appear  
video → play icon cursor

This reduces traditional buttons.

---

# 10 — MOTION CONTINUITY

Nothing should teleport.

Elements must:

move  
transform  
or fade.

Bad:

image disappears → new image appears.

Good:

image scales → moves → becomes new element.

---

# 11 — ANIMATION STATE MACHINE

Internally the site behaves like a state machine.

STATE 1 — Signal  
STATE 2 — Systems  
STATE 3 — Networks  
STATE 4 — Distribution  
STATE 5 — Machine  
STATE 6 — Deployments  
STATE 7 — Launch

Transitions occur when timeline crosses thresholds.

Example:

if progress > 0.2 → scene2  
if progress > 0.4 → scene3

---

# 12 — WHY THIS FEELS CINEMATIC

The website mimics film editing.

Film → Website

timeline → scroll  
scenes → sections  
cuts → transitions  
camera moves → parallax  
pacing → scroll distance

Users become the editor.

Scrolling controls playback.

---

# 13 — SYSTEM ARCHITECTURE

LENIS (smooth scroll)
      ↓
scroll position
      ↓
scroll progress
      ↓
GSAP MASTER TIMELINE
      ↓
scene timelines
      ↓
DOM transforms

---

# 14 — DETERMINISTIC ANIMATION

The system must be deterministic.

Meaning:

scroll position → exact animation state.

Example:

scroll = 70%

timeline.progress(0.7)

The page always renders the same state.

No randomness.
No delayed triggers.

Only:

state = timeline(progress)