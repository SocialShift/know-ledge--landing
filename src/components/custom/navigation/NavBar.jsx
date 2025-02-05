"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo with text */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-12 h-5 relative flex items-center">
              <Image
                src="/logo/Logo.svg"
                alt="knowledge logo"
                width={45}
                height={20}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg font-bold text-blue-900 font-poppins tracking-tight">
              know<span className="text-blue-600">[ledge]</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-gray-700 hover:text-blue-600 transition-colors font-poppins px-4 py-2 rounded-md hover:bg-blue-50"
              >
                {item.label}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-900 hover:bg-black text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors font-poppins ml-4 shadow-sm"
            >
              Download
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-blue-50"
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
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-100 mt-2">
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
