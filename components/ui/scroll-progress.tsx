"use client";

import { useEffect, useState } from "react";

/**
 * Thin accent-gradient bar fixed to the top of the viewport that
 * fills as the user scrolls the page. Respects prefers-reduced-motion
 * by staying static at 0 (it's purely decorative).
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const next = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(next);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[2px] pointer-events-none"
    >
      <div
        className="h-full origin-left will-change-transform"
        style={{
          width: "100%",
          transform: `scaleX(${progress / 100})`,
          background:
            "linear-gradient(90deg, transparent 0%, var(--accent-400) 30%, var(--violet-500) 60%, var(--magenta-500) 100%)",
          transition: "transform 120ms linear",
          boxShadow: "0 0 14px rgba(129,140,248,0.45)",
        }}
      />
    </div>
  );
}
