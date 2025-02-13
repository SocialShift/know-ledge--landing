"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef, useMemo, memo } from 'react'

const Pills = () => {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Move all useTransform calls to the top level
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.1])
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, 0])
  const y = useTransform(scrollYProgress, [0, 1], [20, -20])
  
  // Progress transforms
  const progress1 = useTransform(scrollYProgress, [0, 0.33], ["0%", "0%"])
  const progress2 = useTransform(scrollYProgress, [0.15, 0.33], ["100%", "0%"])
  const progress3 = useTransform(scrollYProgress, [0.5, 0.8], ["100%", "0%"])

  // Text transitions
  const text1Y = useTransform(scrollYProgress, [0, 0.33], [0, -50])
  const text1Opacity = useTransform(scrollYProgress, [0, 0.33], [1, 0])
  
  const text2Y = useTransform(scrollYProgress, [0.15, 0.33, 0.5, 0.8], [50, 0, 0, -50])
  const text2Opacity = useTransform(scrollYProgress, [0.15, 0.33, 0.5, 0.8], [0, 1, 1, 0])
  
  const text3Y = useTransform(scrollYProgress, [0.5, 0.8], [50, 0])
  const text3Opacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1])

  // Memoize the transitions object
  const textTransitions = useMemo(() => ({
    text1: { y: text1Y, opacity: text1Opacity },
    text2: { y: text2Y, opacity: text2Opacity },
    text3: { y: text3Y, opacity: text3Opacity }
  }), [text1Y, text1Opacity, text2Y, text2Opacity, text3Y, text3Opacity])

  // Memoize transform values object
  const transformValues = useMemo(() => ({
    scale,
    rotateX,
    y,
    progress1,
    progress2,
    progress3
  }), [scale, rotateX, y, progress1, progress2, progress3])

  // Memoize pills data to prevent unnecessary rerenders
  const pills = useMemo(() => [
    {
      title: "For Those Who Want a Fuller Story",
      subtitle: "Built for Curious Minds",
      description: "If you've ever felt like history was incomplete, you're not alone. We bring in the voices and perspectives that traditional narratives often leave out.",
      image: "/images/hero/pill6.png",
      color: "from-stone-100 to-white",
      accent: "green-700",
      buttonText: "Start Exploring",
      leftText: "Discover untold stories and perspectives that challenge traditional historical narratives.",
      rightText: "Every story matters. Every voice counts. Experience history from all angles."
    },
    {
      title: "For Thoughtful Learners Everywhere",
      subtitle: "Deeper Understanding",
      description: "Deepen your understanding of race, gender, culture, and identity through stories that connect the past to today.",
      image: "/images/hero/pill4.png",
      color: "from-white to-stone-100",
      accent: "green-700",
      buttonText: "Join the Journey",
      leftText: "Connect historical events to contemporary issues and understand their lasting impact.",
      rightText: "Explore how past events shape our understanding of race, gender, culture, and identity."
    },
    {
      title: "For Lifelong Explorers",
      subtitle: "Never Stop Learning",
      description: "No matter where you are in your learning journey, there's always more to discover. Expand your knowledge with fresh perspectives every day.",
      image: "/images/hero/pill1.png",
      color: "from-stone-100 to-white",
      accent: "green-700",
      buttonText: "Begin Discovery",
      leftText: "Every day brings new insights and perspectives to expand your understanding.",
      rightText: "Your journey of discovery never ends - there's always more to learn and explore."
    }
  ], [])

  // Optimize iPhone frame rendering with memo
  const IPhoneFrame = memo(() => (
    <>
      {/* Large Ambient Shadow */}
      <div className="absolute -inset-4 bg-black/10 blur-2xl rounded-[3rem] transform -rotate-[4deg]" />
      <div className="absolute -inset-4 bg-black/5 blur-3xl rounded-[3rem] transform rotate-[4deg]" />
      
      {/* iPhone Frame */}
      <div className="absolute inset-0 bg-[#1D1D1F] rounded-[2.5rem] sm:rounded-[2.8rem] shadow-[0_0_20px_rgba(0,0,0,0.2),0_0_40px_rgba(0,0,0,0.1)] transform-gpu">
        {/* Side Buttons */}
        <div className="absolute -left-[2px] top-[100px] w-[2px] h-12 bg-[#2A2A2C] rounded-l-lg" />
        <div className="absolute -left-[2px] top-[150px] w-[2px] h-12 bg-[#2A2A2C] rounded-l-lg" />
        <div className="absolute -right-[2px] top-[120px] w-[2px] h-16 bg-[#2A2A2C] rounded-r-lg" />
        
        {/* Inner Frame Highlight */}
        <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-tr from-[#2A2A2C] via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-bl from-white/10 via-transparent to-transparent opacity-30" />
      </div>
    </>
  ))

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-gradient-to-b from-slate-900 to-blue-950">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-blue-950">
        <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Text Section */}
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
              scale: transformValues.scale,
              rotateX: transformValues.rotateX,
              y: transformValues.y,
            }}
            className="relative w-[280px] sm:w-[300px] h-[560px] sm:h-[600px] mx-auto"
          >
            <IPhoneFrame />

            {/* Screen Container */}
            <div className="absolute inset-[4px] bg-white rounded-[2.3rem] sm:rounded-[2.6rem] overflow-hidden shadow-inner">
              {/* Dynamic Island */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[25px] bg-black rounded-b-[1.2rem] z-10">
                <div className="absolute top-[8px] left-[22px] w-[12px] h-[12px] rounded-full bg-[#1D1D1F]" /> {/* Camera */}
                <div className="absolute top-[10px] right-[22px] w-[8px] h-[8px] rounded-full bg-[#1D1D1F]" /> {/* Sensor */}
              </div>

              {/* Content Container */}
              <div className="relative w-full h-full">
                {pills.map((pill, index) => (
                  <motion.div
                    key={index}
                    style={{
                      y: index === 0 ? transformValues.progress1 : index === 1 ? transformValues.progress2 : transformValues.progress3,
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
                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
                      
                      {/* Button at the bottom */}
                      <div className="absolute bottom-6 left-0 right-0 px-6">
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

          {/* Right Text Section */}
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

// Add display name for better debugging
Pills.displayName = 'Pills'

export default memo(Pills) // Memoize the entire component
