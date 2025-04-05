import type { Metadata } from "next"
import AboutHero from "@/components/about-hero"
import TeamSection from "@/components/team-section"
import Timeline from "@/components/timeline"
import CTASection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "About Us - GENCORE IT",
  description:
    "Learn about GENCORE IT, our mission, vision, achievements, and the team behind our innovative IT solutions.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <TeamSection />
      <CTASection />
    </>
  )
}

