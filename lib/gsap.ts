/**
 * GSAP Registration Module
 * Central place for all GSAP plugin registration.
 * Import this ONCE at the app root, not in individual components.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register all plugins here
gsap.registerPlugin(ScrollTrigger);

// Disable GSAP's default ease lookup warning in dev
gsap.config({ nullTargetWarn: false });

export { gsap, ScrollTrigger };
