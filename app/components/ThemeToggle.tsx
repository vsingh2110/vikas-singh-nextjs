'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage and system preference
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  // Avoid hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5">
        <div className="w-16 h-8" />
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1.5 bg-white/20 dark:bg-gray-800/50 rounded-lg p-0.5 backdrop-blur-sm">
      {/* Light Mode Button */}
      <button
        onClick={() => isDark && toggleTheme()}
        className={`flex items-center gap-1 px-2 py-1.5 rounded-md transition-all text-xs font-medium ${
          !isDark 
            ? 'bg-white text-brand-crimson shadow-sm' 
            : 'text-white/70 hover:text-white'
        }`}
        aria-label="Light mode"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
        <span className="hidden sm:inline">Light</span>
      </button>

      {/* Dark Mode Button */}
      <button
        onClick={() => !isDark && toggleTheme()}
        className={`flex items-center gap-1 px-2 py-1.5 rounded-md transition-all text-xs font-medium ${
          isDark 
            ? 'bg-gray-800 text-white shadow-sm' 
            : 'text-white/70 hover:text-white'
        }`}
        aria-label="Dark mode"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        <span className="hidden sm:inline">Dark</span>
      </button>
    </div>
  )
}
