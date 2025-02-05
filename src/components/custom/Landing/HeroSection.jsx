"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSection = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-50/50 blur-3xl" />
      </div>

      {/* Semi-circle decoration */}
      <div className="absolute right-0 top-0 w-[1500px] h-[1500px] -translate-y-1/4 translate-x-1/4">
        <div className="relative w-full h-full">
          {/* Large semi-circle background glow */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-blue-300/20 to-blue-100/10 rounded-full blur-3xl"
            animate={{ 
              opacity: [0.4, 0.5, 0.4] 
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          {/* Single animated path */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
            <motion.path
              d="M100,0 A100,100 0 0,1 200,100"
              fill="none"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 lg:px-12 min-h-screen relative">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 min-h-screen items-start pt-20 md:pt-32">
          {/* Left side - Text content - Slightly adjusted margin */}
          <motion.div 
            className="text-left max-w-xl relative ml-0 md:ml-auto pr-0 md:pr-4"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-blue-900 mb-4 font-poppins"
              variants={fadeInUp}
            >
              know<span className="text-blue-600">[ledge]</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-blue-600 font-medium mb-6 font-poppins"
              variants={fadeInUp}
            >
              Your Gateway to Historical Discovery
            </motion.p>

            <motion.div 
              className="space-y-4 mb-8"
              variants={fadeInUp}
            >
              <p className="text-xl text-gray-700 font-poppins">
                Embark on an immersive journey through time with our innovative learning platform. Discover fascinating stories, untold narratives, and profound insights from the past.
              </p>
              <p className="text-lg text-gray-600 font-poppins">
                Experience history like never before through interactive lessons, engaging content, and a community of passionate learners.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-semibold transition-colors flex items-center justify-center gap-2 font-poppins">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                Download iOS App
              </button>
              <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-colors flex items-center justify-center gap-2 font-poppins">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Join Waitlist
              </button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-blue-200 border-2 border-white" />
                ))}
              </div>
              <p className="text-gray-600 font-poppins">Join our growing community of history enthusiasts</p>
            </motion.div>
          </motion.div>

          {/* Right side - iPhone mockup - Adjusted position more to the right */}
          <div className="relative flex items-start justify-center md:justify-center h-[600px] md:h-auto pl-0 md:pl-8">
            {/* Background circle for iPhone */}
            <div className="absolute top-1/2 right-1/2 w-[500px] h-[500px] translate-x-1/2 -translate-y-1/2">
              <motion.div 
                className="w-full h-full bg-gradient-to-br from-blue-200/30 via-blue-300/40 to-blue-400/30 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.5, 0.4] 
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </div>

            {/* Decorative lines */}
            <div className="absolute inset-0 z-0">
              <motion.div 
                className="absolute top-1/4 left-0 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.div 
                className="absolute top-2/4 right-0 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              />
              <motion.div 
                className="absolute bottom-1/4 left-1/4 w-[150px] h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              />
            </div>

            {/* Phone mockup */}
            <motion.div 
              className="relative w-[280px] md:w-[320px] h-[570px] md:h-[650px] z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {/* Phone frame */}
              <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl" />
              {/* Screen */}
              <div className="absolute inset-2 bg-white rounded-[2.75rem] overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
                  <div className="w-1/2">
                    <Image
                      src="/logo/Logo.svg"
                      alt="know[ledge] app interface"
                      width={200}
                      height={100}
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="text-xl font-bold text-blue-900 font-poppins tracking-tight mt-4">
                    know<span className="text-blue-600">[ledge]</span>
                  </span>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
