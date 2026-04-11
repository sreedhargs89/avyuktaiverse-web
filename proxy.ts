/**
 * AvyuktAIverse® — Proxy (Next.js 16 file convention).
 *
 * Attaches security headers to every response. Runs on the Node.js runtime
 * by default. Kept intentionally narrow — rewrites and redirects for routing
 * belong here, product logic does not.
 *
 * Verified against the local Next.js 16 docs shipped in node_modules.
 */
import { NextResponse, type NextRequest } from "next/server";

const SECURITY_HEADERS: Array<[string, string]> = [
  ["X-Content-Type-Options", "nosniff"],
  ["X-Frame-Options", "DENY"],
  ["Referrer-Policy", "strict-origin-when-cross-origin"],
  [
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  ],
  [
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  ],
];

export function proxy(_request: NextRequest) {
  const response = NextResponse.next();
  for (const [key, value] of SECURITY_HEADERS) {
    response.headers.set(key, value);
  }
  return response;
}

export const config = {
  matcher: [
    // Run on all paths except Next.js internals and static assets.
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
