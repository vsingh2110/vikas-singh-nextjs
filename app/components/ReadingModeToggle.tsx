'use client'

import { useEffect, useState } from 'react'

interface ReadingModeToggleProps {
  language: 'en' | 'hi'
}

export default function ReadingModeToggle({ language }: ReadingModeToggleProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Load saved preference on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('readingMode')
    if (savedMode === 'dark') {
      setIsDarkMode(true)
      // Only add to main/article, not html element
      const main = document.querySelector('main')
      const article = document.querySelector('article')
      if (main) main.classList.add('reading-dark-mode')
      if (article) article.classList.add('reading-dark-mode')
    }
  }, [])

  const toggleMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    
    const main = document.querySelector('main')
    const article = document.querySelector('article')
    
    if (newMode) {
      if (main) main.classList.add('reading-dark-mode')
      if (article) article.classList.add('reading-dark-mode')
      localStorage.setItem('readingMode', 'dark')
    } else {
      if (main) main.classList.remove('reading-dark-mode')
      if (article) article.classList.remove('reading-dark-mode')
      localStorage.setItem('readingMode', 'light')
    }
  }

  const text = {
    en: {
      label: 'Comfort Your Eyes',
      light: 'Light',
      dark: 'Dark'
    },
    hi: {
      label: 'अपनी आँखों को आराम दें',
      light: 'लाइट',
      dark: 'डार्क'
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs sm:text-sm font-medium text-gray-700 hidden md:inline">
        {text[language].label}:
      </span>
      
      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
        {/* Light Mode Button */}
        <button
          onClick={() => !isDarkMode || toggleMode()}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-md transition-all ${
            !isDarkMode 
              ? 'bg-white text-brand-crimson shadow-sm font-semibold' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
          aria-label="Light mode"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
          <span className="text-xs sm:text-sm">{text[language].light}</span>
        </button>

        {/* Dark Mode Button */}
        <button
          onClick={() => isDarkMode || toggleMode()}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-md transition-all ${
            isDarkMode 
              ? 'bg-gray-800 text-white shadow-sm font-semibold' 
              : 'text-gray-600 hover:text-gray-900'
          }`}
          aria-label="Dark mode"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <span className="text-xs sm:text-sm">{text[language].dark}</span>
        </button>
      </div>
    </div>
  )
}
