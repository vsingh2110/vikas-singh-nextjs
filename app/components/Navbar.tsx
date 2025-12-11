'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isBlogPage = pathname?.startsWith('/blog')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex items-center justify-between">
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
          <ul className="hidden lg:flex space-x-2 xl:space-x-4 2xl:space-x-6">
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4 space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block text-gray-800 text-lg font-medium py-2 hover:text-brand-crimson transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
