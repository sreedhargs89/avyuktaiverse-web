/**
 * GrainOverlay — subtle SVG film grain fixed to the viewport.
 * Zero JavaScript. Gives dark color "tooth" — modulates existing pixels
 * via mix-blend-mode overlay rather than stacking a visible wash.
 *
 * Mounted once in the root layout so every page inherits it automatically.
 */
const grainSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
  <filter id='g'>
    <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/>
    <feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0'/>
  </filter>
  <rect width='100%' height='100%' filter='url(#g)'/>
</svg>`;

const grainDataUrl = `url("data:image/svg+xml;utf8,${encodeURIComponent(grainSvg)}")`;

export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        backgroundImage: grainDataUrl,
        backgroundRepeat: "repeat",
        opacity: 0.04,
        mixBlendMode: "overlay",
      }}
    />
  );
}
