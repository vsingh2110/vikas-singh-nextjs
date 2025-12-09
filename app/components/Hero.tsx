'use client'

import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  // Generate complex node positions for neural network
  const nodes = Array.from({ length: 40 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 3 + Math.random() * 4
  }))

  // Generate psychology-themed icons positions
  const psychIcons = ['🧠', '👤', '💭', '🔗', '📱', '💻', '🎭', '👁️']

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Ultra Complex Animated Tech/Psychology/HMI Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        
        {/* Layer 1: Fast moving hexagonal grid (tech) */}
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

        {/* Layer 2: Digital rain + human silhouettes (HMI) */}
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
              {i % 5 === 0 ? '👤' : i % 5 === 1 ? '101' : i % 5 === 2 ? '🧠' : i % 5 === 3 ? '010' : '💻'}
            </div>
          ))}
        </div>

        {/* Layer 3: Floating psychology icons (social/cognitive elements) */}
        <div className="absolute inset-0 opacity-20">
          {psychIcons.map((icon, i) => (
            <div
              key={`icon-${i}`}
              className="absolute text-4xl"
              style={{
                left: `${(i * 12 + 5) % 90}%`,
                top: `${(i * 15 + 10) % 80}%`,
                animation: `floatIcon ${5 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
                filter: 'blur(1px) grayscale(50%)'
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Layer 4: Neural nodes with glow */}
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

        {/* Layer 5: Brain hemisphere simulation */}
        <div className="absolute inset-0 opacity-10">
          {/* Left brain hemisphere (logical) */}
          <div 
            className="absolute left-[10%] top-[20%] w-64 h-64 border-4 border-cyan-400 rounded-full"
            style={{
              animation: 'brainPulse 3s ease-in-out infinite',
              clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)'
            }}
          ></div>
          {/* Right brain hemisphere (creative) */}
          <div 
            className="absolute right-[10%] top-[20%] w-64 h-64 border-4 border-purple-400 rounded-full"
            style={{
              animation: 'brainPulse 3s ease-in-out infinite',
              animationDelay: '0.5s',
              clipPath: 'polygon(0% 0%, 50% 0%, 50% 100%, 0% 100%)'
            }}
          ></div>
        </div>

        {/* Layer 6: Information flow pathways (data to brain) */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
          {/* Human-to-machine data flow */}
          {[...Array(8)].map((_, i) => (
            <g key={`dataflow-${i}`}>
              <path
                d={`M ${10 + i * 12},${50} Q ${30 + i * 12},${30 + Math.sin(i) * 20} ${50 + i * 12},${50}`}
                stroke="#dc143c"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                style={{
                  animation: `dataFlow ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
              {/* Data particles along paths */}
              <circle
                cx="50"
                cy="50"
                r="3"
                fill="#fff"
                style={{
                  animation: `moveAlongPath ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            </g>
          ))}
        </svg>

        {/* Layer 7: Dynamic connection lines (social network) */}
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

        {/* Layer 8: Attention/Focus scanning laser (eye tracking) */}
        <div className="absolute inset-0 opacity-15">
          <div 
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            style={{
              animation: 'eyeScan 6s ease-in-out infinite',
              filter: 'blur(3px)'
            }}
          ></div>
        </div>

        {/* Layer 9: Cognitive wave pulses (brain activity) */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl" style={{ animation: 'pulse 1.5s ease-in-out infinite' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" style={{ animationDelay: '0.3s', animation: 'pulse 2s ease-in-out infinite' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500/15 rounded-full blur-3xl" style={{ animationDelay: '0.6s', animation: 'pulse 2.5s ease-in-out infinite' }}></div>

        {/* Layer 10: Interface elements (screens/devices) */}
        <div className="absolute inset-0 opacity-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={`screen-${i}`}
              className="absolute border-2 border-cyan-400 rounded"
              style={{
                width: `${40 + i * 10}px`,
                height: `${30 + i * 8}px`,
                left: `${15 + i * 15}%`,
                top: `${70 - i * 8}%`,
                animation: `screenGlow ${4 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              <div className="absolute inset-1 bg-cyan-400/20"></div>
            </div>
          ))}
        </div>

        {/* Layer 11: Thought bubbles (cognitive processes) */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={`bubble-${i}`}
              className="absolute"
              style={{
                left: `${20 + i * 20}%`,
                bottom: `${10 + i * 15}%`,
                animation: `bubbleRise ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 1.5}s`
              }}
            >
              <div className="relative">
                {/* Main bubble */}
                <div className="w-20 h-20 bg-purple-400/30 rounded-full border-2 border-purple-400"></div>
                {/* Small bubbles */}
                <div className="absolute -bottom-6 -left-2 w-8 h-8 bg-purple-400/30 rounded-full border-2 border-purple-400"></div>
                <div className="absolute -bottom-10 left-2 w-4 h-4 bg-purple-400/30 rounded-full border-2 border-purple-400"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Layer 12: Synaptic firing patterns */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={`synapse-${i}`}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `synapseFire ${0.5 + Math.random()}s ease-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                boxShadow: '0 0 20px 5px rgba(253, 224, 71, 0.6)'
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
        
        @keyframes floatIcon {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-40px) scale(1.2);
            opacity: 0.8;
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
        
        @keyframes brainPulse {
          0%, 100% {
            transform: scale(1);
            border-width: 4px;
          }
          50% {
            transform: scale(1.1);
            border-width: 6px;
          }
        }
        
        @keyframes dataFlow {
          0%, 100% {
            stroke-dashoffset: 0;
            opacity: 0.3;
          }
          50% {
            stroke-dashoffset: 20;
            opacity: 1;
          }
        }
        
        @keyframes moveAlongPath {
          0% {
            offset-distance: 0%;
          }
          100% {
            offset-distance: 100%;
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
        
        @keyframes eyeScan {
          0%, 100% {
            top: 20%;
          }
          33% {
            top: 50%;
          }
          66% {
            top: 80%;
          }
        }
        
        @keyframes screenGlow {
          0%, 100% {
            opacity: 0.3;
            box-shadow: 0 0 10px rgba(34, 211, 238, 0.3);
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 30px rgba(34, 211, 238, 0.8);
          }
        }
        
        @keyframes bubbleRise {
          0% {
            transform: translateY(0) scale(0.8);
            opacity: 0;
          }
          20% {
            opacity: 0.5;
          }
          80% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-200px) scale(1.2);
            opacity: 0;
          }
        }
        
        @keyframes synapseFire {
          0% {
            transform: scale(0.5);
            opacity: 0;
          }
          50% {
            transform: scale(2);
            opacity: 1;
          }
          100% {
            transform: scale(0.5);
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
