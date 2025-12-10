import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Navbar from '@/app/components/Navbar'
import LanguageSwitcher from '@/app/components/LanguageSwitcher'
import SocialLinks from '@/app/components/SocialLinks'
import Footer from '@/app/components/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import { getAllPosts } from '@/lib/blog'

interface PageProps {
  params: {
    lang: 'en' | 'hi'
  }
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'hi' }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = params
  
  const metadata = {
    en: {
      title: 'Blog | Vikas Singh',
      description: 'Read articles about web development, digital marketing, psychology, and technology by Vikas Singh',
    },
    hi: {
      title: 'ब्लॉग | विकास सिंह',
      description: 'विकास सिंह द्वारा वेब डेवलपमेंट, डिजिटल मार्केटिंग, मनोविज्ञान और प्रौद्योगिकी के बारे में लेख पढ़ें',
    },
  }

  return {
    title: metadata[lang].title,
    description: metadata[lang].description,
    alternates: {
      canonical: `/blog/${lang}`,
      languages: {
        'en': '/blog/en',
        'hi': '/blog/hi',
      },
    },
    openGraph: {
      title: metadata[lang].title,
      description: metadata[lang].description,
      url: `/blog/${lang}`,
      siteName: 'Vikas Singh',
      locale: lang === 'en' ? 'en_US' : 'hi_IN',
      type: 'website',
    },
  }
}

export default function BlogListingPage({ params }: PageProps) {
  const { lang } = params

  // Validate language
  if (lang !== 'en' && lang !== 'hi') {
    notFound()
  }

  const posts = getAllPosts(lang)

  const content = {
    en: {
      title: 'Blog',
      subtitle: 'Insights on psychology, technology, digital platforms, and social change',
      readMore: 'Read Article',
      noPostsTitle: 'No posts yet',
      noPostsText: 'Check back soon for new content, or switch to',
      switchTo: 'English',
    },
    hi: {
      title: 'ब्लॉग',
      subtitle: 'मनोविज्ञान, प्रौद्योगिकी, डिजिटल प्लेटफार्मों और सामाजिक परिवर्तन पर अंतर्दृष्टि',
      readMore: 'लेख पढ़ें',
      noPostsTitle: 'अभी तक कोई पोस्ट नहीं',
      noPostsText: 'नई सामग्री के लिए जल्द ही वापस जांचें, या स्विच करें',
      switchTo: 'हिंदी',
    },
  }

  const text = content[lang]

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Language Switcher */}
          <div className="flex flex-col items-center mb-12 md:mb-16">
            <div className="text-center mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4">
                {text.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {text.subtitle}
              </p>
            </div>
            
            {/* Language Switcher */}
            <div className="mt-4">
              <LanguageSwitcher 
                currentLang={lang}
                basePath="/blog"
              />
            </div>
          </div>

          {/* No Posts Message */}
          {posts.length === 0 && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {text.noPostsTitle}
              </h2>
              <p className="text-gray-600 mb-4">
                {text.noPostsText} {lang === 'en' ? 'Hindi' : 'English'}.
              </p>
              <Link
                href={`/blog/${lang === 'en' ? 'hi' : 'en'}`}
                className="inline-block bg-brand-crimson text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-red-dark transition-colors"
              >
                Switch to {text.switchTo}
              </Link>
            </div>
          )}

          {/* Blog Grid */}
          {posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${lang}/${post.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 bg-brand-crimson text-white text-sm font-medium px-3 py-1 rounded-full shadow-lg">
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'hi-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-brand-crimson transition-colors line-clamp-2 font-heading">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-brand-crimson font-semibold group-hover:underline">
                        {text.readMore}
                        <svg
                          className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
          )}
        </div>
      </main>

      <SocialLinks />
      <Footer />
      <ScrollToTop />
    </>
  )
}
