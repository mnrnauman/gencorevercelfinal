import type { Metadata } from "next"
import ServiceSection from "@/components/service-section"
import CTASection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Services - GENCORE IT",
  description:
    "Explore our comprehensive range of IT services including web development, cloud solutions, PBX & VoIP, SEO & digital marketing, and IT support & consultancy.",
}

export default function ServicesPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-[#0a0f1a]">
        <div className="container-custom">
          <h1 className="heading-lg text-center mb-4">Our Services</h1>
          <p className="paragraph text-center max-w-3xl mx-auto">
            We offer a comprehensive range of IT solutions designed to help your business thrive in the digital age.
          </p>
        </div>
      </div>

      <ServiceSection
        id="web-development"
        title="Web Development & Hosting"
        description="Our expert team creates custom, responsive websites and web applications that deliver exceptional user experiences. We also provide reliable hosting solutions to ensure your online presence is always available and performing at its best."
        features={[
          "Custom Website Development",
          "E-commerce Solutions",
          "Progressive Web Applications",
          "Content Management Systems",
          "Responsive Design",
          "High-Performance Hosting",
          "Website Maintenance & Support",
          "Security & Backup Solutions",
        ]}
        image="/services/web-dev.png"
        reversed={false}
      />

      <ServiceSection
        id="cloud-solutions"
        title="Cloud Solutions"
        description="Transform your business with our secure and scalable cloud infrastructure solutions. Whether you need public, private, or hybrid cloud environments, we design and implement solutions that optimize your operations and reduce costs."
        features={[
          "Public & Private Cloud Infrastructure",
          "Cloud Migration Services",
          "Hybrid Cloud Solutions",
          "Cloud Security & Compliance",
          "Disaster Recovery & Backup",
          "Infrastructure as a Service (IaaS)",
          "Platform as a Service (PaaS)",
          "Software as a Service (SaaS)",
        ]}
        image="/services/cloud.png"
        reversed={true}
      />

      <ServiceSection
        id="pbx-voip"
        title="PBX & VoIP Solutions"
        description="Enhance your business communications with our advanced PBX and VoIP solutions. We provide reliable, cost-effective systems that improve connectivity and collaboration across your organization."
        features={[
          "IP PBX Systems",
          "VoIP Phone Services",
          "Unified Communications",
          "Call Center Solutions",
          "Video Conferencing",
          "Mobile Integration",
          "SIP Trunking",
          "24/7 Support & Maintenance",
        ]}
        image="/services/pbx.png"
        reversed={false}
      />

      <ServiceSection
        id="crm-development"
        title="CRM Development"
        description="Our custom Customer Relationship Management (CRM) solutions are designed to streamline your customer interactions, improve sales processes, and enhance customer satisfaction. We develop tailored CRM systems for various industries, ensuring they meet your specific business requirements."
        features={[
          "Customer Data Management",
          "Sales Pipeline Tracking",
          "Marketing Automation",
          "Customer Support Integration",
          "Analytics & Reporting",
          "Mobile CRM Access",
          "Third-party Integrations",
          "Customized Workflows",
        ]}
        image="/services/crm.png"
        reversed={true}
      />

      <ServiceSection
        id="it-support"
        title="IT Support & Consultancy"
        description="Get expert guidance and support to help you navigate the complex IT landscape. Our team provides proactive monitoring, troubleshooting, and strategic advice to ensure your systems run smoothly and efficiently."
        features={[
          "24/7 Technical Support",
          "Network Design & Management",
          "IT Infrastructure Planning",
          "Cybersecurity Services",
          "Hardware & Software Procurement",
          "IT Project Management",
          "Technology Audits & Assessments",
          "Staff Training & Knowledge Transfer",
        ]}
        image="/services/support.png"
        reversed={false}
      />

      <CTASection />
    </>
  )
}

