'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface LanguageSwitcherProps {
  currentLang: 'en' | 'hi'
  alternateLang?: 'en' | 'hi'
  alternateSlug?: string
  basePath?: string // For blog listing pages: "/blog"
}

export default function LanguageSwitcher({ 
  currentLang, 
  alternateLang,
  alternateSlug,
  basePath 
}: LanguageSwitcherProps) {
  const pathname = usePathname()

  // Determine the alternate URL
  let alternateUrl = ''
  
  if (basePath) {
    // For blog listing pages: /blog/en <-> /blog/hi
    alternateUrl = currentLang === 'en' ? `${basePath}/hi` : `${basePath}/en`
  } else if (alternateLang && alternateSlug) {
    // For individual posts with alternate version
    alternateUrl = `/blog/${alternateLang}/${alternateSlug}`
  } else {
    // No alternate available - just toggle language in current path
    alternateUrl = currentLang === 'en' 
      ? pathname.replace('/en/', '/hi/')
      : pathname.replace('/hi/', '/en/')
  }

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'hi', label: 'हिंदी', flag: '🇮🇳' }
  ]

  return (
    <div className="flex items-center gap-2 bg-white rounded-full shadow-md p-1 border border-gray-200">
      {languages.map((lang) => {
        const isActive = currentLang === lang.code
        const url = lang.code === currentLang ? '#' : alternateUrl

        return (
          <Link
            key={lang.code}
            href={url}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
              ${isActive 
                ? 'bg-brand-crimson text-white shadow-md' 
                : 'text-gray-700 hover:bg-gray-100'
              }
              ${lang.code !== currentLang && alternateLang && !alternateSlug ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            onClick={(e) => {
              if (isActive || (lang.code !== currentLang && alternateLang && !alternateSlug)) {
                e.preventDefault()
              }
            }}
            aria-label={`Switch to ${lang.label}`}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className="font-medium text-sm">{lang.label}</span>
          </Link>
        )
      })}
    </div>
  )
}
