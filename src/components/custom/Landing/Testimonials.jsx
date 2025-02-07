"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const Testimonials = () => {
  const supporters = [
    { name: 'Mellon Foundation', logo: '/supporters/mellon.svg', width: 180 },
    { name: 'Verizon', logo: '/supporters/verizon.svg', width: 160 },
    { name: 'Open Society Foundations', logo: '/supporters/osf.svg', width: 200 },
    { name: 'Brown Institute', logo: '/supporters/brown.svg', width: 220 },
    { name: 'Forbes Under 30', logo: '/supporters/forbes.svg', width: 140 },
    { name: 'Netflix', logo: '/supporters/netflix.svg', width: 160 },
    { name: 'TED', logo: '/supporters/ted.svg', width: 120 },
    { name: 'Google', logo: '/supporters/google.svg', width: 160 },
    { name: 'Stanford', logo: '/supporters/stanford.svg', width: 140 },
    { name: 'New Museum', logo: '/supporters/newmuseum.svg', width: 180 },
    { name: 'Eyebeam', logo: '/supporters/eyebeam.svg', width: 160 },
    { name: 'MoMA', logo: '/supporters/moma.svg', width: 140 }
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/vintage.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/30 to-transparent" />
      
      {/* Curved line decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-[500px]">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full bg-gradient-to-b from-transparent via-amber-400/50 to-transparent"
        />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-poppins">
            Our Supporters
          </h2>
          <p className="text-lg text-slate-600">
            Backed by world-class organizations committed to preserving and sharing knowledge
          </p>
        </motion.div>

        {/* Supporters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
          {supporters.map((supporter, index) => (
            <motion.div
              key={supporter.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
              className="relative aspect-[3/2] flex items-center justify-center group"
            >
              <div className="absolute inset-0 bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300" />
              <div className="relative w-full h-full p-6 flex items-center justify-center">
                <div className="relative w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={supporter.logo}
                    alt={`${supporter.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative elements */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
