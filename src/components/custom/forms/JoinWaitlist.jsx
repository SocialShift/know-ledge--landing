"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const JoinWaitlist = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    device: 'ios' // Default to iOS
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // If Android is selected, redirect to Play Store
    if (formData.device === 'android') {
      window.open('https://play.google.com/store/apps/details?id=com.knowhistory_knowledge.app', '_blank')
      onSuccess?.()
      return
    }
    
    // Continue with iOS waitlist flow
    setIsSubmitting(true)

    try {
      // Add document to Firestore
      const waitlistRef = collection(db, 'waitlist')
      await addDoc(waitlistRef, {
        email: formData.email,
        device: formData.device,
        createdAt: serverTimestamp(),
      })

      setIsSubmitted(true)
      setIsSubmitting(false)
      
      // Call onSuccess after a brief delay to show the success message
      setTimeout(() => {
        onSuccess?.()
      }, 1500)
    } catch (error) {
      console.error('Error adding to waitlist:', error)
      setIsSubmitting(false)
      // You might want to add error handling UI here
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-blue-900 mb-2 font-poppins">Thank You!</h3>
        <p className="text-gray-600 font-poppins">
          We've added you to our waitlist. We'll notify you when we launch!
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-lg mx-auto"
    >
      <form 
        onSubmit={handleSubmit}
        className="space-y-6 bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
      >
        {formData.device === 'ios' && (
          <div className="space-y-2">
            <label 
              htmlFor="email"
              className="block text-sm font-medium text-blue-900 font-poppins"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required={formData.device === 'ios'}
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-poppins text-gray-800 bg-white/90"
              placeholder="Enter your email address"
            />
          </div>
        )}

        <div className="space-y-2">
          <label 
            className="block text-sm font-medium text-blue-900 font-poppins"
          >
            Device Preference
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="relative">
              <input
                type="radio"
                name="device"
                value="ios"
                checked={formData.device === 'ios'}
                onChange={handleInputChange}
                className="peer sr-only"
              />
              <div className="w-full p-4 text-center rounded-xl border border-gray-200 cursor-pointer transition-all duration-200 peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-600 hover:bg-blue-50/50">
                <svg className="w-6 h-6 mx-auto mb-2 text-gray-700 peer-checked:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <span className="font-poppins text-sm font-medium text-gray-800 peer-checked:text-blue-600">iOS</span>
              </div>
            </label>

            <label className="relative">
              <input
                type="radio"
                name="device"
                value="android"
                checked={formData.device === 'android'}
                onChange={handleInputChange}
                className="peer sr-only"
              />
              <div className="w-full p-4 text-center rounded-xl border border-gray-200 cursor-pointer transition-all duration-200 peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-600 hover:bg-blue-50/50">
                <svg className="w-6 h-6 mx-auto mb-2 text-gray-700 peer-checked:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.523 15.341l1.853-3.209c.107-.186.045-.424-.141-.531-.186-.107-.424-.045-.531.141l-1.877 3.25c-1.454-.84-3.082-1.316-4.827-1.316-1.745 0-3.373.476-4.827 1.316l-1.877-3.25c-.107-.186-.345-.248-.531-.141-.186.107-.248.345-.141.531l1.853 3.209C3.511 17.145 1.5 20.099 1.5 23.5h21c0-3.401-2.011-6.355-4.977-8.159zM7 17.75c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zM15.021 3.766l1.678-2.908c.107-.186.045-.424-.141-.531-.186-.107-.424-.045-.531.141l-1.695 2.937c-1.328-.538-2.801-.841-4.332-.841-1.531 0-3.004.303-4.332.841L3.973.468c-.107-.186-.345-.248-.531-.141-.186.107-.248.345-.141.531l1.678 2.908C2.012 5.129 0 7.997 0 11.278h20c0-3.281-2.012-6.149-4.979-7.512zm-9.021 4.512c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm8 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
                </svg>
                <span className="font-poppins text-sm font-medium text-gray-800 peer-checked:text-blue-600">Android</span>
              </div>
            </label>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center gap-2 font-poppins disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Joining...</span>
            </>
          ) : (
            <>
              {formData.device === 'android' ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download App</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <span>Join Waitlist</span>
                </>
              )}
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  )
}

export default JoinWaitlist
