'use client'

import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  // Generate more complex node positions for connections
  const nodes = Array.from({ length: 40 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 3 + Math.random() * 4
  }))

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Ultra Complex Animated Tech/Psychology Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        
        {/* Layer 1: Fast moving hexagonal grid */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(220, 20, 60, 0.2) 0px, transparent 1px, transparent 30px),
              repeating-linear-gradient(60deg, rgba(220, 20, 60, 0.2) 0px, transparent 1px, transparent 30px),
              repeating-linear-gradient(120deg, rgba(220, 20, 60, 0.2) 0px, transparent 1px, transparent 30px)
            `,
            animation: 'hexMove 5s linear infinite'
          }}></div>
        </div>

        {/* Layer 2: Multiple digital rain columns with varied speeds */}
        <div className="absolute inset-0 opacity-12">
          {[...Array(50)].map((_, i) => (
            <div
              key={`rain-${i}`}
              className="absolute text-brand-crimson font-mono font-bold"
              style={{
                left: `${(i * 2) % 100}%`,
                fontSize: `${8 + (i % 4) * 2}px`,
                animation: `digitalRain ${2 + (i % 6)}s linear infinite`,
                animationDelay: `${(i * 0.2) % 8}s`
              }}
            >
              {i % 3 === 0 ? '101' : i % 3 === 1 ? '010' : '001'}
            </div>
          ))}
        </div>

        {/* Layer 3: Large neural nodes with glow */}
        <div className="absolute inset-0">
          {nodes.map((node, i) => (
            <div
              key={`node-${i}`}
              className="absolute rounded-full bg-brand-crimson shadow-2xl"
              style={{
                width: `${node.size}px`,
                height: `${node.size}px`,
                left: `${node.x}%`,
                top: `${node.y}%`,
                opacity: 0.7 + Math.random() * 0.3,
                boxShadow: `0 0 ${node.size * 3}px ${node.size}px rgba(220, 20, 60, 0.4)`,
                animation: `float ${2 + Math.random() * 3}s ease-in-out infinite, glow ${1 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Layer 4: Dynamic connection lines between nodes */}
        <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none">
          {nodes.slice(0, 60).map((node, i) => {
            if (i < nodes.length - 1) {
              const nextNode = nodes[(i + Math.floor(Math.random() * 5) + 1) % nodes.length]
              return (
                <line
                  key={`line-${i}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${nextNode.x}%`}
                  y2={`${nextNode.y}%`}
                  stroke="#dc143c"
                  strokeWidth="0.5"
                  style={{
                    animation: `lineFlow ${3 + (i % 4)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              )
            }
            return null
          })}
        </svg>

        {/* Layer 5: Scanning laser lines */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-brand-crimson to-transparent"
            style={{
              animation: 'scanVertical 4s ease-in-out infinite',
              filter: 'blur(2px)'
            }}
          ></div>
          <div 
            className="absolute h-full w-1 bg-gradient-to-b from-transparent via-brand-crimson to-transparent"
            style={{
              animation: 'scanHorizontal 6s ease-in-out infinite',
              animationDelay: '2s',
              filter: 'blur(2px)'
            }}
          ></div>
        </div>

        {/* Layer 6: Pulsing brain wave circles - faster */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl" style={{ animation: 'pulse 1.5s ease-in-out infinite' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" style={{ animationDelay: '0.3s', animation: 'pulse 2s ease-in-out infinite' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/15 rounded-full blur-3xl" style={{ animationDelay: '0.6s', animation: 'pulse 2.5s ease-in-out infinite' }}></div>

        {/* Layer 7: Rotating neuron synapses effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={`synapse-${i}`}
              className="absolute w-32 h-32 border-2 border-brand-crimson rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
                animation: `rotate ${8 + i * 2}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
                transformOrigin: 'center'
              }}
            ></div>
          ))}
        </div>

        {/* Layer 8: Particle explosion effects */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: '50%',
                top: '50%',
                animation: `explode ${3 + (i % 3)}s ease-out infinite`,
                animationDelay: `${i * 0.2}s`,
                transform: `rotate(${i * 18}deg)`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/45"></div>

      <style jsx>{`
        @keyframes hexMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
          }
          25% {
            transform: translate(20px, -30px) scale(1.2);
            opacity: 1;
          }
          50% {
            transform: translate(-15px, -20px) scale(0.8);
            opacity: 0.6;
          }
          75% {
            transform: translate(25px, -40px) scale(1.1);
            opacity: 0.9;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 10px 3px rgba(220, 20, 60, 0.3);
          }
          50% {
            box-shadow: 0 0 20px 8px rgba(220, 20, 60, 0.6);
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
        
        @keyframes lineFlow {
          0%, 100% {
            stroke-opacity: 0.3;
            stroke-dasharray: 5, 10;
          }
          50% {
            stroke-opacity: 0.8;
            stroke-dasharray: 10, 5;
          }
        }
        
        @keyframes scanVertical {
          0%, 100% {
            top: -10%;
          }
          50% {
            top: 110%;
          }
        }
        
        @keyframes scanHorizontal {
          0%, 100% {
            left: -10%;
          }
          50% {
            left: 110%;
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes explode {
          0% {
            transform: rotate(var(--rotation, 0deg)) translateX(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: rotate(var(--rotation, 0deg)) translateX(150px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
      <div className="max-w-[1300px] w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-20 relative z-10">
        <div className="text-white font-ubuntu">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-[27px] leading-tight">
            Hello, my name is
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[75px] font-semibold -ml-1 leading-tight mt-2">
            Vikas Singh
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] my-3 sm:my-4 leading-tight min-h-[60px] sm:min-h-[80px] lg:min-h-[100px]">
            And I&apos;m a{' '}
            <span className="text-[#dc143c] font-medium inline-block">
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
            className="inline-block bg-[#dc143c] text-white text-base sm:text-lg md:text-xl lg:text-[25px] px-6 sm:px-7 md:px-8 lg:px-9 py-2 sm:py-2.5 md:py-3 mt-4 sm:mt-5 rounded-md border-2 border-[#dc143c] hover:bg-transparent hover:text-[#dc143c] transition-all duration-300"
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  )
}
