"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useScrollReveal(threshold = 0.12) {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver;
    
    // Wait for Next.js to safely patch the DOM on route changes
    const timeout = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold }
      );

      const elements = document.querySelectorAll(".reveal, .reveal-scale");
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
    };
  }, [pathname, threshold]);
}

export function ScrollReveal() {
  useScrollReveal();
  return null;
}
