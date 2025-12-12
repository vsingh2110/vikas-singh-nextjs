import Image from 'next/image'
import Link from 'next/link'

interface AuthorBioProps {
  language: 'en' | 'hi'
}

export default function AuthorBio({ language }: AuthorBioProps) {
  const content = {
    en: {
      title: 'About the Author',
      name: 'Vikas Singh "विमुक्त"',
      role: 'Editor of CogniSocial Research',
      bio: 'Software Professional, Social Psychologist, Digital Marketer, Environmental & Civil Rights Activist. Researching how digital platforms shape human cognition and behavior, while advocating for social justice, environmental protection, and civil liberties.',
      link: 'Learn More About Author'
    },
    hi: {
      title: 'लेखक के बारे में',
      name: 'विकास सिंह "विमुक्त"',
      role: 'CogniSocial Research के संपादक',
      bio: 'सॉफ्टवेयर प्रोफेशनल, सामाजिक मनोवैज्ञानिक, डिजिटल मार्केटर, पर्यावरण और नागरिक अधिकार कार्यकर्ता। डिजिटल प्लेटफ़ॉर्म मानव संज्ञान और व्यवहार को कैसे आकार देते हैं, इस पर शोध करते हुए सामाजिक न्याय, पर्यावरण संरक्षण और नागरिक स्वतंत्रता के लिए वकालत करते हैं।',
      link: 'लेखक के बारे में और जानें'
    }
  }

  const text = content[language]

  return (
    <div className="bg-gray-50 rounded-xl p-3 md:p-4 lg:p-5 border border-gray-200 my-8">
      <h3 className="text-sm lg:text-base font-bold mb-3 text-gray-900 font-heading">
        {text.title}
      </h3>
      
      <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-start">
        {/* Author Image */}
        <div className="flex-shrink-0 self-stretch flex items-center">
          <Image
            src="/images/vikas-socialist.png"
            alt={text.name}
            width={90}
            height={90}
            className="rounded-full object-cover border-2 border-white shadow-lg lg:w-full lg:h-full lg:max-w-[140px] lg:max-h-[140px]"
          />
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-1 font-heading">
            {text.name}
          </h4>
          <p className="text-brand-crimson font-medium mb-2 text-xs lg:text-sm">
            {text.role}
          </p>
          <p className="text-gray-600 leading-relaxed mb-3 text-xs lg:text-sm">
            {text.bio}
          </p>
          <Link
            href="/#"
            className="inline-flex items-center gap-1.5 bg-brand-crimson text-white px-3 lg:px-4 py-2 lg:py-2.5 rounded-lg text-xs lg:text-sm font-semibold hover:bg-dark-crimson transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            {text.link}
            <svg
              className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform"
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
