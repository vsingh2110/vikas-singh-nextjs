import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vikassingh.vercel.app'

  // Get all blog posts for both languages
  const englishPosts = getAllPosts('en')
  const hindiPosts = getAllPosts('hi')

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/en`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/hi`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ]

  // English blog post pages
  const englishBlogPages: MetadataRoute.Sitemap = englishPosts.map((post) => ({
    url: `${baseUrl}/blog/en/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Hindi blog post pages
  const hindiBlogPages: MetadataRoute.Sitemap = hindiPosts.map((post) => ({
    url: `${baseUrl}/blog/hi/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Combine all pages
  return [...staticPages, ...englishBlogPages, ...hindiBlogPages]
}
