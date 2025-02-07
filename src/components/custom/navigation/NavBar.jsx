"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useNavbar } from '@/context/NavbarContext'

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const { isTransparent } = useNavbar()

  useEffect(() => {
    setHasMounted(true)
    // Set initial scroll state after component mounts
    setIsScrolled(window.scrollY > 50)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!hasMounted) {
    return (
      <nav className="absolute top-0 left-0 right-0 w-full z-50 bg-white/80 backdrop-blur-md">
        {/* Initial loading state */}
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Minimal content for SSR */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-6" />
            </div>
          </div>
        </div>
      </nav>
    )
  }

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav 
      className={`absolute top-0 left-0 right-0 w-full z-50 transition-colors duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/80 backdrop-blur-md'
          : isTransparent ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo with text - Updated text size */}
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
            <span className={`text-xl md:text-2xl font-bold text-blue-900 font-poppins tracking-tight ${
              !isScrolled && !isMobileMenuOpen ? 'text-opacity-90' : ''
            }`}>
              know<span className="text-blue-600">[ledge]</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors font-poppins px-4 py-2 rounded-md ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-gray-800 hover:text-blue-600 hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="bg-gray-900 hover:bg-black text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors font-poppins ml-4 shadow-sm"
            >
              Download
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-5 h-5 flex flex-col justify-around">
              <span className={`block w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-full h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 bg-gray-600 transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-100 mt-2 bg-white/80 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-poppins"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full mt-2 bg-gray-900 hover:bg-black text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors font-poppins shadow-sm">
              Download
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
