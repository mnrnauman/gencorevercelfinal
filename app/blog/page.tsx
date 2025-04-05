import type { Metadata } from "next"
import BlogGrid from "@/components/blog-grid"
import CTASection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Blog - GENCORE IT",
  description:
    "Explore our latest articles, industry insights, case studies, and IT trends to stay informed about the evolving technology landscape.",
}

export default function BlogPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-[#0a0f1a]">
        <div className="container-custom">
          <h1 className="heading-lg text-center mb-4">Our Blog</h1>
          <p className="paragraph text-center max-w-3xl mx-auto">
            Explore our latest articles, industry insights, case studies, and IT trends.
          </p>
        </div>
      </div>

      <BlogGrid />
      <CTASection />
    </>
  )
}

