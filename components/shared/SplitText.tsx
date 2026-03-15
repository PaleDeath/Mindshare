/**
 * SplitText utility
 * Splits a string into individual <span> elements — one per character.
 * These spans are the GSAP animation targets (.char) used in scene animations.
 *
 * Usage (inside a JSX heading):
 *   {splitToChars("HELLO WORLD", "char")}
 *
 * Each character gets a .char CSS class so GSAP can do:
 *   gsap.to(".scene-signal .signal-headline .char", { yPercent: 0 })
 */

export function splitToChars(text: string, className = "char"): JSX.Element[] {
  return text.split("").map((char, i) => (
    <span
      key={i}
      className={`${className} inline-block`}
      // Preserve space rendering — non-breaking space for " "
      aria-hidden={char === " " ? true : undefined}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

/**
 * SplitText component wrapper (alternative to the function above)
 * Use when you need the full element in JSX as a single block.
 */
interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function SplitText({
  text,
  className = "",
  charClassName = "char",
  as: Tag = "span",
}: SplitTextProps) {
  return (
    <Tag className={`inline overflow-hidden ${className}`}>
      {splitToChars(text, charClassName)}
    </Tag>
  );
}
