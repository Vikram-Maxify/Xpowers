import { useEffect, useRef } from "react";

/**
 * Lightweight Intersection Observer hook for scroll-reveal animations.
 * Adds the "visible" class to observed elements when they enter the viewport.
 */
export function useReveal(threshold = 0.12) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const targets = el.querySelectorAll(".reveal");
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [threshold]);

  return containerRef;
}

