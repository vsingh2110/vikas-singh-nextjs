import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const BASE_URL = 'https://vikassingh.vercel.app'

function safeDate(dateString: string): Date {
  const parsedDate = new Date(dateString)
  return Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Get all blog posts for both languages
  const englishPosts = getAllPosts('en')
  const hindiPosts = getAllPosts('hi')
  const allPosts = [...englishPosts, ...hindiPosts]

  const latestPostDate =
    allPosts.length > 0
      ? allPosts
          .map((post) => safeDate(post.date))
          .sort((a, b) => b.getTime() - a.getTime())[0]
      : new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog/en`,
      lastModified: latestPostDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog/hi`,
      lastModified: latestPostDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // English blog post pages
  const englishBlogPages: MetadataRoute.Sitemap = englishPosts.map((post) => ({
    url: `${BASE_URL}/blog/en/${post.slug}`,
    lastModified: safeDate(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Hindi blog post pages
  const hindiBlogPages: MetadataRoute.Sitemap = hindiPosts.map((post) => ({
    url: `${BASE_URL}/blog/hi/${post.slug}`,
    lastModified: safeDate(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Combine and deduplicate pages by URL.
  return [...staticPages, ...englishBlogPages, ...hindiBlogPages].filter(
    (page, index, pages) => pages.findIndex((p) => p.url === page.url) === index
  )
}
