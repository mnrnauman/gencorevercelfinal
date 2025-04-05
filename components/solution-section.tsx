"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

interface Industry {
  name: string
  description: string
  features: string[]
}

interface SolutionSectionProps {
  title: string
  description: string
  industries: Industry[]
}

export default function SolutionSection({ title, description, industries }: SolutionSectionProps) {
  const [activeIndustry, setActiveIndustry] = useState(0)

  return (
    <section className="py-20 bg-[#0f172a]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-md mb-4">{title}</h2>
          <p className="paragraph max-w-3xl mx-auto">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <div className="bg-[#162237] rounded-xl p-4 shadow-lg sticky top-24">
              <h3 className="heading-sm mb-4 text-center lg:text-left">Industries</h3>
              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2">
                {industries.map((industry, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndustry(index)}
                    className={`px-4 py-3 rounded-lg text-left transition-colors whitespace-nowrap lg:whitespace-normal ${
                      activeIndustry === index
                        ? "bg-[#3b82f6] text-white"
                        : "bg-[#1e293b] text-gray-300 hover:bg-[#1e293b]/80"
                    }`}
                  >
                    {industry.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#162237] rounded-xl p-8 shadow-lg">
              <h3 className="heading-sm mb-4">{industries[activeIndustry].name}</h3>
              <p className="paragraph mb-6">{industries[activeIndustry].description}</p>

              <h4 className="text-lg font-semibold mb-4">Key Features:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {industries[activeIndustry].features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-[#FFA94D] mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Started
                </Link>
                <Link href="/contact" className="text-[#FFA94D] font-medium hover:underline inline-flex items-center">
                  Request a Demo
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

