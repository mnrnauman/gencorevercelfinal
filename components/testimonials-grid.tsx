"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    content:
      "GENCORE IT transformed our business operations with their cloud solutions. Their team's expertise and dedication to our success made all the difference. We've seen a 30% increase in efficiency since implementing their solutions.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO, InnovateCorp",
    content:
      "The custom CRM solution developed by GENCORE IT has streamlined our customer management process and increased our sales efficiency by 40%. Their attention to detail and understanding of our business needs was impressive.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director, GrowthHub",
    content:
      "Their SEO and digital marketing services have significantly improved our online presence. We've seen a 200% increase in organic traffic within just three months. The team is responsive, knowledgeable, and delivers results.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Operations Manager, GlobalTech",
    content:
      "The VoIP solution implemented by GENCORE IT has revolutionized our communication systems. We've reduced our communication costs by 50% while improving call quality and reliability. Their support team is always available when we need them.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Jennifer Lee",
    position: "HR Director, FutureCorp",
    content:
      "GENCORE IT's custom HR management system has simplified our processes and saved us countless hours of administrative work. Their team took the time to understand our unique requirements and delivered a solution that exceeded our expectations.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    name: "Robert Wilson",
    position: "Owner, Wilson Properties",
    content:
      "The property management CRM developed by GENCORE IT has been a game-changer for our business. We can now manage all our properties, tenants, and maintenance requests in one place. Their ongoing support has been exceptional.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 7,
    name: "Amanda Garcia",
    position: "Director, TravelEase Agency",
    content:
      "Our travel agency has benefited immensely from GENCORE IT's custom booking system. It's user-friendly, efficient, and has helped us provide better service to our clients. The team was professional and delivered the project on time and within budget.",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 8,
    name: "James Kim",
    position: "CEO, HealthTech Solutions",
    content:
      "GENCORE IT developed a patient management system for our healthcare practice that has improved our efficiency and patient care. Their understanding of healthcare regulations and requirements was impressive. We highly recommend their services.",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsGrid() {
  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#162237] rounded-xl p-6 shadow-lg"
            >
              <Quote className="w-10 h-10 text-[#FFA94D] opacity-50 mb-4" />
              <p className="text-gray-300 italic mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-[#FFA94D] text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

