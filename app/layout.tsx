import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";
import { COMPANY } from "@/lib/constants";
import { organizationJsonLd } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — ${COMPANY.tagline}`,
    template: `%s — ${COMPANY.name}`,
  },
  description: COMPANY.description,
  metadataBase: new URL(`https://${COMPANY.domain}`),
  applicationName: COMPANY.name,
  authors: [{ name: COMPANY.legalName, url: `https://${COMPANY.domain}` }],
  creator: COMPANY.legalName,
  publisher: COMPANY.legalName,
  keywords: [
    "AI engineering",
    "digital transformation",
    "cloud-native",
    "AI consulting",
    "engineering capability",
    "AvyuktAIverse",
  ],
  openGraph: {
    siteName: COMPANY.name,
    type: "website",
    locale: "en_IN",
    url: `https://${COMPANY.domain}`,
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0c0a1d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      data-theme="dark"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-[var(--surface-0)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-[var(--accent-500)] focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <ScrollReveal />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
