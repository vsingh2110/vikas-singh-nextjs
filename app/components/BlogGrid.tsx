'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  author: string
  readTime: string
  image: string
}

interface BlogGridProps {
  posts: BlogPost[]
  lang: 'en' | 'hi'
}

export default function BlogGrid({ posts: allPosts, lang }: BlogGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(allPosts.map(post => post.category)))]
  
  // Filter posts by category
  const posts = useMemo(() => {
    if (selectedCategory === 'All') return allPosts
    return allPosts.filter(post => post.category === selectedCategory)
  }, [allPosts, selectedCategory])

  const content = {
    en: {
      readMore: 'Read Article',
      allCategories: 'All',
    },
    hi: {
      readMore: 'लेख पढ़ें',
      allCategories: 'सभी',
    },
  }

  const text = content[lang]

  // Format date with time in IST
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata',
      hour12: true
    }
    return date.toLocaleString(lang === 'en' ? 'en-IN' : 'hi-IN', options)
  }

  return (
    <>
      {/* Category Filter Tabs */}
      <div className="mb-6 sm:mb-8 flex justify-center">
        <div className="inline-flex flex-wrap gap-2 sm:gap-3 bg-gray-100 p-2 rounded-lg shadow-sm">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm md:text-base font-medium transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-brand-crimson text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow'
                }
              `}
            >
              {category === 'All' ? text.allCategories : category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${lang}/${post.slug}`}
            className="group"
          >
            <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
              {/* Square Image */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute top-2 left-2 bg-brand-crimson text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-full shadow-lg">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 flex-1 flex flex-col">
                {/* Date and Read Time */}
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500 mb-2">
                  <time dateTime={post.date} className="flex items-center gap-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="line-clamp-1">{formatDateTime(post.date)}</span>
                  </time>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>

                {/* Title - Show full title */}
                <h2 className="text-sm sm:text-base md:text-lg font-bold mb-2 group-hover:text-brand-crimson transition-colors font-heading line-clamp-2">
                  {post.title}
                </h2>

                {/* Author */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-2">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="line-clamp-1">{post.author}</span>
                </div>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-gray-600 mb-3 flex-1 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <div className="inline-flex items-center gap-1.5 text-brand-crimson font-semibold text-xs sm:text-sm hover:gap-2 transition-all duration-300 self-start group/btn">
                  {text.readMore}
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  )
}
