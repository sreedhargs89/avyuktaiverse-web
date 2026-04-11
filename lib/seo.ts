import { COMPANY, FOUNDER } from "@/lib/constants";

/**
 * Organization JSON-LD — rendered in the root layout so crawlers
 * (Google, LLMs) can pick up structured company info.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `https://${COMPANY.domain}#organization`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: `https://${COMPANY.domain}`,
    logo: `https://${COMPANY.domain}/favicon.ico`,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    description: COMPANY.description,
    slogan: COMPANY.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address,
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: FOUNDER.name,
      jobTitle: FOUNDER.role,
      description: FOUNDER.bio,
    },
    sameAs: COMPANY.linkedin ? [COMPANY.linkedin] : [],
  } as const;
}

/**
 * Person JSON-LD for the founder — used on /about.
 */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: FOUNDER.name,
    jobTitle: FOUNDER.role,
    description: FOUNDER.bio,
    worksFor: {
      "@type": "Organization",
      "@id": `https://${COMPANY.domain}#organization`,
      name: COMPANY.name,
    },
  } as const;
}

/**
 * Compose a canonical absolute URL for a given path.
 */
export function canonical(path: string = "/"): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${COMPANY.domain}`;
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${base.replace(/\/$/, "")}${suffix}`;
}
