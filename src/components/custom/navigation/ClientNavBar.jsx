"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const ClientNavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const isAboutPage = pathname === '/about' || pathname === '/about-us'

  const navItems = [
    { label: 'About', href: '/about-us' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  const textColorClass = isAboutPage ? 'text-white' : 'text-blue-900'
  const accentColorClass = isAboutPage ? 'text-blue-300' : 'text-blue-600'
  const navItemColorClass = isAboutPage
    ? 'text-white/80 hover:text-white hover:bg-white/10'
    : 'text-gray-800 hover:text-blue-600 hover:bg-white/10'
  const hamburgerColorClass = isAboutPage ? 'bg-white' : 'bg-gray-600'
  const downloadButtonClass = isAboutPage 
    ? 'bg-blue-500 hover:bg-blue-600 text-white'
    : 'bg-gray-900 hover:bg-black text-white'

  return (
    <nav className="absolute top-0 left-0 right-0 w-full z-50 bg-transparent pointer-events-auto">
      <div className="absolute inset-0 bg-transparent" />
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
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors font-poppins px-4 py-2 rounded-md ${navItemColorClass}`}
              >
                {item.label}
              </Link>
            ))}
            <button className={`${downloadButtonClass} px-6 py-2 rounded-full text-sm font-semibold transition-colors font-poppins ml-4 shadow-sm`}>
              Download
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-5 h-5 flex flex-col justify-around">
              <span className={`block w-full h-0.5 ${hamburgerColorClass} transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-full h-0.5 ${hamburgerColorClass} transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-0.5 ${hamburgerColorClass} transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-100/10 mt-2 bg-black/10 backdrop-blur-sm rounded-lg">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block px-3 py-2 text-sm rounded-lg transition-colors font-poppins ${navItemColorClass}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className={`w-full mt-2 ${downloadButtonClass} px-4 py-2 rounded-full text-sm font-semibold transition-colors font-poppins shadow-sm`}>
              Download
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ClientNavBar 