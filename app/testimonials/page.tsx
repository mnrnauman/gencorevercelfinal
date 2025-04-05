import type { Metadata } from "next"
import TestimonialsGrid from "@/components/testimonials-grid"
import CTASection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Testimonials - GENCORE IT",
  description:
    "Read what our clients have to say about our IT solutions and services. Discover how we've helped businesses achieve their goals.",
}

export default function TestimonialsPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-[#0a0f1a]">
        <div className="container-custom">
          <h1 className="heading-lg text-center mb-4">Client Testimonials</h1>
          <p className="paragraph text-center max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>
      </div>

      <TestimonialsGrid />
      <CTASection />
    </>
  )
}

