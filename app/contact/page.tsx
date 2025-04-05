import type { Metadata } from "next"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import Map from "@/components/map"

export const metadata: Metadata = {
  title: "Contact Us - GENCORE IT",
  description:
    "Get in touch with GENCORE IT for innovative IT solutions tailored to your business needs. Contact us for a free consultation.",
}

export default function ContactPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-[#0a0f1a]">
        <div className="container-custom">
          <h1 className="heading-lg text-center mb-4">Contact Us</h1>
          <p className="paragraph text-center max-w-3xl mx-auto">
            Get in touch with our team to discuss how we can help your business thrive with our IT solutions.
          </p>
        </div>
      </div>

      <section className="py-20 bg-[#0f172a]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <Map />
    </>
  )
}

