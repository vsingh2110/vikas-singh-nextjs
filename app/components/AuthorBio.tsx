import Image from 'next/image'
import Link from 'next/link'

interface AuthorBioProps {
  language: 'en' | 'hi'
}

export default function AuthorBio({ language }: AuthorBioProps) {
  const content = {
    en: {
      title: 'About the Author',
      name: 'Vikas Singh',
      role: 'Social Psychologist & Software Professional',
      bio: 'Founder of CogniSocial Research, investigating algorithmic influence, digital propaganda, and platform ethics. Researching how digital platforms shape human cognition and behavior.',
      link: 'Learn More About Author'
    },
    hi: {
      title: 'लेखक के बारे में',
      name: 'विकास सिंह',
      role: 'सामाजिक मनोवैज्ञानिक और सॉफ्टवेयर प्रोफेशनल',
      bio: 'CogniSocial Research के संस्थापक, एल्गोरिदमिक प्रभाव, डिजिटल प्रचार और प्लेटफ़ॉर्म नैतिकता की जांच कर रहे हैं। डिजिटल प्लेटफ़ॉर्म मानव संज्ञान और व्यवहार को कैसे आकार देते हैं, इस पर शोध कर रहे हैं।',
      link: 'लेखक के बारे में और जानें'
    }
  }

  const text = content[language]

  return (
    <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200 my-12">
      <h3 className="text-xl font-bold mb-6 text-gray-900 font-heading">
        {text.title}
      </h3>
      
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {/* Author Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/vikas-socialist.png"
            alt={text.name}
            width={120}
            height={120}
            className="rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <h4 className="text-2xl font-bold text-gray-900 mb-1 font-heading">
            {text.name}
          </h4>
          <p className="text-brand-crimson font-medium mb-3">
            {text.role}
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            {text.bio}
          </p>
          <Link
            href="/#about"
            className="inline-flex items-center gap-2 text-brand-crimson font-semibold hover:underline group"
          >
            {text.link}
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
          </Link>
        </div>
      </div>
    </div>
  )
}
