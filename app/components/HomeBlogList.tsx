import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'

export default function HomeBlogList() {
  const hindiPosts = getAllPosts('hi').map((post) => ({ ...post, lang: 'hi' as const }))
  const englishPosts = getAllPosts('en').map((post) => ({ ...post, lang: 'en' as const }))

  const latestPosts = [...hindiPosts, ...englishPosts]
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .slice(0, 8)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 dark:text-white">
            Latest Blog Posts
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Latest posts from both Hindi and English blog sections.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestPosts.map((post) => (
            <Link
              key={`${post.lang}-${post.slug}`}
              href={`/blog/${post.lang}/${post.slug}`}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative w-full h-52 bg-gray-200 dark:bg-gray-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2 gap-3">
                  <p className="text-xs text-brand-crimson font-semibold">{post.category}</p>
                  <span className="text-[10px] font-bold tracking-wide px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                    {post.lang.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white line-clamp-2 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/blog/hi"
            className="inline-block bg-brand-crimson text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-red-dark transition-colors"
          >
            सभी हिंदी ब्लॉग देखें
          </Link>
          <Link
            href="/blog/en"
            className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            View All English Blogs
          </Link>
        </div>
      </div>
    </section>
  )
}
