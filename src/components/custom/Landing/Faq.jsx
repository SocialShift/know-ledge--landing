"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Why was Know(ledge) created?",
      answer: "We created the platform to fill a critical gap in historical representation by making overlooked narratives accessible, engaging, and immersive. Traditional education, books, and media often omit or minimize key events and perspectives related to race, gender, sexuality, and culture. Our mission is to readjust or unearth these stories by providing a space where users can explore untold histories, gain deeper insights, and engage in meaningful discussions that connect the past to the present."
    },
    {
      question: "What is Know(ledge)?",
      answer: "We bring overlooked history to life through immersive storytelling, expert insights, and collaborative learning. Our focus is on highlighting untold narratives about race, gender, sexuality, and culture—stories often missing from mainstream education."
    },
    {
      question: "Who is Know(ledge) for?",
      answer:  "We’re designed for lifelong learners, educators, and socially conscious individuals who want to engage with history beyond textbooks. Whether you’re looking to explore new perspectives, contribute your own insights, or connect with a like-minded community, we provide an interactive space to deepen your understanding of historical events and their impact today."
    },
    {
      question: "What makes Know(ledge) different?",
      answer: "Unlike traditional history platforms, we prioritize narratives that have been suppressed or overlooked. By combining immersive storytelling with community engagement, we allow users to not only learn but also participate in discussions, share insights, and contribute to a collective understanding of history."
    },
    {
      question: "How does Know(ledge) work?",
      answer: "We integrate story-driven learning with collaborative features. Users can explore bite-sized historical narratives, engage in discussions with fellow seekers, access curated content on key historical events, and participate in knowledge-building challenges. Our platform is designed to be both interactive and informative, ensuring an engaging learning experience."
    },
    {
      question: "Can I contribute to Know(ledge)?",
      answer: "In the near future, yes! We are building a collaborative learning space where users can share historical insights, participate in discussions, and contribute recommended resources to enrich the platform. We welcome diverse perspectives and community-driven contributions that align with our mission of making history more inclusive and accessible."
    },
    {
      question: "Is Know(ledge) free?",
      answer: "We offer free access to core content, with premium features available for users who want a deeper, more interactive experience. Premium members gain access to exclusive expert discussions, additional learning tools, and a more personalized experience."
    },
    {
      question: "How can I support Know(ledge)?",
      answer: "You can support us by signing up for early access, sharing the platform with your network, participating in discussions, and providing feedback to help us improve. By engaging with the community and contributing to the learning experience, you help shape a more inclusive and comprehensive historical resource."
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
