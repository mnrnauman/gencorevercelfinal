"use client"

import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-[#0a0f1a]">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h1 className="heading-lg mb-6">About GENCORE IT</h1>
            <p className="paragraph mb-4">
              GENCORE IT is a leading provider of innovative IT solutions, dedicated to helping businesses leverage
              technology to achieve their goals and stay ahead in today's competitive digital landscape.
            </p>
            <p className="paragraph mb-4">
              Founded with a vision to deliver next-generation core IT solutions, we combine technical expertise with
              industry knowledge to create tailored solutions that address the unique challenges faced by businesses
              across various sectors.
            </p>
            <p className="paragraph">
              Our team of experienced professionals is committed to delivering exceptional service and support, ensuring
              that our clients receive the highest quality solutions that drive growth and success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#162237] p-6 rounded-xl shadow-lg">
                <h3 className="heading-sm mb-3 text-[#FFA94D]">Our Mission</h3>
                <p className="text-gray-300">
                  To empower businesses with innovative IT solutions that drive growth, efficiency, and competitive
                  advantage in the digital age.
                </p>
              </div>

              <div className="bg-[#162237] p-6 rounded-xl shadow-lg">
                <h3 className="heading-sm mb-3 text-[#FFA94D]">Our Vision</h3>
                <p className="text-gray-300">
                  To be the leading provider of transformative IT solutions, recognized for excellence, innovation, and
                  exceptional client service.
                </p>
              </div>

              <div className="bg-[#162237] p-6 rounded-xl shadow-lg">
                <h3 className="heading-sm mb-3 text-[#FFA94D]">Our Values</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Innovation</li>
                  <li>• Excellence</li>
                  <li>• Integrity</li>
                  <li>• Client Focus</li>
                </ul>
              </div>

              <div className="bg-[#162237] p-6 rounded-xl shadow-lg">
                <h3 className="heading-sm mb-3 text-[#FFA94D]">Our Approach</h3>
                <p className="text-gray-300">
                  We take a collaborative, client-centered approach, working closely with you to understand your needs
                  and deliver solutions that exceed expectations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

