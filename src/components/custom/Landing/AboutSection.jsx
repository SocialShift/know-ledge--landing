"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  const features = [
    {
      title: "Interactive Learning",
      description: "Personalized journeys that adapt to your learning style and pace",
      icon: "📚"
    },
    {
      title: "Knowledge Discovery",
      description: "Explore interconnected topics and uncover new areas of interest",
      icon: "🔍"
    },
    {
      title: "Community Insights",
      description: "Learn from shared experiences and collaborative knowledge",
      icon: "👥"
    },
    {
      title: "Visual Learning Maps",
      description: "Navigate complex topics through intuitive visual representations",
      icon: "🗺️"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-poppins" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
           
          <h2 
            className="text-4xl font-bold text-gray-900 mb-4 font-poppins"
          >
            Discover Your Learning Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
            Navigate through interconnected knowledge paths, discover new perspectives, 
            and join a community of lifelong learners in their quest for understanding.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 font-poppins"
            >
              <div className="text-4xl mb-4" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm text-center font-poppins">
            <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-10">
              <Image
                src="/globe.svg"
                alt=""
                fill
                className="object-cover"
                aria-hidden="true"
              />
            </div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join our community of learners and explore the interconnected world of knowledge.
                Every journey begins with a single step.
              </p>
              <button
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 
                          transition-colors duration-300 focus:outline-none focus:ring-2 
                          focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => {}}
                onKeyDown={(e) => e.key === 'Enter' && e.target.click()}
                tabIndex={0}
                aria-label="Get started with your learning journey"
              >
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
