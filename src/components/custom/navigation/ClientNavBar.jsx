"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

const ClientNavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  
  const isAboutPage = pathname === '/about' || pathname === '/about-us'

  const handleNavigation = (e, href) => {
    e.preventDefault()
    
    // If it's a hash link and we're not on the home page
    if (href.startsWith('#') && pathname !== '/') {
      // First navigate to home page
      router.push('/')
      // Then scroll to the section after a small delay to ensure page load
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else if (href.startsWith('#')) {
      // If we're already on home page, just scroll
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // For non-hash links, just navigate normally
      router.push(href)
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: 'About', href: '/about-us' },
    // { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    // { label: 'Contact', href: '#contact' },
  ]

  // Updated color classes to match light theme
  const textColorClass = 'text-blue-900'
  const accentColorClass = 'text-blue-600'
  const navItemColorClass = 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
  const hamburgerColorClass = 'bg-gray-600'
  const downloadButtonClass = 'bg-blue-600 hover:bg-blue-700 text-white'

  return (
    <nav className="absolute top-0 left-0 right-0 w-full z-50 bg-transparent pointer-events-auto">
      <div className="absolute inset-0 bg-transparent backdrop-blur-sm" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo with text */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-14 h-6 relative flex items-center">
              <Image
                src="/logo/Logo.svg"
                alt="knowledge logo"
                width={50}
                height={24}
                className="object-contain"
                priority
              />
            </div>
            <span className={`text-xl md:text-2xl font-bold font-poppins tracking-tight ${textColorClass}`}>
              know<span className={accentColorClass}>[ledge]</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className={`text-sm transition-colors font-poppins px-4 py-2 rounded-md ${navItemColorClass}`}
              >
                {item.label}
              </a>
            ))}
            <button className={`${downloadButtonClass} px-6 py-2 rounded-full text-sm font-semibold transition-colors font-poppins ml-4 shadow-sm hover:shadow-md`}>
              Download
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 rounded-full transition-transform ${hamburgerColorClass} ${isMobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`w-full h-0.5 rounded-full transition-opacity ${hamburgerColorClass} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 rounded-full transition-transform ${hamburgerColorClass} ${isMobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className={`block py-2 text-sm font-poppins ${navItemColorClass}`}
              >
                {item.label}
              </a>
            ))}
            <button className={`${downloadButtonClass} w-full px-6 py-2 rounded-full text-sm font-semibold transition-colors font-poppins mt-4`}>
              Download
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ClientNavBar 