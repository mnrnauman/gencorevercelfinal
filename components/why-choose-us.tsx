"use client"

import { motion } from "framer-motion"
import { Shield, Clock, TrendingUp, DollarSign } from "lucide-react"

const features = [
  {
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    title: "Expertise",
    description: "Our team of certified IT professionals brings years of industry experience to every project.",
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-500" />,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support ensures your business operations run smoothly without interruption.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    title: "Scalable Solutions",
    description: "Our solutions grow with your business, adapting to your changing needs and requirements.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-blue-500" />,
    title: "Affordable Pricing",
    description: "Competitive pricing models designed to provide maximum value without compromising on quality.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-orange-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-[#162237] p-8 rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-blue-900/30 to-blue-600/30 rounded-xl flex items-center justify-center">
                  <div className="text-4xl font-bold text-blue-500/80">Why Choose Us</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-3">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
            <p className="text-gray-400 mb-8">
              At GENCORE IT, we deliver innovative solutions tailored to your business needs, ensuring you stay ahead in
              today's competitive digital landscape.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-[#162237] p-3 rounded-lg mr-4">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

