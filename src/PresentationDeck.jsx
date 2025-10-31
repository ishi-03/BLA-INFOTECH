import React, { useState, useEffect } from 'react';
import { Cloud, Laptop, ArrowRight, Sparkles, Zap, Code } from 'lucide-react';
import digSolutions from './assets/digSolutions.svg'; // Placeholder for the actual SVG import
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import blaInfotechLogo from './assets/bla_infotech_logo.png'; // Placeholder for the actual logo import
import Section6 from './Section6';
const BLAHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredButton, setHoveredButton] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  const colors = {
    primary: '#0d1e4c',
    secondary: '#c48cb3',
    tertiary: '#e5c9d7',
    accent: '#83a6ce',
    dark: '#26415e',
    darker: '#0b1b32'
  };

  return (
    <div className="min-h-screen overflow-auto relative" style={{ background: `linear-gradient(135deg, ${colors.darker} 0%, ${colors.primary} 50%, ${colors.dark} 100%)` }}>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-float-particle"
            style={{
              background: colors.accent,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      <div
        className="min-h-screen flex items-center justify-center p-8 relative"
        onMouseMove={handleMouseMove}
      >
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            {/* Logo Section with Hover Effect */}
<div className="flex justify-start">
  <div className="flex items-center bg-white rounded-xl shadow-md overflow-hidden w-[180px] shrink-0 flex-none">
    <img
      src={blaInfotechLogo}
      alt="BLA Infotech Logo"
      className="w-12 h-12 object-contain flex-shrink-0 ml-2"
    />
    <span className="text-[14px] font-semibold text-gray-900 truncate min-w-0 ml-2 mr-2">
      BLA Infotech
    </span>
  </div>
</div>





            {/* Main Heading with Staggered Animation */}
            <div className="space-y-2">
              <h1
                className={`text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ color: colors.tertiary, transitionDelay: '0.2s' }}
              >
                INNOVATING
              </h1>
              <h1
                className={`text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                  }`}
                style={{ color: colors.accent, transitionDelay: '0.4s' }}
              >
                DIGITAL
              </h1>
              <h1
                className={`text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ color: 'white', transitionDelay: '0.6s' }}
              >
                SOLUTIONS
              </h1>
            </div>

            {/* Subheading with Fade In */}
            <p
              className={`text-xl opacity-0 transition-all duration-1000 ${isVisible ? 'opacity-90' : ''
                }`}
              style={{ color: colors.tertiary, transitionDelay: '0.8s' }}
            >
              Transforming businesses through cutting-edge technology and innovative solutions
            </p>

            {/* Features Pills */}
            <div
              className={`flex flex-wrap gap-3 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
              style={{ transitionDelay: '1s' }}
            >
              {[
                { icon: Code, text: 'Custom Development' },
                { icon: Cloud, text: 'Cloud Solutions' },
                { icon: Zap, text: 'Fast & Reliable' }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-sm transform transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    background: `${colors.dark}88`,
                    border: `1px solid ${colors.accent}44`
                  }}
                >
                  <feature.icon className="w-4 h-4" style={{ color: colors.accent }} />
                  <span className="text-sm" style={{ color: colors.tertiary }}>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button with Advanced Hover */}
            <button
              className={`group relative px-8 py-4 rounded-full text-white font-semibold transition-all duration-1000 transform overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${hoveredButton ? 'scale-105 shadow-2xl' : 'shadow-xl'}`}
              style={{
                background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
                transitionDelay: '1.2s'
              }}
              onMouseEnter={() => setHoveredButton(true)}
              onMouseLeave={() => setHoveredButton(false)}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Explore Our Work</span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${hoveredButton ? 'translate-x-1' : ''}`} />
              </span>
              <div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              />
              <Sparkles
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white transition-all duration-300 ${hoveredButton ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
              />
            </button>
          </div>

          {/* Right SVG Animations */}
          <div
            className="relative h-96 lg:h-full"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5 - 2.5}deg) rotateX(${-mousePosition.y * 5 + 2.5}deg)`
            }}
          >
            {/* Digital Solutions SVG (Placeholder - replace with actual SVG import) */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
                }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <img src={digSolutions} alt="Digital Solutions" className="w-3/4 h-3/4 object-contain" />
            </div>

            {/* Animated Gears */}
            <svg
              className={`absolute top-1.5/4 left-1/4 w-20 h-20 animate-spin-slow transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              style={{ transitionDelay: '0.7s' }}
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="40" fill={colors.accent} opacity="0.3" />
              <path d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 50 L30 65 L35 45 L20 30 L40 30 Z" fill={colors.secondary} />
            </svg>

            <svg
              className={`absolute top-1/2 right-1/4 w-28 h-28 animate-spin-reverse transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              style={{ transitionDelay: '0.9s' }}
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="35" fill={colors.dark} opacity="0.4" />
              <path d="M50 15 L60 35 L80 35 L65 50 L70 70 L50 55 L30 70 L35 50 L20 35 L40 35 Z" fill={colors.tertiary} />
            </svg>

            {/* Floating Cloud */}
            <div
              className={`absolute top-12 right-12 animate-float transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-20' : '-translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: '1.1s' }}
            >
              <Cloud className="w-32 h-32" style={{ color: colors.tertiary }} />
            </div>

            {/* Interactive Code Window */}
            <div
              className={`absolute bottom-1/4 left-12 p-4 rounded-lg shadow-2xl backdrop-blur-sm transform transition-all duration-1000 hover:scale-105 cursor-pointer ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
              style={{
                background: `${colors.darker}dd`,
                border: `1px solid ${colors.accent}66`,
                transitionDelay: '1.3s'
              }}
            >
              <div className="flex space-x-2 mb-3">
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: colors.secondary }}></div>
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: colors.accent, animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: colors.tertiary, animationDelay: '0.4s' }}></div>
              </div>
              <div className="space-y-2">
                <div className="h-2 rounded animate-code-line" style={{ background: colors.accent, width: '120px' }}></div>
                <div className="h-2 rounded animate-code-line" style={{ background: colors.secondary, width: '90px', animationDelay: '0.5s' }}></div>
                <div className="h-2 rounded animate-code-line" style={{ background: colors.tertiary, width: '110px', animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Orbiting Elements */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full animate-orbit"
                style={{
                  background: colors.accent,
                  animationDelay: `${i * 0.5}s`,
                  transformOrigin: '0 0'
                }}
              />
            ))}

            {/* Floating Dots Grid with Hover Effect */}
            <div className="absolute bottom-32 right-48 grid grid-cols-4 gap-2">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full animate-pulse transform transition-all duration-300 hover:scale-150 cursor-pointer"
                  style={{
                    background: colors.secondary,
                    animationDelay: `${i * 0.15}s`,
                    opacity: 0.5
                  }}
                />
              ))}
            </div>

            {/* Decorative Rings */}
            <div className="absolute top-32 left-8 w-16 h-16 rounded-full animate-ping-slow" style={{ background: `${colors.secondary}22`, border: `2px solid ${colors.secondary}44` }}></div>
            <div className="absolute bottom-48 left-32 w-12 h-12 rounded-full animate-ping-slow" style={{ background: `${colors.accent}22`, border: `2px solid ${colors.accent}44`, animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, -20px);
          }
          50% {
            transform: translate(-10px, -40px);
          }
          75% {
            transform: translate(-30px, -20px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes code-line {
          0%, 100% {
            opacity: 0.3;
            width: 80%;
          }
          50% {
            opacity: 1;
            width: 100%;
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(100px);
          }
          to {
            transform: rotate(360deg) translateX(100px);
          }
        }

        @keyframes ping-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }

        @keyframes pulse-custom {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-code-line {
          animation: code-line 2s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 8s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 4s ease-in-out infinite;
        }

        .animate-pulse-custom {
          animation: pulse-custom 2s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 8s ease-in-out infinite;
        }
      `}</style>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};

export default BLAHeroSection;