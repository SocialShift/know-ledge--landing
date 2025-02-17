"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const [activeTab, setActiveTab] = useState('why-join');

  const whyJoinReasons = [
    {
      title: "Uncover the Histories You Haven't Heard",
      description: "Most history lessons leave out entire communities and perspectives. Know[ledge] brings those stories to life—engaging, interactive, and full of depth.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Learn in a Way That Clicks",
      description: "Forget dry textbooks and endless lectures. Our platform adapts to your curiosity, making history feel like an adventure.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Shape the Future Through the Past",
      description: "History isn't just about what happened—it's about what we do with it. Explore untold stories, challenge old narratives, and connect with a global community that values truth and progress.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const keyFeatures = [
    {
      title: "Personalized Learning Paths",
      description: "AI curates a unique feed based on your interests, preferred formats, and knowledge gaps.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Daily 'On This Day' Discoveries",
      description: "Unlock hidden stories from history with bite-sized insights, interactive discussions, and surprise facts.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Time Trek Gamification",
      description: "Earn rewards, badges, and unlock rare historical content as you explore.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Interactive Timelines",
      description: "Swipe through history's interconnected moments with expert-curated narratives and multimedia content.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: "Myth-Debunking Quizzes",
      description: "Challenge what you think you know with adaptive, AI-driven quizzes that expose common misconceptions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Community & Discussions",
      description: "Engage in thought-provoking conversations and connect with other history enthusiasts.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    }
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-950 to-slate-900 py-6 sm:py-8 md:py-16 min-h-screen font-poppins">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-50 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
        <div className="absolute inset-0 backdrop-blur-[2px] bg-blue-500/5"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mt-6">
            <button
              onClick={() => handleTabChange('why-join')}
              className={`px-6 sm:px-16 py-3 sm:py-5 text-xl sm:text-2xl font-medium rounded-full transition-all duration-300 min-w-[160px] sm:min-w-[200px] ${
                activeTab === 'why-join'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-blue-200 hover:text-white border border-blue-400/30 hover:border-blue-400'
              }`}
            >
              Why Join?
            </button>
            <button
              onClick={() => handleTabChange('features')}
              className={`px-6 sm:px-16 py-3 sm:py-5 text-xl sm:text-2xl font-medium rounded-full transition-all duration-300 min-w-[160px] sm:min-w-[200px] ${
                activeTab === 'features'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-blue-200 hover:text-white border border-blue-400/30 hover:border-blue-400'
              }`}
            >
              Features
            </button>
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'why-join' ? (
            <div className="space-y-16 sm:space-y-28">
              {whyJoinReasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row items-start' : 'sm:flex-row-reverse items-end'} sm:items-center gap-4 sm:gap-10`}>
                    <div className="text-blue-400 w-16 sm:w-20 h-16 sm:h-20 mx-auto sm:mx-0 flex items-center justify-center">
                      {reason.icon}
                    </div>
                    <div className={`text-center sm:text-left ${index % 2 === 1 ? 'sm:text-right' : ''}`}>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-blue-100/80 max-w-2xl leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-16 sm:space-y-28">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                >
                  <div className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row items-start' : 'sm:flex-row-reverse items-end'} sm:items-center gap-4 sm:gap-10`}>
                    <div className="text-blue-400 w-16 sm:w-20 h-16 sm:h-20 mx-auto sm:mx-0 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div className={`text-center sm:text-left ${index % 2 === 1 ? 'sm:text-right' : ''}`}>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-blue-100/80 max-w-2xl leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
