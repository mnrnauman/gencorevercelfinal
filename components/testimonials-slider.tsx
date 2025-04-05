"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    content:
      "GENCORE IT transformed our business operations with their cloud solutions. Their team's expertise and dedication to our success made all the difference.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO, InnovateCorp",
    content:
      "The custom CRM solution developed by GENCORE IT has streamlined our customer management process and increased our sales efficiency by 40%.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director, GrowthHub",
    content:
      "Their SEO and digital marketing services have significantly improved our online presence. We've seen a 200% increase in organic traffic within just three months.",
  },
]

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval
    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-24 bg-[#0a0f1a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-[#162237] rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl"></div>

              <Quote className="w-12 h-12 text-blue-500/20 mb-6" />
              <p className="text-xl md:text-2xl text-gray-300 font-light italic mb-8 relative z-10">
                "{testimonials[current].content}"
              </p>
              <div className="flex items-center">
                <div className="mr-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full blur-sm"></div>
                  <div className="relative rounded-full overflow-hidden w-16 h-16 border-2 border-[#0f172a] bg-blue-900/30 flex items-center justify-center">
                    <div className="text-xl font-bold text-blue-500">{testimonials[current].name[0]}</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonials[current].name}</h4>
                  <p className="text-blue-400">{testimonials[current].position}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-[#162237] hover:bg-[#1e293b] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrent(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current ? "bg-blue-500" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-[#162237] hover:bg-[#1e293b] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

