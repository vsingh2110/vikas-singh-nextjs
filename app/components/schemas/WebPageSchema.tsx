import Script from 'next/script'

interface WebPageSchemaProps {
  name: string
  description: string
  url: string
  inLanguage: string
  websiteName?: string
  websiteUrl?: string
  authorName?: string
  authorUrl?: string
}

export default function WebPageSchema({
  name,
  description,
  url,
  inLanguage,
  websiteName = 'Vikas Singh Portfolio',
  websiteUrl = 'https://vikassingh.vercel.app',
  authorName = 'Vikas Singh',
  authorUrl = 'https://vikassingh.vercel.app',
}: WebPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    inLanguage,
    isPartOf: {
      '@type': 'WebSite',
      name: websiteName,
      url: websiteUrl,
    },
    author: {
      '@type': 'Person',
      name: authorName,
      url: authorUrl,
    },
  }

  return (
    <Script
      id="webpage-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
