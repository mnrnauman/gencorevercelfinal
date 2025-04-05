"use client"

import { motion } from "framer-motion"

const milestones = [
  {
    year: "2015",
    title: "Company Founded",
    description:
      "GENCORE IT was established with a vision to provide innovative IT solutions to businesses of all sizes.",
  },
  {
    year: "2017",
    title: "Expansion of Services",
    description: "Added cloud solutions and PBX & VoIP services to our portfolio to meet growing client demands.",
  },
  {
    year: "2019",
    title: "Strategic Partnerships",
    description: "Formed strategic partnerships with leading technology providers to enhance our service offerings.",
  },
  {
    year: "2020",
    title: "Digital Transformation Focus",
    description:
      "Launched specialized digital transformation services to help businesses adapt to the changing landscape.",
  },
  {
    year: "2022",
    title: "International Expansion",
    description: "Expanded operations to serve international clients, bringing our expertise to a global market.",
  },
  {
    year: "2023",
    title: "Innovation Hub Launch",
    description: "Established an innovation hub to develop cutting-edge solutions for emerging technologies.",
  },
]

export default function Timeline() {
  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Our Journey</h2>
          <p className="paragraph max-w-3xl mx-auto">
            Explore the key milestones in our journey as we've grown and evolved to become a leading IT solutions
            provider.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#3b82f6] hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
              >
                <div className="md:w-1/2 p-4">
                  <div className={`bg-[#162237] p-6 rounded-xl shadow-lg ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                    <div className="text-[#FFA94D] font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="heading-sm mb-3">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>

                <div className="md:w-0 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-[#FFA94D]"></div>
                  </div>
                </div>

                <div className="md:w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

