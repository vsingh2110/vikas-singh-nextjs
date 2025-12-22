import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/app/components/Navbar'
import LanguageSwitcher from '@/app/components/LanguageSwitcher'
import SocialLinks from '@/app/components/SocialLinks'
import Footer from '@/app/components/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import BlogGrid from '@/app/components/BlogGrid'
import WebPageSchema from '@/app/components/schemas/WebPageSchema'
import BreadcrumbSchema from '@/app/components/schemas/BreadcrumbSchema'
import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'

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
      title: 'Blog | Vikas Singh - Web Development & Digital Marketing Articles',
      description: 'Read insightful articles about web development, React, Next.js, digital marketing, SEO, Google Ads, psychology, and technology by Vikas Singh. Expert insights on frontend development and digital advertising strategies.',
      keywords: 'Web Development Blog, React Articles, Next.js Tutorials, Digital Marketing Blog, SEO Tips, Frontend Development, JavaScript Blog, Technology Articles, Psychology Insights',
    },
    hi: {
      title: 'ब्लॉग | विकास सिंह - वेब डेवलपमेंट और डिजिटल मार्केटिंग लेख',
      description: 'विकास सिंह द्वारा वेब डेवलपमेंट, React, Next.js, डिजिटल मार्केटिंग, SEO, मनोविज्ञान और प्रौद्योगिकी के बारे में जानकारीपूर्ण लेख पढ़ें। फ्रंटएंड डेवलपमेंट और डिजिटल विज्ञापन रणनीतियों पर विशेषज्ञ अंतर्दृष्टि।',
      keywords: 'वेब डेवलपमेंट ब्लॉग, React लेख, Next.js ट्यूटोरियल, डिजिटल मार्केटिंग, SEO टिप्स, फ्रंटएंड डेवलपमेंट, JavaScript, प्रौद्योगिकी लेख, मनोविज्ञान',
    },
  }

  return {
    title: metadata[lang].title,
    description: metadata[lang].description,
    keywords: metadata[lang].keywords,
    authors: [{ name: 'Vikas Singh', url: 'https://vikassingh.vercel.app' }],
    alternates: {
      canonical: `https://vikassingh.vercel.app/blog/${lang}`,
      languages: {
        'en': 'https://vikassingh.vercel.app/blog/en',
        'hi': 'https://vikassingh.vercel.app/blog/hi',
      },
    },
    openGraph: {
      title: metadata[lang].title,
      description: metadata[lang].description,
      url: `https://vikassingh.vercel.app/blog/${lang}`,
      siteName: 'Vikas Singh Portfolio',
      locale: lang === 'en' ? 'en_US' : 'hi_IN',
      type: 'website',
      images: [
        {
          url: 'https://vikassingh.vercel.app/images/blog-og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Vikas Singh Blog - Web Development & Digital Marketing',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata[lang].title,
      description: metadata[lang].description,
      images: ['https://vikassingh.vercel.app/images/blog-og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
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
      noPostsTitle: 'No posts yet',
      noPostsText: 'Check back soon for new content, or switch to',
      switchTo: 'English',
    },
    hi: {
      title: 'ब्लॉग',
      subtitle: 'मनोविज्ञान, प्रौद्योगिकी, डिजिटल प्लेटफार्मों और सामाजिक परिवर्तन पर अंतर्दृष्टि',
      noPostsTitle: 'अभी तक कोई पोस्ट नहीं',
      noPostsText: 'नई सामग्री के लिए जल्द ही वापस जांचें, या स्विच करें',
      switchTo: 'हिंदी',
    },
  }

  const text = content[lang]

  const pageTitle = lang === 'en' 
    ? 'Blog - Web Development & Digital Marketing' 
    : 'ब्लॉग - वेब डेवलपमेंट और डिजिटल मार्केटिंग'
  
  const pageDescription = lang === 'en'
    ? 'Articles about React, Next.js, Digital Marketing, SEO, and Technology'
    : 'React, Next.js, डिजिटल मार्केटिंग, SEO और प्रौद्योगिकी के बारे में लेख'

  return (
    <>
      <WebPageSchema
        name={pageTitle}
        description={pageDescription}
        url={`https://vikassingh.vercel.app/blog/${lang}`}
        inLanguage={lang}
      />
      <BreadcrumbSchema
        items={[
          {
            position: 1,
            name: 'Home',
            item: 'https://vikassingh.vercel.app',
          },
          {
            position: 2,
            name: lang === 'en' ? 'Blog' : 'ब्लॉग',
            item: `https://vikassingh.vercel.app/blog/${lang}`,
          },
        ]}
      />
      <Navbar />

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-white dark:bg-gray-900 pt-20 sm:pt-28 pb-12 sm:pb-16">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Language Switcher */}
          <div className="flex flex-col items-center mb-8 sm:mb-12">
            <div className="text-center mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold font-heading mb-2 sm:mb-4 text-gray-900 dark:text-white">
                {text.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl lg:max-w-3xl mx-auto px-4">
                {text.subtitle}
              </p>
            </div>
            
            {/* Language Switcher */}
            <div className="mt-2 sm:mt-4">
              <LanguageSwitcher 
                currentLang={lang}
                basePath="/blog"
              />
            </div>
          </div>

          {/* No Posts Message */}
          {posts.length === 0 && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {text.noPostsTitle}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
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

          {/* Blog Grid with Category Filter */}
          {posts.length > 0 && (
            <BlogGrid posts={posts} lang={lang} />
          )}
        </div>
      </main>

      <SocialLinks />
      <Footer />
      <ScrollToTop />
    </>
  )
}
