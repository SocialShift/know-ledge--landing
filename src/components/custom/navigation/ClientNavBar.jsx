"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import JoinWaitlist from '../forms/JoinWaitlist'

const ClientNavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const pathname = usePathname()
  const router = useRouter()
  
  const isAboutPage = pathname === '/about' || pathname === '/about-us'

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrollingUp = prevScrollPos > currentScrollPos
      
      const scrollDifference = Math.abs(prevScrollPos - currentScrollPos)
      if (scrollDifference > 10) {
        setVisible(isScrollingUp)
      }
      
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const handleNavigation = (e, href) => {
    e.preventDefault()
    
    if (href.startsWith('#') && pathname !== '/') {
      router.push('/')
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 500)
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    } else {
      router.push(href)
    }
    
    setIsMobileMenuOpen(false)
  }

  const handleOpenWaitlist = () => {
    setIsWaitlistOpen(true)
    setIsMobileMenuOpen(false) // Close mobile menu if open
  }

  const handleWaitlistSuccess = () => {
    setIsWaitlistOpen(false)
  }

  const navItems = [
    { label: 'About', href: '/about-us' },
    { label: 'FAQ', href: '#faq' },
  ]

  const textColorClass = 'text-blue-900'
  const accentColorClass = 'text-blue-600'
  const navItemColorClass = 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
  const hamburgerColorClass = 'bg-gray-600'
  const downloadButtonClass = 'bg-blue-600 hover:bg-blue-700 text-white'

  return (
    <>
      <nav className={`fixed top-2 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] sm:w-[99%] max-w-[90rem] z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-32'
      }`}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-100/90 via-sky-200/90 to-sky-100/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg shadow-sky-200/20" />
          
          <div className="relative px-3 sm:px-4 md:px-10 lg:px-16">
            <div className="flex items-center justify-between h-14 sm:h-16">
              <Link href="/" className="flex items-center gap-1 sm:gap-2 md:gap-5">
                <div className="w-10 sm:w-14 h-6 relative flex items-center">
                  <Image
                    src="/logo/Logo.svg"
                    alt="knowledge logo"
                    width={50}
                    height={24}
                    className="object-contain"
                    priority
                  />
                </div>
                <span className={`text-lg sm:text-xl md:text-2xl font-bold font-poppins tracking-tight text-blue-900`}>
                  <span className="text-blue-600">Know[ledge]</span>
                </span>
              </Link>

              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className="text-sm transition-colors font-poppins px-6 py-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
                  >
                    {item.label}
                  </a>
                ))}
                <button 
                  onClick={handleOpenWaitlist}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-2 rounded-full text-sm font-semibold transition-colors font-poppins ml-8 shadow-sm hover:shadow-md"
                >
                  Join Waitlist
                </button>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-blue-50/50 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className="block px-4 py-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-poppins text-sm"
                  >
                    {item.label}
                  </a>
                ))}
                <button 
                  onClick={handleOpenWaitlist}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors font-poppins mt-4"
                >
                  Join Waitlist
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Waitlist Modal */}
      <AnimatePresence>
        {isWaitlistOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsWaitlistOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            
            {/* Modal Container - Fixed positioning */}
            <div className="fixed inset-0 flex items-center justify-center z-[70] px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-lg"
              >
                {/* Close button */}
                <button
                  onClick={() => setIsWaitlistOpen(false)}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Waitlist Form */}
                <JoinWaitlist onSuccess={handleWaitlistSuccess} />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default ClientNavBar 