"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#162237] rounded-xl p-8 shadow-lg"
    >
      <h2 className="heading-md mb-6">Send Us a Message</h2>

      {isSubmitted ? (
        <div className="bg-green-900/20 border border-green-800 rounded-lg p-4 flex items-center text-green-400 mb-6">
          <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          <p>Thank you for your message! We'll get back to you shortly.</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#1e293b] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-gray-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#1e293b] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-gray-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="company" className="block text-gray-300 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formState.company}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#1e293b] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-gray-300"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 bg-[#1e293b] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b82f6] text-gray-300 resize-none"
          ></textarea>
        </div>

        <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex items-center justify-center">
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}

