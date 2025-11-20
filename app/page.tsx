"use client"

import HeroSection from "@/components/hero-section"
import CountdownSection from "@/components/countdown-section"
import CarouselSection from "@/components/carousel-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import AgendaSection from "@/components/agenda-section"
import MethodSection from "@/components/method-section"
import TargetSection from "@/components/target-section"
import ExpertsSection from "@/components/experts-section"
import PricingSection from "@/components/pricing-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CountdownSection />
      <CarouselSection />
      <ProblemSection />
      <SolutionSection />
      <AgendaSection />
      <MethodSection />
      <TargetSection />
      <ExpertsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
