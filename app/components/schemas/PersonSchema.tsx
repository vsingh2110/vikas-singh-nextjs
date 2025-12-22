import Script from 'next/script'

interface PersonSchemaProps {
  name: string
  jobTitle: string[]
  description: string
  url: string
  image?: string
  sameAs?: string[]
  email?: string
  telephone?: string
  address?: {
    addressCountry: string
    addressLocality?: string
  }
  alumniOf?: string
  knowsAbout: string[]
}

export default function PersonSchema({
  name,
  jobTitle,
  description,
  url,
  image,
  sameAs = [],
  email,
  telephone,
  address,
  alumniOf,
  knowsAbout,
}: PersonSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    url,
    ...(image && { image }),
    ...(sameAs.length > 0 && { sameAs }),
    ...(email && { email }),
    ...(telephone && { telephone }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        addressCountry: address.addressCountry,
        ...(address.addressLocality && { addressLocality: address.addressLocality }),
      },
    }),
    ...(alumniOf && {
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: alumniOf,
      },
    }),
    knowsAbout,
    hasOccupation: {
      '@type': 'Occupation',
      name: jobTitle[0],
      ...(address && {
        occupationLocation: {
          '@type': 'Country',
          name: address.addressCountry,
        },
      }),
    },
  }

  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
