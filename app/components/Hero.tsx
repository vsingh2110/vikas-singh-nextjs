'use client'

import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: "url('/images/banner1.png')" }}
    >
      <div className="max-w-[1300px] w-full mx-auto px-20">
        <div className="text-white font-ubuntu">
          <div className="text-[27px]">Hello, my name is</div>
          <div className="text-[75px] font-semibold -ml-1">
            Vikas Singh
          </div>
          <div className="text-[40px] my-2">
            And I&apos;m a{' '}
            <span className="text-[#dc143c] font-medium">
              <TypeAnimation
                sequence={[
                  'Front End Developer',
                  2000,
                  'Digital Marketer',
                  2000,
                  'Wordpress and Shopify Designer',
                  2000,
                  'Paid Ads Google/FB',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>
          <a
            href="#contact"
            className="inline-block bg-[#dc143c] text-white text-[25px] px-9 py-3 mt-5 rounded-md border-2 border-[#dc143c] hover:bg-transparent hover:text-[#dc143c] transition-all duration-300"
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  )
}
