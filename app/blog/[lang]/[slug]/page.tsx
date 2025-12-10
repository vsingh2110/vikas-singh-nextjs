import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Navbar from '@/app/components/Navbar'
import LanguageSwitcher from '@/app/components/LanguageSwitcher'
import AuthorBio from '@/app/components/AuthorBio'
import ReadingProgress from '@/app/components/ReadingProgress'
import TableOfContents from '@/app/components/TableOfContents'
import SocialShare from '@/app/components/SocialShare'
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

// Custom MDX components with research article styling (REDUCED SIZES)
const components = {
  h1: (props: any) => (
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold font-heading text-gray-900 mb-4 mt-8 first:mt-0" {...props} />
  ),
  h2: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-') || ''
    return <h2 id={id} className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold font-heading text-gray-900 mb-4 mt-6 border-l-4 border-brand-crimson pl-4" {...props} />
  },
  h3: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-') || ''
    return <h3 id={id} className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold font-heading text-gray-800 mb-3 mt-5" {...props} />
  },
  p: (props: any) => (
    <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl leading-relaxed text-gray-700 mb-5" {...props} />
  ),
  a: (props: any) => (
    <a className="text-brand-crimson hover:underline font-medium text-xs sm:text-sm md:text-base" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside space-y-2 mb-5 text-gray-700 ml-4" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside space-y-2 mb-5 text-gray-700 ml-4" {...props} />
  ),
  li: (props: any) => (
    <li className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl leading-relaxed" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-brand-crimson bg-gray-50 pl-4 pr-4 py-3 my-5 italic text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-gray-700 rounded-r-lg" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 text-brand-crimson px-1.5 py-0.5 rounded text-xs sm:text-sm md:text-base font-mono" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-900 text-gray-100 p-3 sm:p-4 rounded-lg overflow-x-auto mb-5 text-xs sm:text-sm md:text-base" {...props} />
  ),
  img: (props: any) => (
    <img className="rounded-lg my-4" {...props} />
  ),
  figure: (props: any) => (
    <figure className="my-5" {...props} />
  ),
  figcaption: (props: any) => (
    <figcaption className="text-xs sm:text-sm md:text-base text-gray-600 mt-2 text-center italic" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-bold text-gray-900" {...props} />
  ),
  em: (props: any) => (
    <em className="italic text-gray-800" {...props} />
  ),
  hr: (props: any) => (
    <hr className="my-8 border-t-2 border-gray-200" {...props} />
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
      readTime: 'min read',
      blog: 'Blog',
    },
    hi: {
      backToBlogs: 'सभी पोस्ट पर वापस जाएं',
      share: 'इस लेख को साझा करें',
      tags: 'टैग',
      published: 'प्रकाशित',
      readTime: 'मिनट पढ़ें',
      blog: 'ब्लॉग',
    },
  }

  const text = content[lang]

  // Format date and time with IST
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata',
      hour12: true
    }
    const formatted = date.toLocaleString(lang === 'en' ? 'en-IN' : 'hi-IN', options)
    return `${formatted} IST (GMT+5:30)`
  }

  // Extract headings from MDX content for TOC
  const headings: { id: string; text: string; level: number }[] = []
  const headingRegex = /^(#{1,3})\s+(.+)$/gm
  let match
  
  while ((match = headingRegex.exec(post.content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const id = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')
    headings.push({ id, text, level })
  }

  // Full URL for sharing
  const fullUrl = `https://vikas-singh-nextjs.vercel.app/blog/${lang}/${params.slug}`

  return (
    <>
      <ReadingProgress />
      <Navbar />
      
      {/* Set HTML lang attribute dynamically */}
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang = "${lang}";` }} />

      <main className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Back to Blogs Button - Left Aligned */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <Link
            href={`/blog/${lang}`}
            className="inline-flex items-center gap-2 bg-brand-crimson text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm shadow-md hover:shadow-lg"
          >
            <svg
              className="w-4 h-4"
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
        <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 mb-6">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Category Badge - Responsive */}
          <div className="absolute top-4 left-4 bg-brand-crimson text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full shadow-lg">
            {post.category}
          </div>
        </div>

        {/* Article Container - Expanded Width with Left Margin */}
        <article className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          {/* Breadcrumb */}
          <div className="text-xs sm:text-sm text-gray-500 mb-3 flex items-center gap-2">
            <span>{text.blog}</span>
            <span>→</span>
            <span>{lang === 'en' ? 'English' : 'हिंदी'}</span>
            <span>→</span>
            <span className="text-gray-700 font-medium line-clamp-1">{post.title}</span>
          </div>

          {/* Header */}
          <header className="mb-6 sm:mb-8 border-b border-gray-200 pb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information with IST */}
            <div className="flex flex-wrap items-center gap-3 text-gray-600 mb-4 text-xs sm:text-sm md:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">{post.author}</span>
              </div>
              <span>•</span>
              <time dateTime={post.date} className="text-xs sm:text-sm">
                {formatDateTime(post.date)}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            {/* Language Switcher - Compact */}
            <div className="mb-4 inline-block">
              <LanguageSwitcher 
                currentLang={lang}
                alternateLang={post.alternateLanguage}
                alternateSlug={post.alternateSlug}
              />
            </div>

            {/* Excerpt */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Table of Contents - Collapsible */}
          <TableOfContents headings={headings} language={lang} />

          {/* Article Content - Research Paper Style */}
          <div className="prose prose-sm sm:prose-base max-w-none blog-content">
            <MDXRemote source={post.content} components={components} />
          </div>

          {/* Social Share Buttons */}
          <SocialShare title={post.title} url={fullUrl} language={lang} />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                {text.tags}
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <AuthorBio language={lang} />

          {/* Back to Blogs Button - Bottom */}
          <div className="mt-8 text-center">
            <Link
              href={`/blog/${lang}`}
              className="inline-flex items-center gap-2 bg-brand-crimson text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg text-sm sm:text-base"
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
