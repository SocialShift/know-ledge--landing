import dynamic from 'next/dynamic'
import HeroSection from '@/components/custom/Landing/HeroSection'
import About from '@/components/custom/Landing/About'
import Promo from '@/components/custom/Landing/Promo'
import Pills from '@/components/custom/Landing/Pills'
import Faq from '@/components/custom/Landing/Faq'
import ScrollToTop from '@/components/custom/common/ScrollToTop'

// Preload Features component
const Features = dynamic(() => import('@/components/custom/Landing/Features'), {
  ssr: true,
  loading: () => (
    <div className="relative bg-gradient-to-b from-blue-950 to-slate-900 py-16 overflow-hidden min-h-[90vh] -mt-32" />
  )
})

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Features priority />
      <Pills />
      {/* <Promo />
      <About /> */}
      <Faq />
      <ScrollToTop />
      {/* <Testimonials /> */}
    </main>
  )
}
