"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(0);
  const controls = useAnimation();
  
  // Initialize animation as soon as component mounts
  useEffect(() => {
    controls.start({ y: 0, opacity: 1 });
  }, [controls]);

  const features = [
    {
      title: "Exploring Interactive Timelines",
      description: "Immerse yourself in historical moments with our interactive timeline feature. Experience history as it happened.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Knowledge Archive",
      description: "Access thousands of historical records, documents, and artifacts with our comprehensive database.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: "Community & Social Learning",
      description: "Connect with history enthusiasts worldwide and share discoveries through our collaborative platform.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    }
  ];

  return (
    <motion.section 
      initial={{ y: 20, opacity: 0 }}
      animate={controls}
      viewport={{ 
        once: true,
        amount: 0.1
      }}
      transition={{ 
        duration: 0.5,
        ease: "easeOut"
      }}
      className="relative bg-gradient-to-b from-blue-950 to-slate-900 py-16 md:py-32 overflow-hidden min-h-[90vh] -mt-16 md:-mt-32 font-poppins"
    >
      {/* Preload the background with reduced opacity */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-50 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
        <div className="absolute inset-0 backdrop-blur-[2px] bg-blue-500/5"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        {/* Updated heading section */}
        <div className="text-left max-w-3xl mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white sm:text-5xl font-poppins">
            Every feature you need
            <span className="block text-blue-400">to explore history.</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-blue-100/80 font-poppins">
            Built for history enthusiasts who want to explore the past like never before. If other apps are stuck in the present, we bring history to life.
          </p>
        </div>

        {/* Updated grid layout - Changed order classes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-center">
          {/* iPhone container - Now order-1 for both mobile and desktop */}
          <div className="relative flex items-center justify-center h-[400px] md:h-[500px] order-1">
            {/* Enhanced background circle */}
            <div className="absolute top-1/2 right-1/2 w-[280px] md:w-[400px] h-[280px] md:h-[400px] translate-x-1/2 -translate-y-1/2">
              <motion.div 
                className="w-full h-full bg-gradient-to-br from-blue-400/30 via-blue-500/40 to-blue-600/30 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.6, 0.4] 
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </div>

            {/* Phone mockup */}
            <motion.div 
              className="relative w-[200px] md:w-[250px] h-[400px] md:h-[500px] z-10"
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

          {/* Features container - Now order-2 for both mobile and desktop */}
          <div className="h-auto lg:h-[500px] flex flex-col justify-between gap-4 lg:gap-0 py-2 order-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`cursor-pointer group relative rounded-2xl px-4 md:px-6 py-4 md:py-5 transition-all duration-300 min-h-[120px] md:h-[145px] flex items-center ${
                  selectedFeature === index
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/30'
                    : 'hover:bg-white/10 bg-white/5 hover:shadow-lg hover:shadow-blue-500/10'
                }`}
                onClick={() => setSelectedFeature(index)}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className={`rounded-lg p-2 md:p-3 ${
                    selectedFeature === index ? 'bg-blue-400 text-white' : 'bg-blue-900/50 text-blue-400'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2 font-poppins">
                      {feature.title}
                    </h3>
                    <p className={`text-sm leading-relaxed font-poppins ${
                      selectedFeature === index ? 'text-blue-50' : 'text-blue-200/70'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Add preload hint for the component
Features.preload = () => {
  return {
    kind: 'preload',
    as: 'component',
  };
};

export default Features;
