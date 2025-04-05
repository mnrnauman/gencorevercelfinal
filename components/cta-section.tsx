"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-orange-900/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="bg-[#162237] rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block mb-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                  Let's discuss how our IT solutions can help you achieve your business goals and stay ahead of the
                  competition.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Get a Free Consultation
                  </Link>
                  <Link href="/services" className="btn-outline">
                    Explore Our Services
                  </Link>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-orange-600/30 rounded-2xl blur-sm"></div>
                <div className="relative bg-[#0f172a]/50 rounded-2xl overflow-hidden p-1">
                  <div className="aspect-video bg-gradient-to-br from-blue-900/30 to-blue-600/30 rounded-xl flex items-center justify-center p-8">
                    <img src="/logo.png" alt="GENCORE IT Logo" className="w-full max-w-[200px]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

