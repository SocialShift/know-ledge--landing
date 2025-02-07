"use client"
import Image from 'next/image'

const Promo = () => {
  const features = [
    {
      title: "Interactive AR Learning",
      description: "Transform any space into a historical exhibit with our augmented reality technology",
      image: "/images/promo/1.jpg",
      blobColor: "bg-blue-200"
    },
    {
      title: "Digital Library",
      description: "Explore a vast collection of historical documents, photos, and multimedia resources",
      image: "/images/promo/2.jpg",
      blobColor: "bg-amber-400"
    },
    {
      title: "Education Tools",
      description: "Standards-aligned lesson plans and activities for seamless classroom integration",
      image: "/images/promo/3.jpg",
      blobColor: "bg-red-300"
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
              className="relative bg-blue-950 rounded-3xl p-4 text-center group hover:scale-105 transition-transform duration-300 w-full max-w-[280px] mx-auto"
            >
              {/* Blob-shaped image container */}
              <div className="relative w-28 h-28 mx-auto mb-3">
                <div className={`absolute inset-0 ${feature.blobColor} rounded-blob blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                <div className="relative w-full h-full rounded-blob overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-base font-bold text-white mb-1.5 font-poppins">
                {feature.title}
              </h3>
              <p className="text-sm text-blue-100/80 font-poppins">
                {feature.description}
              </p>
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
