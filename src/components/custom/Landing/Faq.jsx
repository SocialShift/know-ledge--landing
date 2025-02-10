"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What makes know[ledge] different from other history apps?",
      answer: "know[ledge] combines cutting-edge technology with expert-curated historical content to create an immersive learning experience. Our platform features interactive timelines, AR experiences, and a global community of history enthusiasts, making historical discovery more engaging and accessible than ever before."
    },
    {
      question: "How does the interactive learning feature work?",
      answer: "Our interactive learning features include augmented reality (AR) experiences, virtual museum tours, and interactive timelines. Users can explore historical artifacts in 3D, walk through historical sites virtually, and engage with multimedia content that brings history to life."
    },
    {
      question: "Is know[ledge] suitable for educational institutions?",
      answer: "Yes! know[ledge] is designed to complement educational curricula. We offer special features for educators, including lesson plans, classroom activities, and group learning tools. Our platform aligns with educational standards while making history engaging for students."
    },
    {
      question: "How often is new content added?",
      answer: "We regularly update our content library with new historical narratives, artifacts, and interactive experiences. Our team of historians and content creators works continuously to add fresh content weekly, ensuring there's always something new to discover."
    },
    {
      question: "Can I contribute to the platform?",
      answer: "Absolutely! know[ledge] encourages community contributions. Users can share historical research, participate in discussions, and even submit their own historical narratives for review. Our expert team verifies all submissions to maintain high-quality standards."
    }
  ]

  return (
    <section id="faq" className="relative py-32 md:py-40 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-50/50 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mb-8 mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins text-blue-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-700 text-lg font-poppins">
              Everything you need to know about know[ledge]
            </p>
          </motion.div>

          {/* FAQ items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-blue-900 font-poppins pr-8 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </h3>
                    <span
                      className={`transform transition-transform duration-200 text-blue-500 ${
                        openIndex === index ? 'rotate-45' : 'rotate-0'
                      }`}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </span>
                  </div>
                  <div
                    className={`grid transition-all duration-200 ease-in-out ${
                      openIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-600 font-poppins">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
