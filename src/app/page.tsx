import AIWeightLossHero from "./components/Hero"
import AIWeightLossFeatures from "./components/Features"
import TestimonialsSectionDemo from "./components/Testimonials"
import AIPricingSectionDemo from "./components/Pricing"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <AIWeightLossHero />
      <AIWeightLossFeatures />
      <TestimonialsSectionDemo />
      <AIPricingSectionDemo />
    </main>
  )
}
