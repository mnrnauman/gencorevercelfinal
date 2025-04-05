"use client"

import { motion } from "framer-motion"
import { Linkedin } from "lucide-react"

const team = [
  {
    name: "Muhammad Nauman",
    position: "CEO & Founder",
    bio: "Visionary leader with extensive experience in IT solutions and business strategy.",
    linkedin: "https://www.linkedin.com/in/mnrnauman/",
    email: "nauman@gencoreit.com",
    image: "/placeholder.svg?height=300&width=300&text=Muhammad+Nauman",
  },
  {
    name: "Nadeem Yaseen",
    position: "CTO",
    bio: "Technology expert with a passion for innovation and cutting-edge solutions.",
    linkedin: "https://www.linkedin.com/in/nadeemyaseen/",
    email: "nadeem@gencoreit.com",
    image: "/placeholder.svg?height=300&width=300&text=Nadeem+Yaseen",
  },
  {
    name: "Muhammad Shoaib Ghauri",
    position: "COO",
    bio: "Operations specialist focused on delivering exceptional client experiences.",
    linkedin: "https://www.linkedin.com/in/shoaibghori/",
    email: "shoaib@gencoreit.com",
    image: "/placeholder.svg?height=300&width=300&text=Muhammad+Shoaib",
  },
]

export default function TeamSection() {
  return (
    <section className="py-20 bg-[#0a0f1a]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Our Leadership Team</h2>
          <p className="paragraph max-w-3xl mx-auto">
            Meet the experienced professionals who lead our company and drive our mission forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#162237] rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={member.image || "/placeholder.svg?height=300&width=300"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
              </div>
              <div className="p-6 relative">
                <h3 className="heading-sm mb-1">{member.name}</h3>
                <p className="text-[#f97316] font-medium mb-3">{member.position}</p>
                <p className="text-gray-300 mb-4">{member.bio}</p>
                <div className="flex items-center justify-between">
                  <a href={`mailto:${member.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {member.email}
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2563eb] hover:text-[#60a5fa] transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

