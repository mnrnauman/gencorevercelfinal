"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Globe, Cloud, Phone, BarChart, Headphones, ArrowRight } from "lucide-react"

const services = [
  {
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    image: "/services/web-dev.png",
    title: "Web Development & Hosting",
    description: "Custom websites, web applications, and reliable hosting solutions tailored to your business needs.",
    link: "/services#web-development",
  },
  {
    icon: <Cloud className="w-6 h-6 text-blue-500" />,
    image: "/services/cloud.png",
    title: "Cloud Solutions",
    description: "Secure and scalable public and private cloud infrastructure to optimize your operations.",
    link: "/services#cloud-solutions",
  },
  {
    icon: <Phone className="w-6 h-6 text-blue-500" />,
    image: "/services/pbx.png",
    title: "PBX & VoIP Solutions",
    description: "Advanced communication systems that enhance connectivity and reduce costs.",
    link: "/services#pbx-voip",
  },
  {
    icon: <BarChart className="w-6 h-6 text-blue-500" />,
    image: "/services/crm.png",
    title: "CRM Development",
    description: "Custom CRM solutions to streamline your customer interactions and improve sales processes.",
    link: "/services#crm-development",
  },
  {
    icon: <Headphones className="w-6 h-6 text-blue-500" />,
    image: "/services/support.png",
    title: "IT Support & Consultancy",
    description: "Expert guidance and support to help you navigate the complex IT landscape.",
    link: "/services#it-support",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-[#0a0f1a]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-3">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive range of IT solutions designed to help your business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-[#162237] rounded-xl overflow-hidden shadow-lg h-full flex flex-col hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md p-2 rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-blue-500 font-medium hover:text-blue-400 transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

