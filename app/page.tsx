import HeroSection from "@/components/hero-section"
import WhyChooseUs from "@/components/why-choose-us"
import TestimonialsSlider from "@/components/testimonials-slider"
import ServicesPreview from "@/components/services-preview"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <TestimonialsSlider />
      <CTASection />
    </>
  )
}

