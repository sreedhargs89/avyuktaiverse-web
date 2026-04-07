import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ProblemStatement } from "@/components/home/problem-statement";
import { WhatWeDo } from "@/components/home/what-we-do";
import { Differentiators } from "@/components/home/differentiators";
import { CtaBanner } from "@/components/home/cta-banner";

export const metadata: Metadata = {
  title: "Avyukt AIverse — Engineers who think. AI that helps.",
  description:
    "AI-enabled engineers, architects, and delivery professionals who work alongside your teams to solve real problems. No hype. Just delivery.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <WhatWeDo />
      <Differentiators />
      <CtaBanner />
    </>
  );
}
