"use client"
import Image from 'next/image'

const Promo = () => {
  const features = [
    {
      title: "Interactive AR Learning",
      description: "Transform any space into a historical exhibit with our augmented reality technology",
      image: "/images/promo/1.jpg",
      blobColor: "bg-blue-200",
      maskPath: "M47.7,-60.6C59.2,-47.9,64.3,-30.1,67.4,-11.8C70.6,6.5,71.8,25.4,63.5,38.7C55.1,52,37.1,59.8,18.2,64.9C-0.7,70.1,-20.6,72.6,-35.8,65.2C-51,57.8,-61.5,40.4,-69.1,21.1C-76.7,1.8,-81.4,-19.4,-73.6,-34.9C-65.8,-50.4,-45.5,-60.2,-27.5,-69C-9.5,-77.7,6.2,-85.4,21.8,-80.8C37.5,-76.2,53,-73.3,47.7,-60.6Z"
    },
    {
      title: "Digital Library",
      description: "Explore a vast collection of historical documents, photos, and multimedia resources",
      image: "/images/promo/2.jpg",
      blobColor: "bg-amber-400",
      maskPath: "M54.3,-67.4C69.2,-55.3,79.4,-37,81.5,-18.1C83.6,0.8,77.6,20.3,67.4,36.5C57.1,52.7,42.6,65.6,25.5,71.9C8.3,78.2,-11.5,77.9,-30.4,72.1C-49.3,66.3,-67.3,55,-76.6,38.3C-85.9,21.6,-86.5,-0.5,-79.7,-19.2C-72.9,-37.9,-58.7,-53.2,-42.7,-65C-26.7,-76.8,-8.9,-85.1,7.4,-83.8C23.7,-82.6,47.4,-71.7,54.3,-67.4Z"
    },
    {
      title: "Education Tools",
      description: "Standards-aligned lesson plans and activities for seamless classroom integration",
      image: "/images/promo/3.jpg",
      blobColor: "bg-red-300",
      maskPath: "M48.3,-57.6C62.9,-46.8,75.2,-31.5,77.9,-14.4C80.6,2.7,73.7,21.5,63.1,37.1C52.5,52.7,38.2,65,21.4,70.8C4.6,76.6,-14.7,75.8,-32.4,69.3C-50.1,62.8,-66.2,50.5,-73.7,33.8C-81.2,17.1,-80,-3.9,-73.1,-22.1C-66.2,-40.3,-53.5,-55.6,-38.5,-66.2C-23.5,-76.8,-6.1,-82.6,9.9,-79.7C25.9,-76.8,50.3,-65.2,48.3,-57.6Z"
    }
  ]

  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-blue-50/50 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 font-poppins">
            Experience History Differently
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-poppins">
            Transform your learning experience with our innovative AR platform. Discover hidden stories, explore primary sources, and engage with history in ways never before possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-[1000px] mx-auto px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-blue-950/80 backdrop-blur-sm rounded-3xl p-4 text-center group hover:scale-105 transition-transform duration-300 w-full max-w-[280px] mx-auto overflow-hidden"
            >
              {/* SVG mask definitions */}
              <svg width="0" height="0" className="hidden">
                <defs>
                  <clipPath id={`mask-${index}`}>
                    <path d={feature.maskPath} />
                  </clipPath>
                </defs>
              </svg>

              {/* Background image with blob shape */}
              <div className="absolute inset-0 -z-10">
                <div className={`absolute inset-0 ${feature.blobColor} blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} 
                     style={{ clipPath: `url(#mask-${index})` }} />
                <div className="absolute inset-0 w-full h-full overflow-hidden"
                     style={{ clipPath: `url(#mask-${index})` }}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover scale-110 group-hover:scale-125 transition-transform duration-300 opacity-60"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 pt-28">
                <h3 className="text-base font-bold text-white mb-1.5 font-poppins drop-shadow-lg shadow-black">
                  {feature.title}
                </h3>
                <p className="text-sm text-blue-100/80 font-poppins drop-shadow-md shadow-black">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#download"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-colors font-poppins group"
            tabIndex={0}
            aria-label="Download know[ledge] app"
          >
            Start Learning Now
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Promo
