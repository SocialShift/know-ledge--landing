"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import JoinWaitlist from '@/components/custom/forms/JoinWaitlist'

const AboutUs = () => {
  const [showWaitlistForm, setShowWaitlistForm] = useState(false)
  const [isJoined, setIsJoined] = useState(false)

  const handleWaitlistSuccess = () => {
    setShowWaitlistForm(false)
    setIsJoined(true)
  }

  const handleShowWaitlist = () => {
    setShowWaitlistForm(true)
    // Smooth scroll to the form
    setTimeout(() => {
      const formElement = document.getElementById('waitlist-form')
      if (formElement) {
        formElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        })
      }
    }, 100)
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    {
      number: "3,362",
      description: "Books banned in U.S. schools in 2023—many featuring race, gender, and LGBTQ+ themes.",
      source: "PEN America, 2023"
    },
    {
      number: "<10%",
      description: "Of U.S. history textbooks cover Black, Indigenous, Latinx, and Asian American history combined.",
      source: "Teaching Hard History Report, SPLC, 2018"
    },
    {
      number: "18",
      description: "States have restricted discussions on race and gender, limiting access to critical narratives.",
      source: "Education Week, 2023"
    }
  ];

  return (
    <div className="bg-slate-50 font-poppins">
      {/* About Us Section - Full height */}
      <section className="min-h-screen flex flex-col justify-center pt-32 sm:pt-36 md:pt-40 pb-20">
        <motion.div 
          {...fadeIn}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12 sm:mb-16">
              <span className="text-base sm:text-lg font-semibold text-blue-600 mb-3 sm:mb-4 block font-poppins tracking-wide">
                Our Mission
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-8 sm:mb-12 font-poppins leading-tight">
                History Reclaimed
              </h2>
            </div>
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed font-poppins max-w-3xl mx-auto">
              <p>
                The stories of women, people of color, LGBTQ+ pioneers, and changemakers have too often been erased, distorted, or reduced to footnotes.
              </p>
              <p>
                At Know[ledge], we're rewriting the way history is told.
              </p>
              <p>
                Using AI-powered storytelling, gamification, and interactive experiences, we bring untold narratives to life—because understanding the full picture of history is the first step toward a more informed and just world.
              </p>
            </div>
            
            {/* Add CTA section */}
            <div className="mt-16 sm:mt-20">
              <div className="flex flex-col items-center space-y-6">
                <motion.button
                  onClick={handleShowWaitlist}
                  className={`px-8 py-4 ${
                    isJoined 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 font-poppins text-lg shadow-lg shadow-blue-500/20 hover:scale-105`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isJoined ? (
                    <>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Joined Successfully
                    </>
                  ) : (
                    <>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Join the Movement
                    </>
                  )}
                </motion.button>
                
                {/* Waitlist Form */}
                {showWaitlistForm && (
                  <motion.div
                    id="waitlist-form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="w-full max-w-md mt-6"
                  >
                    <JoinWaitlist onSuccess={handleWaitlistSuccess} />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Now Section */}
      <section className="min-h-screen py-20 bg-white">
        <motion.div 
          {...fadeIn}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              {/* <span className="text-lg font-semibold text-blue-600 mb-4 block font-poppins">
                The Time is Now
              </span> */}
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 font-poppins">
                Why Now?
              </h2>
            </div>

            {/* Threat Alert */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl">📢</span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-poppins">
                  Diverse, unfiltered history is under threat.
                </h3>
              </div>
              <div className="space-y-8 pl-4 md:pl-8">
                {stats.map((stat, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4 md:pl-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2 font-poppins">
                      {stat.number}
                    </div>
                    <p className="text-lg text-slate-700 mb-1 font-poppins">
                      {stat.description}
                    </p>
                    <p className="text-sm text-slate-500 font-poppins">
                      Source: {stat.source}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Public Demand */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl">📚</span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-poppins">
                  Public demand for inclusive education is rising.
                </h3>
              </div>
              <div className="pl-4 md:pl-8 space-y-6">
                <div className="border-l-4 border-blue-600 pl-4 md:pl-6">
                  <p className="text-lg text-slate-700 mb-2 font-poppins">
                    After 2020, public awareness of racial and social justice issues surged—mentions of race as a top national issue jumped from 5% to 19% in June 2020.
                  </p>
                  <p className="text-sm text-slate-500 font-poppins">
                    Source: Gallup, 2020
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4 md:pl-6">
                  <p className="text-lg text-slate-700 mb-2 font-poppins">
                    84.9% of learners want to expand their knowledge of race, gender, sexual orientation, and ethnicity—but most platforms fail to deliver.
                  </p>
                  <p className="text-sm text-slate-500 font-poppins">
                    Source: Early Adopter Survey, 2023
                  </p>
                </div>
              </div>
            </div>

            {/* Current Platforms */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl">⚡</span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-poppins">
                  Yet, existing learning platforms aren't engaging enough.
                </h3>
              </div>
              <div className="pl-4 md:pl-8">
                <div className="border-l-4 border-blue-600 pl-4 md:pl-6">
                  <p className="text-lg text-slate-700 font-poppins">
                    Educational apps average a 1.8-star satisfaction rating, signaling a gap in engaging, high-quality content.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pl-4 md:pl-8">
              <div className="border-l-4 border-blue-600 pl-4 md:pl-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl">🚀</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-poppins">
                    We're here to change that.
                  </h3>
                </div>
                <p className="text-xl text-slate-700 leading-relaxed font-poppins">
                  Know[ledge] isn't just another learning app. It's a movement—one that transforms hidden histories into immersive, interactive experiences, free from censorship.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
