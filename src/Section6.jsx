import React, { useState, useEffect } from 'react';

export default function ThankYouPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const colors = {
    primary: '#0d1e4c',
    secondary: '#c48cb3',
    tertiary: '#e5c9d7',
    accent: '#83a6ce',
    dark: '#26415e',
    darker: '#0b1b32'
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative" style={{ background: `radial-gradient(circle at 20% 50%, ${colors.dark} 0%, ${colors.primary} 40%, ${colors.darker} 100%)` }}>
      {/* Animated SVG background */}
      <svg className="absolute inset-0 w-full h-full opacity-30" style={{ pointerEvents: 'none' }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: colors.secondary, stopOpacity: 1 }}>
              <animate attributeName="stop-color" values={`${colors.secondary};${colors.accent};${colors.secondary}`} dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" style={{ stopColor: colors.accent, stopOpacity: 1 }}>
              <animate attributeName="stop-color" values={`${colors.accent};${colors.tertiary};${colors.accent}`} dur="8s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        
        {/* Morphing blobs */}
        <ellipse cx="15%" cy="30%" rx="120" ry="80" fill="url(#grad1)" opacity="0.4" filter="url(#glow)">
          <animate attributeName="rx" values="120;160;120" dur="8s" repeatCount="indefinite" />
          <animate attributeName="ry" values="80;120;80" dur="10s" repeatCount="indefinite" />
          <animate attributeName="cy" values="30%;40%;30%" dur="12s" repeatCount="indefinite" />
        </ellipse>
        
        <ellipse cx="85%" cy="70%" rx="140" ry="100" fill={colors.accent} opacity="0.3" filter="url(#glow)">
          <animate attributeName="rx" values="140;100;140" dur="10s" repeatCount="indefinite" />
          <animate attributeName="ry" values="100;140;100" dur="8s" repeatCount="indefinite" />
          <animate attributeName="cx" values="85%;75%;85%" dur="15s" repeatCount="indefinite" />
        </ellipse>
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <circle key={i} cx={`${10 + i * 12}%`} cy={`${20 + i * 8}%`} r="2" fill={colors.tertiary} opacity="0.6">
            <animate attributeName="cy" values={`${20 + i * 8}%;${80 - i * 5}%;${20 + i * 8}%`} dur={`${10 + i * 2}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${3 + i}s`} repeatCount="indefinite" />
          </circle>
        ))}
        
        {/* Animated curves */}
        <path d="M0,300 Q400,250 800,300 T1600,300" fill="none" stroke={colors.tertiary} strokeWidth="1" opacity="0.4">
          <animate attributeName="d" 
            values="M0,300 Q400,250 800,300 T1600,300;M0,300 Q400,350 800,300 T1600,300;M0,300 Q400,250 800,300 T1600,300" 
            dur="10s" repeatCount="indefinite" />
        </path>
      </svg>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, ${colors.tertiary} 0%, ${colors.accent} 50%, ${colors.tertiary} 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      <div className="relative z-10 max-w-xl w-full">
        <div 
          className="rounded-3xl shadow-2xl p-8 backdrop-blur-md border border-opacity-20"
          style={{ 
            backgroundColor: `${colors.primary}cc`,
            borderColor: colors.tertiary,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'scale(1)' : 'scale(0.9)',
            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          {/* Animated SVG icon */}
          <div className="flex justify-center mb-6">
            <svg width="100" height="100" viewBox="0 0 120 120" className={mounted ? 'opacity-100' : 'opacity-0'} style={{ transition: 'opacity 0.8s 0.2s', filter: 'drop-shadow(0 4px 12px rgba(196, 140, 179, 0.3))' }}>
              <defs>
                <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: colors.secondary }} />
                  <stop offset="100%" style={{ stopColor: colors.accent }} />
                </linearGradient>
              </defs>
              
              {/* Outer rings */}
              <circle cx="60" cy="60" r="52" fill="none" stroke="url(#iconGrad)" strokeWidth="2" opacity="0.3">
                <animate attributeName="r" values="52;56;52" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="60" cy="60" r="45" fill="none" stroke="url(#iconGrad)" strokeWidth="2" opacity="0.5">
                <animate attributeName="r" values="45;48;45" dur="2.5s" repeatCount="indefinite" />
              </circle>
              
              {/* Center circle */}
              <circle cx="60" cy="60" r="38" fill="url(#iconGrad)" opacity="0.9" />
              
              {/* Checkmark with draw animation */}
              <path d="M45,60 L55,70 L75,45" fill="none" stroke={colors.primary} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="60" strokeDashoffset="60">
                <animate attributeName="stroke-dashoffset" from="60" to="0" dur="0.8s" fill="freeze" begin="0.5s" />
              </path>
              
              {/* Sparkles */}
              <g opacity="0">
                <animate attributeName="opacity" values="0;1;0" dur="2s" begin="1.3s" repeatCount="indefinite" />
                <path d="M85,35 L87,40 L92,42 L87,44 L85,49 L83,44 L78,42 L83,40 Z" fill={colors.tertiary} />
                <path d="M35,75 L37,80 L42,82 L37,84 L35,89 L33,84 L28,82 L33,80 Z" fill={colors.tertiary} />
              </g>
            </svg>
          </div>

          <h1 
            className={`text-5xl font-bold text-center mb-3 shimmer-text ${mounted ? '' : 'opacity-0'}`}
            style={{ 
              animation: mounted ? 'fadeInUp 0.8s 0.4s forwards' : 'none',
              opacity: mounted ? undefined : 0
            }}
          >
            Thank You!
          </h1>

          <p 
            className={`text-lg text-center mb-6 ${mounted ? '' : 'opacity-0'}`}
            style={{ 
              color: colors.accent,
              animation: mounted ? 'fadeInUp 0.8s 0.6s forwards' : 'none',
              opacity: mounted ? undefined : 0
            }}
          >
            Your support means the world to us
          </p>

          {/* Animated decorative icons */}
          <div className="flex justify-center gap-8 mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" className={mounted ? '' : 'opacity-0'} style={{ animation: mounted ? 'slideInLeft 0.8s 0.8s forwards, float 3s 1.6s infinite' : 'none', opacity: mounted ? undefined : 0 }}>
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" 
                fill={colors.secondary} opacity="0.9">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
              </path>
            </svg>
            
            <svg width="40" height="40" viewBox="0 0 24 24" className={mounted ? '' : 'opacity-0'} style={{ animation: mounted ? 'scaleIn 0.6s 1s forwards, float 3s 1.8s infinite' : 'none', opacity: mounted ? undefined : 0 }}>
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" 
                fill={colors.accent} opacity="0.9">
                <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="20s" repeatCount="indefinite" />
              </path>
            </svg>
            
            <svg width="40" height="40" viewBox="0 0 24 24" className={mounted ? '' : 'opacity-0'} style={{ animation: mounted ? 'slideInRight 0.8s 0.8s forwards, float 3s 2s infinite' : 'none', opacity: mounted ? undefined : 0 }}>
              <path d="M7,2V4H8V18A4,4 0 0,0 12,22A4,4 0 0,0 16,18V4H17V2H7M11,16C10.4,16 10,15.6 10,15C10,14.4 10.4,14 11,14C11.6,14 12,14.4 12,15C12,15.6 11.6,16 11,16M13,12C12.4,12 12,11.6 12,11C12,10.4 12.4,10 13,10C13.6,10 14,10.4 14,11C14,11.6 13.6,12 13,12M14,7H10V4H14V7Z" 
                fill={colors.tertiary} opacity="0.9">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>

          <div 
            className={`rounded-2xl p-5 mb-6 border border-opacity-20 ${mounted ? '' : 'opacity-0'}`}
            style={{ 
              backgroundColor: `${colors.dark}99`,
              borderColor: colors.accent,
              animation: mounted ? 'scaleIn 0.8s 1.2s forwards' : 'none',
              opacity: mounted ? undefined : 0
            }}
          >
            <p className="text-base text-center leading-relaxed" style={{ color: colors.tertiary }}>
              We're incredibly grateful for your trust and support. Your contribution helps us continue to grow and serve you better. We can't wait to show you what's next!
            </p>
          </div>

          <div className="flex justify-center">
            <button 
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg relative overflow-hidden ${mounted ? '' : 'opacity-0'}`}
              style={{ 
                background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
                color: colors.primary,
                animation: mounted ? 'fadeInUp 0.8s 1.4s forwards' : 'none',
                opacity: mounted ? undefined : 0,
                boxShadow: `0 4px 20px ${colors.secondary}40`
              }}
            >
              <span className="relative z-10">Continue Your Journey</span>
              <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}