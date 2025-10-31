import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Globe, Cog, Send, Sparkles } from 'lucide-react';
import social from './assets/social.json';
const Section5 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lottieLoaded, setLottieLoaded] = useState(false);
  const lottieRef = useRef(null);
  const lottieInstance = useRef(null);
  const containerRef = useRef(null);

  const colors = {
    primary: '#142a63',
    secondary: '#c997b9',
    tertiary: '#edd5e0',
    accent: '#90b5d8',
    dark: '#325078',
    darker: '#112340',
    lightBlue: '#b5cdea',
    surface: '#eaf0f8',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Load Lottie animation
useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js";
  script.onload = () => {
    if (lottieRef.current && window.lottie) {
      if (lottieInstance.current) {
        lottieInstance.current.destroy();
      }
      lottieInstance.current = window.lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: social, // ✅ using imported JSON
      });
      setLottieLoaded(true);
    }
  };
  document.head.appendChild(script);

  return () => {
    if (lottieInstance.current) {
      lottieInstance.current.destroy();
    }
    script.remove();
  };
}, []);


  return (
    <div 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden" 
      style={{ 
        background: `linear-gradient(135deg, ${colors.surface} 0%, ${colors.lightBlue} 50%, ${colors.accent} 100%)` 
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-64 h-64 rounded-full opacity-20 transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
            left: `${mousePosition.x * 0.03}px`,
            top: `${mousePosition.y * 0.03}px`,
          }}
        />
        <div 
          className="absolute w-48 h-48 rounded-full opacity-15 transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)`,
            right: `${mousePosition.x * 0.02}px`,
            bottom: `${mousePosition.y * 0.02}px`,
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <Cog 
        className="absolute top-12 left-12 w-16 h-16 opacity-10 animate-spin-slow" 
        style={{ color: colors.secondary }} 
      />
      <Cog 
        className="absolute bottom-16 right-16 w-14 h-14 opacity-10 animate-spin-reverse" 
        style={{ color: colors.accent }} 
      />
      <Sparkles 
        className="absolute top-1/3 right-1/4 w-8 h-8 opacity-20 animate-pulse-slow" 
        style={{ color: colors.tertiary }} 
      />

      {/* Main Content Container */}
      <div className="relative min-h-screen flex items-center justify-center px-6 py-16">
        <div className="container mx-auto max-w-6xl">
          
          {/* Title Section */}
          <div 
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <h1 
              className="text-4xl lg:text-5xl font-bold mb-4" 
              style={{ color: colors.primary }}
            >
              Get In Touch
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div 
                className="h-1 w-16 rounded-full" 
                style={{ background: `linear-gradient(90deg, ${colors.secondary}, ${colors.accent})` }} 
              />
              <Sparkles className="w-5 h-5 animate-pulse" style={{ color: colors.secondary }} />
              <div 
                className="h-1 w-16 rounded-full" 
                style={{ background: `linear-gradient(90deg, ${colors.accent}, ${colors.secondary})` }} 
              />
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            
            {/* LEFT SECTION - Contact Information */}
            <div 
              className={`space-y-4 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              {/* Address Card */}
              <div 
                className="group relative p-5 rounded-2xl backdrop-blur-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, rgba(255,255,255,0.95), rgba(237,213,224,0.5))`,
                  border: `2px solid ${colors.tertiary}`,
                  boxShadow: `0 8px 30px ${colors.accent}40`
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${colors.tertiary}30, ${colors.lightBlue}30)` }} 
                />
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div 
                      className="p-3 rounded-xl transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" 
                      style={{ 
                        background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
                        boxShadow: `0 6px 16px ${colors.secondary}40`
                      }}
                    >
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: colors.primary }}>
                      Office Address
                    </h3>
                  </div>
                  <div className="space-y-1 text-sm ml-12" style={{ color: colors.dark }}>
                    <p className="font-bold text-base" style={{ color: colors.darker }}>
                      BLA Packaging Industries Pvt. Ltd.
                    </p>
                    <p>Plot No.: 703/P, Paiki, Moje Rupal,</p>
                    <p>Bavla – Bagodara Highway,</p>
                    <p>Taluka: Bavla,</p>
                    <p>District: Ahmedabad – 382220</p>
                  </div>
                </div>
              </div>

              {/* Contact Details Cards */}
              <div className="space-y-3">
                {[
                  { 
                    icon: Phone, 
                    label: 'Phone', 
                    value: '+91-9920222160', 
                    href: 'tel:+919920222160',
                    gradient: `linear-gradient(135deg, ${colors.accent}, ${colors.lightBlue})`
                  },
                  { 
                    icon: Mail, 
                    label: 'Email', 
                    value: 'anuj@blapackaging.com', 
                    href: 'mailto:anuj@blapackaging.com',
                    gradient: `linear-gradient(135deg, ${colors.secondary}, ${colors.tertiary})`
                  },
                  { 
                    icon: Globe, 
                    label: 'Website', 
                    value: 'www.blainfotech.com', 
                    href: 'https://www.blainfotech.com',
                    gradient: `linear-gradient(135deg, ${colors.primary}, ${colors.dark})`
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="group relative p-4 rounded-xl backdrop-blur-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer overflow-hidden"
                    style={{ 
                      background: 'rgba(255,255,255,0.9)',
                      border: `2px solid ${colors.lightBlue}`,
                      transitionDelay: `${idx * 0.1}s`
                    }}
                  >
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: item.gradient, opacity: 0.1 }}
                    />
                    <div className="relative z-10 flex items-center space-x-4">
                      <div 
                        className="p-3 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" 
                        style={{ background: item.gradient }}
                      >
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: colors.dark }}>
                          {item.label}
                        </p>
                        <a 
                          href={item.href} 
                          className="text-base font-bold transition-all duration-300 group-hover:tracking-wide" 
                          style={{ color: colors.primary }}
                          target={item.label === 'Website' ? '_blank' : undefined}
                          rel={item.label === 'Website' ? 'noopener noreferrer' : undefined}
                        >
                          {item.value}
                        </a>
                      </div>
                      <Send 
                        className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" 
                        style={{ color: colors.accent }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SECTION - Visuals & Animations */}
            <div 
              className={`space-y-6 transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              {/* Lottie Animation Card */}
              <div 
                className="relative p-6 rounded-2xl backdrop-blur-lg transform transition-all duration-700 hover:scale-105 overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, rgba(255,255,255,0.95), rgba(181,205,234,0.3))`,
                  border: `3px solid ${colors.accent}`,
                  boxShadow: `0 16px 48px ${colors.primary}30`
                }}
              >
                <div className="absolute inset-0 animate-pulse-ring" />
                <div className="relative z-10">
                  {!lottieLoaded && (
                    <div className="flex items-center justify-center h-64 text-center" style={{ color: colors.dark }}>
                      <div>
                        <Sparkles className="w-12 h-12 mx-auto mb-3 animate-pulse" style={{ color: colors.accent }} />
                        <p className="text-sm">Loading animation...</p>
                      </div>
                    </div>
                  )}
                  <div 
                    ref={lottieRef} 
                    className="w-full h-64"
                    style={{ display: lottieLoaded ? 'block' : 'none' }}
                  />
                </div>
              </div>

              {/* Customer Support Illustration */}
              <div className="flex justify-center">
                <div 
                  className="relative p-6 rounded-2xl backdrop-blur-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.tertiary}60, ${colors.lightBlue}40)`,
                    border: `2px solid ${colors.tertiary}`
                  }}
                >
                  <svg className="w-56 h-56 animate-float-slow" viewBox="0 0 200 200">
                    <defs>
                      <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#f5d5b8', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#e0c4a8', stopOpacity: 1 }} />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Head */}
                    <circle cx="100" cy="75" r="35" fill="url(#skinGrad)">
                      <animate attributeName="r" values="35;37;35" dur="3s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Hair */}
                    <ellipse cx="100" cy="60" rx="26" ry="13" fill={colors.darker}/>
                    <path d="M70 75 Q74 62 86 68" fill={colors.darker}/>
                    
                    {/* Eyes */}
                    <circle cx="88" cy="72" r="4" fill={colors.darker}>
                      <animate attributeName="opacity" values="1;0.2;1" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="112" cy="72" r="4" fill={colors.darker}>
                      <animate attributeName="opacity" values="1;0.2;1" dur="4s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Smile */}
                    <path d="M88 88 Q100 96 112 88" fill="none" stroke={colors.darker} strokeWidth="2.5" strokeLinecap="round">
                      <animate attributeName="d" 
                        values="M88 88 Q100 96 112 88;M88 88 Q100 99 112 88;M88 88 Q100 96 112 88" 
                        dur="2s" repeatCount="indefinite" />
                    </path>
                    
                    {/* Body/Shirt */}
                    <rect x="68" y="112" width="64" height="52" rx="8" fill={colors.accent}>
                      <animate attributeName="fill" 
                        values={`${colors.accent};${colors.lightBlue};${colors.accent}`}
                        dur="4s" repeatCount="indefinite" />
                    </rect>
                    
                    {/* Success Badge */}
                    <circle cx="145" cy="118" r="20" fill={colors.secondary} filter="url(#glow)">
                      <animate attributeName="r" values="20;23;20" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <path d="M139 118 L143 122 L153 108" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    
                    {/* Sparkles around badge */}
                    <circle cx="162" cy="108" r="2.5" fill={colors.tertiary}>
                      <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="166" cy="120" r="2" fill={colors.tertiary}>
                      <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="0.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="158" cy="128" r="2" fill={colors.tertiary}>
                      <animate attributeName="opacity" values="0;1;0" dur="1.5s" begin="1s" repeatCount="indefinite" />
                    </circle>
                    
                    {/* Desk/Base */}
                    <path d="M48 170 L152 170" stroke={colors.darker} strokeWidth="5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.08); }
        }

        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 ${colors.accent}40; }
          50% { box-shadow: 0 0 0 25px ${colors.accent}00; }
          100% { box-shadow: 0 0 0 0 ${colors.accent}00; }
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 3s ease-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Section5;