"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

const services = [
  {
    name: "CRM Development",
    image: "/services/crm.png",
    description: "Custom CRM solutions for your business needs",
  },
  {
    name: "PBX & VoIP",
    image: "/services/pbx.png",
    description: "Advanced communication systems",
  },
  {
    name: "IT Support",
    image: "/services/support.png",
    description: "24/7 technical support & consultancy",
  },
  {
    name: "Web Development",
    image: "/services/web-dev.png",
    description: "Custom websites & web applications",
  },
  {
    name: "Cloud Solutions",
    image: "/services/cloud.png",
    description: "Secure & scalable cloud infrastructure",
  },
]

export default function HeroSection() {
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev === services.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0a0f1a] to-[#0f172a]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-block mb-4">
              <img src="/logo.png" alt="GENCORE IT Logo" className="h-16 w-auto mx-auto lg:mx-0" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Next Generation</span>
              <br />
              <span className="text-gradient">IT Solutions</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Transforming businesses with innovative technology solutions designed for the modern digital landscape.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="/contact" className="btn-primary">
                Get a Free Consultation
              </Link>
              <Link href="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-orange-600 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-[#0f172a] rounded-2xl overflow-hidden shadow-xl">
                {/* Service Showcase */}
                <div className="aspect-video bg-gradient-to-br from-[#0a1e3d] to-[#0f2b5e] rounded-xl p-1">
                  <div className="relative h-full rounded-lg overflow-hidden">
                    {/* Main Service Display */}
                    <AnimatedServiceDisplay service={services[activeService]} />

                    {/* Service Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1e3d] to-transparent p-4">
                      <div className="flex justify-center space-x-2">
                        {services.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveService(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === activeService ? "bg-blue-500" : "bg-gray-600 hover:bg-gray-500"
                            }`}
                            aria-label={`View ${services[index].name}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl blur-xl opacity-40"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-red-600 rounded-full blur-xl opacity-30"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="p-6 rounded-xl bg-[#162237]/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-1">8+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="p-6 rounded-xl bg-[#162237]/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-1">200+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="p-6 rounded-xl bg-[#162237]/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-1">50+</div>
            <div className="text-gray-400 text-sm">Team Members</div>
          </div>
          <div className="p-6 rounded-xl bg-[#162237]/50 backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-1">99%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AnimatedServiceDisplay({ service }) {
  return (
    <motion.div
      key={service.name}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col"
    >
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-orange-600/20 rounded-xl blur-sm"></div>
          <div className="relative bg-[#162237]/80 rounded-xl overflow-hidden">
            <img src={service.image || "/placeholder.svg"} alt={service.name} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
      <div className="bg-[#162237]/80 p-4 text-center">
        <h3 className="text-xl font-bold text-white">{service.name}</h3>
        <p className="text-blue-300 text-sm">{service.description}</p>
      </div>
    </motion.div>
  )
}

