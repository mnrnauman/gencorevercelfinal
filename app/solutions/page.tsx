import type { Metadata } from "next"
import SolutionSection from "@/components/solution-section"
import CTASection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Solutions - GENCORE IT",
  description:
    "Explore our custom IT solutions including CRM development for various industries and custom ERP & business automation solutions.",
}

export default function SolutionsPage() {
  return (
    <>
      <div className="pt-24 pb-12 bg-[#0a0f1a]">
        <div className="container-custom">
          <h1 className="heading-lg text-center mb-4">Our Solutions</h1>
          <p className="paragraph text-center max-w-3xl mx-auto">
            We develop custom IT solutions tailored to the specific needs of various industries.
          </p>
        </div>
      </div>

      <SolutionSection
        title="CRM Development"
        description="Our custom Customer Relationship Management (CRM) solutions are designed to streamline your customer interactions, improve sales processes, and enhance customer satisfaction. We develop tailored CRM systems for various industries, ensuring they meet your specific business requirements."
        industries={[
          {
            name: "Travel Agencies",
            description:
              "Manage bookings, customer preferences, and travel itineraries efficiently with our travel agency CRM solution.",
            features: [
              "Booking Management",
              "Customer Preference Tracking",
              "Itinerary Planning",
              "Automated Notifications",
              "Payment Processing",
              "Reporting & Analytics",
            ],
          },
          {
            name: "Property Management",
            description:
              "Streamline property listings, tenant management, and maintenance requests with our property management CRM.",
            features: [
              "Property Listings",
              "Tenant/Owner Management",
              "Maintenance Request Tracking",
              "Rent Collection & Accounting",
              "Document Management",
              "Inspection Scheduling",
            ],
          },
          {
            name: "Healthcare",
            description: "Enhance patient care and streamline administrative tasks with our healthcare CRM solution.",
            features: [
              "Patient Records Management",
              "Appointment Scheduling",
              "Treatment Planning",
              "Billing & Insurance",
              "Prescription Management",
              "Compliance & Reporting",
            ],
          },
          {
            name: "E-commerce",
            description: "Boost sales and improve customer retention with our e-commerce CRM solution.",
            features: [
              "Customer Segmentation",
              "Order Management",
              "Product Recommendations",
              "Marketing Automation",
              "Inventory Tracking",
              "Customer Support Integration",
            ],
          },
        ]}
      />

      <SolutionSection
        title="Custom ERP & Business Automation"
        description="Our Enterprise Resource Planning (ERP) and business automation solutions help you streamline operations, reduce manual tasks, and improve overall efficiency. We develop custom systems that integrate all aspects of your business into a unified platform."
        industries={[
          {
            name: "Manufacturing",
            description:
              "Optimize production processes, inventory management, and supply chain operations with our manufacturing ERP solution.",
            features: [
              "Production Planning",
              "Inventory Management",
              "Supply Chain Integration",
              "Quality Control",
              "Equipment Maintenance",
              "Cost Tracking & Analysis",
            ],
          },
          {
            name: "Retail",
            description:
              "Manage inventory, sales, and customer relationships efficiently with our retail ERP solution.",
            features: [
              "Point of Sale Integration",
              "Inventory Management",
              "Customer Loyalty Programs",
              "Employee Scheduling",
              "Multi-store Management",
              "Sales Analytics",
            ],
          },
          {
            name: "Professional Services",
            description:
              "Streamline project management, time tracking, and billing with our professional services ERP solution.",
            features: [
              "Project Management",
              "Time & Expense Tracking",
              "Resource Allocation",
              "Client Management",
              "Billing & Invoicing",
              "Performance Analytics",
            ],
          },
          {
            name: "Education",
            description:
              "Enhance administrative processes, student management, and academic planning with our education ERP solution.",
            features: [
              "Student Information System",
              "Course Management",
              "Attendance Tracking",
              "Grading & Assessment",
              "Financial Management",
              "Parent Communication",
            ],
          },
        ]}
      />

      <CTASection />
    </>
  )
}

