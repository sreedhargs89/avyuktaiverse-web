"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR =
  ".reveal, .reveal-scale, .reveal-left, .reveal-right";

export function useScrollReveal(threshold = 0.14) {
  const pathname = usePathname();

  useEffect(() => {
    // Respect prefers-reduced-motion — mark everything visible immediately.
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let observer: IntersectionObserver | undefined;

    // Wait a tick so Next.js has patched the DOM on route change.
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll(REVEAL_SELECTOR);

      if (prefersReducedMotion) {
        elements.forEach((el) => el.classList.add("visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              obs.unobserve(entry.target); // one-shot: freeze when visible
            }
          });
        },
        { threshold, rootMargin: "0px 0px -8% 0px" }
      );

      elements.forEach((el) => observer!.observe(el));
    }, 80);

    return () => {
      clearTimeout(timeout);
      observer?.disconnect();
    };
  }, [pathname, threshold]);
}

export function ScrollReveal() {
  useScrollReveal();
  return null;
}
