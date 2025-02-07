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

  const pills = [
    {
      title: "Discover Hidden Stories",
      subtitle: "Uncover the Past",
      description: "Dive into a world of untold narratives and forgotten tales. Our platform brings history to life through immersive storytelling and interactive experiences.",
      image: "/images/1.jpg",
      color: "from-stone-100 to-white",
      accent: "green-700",
      buttonText: "Start Exploring",
    },
    {
      title: "Interactive Learning",
      subtitle: "Learn by Doing",
      description: "Experience history hands-on with our interactive features. From virtual tours to augmented reality experiences, make learning history an adventure.",
      image: "/images/2.jpg",
      color: "from-white to-stone-100",
      accent: "green-700",
      buttonText: "Try Interactive Features",
    },
    {
      title: "Connect with History",
      subtitle: "Bridge Past and Present",
      description: "Join a community of history enthusiasts. Share discoveries, participate in discussions, and contribute to the collective understanding of our shared past.",
      image: "/images/3.jpg",
      color: "from-stone-100 to-white",
      accent: "green-700",
      buttonText: "Join Community",
    }
  ]

  // Calculate progress for each pill
  const progress1 = useTransform(scrollYProgress, [0, 0.33], [1, 0])
  const progress2 = useTransform(scrollYProgress, [0.33, 0.67], [0, 1])
  const progress3 = useTransform(scrollYProgress, [0.67, 1], [0, 1])

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-white">
      {/* Fixed iPhone Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-white perspective-[1000px]">
        <motion.div 
          style={{
            scale,
            rotateX,
            y,
          }}
          className="relative w-[300px] h-[600px]"
        >
          {/* Large Ambient Shadow */}
          <div className="absolute -inset-4 bg-black/10 blur-2xl rounded-[3rem] transform -rotate-[4deg]" />
          <div className="absolute -inset-4 bg-black/5 blur-3xl rounded-[3rem] transform rotate-[4deg]" />
          
          {/* iPhone Frame */}
          <div className="absolute inset-0 bg-[#1D1D1F] rounded-[2.8rem] shadow-[0_0_20px_rgba(0,0,0,0.2),0_0_40px_rgba(0,0,0,0.1)] transform-gpu">
            {/* Side Buttons */}
            <div className="absolute -left-[2px] top-[100px] w-[2px] h-12 bg-[#2A2A2C] rounded-l-lg" /> {/* Volume Up */}
            <div className="absolute -left-[2px] top-[150px] w-[2px] h-12 bg-[#2A2A2C] rounded-l-lg" /> {/* Volume Down */}
            <div className="absolute -right-[2px] top-[120px] w-[2px] h-16 bg-[#2A2A2C] rounded-r-lg" /> {/* Power */}
            
            {/* Inner Frame Highlight - enhanced for 3D look */}
            <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-tr from-[#2A2A2C] via-transparent to-transparent opacity-50" />
            <div className="absolute inset-0 rounded-[2.8rem] bg-gradient-to-bl from-white/10 via-transparent to-transparent opacity-30" />
          </div>

          {/* Screen Container with enhanced shadow */}
          <div className="absolute inset-[4px] bg-white rounded-[2.6rem] overflow-hidden shadow-inner">
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
                    opacity: index === 0 ? progress1 : index === 1 ? progress2 : progress3,
                    position: 'absolute',
                    inset: 0,
                  }}
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
      </div>
    </section>
  )
}

export default Pills
