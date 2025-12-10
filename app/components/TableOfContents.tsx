'use client'

import { useState } from 'react'

interface TableOfContentsProps {
  headings: { id: string; text: string; level: number }[]
  language: 'en' | 'hi'
}

export default function TableOfContents({ headings, language }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false)

  const text = {
    en: 'Table of Contents',
    hi: 'विषय सूची'
  }

  if (headings.length === 0) return null

  return (
    <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm sm:text-base">
          {text[language]}
        </span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <nav className="p-4 bg-white">
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={`${heading.level === 2 ? 'ml-0' : 'ml-4'}`}
              >
                <a
                  href={`#${heading.id}`}
                  className="text-sm text-gray-600 hover:text-brand-crimson transition-colors block py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}
