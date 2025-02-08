"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const Pills = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Add new transform values for 3D effect
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.1])
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, 0])
  const y = useTransform(scrollYProgress, [0, 1], [20, -20])

  // Add back the progress transforms for pills
  const progress1 = useTransform(scrollYProgress, [0, 0.33], ["0%", "0%"])
  const progress2 = useTransform(scrollYProgress, [0.15, 0.33], ["100%", "0%"])
  const progress3 = useTransform(scrollYProgress, [0.5, 0.8], ["100%", "0%"])

  const pills = [
    {
      title: "Discover Hidden Stories",
      subtitle: "Uncover the Past",
      description: "Dive into a world of untold narratives and forgotten tales. Our platform brings history to life through immersive storytelling and interactive experiences.",
      image: "/images/hero/mona.jpg",
      color: "from-stone-100 to-white",
      accent: "green-700",
      buttonText: "Start Exploring",
      leftText: "Immerse yourself in a journey through time with our interactive storytelling platform.",
      rightText: "Each story is carefully curated to provide authentic historical insights and engaging narratives.",
    },
    {
      title: "Interactive Learning",
      subtitle: "Learn by Doing",
      description: "Experience history hands-on with our interactive features. From virtual tours to augmented reality experiences, make learning history an adventure.",
      image: "/images/2.jpg",
      color: "from-white to-stone-100",
      accent: "green-700",
      buttonText: "Try Interactive Features",
      leftText: "Transform your learning experience with hands-on historical exploration and discovery.",
      rightText: "Engage with history through cutting-edge interactive features and virtual experiences.",
    },
    {
      title: "Connect with History",
      subtitle: "Bridge Past and Present",
      description: "Join a community of history enthusiasts. Share discoveries, participate in discussions, and contribute to the collective understanding of our shared past.",
      image: "/images/hero/white.jpg",
      color: "from-stone-100 to-white",
      accent: "green-700",
      buttonText: "Join Community",
      leftText: "Be part of a vibrant community dedicated to preserving and sharing historical knowledge.",
      rightText: "Connect with fellow history enthusiasts and contribute to our collective understanding.",
    }
  ]

  // Adjust text transitions to match pill transitions
  const textTransitions = {
    // First text section
    text1: {
      y: useTransform(scrollYProgress, [0, 0.33], [0, -50]),
      opacity: useTransform(scrollYProgress, [0, 0.33], [1, 0])
    },
    // Second text section
    text2: {
      y: useTransform(scrollYProgress, [0.15, 0.33, 0.5, 0.8], [50, 0, 0, -50]),
      opacity: useTransform(scrollYProgress, [0.15, 0.33, 0.5, 0.8], [0, 1, 1, 0])
    },
    // Third text section
    text3: {
      y: useTransform(scrollYProgress, [0.5, 0.8], [50, 0]),
      opacity: useTransform(scrollYProgress, [0.5, 0.8], [0, 1])
    }
  }

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-blue-950">
        <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Text Section - Hidden on mobile */}
          <div className="relative h-[600px] items-center hidden md:flex">
            {pills.map((pill, index) => (
              <motion.div
                key={`left-${index}`}
                style={{
                  ...textTransitions[`text${index + 1}`],
                  position: 'absolute',
                  width: '100%',
                }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-green-400 font-poppins">
                    {pill.subtitle}
                  </h3>
                  <div className="h-1 w-20 bg-green-400 rounded-full" />
                </div>
                <p className="text-lg leading-relaxed font-poppins text-white/90">
                  {pill.leftText}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center iPhone Section */}
          <motion.div 
            style={{
              scale,
              rotateX,
              y,
            }}
            className="relative w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] mx-auto"
          >
            {/* Large Ambient Shadow */}
            <div className="absolute -inset-4 bg-black/10 blur-2xl rounded-[3rem] transform -rotate-[4deg]" />
            <div className="absolute -inset-4 bg-black/5 blur-3xl rounded-[3rem] transform rotate-[4deg]" />
            
            {/* iPhone Frame - slightly smaller on mobile */}
            <div className="absolute inset-0 bg-[#1D1D1F] rounded-[2.5rem] sm:rounded-[2.8rem] shadow-[0_0_20px_rgba(0,0,0,0.2),0_0_40px_rgba(0,0,0,0.1)] transform-gpu">
              {/* Side Buttons */}
              <div className="absolute -left-[2px] top-[100px] w-[2px] h-12 bg-[#2A2A2C] rounded-l-lg" /> {/* Volume Up */}
              <div className="absolute -left-[2px] top-[150px] w-[2px] h-12 bg-[#2A2A2C] rounded-l-lg" /> {/* Volume Down */}
              <div className="absolute -right-[2px] top-[120px] w-[2px] h-16 bg-[#2A2A2C] rounded-r-lg" /> {/* Power */}
              
              {/* Inner Frame Highlight - enhanced for 3D look */}
              <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-tr from-[#2A2A2C] via-transparent to-transparent opacity-50" />
              <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-bl from-white/10 via-transparent to-transparent opacity-30" />
            </div>

            {/* Screen Container - adjust padding for mobile */}
            <div className="absolute inset-[4px] bg-white rounded-[2.3rem] sm:rounded-[2.6rem] overflow-hidden shadow-inner">
              {/* Dynamic Island */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-b-[1.2rem] z-10">
                <div className="absolute top-[8px] left-[22px] w-[12px] h-[12px] rounded-full bg-[#1D1D1F]" /> {/* Camera */}
                <div className="absolute top-[10px] right-[22px] w-[8px] h-[8px] rounded-full bg-[#1D1D1F]" /> {/* Sensor */}
              </div>

              {/* Content Container */}
              <div className="relative w-full h-full">
                {/* Pills Content */}
                {pills.map((pill, index) => (
                  <motion.div
                    key={index}
                    style={{
                      y: index === 0 ? progress1 : index === 1 ? progress2 : progress3,
                      position: 'absolute',
                      inset: 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex flex-col h-full"
                  >
                    {/* Full Screen Image with Overlay */}
                    <div className="relative h-full w-full">
                      <Image
                        src={pill.image}
                        alt={pill.title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                      {/* Dark Gradient Overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                      
                      {/* Text Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <h3 className="text-green-400 text-base font-semibold mb-1.5 font-poppins">
                          {pill.subtitle}
                        </h3>
                        <h2 className="text-2xl font-bold mb-3 font-poppins">
                          {pill.title}
                        </h2>
                        <p className="text-sm text-gray-200 mb-4 font-poppins leading-relaxed">
                          {pill.description}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-xl font-semibold transition-colors duration-300 font-poppins text-sm"
                        >
                          {pill.buttonText}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Text Section - Hidden on mobile */}
          <div className="relative h-[600px] items-center hidden md:flex">
            {pills.map((pill, index) => (
              <motion.div
                key={`right-${index}`}
                style={{
                  ...textTransitions[`text${index + 1}`],
                  position: 'absolute',
                  width: '100%',
                }}
                className="space-y-6 text-right"
              >
                <div className="space-y-2 flex flex-col items-end">
                  <h3 className="text-3xl font-bold text-green-400 font-poppins">
                    {pill.title}
                  </h3>
                  <div className="h-1 w-20 bg-green-400 rounded-full" />
                </div>
                <p className="text-lg leading-relaxed font-poppins text-white/90">
                  {pill.rightText}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pills
