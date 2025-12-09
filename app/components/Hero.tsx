'use client'

import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated Network Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(220, 20, 60, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(220, 20, 60, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'moveGrid 20s linear infinite'
          }}></div>
        </div>
        
        {/* Floating particles/nodes effect */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-brand-crimson rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>

        {/* Pulsing circles for psychology/connectivity theme */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <style jsx>{`
        @keyframes moveGrid {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
      `}</style>
      <div className="max-w-[1300px] w-full mx-auto px-20 relative z-10">
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
