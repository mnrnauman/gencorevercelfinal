"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { Server, Cloud, Globe, Shield, Database } from "lucide-react"

export default function HeroSection() {
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
              <div className="relative bg-[#0f172a] rounded-2xl overflow-hidden shadow-xl p-8">
                <div className="aspect-video bg-gradient-to-br from-[#0a1e3d] to-[#0f2b5e] rounded-xl flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 p-6 w-full">
                    {/* Server */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="flex flex-col items-center justify-center bg-blue-900/30 p-4 rounded-lg"
                    >
                      <Server className="text-blue-400 mb-2 h-8 w-8" />
                      <span className="text-xs text-blue-300">Servers</span>
                    </motion.div>

                    {/* Cloud */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex flex-col items-center justify-center bg-blue-900/30 p-4 rounded-lg"
                    >
                      <Cloud className="text-blue-400 mb-2 h-8 w-8" />
                      <span className="text-xs text-blue-300">Cloud</span>
                    </motion.div>

                    {/* Security */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="flex flex-col items-center justify-center bg-blue-900/30 p-4 rounded-lg"
                    >
                      <Shield className="text-blue-400 mb-2 h-8 w-8" />
                      <span className="text-xs text-blue-300">Security</span>
                    </motion.div>

                    {/* Web */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="flex flex-col items-center justify-center bg-blue-900/30 p-4 rounded-lg"
                    >
                      <Globe className="text-blue-400 mb-2 h-8 w-8" />
                      <span className="text-xs text-blue-300">Web</span>
                    </motion.div>

                    {/* Logo */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="flex flex-col items-center justify-center bg-blue-900/50 p-4 rounded-lg col-span-1 row-span-1"
                    >
                      <img src="/logo.png" alt="GENCORE IT Logo" className="w-full max-w-[60px]" />
                    </motion.div>

                    {/* Database */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="flex flex-col items-center justify-center bg-blue-900/30 p-4 rounded-lg"
                    >
                      <Database className="text-blue-400 mb-2 h-8 w-8" />
                      <span className="text-xs text-blue-300">Data</span>
                    </motion.div>
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

