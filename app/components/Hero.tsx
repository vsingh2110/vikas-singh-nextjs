'use client'

import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated Tech/Psychology Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Fast moving grid pattern - represents digital networks */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(220, 20, 60, 0.15) 1px, transparent 1px),
              linear-gradient(rgba(220, 20, 60, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'moveGrid 8s linear infinite'
          }}></div>
        </div>
        
        {/* Digital rain effect - binary code streaming */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={`rain-${i}`}
              className="absolute text-brand-crimson font-mono text-xs"
              style={{
                left: `${(i * 3.5) % 100}%`,
                animation: `digitalRain ${3 + (i % 5)}s linear infinite`,
                animationDelay: `${(i * 0.3) % 5}s`
              }}
            >
              01010
            </div>
          ))}
        </div>
        
        {/* Fast floating neural nodes - represents brain connections */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={`node-${i}`}
              className="absolute rounded-full bg-brand-crimson opacity-70 shadow-lg shadow-brand-crimson/50"
              style={{
                width: `${4 + (i % 3) * 2}px`,
                height: `${4 + (i % 3) * 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        {/* Neural connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(15)].map((_, i) => (
            <line
              key={`line-${i}`}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="#dc143c"
              strokeWidth="1"
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            />
          ))}
        </svg>

        {/* Fast pulsing brain waves */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <style jsx>{`
        @keyframes moveGrid {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(40px, 40px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
            opacity: 0.9;
          }
          50% {
            transform: translate(-15px, -20px) scale(0.9);
            opacity: 0.6;
          }
          75% {
            transform: translate(25px, -40px) scale(1.05);
            opacity: 0.8;
          }
        }
        
        @keyframes digitalRain {
          0% {
            transform: translateY(-100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
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
