import Script from 'next/script'

interface ArticleSchemaProps {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  authorName: string
  authorUrl: string
  publisherName?: string
  publisherUrl?: string
  publisherLogo?: string
  url: string
  articleSection?: string
  keywords?: string[]
  wordCount?: number
  inLanguage: string
  articleBody?: string
}

export default function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  publisherName = 'Vikas Singh',
  publisherUrl = 'https://vikassingh.vercel.app',
  publisherLogo,
  url,
  articleSection,
  keywords = [],
  wordCount,
  inLanguage,
  articleBody,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      '@type': publisherLogo ? 'Organization' : 'Person',
      name: publisherName,
      url: publisherUrl,
      ...(publisherLogo && {
        logo: {
          '@type': 'ImageObject',
          url: publisherLogo,
        },
      }),
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(articleSection && { articleSection }),
    ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    ...(wordCount && { wordCount }),
    inLanguage,
    ...(articleBody && { articleBody }),
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
