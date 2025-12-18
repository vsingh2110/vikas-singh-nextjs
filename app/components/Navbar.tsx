'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isBlogPage = pathname?.startsWith('/blog')
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  const menuItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Achievements', href: '/#achievements' },
    { name: 'Research', href: '/#nonprofit' },
    { name: 'Activism', href: '/#social-activities' },
    { name: 'Contact', href: '/#contact' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isBlogPage || isScrolled
          ? 'bg-brand-crimson py-4'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
            <Link
              href="/"
              className="text-white text-3xl lg:text-3xl xl:text-5xl font-semibold font-heading flex flex-col"
            >
              <span>Portfo<span className={`transition-colors duration-300 ${isBlogPage || isScrolled ? 'text-white' : 'text-brand-crimson'}`}>lio.</span></span>
              <span className="text-xs lg:text-xs xl:text-base text-right mt-[-4px]">Vikas Singh</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <ul className="flex space-x-1 xl:space-x-2 2xl:space-x-3">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-white text-sm lg:text-[15px] xl:text-xl 2xl:text-2xl font-medium transition-colors duration-300 ${
                      isBlogPage || isScrolled
                        ? 'hover:text-white/90'
                        : 'hover:text-brand-crimson'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              className="text-white text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Container */}
            <div 
              ref={mobileMenuRef}
              className="lg:hidden fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-gray-800 shadow-2xl z-50 transform transition-transform duration-300"
            >
              {/* Close Button - Styled as Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4 bg-brand-crimson hover:bg-red-700 text-white p-2 rounded-lg shadow-lg transition-colors duration-200"
                aria-label="Close menu"
              >
                <i className="fas fa-times text-xl"></i>
              </button>

              {/* Menu Items */}
              <ul className="mt-16 px-4 space-y-1">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="block text-gray-800 dark:text-gray-200 text-lg font-medium py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-brand-crimson transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
