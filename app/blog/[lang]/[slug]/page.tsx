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
import TopShareButtons from '@/app/components/TopShareButtons'
import SocialShare from '@/app/components/SocialShare'
import ReadingModeToggle from '@/app/components/ReadingModeToggle'
import ImagePair from '@/app/components/ImagePair'
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

  // Detect image type and dimensions from the image path
  const imageExtension = post.image.split('.').pop()?.toLowerCase()
  const imageType = imageExtension === 'png' ? 'image/png' : 
                    imageExtension === 'jpg' || imageExtension === 'jpeg' ? 'image/jpeg' :
                    imageExtension === 'webp' ? 'image/webp' : 'image/jpeg'
  
  // Use appropriate dimensions based on common OG image standards
  // WhatsApp prefers 1.91:1 ratio (1200x630 is standard)
  const ogImageWidth = 1200
  const ogImageHeight = 630

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
      url: `https://vikassingh.vercel.app/blog/${lang}/${slug}`,
      siteName: 'Vikas Singh',
      locale: lang === 'en' ? 'en_US' : 'hi_IN',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `https://vikassingh.vercel.app${post.image}`,
          secureUrl: `https://vikassingh.vercel.app${post.image}`,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: post.title,
          type: imageType,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@vs_vimukt',
      creator: '@vs_vimukt',
      title: post.title,
      description: post.excerpt,
      images: [`https://vikassingh.vercel.app${post.image}`],
    },
  }
}

// Custom MDX components with research article styling (REDUCED SIZES)
const components = {
  h1: (props: any) => (
    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold font-heading text-gray-900 mb-4 mt-8 first:mt-0" style={{fontWeight: 700}} {...props} />
  ),
  h2: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-') || ''
    return <h2 id={id} className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-heading text-gray-900 mb-4 mt-6 border-l-4 border-brand-crimson pl-4" style={{fontWeight: 600}} {...props} />
  },
  h3: (props: any) => {
    const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-') || ''
    return <h3 id={id} className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-heading text-gray-800 mb-3 mt-5" style={{fontWeight: 500}} {...props} />
  },
  p: (props: any) => (
    <p className="text-sm sm:text-xs md:text-sm lg:text-sm xl:text-base leading-relaxed text-gray-700 mb-5" {...props} />
  ),
  a: (props: any) => (
    <a className="text-brand-crimson hover:underline font-medium text-[10px] sm:text-xs md:text-sm" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside space-y-1 mb-5 text-gray-700 ml-4" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside space-y-1 mb-5 text-gray-700 ml-4" {...props} />
  ),
  li: (props: any) => (
    <li className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base leading-snug" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-brand-crimson bg-gray-50 pl-4 pr-4 py-2 my-4 italic text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base text-gray-600 rounded-r-lg leading-tight" {...props} />
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
    <figcaption className="text-[10px] sm:text-[10px] md:text-xs text-gray-500 mt-1 text-center italic leading-tight" {...props} />
  ),
  strong: (props: any) => (
    <strong className="text-gray-900" style={{fontWeight: 500}} {...props} />
  ),
  em: (props: any) => (
    <em className="italic text-gray-800" {...props} />
  ),
  hr: (props: any) => (
    <hr className="my-8 border-t-2 border-gray-200" {...props} />
  ),
  ImagePair: ImagePair,
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
  const fullUrl = `https://vikassingh.vercel.app/blog/${lang}/${params.slug}`

  return (
    <>
      <ReadingProgress />
      <Navbar />
      
      {/* Set HTML lang attribute dynamically */}
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang = "${lang}";` }} />

      <main className="min-h-screen bg-white pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Back Button and Reading Mode Toggle Section */}
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-3 mt-4 sm:pt-0 flex items-center justify-between gap-4 flex-wrap">
          <Link
            href={`/blog/${lang}`}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-brand-crimson text-white px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-2.5 rounded-lg hover:bg-red-700 transition-colors text-xs sm:text-sm md:text-base shadow-md hover:shadow-lg font-semibold"
          >
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5"
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
          
          <ReadingModeToggle language={lang} />
        </div>

        {/* Hero Image with Blurred Background */}
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-[28rem] xl:h-[32rem] mb-6 bg-gray-200">
          {/* Blurred background layer - extends horizontally */}
          <div className="absolute inset-0 overflow-hidden bg-gray-300">
            <Image
              src={post.image}
              alt=""
              fill
              className="object-cover blur-sm scale-150 opacity-40"
              sizes="100vw"
              priority
              quality={30}
            />
          </div>
          {/* Main image */}
          <div className="relative h-full flex items-center justify-center z-10 px-4">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-contain"
              priority
              sizes="100vw"
              quality={90}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {/* Category Badge - Responsive - Fixed z-index - Higher on mobile */}
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-brand-crimson text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium px-2 sm:px-3 md:px-5 py-1 sm:py-1.5 md:py-2 rounded-full shadow-lg z-20">
            {post.category}
          </div>
        </div>

        {/* Article Container - Expanded Width */}
        <article className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {/* Breadcrumb */}
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
            <Link href={`/blog/${lang}`} className="hover:text-brand-crimson transition-colors">{text.blog}</Link>
            <span>→</span>
            <Link href={`/blog/${lang}`} className="hover:text-brand-crimson transition-colors">{lang === 'en' ? 'English' : 'हिंदी'}</Link>
            <span>→</span>
            <span className="text-gray-700 dark:text-gray-300 font-medium line-clamp-1">{post.title}</span>
          </div>

          {/* Header */}
          <header className="mb-6 sm:mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading text-gray-900 dark:text-white mb-4 leading-tight" style={{fontWeight: 700}}>
              {post.title}
            </h1>

            {/* Meta Information with IST */}
            <div className="flex flex-wrap items-center gap-3 text-gray-600 dark:text-gray-400 mb-4 text-xs sm:text-sm md:text-base">
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
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* Top Share Buttons - Client Component */}
          <TopShareButtons title={post.title} url={fullUrl} language={lang} />

          {/* Table of Contents - Collapsible - with margin top */}
          <div className="mt-6 sm:mt-8">
            <TableOfContents headings={headings} language={lang} />
          </div>

          {/* Article Content - Research Paper Style */}
          <div className="prose prose-sm sm:prose-base max-w-none blog-content">
            <MDXRemote source={post.content} components={components} />
          </div>

          {/* Social Share Buttons */}
          <SocialShare title={post.title} url={fullUrl} language={lang} />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                {text.tags}
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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
      
      {/* Script to set background image for center images */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', function() {
          const figures = document.querySelectorAll('.prose figure:not(.float-left):not(.float-right):not(.image-pair figure)');
          figures.forEach(function(figure) {
            const img = figure.querySelector('img');
            if (img && img.src) {
              figure.style.setProperty('--bg-image', 'url(' + img.src + ')');
            }
          });
        });
      ` }} />

      {/* JSON-LD Structured Data - Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            image: `https://vikassingh.vercel.app${post.image}`,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              '@type': 'Person',
              name: post.author,
              url: 'https://vikassingh.vercel.app',
            },
            publisher: {
              '@type': 'Person',
              name: 'Vikas Singh',
              url: 'https://vikassingh.vercel.app',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': fullUrl,
            },
            articleSection: post.category,
            keywords: post.tags?.join(', '),
            inLanguage: lang === 'en' ? 'en-US' : 'hi-IN',
          }),
        }}
      />

      {/* JSON-LD Structured Data - BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://vikassingh.vercel.app',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: text.blog,
                item: `https://vikassingh.vercel.app/blog/${lang}`,
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: post.title,
                item: fullUrl,
              },
            ],
          }),
        }}
      />

      {/* JSON-LD Structured Data - WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': fullUrl,
            url: fullUrl,
            name: post.title,
            description: post.excerpt,
            inLanguage: lang === 'en' ? 'en-US' : 'hi-IN',
            isPartOf: {
              '@type': 'WebSite',
              name: 'Vikas Singh Portfolio',
              url: 'https://vikassingh.vercel.app',
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://vikassingh.vercel.app',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: text.blog,
                  item: `https://vikassingh.vercel.app/blog/${lang}`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: post.title,
                },
              ],
            },
            primaryImageOfPage: {
              '@type': 'ImageObject',
              url: `https://vikassingh.vercel.app${post.image}`,
            },
          }),
        }}
      />
    </>
  )
}
