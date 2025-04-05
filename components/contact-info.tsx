"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Linkedin, Facebook, Twitter, Instagram } from "lucide-react"

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="bg-[#162237] rounded-xl p-8 shadow-lg mb-8">
        <h2 className="heading-md mb-6">Contact Information</h2>

        <div className="space-y-6">
          <div className="flex items-start">
            <MapPin className="w-6 h-6 text-[#FFA94D] mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Office Address</h3>
              <p className="text-gray-300">
                4th Floor, Saeed Alam Tower, 37-Commercial Zone, Liberty Market, Gulberg, Lahore, Pakistan
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Phone className="w-6 h-6 text-[#FFA94D] mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">
                <a href="tel:+923320000911" className="hover:text-[#FFA94D]">
                  +92 332 0000911
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="w-6 h-6 text-[#FFA94D] mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">
                <a href="mailto:nauman@gencoreit.com" className="hover:text-[#FFA94D]">
                  nauman@gencoreit.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Clock className="w-6 h-6 text-[#FFA94D] mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Office Hours</h3>
              <p className="text-gray-300">Monday-Friday: 09:00am-07:00pm</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#162237] rounded-xl p-8 shadow-lg">
        <h2 className="heading-md mb-6">Connect With Us</h2>

        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/company/gencoreit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#0a0f1a] flex items-center justify-center text-gray-300 hover:text-[#FFA94D] transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/gencoreit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#0a0f1a] flex items-center justify-center text-gray-300 hover:text-[#FFA94D] transition-colors"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://twitter.com/gencoreit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#0a0f1a] flex items-center justify-center text-gray-300 hover:text-[#FFA94D] transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/gencoreit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#0a0f1a] flex items-center justify-center text-gray-300 hover:text-[#FFA94D] transition-colors"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

