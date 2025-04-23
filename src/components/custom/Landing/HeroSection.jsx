"use client"
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useMemo, useCallback, memo } from 'react'
import JoinWaitlist from '@/components/custom/forms/JoinWaitlist'

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [state, setState] = useState({
    isJoined: false,
    showWaitlistForm: false
  })

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Memoize animation variants
  const animations = useMemo(() => ({
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }
    },
    tickVariants: {
      checked: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: 0.3, ease: "easeOut" }
      },
      unchecked: {
        pathLength: 0,
        opacity: 0
      }
    }
  }), []);

  // Optimize handlers
  const handleJoinWaitlist = useCallback(() => {
    if (!state.isJoined) {
      setState(prev => ({ ...prev, showWaitlistForm: true }));
    }
  }, [state.isJoined]);

  const handleWaitlistSuccess = useCallback(() => {
    setState(prev => ({
      ...prev,
      showWaitlistForm: false,
      isJoined: true
    }));
  }, []);

  const handleCloseModal = useCallback((e) => {
    e?.stopPropagation();
    setState(prev => ({ ...prev, showWaitlistForm: false }));
  }, []);

  // Memoize IPhone component
  const IPhone = useMemo(() => {
    return ({ className, scale, rotate, opacity, zIndex }) => (
      <motion.div 
        className={`relative ${className}`}
        style={{ zIndex }}
        initial={false}
        animate={{ 
          opacity, 
          scale: isMobile ? 0.85 : scale,
          rotate: isMobile ? 0 : rotate
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl" />
        <div className="absolute inset-2 bg-white rounded-[2.75rem] overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/appsc/timeline.jpg"
              alt="know[ledge] app interface"
              fill
              sizes="(max-width: 768px) 280px, (max-width: 1200px) 320px, 320px"
              className="object-cover w-[280%] h-[220%] mb-10"
              priority
            />
          </div>
        </div>
      </motion.div>
    );
  }, [isMobile]);

  // Modify the background animation section
  const BackgroundAnimation = () => {
    if (isMobile) {
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-50/50 blur-3xl" />
        </div>
      )
    }

    return (
      <>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute w-full h-[120%] top-0 left-0 transform rotate-180"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,90.7C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="url(#gradient)"
              className="opacity-20"
            >
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="
                  M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,90.7C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,165.3C960,181,1056,171,1152,165.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,90.7C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </path>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#3B82F6' }} />
                <stop offset="50%" style={{ stopColor: '#2563EB' }} />
                <stop offset="100%" style={{ stopColor: '#1D4ED8' }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-50/50 blur-3xl" />
        </div>

        <div className="absolute right-0 top-0 w-[1500px] h-[1500px] -translate-y-1/4 translate-x-1/4">
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
      </>
    )
  }

  return (
    <div className="min-h-[100vh] md:min-h-[110vh] bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <BackgroundAnimation />
      
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 min-h-screen relative">
        {/* Adjusted grid container with better mobile spacing */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center md:pt-32">
          {/* Left side - Text content */}
          <motion.div 
            variants={animations.fadeInUp}
            className="flex flex-col items-center md:items-start text-center md:text-left md:pl-16 lg:pl-24 pt-24 md:pt-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-4xl font-bold text-blue-900 mb-4 sm:mb-5 md:mb-6 font-poppins max-w-2xl leading-tight">
              Uncover Histories They Didn't Teach You
            </h1>
            
            <div className="space-y-3 md:space-y-4 mb-5 md:mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-poppins">
                Question. Learn. Evolve. <br />Experience History Like Never Before
              </p>
              
              <div className="max-w-xl">
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                  Know[ledge] is a revolutionary platform that reveals overlooked histories of race, gender, 
                  sexual orientation, and ethnicity through immersive storytelling and interactive learning.
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 text-gray-600 text-sm sm:text-base">
                    <span className="text-green-500 text-lg sm:text-xl mt-0.5">✅</span>
                    <span>Bite-sized stories that challenge the status quo</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm sm:text-base">
                    <span className="text-green-500 text-lg sm:text-xl mt-0.5">✅</span>
                    <span>Gamified quizzes & interactive timelines</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-600 text-sm sm:text-base">
                    <span className="text-green-500 text-lg sm:text-xl mt-0.5">✅</span>
                    <span>Personalized learning paths powered by AI</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Buttons container with better mobile layout */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <a href="https://play.google.com/store/apps/details?id=com.knowhistory_knowledge.app" target="_blank" rel="noopener noreferrer">
              <button className="px-5 sm:px-5 py-3 sm:py-4 bg-blue-500 hover:bg-blue-900 text-white rounded-full font-semibold transition-colors flex items-center justify-center gap-2 font-poppins text-sm sm:text-base w-full sm:w-auto">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.523 15.341l1.853-3.209c.107-.186.045-.424-.141-.531-.186-.107-.424-.045-.531.141l-1.877 3.25c-1.454-.84-3.082-1.316-4.827-1.316-1.745 0-3.373.476-4.827 1.316l-1.877-3.25c-.107-.186-.345-.248-.531-.141-.186.107-.248.345-.141.531l1.853 3.209C3.511 17.145 1.5 20.099 1.5 23.5h21c0-3.401-2.011-6.355-4.977-8.159zM7 17.75c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zM15.021 3.766l1.678-2.908c.107-.186.045-.424-.141-.531-.186-.107-.424-.045-.531.141l-1.695 2.937c-1.328-.538-2.801-.841-4.332-.841-1.531 0-3.004.303-4.332.841L3.973.468c-.107-.186-.345-.248-.531-.141-.186.107-.248.345-.141.531l1.678 2.908C2.012 5.129 0 7.997 0 11.278h20c0-3.281-2.012-6.149-4.979-7.512zm-9.021 4.512c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm8 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
              </svg>
                Download for Android
              </button>
              </a>
              <motion.button
                onClick={handleJoinWaitlist}
                className={`px-6 sm:px-8 py-3 sm:py-4 ${
                  state.isJoined 
                    ? 'bg-[#9ACD32] hover:bg-[#8ab82d]'
                    : 'bg-[#9ACD32] hover:bg-[#8ab82d]'
                } text-white rounded-full font-semibold transition-colors flex items-center justify-center gap-2 font-poppins text-base relative`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {state.isJoined ? (
                  <>
                    <motion.svg
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      viewBox="0 0 24 24"
                      initial="unchecked"
                      animate="checked"
                    >
                      <motion.path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 6L9 17l-5-5"
                        variants={animations.tickVariants}
                      />
                    </motion.svg>
                    Joined Successfully
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Join Waitlist
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Right side - iPhone mockup with optimized mobile view */}
          <div className="relative flex items-center justify-center md:justify-center h-[450px] sm:h-[500px] md:h-auto pl-0 md:pl-8 mt-4 sm:mt-6 md:mt-0">
            {/* Background circle for iPhone - Simplified animation on mobile */}
            <div className="absolute top-1/2 right-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] translate-x-1/2 -translate-y-1/2">
              <motion.div 
                className="w-full h-full bg-gradient-to-br from-blue-200/30 via-blue-300/40 to-blue-400/30 rounded-full blur-2xl"
                animate={{ 
                  scale: isMobile ? [1, 1.02, 1] : [1, 1.05, 1],
                  opacity: [0.4, 0.5, 0.4] 
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </div>

            {/* iPhone Container */}
            <motion.div 
              className="relative w-[260px] sm:w-[280px] md:w-[320px] h-[550px] sm:h-[600px] md:h-[700px] z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {/* Center iPhone */}
              <div className="relative w-full h-full">
                <IPhone 
                  className="w-full h-full"
                  scale={1}
                  rotate={0}
                  opacity={1}
                  zIndex={2}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Optimized Modal */}
      <AnimatePresence mode="wait">
        {state.showWaitlistForm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isMobile && handleCloseModal()}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            
            <div className="fixed inset-0 flex items-center justify-center z-[70] px-4" onClick={(e) => e.stopPropagation()}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: isMobile ? "100%" : 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.95, 
                  y: isMobile ? "100%" : 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut"
                }}
                className={`relative w-full ${isMobile ? 'max-w-full m-4' : 'max-w-lg'}`}
              >
                {/* Close button */}
                <button
                  onClick={handleCloseModal}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Waitlist Form */}
                <div className="modal-content">
                  <JoinWaitlist onSuccess={handleWaitlistSuccess} />
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default memo(HeroSection)
