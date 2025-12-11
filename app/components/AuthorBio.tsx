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
    <div className="bg-gray-50 rounded-xl p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14 border border-gray-200 my-12">
      <h3 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-6 text-gray-900 font-heading">
        {text.title}
      </h3>
      
      <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 xl:gap-10 items-start">
        {/* Author Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/vikas-socialist.png"
            alt={text.name}
            width={120}
            height={120}
            className="rounded-full object-cover border-4 border-white shadow-lg lg:w-[150px] lg:h-[150px] xl:w-[180px] xl:h-[180px] 2xl:w-[200px] 2xl:h-[200px]"
          />
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <h4 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-1 font-heading">
            {text.name}
          </h4>
          <p className="text-brand-crimson font-medium mb-3 lg:text-lg xl:text-xl 2xl:text-2xl">
            {text.role}
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 lg:text-lg xl:text-xl 2xl:text-2xl">
            {text.bio}
          </p>
          <Link
            href="/#"
            className="inline-flex items-center gap-2 bg-brand-crimson text-white px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-lg font-semibold hover:bg-dark-crimson transition-all duration-300 shadow-md hover:shadow-lg group lg:text-lg xl:text-xl 2xl:text-2xl"
          >
            {text.link}
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 group-hover:translate-x-1 transition-transform"
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
