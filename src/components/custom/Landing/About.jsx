"use client"
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-b from-slate-900 to-blue-950"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[url('/vintage.svg')] bg-repeat opacity-5" />
        <div className="absolute top-0 left-0 w-1/3 h-96 bg-blue-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-1/3 h-96 bg-blue-300/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Main content */}
        <div className="max-w-7xl mx-auto">
          {/* Animated line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mb-8"
          />

          {/* Title with gradient text */}
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-12 font-poppins max-w-4xl"
          >
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Redefining Historical
            </span>
            <br />
            <span className="text-blue-400">
              Discovery & Learning
            </span>
          </motion.h2>

          {/* Content columns with staggered animation */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-blue-100/80 leading-relaxed mb-6 font-poppins text-lg">
                At <span className="text-blue-400 font-semibold">know[ledge]</span>, we believe that history is more than just dates and facts—it's a living, breathing narrative that connects us all. Our platform transforms how you interact with historical content, making learning an immersive and engaging experience.
              </p>
              <p className="text-blue-100/80 leading-relaxed font-poppins text-lg">
                Through cutting-edge technology and thoughtful design, we've created a space where curiosity meets innovation, where every scroll brings you closer to understanding our shared past.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Decorative quote */}
              <div className="relative pl-6 border-l-2 border-blue-500">
                <p className="text-xl md:text-2xl text-blue-200 font-light italic mb-4 font-poppins">
                  "History is not just about the past. It's about understanding who we are and where we're going."
                </p>
                <div>
                  <p className="text-white font-semibold font-poppins">Dr. Sarah Mitchell</p>
                  <p className="text-blue-300 text-sm font-poppins">Chief Historian</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom highlight section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 pt-16 border-t border-blue-800/50"
          >
            <div className="grid md:grid-cols-3 gap-8">
              {['Interactive Learning', 'Global Community', 'Expert Curation'].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-blue-400 font-semibold mb-2 font-poppins">{item}</div>
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
