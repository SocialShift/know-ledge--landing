"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUs = () => {
  const stats = [
    { number: "500K+", label: "Active Users" },
    { number: "50+", label: "Historical Collections" },
    { number: "12", label: "Museum Partners" },
    { number: "4.8", label: "App Store Rating" },
  ];

  const teamMembers = [
    {
      name: "jhon doe",
      role: "Founder & CEO",
      image: "/images/team/jane.jpg",
      description: "Former Harvard Professor with a passion for making history accessible to everyone."
    },
    {
      name: "jane doe",
      role: "Chief Technology Officer",
      image: "/images/team/john.jpg",
      description: "Tech innovator with expertise in AR/VR and educational platforms."
    },
    {
      name: "ak",
      role: "Head of Content",
      image: "/images/team/ak.jpg",
      description: "Curator and digital storyteller specializing in interactive historical narratives."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-50/50 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 font-poppins"
            >
              Revolutionizing Historical Discovery
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 mb-12 font-poppins leading-relaxed"
            >
              know[ledge] is transforming how people interact with history through immersive technology and storytelling. Our mission is to make historical learning engaging, accessible, and meaningful for everyone.
            </motion.p>

            {/* Stats Grid */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 font-poppins">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-poppins">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-poppins">
                Our Mission
              </h2>
              <div className="space-y-6 text-gray-600 font-poppins">
                <p>
                  We believe that history is more than just dates and facts—it's a living narrative that connects us all. Through cutting-edge technology and thoughtful design, we're creating a platform that makes historical discovery an immersive and engaging experience.
                </p>
                <p>
                  Our goal is to bridge the gap between traditional historical learning and modern technology, making it easier than ever for people to connect with the past in meaningful ways.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="relative w-full max-w-md mx-auto"
            >
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-blue-400/10 blur-lg rounded-3xl" />
              
              {/* Main image container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-us.jpg"
                  alt="Historical artifacts and modern technology"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-blue-800/10 to-transparent" />
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-4 border-white/30 rounded-lg" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-4 border-white/30 rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen flex items-center relative py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="h-full"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 font-poppins">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-poppins">
                Passionate experts dedicated to making history accessible and engaging
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-blue-100" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-blue-900 mb-2 font-poppins capitalize">
                      {member.name}
                    </h3>
                    <div className="text-blue-600 mb-4 font-poppins">
                      {member.role}
                    </div>
                    <p className="text-gray-600 font-poppins">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
