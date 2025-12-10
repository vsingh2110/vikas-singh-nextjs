import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navbar from '@/app/components/Navbar'
import LanguageSwitcher from '@/app/components/LanguageSwitcher'
import AuthorBio from '@/app/components/AuthorBio'
import ReadingProgress from '@/app/components/ReadingProgress'
import SocialLinks from '@/app/components/SocialLinks'
import Footer from '@/app/components/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import { getPostBySlug, getAllSlugs } from '@/lib/blog'

interface PageProps {
  params: {
    lang: 'en' | 'hi'
    slug: string
  }
}

export async function generateStaticParams() {
  const enSlugs = getAllSlugs('en').map(slug => ({ lang: 'en' as const, slug }))
  const hiSlugs = getAllSlugs('hi').map(slug => ({ lang: 'hi' as const, slug }))
  return [...enSlugs, ...hiSlugs]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = params
  const post = getPostBySlug(slug, lang)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Vikas Singh`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${lang}/${slug}`,
      languages: post.alternateLanguage && post.alternateSlug ? {
        [post.alternateLanguage]: `/blog/${post.alternateLanguage}/${post.alternateSlug}`,
        [lang]: `/blog/${lang}/${slug}`,
      } : undefined,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${lang}/${slug}`,
      siteName: 'Vikas Singh',
      locale: lang === 'en' ? 'en_US' : 'hi_IN',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

// Custom MDX components with research article styling
const components = {
  h1: (props: any) => (
    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-heading text-gray-900 mb-6 mt-12 first:mt-0" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold font-heading text-gray-900 mb-5 mt-10 border-l-4 border-brand-crimson pl-4" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold font-heading text-gray-800 mb-4 mt-8" {...props} />
  ),
  p: (props: any) => (
    <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed text-gray-700 mb-6" {...props} />
  ),
  a: (props: any) => (
    <a className="text-brand-crimson hover:underline font-medium" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 ml-4" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700 ml-4" {...props} />
  ),
  li: (props: any) => (
    <li className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-brand-crimson bg-gray-50 pl-6 pr-6 py-4 my-8 italic text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-800 rounded-r-lg" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 text-brand-crimson px-2 py-1 rounded text-sm lg:text-base xl:text-lg font-mono" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6 text-sm md:text-base lg:text-lg xl:text-xl" {...props} />
  ),
  img: (props: any) => (
    <img className="rounded-lg my-6" {...props} />
  ),
  figure: (props: any) => (
    <figure className="my-8" {...props} />
  ),
  figcaption: (props: any) => (
    <figcaption className="text-sm lg:text-base xl:text-lg text-gray-600 mt-2 text-center italic" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-bold text-gray-900" {...props} />
  ),
  em: (props: any) => (
    <em className="italic text-gray-800" {...props} />
  ),
  hr: (props: any) => (
    <hr className="my-12 border-t-2 border-gray-200" {...props} />
  ),
}

export default function BlogPostPage({ params }: PageProps) {
  const { lang, slug } = params

  // Validate language
  if (lang !== 'en' && lang !== 'hi') {
    notFound()
  }

  const post = getPostBySlug(slug, lang)

  if (!post) {
    notFound()
  }

  const content = {
    en: {
      backToBlogs: 'Back to all posts',
      share: 'Share this article',
      tags: 'Tags',
      published: 'Published on',
      readTime: 'read',
    },
    hi: {
      backToBlogs: 'सभी पोस्ट पर वापस जाएं',
      share: 'इस लेख को साझा करें',
      tags: 'टैग',
      published: 'प्रकाशित',
      readTime: 'पढ़ने का समय',
    },
  }

  const text = content[lang]

  return (
    <>
      <ReadingProgress />
      <Navbar />
      
      {/* Set HTML lang attribute dynamically */}
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang = "${lang}";` }} />

      <main className="min-h-screen bg-white pt-24 pb-16">
        {/* Back to Blogs Link */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <Link
            href={`/blog/${lang}`}
            className="inline-flex items-center text-brand-crimson hover:underline font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {text.backToBlogs}
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96 lg:h-[85vh] mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-6 left-6 bg-brand-crimson text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg">
            {post.category}
          </div>
        </div>

        {/* Article Container */}
        <article className="max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Header */}
          <header className="mb-10 border-b border-gray-200 pb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold font-heading text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">{post.author}</span>
              </div>
              <span>•</span>
              <time dateTime={post.date}>
                {text.published} {new Date(post.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'hi-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readTime} {text.readTime}</span>
            </div>

            {/* Language Switcher */}
            <div className="mb-6">
              <LanguageSwitcher 
                currentLang={lang}
                alternateLang={post.alternateLanguage}
                alternateSlug={post.alternateSlug}
              />
            </div>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Article Content - Research Paper Style */}
          <div className="prose prose-lg max-w-none blog-content">
            <MDXRemote source={post.content} components={components} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                {text.tags}
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <AuthorBio language={lang} />

          {/* Back to Blogs */}
          <div className="mt-12 text-center">
            <Link
              href={`/blog/${lang}`}
              className="inline-flex items-center gap-2 bg-brand-crimson text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-red-dark transition-colors shadow-md hover:shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {text.backToBlogs}
            </Link>
          </div>
        </article>
      </main>

      <SocialLinks />
      <Footer />
      <ScrollToTop />
    </>
  )
}
