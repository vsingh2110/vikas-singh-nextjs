import { Metadata } from 'next'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Achievements from './components/Achievements'
import NonProfitWork from './components/NonProfitWork'
import SocialActivities from './components/SocialActivities'
// import Projects from './components/Projects'
// import Teams from './components/Teams'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PersonSchema from './components/schemas/PersonSchema'

export const metadata: Metadata = {
  title: 'Vikas Singh | Frontend Developer & Digital Marketing Expert',
  description: 'Portfolio of Vikas Singh - Frontend Developer specializing in React, Next.js, and Digital Marketing. Expert in web development, SEO, Google Ads, Facebook Ads, WordPress, and Shopify. Electrical Engineering graduate with proven expertise in modern web technologies and paid advertising campaigns.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Expert',
    'Digital Marketing Specialist',
    'SEO Expert',
    'Web Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'WordPress Developer',
    'Shopify Expert',
    'Google Ads Specialist',
    'Facebook Ads Expert',
    'Paid Advertising',
    'UI/UX Developer',
    'Full Stack Developer',
    'Electrical Engineering',
    'Portfolio Website',
    'Web Development Services',
  ],
  authors: [{ name: 'Vikas Singh', url: 'https://vikassingh.vercel.app' }],
  creator: 'Vikas Singh',
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://vikassingh.vercel.app',
    siteName: 'Vikas Singh Portfolio',
    title: 'Vikas Singh | Frontend Developer & Digital Marketing Expert',
    description: 'Frontend Developer & Digital Marketing Expert specializing in React, Next.js, SEO, and Paid Advertising',
    images: [
      {
        url: 'https://vikassingh.vercel.app/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vikas Singh - Frontend Developer & Digital Marketing Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vikas Singh | Frontend Developer & Digital Marketing Expert',
    description: 'Frontend Developer & Digital Marketing Expert specializing in React, Next.js, SEO, and Paid Advertising',
    images: ['https://vikassingh.vercel.app/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vikassingh.vercel.app',
  },
}

export default function Home() {
  return (
    <>
      <PersonSchema
        name="Vikas Singh"
        jobTitle={['Frontend Developer', 'Digital Marketing Expert', 'Web Developer']}
        description="Frontend Developer & Digital Marketing Expert specializing in React, Next.js, and paid advertising. Electrical Engineering graduate with expertise in modern web technologies, SEO, Google Ads, and Facebook Ads."
        url="https://vikassingh.vercel.app"
        image="https://vikassingh.vercel.app/images/vikas-singh-profile.jpg"
        sameAs={[
          'https://www.linkedin.com/in/vikas-singh2110/',
          'https://github.com/vsingh2110',
          'https://twitter.com/vs_vimukt',
          'https://www.facebook.com/singhsahab.vikas',
        ]}
        alumniOf="Electrical Engineering"
        knowsAbout={[
          'React.js',
          'Next.js',
          'TypeScript',
          'JavaScript',
          'HTML5',
          'CSS3',
          'Tailwind CSS',
          'Digital Marketing',
          'SEO',
          'Google Ads',
          'Facebook Ads',
          'WordPress',
          'Shopify',
          'Web Development',
          'Frontend Development',
          'UI/UX Design',
          'Responsive Design',
          'Performance Optimization',
          'Git',
          'Vercel',
        ]}
        address={{
          addressCountry: 'India',
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Journey />
      <Achievements />
      <NonProfitWork />
      <SocialActivities />
      {/* <Projects /> */}
      {/* <Teams /> */}
      <Services />
      <Contact />
      <SocialLinks />
      <Footer />
      <ScrollToTop />
    </>
  )
}
