# ANIMATION RULES

1. Animation logic must live in `/animations`.

2. React components must remain presentational.

3. Every scene exports a GSAP timeline.

Example:

export function sceneSignal() {
    return gsap.timeline()
}

4. Scenes must be registered in the master timeline.

master.add(sceneSignal())

5. Scroll must control master timeline progress.

master.progress(scrollProgress)

6. Animations must be reversible.

7. Use GPU-friendly properties only.

Allowed:

transform  
opacity

Avoid:

width  
height  
top  
left

8. Use `gsap.context()` when working with React.

9. Avoid many ScrollTrigger instances.

Prefer controlling a master timeline.

10. Animation code must be modular.